import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  particleSpeed?: number;
  mouseRadius?: number;
  mouseForce?: number;
}

const ParticleField = ({
  className = "",
  particleCount = 80,
  connectionDistance = 150,
  particleSpeed = 0.5,
  mouseRadius = 100,
  mouseForce = 2,
}: ParticleFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme: currentTheme } = useTheme();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isInViewportRef = useRef(false);
  const isMouseMovingRef = useRef(false);
  const mouseMoveTimeoutRef = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useRef(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Get colors based on theme
    const getColors = () => {
      const isDark =
        currentTheme === "dark" ||
        (currentTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      return {
        particle: isDark
          ? "rgba(14, 165, 233, 0.5)"
          : "rgba(14, 165, 233, 0.4)",
        connection: isDark
          ? "rgba(14, 165, 233, 0.1)"
          : "rgba(14, 165, 233, 0.08)",
        mouseConnection: isDark
          ? "rgba(168, 85, 247, 0.3)"
          : "rgba(168, 85, 247, 0.2)",
      };
    };

    // Animation loop
    const animate = () => {
      if (prefersReducedMotion.current) {
        return;
      }

      // Only continue if still in viewport
      if (!isInViewportRef.current) {
        return;
      }

      const { particle, connection, mouseConnection } = getColors();

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update and draw particles
      particlesRef.current.forEach((p, i) => {
        // Calculate mouse repulsion
        const dxMouse = p.x - mouseRef.current.x;
        const dyMouse = p.y - mouseRef.current.y;
        const distanceToMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse,
        );

        // Apply mouse force if within radius (only when mouse is moving)
        if (
          isMouseMovingRef.current &&
          distanceToMouse < mouseRadius &&
          distanceToMouse > 0
        ) {
          const force = (1 - distanceToMouse / mouseRadius) * mouseForce;
          const angle = Math.atan2(dyMouse, dxMouse);
          p.vx += Math.cos(angle) * force * 0.05;
          p.vy += Math.sin(angle) * force * 0.05;
        }

        // Add gentle base velocity for continuous drift
        const baseSpeed = particleSpeed * 0.2;
        if (Math.abs(p.vx) < baseSpeed) {
          p.vx += (Math.random() - 0.5) * 0.01;
        }
        if (Math.abs(p.vy) < baseSpeed) {
          p.vy += (Math.random() - 0.5) * 0.01;
        }

        // Apply gentle damping for smoother motion
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        // Keep within bounds
        p.x = Math.max(0, Math.min(canvas.offsetWidth, p.x));
        p.y = Math.max(0, Math.min(canvas.offsetHeight, p.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle;
        ctx.fill();

        // Draw connections to nearby particles
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = connection;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 1 - distance / connectionDistance;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });

        // Draw connection to mouse (only when mouse is moving)
        if (
          isMouseMovingRef.current &&
          distanceToMouse < connectionDistance * 1.5
        ) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = mouseConnection;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 1 - distanceToMouse / (connectionDistance * 1.5);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Function to start animation
    const startAnimation = () => {
      if (!animationFrameRef.current && !prefersReducedMotion.current) {
        animate();
      }
    };

    // Intersection Observer to track viewport visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewportRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            startAnimation();
          } else if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = undefined;
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(canvas);

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles with better distribution
    const initParticles = () => {
      particlesRef.current = [];
      const count =
        window.innerWidth < 768 ? Math.floor(particleCount / 2) : particleCount;

      // Calculate grid dimensions for even distribution
      const cols = Math.ceil(
        Math.sqrt(count * (canvas.offsetWidth / canvas.offsetHeight)),
      );
      const rows = Math.ceil(count / cols);
      const cellWidth = canvas.offsetWidth / cols;
      const cellHeight = canvas.offsetHeight / rows;

      for (let i = 0; i < count; i++) {
        // Grid-based positioning with randomness
        const col = i % cols;
        const row = Math.floor(i / cols);

        // Random position within grid cell for natural look
        const x = col * cellWidth + Math.random() * cellWidth;
        const y = row * cellHeight + Math.random() * cellHeight;

        particlesRef.current.push({
          x: Math.max(0, Math.min(canvas.offsetWidth, x)),
          y: Math.max(0, Math.min(canvas.offsetHeight, y)),
          vx: (Math.random() - 0.5) * particleSpeed,
          vy: (Math.random() - 0.5) * particleSpeed,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    initParticles();

    // Mouse move handler - attach to canvas parent to work with pointer-events-none
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Only track if mouse is within canvas bounds
      if (
        mouseX >= 0 &&
        mouseX <= canvas.offsetWidth &&
        mouseY >= 0 &&
        mouseY <= canvas.offsetHeight
      ) {
        mouseRef.current = {
          x: mouseX,
          y: mouseY,
        };

        // Mark as moving and clear existing timeout
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }

        isMouseMovingRef.current = true;

        // Clear mouse moving state after 1 second (only affects mouse lines/force, not animation)
        mouseMoveTimeoutRef.current = window.setTimeout(() => {
          isMouseMovingRef.current = false;
        }, 1000);
      }
    };

    // Attach to parent element instead of canvas to work with pointer-events-none
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
    }

    // Check if element is currently visible and start animation
    const rect = canvas.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0;

    if (isVisible) {
      isInViewportRef.current = true;
      startAnimation();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      const parent = canvas.parentElement;
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
      }
      observer.disconnect();
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = undefined;
      }
    };
  }, [
    currentTheme,
    particleCount,
    connectionDistance,
    particleSpeed,
    mouseRadius,
    mouseForce,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticleField;

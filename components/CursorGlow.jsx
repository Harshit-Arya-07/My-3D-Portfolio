import { memo, useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const updatePosition = () => {
      frameRef.current = 0;
      el.style.transform = `translate3d(${pointerRef.current.x}px, ${pointerRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
    };

    const onMove = (e) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[2] h-[700px] w-[700px] rounded-full transform-gpu"
      style={{
        background:
          "radial-gradient(circle at center, rgba(128,77,238,0.08) 0%, rgba(100,60,230,0.04) 35%, transparent 68%)",
        transform: "translate3d(-50%, -50%, 0)",
        willChange: "transform",
      }}
    />
  );
}

export default memo(CursorGlow);

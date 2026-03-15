import { memo, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import * as THREE from "three";

function Stars(props) {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(3000 * 3);

    for (let index = 0; index < positions.length; index += 1) {
      positions[index] = (Math.random() - 0.5) * 2.4;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const SHOOTING_STARS = [
  { top: "8%",  left: "12%", delay: "2s",    dur: "1.1s" },
  { top: "22%", left: "58%", delay: "5.5s",  dur: "0.9s" },
  { top: "5%",  left: "38%", delay: "9s",    dur: "1.2s" },
  { top: "32%", left: "72%", delay: "13s",   dur: "1.0s" },
  { top: "14%", left: "83%", delay: "17s",   dur: "1.1s" },
  { top: "48%", left: "22%", delay: "21s",   dur: "0.9s" },
];

function StarBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] h-screen w-screen overflow-hidden bg-black [contain:layout_paint_style]">
      <style>{`
        @keyframes shootingStar {
          0%   { transform: rotate(215deg) translate3d(0, 0, 0); opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: rotate(215deg) translate3d(-600px, 0, 0); opacity: 0; }
        }
      `}</style>
      {SHOOTING_STARS.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: "160px",
            height: "1.5px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 40%, transparent 100%)",
            borderRadius: "999px",
            animation: `shootingStar ${s.dur} linear ${s.delay} infinite`,
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
          }}
        />
      ))}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 120 } }}
        gl={{
          outputColorSpace: THREE.SRGBColorSpace,
          alpha: false,
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default memo(StarBackground);
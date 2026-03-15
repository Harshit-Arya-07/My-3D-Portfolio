import { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-violet-400 to-blue-500"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;

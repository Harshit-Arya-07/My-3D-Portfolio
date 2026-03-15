import { memo, useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US");

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white/80"
      aria-hidden="true"
    >
      <path
        d="M2 12C3.8 7.9 7.4 5 12 5C16.6 5 20.2 7.9 22 12C20.2 16.1 16.6 19 12 19C7.4 19 3.8 16.1 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function VisitorCounter() {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadVisitors = async () => {
      try {
        const response = await fetch("/api/visitor-count");
        if (!response.ok) {
          throw new Error("Failed to load visitor count");
        }

        const data = await response.json();
        if (!cancelled) {
          setVisitors(data.totalVisitors);
        }
      } catch {
        if (!cancelled) {
          setVisitors(null);
        }
      }
    };

    loadVisitors();
    const interval = window.setInterval(loadVisitors, 300000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-7 inline-flex min-w-[210px] items-center gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-4 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl [contain:layout_paint]">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <EyeIcon />
      </div>
      <div className="leading-tight">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-white/45">
          Visitors
        </p>
        <p className="mt-1 text-2xl font-semibold text-white sm:text-[1.75rem]">
          {visitors === null ? "--" : formatter.format(visitors)}
        </p>
      </div>
    </div>
  );
}

export default memo(VisitorCounter);
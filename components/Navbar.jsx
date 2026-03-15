import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../constants";
import ThemeButton from "./ThemeButton";
import Menu from "./../public/assets/icons/menu.svg";
import Close from "./../public/assets/icons/close.svg";

const numFmt = new Intl.NumberFormat("en-US");

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M2 12C3.8 7.9 7.4 5 12 5C16.6 5 20.2 7.9 22 12C20.2 16.1 16.6 19 12 19C7.4 19 3.8 16.1 2 12Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [avatarToggle, setAvatarToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [visitors, setVisitors] = useState(null);
  const scrollFrameRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const scrolledRef = useRef(false);
  const navHiddenRef = useRef(false);

  useEffect(() => {
    document.body.style.overflowY = avatarToggle ? "hidden" : "auto";
  }, [avatarToggle]);

  useEffect(() => {
    let cancelled = false;
    const load = () =>
      fetch("/api/visitor-count")
        .then((r) => r.json())
        .then((d) => { if (!cancelled) setVisitors(d.totalVisitors ?? null); })
        .catch(() => {});
    load();
    const id = window.setInterval(load, 300000);
    return () => { cancelled = true; window.clearInterval(id); };
  }, []);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const updateScrollState = () => {
      scrollFrameRef.current = 0;

      const y = window.scrollY;
      const nextScrolled = y > 60;
      const nextHidden = y > lastScrollYRef.current && y > 80;

      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      if (nextHidden !== navHiddenRef.current) {
        navHiddenRef.current = nextHidden;
        setNavHidden(nextHidden);
      }

      lastScrollYRef.current = y;
    };

    const onScroll = () => {
      if (!scrollFrameRef.current) {
        scrollFrameRef.current = window.requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  function AvatarModal() {
    return (
      <aside
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={() => setAvatarToggle(false)}
      >
        <div
          className="relative sm:w-[460px] sm:h-[460px] xs:w-[360px] xs:h-[360px] w-[240px] h-[240px] rounded-2xl dark:bg-[#2b2b42d2] bg-[#e0eaf0] backdrop-blur-sm p-4 flex items-center justify-center modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/assets/avatar.png"
              alt="avatar"
              fill
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-cover"
            />
          </div>
          <button
            onClick={() => setAvatarToggle(false)}
            className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
          >
            <Close className="w-4 h-4" />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <>
      {avatarToggle && <AvatarModal />}

      {/* Floating glass navbar */}
      <nav className={`fixed left-1/2 z-30 w-[min(95vw,1200px)] -translate-x-1/2 transform-gpu will-change-transform transition-[top,transform] duration-500 ${scrolled ? "top-3" : "top-5"} ${navHidden ? "-translate-y-[calc(100%+28px)]" : "translate-y-0"}`}>
        {/* Pill bar */}
        <div className={`flex items-center justify-between rounded-full border px-4 backdrop-blur-2xl sm:px-6 transition-all duration-500 ${scrolled ? "border-white/15 bg-white/10 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.55)]" : "border-white/10 bg-white/5 py-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.4)]"}`}>

          {/* ── Left: avatar + name ── */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setAvatarToggle(true)}
              className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/10 hover:ring-white/30 transition-all duration-300 shrink-0"
            >
              <Image
                src="/assets/avatar.png"
                alt="Harshit Arya"
                fill
                sizes="36px"
                className="object-cover"
              />
            </button>
            <Link
              href="/"
              className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300 whitespace-nowrap hidden sm:block"
            >
              Harshit Arya
              <span className="hidden lg:inline text-white/45 font-normal">
                &nbsp;| Full Stack Developer
              </span>
            </Link>
                      <span className="hidden md:flex items-center gap-1.5 text-[0.6rem] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-1 shrink-0 select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open to work
                      </span>
          </div>

          {/* ── Centre: nav links (desktop) ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`group relative inline-block rounded-full px-4 py-2 text-[0.78rem] font-medium tracking-wide transition-all duration-300
                    ${active === nav.title
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/6"
                    }`}
                >
                  {nav.title}
                  {/* animated underline */}
                  <span
                    className={`absolute inset-x-4 bottom-[6px] h-px bg-white/70 transition-transform duration-300 origin-left
                      ${active === nav.title ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right: visitor count + theme toggle + mobile burger ── */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 select-none">
              <EyeIcon />
              <span>{visitors !== null ? numFmt.format(visitors) : "--"}</span>
            </div>
            <ThemeButton />

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={toggle}
              onClick={() => setToggle(!toggle)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 md:hidden"
            >
              {toggle ? <Close className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            toggle
              ? "pointer-events-auto mt-3 max-h-[70vh] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-[#08090f]/90 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => { setToggle(false); setActive(nav.title); }}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300
                      ${active === nav.title
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/6 hover:text-white"
                      }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* name row inside mobile menu */}
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                <Image src="/assets/avatar.png" alt="Harshit Arya" fill sizes="32px" className="object-cover" />
              </div>
              <span className="text-sm font-semibold text-white/80">Harshit Arya</span>
              <span className="ml-auto">
                <ThemeButton />
              </span>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);

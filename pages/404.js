import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 – Page Not Found | Harshit Arya</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[9rem] sm:text-[12rem] font-black bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 bg-clip-text text-transparent leading-none select-none animate-gradient-flow"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            404
          </motion.h1>

          <motion.p
            className="mt-4 text-2xl font-semibold dark:text-white/90 text-gray-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Lost in the void
          </motion.p>

          <motion.p
            className="mt-2 text-white/50 max-w-sm mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            This page doesn&apos;t exist. Let&apos;s get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow duration-300"
              >
                ← Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

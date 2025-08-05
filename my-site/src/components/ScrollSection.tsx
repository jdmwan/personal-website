'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollSection({ children }: { children: ReactNode }) {
  return (
    <section className="h-screen snap-start flex items-center justify-center px-6">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </section>
  );
}

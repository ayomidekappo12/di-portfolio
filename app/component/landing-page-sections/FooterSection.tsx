"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    setCurrentTime(
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  }, []);

  return (
    <footer id="contact" className="px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-[#161616] px-14 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[13px] text-white/80">
              <Image
                src="./clip.svg"
                alt="Email icon"
                width={16}
                height={16}
              />
              <span>nnweremizudivinefortune@gmail.com</span>
            </div>

            <p className="text-[14px] text-white/70">Lagos, Nigeria</p>

            <p className="text-[14px] text-white/70">{currentTime}</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="#"
              className="group flex items-center gap-2 text-[14px] text-white/85 transition hover:text-white"
            >
              LinkedIn
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 text-[14px] text-white/85 transition hover:text-white"
            >
              GitHub
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 text-[14px] text-white/85 transition hover:text-white"
            >
              Resume
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
        <div className="mt-14 text-[12px] text-white/30">©2025</div>
      </div>
    </footer>
  );
}

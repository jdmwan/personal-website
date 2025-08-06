'use client';

import ScrollSection from "../components/ScrollSection";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Section 1 — Intro Quote */}
      <ScrollSection>
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
            “Skill, Strategy, Fortune, Form.
          </h1>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
            Many factors influence strength.
          </h1>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
            But Victory Never lies.“
          </h1>
          <p className="text-sm text-zinc-400 italic">– Mavuika</p>
          <p className="text-sm text-gray-400 animate-bounce mt-8">Scroll down to learn more ↓</p>

        </div>
        {/* <div className="text-center bottom-auto space-y-4">
          <p>hiiiiiii</p>
        </div> */}
      </ScrollSection>

      {/* Section 2 — Real Intro */}
      <ScrollSection>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Hi, I’m Jeffrey Wan</h2>
          <p>
            Welcome to my webpage. You’ll see lots of fun projects scattered around, and learn about me bit by bit. Go to the resume page to see what I do, and scroll down for more info about me.
          </p>
          <p className="text-sm text-gray-400 animate-bounce mt-8">Scroll down to learn more ↓</p>
        </div>
      </ScrollSection>
      <ScrollSection>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About me</h2>
          <p>I’m a mechanical engineer who builds across disciplines: hardware, software, whatever it takes. I move fast, but I care deeply. Every project is a chance to solve something real and leave it better than I found it.
          </p>
        </div>
      </ScrollSection>
    </main>
  );
}

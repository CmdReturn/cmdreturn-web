"use client";

import { useState, useEffect, useCallback } from "react";

interface CommandSequence {
  command: string;
  results: string[];
}

// Prices and terms match app/offers/data.ts.
const sequences: CommandSequence[] = [
  {
    command: "> cmdreturn quote --offer spot-fix",
    results: [
      "✓ Problem scoped · not-included list attached",
      "✓ Fixed price: $450 · 2 business days",
      "✓ Waiting for your approval",
    ],
  },
  {
    command: "> cmdreturn audit ./your-ai-built-app",
    results: [
      "✓ Code, security, database, hosting, payments reviewed",
      "✓ Findings ranked Critical to Low · effort estimated",
      "✓ Fixed quote to ship · fee credited for 30 days",
    ],
  },
  {
    command: "> cmdreturn ship --to production",
    results: [
      "✓ Tests green · monitoring on · runbook written",
      "✓ Deployed to your own accounts · code is yours",
      "✓ 30-day warranty started",
    ],
  },
];

export default function Terminal() {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [visibleResults, setVisibleResults] = useState<number>(0);
  const [phase, setPhase] = useState<"typing" | "results" | "waiting">(
    "typing"
  );
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const currentSequence = sequences[sequenceIndex];

  const advanceSequence = useCallback(() => {
    setSequenceIndex((i) => (i + 1) % sequences.length);
    setDisplayedCommand("");
    setVisibleResults(0);
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase === "typing") {
      const cmd = currentSequence.command;
      if (displayedCommand.length < cmd.length) {
        const delay = 40 + Math.random() * 40;
        const timeout = setTimeout(() => {
          setDisplayedCommand(cmd.slice(0, displayedCommand.length + 1));
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("results"), 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, displayedCommand, currentSequence.command]);

  useEffect(() => {
    if (phase === "results") {
      if (visibleResults < currentSequence.results.length) {
        const timeout = setTimeout(() => {
          setVisibleResults((v) => v + 1);
        }, 300);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("waiting"), 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, visibleResults, currentSequence.results.length]);

  useEffect(() => {
    if (phase === "waiting") {
      const timeout = setTimeout(advanceSequence, 2000);
      return () => clearTimeout(timeout);
    }
  }, [phase, advanceSequence]);

  return (
    <div className="mx-auto max-w-[640px] mt-16 text-left bg-[#0A0A0A] border border-border-subtle rounded-lg p-6">
      <div className="flex gap-1.5 mb-5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>

      <div className="font-mono text-[13px] leading-[1.8]">
        <div className="text-secondary">
          {displayedCommand}
          {phase === "typing" && (
            <span
              className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-teal`}
            >
              █
            </span>
          )}
        </div>

        {currentSequence.results.slice(0, visibleResults).map((line, i) => (
          <div
            key={`${sequenceIndex}-${i}`}
            className="text-teal animate-[fadeIn_0.3s_ease-out]"
          >
            {line}
          </div>
        ))}

        {phase === "waiting" && (
          <div className="text-teal mt-1">
            {">"}{" "}
            <span
              className={`${cursorVisible ? "opacity-100" : "opacity-0"}`}
            >
              _
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

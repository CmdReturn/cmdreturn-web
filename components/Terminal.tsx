"use client";

import { useState, useEffect, useCallback } from "react";

interface CommandSequence {
  command: string;
  results: string[];
}

const sequences: CommandSequence[] = [
  {
    command: "> cmdreturn --status",
    results: [
      "✓ Inventory synced · 2 locations",
      "✓ 48 orders processed today",
      "✓ $12,480 revenue recorded",
      "✓ 6 staff active · Mississauga",
    ],
  },
  {
    command: '> cmdreturn --inventory --sku LG65C3',
    results: [
      "SKU: LG-OLED65C3 · Stock: 3 · Mississauga",
      "Last sale: 2h ago · $2,499",
      "Reorder threshold: 2 · Status: ORDER",
    ],
  },
  {
    command: "> cmdreturn --customer --id JB-0142",
    results: [
      "Jamie Banfield · Trade Account",
      "Lifetime: $18,420 · Orders: 14",
      "Discount: 10% · Status: ACTIVE",
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
        setPhase("waiting");
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
    <div className="mx-auto max-w-[640px] mt-16 bg-[#0A0A0A] border border-border-subtle rounded-lg p-6">
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

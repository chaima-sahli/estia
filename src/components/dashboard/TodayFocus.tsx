"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const defaultTasks = [
  "Complete deep work block",
  "Review project roadmap",
  "Daily movement",
];

export default function TodayFocus() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);

  const completed = checked.filter(Boolean).length;
  const percentage = Math.round((completed / checked.length) * 100);

  function toggle(i: number) {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  return (
    <div
      className='card'
      style={{
        marginBottom: "1.5rem",
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
      }}
    >
      {/* Left — tasks */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--color-warm-gray)",
            marginBottom: "1rem",
          }}
        >
          {`Today's Focus`}
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {defaultTasks.map((task, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: checked[i]
                    ? "2px solid var(--color-terracotta)"
                    : "2px solid var(--color-warm-border)",
                  backgroundColor: checked[i]
                    ? "var(--color-terracotta)"
                    : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                {checked[i] && (
                  <Check size={11} color='white' strokeWidth={3} />
                )}
              </div>
              <span
                style={{
                  fontSize: "0.9375rem",
                  color: checked[i]
                    ? "var(--color-warm-gray)"
                    : "var(--color-warm-charcoal)",
                  textDecoration: checked[i] ? "line-through" : "none",
                  transition: "all 0.2s",
                }}
              >
                {task}
              </span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "0.8125rem",
            fontStyle: "italic",
            fontFamily: "var(--font-playfair)",
            color: "var(--color-warm-gray)",
          }}
        >
          `The secret of getting ahead is getting started.`
        </p>
      </div>

      {/* Right — progress ring */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          flexShrink: 0,
        }}
      >
        <svg width='120' height='120' viewBox='0 0 120 120'>
          <circle
            cx='60'
            cy='60'
            r='50'
            fill='none'
            stroke='var(--color-warm-border)'
            strokeWidth='8'
          />
          <circle
            cx='60'
            cy='60'
            r='50'
            fill='none'
            stroke='var(--color-terracotta)'
            strokeWidth='8'
            strokeLinecap='round'
            strokeDasharray={`${2 * Math.PI * 50}`}
            strokeDashoffset={`${2 * Math.PI * 50 * (1 - percentage / 100)}`}
            transform='rotate(-90 60 60)'
            style={{ transition: "stroke-dashoffset 0.4s ease" }}
          />
          <text
            x='60'
            y='56'
            textAnchor='middle'
            fontSize='22'
            fontWeight='500'
            fill='var(--color-warm-charcoal)'
          >
            {percentage}%
          </text>
          <text
            x='60'
            y='74'
            textAnchor='middle'
            fontSize='11'
            fill='var(--color-warm-gray)'
          >
            weekly
          </text>
        </svg>
        <p style={{ fontSize: "0.75rem", color: "var(--color-warm-gray)" }}>
          Progress
        </p>
      </div>
    </div>
  );
}

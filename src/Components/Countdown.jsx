// Components/Countdown.jsx
import React, { useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

const pop = keyframes`
  0%   { transform: translateY(2px) scale(0.98); opacity: .85; }
  60%  { transform: translateY(0)    scale(1.02); opacity: 1; }
  100% { transform: translateY(0)    scale(1.00); opacity: 1; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(90px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 840px;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(110px, 1fr));
    gap: 12px;
  }
`;

const Block = styled.div`
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.35);
  border-radius: 14px;
  padding: 14px 12px;
  text-align: center;
  backdrop-filter: blur(4px);
`;

const Value = styled.div`
  font-variant-numeric: tabular-nums;
  font-weight: 800;
  font-size: clamp(28px, 6vw, 48px);
  line-height: 1;
  color: #fff;
  animation: ${pop} 350ms ease-out;
`;

const Label = styled.div`
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d6e6fa;
  opacity: 0.9;
`;

const DoneText = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: clamp(18px, 3.5vw, 22px);
  padding: 8px 0;
`;

function pad2(n) {
  return String(n).padStart(2, "0");
}

function diffParts(targetMs, nowMs) {
  let ms = Math.max(0, targetMs - nowMs);
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  ms -= days * 24 * 60 * 60 * 1000;
  const hours = Math.floor(ms / (60 * 60 * 1000));
  ms -= hours * 60 * 60 * 1000;
  const minutes = Math.floor(ms / (60 * 1000));
  ms -= minutes * 60 * 1000;
  const seconds = Math.floor(ms / 1000);
  return { days, hours, minutes, seconds, done: targetMs <= nowMs };
}

/**
 * Props:
 * - targetDate: Date | string (ISO recommended, e.g. "2026-04-15T09:00:00-04:00")
 * - doneMessage?: string
 */
export default function Countdown({ targetDate, doneMessage = "We’re live!" }) {
  const targetMs = useMemo(
    () => (targetDate instanceof Date ? targetDate : new Date(targetDate)).getTime(),
    [targetDate]
  );

  const [now, setNow] = useState(() => Date.now());
  const t = useMemo(() => diffParts(targetMs, now), [targetMs, now]);

  useEffect(() => {
    // tick on the second boundary for smooth rollovers
    const tick = () => setNow(Date.now());
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (Number.isNaN(targetMs)) {
    return <DoneText>Invalid target date</DoneText>;
  }

  if (t.done) {
    return <DoneText>{doneMessage}</DoneText>;
  }

  return (
    <Grid role="timer" aria-live="polite">
      <Block>
        <Value key={t.days}>{t.days}</Value>
        <Label>{t.days === 1 ? "Day" : "Days"}</Label>
      </Block>
      <Block>
        <Value key={t.hours}>{pad2(t.hours)}</Value>
        <Label>Hours</Label>
      </Block>
      <Block>
        <Value key={t.minutes}>{pad2(t.minutes)}</Value>
        <Label>Minutes</Label>
      </Block>
      <Block>
        <Value key={t.seconds}>{pad2(t.seconds)}</Value>
        <Label>Seconds</Label>
      </Block>
    </Grid>
  );
}

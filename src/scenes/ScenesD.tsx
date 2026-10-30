import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";
import { FAMILY } from "../fonts";
import { Can } from "../components/Can";
import { BlackPill, WhiteBlock } from "../components/WhiteBlock";
import { Cursor, Magnifier, PlusCircle } from "../components/Icons";
import { popIn, progress, riseIn } from "../anim";

// S11 · view
export const SceneView: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...popIn(frame, 2, 10) }}>
      <span style={{ fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 110, color: COLORS.ink }}>view</span>
    </AbsoluteFill>
  );
};

// S12 · BABY 大字母散开
export const SceneBaby: React.FC = () => {
  const frame = useCurrentFrame();
  const letters = ["B", "A", "B", "Y"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 8 }}>
        {letters.map((ch, i) => {
          const p = progress(frame, i * 3, 8);
          return (
            <span
              key={i}
              style={{
                fontFamily: FAMILY.sans,
                fontWeight: 700,
                fontSize: 150,
                color: COLORS.ink,
                opacity: p,
                transform: `rotate(${(1 - p) * -20}deg) translateY(${(1 - p) * 60}px)`,
              }}
            >
              {ch}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// S13 · 呼应开场 i can't
export const SceneICanAgain: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, ...popIn(frame, 2, 10) }}>
        <span style={{ fontFamily: FAMILY.serif, fontStyle: "italic", fontSize: 140, color: COLORS.ink }}>i</span>
        <Can width={110} />
        <span style={{ fontFamily: FAMILY.serif, fontStyle: "italic", fontSize: 100, color: COLORS.ink }}>n’t</span>
      </div>
    </AbsoluteFill>
  );
};

// S14 · focus + 图标 + ON
export const SceneFocusOn: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <span style={{ position: "absolute", left: -64, top: -44, ...popIn(frame, 2) }}>
          <Cursor size={54} />
        </span>
        <span style={{ position: "absolute", left: -50, top: -34, ...popIn(frame, 4) }}>
          <Magnifier size={58} />
        </span>
        <span style={{ fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 110, color: COLORS.ink, ...riseIn(frame, 0) }}>
          focus
        </span>
        <span style={{ position: "absolute", right: -28, top: -38, ...popIn(frame, 6) }}>
          <PlusCircle size={60} />
        </span>
        <span
          style={{
            position: "absolute",
            right: -40,
            bottom: -34,
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: `3px solid ${COLORS.ink}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FAMILY.sans,
            fontWeight: 700,
            fontSize: 22,
            ...popIn(frame, 8),
          }}
        >
          ON
        </span>
      </div>
    </AbsoluteFill>
  );
};

// S15 · Any {} + on
export const SceneAnyOn: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...popIn(frame, 2, 10) }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 90, color: COLORS.ink }}>Any</span>
        <span style={{ fontFamily: FAMILY.sans, fontSize: 90, color: COLORS.ink }}>{`{ }`}</span>
      </div>
      <span
        style={{
          position: "absolute",
          bottom: 200,
          fontFamily: FAMILY.serif,
          fontStyle: "italic",
          fontSize: 56,
          opacity: progress(frame, 12, 8),
        }}
      >
        on
      </span>
    </AbsoluteFill>
  );
};

// S16 · 人名标签 + change
const NAMES = ["ian", "jiwoo", "yuh", "ye-on", "juun", "can", "stella"];
const NAME_POS = [
  { left: 480, top: 360, rot: -3 },
  { left: 580, top: 366, rot: 2 },
  { left: 710, top: 358, rot: -2 },
  { left: 400, top: 440, rot: 2 },
  { left: 530, top: 446, rot: -2 },
  { left: 650, top: 438, rot: 3 },
  { left: 750, top: 444, rot: -3 },
];
export const SceneNames: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 130, color: COLORS.ink, opacity: 0.12 }}>
          change
        </span>
      </AbsoluteFill>
      {NAMES.map((n, i) => (
        <div key={i} style={{ position: "absolute", ...NAME_POS[i], ...popIn(frame, 4 + i * 2, 7) }}>
          <BlackPill text={n} fontSize={26} style={{ rotate: `${NAME_POS[i].rot}deg` }} />
        </div>
      ))}
    </AbsoluteFill>
  );
};

// S17 · focus: 署名
export const SceneFocusCredit: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...popIn(frame, 2, 10) }}>
      <span style={{ fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 110, color: COLORS.ink }}>focus:</span>
      <span style={{ position: "absolute", marginTop: 150, fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 26 }}>
        kinetic typography by noel
      </span>
    </AbsoluteFill>
  );
};

// S18 · 结尾方块 + 署名
export const SceneSignoff: React.FC = () => {
  const frame = useCurrentFrame();
  const label = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ ...popIn(frame, 2, 10) }}>
        <WhiteBlock size={120} label={<span style={{ fontSize: 40 }}>*</span>} />
      </div>
      <span
        style={{
          position: "absolute",
          marginTop: 200,
          fontFamily: FAMILY.sans,
          fontWeight: 700,
          fontSize: 32,
          opacity: label,
        }}
      >
        @mosyvenboy
      </span>
    </AbsoluteFill>
  );
};

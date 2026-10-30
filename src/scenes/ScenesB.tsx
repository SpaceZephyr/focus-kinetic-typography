import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";
import { FAMILY } from "../fonts";
import { DotMatrix } from "../components/DotMatrix";
import { Folder } from "../components/Folder";
import { FocusTag } from "../components/FocusTag";
import { RingText } from "../components/RingText";
import { WhiteBlock } from "../components/WhiteBlock";
import { Asterisk, Cursor, Hand, Magnifier, PlusCircle } from "../components/Icons";
import { popIn, progress, riseIn } from "../anim";

// S4 · 圆点拼字 BUT YOU BABY
export const SceneDots: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: -40, top: 60, ...popIn(frame, 0) }}>
        <Folder width={120} />
      </div>
      <div style={{ position: "absolute", right: -30, top: 120, ...popIn(frame, 2) }}>
        <Folder width={130} />
      </div>
      <div style={{ position: "absolute", left: 40, top: 30, ...popIn(frame, 1) }}>
        <FocusTag fontSize={40} />
      </div>
      <div style={{ position: "absolute", right: 50, bottom: 70, ...popIn(frame, 3) }}>
        <FocusTag fontSize={40} />
      </div>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...popIn(frame, 5, 12) }}>
        <DotMatrix rows={["BUTYOU", "BABY"]} dotSize={62} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// S5 · 环形文字旋转
const RING_TEXT = "sucoftonacl.sucoftonacl.";
export const SceneRing: React.FC = () => {
  const frame = useCurrentFrame();
  const rot = frame * 4;
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 900, height: 900, ...popIn(frame, 0, 10) }}>
        <RingText id="r1" text={RING_TEXT.repeat(2)} radius={420} fontSize={46} rotate={rot} />
        <RingText id="r2" text={RING_TEXT.repeat(2)} radius={300} fontSize={40} rotate={-rot} reverse />
        <RingText id="r3" text={RING_TEXT} radius={190} fontSize={32} rotate={rot * 1.4} />
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <WhiteBlock size={150} label={<span style={{ fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 26, textAlign: "center", lineHeight: 1.1 }}>mosyen<br />boy.</span>} />
        </AbsoluteFill>
      </div>
    </AbsoluteFill>
  );
};

// S6 · focus + 鼠标/放大镜/十字
export const SceneFocusIcons: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <span style={{ position: "absolute", left: -70, top: -50, ...popIn(frame, 2) }}>
          <Cursor size={58} />
        </span>
        <span style={{ position: "absolute", left: -55, top: -40, ...popIn(frame, 4) }}>
          <Magnifier size={64} />
        </span>
        <span style={{ fontFamily: FAMILY.sans, fontWeight: 700, fontSize: 120, color: COLORS.ink, ...riseIn(frame, 0, 10) }}>
          focus
        </span>
        <span style={{ position: "absolute", right: -30, top: -40, ...popIn(frame, 6) }}>
          <PlusCircle size={66} />
        </span>
      </div>
    </AbsoluteFill>
  );
};

// S7 · Anything 故障横向模糊
export const SceneGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const blur = interpolate(frame, [0, 8, 22, 30], [20, 6, 6, 0], { extrapolateRight: "clamp" });
  const shake = interpolate(Math.sin(frame * 1.7) * progress(frame, 0, 8), [0, 1], [0, 1]);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <span
        style={{
          fontFamily: FAMILY.sans,
          fontWeight: 700,
          fontSize: 120,
          color: COLORS.ink,
          filter: `blur(${blur}px)`,
          transform: `translateX(${shake * 6}px)`,
        }}
      >
        Anything
      </span>
    </AbsoluteFill>
  );
};

// S8 · 星号 + 花括号手指
export const SceneAsterisk: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 24, ...popIn(frame, 2, 10) }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ fontFamily: FAMILY.sans, fontSize: 70 }}>{`{`}</span>
        <Hand size={64} />
        <span style={{ fontFamily: FAMILY.sans, fontSize: 70 }}>{`}`}</span>
      </div>
      <div style={{ position: "absolute", top: 200, ...popIn(frame, 0) }}>
        <Asterisk size={44} />
      </div>
    </AbsoluteFill>
  );
};

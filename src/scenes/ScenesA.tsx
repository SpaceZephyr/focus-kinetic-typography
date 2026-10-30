import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../theme";
import { FAMILY } from "../fonts";
import { Can } from "../components/Can";
import { Folder } from "../components/Folder";
import { FocusTag } from "../components/FocusTag";
import { popIn, riseIn } from "../anim";

// S1 · 开场 "i [can] n't"
export const SceneICan: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // 圆柱下落弹跳
  const drop = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.9 },
  });
  const canY = interpolate(drop, [0, 1], [-180, 0]);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <span style={{ fontFamily: FAMILY.serif, fontStyle: "italic", fontSize: 150, color: COLORS.ink, ...riseIn(frame, 2) }}>
          i
        </span>
        <div style={{ transform: `translateY(${canY}px)` }}>
          <Can width={120} />
        </div>
        <span style={{ fontFamily: FAMILY.serif, fontStyle: "italic", fontSize: 110, color: COLORS.ink, ...riseIn(frame, 6) }}>
          n’t
        </span>
      </div>
    </AbsoluteFill>
  );
};

// S2 · 文件夹 + 照片 + focus 选中
const FOLDER_POS = [
  { x: 90, y: 300, w: 130, d: 0 },
  { x: 470, y: 120, w: 150, d: 2 },
  { x: 1080, y: 320, w: 140, d: 4 },
  { x: 300, y: 620, w: 135, d: 3 },
  { x: 900, y: 640, w: 125, d: 5 },
];
const PHOTO_POS = [
  { x: 240, y: 200, n: 63 },
  { x: 1040, y: 150, n: 8 },
  { x: 230, y: 600, n: 33 },
  { x: 880, y: 600, n: 63 },
];
export const SceneFolders: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      {FOLDER_POS.map((f, i) => (
        <div key={i} style={{ position: "absolute", left: f.x, top: f.y, ...popIn(frame, f.d, 10) }}>
          <Folder width={f.w} />
        </div>
      ))}
      {PHOTO_POS.map((p, i) => (
        <div key={i} style={{ position: "absolute", left: p.x, top: p.y, ...popIn(frame, 4 + i, 9) }}>
          <PhotoBadge n={p.n} />
        </div>
      ))}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...popIn(frame, 8, 10) }}>
        <FocusTag fontSize={64} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const PhotoBadge: React.FC<{ n: number }> = ({ n }) => (
  <div style={{ position: "relative" }}>
    <div
      style={{
        width: 96,
        height: 96,
        borderRadius: 6,
        background: "linear-gradient(135deg,#3a3a44,#1c1c22)",
        boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: -12,
        right: -12,
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: COLORS.ink,
        color: COLORS.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FAMILY.sans,
        fontWeight: 700,
        fontSize: 18,
      }}
    >
      {n}
    </div>
  </div>
);

// S3 · "any thing" 衬线斜体
export const SceneAnythingSerif: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...popIn(frame, 2, 12) }}>
      <div style={{ fontFamily: FAMILY.serif, fontStyle: "italic", color: COLORS.ink, lineHeight: 0.95, textAlign: "center" }}>
        <div style={{ fontSize: 120 }}>any</div>
        <div style={{ fontSize: 120, marginTop: -10 }}>thing</div>
      </div>
    </AbsoluteFill>
  );
};

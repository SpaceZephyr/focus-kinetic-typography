import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";
import { FAMILY } from "../fonts";
import { Folder } from "../components/Folder";
import { popIn, progress } from "../anim";

// S9 · 韩文 초점 + 文件夹
export const SceneChojum: React.FC = () => {
  const frame = useCurrentFrame();
  const showFolders = progress(frame, 24, 8);
  const wordOut = interpolate(frame, [22, 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const folderPos = [
    { x: 120, y: 120, w: 120, r: -8 },
    { x: 560, y: 180, w: 150, r: 6 },
    { x: 1050, y: 140, w: 100, r: -5 },
    { x: 200, y: 620, w: 140, r: 7 },
    { x: 980, y: 600, w: 130, r: -7 },
    { x: 620, y: 560, w: 160, r: 3 },
  ];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: wordOut }}>
        <div style={{ display: "flex", alignItems: "baseline", ...popIn(frame, 2, 10) }}>
          <span style={{ fontFamily: FAMILY.kr, fontWeight: 900, fontSize: 150, color: COLORS.ink }}>초</span>
          <span style={{ fontFamily: FAMILY.kr, fontWeight: 400, fontSize: 130, color: "#b8b8bc", marginLeft: 8 }}>점</span>
        </div>
      </AbsoluteFill>
      {showFolders > 0 &&
        folderPos.map((f, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: f.x,
              top: f.y,
              opacity: showFolders,
              transform: `rotate(${f.r}deg) scale(${0.7 + showFolders * 0.3})`,
            }}
          >
            <Folder width={f.w} />
          </div>
        ))}
      {showFolders > 0 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: showFolders }}>
          <div
            style={{
              background: COLORS.white,
              borderRadius: 30,
              padding: "14px 34px",
              fontFamily: FAMILY.kr,
              fontWeight: 700,
              fontSize: 34,
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            }}
          >
            흐릿한
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// S10 · 超大韩文黑白方块
export const SceneKrBlocks: React.FC = () => {
  const frame = useCurrentFrame();
  const p = progress(frame, 0, 10);
  const chars = ["포", "커", "스"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 10, transform: `scale(${0.8 + p * 0.2})`, opacity: p }}>
        {chars.map((ch, i) => (
          <div
            key={i}
            style={{
              width: 280,
              height: 380,
              background: i % 2 === 0 ? COLORS.ink : COLORS.white,
              color: i % 2 === 0 ? COLORS.white : COLORS.ink,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FAMILY.kr,
              fontWeight: 900,
              fontSize: 260,
              boxShadow: i % 2 === 1 ? "inset 0 0 0 6px #000" : "none",
            }}
          >
            {ch}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

import React from "react";
import { COLORS } from "../theme";

// 白色圆角 3D 方块（参考视频结尾的键帽/方块）
export const WhiteBlock: React.FC<{
  size?: number;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ size = 110, label, style }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.18,
        background: `linear-gradient(150deg,#ffffff 0%,#f0f0f2 70%,#dcdce0 100%)`,
        boxShadow:
          "inset 0 2px 3px rgba(255,255,255,0.9), 0 12px 20px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {label}
    </div>
  );
};

// 黑色圆角标签（人名标签）
export const BlackPill: React.FC<{
  text: string;
  fontSize?: number;
  style?: React.CSSProperties;
}> = ({ text, fontSize = 26, style }) => (
  <div
    style={{
      background: COLORS.ink,
      color: COLORS.white,
      fontFamily: "Bricolage",
      fontWeight: 700,
      fontSize,
      padding: `${fontSize * 0.35}px ${fontSize * 0.7}px`,
      borderRadius: 8,
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {text}
  </div>
);

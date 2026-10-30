import React from "react";
import { COLORS } from "../theme";
import { FAMILY } from "../fonts";

// 文本选中状态的 focus 标签：浅蓝底 + 蓝色边框 + 两个圆形控制点
export const FocusTag: React.FC<{
  fontSize?: number;
  style?: React.CSSProperties;
}> = ({ fontSize = 56, style }) => {
  return (
    <div style={{ position: "relative", display: "inline-block", ...style }}>
      <div
        style={{
          fontFamily: FAMILY.sans,
          fontWeight: 700,
          fontSize,
          color: COLORS.ink,
          background: COLORS.selectFill,
          border: `2px solid ${COLORS.select}`,
          padding: `2px ${fontSize * 0.18}px`,
          lineHeight: 1.1,
        }}
      >
        focus
      </div>
      <Dot pos={{ top: -7, left: -7 }} />
      <Dot pos={{ bottom: -7, right: -7 }} />
    </div>
  );
};

const Dot: React.FC<{ pos: React.CSSProperties }> = ({ pos }) => (
  <div
    style={{
      position: "absolute",
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: COLORS.select,
      ...pos,
    }}
  />
);

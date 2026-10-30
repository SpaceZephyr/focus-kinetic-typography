import React from "react";
import { COLORS } from "../theme";

// 用 CSS 渐变模拟的金属圆柱（参考视频里的 "can"，3D 易拉罐/硬盘）
export const Can: React.FC<{
  width?: number;
  style?: React.CSSProperties;
}> = ({ width = 120, style }) => {
  const h = width * 1.35;
  return (
    <div
      style={{
        width,
        height: h,
        position: "relative",
        ...style,
      }}
    >
      {/* 圆柱身体 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width,
          height: h - width * 0.18,
          borderRadius: `${width * 0.12}px`,
          background:
            "repeating-linear-gradient(180deg,#d9d9dc 0px,#d9d9dc 3px,#b9b9be 4px,#cfcfd3 7px),linear-gradient(90deg,#8f8f96 0%,#e8e8eb 22%,#f7f7f8 48%,#a8a8af 78%,#7c7c83 100%)",
          backgroundBlendMode: "multiply",
          boxShadow:
            "inset 8px 0 10px rgba(0,0,0,0.22), inset -8px 0 12px rgba(0,0,0,0.28)",
        }}
      />
      {/* 顶部椭圆 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          width,
          height: width * 0.28,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 50% 45%,#f4f4f5 0%,#c4c4c9 60%,#8f8f96 100%)",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.25)",
        }}
      />
      {/* 顶部中心小圆 */}
      <div
        style={{
          position: "absolute",
          top: width * 0.07,
          left: width * 0.39,
          width: width * 0.22,
          height: width * 0.14,
          borderRadius: "50%",
          background: COLORS.white,
          opacity: 0.85,
        }}
      />
    </div>
  );
};

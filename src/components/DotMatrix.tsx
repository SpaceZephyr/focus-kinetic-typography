import React from "react";
import { COLORS } from "../theme";
import { FAMILY } from "../fonts";

// 黑色圆点拼字（参考视频里的 "BUT YOU BABY"）
export const DotMatrix: React.FC<{
  rows: string[];
  dotSize?: number;
  gap?: number;
  style?: React.CSSProperties;
}> = ({ rows, dotSize = 58, gap = 4, style }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap, ...style }}>
      {rows.map((row, ri) => (
        <div key={ri} style={{ display: "flex", gap }}>
          {row.split("").map((ch, ci) => (
            <div
              key={ci}
              style={{
                width: dotSize,
                height: dotSize,
                borderRadius: "50%",
                background: COLORS.ink,
                color: COLORS.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FAMILY.sans,
                fontWeight: 700,
                fontSize: dotSize * 0.42,
              }}
            >
              {ch}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

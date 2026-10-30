import React from "react";
import { COLORS } from "../theme";
import { FAMILY } from "../fonts";

// 环形文字（参考视频里多层同心圆旋转的字符）
export const RingText: React.FC<{
  text: string;
  radius: number;
  fontSize?: number;
  reverse?: boolean;
  rotate: number; // 当前旋转角度（度）
  id: string;
}> = ({ text, radius, fontSize = 34, reverse = false, rotate, id }) => {
  const d = 2 * radius;
  return (
    <svg
      width={d}
      height={d}
      viewBox={`0 0 ${d} ${d}`}
      style={{
        position: "absolute",
        transform: `rotate(${rotate}deg) ${reverse ? "scale(-1,1)" : ""}`,
      }}
    >
      <defs>
        <path
          id={id}
          d={`M ${radius},${radius} m -${radius},0 a ${radius},${radius} 0 1,1 ${d},0 a ${radius},${radius} 0 1,1 -${d},0`}
          fill="none"
        />
      </defs>
      <text
        fontFamily={FAMILY.sans}
        fontWeight={700}
        fontSize={fontSize}
        fill={COLORS.ink}
        letterSpacing="2"
      >
        <textPath
          href={`#${id}`}
          textLength={2 * Math.PI * radius}
          lengthAdjust="spacingAndGlyphs"
        >
          {text}
        </textPath>
      </text>
    </svg>
  );
};

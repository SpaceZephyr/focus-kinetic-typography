import React from "react";
import { COLORS } from "../theme";

type IconProps = { size?: number; style?: React.CSSProperties };

// 像素风格鼠标指针
export const Cursor: React.FC<IconProps> = ({ size = 64, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <path
      d="M5 2l14 8-6 1.5L16 20l-3 1-3-8-5 4z"
      fill={COLORS.ink}
      stroke={COLORS.white}
      strokeWidth="1.2"
    />
  </svg>
);

// 放大镜
export const Magnifier: React.FC<IconProps> = ({ size = 64, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <circle
      cx="10"
      cy="10"
      r="6.5"
      fill="none"
      stroke={COLORS.ink}
      strokeWidth="2.2"
    />
    <line
      x1="15"
      y1="15"
      x2="21"
      y2="21"
      stroke={COLORS.ink}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

// 十字圆
export const PlusCircle: React.FC<IconProps> = ({ size = 64, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <circle cx="12" cy="12" r="11" fill={COLORS.ink} />
    <line x1="12" y1="6" x2="12" y2="18" stroke={COLORS.white} strokeWidth="2.6" />
    <line x1="6" y1="12" x2="18" y2="12" stroke={COLORS.white} strokeWidth="2.6" />
  </svg>
);

// 手指（点击）
export const Hand: React.FC<IconProps> = ({ size = 56, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <path
      d="M9 11V5.5a1.5 1.5 0 013 0V10m0-1.5V6a1.5 1.5 0 013 0v4m0-1a1.5 1.5 0 013 0v5a6 6 0 01-6 6h-1.5a6 6 0 01-4.6-2.2L4 15.5a1.6 1.6 0 012.4-2L9 15"
      fill="none"
      stroke={COLORS.ink}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 星号
export const Asterisk: React.FC<IconProps> = ({ size = 40, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <path
      d="M12 3v18M4 7l16 10M20 7L4 17"
      stroke={COLORS.ink}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

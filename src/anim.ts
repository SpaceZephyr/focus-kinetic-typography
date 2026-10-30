import { Easing, interpolate } from "remotion";
import { EASE_OUT } from "./theme";

const bez = (e: readonly number[]) =>
  Easing.bezier(e[0], e[1], e[2], e[3]);

// 入场：淡入 + 向上位移
export const riseIn = (
  frame: number,
  start: number,
  dur = 12,
  distance = 40,
): React.CSSProperties => {
  const p = interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: bez(EASE_OUT),
  });
  return {
    opacity: p,
    transform: `translateY(${(1 - p) * distance}px)`,
  };
};

// 入场：淡入 + 缩放
export const popIn = (
  frame: number,
  start: number,
  dur = 10,
  from = 0.6,
): React.CSSProperties => {
  const p = interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: bez(EASE_OUT),
  });
  return {
    opacity: p,
    transform: `scale(${from + (1 - from) * p})`,
  };
};

// 出场：淡出
export const fadeOut = (frame: number, start: number, dur = 8) =>
  interpolate(frame, [start, start + dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

// 简单 0->1 进度
export const progress = (frame: number, start: number, dur: number) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: bez(EASE_OUT),
  });

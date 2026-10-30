// 配色（取自参考视频逐帧采样）
export const COLORS = {
  bg: "#F4F2F3",
  ink: "#000000",
  folder: "#54C7EA",
  folderDark: "#3BA9D4",
  folderLight: "#7ED9F2",
  select: "#2E9BFF",
  selectFill: "rgba(46,155,255,0.28)",
  white: "#FFFFFF",
};

// 画布尺寸（参考视频 702×494 的精确 2 倍，比例 1.421）
export const WIDTH = 1404;
export const HEIGHT = 988;
export const FPS = 30;
export const DURATION = 540; // 18s

// 通用缓动
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

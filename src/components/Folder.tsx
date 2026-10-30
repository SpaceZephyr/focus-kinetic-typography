import React from "react";
import { COLORS } from "../theme";

// 用 CSS 渐变模拟的 3D 文件夹（参考视频里的浅蓝色立体文件夹）
export const Folder: React.FC<{
  width?: number;
  style?: React.CSSProperties;
}> = ({ width = 150, style }) => {
  const tabW = width * 0.42;
  const tabH = width * 0.16;
  const bodyH = width * 0.78;
  return (
    <div style={{ width, position: "relative", ...style }}>
      {/* 顶部小舌 */}
      <div
        style={{
          width: tabW,
          height: tabH,
          marginLeft: width * 0.08,
          background: `linear-gradient(180deg, ${COLORS.folderLight} 0%, ${COLORS.folder} 100%)`,
          borderRadius: `${width * 0.06}px ${width * 0.06}px 0 0`,
          boxShadow: "inset 0 2px 2px rgba(255,255,255,0.5)",
        }}
      />
      {/* 主体 */}
      <div
        style={{
          width,
          height: bodyH,
          background: `linear-gradient(160deg, ${COLORS.folderLight} 0%, ${COLORS.folder} 45%, ${COLORS.folderDark} 100%)`,
          borderRadius: `${width * 0.05}px ${width * 0.1}px ${width * 0.08}px ${width * 0.08}px`,
          boxShadow:
            "inset 0 3px 4px rgba(255,255,255,0.45), inset 0 -8px 12px rgba(0,0,0,0.12), 0 10px 18px rgba(20,120,160,0.18)",
        }}
      />
    </div>
  );
};

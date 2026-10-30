# Focus · Kinetic Typography（Remotion 复刻）

用 [Remotion](https://www.remotion.dev/) 以纯代码方式复刻的一段 18 秒 kinetic typography（动态文字排版）短片。作品围绕英文单词 **focus** 与韩文 **초점 / 포커스** 做文字游戏，用衬线 / 无衬线 / 韩文字体、圆点拼字、环形文字、运动模糊与图形元素，配合背景音乐节奏快速切换。

- 画布：1404 × 988（参考素材 702 × 494 的精确 2 倍，比例 1.421）
- 帧率：30 fps
- 时长：540 帧（18 秒）
- 共 18 个场景，用 `<Sequence>` 串联

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 启动 Remotion Studio 预览（可在浏览器中逐帧查看）
```

## 渲染

```bash
# 渲染为 MP4（H.264）
npx remotion render FocusKineticTypography out/focus.mp4 --codec=h264

# 渲染单帧静态图（--frame 指定帧号）
npx remotion still FocusKineticTypography out/frame.png --frame=126
```

渲染产物默认输出到 `out/`。首次运行会自动下载 Remotion 所需的 headless Chromium。

## 目录结构

```
src/
  Composition.tsx        # 主 Composition：场景时间线 + 音频 + 字体等待
  Root.tsx               # 注册入口
  fonts.ts               # 本地字体加载（@remotion/fonts）
  theme.ts               # 配色、尺寸、时长等常量
  anim.ts                # 入场 / 出场动画辅助
  components/            # 可复用视觉组件
    Folder.tsx           # 3D 风格文件夹（CSS 渐变）
    Can.tsx              # 金属圆柱（"can"，CSS 渐变）
    FocusTag.tsx         # 文本选中状态的 focus 标签
    DotMatrix.tsx        # 黑色圆点拼字
    RingText.tsx         # 环形旋转文字（SVG textPath）
    WhiteBlock.tsx       # 白色圆角方块 / 黑色标签
    Icons.tsx            # 鼠标、放大镜、十字、手指、星号等图标
  scenes/                # 18 个场景，按段落分 4 个文件
    ScenesA.tsx          # 场景 1–3
    ScenesB.tsx          # 场景 4–8
    ScenesC.tsx          # 场景 9–10
    ScenesD.tsx          # 场景 11–18
public/
  fonts/                 # 本地字体文件（OFL）
  audio/bgm.m4a          # 背景音乐
```

## 字体

所有字体均为 SIL Open Font License（OFL）开源字体，已随仓库打包以保证跨平台可复现：

| 字体 | 用途 |
| --- | --- |
| Bricolage Grotesque | 无衬线粗体（focus / view / Anything 等） |
| Crimson Pro | 衬线及斜体（any thing / i 等） |
| Noto Sans KR | 韩文（초점 / 포커스，可变字体） |

各字体的 OFL 许可文本见 `public/fonts/` 下对应的 `*-OFL.txt`。

## 说明

本项目为动态排版的技术复刻练习，画面中的 3D 元素（文件夹、金属圆柱、白色方块）均使用 CSS 渐变与 SVG 重新绘制，未使用原始素材文件。

import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// 无衬线主字体（Bricolage Grotesque，OFL）：承担 focus / view / Anything 等粗体排版
export const loadBricolage = () =>
  Promise.all([
    loadFont({
      family: "Bricolage",
      url: staticFile("fonts/BricolageGrotesque-Regular.ttf"),
      weight: "400",
    }),
    loadFont({
      family: "Bricolage",
      url: staticFile("fonts/BricolageGrotesque-Bold.ttf"),
      weight: "700",
    }),
  ]);

// 衬线字体（Crimson Pro，OFL）：承担 any thing / i 等斜体衬线排版
export const loadCrimson = () =>
  Promise.all([
    loadFont({
      family: "Crimson",
      url: staticFile("fonts/CrimsonPro-Regular.ttf"),
      weight: "400",
    }),
    loadFont({
      family: "Crimson",
      url: staticFile("fonts/CrimsonPro-Italic.ttf"),
      weight: "400",
      style: "italic",
    }),
  ]);

// 韩文字体（Noto Sans KR 可变字体，OFL）：承担 초점 / 韩文方块
export const loadNotoKR = () =>
  loadFont({
    family: "NotoKR",
    url: staticFile("fonts/NotoSansKR-VF.ttf"),
  });

export const fontsPromise = Promise.all([
  loadBricolage(),
  loadCrimson(),
  loadNotoKR(),
]);

export const FAMILY = {
  sans: "Bricolage",
  serif: "Crimson",
  kr: "NotoKR",
};

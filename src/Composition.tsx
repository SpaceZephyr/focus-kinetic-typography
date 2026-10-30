import React from "react";
import {
  AbsoluteFill,
  Composition,
  Sequence,
  continueRender,
  delayRender,
  staticFile,
} from "remotion";
import { Audio } from "@remotion/media";
import { COLORS, DURATION, FPS, HEIGHT, WIDTH } from "./theme";
import { fontsPromise } from "./fonts";
import { SceneICan, SceneFolders, SceneAnythingSerif } from "./scenes/ScenesA";
import {
  SceneDots,
  SceneRing,
  SceneFocusIcons,
  SceneGlitch,
  SceneAsterisk,
} from "./scenes/ScenesB";
import { SceneChojum, SceneKrBlocks } from "./scenes/ScenesC";
import {
  SceneView,
  SceneBaby,
  SceneICanAgain,
  SceneFocusOn,
  SceneAnyOn,
  SceneNames,
  SceneFocusCredit,
  SceneSignoff,
} from "./scenes/ScenesD";

// 等待字体加载完成再渲染
const handle = delayRender("加载字体");
fontsPromise.then(() => continueRender(handle));

type SceneDef = { dur: number; Comp: React.FC };
const SCENES: SceneDef[] = [
  { dur: 27, Comp: SceneICan },
  { dur: 21, Comp: SceneFolders },
  { dur: 27, Comp: SceneAnythingSerif },
  { dur: 41, Comp: SceneDots },
  { dur: 20, Comp: SceneRing },
  { dur: 44, Comp: SceneFocusIcons },
  { dur: 30, Comp: SceneGlitch },
  { dur: 15, Comp: SceneAsterisk },
  { dur: 45, Comp: SceneChojum },
  { dur: 21, Comp: SceneKrBlocks },
  { dur: 25, Comp: SceneView },
  { dur: 29, Comp: SceneBaby },
  { dur: 30, Comp: SceneICanAgain },
  { dur: 30, Comp: SceneFocusOn },
  { dur: 30, Comp: SceneAnyOn },
  { dur: 30, Comp: SceneNames },
  { dur: 30, Comp: SceneFocusCredit },
  { dur: 45, Comp: SceneSignoff },
];

const MainVideo: React.FC = () => {
  let cursor = 0;
  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      <Audio src={staticFile("audio/bgm.m4a")} />
      {SCENES.map((s, i) => {
        const from = cursor;
        cursor += s.dur;
        return (
          <Sequence key={i} from={from} durationInFrames={s.dur} name={`场景 ${i + 1}`}>
            <s.Comp />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

export const RemotionComposition: React.FC = () => {
  return (
    <Composition
      id="FocusKineticTypography"
      component={MainVideo}
      durationInFrames={DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

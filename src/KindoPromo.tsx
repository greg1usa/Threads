import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {Scene1} from './scenes/Scene1';
import {Scene2} from './scenes/Scene2';
import {Scene3} from './scenes/Scene3';
import {Scene4} from './scenes/Scene4';

export const KindoPromo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile('voiceover.mp3')} />
      <Audio src={staticFile('music-bed.mp3')} volume={0.25} />

      <Sequence from={0} durationInFrames={120}>
        <Scene1 />
      </Sequence>
      <Sequence from={120} durationInFrames={210}>
        <Scene2 />
      </Sequence>
      <Sequence from={330} durationInFrames={330}>
        <Scene3 />
      </Sequence>
      <Sequence from={660} durationInFrames={240}>
        <Scene4 />
      </Sequence>
    </AbsoluteFill>
  );
};

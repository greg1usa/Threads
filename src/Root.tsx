import React from 'react';
import {Composition} from 'remotion';
import {KindoPromo} from './KindoPromo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KindoPromo"
        component={KindoPromo}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

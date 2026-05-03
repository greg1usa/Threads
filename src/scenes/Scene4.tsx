import React from 'react';
import {AbsoluteFill, Img, Video, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors, fonts} from '../theme';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const videoOpacity = interpolate(frame, [840, 870], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const endOpacity = interpolate(frame, [870, 885], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: colors.purple}}>
      <AbsoluteFill style={{opacity: videoOpacity}}>
        <Video src={staticFile('kindo-heart.mp4')} />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          opacity: endOpacity,
          color: colors.white,
          textAlign: 'center',
        }}
      >
        <Img src={staticFile('kindnessrx-logo.svg')} style={{width: 340, marginBottom: 40}} />
        <div style={{fontFamily: `${fonts.body}, sans-serif`, fontSize: 72, fontWeight: 600}}>
          KindnessRX.org
        </div>
        <div
          style={{
            marginTop: 22,
            fontFamily: `${fonts.heading}, serif`,
            fontStyle: 'italic',
            fontSize: 48,
            color: colors.amber,
          }}
        >
          Come sit with us.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

import React from 'react';
import {AbsoluteFill, Video, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors, fonts} from '../theme';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [30, 48], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      <Video src={staticFile('kindo-bench.mp4')} />
      <div
        style={{
          position: 'absolute',
          left: 64,
          right: 64,
          bottom: 160,
          opacity,
          color: colors.white,
          fontFamily: `${fonts.body}, sans-serif`,
          fontSize: 64,
          fontWeight: 600,
          textShadow: `0 4px 18px ${colors.purple}`,
        }}
      >
        You don&apos;t have to carry it alone.
      </div>
    </AbsoluteFill>
  );
};

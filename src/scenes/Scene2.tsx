import React from 'react';
import {AbsoluteFill, Img, Video, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, fonts} from '../theme';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const up = spring({
    frame: frame - 130,
    fps,
    config: {damping: 12, mass: 0.8},
  });

  return (
    <AbsoluteFill>
      <Video src={staticFile('kindo-medium.mp4')} />
      <Img
        src={staticFile('kindnessrx-logo.svg')}
        style={{position: 'absolute', top: 48, right: 48, width: 170}}
      />
      <div
        style={{
          position: 'absolute',
          left: 70,
          right: 70,
          bottom: 180,
          backgroundColor: colors.purple,
          borderRadius: 26,
          padding: '36px 34px',
          color: colors.white,
          transform: `translateY(${(1 - up) * 50}px)`,
          boxShadow: '0 14px 36px rgba(0,0,0,0.26)',
        }}
      >
        <div style={{fontFamily: `${fonts.heading}, serif`, fontSize: 56, marginBottom: 18}}>
          🎙️ The Support &amp; Kindness Podcast
        </div>
        <div style={{fontFamily: `${fonts.body}, sans-serif`, fontWeight: 500, fontSize: 42}}>
          New episodes weekly
        </div>
      </div>
    </AbsoluteFill>
  );
};

import React from 'react';
import {
  AbsoluteFill,
  Img,
  Video,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {GroupCard} from '../components/GroupCard';
import {colors} from '../theme';

const entries = [
  {start: 330, text: '🟣 Mondays · 1 PM ET — Brain Injury Support', color: colors.purple},
  {start: 420, text: '🔵 Tuesdays · 12 PM ET — Chronic Pain Support', color: colors.teal},
  {start: 510, text: '🟢 Wednesdays · 7:30 PM ET — Mental Health Support', color: colors.green},
];

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fadeOut = interpolate(frame, [630, 660], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      <Video src={staticFile('kindo-wide.mp4')} />
      <Img
        src={staticFile('kindnessrx-logo.svg')}
        style={{position: 'absolute', top: 48, right: 48, width: 170}}
      />
      <div
        style={{
          position: 'absolute',
          right: 44,
          top: 330,
          width: 760,
          display: 'flex',
          flexDirection: 'column',
          gap: 26,
          opacity: fadeOut,
        }}
      >
        {entries.map((entry) => {
          const p = spring({
            frame: frame - entry.start,
            fps,
            durationInFrames: 18,
            config: {damping: 12, mass: 0.8},
          });

          return (
            <div key={entry.text} style={{transform: `translateY(${(1 - p) * 50}px)`, opacity: p}}>
              <GroupCard text={entry.text} color={entry.color} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

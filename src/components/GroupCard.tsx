import React from 'react';

export const GroupCard: React.FC<{text: string; color: string; opacity?: number}> = ({
  text,
  color,
  opacity = 1,
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 42,
        lineHeight: 1.2,
        padding: '26px 30px',
        borderRadius: 24,
        boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
        opacity,
      }}
    >
      {text}
    </div>
  );
};

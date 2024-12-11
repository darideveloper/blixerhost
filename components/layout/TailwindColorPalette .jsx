import React from 'react';

const colors = {
  white: '#fcfffe',
  grey: '#c1deee',
  blue: {
    light: '#11f7eb',
    medium: '#6a97ac',
    dark: '#010717',
  },
  green: {
    light: '#39ff79',
    dark: '#0bc45f',
  },
};

const TailwindColorPalette = () => {
  const renderColors = (colorGroup, parentKey = '') => {
    return Object.entries(colorGroup).map(([key, value]) => {
      if (typeof value === 'string') {
        return (
          <div key={`${parentKey}-${key}`} className="flex flex-col items-center m-2">
            <div
              className="w-16 h-16 rounded shadow-md"
              style={{ backgroundColor: value }}
            />
            <p className="text-sm text-center mt-2">{`${parentKey}${key}`}</p>
          </div>
        );
      } else {
        return renderColors(value, `${key}-`);
      }
    });
  };

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {renderColors(colors)}
    </div>
  );
};

export default TailwindColorPalette;

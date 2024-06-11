import React from 'react';
import { Checkboard } from 'react-color/lib/components/common';

const CheckboardWrapper = ({ size = 8, white = 'rgba(255,255,255,.8)', grey = 'rgba(0,0,0,.08)' }) => {
  return <Checkboard size={size} white={white} grey={grey} />;
};

export default CheckboardWrapper;

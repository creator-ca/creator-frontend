import React from 'react';
import { SketchPicker } from 'react-color';

const SketchPickerWrapper = ({ color, disableAlpha = true, onChange }) => {
  return <SketchPicker color={color} disableAlpha={disableAlpha} onChange={onChange} />;
};

export default SketchPickerWrapper;

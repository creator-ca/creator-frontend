// src/components/ColorPicker.jsx
import { useSnapshot } from "valtio";
import state from "../store";
import SketchPickerWrapper from "./SketchPickerWrapper";

export default function ColorPicker() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPickerWrapper
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
}

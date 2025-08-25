import React, { useState } from "react";

type ColorPickerProps = {
  onChangeTitle: (newTitle: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ onChangeTitle }) => {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleUpdate = () => {
    if (name.trim()) {
      onChangeTitle(`${name}'s Kitchen`);
      setName("");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
      <button onClick={handleUpdate}>Set Name</button>
    </div>
  );
};

export default ColorPicker;

import React, { useState } from "react";

export default function Convertor() {
  const [color, setColor] = useState("");

  const handleCahnge = (event) => {
    const colorIn = event.target.value;
    if (colorIn.length === 7) {
      if (/#[a-f0-9]{6}/gi.exec(colorIn)) {
        const colorOut = `rgb(${parseInt(colorIn.slice(1, 3), 16)}, ${parseInt(
          colorIn.slice(3, 5),
          16
        )}, ${parseInt(colorIn.slice(5, 7), 16)})`;
        setColor(colorOut);
      } else {
        setColor("Ошибка!");
      }
    } else if (colorIn.length > 7) {
      setColor("Ошибка!");
    } else {
      setColor(null);
    }
  };

  return (
    <div
      className="Converter"
      style={{ backgroundColor: color === "Ошибка!" ? "rgb(255 0 0)" : color }}
    >
      <div className="containier">
        <form className="form">
          <input
            className="colorIn"
            type="text"
            onChange={handleCahnge}
            placeholder="Введите код цвета"
          />
        </form>
        <div className="colorOut" type="text" readOnly>
          {color}
        </div>
      </div>
    </div>
  );
}

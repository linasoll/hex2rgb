import React, { useState } from "react";
import './App.css'

const HexToRgbConverter = () => {
    const [hex, setHex] = useState("");
    const [rgb, setRgb] = useState("");
    const [error, setError] = useState("");
    const [bgColor, setBgColor] = useState("#FFFFFF");

    const handleChange = (e) => {
        const value = e.target.value;
        setHex(value);
        
        if(value.length === 7) { // Дожидаемся ввода 7 символов
            if(/^#[0-9A-Fa-f]{6}$/.test(value)) {
                const r = parseInt(value.slice(1, 3), 16);
                const g = parseInt(value.slice(3, 5), 16);
                const b = parseInt(value.slice(5, 7), 16);
                setRgb(`RGB(${r}, ${g}, ${b})`);
                setBgColor(value);
                setError("");
            } else {
                setRgb("");
                setError("Ошибка!");
                setBgColor("#ff0000")
            }
        } else {
            setRgb("");
            setError("");
        }
    };

    return (
        <div className="page" style={{ backgroundColor: bgColor}}>
        <div className="form" >
            <input
                type="text"
                value={hex}
                onChange={handleChange}
                placeholder="#FFFFFF"
                maxLength={7}
                className="input"
            />

            <div className="result">
              {error && <p className="errmessage">{error}</p>}
              {rgb && <p>{rgb}</p>}
            </div>
        </div>
        </div>
    );
};

export default HexToRgbConverter;
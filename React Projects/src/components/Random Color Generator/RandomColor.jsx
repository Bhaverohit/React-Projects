import React, { useEffect, useState } from 'react'
import "./style.css"

const RandomColor = () => {

    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');


    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }


    const handleGenerateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor)
        console.log(hexColor, "HEX");

    };


    const handleGenerateRandomRGBColor = () => {
        const r = randomColorUtility(255);
        const g = randomColorUtility(255);
        const b = randomColorUtility(255);

        let rgb = `rgb(${r},${g},${b})`;

        setColor(rgb);
        console.log(rgb, "RGB");
    };


    useEffect(() => {
        if (colorType === "rgb") {
            handleGenerateRandomRGBColor();
        } else {
            handleGenerateRandomHexColor();
        }
    }, [colorType])

    return (
        <div className='container' style={{ background: color }}>

            <div>

                <button onClick={() => setColorType('hex')}>Create HEX Color</button>
                <button onClick={() => setColorType('rgb')}>Create RGB Color</button>
                <button onClick={colorType === 'hex' ? handleGenerateRandomHexColor : handleGenerateRandomRGBColor}>Generate Random Color</button>
            </div>

            <div className='colorname'>
                <span>{colorType === 'rgb' ? "RGB Color  " : "HEX Color  "}</span>
                <span>{color}</span>
            </div>

        </div >
    )
}

export default RandomColor

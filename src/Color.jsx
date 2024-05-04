import React, {useState} from "react"

function Color() {

    const [color, setColor] = useState("#FFFFFF")

    function handleColor(event){
        setColor(event.target.value)
    }

    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                <p>Selected Color : {color}</p>
            </div>
                <label>Select a color: </label>
                <input type="color" value={color} onChange={handleColor}/>
        </div>
    )
}

export default Color
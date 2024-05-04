import React, {useState, useEffect} from "react";


function Effect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    function addValue() {
        setCount(c => c +1);
    }

    useEffect(() => {
        document.title = `Count ${count} ${color              }`
    })

    function subValue() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }




    return(
        <div>
            <p style={{color : color}}>Count : {count}</p>
            <button onClick={addValue}>Add</button>
            <button onClick={subValue}>Sub</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )

}


export default Effect
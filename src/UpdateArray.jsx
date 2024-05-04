import React, {useState} from "react";

function UpdateArray(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])
    
    function addFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""

        setFoods(f => [...f, newFood])
    }

    function removeFood(index){

        setFoods(foods.filter((_, i) => i !== index))

    }


    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li 
                key={index} 
                onClick={() => removeFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput"/>
            <button onClick={addFood}>AddFood</button>


        </div>
    )
}

export default UpdateArray
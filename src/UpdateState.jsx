import React, {useState} from "react";

function Update() {

    const [car, setCar] = useState({year : 2024,
                                    make : "Ford",
                                    model : "Mustang"});


    function handleYear(event){
        setCar(c =>  ({...c, year: event.target.value}))
    }
    function handleMake(event){
        setCar(c => ({...c, make: event.target.value}))

    }
    function handleModel(event){
        setCar(c => ({...c, model: event.target.value}))
    }                                



    return (
        <div>
            <p>Your Favorite Car is : {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYear}/>
            <input type="text" value={car.make} onChange={handleMake}/>
            <input type="text" value={car.model} onChange={handleModel}/>

        </div>
    )


}




export default Update
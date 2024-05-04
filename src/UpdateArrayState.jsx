import React, {useState} from "react";

function ArrayState(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAdd(){
        const newCar = {
            year : carYear,
            make : carMake,
            model : carModel
        }

        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")


    }

    function handleRemove(index){
        setCars(c => c.filter((_, i) => i !== index))

    }

    function handleYear(event){
        setCarYear(event.target.value)

    }

    function handleMake(event){
        setCarMake(event.target.value)
    }

    function handleModel(event){
        setCarModel(event.target.value)
    }

    return(
        <div>
            <h2>List Of Car Object</h2>
            <ul>
                {cars.map((car, index) =>
                <li key={index} onClick={() => handleRemove(index)}>
                    {car.year} {car.make} {car.model}
                </li>
            )}
            </ul>
            <input type="number" value={carYear} onChange={handleYear}/>
            <input type="text"  value={carMake} onChange={handleMake} placeholder="Enter your Make"/><br />
            <input type="text"  value={carModel} onChange={handleModel} placeholder="Enter your Model"/><br />
            <button onClick={handleAdd}>Add Car</button>
        
        </div>
    )



}

export default ArrayState
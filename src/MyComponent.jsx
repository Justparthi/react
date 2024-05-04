import react, {useState} from "react"


function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsemployed] = useState(false)

    const updateName = () => {
        setName("SpongeBob")
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleStatus = () => {
        setIsemployed(!isEmployed);
    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>Increment age</button>

            <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleStatus}>toggle status</button>
        </div>
    )
}

export default MyComponent
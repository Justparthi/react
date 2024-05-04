import React, {useState, useEffect} from "react";

function ReSize() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Active")
    }, []);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(
        <div>
            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    )

}


export default ReSize
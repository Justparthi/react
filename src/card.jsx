import profile from "./assets/rad.png"


function Card() {
    let count = 0

    // const handleClick = (namaye) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${namaye} you clicked me ${count} times`)
    //     } else {
    //         console.log(`${namaye} stop clicking at me`)
    //     }
    // }

    const handleClick3 = (e) => e.target.textContent = "Ouch it Hurts!!"

    // const handleClick2 = (namaye) => console.log(`${namaye} stop clicking me!!`) 


    return(
        <div className="card">
            <img className="card-img" src={profile} alt="profile" />
            <h2 className="card-title">Panda</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in, impedit qui eaque deserunt facere totam fuga, temporibus officiis odit, laudantium reiciendis nesciunt aperiam. Est labore quas sit eaque dicta!</p>
            <button className="card-btn" onClick={(e) => handleClick3(e)}>Click Me</button>
        </div>


    )
}

export default Card
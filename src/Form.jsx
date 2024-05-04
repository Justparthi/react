

import React, {useState} from "react";


function Form() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("")
    const [ship, setShip] = useState("")

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleChangeQuantity(event) {
        setQuantity(event.target.value);   
    }

    function handleChangeComment(event) {
        setComment(event.target.value)
    }

    function handleChangePayment(event) {
        setPayment(event.target.value)
    }

    function handleChangeShip(event) {
        setShip(event.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleChange}/>
            <p>Name : {name}</p>

            <input value={quantity} onChange={handleChangeQuantity} type="number"/>
            <p>Quantity : {quantity}</p>

            <textarea value={comment} onChange={handleChangeComment}></textarea>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handleChangePayment}>
            <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
                <option value="Others">Others</option>
            </select>
            <p>Payment : {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={ship === "Pick Up"}
                    onChange={handleChangeShip}/>
                Pick Up
            </label>

            <label>
            <input type="radio" value="Delivery"
                    checked={ship === "Delivery"}
                    onChange={handleChangeShip}/>
                Delivery
            </label>

            <p>Shipping : {ship}</p>
        </div>
    )




}

export default Form


function List(props){

    const catogory = props.catogory

    const itemsList = props.items
    


    // fruits.sort((a,b) => a.name.localeCompare(b.name));

    // const localFruits = fruits.filter(fruit => fruit.calories > 100)



    const listItems = itemsList.map(fruit => <li>key={fruit.id} &nbsp;
                                                {fruit.name}: &nbsp;
                                                {fruit.calories}</li>)
    return(
    <div>
        <h3 className="list-category">{catogory}</h3>
        <ul className="list-items">{listItems}</ul>

    </div>
    )
}

export default List
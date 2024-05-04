

function UserGreeting(props) {
    if(props.isLogged){
        return <h2>Welcome {props.username}</h2>
    } else{
        return <p>apnda</p>
    }
}

export default UserGreeting;
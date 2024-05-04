import React from "react";
import Header from "./header";
import Card from "./card";
import Student from "./Student";
import UserGreeting from "./UserGreet";
import List from "./List";
import ProfPic from "./Profile";
import MyComponent from "./MyComponent";
import Counter from "./counter";
import Form from "./Form";
import Color from "./Color";
import UpdateArray from "./UpdateArray";
import Update from "./UpdateState";
import ArrayState from "./UpdateArrayState";
import ToDo from "./ToDo";
import Effect from "./Effect";
import ReSize from "./ReSize";
import DigitalClock from "./DigitalClock";
import StopWatch from "./StopWatch";

function App() {

  const fruits = [{id : 1, name : "apple", calories : 95},
                    {id : 2, name : "orange", calories : 45},
                    {id : 3, name : "banana", calories : 105}, 
                    {id : 4, name : "grape", calories : 159},
                    {id : 5, name : "kiwi", calories : 37}];

  const vegitables = [{id : 6, name : "potatos", calories : 95},
                    {id : 7, name : "celery", calories : 45},
                    {id : 8, name : "carrots", calories : 105}, 
                    {id : 9, name : "corn", calories : 159},
                    {id : 10, name : "brocolli", calories : 37}];

  return(

    <div>
    


{/* 
    <Header />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Student name="Panda" age={69} bool={true}/>
    <Student name="Nirmal" age={21} bool={false}/>
    <Student name="Nithish" age={39} bool={true}/>
    <UserGreeting isLogged={true} username="Panda"/>
    {fruits.length > 0 ? <List items={fruits} catogory="Fruits"/> : null}
    {vegitables.length > 0 ? <List items={vegitables} catogory="Vegitables"/> : null} */}
    <ProfPic />
    {/* <MyComponent />
    <Counter />
    <Form />
    <Color />
    <Update />
    <UpdateArray />
    <ArrayState />
    <Effect />
    <ToDo />
    <ReSize />
    <DigitalClock /> */}
    <StopWatch />

    </div>
    
  )
}

export default App
import NavBarComp from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListCollection } from "./components/ListCollection";
import "./app.css"
import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import BotArmy from "./components/BotArmy";


function App() {
  const [bots, setBots]= useState()
  const [bot, setBot]= useState([])
  let id = useRef(bot)
  let botsData= useRef()
  botsData.current=bot
  
  console.log(id)
  
  // fetch our bots
  useEffect(()=>{
    fetch("http://localhost:4000/bots")
    .then(res=>res.json() )
    .then(data=>{
      setBots(data)
    })
    .catch(e=>console.log(e))
  }, [])

  function getSpecificdata(){
    console.log(`id ${id.current}`)
    let searchId=id.current
    let data = bots.filter(bot => bot.id === searchId)
    console.log(data)

    botsData.current=[...botsData.current, data]
   
    console.log(botsData)
    setBot(botsData.current)
  
  }
  console.log(bot)
  

  function handleSendId(number){
    console.log(number)
    id.current=number
    // id.current=id
    getSpecificdata()
  }
  return (
  <div>
    <NavBarComp/>
    <div className="container-fluid" style={{marginTop:"10px"}}>
      <div className="row">
        <div className="col-auto min-vh-100 bg-dark" style={{width :"50%"}}>
          <h1 style={{color: "#fff", fontSize:"2.8rem", alignItems:"center", margin:"2px"}}>collection</h1>
        <ListCollection bots={bots} sendId={handleSendId}/>
        </div>

      </div>
     
    </div>

    <div style={{float:"right", position:"absolute"}}>
      <h1 style={{ color: "black", alignContent:"center" , float : "right"}}>BOT ARMY</h1>
      <BotArmy data={bot}/>
    </div>
    </div>
  );
}

export default App;

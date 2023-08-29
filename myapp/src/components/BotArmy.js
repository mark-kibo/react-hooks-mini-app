import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';



function BotArmy({data}) {
  console.log(data)
  // let params = useParams()
  // let navigate=useNavigate()

  // let [data, setBotData]= useState([])
  // fetch(`http://localhost:4000/bots/${id}`)
  // .then(res=>res.json())
  // .then(data=>{
  //     handleDelist(data)
  // })
  // console.log(botData)

  // handle delist
  // function handleDelist(data){
  //   if(data !== null) {
  //     setBotData([...botData, data])
  //   } 
  // }

  return (
    <div className='botobject' style={{float:"right", position:"absolute", top:"70px", display:'flex', width: "100%"}}>
    {/* {data != null ? (data.map(data=>(<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.avatar_url} />
      <Card.Body>
        <Card.Title>Name : {data.name}</Card.Title>
        <Card.Text>
          <p> health :{data.health}</p>
          <p> Damage :{data.damage}</p>
          <p> armor :{data.armor}</p>
          <p> class :{data.bot_class}</p>
          <p> catchphrase :{data.catchphrase}</p>
          <p>created at "<span>{data.created_at}</span>"</p>
        </Card.Text>
        <Button variant="danger" >Delist</Button>
      </Card.Body>
    </Card>))) : <p>nothing has been listed</p>} */}
    {data != null ?
      (data.map(mydata=>(
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={mydata[0].avatar_url} />
        <Card.Body>
        <Card.Title>Name : {mydata[0].name}</Card.Title>
        <Card.Text>
          <p> health :{mydata[0].health}</p>
          <p> Damage :{mydata[0].damage}</p>
          <p> armor :{mydata[0].armor}</p>
          <p> class :{mydata[0].bot_class}</p>
          <p> catchphrase :{mydata[0].catchphrase}</p>
          <p>created at "<span>{mydata[0].created_at}</span>"</p>
        </Card.Text>
        <Button variant="danger" >Delist</Button>
      </Card.Body>
    </Card>
    </div>
      ))): (<p>nothing has been listed</p>)
     }
    </div>
  );
}

export default BotArmy;
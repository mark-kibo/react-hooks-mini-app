import ListItem from './listItem'
import "../app.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

export const ListCollection = ({bots, sendId}) => {
  console.log(bots)
  // handle click
 
  // let botTag =
  return (
    <div className='bots'>
      {bots != null ? bots.map(bot=>(
      // <ListItem  key={bot.id} bot={bot} />
      // <Row xs={1} md={2} className="g-4">
      <Col key={bot.id}>
        <Card style={{padding: "10px"}}>
          <Card.Img variant="top" src={bot.avatar_url} />
          <Card.Body>
            <Card.Title>{bot.name}</Card.Title>
            <Card.Text>
              <p>health:{bot.health}</p>
              <p>damage:{bot.damage}</p>
            </Card.Text>
          </Card.Body>
          <Button variant="primary" style={{
            width:"50%",
            alignItems:"center",
            margin:"25px"
          }} onClick={()=>{ sendId(bot.id)}}>Enlist</Button>
        </Card>
      </Col>
      // </Row>
    )): <p>loading</p>}
    </div>
  )
}

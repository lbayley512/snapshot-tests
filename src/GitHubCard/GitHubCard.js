import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'

function BasicExample() {
    const [gitHubName, setGitHubName] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/lbayley512')
        .then(res => res.json())
        .then(data => {
            setGitHubName(data.login)
        
    })
    })

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" />
      <Card.Body>
        <Card.Title>{gitHubName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
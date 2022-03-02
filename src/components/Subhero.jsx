import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Subhero = () => {
  return (
    <div className='container-sub-hero container'> 
        <Card bg = 'danger' className='container-sub-hero'>
  <Card.Header as="h2">Free Guitar Lessons!!</Card.Header>
  <Card.Body>
    <Card.Title>Purchase any guitar over $499.99 and recive one-hour for lessons free</Card.Title>
    
    <Button variant="primary">Learn more</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Subhero
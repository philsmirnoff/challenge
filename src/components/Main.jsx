import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
const { Configuration, OpenAIApi } = require('openai');



class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      heading: 'The response from the API will be shown here',
      response: '... await response',
    }
  }

  onFormSubmit = e => {
    e.preventDefault()

    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.topic)


    /// OpenAI API
    this.setState({
      heading: `horror story about: $(formatDataObj).topic}`,
      response: `The response from the OpenAI API will be shown here`
    })
}

  render() {
    return (
      <div>

        <h1>Two-sentence Horror Story with AI</h1>
        <Container>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="mb3" controlId="formBasicEmail">
            <Form.Label>Enter the Topic for Horror Story</Form.Label>
            <Form.Control type="text" name="topic" placeholder="Car, restaurant, subway, elevator, apple, Shopify, New York.. " />
            <Form.Text className="text-muted">
              We'll never share this stories with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </Form>

        <Card>
          <Card.Body>
            <Card.Title><h1>{this.state.heading}</h1></Card.Title>
            <Card.Text>
             <h4>{this.state.response}</h4>
             </Card.Text>
          </Card.Body>
        </Card>
        </Container>
      </div>
    )
  }
}


export default Main

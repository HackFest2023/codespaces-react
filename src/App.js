import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const data = [
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  },
  {
    title: 'Web page design',
    link: 'www.abc.com',
    date: '07/07/2023',
    desc: "o address issues that do not require attention, run: o address issues that do not require attention, run: o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:o address issues that do not require attention, run:"
  }
]


function App() {
  const [validated, setValidated] = useState(false);
  const [searchResult, setSearchResult] = useState(data);
 
 
  useEffect(() => {
    axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((response) => {
    
    searchResult(response.data.data);
    });
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const tableRows = searchResult.map(
    (res) => {
      return (
        <Col sm="12">
          <Card style={{ textAlign: "left", marginBottom: "15px" }}>
           <Card.Body>
              <Card.Title>{res['ID Nation']} <span>{res.date}</span></Card.Title>
              <Card.Text>
             {res.desc}
              </Card.Text>
              <Button variant="primary">{res.link}</Button>
            </Card.Body>
          </Card>


        </Col>
      )
    }
  )
  return (
    <div className="App">
      <Container>
        <div className="searchHOlder bg-info-subtle p-3 rounded searchHOlder">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">

              <Col sm="10">
                <Form.Control size="sm" type="text" placeholder="Search..." />
              </Col>
              <Col sm="2">   <Button variant="primary" type="submit">
                Submit
              </Button></Col>
            </Form.Group>
          </Form>
        </div>

        <div className='mt-3'>
          <Row>

            {tableRows}

          </Row>

          {/* .map(course => 
    <li key={course.id}>
      <p>{course.name}</p>
      <span>{course.price}</span>
    </li>

  ) */}

        </div>

      </Container>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios';

function App() {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState({})
  const [list, setList] = useState({})
  const [segment, setSegment] = useState('')
  const [subDatas, setSubDatas] = useState()


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCahnge = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value })
  }

  const addNewSchemas = () => {
    let arr = []
    for (let x in datas) {
      arr.push({ [x]: datas[x] })
    }
    let formatedData = { 'sgment_name': segment, 'schema': arr }
    setList(formatedData)
    console.log(list);

    let accordionValues = <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='mb-3'>
        <Accordion.Header>Update or Add Empty segment</Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Label>First Name:</Form.Label>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
              <Form.Control type="text" placeholder="First name" className='shadow-none mb-3' name='firstName' onChange={handleCahnge} defaultValue={datas.firstName} />
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Label>Last Name:</Form.Label>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
              <Form.Control className='shadow-none mb-3' type="text" placeholder="Last name" name='lastName' onChange={handleCahnge} defaultValue={datas.lastName} />
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Label>Gender</Form.Label>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Check type="radio" name="gender" label='Male' onChange={handleCahnge} defaultChecked={datas.gender === 'Male'} defaultValue='Male' />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <Form.Check type="radio" name="gender" label='Female' className='mb-3' onChange={handleCahnge} defaultChecked={datas.gender === 'Female'} defaultValue='Female' />
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Label>Age:</Form.Label>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
              <Form.Control className='shadow-none mb-3' type="number" placeholder="Age" name='age' onChange={handleCahnge} defaultValue={datas.age} />
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Label>Account Name:</Form.Label>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
              <Form.Control className='shadow-none mb-3' type="text" placeholder="Account name" name='accName' onChange={handleCahnge} defaultValue={datas.accName} />
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Label>City:</Form.Label>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
              <Form.Control className='shadow-none mb-3' type="text" placeholder="City" name='city' onChange={handleCahnge} defaultValue={datas.city} />
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
              <Form.Label>State:</Form.Label>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
              <Form.Control className='shadow-none' type="text" placeholder="State" name='state' onChange={handleCahnge} defaultValue={datas.state} />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    setSubDatas(accordionValues)
  }

  const handleSubmit = async() => {
    let url = 'https://webhook.site/0e4feed8-1374-4b45-a4fd-79b8f973e973'
    let response = await axios.post(url,list)
    console.log(response);
  }
  return (
    <div>
      <div className='text-center'>
        <Button variant="outline-primary mt-5" onClick={handleShow}>Save Segment</Button>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title className='modal-title'>Saving Segment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>Enter the name of the Segment</div>
          <Form.Control type="text" className='my-3 shadow-none' placeholder="Name of the segment" onChange={(e) => setSegment(e.target.value)} value={segment} />
          {subDatas}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add schema to segment</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Label>First Name:</Form.Label>
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                    <Form.Control type="text" placeholder="First name" className='shadow-none mb-3' name='firstName' onChange={handleCahnge} value={datas.firstName} />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Label>Last Name:</Form.Label>
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                    <Form.Control className='shadow-none mb-3' type="text" placeholder="Last name" name='lastName' onChange={handleCahnge} value={datas.lastName} />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Label>Gender</Form.Label>
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Check type="radio" name="gender" label='Male' onChange={handleCahnge} checked={datas.gender === 'Male'} value='Male' />
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                    <Form.Check type="radio" name="gender" label='Female' className='mb-3' onChange={handleCahnge} checked={datas.gender === 'Female'} value='Female' />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Label>Age:</Form.Label>
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                    <Form.Control className='shadow-none mb-3' type="number" placeholder="Age" name='age' onChange={handleCahnge} value={datas.age} />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Label>Account Name:</Form.Label>
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                    <Form.Control className='shadow-none mb-3' type="text" placeholder="Account name" name='accName' onChange={handleCahnge} value={datas.accName} />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Label>City:</Form.Label>
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                    <Form.Control className='shadow-none mb-3' type="text" placeholder="City" name='city' onChange={handleCahnge} value={datas.city} />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <Form.Label>State:</Form.Label>
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                    <Form.Control className='shadow-none' type="text" placeholder="State" name='state' onChange={handleCahnge} value={datas.state} />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className='icon-div mt-2'>
            <AiOutlinePlus className='add-icon' />
            <span className='ps-1' onClick={addNewSchemas}>Add new schema</span>
          </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button className='save' type='submit' onClick={handleSubmit} >Save the Segment</Button>
          <Button className='cancel' onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

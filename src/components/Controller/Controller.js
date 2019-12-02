import React, { useState }  from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux'

const Controller = () => {
    const [animal, setAnimals] = useState({cycle:1});
    const dispatch = useDispatch();
    const insertAnimal = (payload)=>dispatch({ type: 'INSERT_ANIMAL',payload :payload })
    const searchAnimal=(payload) =>  dispatch({ type: 'SEARCH_ANIMAL',payload :payload })



    const onChange = (event) => {
        let name=event.target.name
        if (name ==="date") {
            setAnimals({...animal,[name]:new Date(event.target.value)});
        } else {
            setAnimals({...animal,[name]:event.target.value});
        }
    };

    return ( 
        <Row>
        <Col>
          <Card body>
            <CardTitle><h3>Animal Manager<hr/></h3></CardTitle>
            <CardText>Please add the animal name , type , health checkup cylce and last health checkup date.</CardText>
            <Form>
            <Row>
                <Col>
                <FormGroup>
                    <Label for="name">Animal Name</Label>
                    <Input onChange={onChange} type="name" name="name" id="name" placeholder="Animal Name" />
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for="type">Animal Type</Label>
                    <Input onChange={onChange} type="type" name="type" id="type" placeholder="Animal Type" />
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for="date">Last Health Checkup</Label>
                    <Input onChange={onChange} type="date" name="date" id="date" placeholder="Last Health Checkup" />
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for="cycle">Checkup Cycle</Label>
                    <Input onChange={onChange} type="select" name="cycle" id="cycle">
                        <option value={1}>1 Month</option>
                        <option value={3}>3 Month</option>
                    </Input>
                </FormGroup>
                </Col>
            </Row>
            </Form><br/>
            <Row>
                <Col><Button onClick={()=>searchAnimal(animal.name)} block>SEARCH</Button></Col>
                <Col><Button onClick={()=>insertAnimal(animal)} style={{"background":"#F564A9"}} block>INSERT</Button></Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
}

export default Controller;
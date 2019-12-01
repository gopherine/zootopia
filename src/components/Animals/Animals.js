import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useSelector,useDispatch } from 'react-redux'

const Animals = () => {
    const animals = useSelector(state => state.animals)
    const dispatch = useDispatch();
    const deleteAnimal=(payload) =>  dispatch({ type: 'DELETE_ANIMAL',payload :payload })

    return (<div style={{marginTop:"40px"}}>
                <h4>Animal List</h4>
                {animals.map((item)=>(
                    <Card key={item.name} body inverse style={{ backgroundColor: '#533B4D', borderColor: '#533B4D',marginBottom:"25px" }}>
                    <CardTitle><h5>{item.name}</h5></CardTitle>
                    <CardText>
                            Animal Type : {item.type} <br/>
                            Last Health Checkup : {item.date.toLocaleString()} <br/>
                            Next Due Date : {item.cycle===1?new Date(+item.date + 30 *86400000).toLocaleString():new Date(+item.date + 90 *86400000).toLocaleString()}<br/>
                            Cycle : {item.cycle} Month
                    </CardText>
                    <Button onClick={()=>deleteAnimal(item.name)}>DELETE</Button>
                </Card>
                ))
              }
            </div>
    )
}

export default Animals
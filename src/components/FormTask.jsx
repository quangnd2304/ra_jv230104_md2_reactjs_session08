import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormTask({ task, actionName }) {
    const [taskSelected, setTaskSelected] = useState();

    useEffect(() => {
        setTaskSelected(task);
    })
    return (

        <Row>
            <Col md={{ span: 5, offset: 7 }}>
                <Row>
                    <Form className='d-flex'>
                        <Form.Control placeholder='Task Name' value={task.taskName} />
                        <Form.Select aria-label="Default select example" value={task.level}>
                            <option value={1}>High</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Small</option>
                        </Form.Select>
                        <Button>Submit</Button>
                        <Button variant='light'>Cancel</Button>
                    </Form>
                </Row>

            </Col>
        </Row>
    )
}

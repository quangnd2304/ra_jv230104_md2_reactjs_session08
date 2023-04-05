import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';

export default function Control() {
    const [sortData, setSortData] = useState("");
    const handleSortChange = (event) => {
        setSortData(event.target.value);
    }
    return (
        <Row>
            <Col md={3}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search for..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="info" id="button-addon2">
                        Go!
                    </Button>
                </InputGroup>
            </Col>
            <Col md={2}>
                <Form.Select aria-label="Default select example" onChange={handleSortChange}>
                    <option value={""}>Sort By</option>
                    <option value="name-asc">Name-ASC</option>
                    <option value="name-desc">Name-DESC</option>
                    <option value="level-asc">Level-ASC</option>
                    <option value="level-desc">Level-DESC</option>
                </Form.Select>
            </Col>
            <Col md={2}>
                <Badge bg='success' style={{ fontSize: 20 }}>{sortData.toUpperCase()}</Badge>
            </Col>
            <Col md={5}>
                <Button variant='info' style={{ width: '100%' }}>Add Task</Button>
            </Col>
        </Row>
    )
}

import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Task from './Task';

export default function ListTask({ listTask, handleActionApp }) {
    const handleAction = (task, actionName) => {
        handleActionApp(task, actionName);
    }
    let elementListTask = listTask.map((task, index) => {
        return <Task key={task.taskId} task={task} stt={index + 1} handleAction={handleAction} />
    })

    return (
        <Card style={{ marginTop: 10 }}>
            <Card.Header className='listCart'>List Task</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center', width: '10%' }}>#</th>
                            <th style={{ width: '40%' }}>Task</th>
                            <th style={{ width: '20%' }}>Level</th>
                            <th style={{ width: '30%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementListTask}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

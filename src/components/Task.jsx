import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function Task(props) {
    let { task, stt, handleAction } = props;
    const handleEdit = (task) => {
        handleAction(task, "Edit");
    }
    return (
        <tr>
            <td style={{ textAlign: 'center' }}>{stt}</td>
            <td>{task.taskName}</td>
            <td>{(task.level == 1) ? <Badge bg='danger'>High</Badge> : (task.level == 2) ? <Badge bg='secondary'>Medium</Badge> : <Badge bg='info'>Small</Badge>}</td>
            <td>
                <Button variant='warning' onClick={() => handleEdit(task)}>Edit</Button>
                <Button variant='danger'>Delete</Button>
            </td>
        </tr>
    )
}

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
function SingleTask({ task, deleteTask, doneTask }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };
  const handleDone = () => {
    doneTask(task.id);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          {task.text}
        </Card.Title>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="done" onClick={handleDone} />
        </Form.Group>
        <div>
          <p>{task.date && task.date.getDate()}</p>
          <p>
            {" "}
            {task.date &&
              task.date.toLocaleString("default", {
                month: "long",
              })}
          </p>
          <p>{task.date && task.date.getHours()} h</p>
          <p>{task.date && task.date.getMinutes()} min</p>
        </div>
        <Button variant="danger" onClick={handleDelete}>
          delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleTask;

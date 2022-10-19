import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function SingleTask({ task, deleteTask }) {
  const handleDelete = () => {
    console.log(task);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{task.text}</Card.Title>
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

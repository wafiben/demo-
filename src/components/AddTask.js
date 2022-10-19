import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTask({ add }) {
  const [newTask, setNewTask] = useState({
    id: "",
    text: "",
    done: false,
    date: "",
  });
  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      id: uuidv4(),
      text: e.target.value,
      date: new Date(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    add(newTask);
  };

  return (
    <Form
      style={{ width: "50%", marginBottom: "100px" }}
      className="container"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your task"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddTask;

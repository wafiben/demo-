import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import List from "./components/List";
import AddTask from "./components/AddTask";

function App() {
  const list = [
    { id: "0", text: "going to the school", done: false, date: new Date() },
    { id: "1", text: "metting my mom", done: false, date: new Date() }
  ];
  const [listOfTasks, setList] = useState(list);
  const deleteTask = (id) => {
    setList(listOfTasks.filter((elt) => elt.id != id));
  };
  const add = (task) => {
    const addedList = [...listOfTasks, task];
    setList(addedList);
  };

  return (
    <div>
      <AddTask add={add} />
      <List list={listOfTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

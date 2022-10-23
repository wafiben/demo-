import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import List from "./components/List";
import AddTask from "./components/AddTask";

function App() {
  const list = [
    { id: "0", text: "going to the school", done: false, date: new Date() },
    { id: "1", text: "metting my mom", done: false, date: new Date() },
  ];
  const [listOfTasks, setList] = useState(list);
  const deleteTask = (id) => {
    setList(listOfTasks.filter((elt) => elt.id != id));
  };
  const doneTask = (id) => {
    const tasks = listOfTasks.map((elt) => {
      if (elt.id == id && elt.done == true) {
        return { ...elt, done: false };
      }
      if (elt.id == id && elt.done == false) {
        return { ...elt, done: true };
      } else {
        return elt;
      }
    });
    setList(tasks);
  };

  const testIfExist = (task) => {
    let found = false;
    const taskText = task.text.replace(/\s/g, "");
    const textTasks = listOfTasks.map((elt) => {
      let singletakText = elt.text.replace(/\s/g, "");
      return singletakText;
    });

    for (let i = 0; i < textTasks.length; i++) {
      if (taskText === textTasks[i]) {
        found = true;
        break;
      }
    }
    return found;
  };

  const add = (task) => {
    if (testIfExist(task)) {
      alert("task already exist");
    } else {
      const addedList = [...listOfTasks, task];
      setList(addedList);
    }
  };

  return (
    <div>
      <AddTask add={add} />
      <List list={listOfTasks} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  );
}

export default App;

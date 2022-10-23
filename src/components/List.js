import React from "react";
import SingleTask from "./SingleTask";

function List({ list, deleteTask, doneTask }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {list.length > 0
        ? list.map((elt) => (
            <SingleTask
              key={elt.id}
              task={elt}
              deleteTask={deleteTask}
              doneTask={doneTask}
            />
          ))
        : "you have no tasks yet"}
    </div>
  );
}

export default List;

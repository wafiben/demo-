import React from "react";
import SingleTask from "./SingleTask";

function List({ list, deleteTask }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {list.map((elt) => (
        <SingleTask key={elt.id} task={elt} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default List;

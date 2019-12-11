import React, { useEffect } from "react";
import Note from "./Note";
import M from "materialize-css/dist/js/materialize.min.js";
const Notes = ({ notes }) => {
  useEffect(() => {
    M.Collapsible.init(document.querySelector(".collapsible"), {});
  });

  return (
    <ul className="collection with-header collapsible">
      <li className="collection-header">
        <h4>Notes</h4>
      </li>
      {notes.map((note, i) => (
        <Note note={note} key={i} />
      ))}
    </ul>
  );
};

export default Notes;

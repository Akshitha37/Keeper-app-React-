import React from "react";
import Note from "./Note";

function CreateArea(props) {
  const [titleContent, setTitleContent] = React.useState({
    title: "",
    content: ""
  });

  function updateTitleContent(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    setTitleContent((prevValue) => {
      return {
        ...prevValue,
        [name]: newValue
      };
    });
    //console.log(titleContent);
    //console.log(name);
  }

  function addNote(event) {
    props.addNot(titleContent);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={updateTitleContent}
          placeholder="Title"
          value={titleContent.title}
        />
        <textarea
          name="content"
          onChange={updateTitleContent}
          placeholder="Take a note..."
          rows="3"
          value={titleContent.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;



import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setarr] = React.useState([]);

  function add(note) {
    setarr((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setarr((prevValue) => {
      return prevValue.filter((arr, index) => {
        return index !== id;
      });
    });
  }
  console.log(arr);
  return (
    <div>
      <Header />
      <CreateArea addNot={add} />
      {arr.map((arr, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={arr.title}
            content={arr.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import CreateArea from "./Components/CreateArea";
function App() {
  const [notes, setNotes] = useState([
    {
      title: "learn web dev",
      content: "learn web dev by using a structured roadmap from roadmap.sh",
    },
    {
      title: "make some project",

      content: "make some projects using whatever you have learnt .",
    },
    {
      title: "start freelancing",
      content:
        "make some money by starting freelancing and it will  help you to land your  first job",
    },
  ]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}

// components

export default App;

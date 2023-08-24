import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [isExpended, setExpended] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setExpended(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function handleSubmit(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }
  return (
    <div>
      <form className="create-note ">
        {isExpended && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          value={note.content}
          onChange={handleChange}
          rows={isExpended ? 3 : 1}
          placeholder="Take a note"
        />
        <Zoom in={isExpended}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;

import { useState } from "react";
import NoteList from "./components/NoteList"
import {nanoid} from 'nanoid'
const App = () =>{
  const [notes,setNotes] = useState([
  {
    id: nanoid(),
    text: "This is my first note!",
    date:"14/01/2023"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date:"18/01/2023"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date:"21/01/2023"
  },
  {
    id: nanoid(),
    text: "This is my new note",
    date:"14/01/2023"
  },
]);

const AddNote = (text) =>{
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString()
  };

  const newNotes = [...notes, newNote];
  setNotes(newNotes);
  
}
  return( <div className="container">
    <NoteList 
     notes = {notes} 
     handleAddNote={AddNote}
     
     />
    
    </div>
  );
};

export default App;
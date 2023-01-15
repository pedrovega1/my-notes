import { useEffect, useState } from "react";
import NoteList from "./components/NoteList"
import {nanoid} from 'nanoid'
import Search from "./components/search";
import Header from "./components/Header";
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

const [searchText, setSearchText] = useState('')

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('my-notes-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'my-notes-data',
    JSON.stringify(notes)
  );
}, [notes]);

const AddNote = (text) =>{
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString()
  };

  const newNotes = [...notes, newNote];
  setNotes(newNotes);
  
};

const DeleteNote = (id) =>{
  const newNotes =  notes.filter((note=> note.id !==id));
  setNotes (newNotes)
}
  return( 
<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NoteList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={AddNote}
					handleDeleteNote={DeleteNote}
				/>
			</div>
		</div>
  );
};

export default App;

import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import NoteList from './components/noteList'
import Search from './components/Search'
import Header from './components/Header';

function App() {
  const [note, setNote] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-note-app'));
    return savedNotes || [
      {
        id: nanoid(),
        noteTitle: "Hello Text",
        noteBody: "this is my first text for this note",
        date:"20/11/2024"
      },
      {
        id: nanoid(),
        noteTitle: "Hello Text",
        noteBody: "this is my fourth text for this note",
        date:"20/11/2024"
      },
    ];
  });
  const [searchNote,setSearchNote]=useState('');
  const [darkmode,setDarkmode]=useState(false)

  
  useEffect(()=>{
    localStorage.setItem('react-note-app',JSON.stringify(note))
  },[note])

  const noteSave=(text,title)=>{
    const date =new Date()
    const saveData ={
      id:nanoid(),
      noteTitle:title,
      noteBody:text,
      date:date.toLocaleDateString()
    }
    const finalData=[...note,saveData]
    setNote(finalData)
  }

   const handleDelete=(id)=>{
      const finalData= note.filter((note)=> note.id != id)
      setNote(finalData)
   }

  return (
    <div className={`${darkmode && 'darkmode'}`}>
    <div className="App-main">
      <Header handleDarkmode={setDarkmode}/>
      <Search handleSearch={setSearchNote}/>
     <NoteList note={note.filter((note)=>(
      note.noteTitle.toLowerCase().includes(searchNote)
     ))} notesave={noteSave} handleDelete={handleDelete}/>
    </div>
    </div>
  );
}

export default App;

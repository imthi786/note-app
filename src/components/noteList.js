import React from 'react';
import Note from './note'
import AddNote from './AddNote';

function NoteList({note,notesave,handleDelete}){
    return (
        <div className="note-lists">
        {note.map((note)=>(
            <Note key={note.id} id={note.id} title={note.noteTitle} noteBody={note.noteBody} date={note.date}  handleDelete={handleDelete}/>
        ))}
        <AddNote notesave={notesave} />
        
        </div>
    )
}

export default NoteList;
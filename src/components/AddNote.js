import {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';

function AddNote({notesave}){

    const [storeNote,setStoreNote]=useState('')
    const [storeTitle,setStoreTitle]=useState('')
    const characterLimit =200;


    const collectNotes=(event)=>{
        if(characterLimit - event.target.value.length >=0){
            setStoreNote(event.target.value)
        }
    }
    const collectTitle=(event)=>{
        setStoreTitle(event.target.value)
    }

    const handleSave=()=>{
        if(storeNote.trim().length > 0 && storeTitle.trim().length > 0){
            notesave(storeNote,storeTitle)
            setStoreNote('');
            setStoreTitle('');
        }else{
            toast.error('Hey You Forgot To Enter Title and Body!');
        
        }
    }


    return(
        <>
    <div className="note addnote">
        <div>
            <input type='text' className="noteTitle" onChange={collectTitle} value={storeTitle} placeholder='Enter the Title'></input>
            <textarea cols='35' rows='8' placeholder='Enter The Notes Here' value={storeNote} onChange={collectNotes}></textarea>
        </div>
        <div className="note-footer">
            <span>Remaining:{characterLimit - storeNote.length}</span>
            <button className="savebtn" onClick={handleSave}>Save</button>
        </div>     
    </div>
    <Toaster />
    </>
)

}

export default AddNote
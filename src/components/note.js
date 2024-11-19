import React from "react";
import { FaTrash } from "react-icons/fa";

function Note({id,title,noteBody,date,handleDelete}){
    return(
        <div className="note">
    
         <div className="note-header">
            <h4>Title:{title}</h4>
         </div>
         <div className="note-bode">
            <p>{noteBody}</p>
         </div>
         <div className="note-footer">
              <span>{date}</span>
              <FaTrash className="deleteBtn" onClick={()=>handleDelete(id)} />
         </div>
            
        </div>
    )
}

export default Note;
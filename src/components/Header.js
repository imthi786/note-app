
import {react} from 'react'

function Header({handleDarkmode}){
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=>handleDarkmode((previousvalue)=>!previousvalue)} className='savebtn'>Dark Mode</button>
        </div>
    )
}

export default Header;
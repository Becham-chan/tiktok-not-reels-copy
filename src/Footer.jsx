import "./Footer.css"
import { IoMusicalNoteSharp } from "react-icons/io5";

function App({desc}){
    return(
        <div className="footer">
            <h2>{desc.username}</h2>
            <p>{desc.captions}</p>
            <div className="mediaInfo">
                <IoMusicalNoteSharp className="icon"/>
                <p>{desc.tracks}</p>
                {desc.composer && <p>- {desc.composer}</p>}
                <img src={desc.profileIMG}/>
            </div>
            
        </div>
    )
}

export default App;
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { useState } from "react";
import "./Sidebar.css"


function Heart({data}){
    const [isLiked, setIsLiked] = useState(data.isLiked);
    
    const onClick = () => {
        setIsLiked(!isLiked);
        if (isLiked){
            data.likesCount -= 1
        }
        else{
            data.likesCount += 1
        }
    }
    return (
        <>
        <div className="icon">
            <FaHeart onClick={onClick} color={isLiked ? "red" : "white"} className={isLiked ? "likedheart" : "heart"}/>
        </div>
        <p>{data.likesCount}</p>
        </>
    )
}


function Comments({data}){
    return(
        <>
            <div className="icon">
                <GoComment color="white"/>
            </div>
            <p>{data.commentsCount}</p>
        </>
    )
}

function Share(){
    return(
        <>
            <div className="icon">
                <IoShareSocial color="white"/>
            </div>
        </>
        
    )
}


function App({data}){
    return(
        <div className="sidebar">
            <Heart data={data}/>
            <Comments data={data}/>
            <Share/>
        </div>
    )
}

export default App;
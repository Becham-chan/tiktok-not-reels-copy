
import './App.css'
import Video from "./Video"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import myheart from "./assets/My Heart.mp4"
import missing from "./assets/Missing.mp4"
import shutdown from "./assets/Shutdown.mp4"

function Reels ({data}) {
  return (
        <div className='content'>
          <Video src={data.videoSrc}/>
          <Sidebar data={data.data}/>
          <Footer desc={data.description}/>
        </div>
        
  )
}

function App() {

  const Info = [
    {
      videoSrc: myheart,
      data : {
        isLiked: false,
        likesCount: 2000,
        commentsCount: 10
      },
      description: {
        username: "turbo_weiner",
        captions: "First recorder performance by me :)",
        tracks: "My heart is here",
        composer: "Defenbach",
        profileIMG: ""
      }
    },
    {
      videoSrc: missing,
      data : {
        isLiked: false,
        likesCount: 152,
        commentsCount: 1
      },
      description: {
        username: "Suphanoot_chomshop",
        captions: "What is that!?",
        tracks: "Cara Mia Addio",
        composer: "",
        profileIMG: ""
      }
    },
    {
      videoSrc: shutdown,
      data : {
        isLiked: false,
        likesCount: 500,
        commentsCount: 0
      },
      description: {
        username: "p_@_n_pan",
        captions: "ได้เวลาพักเบรกแล้ว",
        tracks: "ไม่ทราบแหล่ง",
        composer: "",
        profileIMG: ""
      }
    }
  ]

  return (
    <div>
      {Info.map ((data) => 
        <Reels data={data}/>
        )}
    </div>
  )
}

export default App

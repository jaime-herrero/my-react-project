import { useEffect,useState } from "react"
import './MemeList.css'
import axios from 'axios';
import { use } from "react";

function MemeList() {
    const [memes, setMemes] = useState([]);
    const HTMLmemes = memes.map((meme)=>{
        return(
            <li key={meme.id} className="meme-item">
                <h2>{meme.name}</h2>
                <img src={meme.url} alt="meme img" className="meme-img"></img>

            </li>
        )
    })


        // useEffect (() => {
        //     fetch("https://api.imgflip.com/get_memes")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data.data.memes);
        //         setMemes(data.data.memes);
        // })
        // },[])

        useEffect (() => {
            axios.get("https://api.imgflip.com/get_memes").then((response) => {
                setMemes(response.data.data.memes);
            })

        },[])

  return (
    <ul className='meme-list'>
        {HTMLmemes}
    </ul>
  )
}

export default MemeList
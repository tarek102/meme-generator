import React from 'react'
import memesData from '../memesData'

export const Meme = () => {

  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNaumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNaumber].url)
  }

  return (
    <main>
        <div className='form'>
                <input className='inputs' type='text' placeholder='Top Text'></input>
                <input className='inputs' type='text' placeholder='Bottom Text'></input>
            <button onClick={getMemeImage} className='submit-btn'>Get a new meme image  🖼</button>
        </div>
    </main>
  )
}

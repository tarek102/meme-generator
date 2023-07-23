import React from 'react'
import memesData from '../memesData'

export const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemesImages, setAllMemesImages] = React.useState(memesData)


  function getMemeImage() {
    const memesArray = allMemesImages.data.memes;
    const randomNaumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNaumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
        <div className='form'>
                <input className='inputs' type='text' placeholder='Top Text'></input>
                <input className='inputs' type='text' placeholder='Bottom Text'></input>
            <button onClick={getMemeImage} className='submit-btn'>Get a new meme image  🖼</button>
        </div>
        <div className='image-div'>
          <img className='meme-image' alt='' src={meme.randomImage}></img>
        </div>
    </main>
  )
}

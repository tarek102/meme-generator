import React from 'react'
// import memesData from '../memesData'

export const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemesImages, setAllMemesImages] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemesImages(data))
  }, [])


  function getMemeImage() {
    const memesArray = allMemesImages.data.memes;
    const randomNaumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNaumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
        <div className='form'>
          <input 
            className='inputs' 
            type='text' 
            placeholder='Top Text'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />
          <input 
            className='inputs' 
            type='text' 
            placeholder='Bottom Text'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />

          <button onClick={getMemeImage} className='submit-btn'>Get a new meme image  🖼</button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}

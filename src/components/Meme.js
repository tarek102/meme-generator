import React from 'react'

export const Meme = () => {
  return (
    <main>
        <div className='form'>
                <input className='inputs' type='text' placeholder='Top Text'></input>
                <input className='inputs' type='text' placeholder='Bottom Text'></input>
            <button className='submit-btn'>Get a new meme image  🖼</button>
        </div>
    </main>
  )
}

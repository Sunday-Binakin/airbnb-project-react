import React from 'react'
import memeData from '../memeData'

const Meme = (props) => {
  const  getMemeImage = () => {
       // console.log('clicked')
       let url
       const memesArray = memeData.data.memes; // 100 memes
       const randomNumber = Math.floor(Math.random()*memesArray.length); // 0 - 99
        url = memesArray[randomNumber].url; // url of the meme
       console.log(url)
    }

    return (
        <main>
        {/* <p>{url}</p> */}
            <div className='form'>

                <input type="text"
                    className='form--input'
                    placeholder='top text' />
                <input type="text"
                    className='form--input'
                    placeholder='bottom text'
                />
                <button className='form--button' onClick={getMemeImage}>Get new meme image 😎</button>
            </div>

        </main>
    )
}

export default Meme
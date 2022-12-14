import React from 'react'
import memeData from '../memeData'

const Meme = () => {
    const [memeImage, setMemeImage] = React.useState("")

    const getMemeImage = () => {
        // console.log('clicked')

        const memesArray = memeData.data.memes; // 100 memes
        const randomNumber = Math.floor(Math.random() * memesArray.length); // 0 - 99
        // url of the meme
        setMemeImage(memesArray[randomNumber].url)
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
            <br />
            <img src={memeImage} alt="Meme image" className='meme__image' />
        </main>
    )
}

export default Meme
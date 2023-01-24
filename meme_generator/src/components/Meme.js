import React from "react";
import memeData from "../memeData";

const Meme = () => {

//    

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  const getMemeImage = () => {
    // console.log('clicked')
    const memesArray = allMemeImages.data.memes; // 100 memes
    const randomNumber = Math.floor(Math.random() * memesArray.length); // 0 - 99
    // url of the meme
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme =>{
        return {
            ...prevMeme,
            randomImage: url
        }
    });
  };
  // handling changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }));
  }


  return (
    <main>
      {/* <p>{url}</p> */}
      <div className="form">
        <input 
        type="text" 
        className="form--input" 
        placeholder="top text" 
        value={meme.topText} 
        onChange={handleChange}

        />
        <input
         type="text" 
        className="form--input"
         placeholder="bottom text" 
          value={meme.bottomText} 
          onChange={handleChange}/>
        <button 
        className="form--button"
         onClick={getMemeImage}>
          Get new meme image 😎
        </button>
      </div>
      <br />
      <img src={meme.randomImage} alt="Meme image" className="meme__image" />
      <h2 className="meme__top-text">{meme.topText}</h2>
      <h2 className="meme__bottom-text">{meme.bottomText}</h2>
    </main>
  );
};

export default Meme;

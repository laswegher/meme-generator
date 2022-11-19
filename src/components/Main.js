import React from 'react';

export default function Main() {
  //STATE VARIABLES
  const [meme, setmeme] = React.useState({
    topText: '',
    bottomText: '',
    memeImage: 'https://i.imgflip.com/26jxvz.jpg',
  });

  // STATE MEMEIMG
  const [memeImgArray, setmemeImgArray] = React.useState([]);

  //API CALL
  React.useEffect(() => {
    async function getApi() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setmemeImgArray(data.data.memes);
    }
    getApi();
  }, []);

  //TAKING RANDOM IMG FROM ARRAY AND SETTING VALUE
  function setMemeImage() {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomImgUrl = memeImgArray[randomNumber].url;
    setmeme((prevState) => {
      return {
        ...prevState,
        memeImage: randomImgUrl,
      };
    });
  }

  // FORM EVENT HANDELER
  function handleChange(event) {
    const { name, value } = event.target;
    setmeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  //JSX
  return (
    <div className="main container">
      <div className="main-top">
        <input
          className="text-input"
          type="text"
          onChange={handleChange}
          placeholder="top text"
          name="topText"
        />

        <input
          className="text-input"
          type="text"
          onChange={handleChange}
          placeholder="bottom text"
          name="bottomText"
        />

        <button
          className="btn"
          onClick={setMemeImage}
        >
          Get a new meme image
        </button>
      </div>

      <div className="main-bottom">
        <h1 className="top-text">{meme.topText}</h1>
        <h1 className="bottom-text">{meme.bottomText}</h1>
        <div>
          <img
            className="image-container"
            src={meme.memeImage}
            alt="meme"
          ></img>
        </div>
      </div>
    </div>
  );
}

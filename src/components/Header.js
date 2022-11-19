import { AiOutlineBars } from 'react-icons/ai';

function Header() {
  return (
    <header>
      <div className="header container d-flex">
        <img
          className="header-logo"
          src="./images/troll-face.png"
          alt="/"
        />
        <h2 className="header-title">Meme Generator</h2>
        <div className="header-text">
          <AiOutlineBars size={25} />
        </div>
      </div>
    </header>
  );
}

export default Header;

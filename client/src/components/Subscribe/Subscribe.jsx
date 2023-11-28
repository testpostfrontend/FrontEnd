import './style.css';
import img1 from '../../assets/ho.png';

const Subscribe = () => {
  return (
    <div className="home-container">
      <img src={img1} alt="" className="subscribe-image" />
      <div className="subscribe-content">
        <p className="subscribtitle">
          Recevez chaque semaine
          <br />
          nos bons plans et astuces
        </p>
        <div className="subscribe-form">
          <div className="input-wrapper">
            <input className='inpt' type="email" placeholder="Enter your email" />
            <button className='subbtn'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

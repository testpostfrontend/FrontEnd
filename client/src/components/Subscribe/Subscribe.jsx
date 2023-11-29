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
          
            <input className='inptt' type="email" placeholder="Enter your email" />
          
        </div>
            <button className='subtn'>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;

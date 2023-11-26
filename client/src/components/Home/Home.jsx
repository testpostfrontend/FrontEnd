import './style.css';
import img1 from '../../assets/home.png';

const Home = () => {
  return (
    <div className="home-container">
      <img src={img1} alt="Home Image" className="home-image" />
      <div className="search-form-container">
        <form className="search-form">
          <div className="form-group">
            <label htmlFor="location">
              <i className="fas fa-map-marker-alt"></i>
            </label>
            <input type="text" id="location" placeholder="Location" />
          </div>
          <div className="form-group">
            <label htmlFor="date">
              <i className="far fa-calendar-alt"></i>
            </label>
            <input type="date" id="date" />
          </div>
          <div className="form-group">
            <label htmlFor="travelers">
              <i className="fas fa-users"></i>
            </label>
            <input type="number" id="travelers" placeholder="Travelers" />
          </div>
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i> Search
          </button>
        </form>
      </div>
      <p className='hometitle'>Une expérience inoubliable</p>
    </div>
  );
}

export default Home;

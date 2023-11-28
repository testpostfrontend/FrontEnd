import  { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import img1 from "../../assets/home.png";
import img2 from '../../assets/location.png';
import img4 from '../../assets/ville.png';
import img3 from '../../assets/voyager.png';
import img5 from '../../assets/calendar.png';



const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [travelers, setTravelers] = useState(1);

  const locationOptions = [
    { value: "Tunis", label: "Tunis" },
    { value: "Sousse", label: "Sousse" },
    { value: "Nabeul", label: "Nabeul" },
  ];

  const travelerOptions = Array.from({ length: 5 }, (_, index) => ({
    value: index + 1,
    label: `${index + 1} Traveler${index !== 0 ? "s" : ""}`,
  }));

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleTravelersChange = (selectedOption) => {
    setTravelers(selectedOption.value);
  };

  return (
    <div className="home-container">
      <img src={img1} alt="Home Image" className="home-image" />
      <div className="search-for-container">
        <form className="search-form">
          <div className="form-group">
            <label htmlFor="location">
            <img src={img2}  />
            </label>
            <Select
              id="location"
              placeholder="Choisir une ville ou une région"
              value={selectedLocation}
              onChange={handleLocationChange}
              options={locationOptions}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">
            <img src={img4}  />
            </label>
            <Select
              id="location"
              placeholder="Type de logement"
              value={selectedLocation}
              onChange={handleLocationChange}
              options={locationOptions}
            />
          </div>
          <div className="form-group date-picker-container">
            <label htmlFor="date">
            <img src={img5}  />
              
            </label>
            <DatePicker
            
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelers">
            <img src={img3}  />
            </label>
            <Select
              id="travelers"
              placeholder="Travelers"
              value={{ value: travelers, label: `${travelers} Traveler${travelers !== 1 ? "s" : ""}` }}
              onChange={handleTravelersChange}
              options={travelerOptions}
            />
          </div>
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i> Search
          </button>
        </form>
      </div>
      <p className="hometitle">Une expérience inoubliable</p>
    </div>
  );
};

export default Home;

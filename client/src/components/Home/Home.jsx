// import  { useState } from "react";
// import Select from "react-select";
// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import img1 from '../../assets/home.png';
// import img6 from '../../assets/hoome.png';
// import img7 from '../../assets/leh.png';

// import img2 from '../../assets/location.png';
// import img4 from '../../assets/ville.png';
// import img3 from '../../assets/voyager.png';
// import img5 from '../../assets/calendar.png';

const Home = () => {
  // const [selectedLocation, setSelectedLocation] = useState(null);
  // const [startDate, setStartDate] = useState(new Date());
  // const [travelers, setTravelers] = useState(1);

  // const locationOptions = [
  //   { value: "Tunis", label: "Tunis" },
  //   { value: "Sousse", label: "Sousse" },
  //   { value: "Nabeul", label: "Nabeul" },
  // ];

  // const travelerOptions = Array.from({ length: 5 }, (_, index) => ({
  //   value: index + 1,
  //   label: `${index + 1} Traveler${index !== 0 ? "s" : ""}`,
  // }));

  // const handleLocationChange = (selectedOption) => {
  //   setSelectedLocation(selectedOption);
  // };

  // const handleTravelersChange = (selectedOption) => {
  //   setTravelers(selectedOption.value);
  // };

  return (
    <div className="home-container">
            <p className="hometitle">Une expérience inoubliable</p>

      <img src={img1} alt="Home Image" className="home-image" />
      {/* <div className="pdiv">
        <div className="pdiv-2">
          <div className="pdiv-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/604dba330b6751ee72120df2b9152ffa456963355f436a10a4eecb682efdbdf3?"
              className="pimg"
            />
            <div className="pdiv-4">Ville en Tunisie</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7670086cd6dd5ca3ae0ca650a4a3b9918d3d472a8525ee309da69fb751ef997?"
              className="pimg-2"
            />
          </div>
          <div className="pdiv-5">Choisir une ville ou une région</div>
        </div>
        <div className="pdiv-6">
          <div className="pdiv-7">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f8f15b00626d049ae2ce8032667263a33e490ae2f3b2f31801d4ae78f15e887?"
              className="pimg-3"
            />
            <div className="pdiv-8">Type de logement</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec26411f3227dde97d789b212e2a160613cf1c0dae07beca0e4cff5812cc178?"
              className="pimg-4"
            />
          </div>
          <div className="pdiv-9">Villa</div>
        </div>
        <div className="pdiv-10">
          <div className="pdiv-11">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a8bd88f37e2238e4b436741fcfe03ee795968c711a6451ab0012f33a22b96a3?"
              className="pimg"
            />
            <div className="pdiv-12">Dates</div>
          </div>
          <div className="pdiv-13">Ajouter une date</div>
        </div>
        <div className="pdiv-14">
          <div className="pdiv-15">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7ffdef0042c2fe420a35a774c717d6ad87f431e1c4d1b6088411cf14090a853?"
              className="pimg"
            />
            <div className="pdiv-16">Voyageurs</div>
          </div>
          <div className="pdiv-17">0</div>
        </div>
        <div className="pdiv-18">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6d5bf25c1096e40e8fde3071f6fcc69b08863cc6a48ca7eaf30c75e6c9b2ae?"
            className="pimg-5"
          />
          <div className="pdiv-19">Recherche</div>
        </div>
      </div> */}
      {/* <div className="supportetoile">
        <img src={img7} alt="Home Image" className="leh" />
      </div> */}
      {/* <div>
        <img src={img6} alt="" className="nnn" />
      </div> */}
    </div>
  );
};

export default Home;

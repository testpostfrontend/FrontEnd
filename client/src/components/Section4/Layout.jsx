import './style.css';
import img1 from '../../assets/port.png';
import img2 from '../../assets/clean.jpg';
import img3 from '../../assets/car1.png';
import img4 from '../../assets/peaople.png';
import img5 from '../../assets/satrs.png';
import img6 from '../../assets/traget.png';
import img7 from '../../assets/likes.png';
// import img8 from '../../assets/allsos.png';
// import img9 from '../../assets/hs.png';
// import img10 from '../../assets/dr.png';
// import img11 from '../../assets/t1.png';
// import img12 from '../../assets/t2.png';
// import img13 from '../../assets/t3.png';
// import img14 from '../../assets/t4.png';
// import img15 from '../../assets/t5.png';
// import img16 from '../../assets/t6.png';

const Layout = () => {
  const dummyData = [
    {
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing ratione perferendis cupiditate provident cum? Assumenda, quod',
      image: img1,
    },
    {
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing ratione perferendis cupiditate provident cum? Assumenda, quod',
      image: img2,
    },
    {
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing ratione perferendis cupiditate provident cum? Assumenda, quod',
      image: img3,
    },
  ];
  const socielData = [
    { description: 'Visiteur', image: img4 },
    { description: '5 Stars Rating', image: img5 },
    { description: 'Tours', image: img6 },
    { description: 'Social Likes', image: img7 },
  ];
  return (
    <div className="section-3-1">
      {/* <div className="hard">

        <div className="soc-heading">
          <p className="soc-title">Ténoignages</p>
          <p className="soc-subtitle">
           Ce que disent nos client...
          </p>
        </div>
        <img className="imgallsos " src={img8} alt="" />
        <img className="hs " src={img9} alt="" />
        <img className=" ds" src={img10} alt="" />
        <img className=" t1" src={img11} />
        <img className=" t2" src={img12} />
        <img className=" t3" src={img13} />
        <img className=" t4" src={img14} />
        <img className=" t5" src={img15} />
        <img className=" t6" src={img16} />
      </div> */}
      <div className="howmany">
        <div className="ggg-container ">
          {socielData.map((blog, index) => (
            <div key={index} className="socialg">
              <img className=" blim" src={blog.image} alt="blog" />
              <div className="blog-details">
                <p className="descriptions">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="an-heading">
        <p className="an-title">Et ce n’est pas tout</p>
        <p className="an-subtitle">Find Travel Perfection</p>
        <p className="an-sub">
          An enim nullam tempor gravida donec enim congue magna at pretium purus
          pretium ligula rutrum luctus risusd diam eget risus varius blandit sit
          amet non magna.
        </p>
        <div className="ggg-container ">
          {dummyData.map((blog, index) => (
            <div key={index} className="ggg">
              <img className=" blim" src={blog.image} alt="blog" />
              <div className="blog-details">
                <p className="descriptio">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;

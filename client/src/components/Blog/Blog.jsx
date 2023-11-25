import './style.css';
import img1 from '../../assets/blog1.png';
import img2 from '../../assets/blog2.png';
import img3 from '../../assets/blog3.png';

const Blog = () => {
  const dummyData = [
    { title: 'Title1 ', date: '25 may 2023', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing ratione perferendis cupiditate provident cum? Assumenda, quod', image: img1 },
    { title: 'Title2', date: '25 may 2023', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing ratione perferendis cupiditate provident cum? Assumenda, quod', image: img2 },
    { title: 'Title3', date: '25 may 2023', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing ratione perferendis cupiditate provident cum? Assumenda, quod', image: img3 },
  ];

  return (
    <div>
      <div className="blog-heading">
        <p className="blog-title">Notre blog</p>
        <p className="blog-subtitle">Pour séjourner tranquillement en Tunisie</p>
        <p className="blog-sub">An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna .</p>

      </div>
      <div className="blog-container">
        {dummyData.map((blog, index) => (
          <div key={index} className="blog-card">
            <img className="blog-image" src={blog.image} alt="blog" />
            <div className="blog-details">
              <div className="icon-container">
                <i className="fas fa-calendar-alt calendar-icon"></i>
                <span className="date">{blog.date}</span>
              </div>
              <h3 className="title">{blog.title}</h3>
              <p className="description">{blog.description}</p>
              <div className="read-more">
                <span>
                  Read more <i className="fas fa-arrow-right arrow-icon"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

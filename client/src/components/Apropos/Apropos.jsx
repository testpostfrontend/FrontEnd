import './Apropos.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/H.png';
import map from '../../assets/map.png';
import star from '../../assets/star.png';
import verifier from '../../assets/verifier.png';

const Apropos = () => {
  return (
    <div className="section-1">
      <div className="bg" />
      <div className="ft">
        <div className="divimg">
          <img className="mask-group-icon" alt="" src={map} />
          <img className="img-icon" alt="" src={img1} />
          <img className="img-icon1" alt="" src={img3} />
          <div className="img">
            <img className="img-child" alt="" src={img2} />
          </div>
        </div>

        <div className="text">
          <div className="text-wrapper">
            <div className="text1">
              <div className="propos-de-nous">à propos de nous ...</div>
              <b className="dcouvrez-notre-histoire-container">
                <p className="dcouvrez">{`Découvrez `}</p>
                <p className="dcouvrez">notre histoire</p>
              </b>
              <div className="an-enim-nullam">
                An enim nullam tempor gravida donec enim congue magna at pretium
                purus pretium ligula rutrum luctus risusd diam eget risus varius
                blandit sit amet non magna.
              </div>
              <div className="an-enim-nullam">
                An enim nullam tempor gravida donec enim congue magna at pretium
                purus pretium ligula rutrum luctus risusd diam eget risus varius
                blandit sit amet non magna.
              </div>
            </div>
          </div>
        </div>
        <div className="div">
          <div className="fiabilit-parent">
            <b className="fiabilit">Fiabilité</b>
            <div className="ut-enim-ad">
              Ut enim ad minim veniam, quis nostrud exercitation
            </div>
          </div>
          <img className="reliable-icon" alt="" src={star} />
        </div>
        <div className="div1">
          <div className="fiabilit-parent">
            <b className="fiabilit">Sécurité</b>
            <div className="ut-enim-ad">
              Ut enim ad minim veniam, quis nostrud exercitation
            </div>
          </div>
          <img className="reliable-icon" alt="" src={verifier} />
        </div>
      </div>
    </div>
  );
};

export default Apropos;

import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <h2>Donors</h2>
          <Image src="/donor.jpg" width="200" height="150" alt="" />
        </div>
        <div>
          <div>
            <div>
              <h4>ADDRESS</h4>
              <p>500 Terry Francine St. San Francisco, CA 94158</p>
            </div>
            <div>
              <h4>PHONE</h4>
              <p>+233 20 334 443</p>
            </div>
            <div>
              <h4>EMAIL</h4>
              <p>info@nehopcosa.org</p>
            </div>
          </div>
          <div>
            <a href="">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram fa-lg"></i>
            </a>
            <a href="">
              <i className="fa fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container">&copy; 2023 NEHOPCOSA</div>
    </footer>
  );
};

export default Footer;

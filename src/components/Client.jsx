import clientLogoOne from "./../assets/images/clientLogoOne.png";
import clientLogoTwo from "./../assets/images/clientLogoTwo.png";
import clientLogoThree from "./../assets/images/clientLogoThree.png";
import clientLogoFour from "./../assets/images/clientLogoFour.png";
import clientLogoFive from "./../assets/images/clientLogoFive.png";
import clientLogoSix from "./../assets/images/clientLogoSix.png";

import styles from "./../styles/Client.module.css";

const Client = () => {
  return (
    <div className={styles.clientContainer}>
      <div className={styles.heading}>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className={styles.logos}>
        <div className="logoContainer">
          <img src={clientLogoOne} alt="ClientLogoOne" />
        </div>
        <div className="logoContainer">
          <img src={clientLogoTwo} alt="ClientLogoTwo" />
        </div>
        <div className="logoContainer">
          <img src={clientLogoThree} alt="ClientLogoThree" />
        </div>
        <div className="logoContainer">
          <img src={clientLogoFour} alt="ClientLogoFour" />
        </div>
        <div className="logoContainer">
          <img src={clientLogoFive} alt="ClientLogoFive" />
        </div>
        <div className="logoContainer">
          <img src={clientLogoSix} alt="ClientLogoSix" />
        </div>
        <div className="logoContainer">
          <img src={clientLogoThree} alt="ClientLogoThree" />
        </div>
      </div>
    </div>
  );
};

export default Client;

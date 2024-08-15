import AppButton from "./AppButton";
import styles from "./../styles/Banner.module.css";
import bannerImage from "./../assets/images/bannerImage.png";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <div className={styles.textContent}>
          <h1>
            Lessons and insights <br /> <span>from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <div className={styles.btn}>
          <AppButton text={"Register"} bgColor={"#4CAF4F"} textColor={"#FFF"} />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;

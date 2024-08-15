import logo from "./../assets/images/Logo.png";
import styles from "./../styles/Nav.module.css";
import AppButton from "./AppButton";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <div className={styles.menus}>
        <div className={styles.menu}>
          <p>Home</p>
        </div>
        <div className={styles.menu}>
          <p>Service</p>
        </div>
        <div className={styles.menu}>
          <p>Feature</p>
        </div>
        <div className={styles.menu}>
          <p>Product</p>
        </div>
        <div className={styles.menu}>
          <p>Testimonial</p>
        </div>
        <div className={styles.menu}>
          <p>FAQ</p>
        </div>
      </div>

      <div className={styles.btns}>
        <div className={styles.btn}>
          <AppButton text={"Login"} bgColor={"#FFF"} textColor={"#4CAF4F"} />
        </div>
        <div className={styles.btn}>
          <AppButton text={"Signup"} bgColor={"#4CAF4F"} textColor={"#FFF"} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

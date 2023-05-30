import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import agentPhoto from "../../assets/Rectangle 1.jpg";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <Navbar />

      <div className={styles.contentWrapper}>
        <img src={agentPhoto} className={styles.headingImage} />
        <div className={styles.textWrapper}>
          <h1>Your Real Estate Agent Your Real Estate Agent</h1>
          <h4>I will exceed your expectations</h4>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;

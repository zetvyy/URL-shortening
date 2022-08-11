import React from "react";
import logo from "../../images/logo.svg";
import ilustration from "../../images/illustration-working.svg";
import styles from "./Home.module.scss";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className={styles.home_container}>
        <nav>
          <div className={styles.left}>
            <img src={logo} alt="logo" />
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className={styles.right}>
            <button className={styles.login}>Login</button>
            <button className={styles.signup}>Signup</button>
          </div>
        </nav>

        <section className={styles.content}>
          <section className={styles.jumbotron}>
            <div className={styles.text_title}>
              <h1>More than just shorter links</h1>
              <p>
                Build your brand's recognition and get detailed insights on how
                your links are performing
              </p>
              <button className={styles.btn_started}>Get Started</button>
            </div>
            <div className={styles.img_illustration}>
              <img src={ilustration} alt="illustration" />
            </div>
          </section>
        </section>
      </div>

      <footer>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h1>Shortly</h1>
          </div>
          <div className={styles.features}>
            <p>Features</p>
            <ul>
              <li>Link Shortenings</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className={styles.resources}>
            <p>Resources</p>
            <ul>
              <li>Blog</li>
              <li>Developer</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.company}>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Our Teams</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.social_media}>
            <AiFillFacebook className={styles.icon} />
            <AiOutlineTwitter className={styles.icon} />
            <BsPinterest className={styles.icon} />
            <AiOutlineInstagram className={styles.icon} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

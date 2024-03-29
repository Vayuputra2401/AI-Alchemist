import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, AI Alchemist here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Where Innovation Meets Algorithms: Your Hub for Machine Learning and Development Insights.</h1>
          <p className={styles.postDesc}>
          Welcome to our vibrant community where machine learning and development converge to shape the future. 
          Embark on a journey with us as we decode the intricacies of code, unravel the secrets of algorithms, 
          and explore the boundless possibilities of technology.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

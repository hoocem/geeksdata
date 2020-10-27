import React from 'react';
import PropTypes from 'prop-types';
import styles from "./sectionTitle.module.scss";

const SectionTitle = ({ title, description, mode = "dark", ...restProps}) => {

  const formatTitle = (title) => {
    const words = title.split(" ");

    return words.map(word =>
      <><span style={{ color: "#00bfe6" }}>{word[0]}</span>{word.slice(1)} </>
    );
  }

  return (
    <div className={`${styles.sectionTitle} ${mode === "light" ? styles.light : ""}`} {...restProps}>
      <div className={styles.title}>
        <h2>{formatTitle(title)}</h2>
      </div>
      <hr />
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

SectionTitle.defaultProps = {
  description: ""
};

export default SectionTitle;

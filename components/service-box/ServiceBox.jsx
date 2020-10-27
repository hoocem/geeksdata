import React from 'react';
import PropTypes from 'prop-types';
import styles from "./serviceBox.module.scss";

const ServiceBox = ({ imageSrc, title, description, ...restProps }) => {
  return (
    <div className={styles.serviceBox} {...restProps}>
      {!!imageSrc && (
        <img src={imageSrc} />
      )}
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
        <hr />
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
};

ServiceBox.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceBox;

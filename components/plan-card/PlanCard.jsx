import React from 'react';
import PropTypes from 'prop-types';
import styles from "./planCard.module.scss";

const PlanCard = ({ title, price, features, buttonLabel, active }) => {
  return (
    <div className={`${styles.planCard} ${active ? styles.active : ""}`}>
      <h3 className={styles.planTitle}>{title}</h3>
      <img className={styles.subLine} src="/plan-box.png"/>
      <h4 className={styles.price}>
        $<span>{price}</span>/Month
      </h4>
      <ul className={styles.featureList}>
        {features.map(feature => (
          <li key={feature} className={styles.item}>
            <img src="/plan-round.png"/>
            {feature}
          </li>
        ))}
      </ul>
      <a className={styles.button}>{buttonLabel}</a>
    </div>
  );
};

PlanCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.arrayOf(PropTypes.string),
  buttonLabel: PropTypes.string,
  active: PropTypes.bool,
};

export default PlanCard;

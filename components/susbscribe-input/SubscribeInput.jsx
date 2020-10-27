import React from 'react';
import PropTypes from 'prop-types';
import styles from "./subscribeInput.module.scss";

const SubscribeInput = ({ placeholder, buttonLabel}) => {
  return (
    <div className={styles.subscribeInput}>
      <input id="useremail" placeholder={placeholder} required type="email" />
      <input id="submit" type="submit" value={buttonLabel} />
    </div>
  );
};

SubscribeInput.propTypes = {
  placeholder: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default SubscribeInput;

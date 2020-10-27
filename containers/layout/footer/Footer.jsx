import React from 'react';
import { Container, Row, Col } from "reactstrap";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col sm={6}>
            <div className={styles.leftSide}>
              <ul>
                <li>
                  <a href="mailto:contact@geeksdata.fr">contact@geeksdata.fr</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.rightSide}>
              <h6 className={styles.text}>© Geeks Data Technical Interview. By Houssem TLILI.</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

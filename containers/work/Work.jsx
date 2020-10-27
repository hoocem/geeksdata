import React from 'react';
import { Container, Row, Col } from "reactstrap"
import styles from "./work.module.scss";
import SectionTitle from "../../components/section-title";

const Work = () => {
  return (
    <section className={styles.work}>
      <Container>
        <Row>
          <Col md={12} className={styles.title}>
            <SectionTitle
              title="Comment Ca Marche?"
              description="GEEKS DATA est un éditeur de solutions logicielles (data science – textmining) au service des objectifs métiers de nos clients. Nous accompagnons plusieurs organisations de différentes tailles dans leurs projets Data."
            />
          </Col>
          <Col md={12}>
            <ul className={styles.nav}>
              <li className={styles.item}>
                <a className={styles.link}>
                  <img src="/tab-icon/installation.png"/>
                  <h6>Initializing</h6>
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link}>
                  <img src="/tab-icon/001-tap.png"/>
                  <h6>Development</h6>
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link}>
                  <img src="/tab-icon/button.png"/>
                  <h6>Customization</h6>
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link}>
                  <img src="/tab-icon/002-settings.png"/>
                  <h6>Installation</h6>
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link}>
                  <img src="/tab-icon/key-1.png"/>
                  <h6>Security</h6>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className={styles.image}>
        <img src="/Security.png"/>
      </div>
    </section>
  );
};

export default Work;

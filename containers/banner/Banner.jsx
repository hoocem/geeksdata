import React from 'react';
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <Container>
          <Row>
            <Col md={7}>
              <div className={styles.leftPanel}>
                <div className={styles.content}>
                  <div className={styles.headerText}>
                    <h1><span className={styles.mainColor}>T</span>rouver <span
                      className={styles.small}>et </span><span className={styles.mainColor}>V</span>isualiser</h1>
                    <div className={styles.suffixImg}>
                      <img alt="suffix image" src="/suffix.png" />
                    </div>
                  </div>
                  <div className={styles.headerSubText}>
                    <h3>comprendre le<span className={styles.mainColor}> big data</span> pour améliorer la prise de décision</h3>
                  </div>
                  <div className={styles.headerSubText}>
                    <h6>Réduire les risques, détecter les fraudes et contrôler la cybersécurité <span className={styles.mainColor}>en temps réel</span></h6>
                  </div>
                  <div className={styles.actions}>
                    <ul>
                      <li>
                        <Link href="/solution">
                          <a className={styles.button}>En savoir plus</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <div>
              <div className={styles.rightPanel}>
                <img alt="slid-banner" src="/banner-right.png" />
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <img alt="background" className={styles.bg} src="/banner-bg2.png" />
    </section>
  );
};

export default Banner;

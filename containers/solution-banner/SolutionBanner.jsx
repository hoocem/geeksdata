import React from 'react';
import styles from "./solutionBanner.module.scss";
import {Col, Container, Row} from "reactstrap";

const SolutionBanner = () => {
  return (
    <section className={styles.solutionBanner}>
      <div className={styles.wrapper}>
        <Container>
          <Row>
            <Col md={7}>
              <div className={styles.leftPanel}>
                <div className={styles.content}>
                  <div className={styles.headerText}>
                    <h1><span className={styles.small}>L'intelligence Artificielle</span> <span className={styles.mainColor}>IA</span></h1>
                    <div className={styles.suffixImg}>
                      <img alt="suffix image" src="/suffix.png" />
                    </div>
                  </div>
                  <div className={styles.headerSubText}>
                    <h3>Let's Build Something <span className={styles.mainColor}>Great</span> Together</h3>
                  </div>
                  <div className={styles.headerSubText}>
                    <h6>GEEKS DATA est un éditeur de solutions logicielles (data science – textmining) au service des objectifs métiers de nos clients. Nous accompagnons plusieurs organisations de différentes tailles dans leurs projets Data. Nous consacrons ainsi une partie de notre activité dans la recherche et l’innovation dans le domaine prédictif ou la génération textuelle automatique.</h6>
                  </div>
                </div>
              </div>
            </Col>
            <div>
              <div className={styles.rightPanel}>
                <img alt="slid-banner" src="/solution.png" />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default SolutionBanner;

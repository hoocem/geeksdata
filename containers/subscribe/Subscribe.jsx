import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from "./subscribe.module.scss";
import SubscribeInput from "../../components/susbscribe-input";

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className={styles.leftPanel}>
              <img alt="subscribe" src="/subscribe-icon.png" />
              <div className={styles.content}>
                <h3 className={styles.title}>Start 30 days free trial</h3>
                <h6 className={styles.subTitle}>Our users are impatient. They're probably distracted too. Keep it
                  simple and beautiful, fun and functional.
                </h6>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={styles.rightPanel}>
              <SubscribeInput placeholder="Enter your email" buttonLabel="Get Started" />
              <div className={styles.subText}>
                <h6>Free 30-day trial</h6>
                <h6>Easy setup</h6>
                <h6>Cancel any time</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;

import React from 'react';
import {Col, Container, Row} from "reactstrap";
import SectionTitle from "../../components/section-title";
import styles from "./client.module.scss";

const Clients = () => {
  return (
    <section className={styles.client}>
      <div className={styles.wrapper}>
        <Container>
          <Row>
            <Col md={12} className={styles.top}>
              <SectionTitle
                title="Nos Clients"
                description="Geeks Data Consulting est à votre disposition pour les meilleurs services"
              />
            </Col>
            <Col lg={3} md={4} sm={6} className={styles.clientsContainer}>
              <img src="/clients/client-1.png"/>
            </Col>
            <Col lg={3} md={4} sm={6} className={styles.clientsContainer}>
              <img src="/clients/client-2.png"/>
            </Col>
            <Col lg={3} md={4} sm={6} className={styles.clientsContainer}>
              <img src="/clients/client-3.png"/>
            </Col>
            <Col lg={3} md={4} sm={6} className={styles.clientsContainer}>
              <img src="/clients/client-4.png"/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Clients;

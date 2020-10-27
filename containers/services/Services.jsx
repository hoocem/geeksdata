import React from 'react';
import { Container, Row, Col } from "reactstrap";
import styles from "./services.module.scss";
import SectionTitle from "../../components/section-title";
import ServiceBox from "../../components/service-box";
import services from "../../data-mock/services";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.wrapper}>
        <Container>
          <Row>
            <Col md={12} className={styles.top}>
              <SectionTitle
                title="Nos Services"
                description="Geeks Data Consulting est à votre disposition pour les meilleurs services"
              />
            </Col>
            {services.map(({ id, imageSrc, title, description }) => (
              <Col lg={4} md={6} key={id} className={styles.serviceContainer}>
                <ServiceBox imageSrc={imageSrc} title={title} description={description} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Services;

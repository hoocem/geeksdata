import React from 'react';
import {Col, Container, Row} from "reactstrap";
import SectionTitle from "../../components/section-title";
import styles from "./pricing.module.scss";
import PlanCard from "../../components/plan-card";
import plans from "../../data-mock/plans";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <Container>
        <Row>
          <Col md={12} className={styles.title}>
            <SectionTitle
              title="Nos Plans"
              description="GEEKS DATA est un éditeur de solutions logicielles (data science – textmining) au service des objectifs métiers de nos clients. Nous accompagnons plusieurs organisations de différentes tailles dans leurs projets Data."
              mode="light"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {plans.map(({ id, ...rest}) => (
            <Col key={id} md={4}>
              <PlanCard {...rest} active={id === 2}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;

import React, { useContext } from 'react';
import {useRouter} from "next/router";
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";
import styles from "./header.module.scss";
import {AuthContext} from "../../../contexts/auth/authContext";

const Header = props => {
  const { authDispatch } = useContext(AuthContext);

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", "");
      authDispatch({ type: "LOGOUT" });
    }
  };

  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <Col>
            <nav>
              <Link href="/">
                <a className={styles.logoLink} href="/">
                  <img alt="geeksdata logo" className={styles.logoImage} src="/logo-geeksdata.png"/>
                </a>
              </Link>
              <div className={styles.navBar}>
                <ul className={styles.menu}>
                  <li className={styles.menuItem}>
                    <Link href="/">
                      <a className={styles.menuLink}>
                        <span>Acceuil</span>
                      </a>
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/solution">
                      <a className={styles.menuLink}>
                        <span>Solution</span>
                      </a>
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                      <a className={styles.button} onClick={logout}>
                        <span>Logout</span>
                      </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

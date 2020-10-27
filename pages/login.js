import { useState, useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import { AuthContext } from "../contexts/auth/authContext";
import {Col, Container, Row} from "reactstrap";
import styles from "../styles/login.module.scss";
import SEO from "../components/seo";

export default function Login() {
  const router = useRouter();

  const { authState, authDispatch } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  if (isAuthenticated) router.push("/");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!username && !!password)
  }, [username, password]);

  const login = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", `${username}.${password}`);
      authDispatch({ type: "LOGIN" });
    }
  };

  return !isAuthenticated && (
    <>
      <SEO title="Login | Geeks Data" description="Page de login du mini site du teste technique pour Geeks Data" />
      <div className={styles.login}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col md={12}>
              <Row noGutters className={styles.wrapper}>
                <Col md={5} lg={5} sm={12}>
                  <div className={styles.card}>
                    <div className={styles.top}>
                      <h2>Login:</h2>
                    </div>
                    <div className={styles.bottom}>
                      <Row>
                        <Col sm={12} className={styles.inputWrapper}>
                          <label htmlFor="username">Username</label>
                          <input type="text" id="username" className={styles.input} onChange={e => setUsername(e.target.value)}/>
                        </Col>
                        <Col sm={12} className={styles.inputWrapper}>
                          <label htmlFor="password">Password</label>
                          <input type="password" id="password" className={styles.input} onChange={e => setPassword(e.target.value)}/>
                        </Col>
                      </Row>
                      <div className={styles.action}>
                        <a
                          className={`${styles.button} ${isValid ? "" : styles.desactive}`}
                          onClick={() => {
                            isValid && login();
                          }}
                        >
                          Enter
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

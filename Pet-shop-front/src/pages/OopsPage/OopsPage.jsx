import { usePageHeading } from "../../shared/hooks/usePageHeading";
import { Link } from "react-router-dom";
import Container from "../../shared/components/Container/Container";
import PrimaryButton from "../../shared/components/PrimaryButton/PrimaryButton";
import styles from "./OopsPage.module.css";

const OopsPage = () => {
    usePageHeading("404");

    return (
        <Container>
        <div className={styles.wrapper}>
            <img
            src="/src/assets/images/404.png"
            alt="404"
            className={styles.image}
            />
            <h1 className={styles.heading}>Page Not Found</h1>
            <p className={styles.message}>
            We’re sorry, the page you requested could not be found.
            </p>
            <p className={styles.message}>Please go back to the homepage.</p>
            <br />
            <Link to="/">
            <PrimaryButton width="209px">Go home</PrimaryButton>
            </Link>
        </div>
        </Container>
    );
};

export default OopsPage;
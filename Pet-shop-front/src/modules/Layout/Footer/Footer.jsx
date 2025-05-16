import BlockTitle from '../../../shared/components/BlockTitle/BlockTitle';
import Container from '../../../shared/components/Container/Container';
import styles from './Footer.module.css';
import { InstagramIcon, WhatsAppIcon } from '../../../assets/icons/Icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <BlockTitle title="Contact" />
                <div className={styles.infoGrid}>
                    <div className={styles.card}>
                        <p className={styles.label}>Phone</p>
                        <p className={styles.value}>+49 30 915-88492</p>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.label}>Socials</p>
                        <div className={styles.socials}>
                            <a href="http://instagram.com" className={styles.link} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="http://whatsapp.com" className={styles.link} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <WhatsAppIcon />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.label}>Address</p>
                        <p className={styles.value}>Wallstraße 9-13, 10179 Berlin, Deutschland</p>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.label}>Working Hours</p>
                        <p className={styles.value}>24 hours a day</p>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.956935254321!2d13.412496376931972!3d52.5103892381364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e2a0f299485%3A0xe43a0a39d487e36d!2sWallstraße%209-13%2C%2010179%20Berlin!5e0!3m2!1sde!2sde!4v1715330200000!5m2!1sde!2sde"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

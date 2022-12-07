import CopyRight from '../../atoms/Copyright/';
import OtherNav from '../../molecules/OtherNav';
import styles from './style.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.nav}>
        <OtherNav />
      </div>
      <CopyRight />
    </footer>
  );
}

export default Footer;
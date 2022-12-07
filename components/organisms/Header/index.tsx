import HLogo from '../../molecules/HLogo/';
import CategoryNav from '../../molecules/CategoryNav/';
import MenuNav from '../../molecules/MenuNav/';
import styles from './style.module.scss';

interface HeaderProps {
  category: [];
}

function Header({ category } : HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_inner}>
          <div className={styles.logo}>
            <HLogo />
          </div>
          <div className={styles.desc}>
            <div className={styles.desc_inner}>
              <p>
                創作活動に関する雑記を纏めたブログ
              </p>
              <p className="tc">
                管理人：エスト
              </p>
            </div>
          </div>
          <MenuNav />
          <CategoryNav
            category={category}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
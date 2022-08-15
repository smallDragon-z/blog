import type { NextPage } from 'next';
import styles from './index.module.scss';

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <p>个人博客开发-next.js(SSR)</p>
    </div>
  );
};

export default Footer;

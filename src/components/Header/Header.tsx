import styles from "./Header.module.css";

export default function Header() {
  
  return (
    <>
      <div className={styles.header}>
        <div className="logo">LOGO</div>

        <div className="search-bar">SEARCH BAR</div>
        <div className="header-links"> LINKS</div>
      </div>
      <br/>


    </>
  );
}

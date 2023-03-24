import styles from "./Header.module.css";


function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}


export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className="logo">LOGO</div>

        <div className="search-bar">SEARCH BAR</div>
        <div className="header-links"> LINKS</div>
      </div>
      <br/>
      <Box
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: '#E2E2E2',
        borderRadius: 30,
        color: '#A2A2A2',
        width: 1800,
        display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      }}
    >
      Bora Bora<br/>
      Welcome to Bora Bora Living: The Ultimate Island Living Experience.<br/><br/>
      Bora Bora Living is proud to present our latest project - an exclusive housing compplex located on the
      breathtaking island of Bora Bora. With its pristine breaches, crystals-clear waters, and stunning natural
      scenery, Bora Bora is the ultimate island pradise, and now you can make it your home.<br/><br/>

      Our housing complex is currently under construction, offering a unique opportunity to bea a part of this exclusive
      community from the ground up. Desinged by award-winning atchitects, our complex contemporary desing whit local island
      influences, creating a unique and inviting living space.

    </Box>

    </>
  );
}

import styles from "../style.module.css";
const Header = () => {
    return(
    <div> 
        <h1 className={styles.header}>Welcome To Rocket Elevators</h1>
        <img className={styles.logo} src="/images/R2.png"/>
    </div>
    );
};
export default Header;
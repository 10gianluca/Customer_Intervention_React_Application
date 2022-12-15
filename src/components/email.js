import styles from "../style.module.css";
const email=({emailItem})=>{
    return(<div>
        <div className={styles.emailItem}>
            <h3 className={styles.emailname}>{emailItem.name}</h3>
            <button className={styles.deletebutton}>Done</button>
        </div>
    </div>
    );
};
export default email;
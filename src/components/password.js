import styles from "../style.module.css";
const password=({passwordItem})=>{
    return(<div>
        <div className={styles.passwordItem}>
            <h3 className={styles.passwordname}>{passwordItem.name}</h3>
            <button className={styles.deletebutton}>Done</button>
        </div>
    </div>
    );
};
export default password;
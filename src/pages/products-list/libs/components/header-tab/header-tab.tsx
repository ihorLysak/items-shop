import styles from "./styles.module.css";

function HeaderTab() {
  return (
    <div className={styles["container"]}>
      <span>Name</span>
      <span>Amount</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export { HeaderTab };

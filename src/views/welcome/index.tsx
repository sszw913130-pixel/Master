import styles from "./index.module.less"
const Welcome=()=>{
    return <div className={styles.welcome}>
    <div className={styles.content}>
        <div className={styles.subTitle}>欢迎使用</div>
        <div className={styles.title}>React-admin/18/19企业中台通用管理系统</div>
        <div className={styles.desc}>React19、Redux 、Antd、TypeScript</div>
    </div>
    <div className={styles.img}></div>
</div>
}

export default Welcome
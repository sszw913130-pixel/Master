import styles from "./index.module.less"
const Footer:React.FC=()=>{
    return (
       <footer className={styles.footer}>
            <div>
                <span>React19+TS开发通用后台</span>
                <span className="gutter">|</span>
                <span>2023014401@zwu.edu.cn</span>
            </div>
            <div>SouSou 版权专属</div>
       </footer>
    )
}

export default Footer
import React from 'react'
import { Column } from 'ui'
import styles from 'styles/Home.module.sass'
const Home = () => {
    return (
        <div className={styles.page}>
            <div className={styles.sidebar}>
                <Column center>
                    <img className={styles.profile} src='https://cf.shopee.co.th/file/204509ab80186bcda8cf28e167bb904e_tn' />
                    <span>AUTOBOT</span>
                </Column>
                <ul>
                    <li>
                        <i className="fas fa-box-open"></i>
                        <span>สินค้าของฉัน</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home

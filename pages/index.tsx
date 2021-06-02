import React from 'react'
import { Column } from 'ui'
import styles from 'styles/Home.module.sass'
const Home = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>

            </div>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Column center>
                        <img className={styles.profile} src='https://cf.shopee.co.th/file/204509ab80186bcda8cf28e167bb904e_tn' />
                    </Column>
                    <ul>
                        <div className={styles.bullet} />
                        <li>
                            <i className="fas fa-box-open"></i>
                            <span>สินค้าของฉัน</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.content_container}>
                    <span className={styles.title}>สินค้าของฉัน</span>
                    <div className={styles.content}>
                        <div className={styles.items}>
                            <div className={styles.item_title}>
                                <span>
                                    <input type='checkbox' />
                                </span>
                                <span>ชื่อสินค้า</span>
                                <span >ตัวเลือกสินค้า</span>
                                <span>ราคาขาย</span>
                                <span>พร้อมขาย</span>
                                <span>ยอดขาย</span>
                                <span>ตัวเลือก</span>
                            </div>
                            <div className={styles.item_content}>


                                {[...Array(10)].map(item =>
                                    <div className={styles.item}>
                                        <div className={styles.checkbox}><input type='checkbox' /></div>
                                        <div className={styles.name}>
                                            <img src='https://cf.shopee.co.th/file/b33f53b4b7f723cd43c960e26029efe4_tn' />
                                            <div className={styles.detail}>
                                                <span>Dibea เครื่องดูดฝุ่น ไร้สาย พร้อมแท้งค์น้ำ แบบขัดพื้นขจัดคราบฝังลึก รุ่น FC20 ( Extra slim vacuum cleanner )</span>
                                                <span>D500 แบตเตอรี่</span>
                                                <span>SKU: ATB1241212</span>
                                            </div>
                                        </div>
                                        <div className={styles.col}>123</div>
                                        <div className={styles.col}>123</div>
                                        <div className={styles.col}>123</div>
                                        <div className={styles.col}>123</div>
                                        <div style={{ color: '#3b399a' }} className={styles.col}>
                                            <span style={{ cursor: 'pointer' }} >แก้ไข</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home
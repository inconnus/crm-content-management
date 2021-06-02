import { FC } from 'react'
import styles from './index.module.sass'
const compare = (key: boolean, output: any) => key ? output : ''
interface IDiv {
    center?: boolean
}
export const Row: FC<IDiv> = (props) => <div className={`${styles.row} ${compare(props.center, styles.center)}`}>{props.children}</div>
export const Column: FC<IDiv> = (props) => <div className={`${styles.column} ${compare(props.center, styles.center)}`}>{props.children}</div>
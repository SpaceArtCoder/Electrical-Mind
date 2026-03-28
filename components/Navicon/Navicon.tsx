import type { NaviconProps } from '@/lib/types/ui'
import styles from './Navicon.module.scss'

export default function Navicon({show_nav, display}: NaviconProps) {

    return (
        <button className={!display ? styles.navicon_button : styles.hide} onClick={() => show_nav()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect y="6" width="32" height="3" rx="1.5" fill="#0a0a0a"/>
                <rect y="14.5" width="32" height="3" rx="1.5" fill="#0a0a0a"/>
                <rect y="23" width="32" height="3" rx="1.5" fill="#0a0a0a"/>
            </svg>
        </button>
    )
}
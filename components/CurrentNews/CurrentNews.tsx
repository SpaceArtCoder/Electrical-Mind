'use client'

import { useEffect, useState } from 'react'
import styles from './CurrentNews.module.scss'

export default function CurrentNews() {

    const [visibllity, setVisibility] = useState(true);

    function addArticle() {

    setVisibility(!visibllity)
    
    }

    return (
        <section className={styles.current_news}>
          
          <form action={addArticle}>

            <button className={styles.button} type="submit">Add article</button>

            <input className={visibllity ? styles.hidden : styles.form} type='text'/>

          </form>

        </section>
    )
}
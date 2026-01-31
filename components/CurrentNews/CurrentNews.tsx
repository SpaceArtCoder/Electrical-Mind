'use client'

import { useState } from 'react'
import {motion} from 'framer-motion'
import styles from './CurrentNews.module.scss'

export default function CurrentNews({addArticle}) {

    const [visibllity, setVisibility] = useState(false);

    const [newsList, setNewsList] = useState();

    


    function toggleDisplay() {
      setVisibility(!visibllity)
    }

    return (
        <section className={styles.current_news}>

          <button className={styles.button} onClick={toggleDisplay}>Add Article</button>
          
          <form className={visibllity ? styles.show : ''} action={addArticle}>

            <motion.input 
            name='content'
            className={visibllity ? styles.show : ''} 
            type='text'
            placeholder='Write your text'
            animate={{
              height: visibllity ? 200 : 20,

            }}
            transition={{
              type: "spring", 
              stiffness: 300, 
              damping: 20
              }}
            />


            <button className={styles.button} type="submit">Send</button>

          </form>

        </section>
    )
}
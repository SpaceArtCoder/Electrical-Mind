'use client'

import { useState } from 'react'
import {motion} from 'framer-motion'
import type {ArticleAddFormProps} from '@/lib/types/article'
import styles from './ArticleAddForm.module.scss'


export default function ArticleAddForm({addArticle} : ArticleAddFormProps) {

    const [visibllity, setVisibility] = useState(false);

    function toggleDisplay() {
      setVisibility(!visibllity)
    }

    return (
        <div className={styles.article_form}>
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
        </div>
    )
}
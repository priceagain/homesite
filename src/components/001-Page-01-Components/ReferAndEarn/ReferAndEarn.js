import React from 'react'
import styles from './ReferAndEarn.module.css'
import { RederAndEarnImg1, RederAndEarnImg2 } from '../../../assets/index'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router'

function ReferAndEarn() {
    const history = useHistory();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const handleClick = (e) => {
        e.preventDefault();
        history.push('./how-to-earn-cashback')
    }
    return (
        <div className={styles.refer_and_earn}>
            <div className={styles.refer_and_earn__head_text}>
                Refer Friends & Earn Forever
            </div>

            <div className={styles.refer_and_earn__content}>

                <div className={styles.refer_and_earn__image_container}>
                    {!isMobile ? <img src={RederAndEarnImg1} alt="" /> : <img src={RederAndEarnImg2} alt="" />}
                        <div className={styles.refer_and_earn__text_container}>
                        <p>Invite New Pros, Get $200 Credit.</p>
                        <span>Redeem offer now</span>
                        <button onClick={handleClick}>Learn more</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ReferAndEarn

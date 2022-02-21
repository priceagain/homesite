import React from 'react'
import styles from './Cashback_Activated.module.css'
import { CashbackInfo, Reward, Navbar_Bottom } from '../../components'
import { useMediaQuery } from 'react-responsive'

function Cashback_Activated() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={styles.cashback_activated}>
            <div className={styles.cashback_activated__container}>

                <div className={styles.cashback_activated__reward}>
                    <Reward />
                </div>

                <div className={styles.cashback_activated__info}>
                    <CashbackInfo />
                </div>

            </div>

            {isMobile && <Navbar_Bottom activeComponent="/how-to-earn-cashback" />}

        </div>
    )
}

export default Cashback_Activated

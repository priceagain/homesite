import React from 'react'
import { CashbackRewardLogin, CashbackRewardUser, CashbackRewardMissed, Navbar_Bottom } from '../../components'
import styles from './Cashback_Reward.module.css'
import { useMediaQuery } from 'react-responsive'

function Cashback_Reward({ handleClick, handleChange }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={styles.cashback_reward}>
            <div className={styles.cashback_reward__container}>

                <div className={styles.cashback_reward__login}>
                    {/* <CashbackRewardLogin handleClick={handleClick} handleChange={handleChange}  /> */}

                    {/* <CashbackRewardUser /> */}

                    <CashbackRewardMissed />
                </div>

            </div>

            {isMobile && <Navbar_Bottom activeComponent="/how-to-earn-cashback" />}
        </div>
    )
}

export default Cashback_Reward

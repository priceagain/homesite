import React from 'react'
import { InviteForm, InviteInfo, Navbar_Bottom } from '../../components'
import styles from './Invite.module.css'
import { useMediaQuery } from 'react-responsive'

function Invite() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={styles.invite}>
            <div className={styles.invite__container}>
                <div className={styles.invite__info}>
                    <InviteInfo />
                </div>
                <div className={styles.invite__Form}>
                    <InviteForm />
                </div>
            </div>

            {isMobile && <Navbar_Bottom activeComponent="/how-to-earn-cashback" />}
        </div>
    )
}

export default Invite

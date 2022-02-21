import React, { useState } from 'react'
import styles from './FaqInfo.module.css'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function FaqInfo() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const [aboutInfo1, setAboutInfo1] = useState(false)
    const [aboutInfo2, setAboutInfo2] = useState(false)
    const [aboutInfo3, setAboutInfo3] = useState(false)
    const [aboutInfo4, setAboutInfo4] = useState(false)
    const [aboutInfo5, setAboutInfo5] = useState(false)
    
    const [faqInfo1, setFaqInfo1] = useState(false)
    const [faqInfo2, setFaqInfo2] = useState(false)
    const [faqInfo3, setFaqInfo3] = useState(false)
    const [faqInfo4, setFaqInfo4] = useState(false)
    const [faqInfo5, setFaqInfo5] = useState(false)
    const [faqInfo6, setFaqInfo6] = useState(false)
    const [faqInfo7, setFaqInfo7] = useState(false)


    return (
        <div className={styles.faqinfo}>
            <div className={styles.faqinfo__container}>
                <div className={styles.faqinfo__text_heading}>
                   {isMobile && <h1> <Link to="/overview"><ChevronLeftIcon /></Link>Back</h1>}
                </div>
                <div className={styles.faqinfo__about}>
                    <h1>About</h1>
                    <div className={styles.faqinfo__about_container}>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${aboutInfo1 ? styles.faqinfo__about__text : ""}`} onClick={() => setAboutInfo1(!aboutInfo1)}>I don’t know the answer for this quiz, can I still get certification? {!aboutInfo1 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {aboutInfo1 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${aboutInfo2 ? styles.faqinfo__about__text : ""}`} onClick={() => setAboutInfo2(!aboutInfo2)}>I’m not able to login. Please help. {!aboutInfo2 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {aboutInfo2 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${aboutInfo3 ? styles.faqinfo__about__text : ""}`} onClick={() => setAboutInfo3(!aboutInfo3)}>How can I change my name on my certificate / profile ? {!aboutInfo3 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {aboutInfo3 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${aboutInfo4 ? styles.faqinfo__about__text : ""}`} onClick={() => setAboutInfo4(!aboutInfo4)}>Where can I find the certificate? Where is the get certified option? {!aboutInfo4 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {aboutInfo4 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${aboutInfo5 ? styles.faqinfo__about__text : ""}`} onClick={() => setAboutInfo5(!aboutInfo5)}>Cannot download certificate. blank screen appears {!aboutInfo5 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {aboutInfo5 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                    </div>
                </div>
                
                <div className={styles.faqinfo__faq}>
                    <h1>FAQ</h1>
                    <div className={styles.faqinfo__faq_container}>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${faqInfo1 ? styles.faqinfo__faq__text : ""}`} onClick={() => setFaqInfo1(!faqInfo1)}>I don’t know the answer for this quiz, can I still get certification? {!faqInfo1 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {faqInfo1 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${faqInfo2 ? styles.faqinfo__faq__text : ""}`} onClick={() => setFaqInfo2(!faqInfo2)}>I’m not able to login. Please help. {!faqInfo2 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {faqInfo2 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${faqInfo3 ? styles.faqinfo__faq__text : ""}`} onClick={() => setFaqInfo3(!faqInfo3)}>How can I change my name on my certificate / profile ? {!faqInfo3 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {faqInfo3 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${faqInfo4 ? styles.faqinfo__faq__text : ""}`} onClick={() => setFaqInfo4(!faqInfo4)}>Where can I find the certificate? Where is the get certified option? {!faqInfo4 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {faqInfo4 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${faqInfo5 ? styles.faqinfo__faq__text : ""}`} onClick={() => setFaqInfo5(!faqInfo5)}>Cannot download certificate. blank screen appears {!faqInfo5 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {faqInfo5 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${faqInfo6 ? styles.faqinfo__faq__text : ""}`} onClick={() => setFaqInfo6(!faqInfo6)}>Course X is not available in Y language? {!faqInfo6 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {faqInfo6 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                        <div className={styles.faqinfo__text_container}>
                            <span className={`${faqInfo7 ? styles.faqinfo__faq__text : ""}`} onClick={() => setFaqInfo7(!faqInfo7)}>Any offer for students ? {!faqInfo7 ? <KeyboardArrowUpIcon style={{ color: "#212121", fontSize: 28 }}/> : <KeyboardArrowDownIcon style={{ color: "#212121", fontSize: 28 }}/> }</span>
                            {faqInfo7 && <p>To get certified in a course, you need to finish all the quizzes and submissions (if any) successfully with 100% progression.</p>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FaqInfo

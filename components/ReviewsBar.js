import React, { useState } from "react";



import styles from '../styles/components/ReviewsBar.module.css'

const dreviews = [
    {
        name: 'Daniel Birleanu',
        degree: 'Absolvent 2014 Facultatea de Stiinte Economice',
        date: '14.02.2022',
        verified: true,
        text:`University programme well developed
        I studied in Cluj-Napoca which was the European Capital of Teenagers back in 2015. Obviously, the city is great, no doubt, but the prices are too high when talking about renting an apartment (and even buying something from a shop is way more expensive than another city in Romania) and this is making student life very very odd and hard.
        Although these high prices, I think the student life is nice in Cluj, at least at UBB. You have a friendly student dorm, nice people, but there are also bad things in these dorms: most of them have 4-5 students in the same room. Luckily with covid, now are only 2-3 students in a room, but when I was a student, 1 year I stood in a room with other 4.        
        But in general, the life of a student at UBB is nice, you have access to information, the university has a big library where you can study and so on.
        If you ask me, I’d never follow a university program, I’d better go to work from 16-17 years. Here, universities, in general, are not teaching you how to live, how to invest your money, how to go out in the world to face the reality.`,
        key: '1'
    },
    {
        name: 'Daniel Birleanu',
        degree: 'Absolvent 2014 Facultatea de Stiinte Economice',
        date: '14.02.2022',
        verified: true,
        text:`University programme well developed
        I studied in Cluj-Napoca which was the European Capital of Teenagers back in 2015. Obviously, the city is great, no doubt, but the prices are too high when talking about renting an apartment (and even buying something from a shop is way more expensive than another city in Romania) and this is making student life very very odd and hard.
        Although these high prices, I think the student life is nice in Cluj, at least at UBB. You have a friendly student dorm, nice people, but there are also bad things in these dorms: most of them have 4-5 students in the same room. Luckily with covid, now are only 2-3 students in a room, but when I was a student, 1 year I stood in a room with other 4.        
        But in general, the life of a student at UBB is nice, you have access to information, the university has a big library where you can study and so on.
        If you ask me, I’d never follow a university program, I’d better go to work from 16-17 years. Here, universities, in general, are not teaching you how to live, how to invest your money, how to go out in the world to face the reality.`,
        key: '2'
    },
    {
        name: 'Daniel Birleanu',
        degree: 'Absolvent 2014 Facultatea de Stiinte Economice',
        date: '14.02.2022',
        verified: true,
        text:`University programme well developed
        I studied in Cluj-Napoca which was the European Capital of Teenagers back in 2015. Obviously, the city is great, no doubt, but the prices are too high when talking about renting an apartment (and even buying something from a shop is way more expensive than another city in Romania) and this is making student life very very odd and hard.
        Although these high prices, I think the student life is nice in Cluj, at least at UBB. You have a friendly student dorm, nice people, but there are also bad things in these dorms: most of them have 4-5 students in the same room. Luckily with covid, now are only 2-3 students in a room, but when I was a student, 1 year I stood in a room with other 4.        
        But in general, the life of a student at UBB is nice, you have access to information, the university has a big library where you can study and so on.
        If you ask me, I’d never follow a university program, I’d better go to work from 16-17 years. Here, universities, in general, are not teaching you how to live, how to invest your money, how to go out in the world to face the reality.`,
        key: '3'
    },
    {
        name: 'Daniel Birleanu',
        degree: 'Absolvent 2014 Facultatea de Stiinte Economice',
        date: '14.02.2022',
        verified: true,
        text:`University programme well developed
        I studied in Cluj-Napoca which was the European Capital of Teenagers back in 2015. Obviously, the city is great, no doubt, but the prices are too high when talking about renting an apartment (and even buying something from a shop is way more expensive than another city in Romania) and this is making student life very very odd and hard.
        Although these high prices, I think the student life is nice in Cluj, at least at UBB. You have a friendly student dorm, nice people, but there are also bad things in these dorms: most of them have 4-5 students in the same room. Luckily with covid, now are only 2-3 students in a room, but when I was a student, 1 year I stood in a room with other 4.        
        But in general, the life of a student at UBB is nice, you have access to information, the university has a big library where you can study and so on.
        If you ask me, I’d never follow a university program, I’d better go to work from 16-17 years. Here, universities, in general, are not teaching you how to live, how to invest your money, how to go out in the world to face the reality.`,
        key: '4'
    }
]


export default function ReviewsBar(props) {

    const [itemCursor, setItemCursor] = useState(0);
    const [cursorOffset, setCursorOffset] = useState(0);
    const [reviews, setReviews] = useState(dreviews.map((review) => {
        return (<ReviewItem
            review={review}
            key={review.key}></ReviewItem>)
    }));
    const nextReview = () => {
        if(itemCursor >= reviews.length){ 
            setCursorOffset(0);
            setItemCursor(0);
            return;
        };
        setCursorOffset(cursorOffset + 640);
        setItemCursor(itemCursor+1);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.viewButtonWrapper}>
                <a onClick={nextReview} className={styles.viewButton}>&lt;</a>
            </div>
            <div style={{ left: `calc(98vw - ${cursorOffset}px)` }} className={styles.reviewContainer}>{reviews}</div>
        </div>
    )
}//DO THIS 

function ReviewItem(props) {


    return (
        <div className={styles.reviewItem}>
            <div className={styles.infoContainer}>
                <div className={styles.infoFirst}>
                    <div className={styles.infoName}>{props.review.name}</div>
                    <div className={styles.infoDegree}>{props.review.degree}</div>
                </div>
                <div className={styles.infoSecond}>
                    <div className={styles.infoDate}>{props.review.date}</div>
                    <div className={styles.infoVerified}>
                        {props.review.verified 
                            ? <div>Student Verificat</div>
                            : ''}
                    </div>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.ratingsContainer}>
                    <RatingItem rating={((props.review.general) || '5.0')}>General</RatingItem>
                    <RatingItem rating={((props.review.oportunitate) || '5.0')}>Oportunitate</RatingItem>
                    <RatingItem rating={((props.review.convenienta) || '5.0')}>Convenienta</RatingItem>
                </div>
                <div className={styles.reviewText}>
                    {props.review.text}
                </div>
            </div>
        </div>
    )
}
function RatingItem(props) {
    return (
        <React.Fragment>
            <div className={styles.ratingItem}>{props.rating} {props.children}</div>
        </React.Fragment>
    )
}
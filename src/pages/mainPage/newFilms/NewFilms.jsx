import { Carousel } from 'antd';
import AnimatedDiv from '../../../components/animatedDiv/AnimatedDiv'
import styles from './NewFilms.module.css'
import React, { useState, useEffect } from 'react';

const NewFilm = (props) => {
    
    switch (props.number) {
        case '0':
            return (
                <div className={styles.film}>
                            <img className={styles.film} src='./img/film.png'/>
                            <p className={styles.film_name}>Oppenheimer 18+</p>
                </div>
            )
        case '1':
            return (
                <div className={styles.film}>
                            <img className={styles.film} src='./img/film2.png'/>
                            <p className={styles.film_name}>Killers of the Flower Moon 18+</p>
                </div>
            )
        case '2':
            return (
                <div className={styles.film}>
                            <img className={styles.film} src='./img/film3.png'/>
                            <p className={styles.film_name}>Barbie 12+</p>
                </div>
            )
        case '3':
            return (
                <div className={styles.film}>
                            <img className={styles.film} src='./img/film4.png'/>
                            <p className={styles.film_name}>Saltburn 18+</p>
                </div>
            )
    }
}

const NewFilms = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth > 700) {
        return (
            <div className={styles.container}>
                <h2>NEW FILMS</h2>
                <div className={styles.newfilms}>
                    <AnimatedDiv>
                        <NewFilm number={'0'}/>
                    </AnimatedDiv>
                    <AnimatedDiv>
                        <NewFilm number={'1'}/>
                    </AnimatedDiv>
                    <AnimatedDiv>
                        <NewFilm number={'2'}/>
                    </AnimatedDiv>
                    <AnimatedDiv>
                        <NewFilm number={'3'}/>
                    </AnimatedDiv>
                </div>
            </div>
        ) 
    }
    

    return (
        <div className={styles.container}>
            <h2>NEW FILMS</h2>
            <div className={styles.carousel}>
                <Carousel autoplay>
                    <NewFilm number={'0'}/>
                    <NewFilm number={'1'}/>
                    <NewFilm number={'2'}/>
                    <NewFilm number={'3'}/>
                </Carousel>
            </div>
        </div>
    )
}

export default NewFilms
import { useState, useEffect } from 'react';

import styles from './scrollDown.module.css';

const ScrollDown = () => {

    let windowHeight = window.innerHeight;
    const [vis, setVis] = useState('visible');

    const handleScrollDown = () => {
        if(window.scrollY >= windowHeight / 2) {
            setVis('hidden');
        } else {
            setVis('visible');
        }
    };
 
    useEffect(() => {
        window.addEventListener('scroll', handleScrollDown);
    }, []);

    return(
        <span id="scrollDown" className={ `${styles.scrollDown} ${vis}` } title="Scroll Down"></span>    
    )
}

export default ScrollDown;
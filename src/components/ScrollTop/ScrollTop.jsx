import { useState, useEffect } from 'react';
import style from './scrollTop.module.css';
import { FaChevronUp } from "react-icons/fa";

const ScrollTop = () => {

    const [scrollTopVis, setScrollTopVis] = useState(`${style.hidden}`);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const listenScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > 300) {
            setScrollTopVis(`${style.visible}`);
         } else {
            setScrollTopVis(`${style.hidden}`);
         }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScroll);

        return () => window.removeEventListener("scroll", listenScroll);
    }, [])

    return(
        <h1 className={ `${style.scrollTop} ${scrollTopVis}` } onClick={ () => scrollToTop() }>
            <FaChevronUp /> 
        </h1>     
    )
}

export default ScrollTop;
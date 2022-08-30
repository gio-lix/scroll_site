import React, {useEffect, useState} from 'react';
import "./styles/Home.scss"
import {IMAGES} from "./assets";
import Content from './components/content';


function App() {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.scrollY)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    return (
        <main className="parallax">
            <section
                className="parallax__background"
                style={{
                    backgroundImage:`url(${IMAGES.Logo2})`,
                    transform: `translateY(${offsetY * 0.4}px)`
            }}
            ></section>
            <section className="parallax__demo"
                style={{
                    backgroundImage:`url(${"https://cdn.pixabay.com/photo/2022/05/31/09/50/lake-7233236__480.jpg"})`,
                    transform: `translateY(-${offsetY * 0.1}px)`,
                    height: `${offsetY / 2.21}px`
                }}
            ></section>
            <section
                className="parallax__background-triangles"
                style={{
                    backgroundImage:`url(${IMAGES.Logo1})`,
                    transform: `translateY(-${offsetY * 0.1}px)`
            }}
            > </section>
            <section className="parallax_content">
                <Content />
            </section>
            <footer className="parallax_footer">
                <h4>Footer</h4>
            </footer>
        </main>
    );
}

export default App;

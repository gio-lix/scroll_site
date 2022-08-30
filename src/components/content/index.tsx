import React, {useEffect, useRef, useState} from 'react';
import {AiFillCaretRight} from "react-icons/ai"
import "./Style.scss"
import ItemsNav from "../ItemsNav";

const images = [
    "https://cdn.pixabay.com/photo/2022/08/21/21/24/blackandwhite-7402145__480.jpg",
    "https://cdn.pixabay.com/photo/2019/11/14/16/01/landscape-4626489__480.jpg",
    "https://cdn.pixabay.com/photo/2022/05/22/05/41/macaques-7212665__480.jpg",
    "https://cdn.pixabay.com/photo/2022/06/23/09/18/drawing-7279358__480.jpg",
    "https://cdn.pixabay.com/photo/2022/07/24/19/42/bike-7342379__480.png",
    "https://cdn.pixabay.com/photo/2022/07/10/01/47/grades-7312021__480.jpg"
]
const navigationCart = [
    {id: 1, title: "navigation 1"},
    {id: 2, title: "navigation 2"},
    {id: 3, title: "navigation 3"},
    {id: 4, title: "navigation 4"},
    {id: 5, title: "navigation 5"},
]
const activeContent = [
    {id: 1, title: "Lorem - 1", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id: 2, title: "Lorem - 2", content: "Lorem Ipsum is simply dummy orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id: 3, title: "Lorem - 3", content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id: 4, title: "Lorem - 4", content: "Lorem Ipsum is s been the industry's stunknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id: 5, title: "Lorem - 5", content: "Lorem Ipsum is simply dummy textry's standard dummy text ever since the 1500s, when an u of type and scrambled it to make a type specimen book."},
]


const Content = () => {
    const [active, setActive] = useState(0)
    const elRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: any) => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);


    return (
        <>
            <section className="content">
                <h1>Closure</h1>
                <h2>
                    Your one-stop source of Web Development tricks
                </h2>
            </section>
            <section className="content_2" >
                <p>
                    <b>1. Like the video.</b> Because it helps me and my channel
                </p>
                <p>
                    <b>2. Like the video.</b> To see more content like that!
                </p>
                <p>
                    <b>3. Follow the Github link.</b> And play with this code yourself!
                </p>
                <div ref={elRef}  className="images_box">
                    {images.map((img: string, index: number) => (
                        <img key={index} src={img} alt="image"/>
                    ))}
                </div>
            </section>
            <section className="content_three">
                <div className="content_three_left">
                    {navigationCart.map((element: {title: string, id: number}, index: number) => (
                        <ItemsNav
                            key={element.id}
                            setActive={() => setActive(index)}
                            title={element.title}
                            index={index}
                            active={active}
                        />
                    ))}
                </div>
                <div>
                    <div className="activeContent">
                        <b>{activeContent[active].title}</b>
                        {activeContent[active].content}
                    </div>
                    {activeContent.map((ele: {id: number, content: string}, i: any) => (
                        <div key={i} className="activeArrow">
                            <p>
                                {i === active && <span className="activeIconArrow"><AiFillCaretRight /></span>}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Content;
import React, {FC} from 'react';
import "./Styles.scss"
import {AiFillCaretRight} from "react-icons/ai";
import {classNames} from "../../utils/classes";

interface Props {
    title: string
    active: number
    index: number
    setActive: () => void
}

const ItemsNav: FC<Props> = ({title, setActive, active, index}) => {
    return (
        <div className="items" onClick={setActive}>
            <h5>{title}</h5>
            <div className={classNames( index === active && "rotateItem")}>
               <AiFillCaretRight/>
            </div>
        </div>
    );
};

export default ItemsNav;
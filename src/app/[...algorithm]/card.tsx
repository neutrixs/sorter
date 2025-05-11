"use client"
import {useMemo, useState} from "react";
import {motion} from "motion/react"
import {algorithms, Algorithms} from "./algorithms";
import Fullscreen from "src/icons/open_fullscreen.svg";
import style from "./style.module.css";

export default function CardContent({type}: { type: Algorithms }) {
    const [open, setOpen] = useState(false);
    const [, displayName, complexity, description] = useMemo(() => algorithms.find(([t]) => t === type)!, [type]);

    const cardClosed = <motion.div
        layout={"position"}
        layoutId={type}
        key={type}
        className={`${style.card} ${style.algorithm}`}
    >
        <div className={style.title}>
            <p>{displayName}</p>
            <div role="button" tabIndex={0} onClick={() => setOpen(!open)} onKeyDown={(e) => e.key == "Enter" && setOpen(!open)}>
                <Fullscreen/>
            </div>
        </div>
        <p className={style.description}>Time complexity: {complexity}</p>
        <p className={style.description}>{description}</p>
    </motion.div>

    return !open ? cardClosed : (
        <motion.div className={style.openedCardContainer} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            {cardClosed}
        </motion.div>
    )
}
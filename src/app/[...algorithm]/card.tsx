"use client"
import {Dispatch, SetStateAction, useMemo} from "react";
import {motion} from "motion/react"
import {algorithms, Algorithms} from "./algorithms";
import Fullscreen from "src/icons/open_fullscreen"
import CloseFullscreen from "src/icons/close_fullscreen";
import style from "./style.module.css";

interface props {
    type: Algorithms,
    open: boolean,
    setOpen: Dispatch<SetStateAction<Algorithms | null>>
}

export default function CardContent({type, open, setOpen}: props) {
    const [, displayName, complexity, description] = useMemo(() => algorithms.find(([t]) => t === type)!, [type]);

    const card = <motion.div
        layoutId={type}
        key={type}
        className={`${style.card} ${style.algorithm}`}
    >
        <div className={style.title}>
            <p>{displayName}</p>
            <div
                role="button"
                tabIndex={0}
                onClick={() => setOpen(open ? null : type)}
                onKeyDown={(e) => e.key == "Enter" && setOpen(open ? null : type)}
            >
                {open ? <CloseFullscreen /> : <Fullscreen />}
            </div>
        </div>
        <p className={style.description}>Time complexity: {complexity}</p>
        <p className={style.description}>{description}</p>
    </motion.div>

    return !open ? card :
        <motion.div className={style.openedCardContainer} initial={{backgroundColor: "#00000000"}} animate={{backgroundColor: "#00000080"}}
                    exit={{backgroundColor: "#00000000"}}>
            {card}
        </motion.div>
}
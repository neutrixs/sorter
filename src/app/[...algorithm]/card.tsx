"use client"
import {useMemo, useState} from "react";
import {algorithms, Algorithms} from "./algorithms";
import Fullscreen from "src/icons/open_fullscreen.svg";
import style from "./style.module.css";

export default function CardContent({type}: { type: Algorithms }) {
    const [open, setOpen] = useState(false);
    const [, displayName, complexity, description] = useMemo(() => algorithms.find(([t]) => t === type)!, [type]);

    return <div key={type} className={`${style.card} ${style.algorithm}`}>
        <div className={style.title}>
            <p>{displayName}</p>
            <div role="button" tabIndex={0} onClick={() => setOpen(!open)} onKeyDown={(e) => e.key == "Enter" && setOpen(!open)}>
                <Fullscreen/>
            </div>
        </div>
        <p className={style.description}>Time complexity: {complexity}</p>
        <p className={style.description}>{description}</p>
    </div>
}
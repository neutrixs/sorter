"use client"
import style from './style.module.css'
import {motion} from "motion/react"
import {algorithms} from "./algorithms";
import CardContent from "./card";

export default function Page() {
    return (
        <div className={`${style.root}`}>
            <p className={`${style.card}`}>Sorting algorithms, visualized:</p>
            <motion.div layout className={`${style.algorithmList}`}>
                {algorithms.map(([type]) => (
                    <CardContent type={type} key={type}/>
                ))}
            </motion.div>
        </div>
    )
}
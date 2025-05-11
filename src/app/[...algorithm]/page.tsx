"use client"
import {useState} from "react";
import {Algorithms, algorithms} from "./algorithms";
import CardContent from "./card";
import style from './style.module.css'

export default function Page() {
    const [open, setOpen] = useState<Algorithms | null>(null);

    return (
        <div className={`${style.root}`}>
            <p className={`${style.card}`}>Sorting algorithms, visualized:</p>
            <div className={`${style.algorithmList}`}>
                {algorithms.map(([type]) => (
                    <CardContent type={type} key={type} open={open == type} setOpen={setOpen}/>
                ))}
            </div>
        </div>
    )
}
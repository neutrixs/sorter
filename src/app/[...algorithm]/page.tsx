import style from './style.module.css'
import {algorithms} from "./algorithms";
import CardContent from "./card";

export default function Page() {
    return (
        <div className={`${style.root}`}>
            <p className={`${style.card}`}>Sorting algorithms, visualized:</p>
            <div className={`${style.algorithmList}`}>
                {algorithms.map(([type]) => (
                    <CardContent type={type} key={type}/>
                ))}
            </div>
        </div>
    )
}
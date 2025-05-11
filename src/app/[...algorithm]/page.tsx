import style from './style.module.css'
import {algorithms} from "./algorithms";
import CardContent from "./card";

export default function Page() {
    return (
        <div className={`${style.root}`}>
            <p className={`${style.card}`}>Sorting algorithms, visualized:</p>
            <div className={`${style.algorithmList}`}>
                {algorithms.map(([type]) => (
                    <div key={type} className={`${style.card} ${style.algorithm}`}>
                        <CardContent type={type} opened={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}
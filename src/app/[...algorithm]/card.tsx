import {algorithms, Algorithms} from "src/app/[...algorithm]/algorithms";
import style from "src/app/[...algorithm]/style.module.css";
import Fullscreen from "src/icons/open_fullscreen.svg";
export default function CardContent({type, opened}: { type: Algorithms, opened: boolean }) {
    const [, displayName, complexity, description] = algorithms.find(([t]) => t === type)!;

    return <>
        <div className={style.title}>
            <p>{displayName}</p>
            <div role="button" tabIndex={0}>
                <Fullscreen/>
            </div>
        </div>
        <p className={style.description}>Time complexity: {complexity}</p>
        <p className={style.description}>{description}</p>
    </>
}
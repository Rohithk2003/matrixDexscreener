import '../Main.css'
import SearchResult from "./SearchResult";
import {useEffect, useState} from "react";
import '@rainbow-me/rainbowkit/styles.css';
import {ConnectButton} from "@rainbow-me/rainbowkit";


export default function Main(props) {
    const [query, setQuery] = useState("")
    const [searched, setSearchStatus] = useState(false)
    const [result, setResult] = useState("")
    const [resultLoaded, setResultStatus] = useState(false)
    const [showgif, gif] = useState(false)
    useEffect(() => {
            const loaddata = async () => {
                if (searched === true) {
                    const response = await fetch(`https://api.dexscreener.io/latest/dex/search?q=${query}`)
                    if (response.status !== 200) {
                        alert("Please type again")
                        gif(false)
                        setSearchStatus(false)
                    } else {
                        const data = await response.json()
                        setResult(data);
                        setResultStatus(true)
                        setSearchStatus(false)
                    }
                }
            }
            loaddata();
        }
        ,
        [searched]
    )
    ;
    useEffect(() => {
        if (searched === true && resultLoaded === false) {
            gif(true);
        } else {
            gif(false);
        }
    }, [searched, resultLoaded]);
    useEffect(() => {
        setSearchStatus(false)
        setQuery("")
        setResultStatus(false)
    }, [props.qtype]);
    return (
        <div className={"index"}>
            <div className={"topbar"}>
                <div className={"search-div"}>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setSearchStatus(true)
                    }}>
                        <input id={"search-bar"} placeholder={"Search"} value={query}
                               onChange={(e) => setQuery(e.target.value)}/>
                    </form>
                    <div className={"search-icon"}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.2365 4.37598e-08C8.61202 -0.000151186 9.9591 0.391678 11.1199 1.12959C12.2808 1.8675 13.2073 2.92092 13.7909 4.16646C14.3746 5.412 14.5912 6.79807 14.4154 8.1623C14.2396 9.52653 13.6787 10.8124 12.7984 11.8693L17.79 16.8609C17.8766 16.9413 17.94 17.0436 17.9733 17.157C18.0066 17.2704 18.0088 17.3907 17.9795 17.5052C17.9502 17.6197 17.8906 17.7242 17.8069 17.8076C17.7233 17.8911 17.6186 17.9504 17.504 17.9794C17.3897 18.0087 17.2695 18.0067 17.1562 17.9735C17.0429 17.9403 16.9406 17.8772 16.8601 17.7908L11.8685 12.7992C10.9753 13.5429 9.91608 14.0606 8.78051 14.3084C7.64494 14.5562 6.46639 14.5268 5.34455 14.2229C4.22272 13.9189 3.19059 13.3492 2.33549 12.5619C1.48039 11.7747 0.82746 10.7931 0.431939 9.70022C0.0364171 8.60731 -0.0900637 7.43521 0.0631954 6.28307C0.216454 5.13094 0.644945 4.03266 1.31242 3.08114C1.9799 2.12962 2.86672 1.35285 3.89788 0.816543C4.92905 0.280232 6.07421 0.000153495 7.2365 4.37598e-08ZM1.31495 7.23739C1.31495 8.01501 1.46811 8.78502 1.7657 9.50345C2.06328 10.2219 2.49946 10.8747 3.04933 11.4245C3.5992 11.9744 4.25199 12.4106 4.97042 12.7081C5.68886 13.0057 6.45887 13.1589 7.2365 13.1589C8.01413 13.1589 8.78415 13.0057 9.50258 12.7081C10.221 12.4106 10.8738 11.9744 11.4237 11.4245C11.9735 10.8747 12.4097 10.2219 12.7073 9.50345C13.0049 8.78502 13.1581 8.01501 13.1581 7.23739C13.1581 5.66691 12.5342 4.16075 11.4237 3.05026C10.3132 1.93976 8.807 1.31589 7.2365 1.31589C5.66601 1.31589 4.15984 1.93976 3.04933 3.05026C1.93882 4.16075 1.31495 5.66691 1.31495 7.23739Z"
                                fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={"connect-btn-div connect-btn"}><ConnectButton/></div>
            </div>
            {
                resultLoaded === true &&
                <>
                    <h2 className={"result-heading"}>{props.qtype === "token" ? "Token" : "Pair"} Search Results</h2>
                    <div className={"results-div"}>
                        <SearchResult props={result}/>
                    </div>
                </>
            }
            <div className={`loading-div ${showgif === true ? "display" : ""}`}>
                <img src={"https://i.gifer.com/ZKZg.gif"} width={"64"} height={64} alt={""}/>
            </div>
        </div>
    )
}
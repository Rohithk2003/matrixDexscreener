import '../SearchResult.css'


export function BasicInfoComponent(props) {
    return (
        <div className={"search-results"}>
            <h3 className={"heading"}>Basic Info</h3>
            <div className={"basic-info"}>
                <p className={"prop-value"}>Pair Created At</p>
                <p>{props.props.props.chainId}</p>
                <p className={"prop-value"}>Symbol</p>
                <p>{props.props.props.baseToken.symbol === undefined ? "" : props.props.props.baseToken.symbol}</p>
                <p className={"prop-value"}>Dex ID</p>
                <p className={"overflow-text"}>{props.props.props.dexId}</p>
                <p className={"prop-value"}>Pair Address</p>
                <p className={"overflow-text"}>{props.props.props.pairAddress}</p>
            </div>
            <div className={"circle"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill="white"/>
                </svg>
            </div>
        </div>
    )
}

export function Btoken(props) {
    return (
        <div className={"search-results"}>
            <h3 className={"heading"}>Base Token</h3>
            <div className={"basic-info token-info"}>
                <p className={"prop-value"}>Name</p>
                <p className={"overflow-text"}>{props.props.props.baseToken.name}</p>
                <p className={"prop-value"}>Symbol</p>
                <p>{props.props.props.baseToken.symbol}</p>
                <p className={"prop-value"}>Address</p>
                <p className={"overflow-text"}>{props.props.props.baseToken.address}</p>
            </div>
            <div className={"circle"}>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 20L0 15V5L9 0L18 5V15L9 20ZM6.1 7.25C6.48333 6.85 6.925 6.54167 7.425 6.325C7.925 6.10833 8.45 6 9 6C9.55 6 10.075 6.10833 10.575 6.325C11.075 6.54167 11.5167 6.85 11.9 7.25L14.9 5.575L9 2.3L3.1 5.575L6.1 7.25ZM8 17.15V13.875C7.1 13.6417 6.375 13.1667 5.825 12.45C5.275 11.7333 5 10.9167 5 10C5 9.81667 5.00833 9.64567 5.025 9.487C5.04167 9.32833 5.075 9.166 5.125 9L2 7.25V13.825L8 17.15ZM9 12C9.55 12 10.021 11.804 10.413 11.412C10.805 11.02 11.0007 10.5493 11 10C11 9.45 10.804 8.979 10.412 8.587C10.02 8.195 9.54933 7.99933 9 8C8.45 8 7.979 8.196 7.587 8.588C7.195 8.98 6.99933 9.45067 7 10C7 10.55 7.196 11.021 7.588 11.413C7.98 11.805 8.45067 12.0007 9 12ZM10 17.15L16 13.825V7.25L12.875 9C12.925 9.16667 12.9583 9.32933 12.975 9.488C12.9917 9.64667 13 9.81733 13 10C13 10.9167 12.725 11.7333 12.175 12.45C11.625 13.1667 10.9 13.6417 10 13.875V17.15Z"
                        fill="white"/>
                </svg>

            </div>
        </div>
    )
}

export function Qtoken(props) {
    return (
        <div className={"search-results"}>
            <h3 className={"heading"}>Quote Token</h3>
            <div className={"basic-info token-info"}>
                <p className={"prop-value"}>Name</p>
                <p>{props.props.props.quoteToken.name}</p>
                <p className={"prop-value"}>Symbol</p>
                <p>{props.props.props.quoteToken.symbol}</p>
                <p className={"prop-value"}>Address</p>
                <p className={"overflow-text"}>{props.props.props.quoteToken.address}</p>
            </div>
            <div className={"circle"}>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 20L0 15V5L9 0L18 5V15L9 20ZM6.1 7.25C6.48333 6.85 6.925 6.54167 7.425 6.325C7.925 6.10833 8.45 6 9 6C9.55 6 10.075 6.10833 10.575 6.325C11.075 6.54167 11.5167 6.85 11.9 7.25L14.9 5.575L9 2.3L3.1 5.575L6.1 7.25ZM8 17.15V13.875C7.1 13.6417 6.375 13.1667 5.825 12.45C5.275 11.7333 5 10.9167 5 10C5 9.81667 5.00833 9.64567 5.025 9.487C5.04167 9.32833 5.075 9.166 5.125 9L2 7.25V13.825L8 17.15ZM9 12C9.55 12 10.021 11.804 10.413 11.412C10.805 11.02 11.0007 10.5493 11 10C11 9.45 10.804 8.979 10.412 8.587C10.02 8.195 9.54933 7.99933 9 8C8.45 8 7.979 8.196 7.587 8.588C7.195 8.98 6.99933 9.45067 7 10C7 10.55 7.196 11.021 7.588 11.413C7.98 11.805 8.45067 12.0007 9 12ZM10 17.15L16 13.825V7.25L12.875 9C12.925 9.16667 12.9583 9.32933 12.975 9.488C12.9917 9.64667 13 9.81733 13 10C13 10.9167 12.725 11.7333 12.175 12.45C11.625 13.1667 10.9 13.6417 10 13.875V17.15Z"
                        fill="white"/>
                </svg>

            </div>
        </div>
    )
}

export function Price(props) {
    return (
        <div className={"search-results"}>
            <h3 className={"heading"}>Price</h3>
            <div className={"basic-info"}>
                <p className={"prop-value"}>Price Native</p>
                <p>{props.props.props.priceNative}</p>
                <p className={"prop-value"}>Price USD</p>
                <p>{props.props.props.priceUsd}</p>
            </div>
            <div className={"circle"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.47621 6.83999C8.81501 7.33559 8.51621 7.92959 8.51621 8.48399C8.51621 9.03959 8.81501 9.63359 9.47621 10.1304C10.1386 10.6272 11.1082 10.9704 12.2302 10.9704C12.5485 10.9704 12.8537 11.0968 13.0787 11.3219C13.3038 11.5469 13.4302 11.8521 13.4302 12.1704C13.4302 12.4887 13.3038 12.7939 13.0787 13.0189C12.8537 13.244 12.5485 13.3704 12.2302 13.3704C10.639 13.3704 9.15221 12.888 8.03621 12.0504C6.92021 11.2128 6.11621 9.96479 6.11621 8.48519C6.11621 7.00439 6.92021 5.75639 8.03621 4.91879C9.15221 4.08239 10.6402 3.59999 12.2302 3.59999C14.6938 3.59999 17.023 4.77959 17.9494 6.74399C18.0166 6.88661 18.0551 7.04106 18.0626 7.19854C18.0701 7.35602 18.0465 7.51344 17.9932 7.66181C17.9399 7.81018 17.8579 7.9466 17.7518 8.06327C17.6458 8.17994 17.5178 8.27458 17.3752 8.34179C17.2326 8.409 17.0781 8.44746 16.9207 8.45498C16.7632 8.4625 16.6058 8.43893 16.4574 8.38561C16.309 8.33229 16.1726 8.25027 16.0559 8.14423C15.9393 8.03819 15.8446 7.91021 15.7774 7.76759C15.3574 6.87119 14.047 5.99999 12.2314 5.99999C11.1094 5.99999 10.1386 6.34319 9.47621 6.83999Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.5883 18.4996C15.2495 18.004 15.5471 17.41 15.5471 16.8556C15.5471 16.3 15.2495 15.7048 14.5871 15.2092C13.9259 14.7124 12.9551 14.3692 11.8343 14.3692C11.516 14.3692 11.2108 14.2428 10.9858 14.0177C10.7607 13.7927 10.6343 13.4875 10.6343 13.1692C10.6343 12.8509 10.7607 12.5457 10.9858 12.3207C11.2108 12.0956 11.516 11.9692 11.8343 11.9692C13.4255 11.9692 14.9123 12.4516 16.0283 13.2892C17.1443 14.1268 17.9471 15.3748 17.9471 16.8544C17.9471 18.334 17.1443 19.5832 16.0271 20.4196C14.9111 21.2572 13.4255 21.7396 11.8343 21.7396C9.3707 21.7396 7.0403 20.56 6.1151 18.5944C5.97936 18.3065 5.96354 17.9765 6.07111 17.677C6.17868 17.3775 6.40084 17.1329 6.6887 16.9972C6.97657 16.8615 7.30657 16.8456 7.6061 16.9532C7.90563 17.0608 8.15016 17.2829 8.2859 17.5708C8.7083 18.4684 10.0187 19.3396 11.8343 19.3396C12.9563 19.3396 13.9259 18.9964 14.5883 18.4996ZM11.9999 2.2C12.3182 2.2 12.6234 2.32643 12.8484 2.55147C13.0735 2.77651 13.1999 3.08174 13.1999 3.4V4.6C13.1999 4.91826 13.0735 5.22348 12.8484 5.44853C12.6234 5.67357 12.3182 5.8 11.9999 5.8C11.6816 5.8 11.3764 5.67357 11.1514 5.44853C10.9263 5.22348 10.7999 4.91826 10.7999 4.6V3.4C10.7999 3.08174 10.9263 2.77651 11.1514 2.55147C11.3764 2.32643 11.6816 2.2 11.9999 2.2Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.9998 19.2C12.3181 19.2 12.6233 19.3264 12.8483 19.5515C13.0734 19.7765 13.1998 20.0817 13.1998 20.4V21.6C13.1998 21.9183 13.0734 22.2235 12.8483 22.4485C12.6233 22.6736 12.3181 22.8 11.9998 22.8C11.6815 22.8 11.3763 22.6736 11.1513 22.4485C10.9262 22.2235 10.7998 21.9183 10.7998 21.6V20.4C10.7998 20.0817 10.9262 19.7765 11.1513 19.5515C11.3763 19.3264 11.6815 19.2 11.9998 19.2Z"
                          fill="white"/>
                </svg>
            </div>
        </div>
    )
}

export function Result(props) {
    return (
        <div key={props} className={"main-result-div"}>
            <BasicInfoComponent props={props}/>
            <Btoken props={props}/>
            <Qtoken props={props}/>
            <Price props={props}/>
            <hr className={"sep-tag"}/>
        </div>
    )
}


export default function SearchResult(props) {
    let data = []
    if (props.props) {
         data = props.props.pairs.slice(0, 11);
        data.sort((a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd));
    }
    return (
        <div className={"Result"}>
            {props.props &&
                data.map((d,index) => {
                    return (
                        <Result key={index} props={d}/>
                    )
                })
            }
        </div>
    )

}
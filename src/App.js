import './App.css';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
    const [activeQueryType, setActiveQueryType] = useState("token")
    return (
        <div className="App">
            <div className={"bg-img"}></div>
            <div className={"wrapper"}>
                <Sidebar qtype={activeQueryType} onclick={(e) => {
                    setActiveQueryType(e.target.dataset["queryvalue"]);
                }
                }/>
                <Main qtype={activeQueryType}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

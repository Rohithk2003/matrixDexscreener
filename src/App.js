import './App.css';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState} from "react";
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
} from 'wagmi/chains';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import { darkTheme } from '@rainbow-me/rainbowkit';

const {chains, publicClient} = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
        alchemyProvider({apiKey: process.env.ALCHEMY_ID}),
        publicProvider()
    ]
);

const {connectors} = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

function App() {
    const [activeQueryType, setActiveQueryType] = useState("token")
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} theme={darkTheme()} >
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
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default App;

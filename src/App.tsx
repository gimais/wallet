import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import CommonLayout from "@/common/layout";

const getLibrary = (provider?: any) => {
    return new Web3Provider(provider);
};

function App() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <CommonLayout>
                <h1>Wallet App</h1>
            </CommonLayout>
        </Web3ReactProvider>
    );
}

export default App;

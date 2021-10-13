import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import CommonLayout from "@/common/layout";

import ROUTES from "@/routes";

//pages
import Home from "@/pages/home";
import Account from "@/pages/account";
import Token from "@/pages/token";

const getLibrary = (provider?: any) => {
    return new Web3Provider(provider);
};

function App() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <BrowserRouter>
                <CommonLayout>
                    <Switch>
                        <Route path={ROUTES.HOME} component={Home} exact />
                        <Route
                            path={ROUTES.ACCOUNT}
                            component={Account}
                            exact
                        />
                        <Route path={ROUTES.TOKEN} component={Token} exact />
                    </Switch>
                </CommonLayout>
            </BrowserRouter>
        </Web3ReactProvider>
    );
}

export default App;

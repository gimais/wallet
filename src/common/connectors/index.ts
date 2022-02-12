import { InjectedConnector } from "@web3-react/injected-connector";
import { BscConnector } from "@binance-chain/bsc-connector";

export enum Connector {
    Injected = "injected",
    BSC = "bsc",
}

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});

export const bscConnector = new BscConnector({ supportedChainIds: [56, 97] });

export const CONNECTORS: { [name in Connector]: any } = {
    [Connector.Injected]: injectedConnector,
    [Connector.BSC]: bscConnector,
};

import { useCallback } from "react";
import { toast } from "react-toastify";

import { useWeb3React } from "@web3-react/core";
import { NoEthereumProviderError } from "@web3-react/injected-connector";
import { NoBscProviderError } from "@binance-chain/bsc-connector";

import { CONNECTORS, Connector } from "@/common/connectors";

const useAuth = () => {
    const { activate, deactivate } = useWeb3React();

    const login = useCallback(
        (connectorName: Connector) => {
            const connector = CONNECTORS[connectorName];

            activate(
                connector,
                (error: Error) => {
                    if (
                        error instanceof NoEthereumProviderError ||
                        error instanceof NoBscProviderError
                    ) {
                        toast(`No provider was found`);
                    } else {
                        toast(error.message);
                    }
                },
                false
            );
        },
        [activate]
    );

    const logout = useCallback(() => {
        deactivate();
    }, [deactivate]);

    return { login, logout };
};

export default useAuth;

import { useCallback } from "react";

import { useWeb3React } from "@web3-react/core";
import { NoEthereumProviderError } from "@web3-react/injected-connector";

import { injected } from "@/common/connectors";

const useAuth = () => {
    const { chainId, activate, deactivate } = useWeb3React();

    const login = useCallback(() => {
        activate(
            injected,
            (error: Error) => {
                if (error instanceof NoEthereumProviderError) {
                    console.error("Provider Error", "No provider was found");
                } else {
                    console.error(error.name, error.message);
                }
            },
            true
        );
    }, [activate]);

    const logout = useCallback(() => {
        deactivate();
    }, [deactivate, chainId]);

    return { login, logout };
};

export default useAuth;

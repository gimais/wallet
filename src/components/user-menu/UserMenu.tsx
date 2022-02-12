import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Button from "@mui/material/Button";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";

import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import useAuth from "@/hooks/useAuth";

import WalletConnector from "@/components/wallet-connector";
import { Paragraph } from "@/components/typography";
import { Connector } from "@/common/connectors";

const UserMenu = () => {
    const auth = useAuth();
    const { account } = useActiveWeb3React();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => setAnchorEl(null);

    const handleConnect = (connector: Connector) => auth.login(connector);

    const handleDisconnect = () => {
        auth.logout();
        handleCloseMenu();
    };

    if (account) {
        return (
            <>
                <Button
                    onClick={handleClick}
                    style={{
                        backgroundColor: "#46ff03a3",
                        color: "white",
                    }}
                    disableRipple
                >
                    <AccountBalanceWallet />
                    <Paragraph px="4px">
                        {`${account.substring(0, 5)}...${account.slice(-4)}`}
                    </Paragraph>
                </Button>
                <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
                    <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
                </Menu>
            </>
        );
    }

    return <WalletConnector onConnect={handleConnect} />;
};

export default UserMenu;

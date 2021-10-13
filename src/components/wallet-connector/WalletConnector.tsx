import React from "react";

import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Button from "@mui/material/Button";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";

import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import useAuth from "@/hooks/useAuth";

import { H6 } from "@/components/typography";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

const WalletConnector = () => {
    const { library, chainId, account, active } = useActiveWeb3React();
    const auth = useAuth();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleConnectWallet = (_event: any) => {
        auth.login();
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        auth.logout();
        setAnchorEl(null);
    };

    if (account)
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
                    <H6>{"0x..." + account.slice(-4)}</H6>
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>
                        Disconnect
                    </MenuItem>
                </StyledMenu>
            </>
        );
    else {
        return (
            <Button
                onClick={handleConnectWallet}
                style={{
                    backgroundColor: "#46ff03a3",
                    color: "white",
                }}
                disableRipple
            >
                Connect to wallet
            </Button>
        );
    }
};

export default WalletConnector;

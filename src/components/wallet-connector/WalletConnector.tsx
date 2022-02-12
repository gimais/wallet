import React from "react";

// mui
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import { Typography, H6 } from "@/components/typography";
import { Connector } from "@/common/connectors";

import {
    ModalBox,
    ModalHeader,
    ModalBody,
    WalletBox,
} from "./WalletConnector.styled";

type Props = {
    onConnect: (connector: Connector) => void;
};

type WalletProps = {
    label: string;
    image: string;
    onClick: () => void;
};

type Wallet = {
    label: string;
    image: string;
    connector: Connector;
};

const WalletItem = ({ label, image, onClick }: WalletProps) => (
    <WalletBox onClick={onClick}>
        <H6 paragraph noWrap gutterBottom>
            {label}
        </H6>
        <img src={image} width="80px" alt={`${label} Wallet`} />
    </WalletBox>
);

const WalletConnector = ({ onConnect }: Props) => {
    const { current: wallets } = React.useRef<Wallet[]>([
        {
            label: "MetaMask",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
            connector: Connector.Injected,
        },
        {
            label: "Binance Chain",
            image: "https://bscxplorer.com/static/favicon/BSC/logo.svg",
            connector: Connector.BSC,
        },
    ]);
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleClick = (connector: Connector) => onConnect(connector);

    return (
        <>
            <Button
                onClick={handleOpen}
                style={{
                    backgroundColor: "#46ff03a3",
                    color: "white",
                }}
                disableRipple
            >
                Connect to wallet
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalBox>
                    <ModalHeader>
                        <Typography>Connect Wallet</Typography>
                        <CloseIcon
                            onClick={handleClose}
                            sx={{
                                ":hover": {
                                    cursor: "pointer",
                                    opacity: "0.75",
                                },
                            }}
                        />
                    </ModalHeader>
                    <ModalBody>
                        <Stack spacing={12} direction="row">
                            {wallets.map((wallet) => (
                                <WalletItem
                                    key={wallet.label}
                                    label={wallet.label}
                                    image={wallet.image}
                                    onClick={() =>
                                        handleClick(wallet.connector)
                                    }
                                />
                            ))}
                        </Stack>
                    </ModalBody>
                </ModalBox>
            </Modal>
        </>
    );
};

export default WalletConnector;

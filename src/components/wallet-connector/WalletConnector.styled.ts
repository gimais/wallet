import styled from "@emotion/styled";

// mui
import Box from "@mui/material/Box";

export const ModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border-radius: 6px;
`;

export const ModalHeader = styled(Box)`
    height: 30px;
    background-color: #555;
    padding: 8px 12px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
`;

export const ModalBody = styled(Box)`
    padding: 4px 12px;
`;

export const WalletBox = styled(Box)`
    padding: 4px 12px;
    text-align: center;

    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }
`;

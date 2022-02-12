import styled from "@emotion/styled";

// mui
import MAppBar from "@mui/material/AppBar";
import MTab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import * as Typo from "@/components/typography";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    width: 100%;
`;

export const AppBar = styled(MAppBar)`
    display: flex;
    justify-content: center;

    height: 100px;
    user-select: none;
    background-color: #555;
`;

export const Tab = styled(MTab)``;

export const TabLabelWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const TabText = styled(Typo.Typography)`
    color: #f73939;
`;

export const RightedTextGrid = styled(Grid)`
    margin: auto;
    text-align: right;
`;

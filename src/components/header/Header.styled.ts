import styled from "styled-components";
import MAppBar from "@material-ui/core/AppBar";
import MTab from "@material-ui/core/Tab";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    width: 100%;
`;

export const Square = styled.div`
    width: 7px;
    height: 18px;

    margin-right: 5px;

    background-color: #0fb48e;
`;

export const AppBar = styled(MAppBar)`
    display: flex;
    justify-content: center;

    height: 140px;

    background: #fff;

    user-select: none;
`;

export const Tab = styled(MTab)``;

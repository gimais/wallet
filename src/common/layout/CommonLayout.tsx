import { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "@/components/header";

const CommonLayout: FC<{}> = ({ children }) => {
    return (
        <>
            <Header />
            <Container disableGutters fixed>
                <Box my={7}>{children}</Box>
            </Container>
        </>
    );
};

export default CommonLayout;

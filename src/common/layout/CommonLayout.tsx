import { FC } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Header from "@/components/header";

const CommonLayout: FC<{}> = ({ children }) => {
    return (
        <>
            <Header />
            <Container disableGutters>
                <Box my={7}>{children}</Box>
            </Container>
        </>
    );
};

export default CommonLayout;

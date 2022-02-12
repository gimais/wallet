import { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/header";

const CommonLayout: FC<{}> = ({ children }) => {
    return (
        <>
            <Header />
            <Container fixed>
                <Box my={14}>{children}</Box>
            </Container>
            <ToastContainer
                theme="dark"
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default CommonLayout;

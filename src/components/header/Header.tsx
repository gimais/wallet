import { memo } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { AppBar, LogoContainer, Square } from "./Header.styled";

const Header = () => {
    const history = useHistory();

    return (
        <AppBar position="sticky" elevation={10}>
            <Container disableGutters>
                <Grid container spacing={0}>
                    <Grid item xs={11}>
                        <button>connect</button>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default memo(Header);

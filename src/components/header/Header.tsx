import { memo, useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import {
    Grid,
    Toolbar,
    Container,
    Typography,
    Tabs as MuiTabs,
    IconButton,
    ListItem,
    Box,
    Drawer,
    List,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

import ROUTES from "@/routes";
import WalletConnector from "@/components/wallet-connector";

import {
    AppBar,
    LogoContainer,
    Tab,
    TabLabelWrapper,
    TabText,
} from "./Header.styled";

type ITab = {
    title: string;
    path: string;
};

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
};

const Header = () => {
    const history = useHistory();
    const matches = useMediaQuery("(min-width:960px)");

    const { current: tabs } = useRef<ITab[]>([
        {
            title: "Home",
            path: ROUTES.HOME,
        },
        {
            title: "Account",
            path: ROUTES.ACCOUNT,
        },
        {
            title: "Token",
            path: ROUTES.TOKEN,
        },
    ]);
    const [currentTab, setCurrentTab] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    const drawer = (
        <Box sx={{ width: 240 }}>
            <List>
                {tabs.map(({ title, path }) => (
                    <ListItem
                        button
                        key={title}
                        onClick={() => history.push(path)}
                    >
                        <ListItemText primary={title} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleTabClick = (_event: any, newValue: number) => {
        history.push(tabs[newValue].path);
        setCurrentTab(newValue);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "tomato" }}>
                <Container disableGutters>
                    <Grid container spacing={0}>
                        <Grid item xs={matches ? 3 : 9}>
                            <LogoContainer>
                                <Typography variant="h2">LOGO</Typography>
                            </LogoContainer>
                        </Grid>
                        {matches ? (
                            <>
                                <Grid item xs={7}>
                                    <Toolbar>
                                        <MuiTabs
                                            indicatorColor="primary"
                                            value={currentTab}
                                            onChange={handleTabClick}
                                            aria-label="app navigation"
                                            textColor="primary"
                                            TabIndicatorProps={{
                                                hidden: false,
                                                style: {
                                                    backgroundColor: "purple",
                                                    height: "4px",
                                                },
                                            }}
                                        >
                                            {tabs.map(({ title }, _idx) => (
                                                <Tab
                                                    key={_idx}
                                                    label={
                                                        <TabLabelWrapper fontWeight="fontWeightBold">
                                                            <TabText
                                                                color="textSecondary"
                                                                variant="h6"
                                                            >
                                                                {title}
                                                            </TabText>
                                                        </TabLabelWrapper>
                                                    }
                                                    {...a11yProps(_idx)}
                                                    disableRipple
                                                />
                                            ))}
                                        </MuiTabs>
                                    </Toolbar>
                                </Grid>
                                <Grid
                                    item
                                    xs={2}
                                    style={{
                                        textAlign: "center",
                                        margin: "auto",
                                    }}
                                >
                                    <WalletConnector />
                                </Grid>
                            </>
                        ) : (
                            <Grid item xs={3}>
                                <Toolbar
                                    style={{
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                        disableRipple
                                        onClick={handleDrawerToggle}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Toolbar>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default memo(Header);

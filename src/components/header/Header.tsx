/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Grid, Toolbar, Container, Tabs as MuiTabs } from "@mui/material";

import ROUTES from "@/routes";
import UserMenu from "@/components/user-menu";

import {
    AppBar,
    Tab,
    TabLabelWrapper,
    TabText,
    RightedTextGrid,
} from "./Header.styled";

type TabType = {
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
    const { current: tabs } = useRef<TabType[]>([
        {
            title: "Home",
            path: ROUTES.HOME,
        },
        {
            title: "Account",
            path: ROUTES.ACCOUNT,
        },
    ]);
    const history = useHistory();
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        const tabIndex = tabs.findIndex(
            (tab) => tab.path === location.pathname
        );

        redirect(tabIndex === -1 ? 0 : tabIndex);
    }, [location.pathname, tabs]);

    const redirect = (tabsIndex: number) => {
        history.push(tabs[tabsIndex].path);
        setCurrentTab(tabsIndex);
    };

    const handleTabClick = (_event: any, newValue: number) => {
        redirect(newValue);
    };

    return (
        <AppBar position="fixed">
            <Container>
                <Grid container spacing={0}>
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
                                        backgroundColor: "#f7d839",
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
                    <RightedTextGrid item xs={5}>
                        <UserMenu />
                    </RightedTextGrid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default memo(Header);

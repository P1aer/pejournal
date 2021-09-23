import type { NextPage } from 'next'
import { MainLayout } from "../../layouts/MainLayout";
import React from "react";
import FullPost from "../../components/full-post";
import {Paper, Typography, Divider, Tabs, Tab} from "@material-ui/core";
import {Comment} from "../../components/comment";


const Home: NextPage = () => {
    return (
        <MainLayout contentFullWidth>
            <FullPost />
            <Paper className="mt-40 p-30" elevation={0}>
                <Typography variant="h6" className="mb-30">
                    42 комментария
                </Typography>
                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider className="mb-20"/>
                <Comment/>
                <Comment/>
                <Comment/>
            </Paper>

        </MainLayout>
    )
}

export default Home

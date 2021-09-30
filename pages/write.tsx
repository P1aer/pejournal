import type { NextPage } from 'next'
import {MainLayout} from "../layouts/MainLayout";
import React from "react";
import { TextField } from "@material-ui/core";
import {WriteForm} from "../components/write-form";

const Home: NextPage = () => {
    return (
        <MainLayout className="main-layout-white" hideComments hideMenu>
            <WriteForm/>
        </MainLayout>
    )
}

export default Home

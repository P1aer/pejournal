import type { NextPage } from 'next'
import { MainLayout } from "../../layouts/MainLayout";
import React from "react";
import FullPost from "../../components/full-post";
import {PostComments} from "../../components/post-comments";


const Home: NextPage = () => {
    return (
        <MainLayout contentFullWidth>
            <FullPost />
            <PostComments/>
        </MainLayout>
    )
}

export default Home

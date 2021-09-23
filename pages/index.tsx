import type { NextPage } from 'next'
import Post from "../components/post";
import {MainLayout} from "../layouts/MainLayout";
import React from "react";

const Home: NextPage = () => {
  return (
      <MainLayout>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </MainLayout>
  )
}

export default Home

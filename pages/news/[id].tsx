import type { NextPage } from 'next'
import { MainLayout } from "../../layouts/MainLayout";
import React from "react";
import FullPost from "../../components/full-post";
import {PostComments} from "../../components/post-comments";
import {GetServerSideProps} from "next";
import {Api} from "../../utils/api";
import {PostItem} from "../../utils/api/types";

interface PostProps {
    post: PostItem
}
const Home: NextPage<PostProps> = ({ post}) => {
    return (
        <MainLayout contentFullWidth>
            <FullPost title={post.title} blocks={post.body}/>
            <PostComments postId={post.id}/>
        </MainLayout>
    )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    try {
        const id= ctx.params?.id || 0
        const post = await Api(ctx).post.getOne(+id);
        return {
            props: {
                post
            }
        }
    }
    catch (e) {
        console.log(e)
        return {
            props: {},
            redirect: {
                destination:'/',
                permanent: false
            }
        }
    }
}

export default Home

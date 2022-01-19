import type {GetServerSideProps, NextPage} from 'next'
import {MainLayout} from "../../layouts/MainLayout";
import React from "react";
import {WriteForm} from "../../components/write-form";
import {Api} from "../../utils/api";
import {PostItem} from "../../utils/api/types";

interface WritePageProps {
    post:PostItem;
}

const Home: NextPage<WritePageProps> = ({post}) => {
    return (
        <MainLayout className="main-layout-white" hideComments hideMenu>
         <WriteForm data={post}/>
    </MainLayout>
)
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    try {
        const id= ctx.params?.id || 0
        const post = await Api(ctx).post.getOne(+id);
        const user = await Api(ctx).user.getProfile();
        if( post.user.id !== user.id) {
            return {
                props: {},
                redirect: {
                    destination:'/',
                    permanent: false
                }
            }
        }
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

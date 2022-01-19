import type { NextPage} from 'next'
import Post from "../components/post";
import {MainLayout} from "../layouts/MainLayout";
import React from "react";
import {Api} from "../utils/api";
import {PostItem} from "../utils/api/types";
import {GetServerSideProps} from "next";

interface HomeProps {
    posts: PostItem[]
}

const Home: NextPage<HomeProps> = ({posts}) => {
  return (
      <MainLayout>
          {
              posts.map(obj =>
                  <Post key={obj.id} id={obj.id} title={obj.title} description={obj.description} />
                  )
          }
      </MainLayout>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    try {
        const posts = await Api(ctx).post.getAll()
        return {
            props: {
                posts
            }
        }
    }
    catch (e) {

    }
   return {
        props: {
            posts: null
       }
    }

}

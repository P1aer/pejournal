import {UserApi} from "./user";
import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from 'nookies';
import axios from "axios";
import {PostApi} from "./post";
import {CommentApi} from "./comment";

export type ApiReturnType = {
    user: ReturnType<typeof UserApi>;
    post: ReturnType<typeof PostApi>;
    comment: ReturnType<typeof CommentApi>;
};

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies();
    const token = cookies.token;

    const instance = axios.create({
        baseURL: "http://localhost:3005/",
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });

    const apis = {
        user: UserApi,
        post: PostApi,
        comment: CommentApi
    };

    return Object.entries(apis).reduce((prev, [key, f]) => {
        return {
            ...prev,
            [key]: f(instance),
        };
    }, {} as ApiReturnType);
};

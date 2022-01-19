import React from 'react';
import styles from './side-comment.module.scss';
import Link from 'next/link';
import {PostItem, ResponseUser} from "../../utils/api/types";
import {Avatar} from "@material-ui/core";

interface CommentItemProps {
    user: ResponseUser;
    text: string;
    post: PostItem;

}

export const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <Avatar style={{ marginRight: 10 }}>{user.name[0]}</Avatar>
                <Link href={`/profile/${user.id}`}>
                    <a>
                        <b>{user.name}</b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${post.id}`}>
                <a>
                    <span className={styles.postTitle}>{post.title}</span>
                </a>
            </Link>
        </div>
    );
};

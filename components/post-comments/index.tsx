import React, {useEffect} from "react";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../comment";
import {AddCommentForm} from "../addcomment-form";
import {Api} from "../../utils/api";
import {CommentItem} from "../../utils/api/types";
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/user";
import {useComments} from "../../hooks/useComments";

interface PostCommentsProps {
    postId: number
}

export const PostComments:React.FC<PostCommentsProps> = ({postId}) => {
    const auth = useAppSelector(selectUserData)
    const [activeTab, setActiveTab] = React.useState(0);
    const {comments, setComments} = useComments(postId)

    const onAddComment = (obj: CommentItem) => {
        setComments((prev) => [...prev, obj]);
    };

    const onRemoveComment = (id: number) => {
        setComments((prev) => prev.filter((obj) => obj.id !== id));
    };

    return (
        <Paper className="mt-40 p-30" elevation={0}>
            <div className="container">
                <Typography variant="h6" className="mb-20">
                    42 комментария
                </Typography>
                <Tabs onChange={(_,newValue) =>setActiveTab(newValue)} className="mt-20" value={activeTab} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider className="mb-20"/>
                {auth && <AddCommentForm onAdd={onAddComment} postId={postId}/>}
                {
                    comments.map((obj:CommentItem) => <Comment
                        key={obj.id}
                        id={obj.id}
                        createdAt={obj.createdAt}
                        user={obj.user}
                        text={obj.text}
                        currUser={auth?.id}
                        onRemove={onRemoveComment}/>)
                }
            </div>
        </Paper>
    )
}

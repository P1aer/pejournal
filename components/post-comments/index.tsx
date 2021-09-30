import React from "react";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../comment";
import data from "../../data"
import {AddCommentForm} from "../addcomment-form";

export const PostComments:React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const items = data.comments[activeTab === 0 ? 'popular' : 'new'];
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
                <AddCommentForm/>
                {
                    items.map(obj => <Comment key={obj.id} created={obj.created} user={obj.user} text={obj.text}/>)
                }
            </div>
        </Paper>
    )
}

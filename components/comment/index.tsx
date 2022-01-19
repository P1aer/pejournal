import React from 'react';
import {Typography, IconButton, MenuItem, Menu, Avatar} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './comment.module.scss';
import {ResponseUser} from "../../utils/api/types";
import {Api} from "../../utils/api";

interface CommentPostProps {
    id: number;
    user: ResponseUser;
    text: string;
    createdAt: string;
    currUser?: number;
    onRemove: (id: number) => void;

}

export const Comment: React.FC<CommentPostProps>= ({ id, user, text, createdAt, currUser, onRemove }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickRemove = async () => {
        if (window.confirm('Удалить комментарий?')) {
            try {
                await Api().comment.remove(id);
                onRemove(id);
            } catch (err) {
                console.warn('Error remove comment', err);
                alert('Не удалось удалить комментарий');
            } finally {
                handleClose();
            }
        }
    };


    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <Avatar style={{marginRight:10}}> {user.name[0]}</Avatar>
                <b>{user.name}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            {user.id === currUser && (<>
                <IconButton onClick={handleClick}>
                    <MoreIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    elevation={2}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    keepMounted>
                    <MenuItem onClick={handleClickRemove}>Удалить</MenuItem>
                    <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                </Menu> </>)}

        </div>

    );
};

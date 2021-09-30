import React from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
    user: {
        name: string;
        avatar: string;
    };
    text: string;
    created: string;
}

export const Comment: React.FC<CommentPostProps>= ({ user, text, created }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src={user.avatar}
                    alt="Avatar"
                />
                <b>{user.name}</b>
                <span>{created}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>

    );
};

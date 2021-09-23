import React from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
    user: {
        fullname: string;
        avatarUrl: string;
    };
    text: string;
    createdAt: string;
}

export const Comment: React.FC/*<CommentPostProps>*/ = (/*{ user, text, createdAt }*/) => {
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
                <img src="https://cs5.pikabu.ru/post_img/2014/12/13/12/1418502717_1446953895.gif" alt="avatar"/>
                <b>Zhabka</b>
                <span>???</span>
            </div>
            <Typography className={styles.text}>
                Однажды я шел по улице а затем пришел домой, как бы держу в курсе все. Спасибо за внимание
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

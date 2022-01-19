import Link from 'next/link';
import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@material-ui/core';
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';

import  Post  from '../../components/post';
import { MainLayout } from '../../layouts/MainLayout';
import React from "react";

export default function Profile() {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
                <div className="d-flex justify-between">
                    <div>
                        <Avatar
                            style={{ width: 120, height: 120, borderRadius: 6 }}
                            src="data:image/jpeg;base64,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"
                        />
                        <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
                            Player173
                        </Typography>
                    </div>
                    <div>
                        <Link href="/profile/settings">
                            <Button
                                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                                variant="contained">
                                <SettingsIcon />
                            </Button>
                        </Link>
                        <Button style={{ height: 42 }} variant="contained" color="primary">
                            <MessageIcon className="mr-10" />
                            Написать
                        </Button>
                    </div>
                </div>
                <div className="d-flex mb-10 mt-10">
                    <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
                        +111108
                    </Typography>
                    <Typography>1000 - 7 подписчика</Typography>
                </div>
                <Typography>На проекте с ...</Typography>

                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Статьи" />
                    <Tab label="Комментарии" />
                    <Tab label="Закладки" />
                </Tabs>
            </Paper>
            <div className="d-flex align-start">
                <div className="mr-20 flex">
                </div>
                <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
                    <b>Подписчики</b>
                    <div className="d-flex mt-15">
                    </div>
                </Paper>
            </div>
        </MainLayout>
    );
}

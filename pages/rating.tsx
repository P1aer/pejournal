import type { NextPage } from 'next'
import {MainLayout} from "../layouts/MainLayout";
import React from "react";
import {
    Paper, Tabs, Typography, Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, Button
} from "@material-ui/core";
import {FollowButton} from "../components/follow-button";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
                <Typography variant="h5" style={{fontWeight: 'bold', fontSize: 30, marginBottom:6}}>
                    Рейтинг сообщества
                </Typography>
                <Typography style={{fontSize: 15}}>
                    Топ 10 авторов получат целое ничего
                </Typography>
                <Typography>
                    <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
                        <Tab label="Август"/>
                        <Tab label="За 3 месяца"/>
                        <Tab label="Все время"/>
                    </Tabs>
                </Typography>
            </Paper>

            <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя пользователя</TableCell>
                            <TableCell align="right">Рейтинг</TableCell>
                            <TableCell align="right" />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <span className="mr-15">1</span>Вася Пупкин
                            </TableCell>
                            <TableCell align="right">540</TableCell>
                            <TableCell align="right">
                                <FollowButton />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </Paper>
        </MainLayout>
    )
}

export default Home

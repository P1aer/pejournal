import type { NextPage } from 'next'
import {MainLayout} from "../../layouts/MainLayout";
import React from "react";
import {Button, Divider, Paper, TextField, Typography} from "@material-ui/core";

const Home: NextPage = () => {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h6"> Основные настройки</Typography>
                <Divider className="mt-20 mb-30"/>
                <form className="mt-20">
                    <TextField className="mb-15"
                        size="small"
                        fullWidth
                        required
                        id="outlined-required"
                        variant="outlined"
                        label="Никнейм">
                    </TextField>
                    <TextField
                        size="small"
                        fullWidth
                        required
                        id="outlined-required"
                        variant="outlined"
                        label="эл-почта">
                    </TextField>
                    <Divider className="mt-20 mb-30"/>
                    <Button color="primary" variant="contained">Сохранить</Button>

                </form>
            </Paper>
        </MainLayout>
    )
}

export default Home

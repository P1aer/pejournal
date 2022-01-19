import React from 'react';
import { setCookie } from "nookies";
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validation';
import { FormField } from '../../form-field';
import {Api} from "../../../utils/api";
import {CreateUserDto} from "../../../utils/api/types";
import Alert from '@material-ui/lab/Alert';
import {setUserData} from "../../../redux/slices/user";
import {useAppDispatch} from "../../../redux/hooks";

interface LoginFormProps {
    onOpenRegister: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<LoginFormProps> = ({ onOpenRegister, onOpenLogin }) => {
    const dispatch = useAppDispatch();
    const [errorMessage, setErrorMessage] = React.useState('');
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmit = async (dto: CreateUserDto) => {
        try {
            const data = await Api().user.register(dto);
            setCookie(null,"token", data.token, {
                maxAge: 30 * 24 * 60 *60,
                path:'/'
            })
            dispatch(setUserData(data))
            setErrorMessage('');
        }
        catch (e: any) {
            console.warn('Register err',e)
            if (e.response) {
                setErrorMessage(e.response.data.message);
            }
        }
    }

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="name" label="Имя и фамилия" />
                <FormField name="email" label="Почта" />
                <FormField name="password" label="Пароль" />
                {errorMessage && (
                    <Alert severity="error" className="mb-20">
                        {errorMessage}
                    </Alert>
                )}

                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button
                            disabled={!form.formState.isValid || form.formState.isSubmitting}
                            onClick={onOpenRegister}
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Войти
                        </Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text">
                            У меня есть аккаунт
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

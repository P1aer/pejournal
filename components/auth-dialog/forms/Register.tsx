import React from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validation';
import { FormField } from '../../form-field';

interface LoginFormProps {
    onOpenRegister: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<LoginFormProps> = ({ onOpenRegister, onOpenLogin }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmit = (data:any) => console.log(data);

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="fullname" label="Имя и фамилия" />
                <FormField name="email" label="Почта" />
                <FormField name="password" label="Пароль" />
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button
                            disabled={!form.formState.isValid}
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

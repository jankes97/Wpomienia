import React, {useState} from 'react';
import { Avatar, Button, Grid, Typography, Container, Paper } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    //const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSingup, setIsSingup] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSingup((prevIsSingup) => !prevIsSingup);
        handleShowPassword(false);
    };
    const googleSuccess = (res) => {
        console.log(res);
    };
    const googleFailure = () => {
        console.log("Nieudane logowanie. Spróbuj ponownie");
    };

    const classes = useStyles();
    return(
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSingup ? 'Rejestracja' : 'Logowanie'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSingup && (
                                <>
                                    <Input name="firstname" label="Imię" handleChange={handleChange} autorFocus half />       
                                    <Input name="lastname" label="Nazwisko" handleChange={handleChange} half />       
                                </>
                            )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Hasło" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSingup && <Input name="confirmPassword" label="Wprowadź ponownie hasło" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSingup ? 'Rejestracja' : 'Logowanie'}
                    </Button>
                    <GoogleLogin
                        clientId="126003661085-15ud7rvl7rj57rb1ih7flif77uo0t666.apps.googleusercontent.com" //klucz z api google do logowania przez google
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained"> Zaloguj przez konto Google</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookies="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSingup ? 'Masz już konto! Zaloguj się.' : "Nie masz konta! Zarejestruj się."}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
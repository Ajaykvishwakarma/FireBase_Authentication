import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Navbar/Navbar';
import {
  loginWithGoogleRedirecting,
  loginWithGoogleByPopWindow,
  handleLogout,
  loginAnAccountWithFirebase
} from '../../../configs/firebase';


const theme = createTheme();

export const  Login = () => {

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const token = JSON.parse(localStorage.getItem('token')) ;

  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div style={{marginTop:"100px"}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{marginBottom:"20px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <AccountCircleIcon  />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="div" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            />
           
            <Button
                  onClick={() => {
                    loginAnAccountWithFirebase(email, password);
                  }}
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           {token ?  <Button
              type=""
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogout}
            >
              Sign out
            </Button> : ""}
            <Button 
            type=""
            fullWidth
            sx={{ mt: 0, mb: 2 }}
            onClick={loginWithGoogleByPopWindow}
            style={{border:" 1px solid blue"}}>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" style={{paddingRight:"10px"}} />
               Sign in with Google with PopUp
            </Button>

            <Button 
            type=""
            fullWidth
            sx={{ mt: 0, mb: 2 }}
            onClick={loginWithGoogleRedirecting}
            style={{border:" 1px solid blue"}}>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" style={{paddingRight:"10px"}} />
               Sign in with Google with Redirection
            </Button>
            
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>

    </ThemeProvider>
    </div>

    </div>
  );
}
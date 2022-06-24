import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Navbar/Navbar';
import { createAnAccountWithFirebase }  from '../../../configs/firebase';

const theme = createTheme();

export const Register = () => {

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  

 const navigate = useNavigate();
  return (
    <div >
    <div>
      <Navbar />
    </div>
    <div style={{marginTop:"100px"}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{marginBottom: "20px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="div" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
             
            </Grid>
            <Button
                onClick={() => {
                  createAnAccountWithFirebase(email, password);
                  
                }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
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
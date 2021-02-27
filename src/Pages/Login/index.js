import { Box, Button, IconButton, Paper } from '@material-ui/core';
import { AccountCircle, ArrowForwardIosOutlined, PersonAdd, Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import Api from '../../api';
import { login } from './auth';
import { 
    CardLogin,
    Container,
    CardLoginContent,
    CardForm,
    InputLogin,
    IMGLogo,
    CardButtons
     } from './styles';

function Login(props) {
    const [view,setview] = useState(false)
    const [user,setuser] = useState('');
    const [passwd,setpasswd] = useState('');

    const autenticar = async() =>{
        const res = await Api.post('login',{'username':user,'password':passwd})
        login(res.data)
    }   

  return(
      <Container>
          <CardLogin>
              <IMGLogo
              image='https://i.ibb.co/zJ1rRDy/COLAB.gif'
              />
            <CardLoginContent>
                <CardForm>
                    <Paper>
                        <InputLogin
                            label='Usuario / Email'
                            variant='filled'
                            onChange={e=>setuser(e.target.value)}
                            onKeyUp={e=>{if(e.key==='Enter'){
                                document.getElementById('passwd').focus();
                            }}}
                            inputProps={{
                                tabIndex:'1'
                            }}
                            InputProps={{
                                endAdornment:(
                                <IconButton>
                                    <AccountCircle/>
                                </IconButton>
                                )
                            }}
                        />
                    </Paper>
                    <Paper>
                        <InputLogin
                            inputProps={{
                                tabIndex:'2'
                            }}
                            label='Senha'
                            variant='filled'
                            type={!view?'password':'text'}
                            onChange={e=>setpasswd(e.target.value)}
                            onKeyDown={e=>{if(e.key==='Enter'){
                                autenticar()
                            }}}
                            id='passwd'
                            InputProps={{
                                endAdornment:(
                                <IconButton onClick={e=>setview(!view)}>
                                    {view?<VisibilityOff/>:<Visibility/>}
                                </IconButton>
                                )
                            }}
                        />
                    </Paper>
                </CardForm>
                <CardButtons >
                    <Box>
                        <Button style={{display:'flex',alignItems:'center',color:'#c969e4'}}>
                            <PersonAdd style={{color:'#c969e4'}}/>
                             Registrar
                        </Button>
                    </Box>
                    <Box>
                        <IconButton onClick={e=>login()}>
                            <ArrowForwardIosOutlined style={{color:'#32B36B'}}/>
                        </IconButton>
                    </Box>
                </CardButtons>
            </CardLoginContent>
          </CardLogin>
      </Container>
  );
}

export default Login;
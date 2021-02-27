import { Box, Card, CardContent, CardMedia, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Box)`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const CardLogin = styled(Card)`
    height:60vh;
    width:20%;
    @media only screen and (max-width: 1001px) {
    width:100vw;  
    height:100vh;
  };
}
`;
export const IMGLogo = styled(CardMedia)`
height:50%;
`;
export const CardLoginContent = styled(CardContent)`
    width:100%;

`;
export const CardForm = styled(Box)`
    width:100%;
    height:120px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
export const InputLogin = styled(TextField)`
    width:100%;
    .MuiFilledInput-underline:after{
        border-bottom: 2px solid #c969e4 ;
    }
    .Mui-focused{
        color:#c969e4;
    }
`;
export const CardButtons = styled(Box)`
justify-content:space-between;
width:100%;
display:flex;
margin-top:10px;
align-items:center;
`;
import { Box, Button, IconButton, Paper, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Paper)`
  width:80%;
  height:100%;
  display:flex;
  justify-content:space-around;
  background-color:white;
`;
export const Aba = styled(Paper)`
    width:30%;
    background-color:#80808017;
`;
export const SpaceStatus = styled(Toolbar)`
display:flex;
justify-content:space-between;
z-index:200;
`;
export const ButtonAdd = styled(Button)`
  background-color:white;
  margin-top:3px;
  z-index:100;
  border-radius:5px;
`;
export const Cards = styled(Box)`
display:flex;
flex-direction:column;
`;
import { Box, IconButton, Paper, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Paper)`
  width:80%;
  height:100%;
  display:flex;
  justify-content:space-around;
`;
export const Aba = styled(Paper)`
    width:30%;
`;
export const SpaceStatus = styled(Toolbar)`
display:flex;
justify-content:space-between;
`;
export const ButtonAdd = styled(IconButton)`

`;
export const Cards = styled(Box)`
display:flex;
flex-direction:column;
`;
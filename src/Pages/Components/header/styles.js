import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(AppBar)`
    background:white!important;
`;
export const SpaceHeader = styled(Toolbar)`
    display:flex;
    justify-content:space-between;
    padding:0 5vw 0 5vw !important;
`;
export const Logo= styled(Box)`
    display:flex;
`;
export const MenuHeader = styled(Box)`
display:flex;
align-items:center;
`;
export const Buttons = styled(Box)`

`;
export const BotaoIcone = styled(IconButton)`
    color:black!important;
`;
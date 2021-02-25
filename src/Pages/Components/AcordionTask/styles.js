import { Accordion, AccordionDetails, AccordionSummary, Menu } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Accordion)`
  
`;
export const TitleTask = styled(AccordionSummary)`
    .toolbar-ui{
        width:100%;
        display:flex;
        justify-content:space-between;
    }
`;
export const BodyTask = styled(AccordionDetails)`

`;
export const MenuAction = styled(Menu)`
    .Menubtnstask{
        display:flex;
        justify-content:space-around;
    }
    .MuiPaper-root {
        background:#485860!important;
    }
    .MuiDivider-root{
        background-color:#bdbdbd;
    }
`;

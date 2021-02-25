import { Accordion, AccordionDetails, AccordionSummary, Menu } from '@material-ui/core';
import styled,{css} from 'styled-components';

export const Container = styled(Accordion)`
  margin-top:5px;
`;
export const TitleTask = styled(AccordionSummary)`
    .toolbar-ui{
        width:100%;
        display:flex;
        justify-content:space-between;
    }
    background:white;
    ${props=>props.isDragging && css`
    border:2px dashed gray;
    background-color:#80808017;
    cursor: grabbing!important;
    .toolbar-ui{
       visibility:hidden;
    }
  ` }
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

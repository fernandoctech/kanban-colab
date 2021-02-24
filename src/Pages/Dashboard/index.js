import { Divider, MenuItem, MenuList, Paper, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Header from "../Components/header";
import PainelToDo from "../Components/Painel";
import { Container } from "./styles";

function Dashboard(props){
    return(
        <>
        <Header rotas={props}/>
        <Container>
            <Paper style={{width:'250px'}}>
                <Toolbar>
                    <img src='https://i.ibb.co/MSc2kGz/DEV-S.png'style={{width:'100%'}}/>
                </Toolbar>
                <Toolbar style={{width:'100%'}}>
                    <MenuList style={{width:'100%'}}>
                        <MenuItem style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
                            Options
                            <Menu/>
                        </MenuItem>
                        <Divider/>
                        <MenuItem style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
                            Options
                            <Menu/>
                        </MenuItem>
                        <Divider/>
                    </MenuList>
                </Toolbar>
            </Paper>
            <PainelToDo/>
        </Container>
        </>
    )
}

export default Dashboard;
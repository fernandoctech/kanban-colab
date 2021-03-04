import { Menu,Avatar, Button,  MenuItem,  MenuList,  Typography } from "@material-ui/core";
import { Menu as MenuIcon} from "@material-ui/icons";
import { useState } from "react";
import { logout } from "../../Login/auth";
import { Container,Logo, SpaceHeader,MenuHeader,Buttons,BotaoIcone } from "./styles";


function Header(props) {
    const [open_menu,setOpenMenu] = useState(false);
    const user = props.rotas.history.location.state.userdate;
    const handleOpenMenu=(e)=>{
        setOpenMenu(e.currentTarget)
    }
    return(
        <Container>
            <SpaceHeader variant='dense'>
                <Logo>
                    <Typography variant='h5' style={{color:'#32B36B'}}>
                       {' < '}Colab
                    </Typography>
                    <Typography variant='h5' style={{color:'#485860'}}>
                        Dev's {'/>'}
                    </Typography>
                </Logo>
                <MenuHeader>
                        <Typography style={{color:'black'}}>{user.nome}</Typography>
                    <Button>
                        <Avatar src={user.url_imagem}></Avatar>
                    </Button>
                    <Buttons>
                        <BotaoIcone onClick={handleOpenMenu} aria-controls={'menu'} aria-haspopup="true">
                            <MenuIcon/>
                        </BotaoIcone>
                    </Buttons>
                </MenuHeader>
            </SpaceHeader>
            <Menu
            anchorEl={open_menu} 
            open={Boolean(open_menu)} 
            onClose={e=>setOpenMenu(false)} 
            id={'menu'}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            >
                <MenuList>
                    <MenuItem onClick={logout}>
                        logout
                    </MenuItem>
                </MenuList>
            </Menu>
        </Container>
    )
}
export default Header;
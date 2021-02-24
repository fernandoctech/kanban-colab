import { Avatar, Button,  Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Container,Logo, SpaceHeader,MenuHeader,Buttons,BotaoIcone } from "./styles";


function Header(props) {
    return(
        <Container>
            <SpaceHeader variant='dense'>
                <Logo>
                    <Typography variant='h5' style={{color:'#32B36B'}}>
                       {' < '}Colab
                    </Typography>
                    <Typography variant='h5' style={{color:'#485860'}}>
                        Dev's {'>'}
                    </Typography>
                </Logo>
                <MenuHeader>
                    <Button>
                        <Avatar></Avatar>
                    </Button>
                    <Buttons>
                        <BotaoIcone>
                            <Menu/>
                        </BotaoIcone>
                    </Buttons>
                </MenuHeader>
            </SpaceHeader>
        </Container>
    )
}
export default Header;
import { Box, IconButton, Paper, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react';
import { Container,Aba ,SpaceStatus,ButtonAdd, Cards} from './styles';

function PainelToDo(props) {
    const status = [
        {
            'id':'1',
            'nome':'A Fazer',
            'sequencia':'1',
            'icone':'build',
        },
        {
            'id':'2',
            'nome':'Andamento',
            'sequencia':'2',
            'icone':'access_time',
        },
        {
            'id':'3',
            'nome':'Feito',
            'sequencia':'3',
            'icone':'done_all',
        }
    ]

  return (
        <Container>
          {status.map(x=>(
              <Aba elevation='0'>
                  <Paper>
                      <SpaceStatus>
                          <Typography>
                            {x.nome}
                          </Typography>
                          <Box>
                            <IconButton>
                                <i className='material-icons'>{x.icone}</i>
                            </IconButton>
                          </Box>
                      </SpaceStatus>
                  </Paper>
                  <ButtonAdd >
                        <Add/>
                  </ButtonAdd>
                  <Cards>
                        
                  </Cards>
              </Aba>
          ))}
      </Container>
  );
}

export default PainelToDo;
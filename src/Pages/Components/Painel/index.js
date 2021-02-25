import { Accordion, AccordionDetails, AccordionSummary, Box, Card, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Api from '../../../api';
import AcordionTask from '../AcordionTask';
import { Container,Aba ,SpaceStatus,ButtonAdd, Cards} from './styles';

function PainelToDo(props) {
    const [tasks,settasks] = useState([]);
    const status = [
        {
            'id':1,
            'nome':'A Fazer',
            'sequencia':'1',
            'icone':'build',
        },
        {
            'id':2,
            'nome':'Andamento',
            'sequencia':'2',
            'icone':'access_time',
        },
        {
            'id':3,
            'nome':'Feito',
            'sequencia':'3',
            'icone':'done_all',
        }
    ]
    useEffect(()=>{
        const load_tasks = async() =>{
            const res = await Api.post('buscar_tarefas')
            settasks(res.data)
        }
        load_tasks()
    },[])
  return (
        <Container>
          {status.map( x => (
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
                  <ButtonAdd variant='contained'>
                        <Add/>
                  </ButtonAdd>
                  <Cards>
                        {tasks.map(task => {
                            if(task.status_tarefa_id === x.id ){
                                return(
                                   <AcordionTask tarefa={task} />
                                )
                            }
                        })}
                  </Cards>
              </Aba>
          ))}
      </Container>
  );
}

export default PainelToDo;
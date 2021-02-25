import { Avatar, Divider, IconButton, MenuItem, MenuList, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import { BodyTask, Container, TitleTask,MenuAction } from './styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
function AcordionTask(props) {
    const task = props.task
    const [opendrop,setopen] = useState(false)
    const handledrop = (e)=>{
        e.stopPropagation();
        setopen(e.currentTarget)
    }
    const closedrop = (e) =>{

    }
  return (
    <Container>
    <TitleTask>
        <Toolbar className='toolbar-ui'>
            <Typography>
                {task.nome}
            </Typography>
            <IconButton onClick={(e) => {handledrop(e)}} aria-controls={'dropmenu'+task.id} aria-haspopup="true">
                <Menu/>
            </IconButton>
        </Toolbar>
    </TitleTask>
    <BodyTask>
        <Toolbar>
            <Typography>
                {task.detalhes}
            </Typography>
        </Toolbar>
    </BodyTask>
    <MenuAction 
    anchorEl={opendrop} 
    open={Boolean(opendrop)} 
    onClose={e=>setopen(false)} 
    id={'dropmenu'+task.id}
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
            <MenuItem className='Menubtnstask' >
                <Typography>
                    Campo
                </Typography>
            </MenuItem>
            <Divider/>
            <MenuItem className='Menubtnstask' >
                <Typography>
                    Campo
                </Typography>
            </MenuItem>
            <Divider/>
            <MenuItem className='Menubtnstask' >
                <Typography>
                    <AvatarGroup max={3}>
                        <Avatar>M</Avatar>
                        <Avatar>F</Avatar>
                        <Avatar>D</Avatar>
                        <Avatar></Avatar>
                    </AvatarGroup>
                </Typography>
            </MenuItem>
            <Divider/>
        </MenuList>
    </MenuAction>
</Container>
  );
}

export default AcordionTask;
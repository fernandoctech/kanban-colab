import { Avatar, Box, Divider, IconButton, MenuItem, MenuList, Toolbar, Typography } from '@material-ui/core';
import { Delete, Edit, Menu, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons';
import React, { useState } from 'react';
import { BodyTask, Container, TitleTask,MenuAction } from './styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { useDrag } from "react-dnd";
function AcordionTask(props) {
    const task = props.tarefa
    const [opendrop,setopen] = useState(false)
    const [{ isDragging }, dragRef] = useDrag({
          item: {type:'card' },
          collect: (monitor) => ({
            isDragging: monitor.isDragging()
          })
        }
      )
    const handledrop = (e)=>{
        e.stopPropagation();
        setopen(e.currentTarget)
    }
    const closedrop = (e) =>{

    }

  return (
    <Container >
    <TitleTask ref={ dragRef}  id='CARD' isDragging={isDragging}>
        <Toolbar className='toolbar-ui'>
            <Typography >
                {task.nome}
            </Typography>
            <IconButton onClick={(e) => {handledrop(e)}} aria-controls={'dropmenu'+task.id} aria-haspopup="true">
                <Menu/>
            </IconButton>
        </Toolbar>
    </TitleTask>
    <BodyTask className='bodytask'>
        <Toolbar>
            <Typography >
                {task.detalhes}
            </Typography>
        </Toolbar>
    </BodyTask>
    <MenuAction 
    anchorEl={opendrop} 
    open={Boolean(opendrop)} 
    onClose={e=>setopen(false)} 
    id={'dropmenu'+task.id}
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
        <MenuList className='menulists-ui'>
            <Box className='Menubtnstask' >
                <Typography>
                    <IconButton>
                        <Edit style={{color:'#32B36B'}}/>
                    </IconButton>
                    <IconButton>
                        <Delete style={{color:'red'}}/>
                    </IconButton>
                </Typography>
            </Box>
            <Divider/>
            <Box className='Menubtnstask' >
                <Typography>
                    <IconButton>
                        <ThumbUpAlt style={{color:'#32B36B'}}/>
                    </IconButton>
                    <IconButton>
                        <ThumbDownAlt style={{color:'red'}}/>
                    </IconButton>
                </Typography>
            </Box>
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
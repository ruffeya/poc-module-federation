import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

import actions from '../const/actions';


const ActionsList = () => <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {actions.map(action => <ListItem alignItems="flex-start" key={action.id}>
    <ListItemText
      primary={action.name}
      secondary={action.description}
    />
  </ListItem>)}
</List>;

export default ActionsList;

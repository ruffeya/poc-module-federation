import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

import actions from '../const/actions';
import { ActionType } from '../types/actions';


interface ActionsListProps {
  onClick?: (action: ActionType) => void;
}

const ActionsList: React.FC<ActionsListProps> = ({ onClick }) => (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} disablePadding>
    {actions.map(action => (
      <ListItem 
        disableGutters={true} 
        alignItems="flex-start" 
        key={action.id} 
        onClick={() => {
          console.log(`Action clicked: ${action.name}`);
          if (onClick) onClick(action);
        }}
      >
        <ListItemText
          primary={action.name}
          secondary={action.description}
        />
      </ListItem>
    ))}
  </List>
);

export default ActionsList;

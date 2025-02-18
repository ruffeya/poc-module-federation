import React from 'react';
import actions from '../const/actions';

import { styled } from '@mui/system';

const ActionElement = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  marginTop: 5,
});

const ActionsList = () => <div>
  {actions.map(action => <ActionElement key={action.id}>
    <div>{action.name}</div>
    <div>{action.description}</div>
  </ActionElement>)}
</div>;

export default ActionsList;
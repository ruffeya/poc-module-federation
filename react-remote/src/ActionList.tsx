import React from 'react';
import actions from '../const/actions';

const ActionsList = () => <ul>
  {actions.map(action => <li>
    <div>{action.name}</div>
    <div>{action.description}</div>
  </li>)}
</ul>;

export default ActionsList;
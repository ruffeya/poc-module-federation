import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';

import ActionsList from 'Remote/ActionsList';
import ActionsForm from 'Remote/ActionsForm';


export type ActionType = {
  id: number;
  name: string;
  description: string;
  formType: string;
};

const ActionsDashboard: React.FC = () => {
  const [ myChoresList, setMyChoresList] = useState<ActionType[]>([]);
  const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);
  console.log(selectedAction)
  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <ActionsList onClick={(value) => setSelectedAction(value)} />
      </Grid>
      <Grid size={9}>
        <ActionsForm formType={selectedAction?.formType}/>
      </Grid>
    </Grid>
  );  
};

export default ActionsDashboard;
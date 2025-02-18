import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';

import ActionsList from 'Remote/ActionsList';
import ActionsForm from 'Remote/ActionsForm';

type ActionType = {
  formName: string;
};

const ActionsDashboard: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);

  return (
    <Grid container>
      <Grid size={3}>
        <ActionsList onClick={(value) => setSelectedAction(value)} />
      </Grid>
      <Grid size={9}>
        <ActionsForm formName={selectedAction?.formName}/>
      </Grid>
    </Grid>
  );  
};

export default ActionsDashboard;
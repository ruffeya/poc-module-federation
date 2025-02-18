import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';

import ActionsList from 'Remote/ActionsList';
import ActionsForm from 'Remote/ActionsForm';


const ActionsDashboard: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState(null);

  console.log(selectedAction)
  return (
    <Grid container>
      <Grid item size={3}>
        <ActionsList onClick={(value) => setSelectedAction(value)} />
      </Grid>
      <Grid item size={9}>
        <ActionsForm formName={selectedAction?.formName}/>
      </Grid>
    </Grid>
  );  
};

export default ActionsDashboard;
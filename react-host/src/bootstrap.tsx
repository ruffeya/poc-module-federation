import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container, CssBaseline, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import ActionsDashboard from './features/ActionsDashboard/ActionsDashboard';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <Grid size={12}>
      <Typography variant="h4" component="h5">
        Plan your home routine
      </Typography>
      </Grid>
      <ActionsDashboard />
    </Container>
  </React.Fragment>
);


const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
} else {
  console.error('Root element not found');
}

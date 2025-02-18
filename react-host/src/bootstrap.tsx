import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container, CssBaseline } from '@mui/material';

import ActionsList from 'Remote/ActionsList';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <ActionsList />
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

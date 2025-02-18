import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from 'Remote/Button';
import ActionsList from 'Remote/ActionsList';

const App = () => (
  <div>
    <h1>Hello from Host</h1>
    <Button />
    <ActionsList />
  </div>
);


const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);

  root.render(<App />);
} else {
  console.error('Root element not found');
}
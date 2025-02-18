import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './Button';
import ActionsList from './ActionList';


const domNode = document.getElementById('root');
const root = createRoot(domNode);


root.render(
  <React.StrictMode>
    <Button />
    <ActionsList />
  </React.StrictMode>
);
import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './Button.jsx';
import ActionsList from './ActionList.jsx';


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Button />
    <ActionsList />
  </React.StrictMode>
);
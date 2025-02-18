import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './Button';
import ActionsList from './ActionsList';
import ActionForm from './ActionsForm';


const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <React.StrictMode>
      <Button />
      <ActionsList />
      <ActionForm formName="CleanTheFridge"/>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
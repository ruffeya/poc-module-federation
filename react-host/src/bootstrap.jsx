import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from 'Remote/Button';

const App = () => (
  <div>
    <h1>Hello from Host</h1>
    <Button />
  </div>
);


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
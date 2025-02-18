import React from 'react';
import CleanFridge from './CleanTheFridge';
import ErrorForm from './ErrorForm';
import { FormType } from '../../types/actionTypes';


interface ActionFormProps {
  formName: FormType; 
}

const ActionsForm: React.FC<ActionFormProps> = ({ formName }) => {
  if (formName === 'CleanTheFridge') {
    return <CleanFridge />
  }
  return <ErrorForm />
}

export default ActionsForm;

export { CleanFridge, ErrorForm };
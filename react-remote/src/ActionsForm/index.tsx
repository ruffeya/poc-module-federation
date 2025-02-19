import React from 'react';
import CleanFridge from './CleanTheFridge';
import ErrorForm from './ErrorForm';
import { FormType } from '../../types/actionTypes';


interface ActionFormProps {
  formType: FormType; 
}

const ActionsForm: React.FC<ActionFormProps> = ({ formType }) => {
  if (formType === 'CleanTheFridge') {
    return <CleanFridge />
  }
  return <ErrorForm />
}

export default ActionsForm;

export { CleanFridge, ErrorForm };
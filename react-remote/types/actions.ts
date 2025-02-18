export type FormType = 
  | 'CleanTheFridge'
  | 'BuyGroceries'
  | 'VacuumTheLivingAreas'
  | 'DustFurnitureAndShelves'
  | 'WashTheBedding'
  | 'ScrubTheBathroom'
  | 'MopTheFloors'
  | 'TakeOutTheTrashAndRecycling'
  | 'WaterThePlants';

export type ActionType = {
  id: number;
  name: string;
  description: string;
  formName: FormType;
};

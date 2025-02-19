
export const formTypes = [
  'CleanTheFridge',
  'BuyGroceries',
  'VacuumTheLivingAreas',
  'DustFurnitureAndShelves',
  'WashTheBedding',
  'ScrubTheBathroom',
  'MopTheFloors',
  'TakeOutTheTrashAndRecycling',
  'WaterThePlants'
] as const;

export type FormType = typeof formTypes[number];

export type ActionType = {
  id: number;
  name: string;
  description: string;
  formType: FormType;
};

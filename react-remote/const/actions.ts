import { Action } from '../types/actions';

const actions: Action[] = [{
  id: 1,
  name: 'Clean the Fridge',
  description: 'Remove old and expired items, ' +
    'wipe down the interior with a mild cleaner, and organize ' +
    'the contents to ensure everything is easily accessible.'
}, {
  id: 2,
  name: 'Buy Groceries',
  description: 'Restock pantry and refrigerator essentials ' + 
    'including vegetables, fruits, dairy, and other staples ' +
    'needed for the week.',
}, {
  id: 3,
  name: 'Vacuum the Living Areas',
  description: 'Regular vacuuming of living rooms, bedrooms, ' +
    'and hallways to keep the floors clean and dust-free.',
}, { 
  id: 4,
  name: 'Dust Furniture and Shelves',
  description: 'Wipe down surfaces like tables, chairs, and ' +
    'shelves to remove dust and keep the area looking fresh.',
}, {
  id: 5,
  name: 'Wash the Bedding',
  description: 'Change and launder bed sheets, pillowcases, ' +
    'and duvet covers to maintain a clean and comfortable sleeping environment.',
}, {
  id: 6,
  name: 'Scrub the Bathroom',
  description: 'Thoroughly clean the toilet, sink, shower, and ' +
    'tub; check and restock toiletries and towels.',
}, {
  id: 7,
  name: 'Mop the Floors',
  description: 'Clean the floors of the kitchen, bathroom, and ' +
    'other tiled areas to remove dirt and grime.'
}, {
  id: 8,
  name: 'Take Out the Trash and Recycling',
  description: 'Ensure that all trash bins are emptied and ' +
    'materials are sorted into the appropriate recycling bins.'
}, {
  id: 9,
  name: 'Water the Plants',
  description: 'Check and water indoor and outdoor plants, and ' +
    'remove any dead leaves or debris.'
}];

export default actions;
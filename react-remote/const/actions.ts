import { Action } from '../types/actions';

const actions: Action[] = [{
  name: 'Clean the Fridge',
  description: 'Remove old and expired items, ' +
    'wipe down the interior with a mild cleaner, and organize ' +
    'the contents to ensure everything is easily accessible.'
}, {
  name: 'Buy Groceries',
  description: 'Restock pantry and refrigerator essentials ' + 
    'including vegetables, fruits, dairy, and other staples ' +
    'needed for the week.',
}, {
  name: 'Vacuum the Living Areas',
  description: 'Regular vacuuming of living rooms, bedrooms, ' +
    'and hallways to keep the floors clean and dust-free.',
}, { 
	name: 'Dust Furniture and Shelves',
  description: 'Wipe down surfaces like tables, chairs, and ' +
    'shelves to remove dust and keep the area looking fresh.',
}, {
  name: 'Wash the Bedding',
  description: 'Change and launder bed sheets, pillowcases, ' +
    'and duvet covers to maintain a clean and comfortable sleeping environment.',
}, {
  name: 'Scrub the Bathroom',
  description: 'Thoroughly clean the toilet, sink, shower, and ' +
    'tub; check and restock toiletries and towels.',
}, {
  name: 'Mop the Floors',
  description: 'Clean the floors of the kitchen, bathroom, and ' +
    'other tiled areas to remove dirt and grime.'
}, {
  name: 'Take Out the Trash and Recycling',
  description: 'Ensure that all trash bins are emptied and ' +
    'materials are sorted into the appropriate recycling bins.'
}, {
  name: 'Water the Plants',
  description: 'Check and water indoor and outdoor plants, and ' +
    'remove any dead leaves or debris.'
}];

export default actions;
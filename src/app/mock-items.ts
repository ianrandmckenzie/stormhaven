import { Item } from './item';

export const ITEMS: Item[] = [
  { id: 1, name: 'blanket', description: 'A wool blanket to keep you warm. Use this item to maintain warmth. Stops being used during tool use or combat.', weight: 5, damage: 0 },
  { id: 2, name: 'dead-grass', description: 'Some dry, dead grass. Perfect for fire tinder. Use this item to start a fire. Requires 2 matches.', weight: 0.5, damage: 0 },
  { id: 3, name: 'firewood', description: 'Wood to keep a fire burning. Use this item to make a fire last longer. Requires a burning fire.', weight: 5, damage: 0 },
  { id: 4, name: 'flaregun', description: 'A flare gun with 1 round of ammunition to defend yourself. If you are out of matches, this item will be used when starting a fire.', weight: 3, damage: 6 },
  { id: 5, name: 'fur', description: 'A pelt of fur to keep you warm. Use this item to stitch into winter garments. Requires thread.', weight: 4, damage: 0 },
  { id: 6, name: 'hatchet', description: 'A tool for gathering wood and kindling. A weapon to defend yourself.', weight: 6, damage: 4 },
  { id: 7, name: 'knife', description: 'A tool for cutting thread, meat, pelts of fur, and other things. A weapon to defend yourself.', weight: 2, damage: 6 },
  { id: 8, name: 'matches', description: 'Use this item for starting a fire. Requires 1 dead grass.', weight: 0.1, damage: 0 },
  { id: 9, name: 'meat', description: 'Nourishment for the road ahead. Use this item to replenish your energy.', weight: 1, damage: 0 },
  { id: 10, name: 'note', description: 'A mysterious note. Use this item to read the note.', weight: 0.1, damage: 0 },
  { id: 11, name: 'ration', description: 'Carbohyrdrates to keep you going. Use this item to replenish your energy. Decreases sanity. Reduced sanity drains energy faster.', weight: 0.5, damage: 0 },
  { id: 12, name: 'sticks', description: 'Kindling to build a fire. Supports for building a tent. Use this item to increase the warmth of your fire. Requires a burning fire. Does +3 damage near a burning fire.', weight: 0.5, damage: 2 },
  { id: 13, name: 'tent', description: 'Shelter from the harsh winds. Use this item to keep yourself warm. Stops being used when you move from where you are.', weight: 30, damage: 0 },
  { id: 14, name: 'thread', description: 'Thread for making tents and winter garments. Use this item to build a tent. Requires 20 sticks and 6 fur.', weight: 0.5, damage: 0 },
];

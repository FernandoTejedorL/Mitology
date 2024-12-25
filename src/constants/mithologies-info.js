import { v4 } from 'uuid';
import { ROMAN_INFO } from './roman-info';
import { GREEK_INFO } from './greek-info';
import { EGYPTIAN_INFO } from './egyptian-info';
import { NORDIC_INFO } from './nordic-info';

export const MITHOLOGIES_INFO = [
	{
		id: v4(),
		name: 'ROMAN',
		path: 'mithology/roman',
		info: ROMAN_INFO
	},
	{
		id: v4(),
		name: 'GREEK',
		path: 'mithology/greek',
		info: GREEK_INFO
	},
	{
		id: v4(),
		name: 'EGYPTIAN',
		path: 'mithology/egyptian',
		info: EGYPTIAN_INFO
	},
	{
		id: v4(),
		name: 'NORDIC',
		path: 'mithology/nordic',
		info: NORDIC_INFO
	}
];

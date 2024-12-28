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
		logo: '/assets/images/home/roman-logo.png',
		info: ROMAN_INFO
	},
	{
		id: v4(),
		name: 'GREEK',
		path: 'mithology/greek',
		logo: '/assets/images/home/greek-logo.png',
		info: GREEK_INFO
	},
	{
		id: v4(),
		name: 'EGYPTIAN',
		path: 'mithology/egyptian',
		logo: '/assets/images/home/egyptian-logo.png',
		info: EGYPTIAN_INFO
	},
	{
		id: v4(),
		name: 'NORDIC',
		path: 'mithology/nordic',
		logo: '/assets/images/home/nordic-logo.png',
		info: NORDIC_INFO
	}
];

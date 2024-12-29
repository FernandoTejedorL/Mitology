import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const GREEK_INFO = [
	{
		id: v4(),
		color: COLORS.greek,
		hover: COLORS.greekhover,
		banner: {
			mobile: '/assets/images/greek/banner-mobile.jpg',
			tablet: '/assets/images/greek/banner-tablet.jpg',
			desktop: '/assets/images/greek/banner-desktop.jpg'
		},
		kind: 'GREEK MITHOLOGY',
		0: {
			beingOne: {
				name: 'ZEUS',
				tab: 'ZEUS',
				image: {
					mobile: '/assets/images/greek/zeus-mobile.jpg',
					tablet: '/assets/images/greek/zeus-tablet.jpg',
					desktop: '/assets/images/greek/zeus-desktop.jpg'
				},
				caption:
					'Zeus is the king of the Greek gods and ruler of Mount Olympus. Known as the god of the sky, thunder, and justice, Zeus wields a powerful lightning bolt as his weapon and symbol of authority. He is often depicted as a strong and majestic figure with a flowing white beard and regal posture, embodying power and leadership. Zeus is also known for his role in maintaining order among gods and mortals, while his many myths showcase his complex personality, including his wisdom and occasional impulsiveness.'
			},
			beingTwo: {
				name: 'ATHENEA',
				tab: 'ATHENEA',
				image: {
					mobile: '/assets/images/greek/athenea-mobile.jpg',
					tablet: '/assets/images/greek/athenea-tablet.jpg',
					desktop: '/assets/images/greek/athenea-desktop.jpg'
				},
				caption:
					'Athena, the Greek goddess of wisdom, war, and strategic battle, is one of the most revered deities in Greek mythology. Known for her intelligence, courage, and calm demeanor, she embodies both wisdom and strength. Athena is often depicted wearing golden armor, a plumed helmet, and wielding a spear and shield. Her shield, the Aegis, features the head of Medusa, symbolizing her power to protect and strike fear into her enemies.'
			},
			beingThree: {
				name: 'POSEIDON',
				tab: 'POSEIDON',
				image: {
					mobile: '/assets/images/greek/poseidon-mobile.jpg',
					tablet: '/assets/images/greek/poseidon-tablet.jpg',
					desktop: '/assets/images/greek/poseidon-desktop.jpg'
				},
				caption:
					'Poseidon, the Greek god of the sea, earthquakes, and storms, is one of the most powerful Olympian gods. Known for his fierce temper and immense strength, Poseidon wields his iconic trident, a symbol of his dominion over the oceans and its creatures. He is often depicted as a muscular, bearded figure with flowing hair, emerging from the waves surrounded by sea creatures like dolphins, sharks, or horses.'
			}
		},
		1: {
			beingOne: {
				name: 'MEDUSA',
				tab: 'MEDUSA',
				image: {
					mobile: '/assets/images/greek/medusa-mobile.jpg',
					tablet: '/assets/images/greek/medusa-tablet.jpg',
					desktop: '/assets/images/greek/medusa-desktop.jpg'
				},
				caption:
					'Medusa is one of the most iconic figures in Greek mythology, known as a Gorgon cursed with snake-like hair and a gaze that could turn anyone to stone. Once a beautiful maiden, she was transformed by Athena as a punishment for desecrating her temple. Medusa is often portrayed as a tragic yet fearsome figure, symbolizing both beauty and danger. Her story highlights themes of transformation, vengeance, and power.'
			},
			beingTwo: {
				name: 'MINOTAUR',
				tab: 'MINOTAUR',
				image: {
					mobile: '/assets/images/greek/minotaur-mobile.jpg',
					tablet: '/assets/images/greek/minotaur-tablet.jpg',
					desktop: '/assets/images/greek/minotaur-desktop.jpg'
				},
				caption:
					'The Minotaur is a legendary creature from Greek mythology with the body of a man and the head of a bull. Born as a result of a curse on Queen Pasiphaë of Crete, the Minotaur was imprisoned in the Labyrinth, a vast and intricate maze designed by Daedalus. Feared for its strength and ferocity, the Minotaur would devour those sent into the Labyrinth as part of a tribute to King Minos. Eventually, the hero Theseus defeated the Minotaur.'
			},
			beingThree: {
				name: 'HYDRA',
				tab: 'HYDRA',
				image: {
					mobile: '/assets/images/greek/hydra-mobile.jpg',
					tablet: '/assets/images/greek/hydra-tablet.jpg',
					desktop: '/assets/images/greek/hydra-desktop.jpg'
				},
				caption:
					'The Hydra is a legendary multi-headed serpent from Greek mythology, known for its fearsome nature and regenerative powers. Each time one of its heads was cut off, two more would grow in its place, making it nearly invincible. The Hydra dwelled in the swamps of Lerna, a dark and treacherous environment, and was eventually slain by the hero Heracles as one of his Twelve Labors. Heracles used fire to seal the necks.'
			}
		},
		2: {
			beingOne: {
				name: 'ICARUS AND DEDALUS',
				tab: 'ICARUS',
				image: {
					mobile: '/assets/images/greek/icarus-mobile.jpg',
					tablet: '/assets/images/greek/icarus-tablet.jpg',
					desktop: '/assets/images/greek/icarus-desktop.jpg'
				},
				caption:
					'Icarus and Daedalus are key figures in Greek mythology, symbolizing ambition and consequence. Daedalus, a master craftsman, built wings of feathers and wax to escape Crete with his son. He warned Icarus not to fly too close to the sun, as the heat would melt the wax. Ignoring the warning, Icarus soared too high, and the sun melted his wings, causing him to fall tragically into the sea.'
			},
			beingTwo: {
				name: 'ORPHEUS AND EURYDICE',
				tab: 'ORPHEUS',
				image: {
					mobile: '/assets/images/greek/orpheus-mobile.jpg',
					tablet: '/assets/images/greek/orpheus-tablet.jpg',
					desktop: '/assets/images/greek/orpheus-desktop.jpg'
				},
				caption:
					'Orpheus and Eurydices story is one of love, loss, and tragedy in Greek mythology. Orpheus, a gifted musician, fell deeply in love with Eurydice. After her untimely death from a snake bite, Orpheus ventured into the Underworld to bring her back. Moved by his music, Hades agreed to let Eurydice return to life, but on one condition: Orpheus must not look back at her until they reached the surface.'
			},
			beingThree: {
				name: 'PERSEUS AND MEDUSA',
				tab: 'PERSEUS',
				image: {
					mobile: '/assets/images/greek/perseus-mobile.jpg',
					tablet: '/assets/images/greek/perseus-tablet.jpg',
					desktop: '/assets/images/greek/perseus-desktop.jpg'
				},
				caption:
					'The story of Perseus and Medusa is one of heroism and triumph in Greek mythology. Perseus, tasked with slaying Medusa, a Gorgon whose gaze turned anyone to stone, set out on his perilous quest. With the help of divine gifts – a reflective shield from Athena, winged sandals from Hermes, and a magical sword – Perseus approached Medusa as she slept. Using the shield to avoid her gaze, he beheaded her and claimed victory. '
			}
		}
	}
];

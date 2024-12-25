import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const EGYPTIAN_INFO = [
	{
		id: v4(),
		color: COLORS.egyptian,
		banner: {
			mobile: '/assets/images/egyptian/banner-mobile.jpg',
			tablet: '/assets/images/egyptian/banner-tablet.jpg',
			desktop: '/assets/images/egyptian/banner-desktop.jpg'
		},
		kind: 'EGYPTHIAN MITHOLOGY',
		0: {
			beingOne: {
				name: 'RA',
				image: {
					mobile: '/assets/images/egyptian/ra-mobile.jpg',
					tablet: '/assets/images/egyptian/ra-tablet.jpg',
					desktop: '/assets/images/egyptian/ra-desktop.jpg'
				},
				caption:
					'Ra is the ancient Egyptian sun god, revered as the creator of life and ruler of the heavens. Depicted with a solar disk atop his falcon-headed form, Ra represents light, warmth, and renewal. He travels across the sky during the day and journeys through the underworld at night, battling the chaos serpent Apophis to ensure the sun´s rebirth. As the supreme deity, Ra embodies power, creation, and cosmic order, playing a central role in Egyptian mythology and religious life.'
			},
			beingTwo: {
				name: 'ANUBIS',
				image: {
					mobile: '/assets/images/egyptian/anubis-mobile.jpg',
					tablet: '/assets/images/egyptian/anubis-tablet.jpg',
					desktop: '/assets/images/egyptian/anubis-desktop.jpg'
				},
				caption:
					'Anubis is the Egyptian god of mummification and protector of the dead, depicted with a jackal´s head and a human body. He guided souls to the afterlife and oversaw the embalming process, ensuring the preservation of the body for eternity. In the Weighing of the Heart ceremony, Anubis weighed the heart against the feather of Ma’at to determine a soul´s fate. Symbolizing both death and rebirth, Anubis represented divine justice and the sacred transition between life and the afterlife.'
			},
			beingThree: {
				name: 'HORUS',
				image: {
					mobile: '/assets/images/egyptian/horus-mobile.jpg',
					tablet: '/assets/images/egyptian/horus-tablet.jpg',
					desktop: '/assets/images/egyptian/horus-desktop.jpg'
				},
				caption:
					'Horus, the falcon-headed god, is one of the most prominent deities in Egyptian mythology. As the son of Osiris and Isis, he symbolizes kingship, protection, and justice. After avenging his father by defeating Set, Horus became the rightful ruler of Egypt, embodying the eternal battle between order and chaos. His eyes represent the sun and the moon, showcasing his celestial power. Horus is closely associated with the pharaoh, considered his earthly manifestation, symbolizing divine authority and leadership.'
			}
		},
		1: {
			beingOne: {
				name: 'AMMIT',
				image: {
					mobile: '/assets/images/egyptian/ammit-mobile.jpg',
					tablet: '/assets/images/egyptian/ammit-tablet.jpg',
					desktop: '/assets/images/egyptian/ammit-desktop.jpg'
				},
				caption:
					'Ammit, known as the “Devourer of Souls,” is a fearsome creature in Egyptian mythology. She has the head of a crocodile, the front body of a lion, and the hindquarters of a hippopotamus—animals symbolizing power and danger. Ammit appears in the Weighing of the Heart ceremony, where the hearts of the deceased are judged. If a heart is heavy with sin, Ammit devours it, condemning the soul to eternal restlessness. She embodies divine retribution and the consequences of moral failure.'
			},
			beingTwo: {
				name: 'BENNU',
				image: {
					mobile: '/assets/images/egyptian/bennu-mobile.jpg',
					tablet: '/assets/images/egyptian/bennu-tablet.jpg',
					desktop: '/assets/images/egyptian/bennu-desktop.jpg'
				},
				caption:
					'Bennu is a sacred bird in Egyptian mythology, symbolizing creation, renewal, and rebirth. Often depicted as a heron with radiant golden or red plumage, Bennu is associated with the sun god Ra and the cycle of life. According to myth, Bennu emerged from the primordial waters of Nun, resting on the first mound of earth to mark the beginning of creation. Seen as a precursor to the phoenix, Bennu embodies immortality, transformation, and the eternal cycles of life and death.'
			},
			beingThree: {
				name: 'SERPOPARD',
				image: {
					mobile: '/assets/images/egyptian/serpopard-mobile.jpg',
					tablet: '/assets/images/egyptian/serpopard-tablet.jpg',
					desktop: '/assets/images/egyptian/serpopard-desktop.jpg'
				},
				caption:
					'The Serpopard is a mythical creature from ancient Egyptian and Mesopotamian art, depicted as a leopard with an elongated, snake-like neck. This hybrid symbolizes chaos and untamed nature, often representing the forces that challenge order. The Serpopard frequently appears in ceremonial artifacts, such as the Narmer Palette, where it is shown restrained by humans, signifying humanity’s control over wild, chaotic elements. Though not part of religious texts, the Serpopard embodies the balance between civilization and the unpredictable forces of nature.'
			}
		},
		2: {
			beingOne: {
				name: 'THE TEARS OF RA',
				image: {
					mobile: '/assets/images/egyptian/tears-mobile.jpg',
					tablet: '/assets/images/egyptian/tears-tablet.jpg',
					desktop: '/assets/images/egyptian/tears-desktop.jpg'
				},
				caption:
					'The Tears of Ra is a myth explaining the creation of humanity in Egyptian mythology. Ra, the sun god, shed tears while gazing upon the earth he ruled. As the tears fell, they transformed into humans, symbolizing their divine origin and connection to Ra. The myth highlights Ra’s role as both a creator and protector of life. The tears also represent fertility and renewal, mirroring the life-giving floods of the Nile that sustained the land and its people.'
			},
			beingTwo: {
				name: 'THE BIRTH OF ANUBIS',
				image: {
					mobile: '/assets/images/egyptian/birth-mobile.jpg',
					tablet: '/assets/images/egyptian/birth-tablet.jpg',
					desktop: '/assets/images/egyptian/birth-desktop.jpg'
				},
				caption:
					'The Birth of Anubis is a tale of mystery and divine protection in Egyptian mythology. Anubis, the god of mummification and the afterlife, was born from Nephthys and Osiris. To protect him from her husband Set, Nephthys hid the child in the desert. Isis, Osiris’s wife, found Anubis and raised him, ensuring his safety. This story reflects themes of loyalty and guardianship. Anubis grew to become a key figure in guiding souls, symbolizing protection and the sacred passage to the afterlife.'
			},
			beingThree: {
				name: 'SET STEALS POWER',
				image: {
					mobile: '/assets/images/egyptian/steal-mobile.jpg',
					tablet: '/assets/images/egyptian/steal-tablet.jpg',
					desktop: '/assets/images/egyptian/steal-desktop.jpg'
				},
				caption:
					'Set Steals Power is a tale of betrayal and ambition in Egyptian mythology. Set, the god of chaos and storms, sought to usurp the throne of his brother Osiris, the ruler of the afterlife. Driven by jealousy, Set murdered Osiris, dismembering his body and scattering it across Egypt. This act disrupted the cosmic order (Ma’at), plunging the world into chaos. However, through the efforts of Isis and Horus, Osiris’s wife and son, balance was restored, symbolizing the triumph of order over chaos.'
			}
		}
	}
];

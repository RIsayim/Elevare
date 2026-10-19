import { withBase } from '../utils/site-path';

export interface ServiceBenefit {
	title: string;
	text: string;
}

export interface CoreService {
	slug: string;
	name: string;
	image: string;
	imageAlt: string;
	intro: string;
	statement: string;
	benefits: ServiceBenefit[];
}

export const services: CoreService[] = [
	{
		slug: 'security-cameras',
		name: 'Security & Cameras',
		image: withBase('/images/about-gallery-control.webp'),
		imageAlt: 'A discreetly integrated home control keypad in a warm modern interior',
		intro: 'Feel more at ease at home with a security system designed around your property, your routines, and the way you want to stay connected.',
		statement: 'A considered approach to peace of mind.',
		benefits: [
			{ title: 'Coverage with intention', text: 'We plan camera views and entry points around the layout of your home, helping you see what matters while keeping equipment visually discreet.' },
			{ title: 'Useful awareness', text: 'Clear alerts and convenient access let you check in on the property when you are home or away, from a system designed to feel straightforward.' },
			{ title: 'One coordinated system', text: 'Security can work alongside lighting, access, and home control, so the response feels considered and easy to manage.' },
		],
	},
	{
		slug: 'home-network-wifi',
		name: 'Home Network & WiFi',
		image: withBase('/images/solace-slider-network-wifi.jpg'),
		imageAlt: 'A contemporary residence with a connected home network',
		intro: 'A dependable home network is the quiet foundation behind work, entertainment, communication, and every connected system in the house.',
		statement: 'Reliable connection, built into the home.',
		benefits: [
			{ title: 'Consistent coverage', text: 'Network access points are planned for the shape and materials of your home, giving everyday devices a strong connection where you use them.' },
			{ title: 'Ready for connected living', text: 'A well-designed network supports streaming, video calls, smart devices, and home systems without asking you to manage separate solutions.' },
			{ title: 'Designed to grow', text: 'Thoughtful infrastructure makes it easier to add devices or adapt your setup as your household and technology change.' },
		],
	},
	{
		slug: 'whole-home-audio',
		name: 'Whole-Home Audio',
		image: withBase('/images/about-gallery-audio.webp'),
		imageAlt: 'A serene listening room with integrated architectural audio',
		intro: 'Bring music into the rooms where life happens, with sound that feels natural in the space and simple to enjoy throughout the home.',
		statement: 'Sound that moves naturally with your day.',
		benefits: [
			{ title: 'Listen room by room', text: 'Choose a different soundtrack in each space or let the music follow you between rooms, with intuitive control for every zone.' },
			{ title: 'Made for the architecture', text: 'Careful speaker placement and discreet options help the sound feel present while keeping the visual focus on the room.' },
			{ title: 'Easy everyday control', text: 'Simple interfaces make it easy to adjust volume, select a source, or bring the whole home together for a gathering.' },
		],
	},
	{
		slug: 'intelligent-lighting',
		name: 'Intelligent Lighting',
		image: withBase('/images/garden-lighting.webp'),
		imageAlt: 'Warm architectural lighting bringing a garden terrace to life',
		intro: 'Thoughtful lighting brings out the character of a room, supports daily routines, and lets the mood of your home shift with the moment.',
		statement: 'Light shaped around the way you live.',
		benefits: [
			{ title: 'Layers that add depth', text: 'Ambient, task, and accent lighting work together to reveal materials, support activities, and create a comfortable balance.' },
			{ title: 'Scenes for real moments', text: 'Set a welcoming arrival, a calm evening, or focused light for everyday tasks with a single, considered control.' },
			{ title: 'Comfort through the day', text: 'Adjustable light levels and coordinated controls help your rooms feel right as daylight, plans, and routines change.' },
		],
	},
	{
		slug: 'automated-shades',
		name: 'Automated Shades',
		image: withBase('/images/about-gallery-shades.webp'),
		imageAlt: 'Soft daylight filtered through motorized shades in a calm bedroom',
		intro: 'Motorized shades give you an effortless way to welcome daylight, soften glare, and create privacy while preserving the design of your windows.',
		statement: 'Daylight and privacy, in balance.',
		benefits: [
			{ title: 'A more comfortable room', text: 'Adjust shades to temper direct sun and glare, helping living spaces stay pleasant as the light changes outside.' },
			{ title: 'Privacy when you need it', text: 'Raise or lower shades with convenient controls, or coordinate them with the rhythms of your home.' },
			{ title: 'A clean architectural finish', text: 'Fabric, hardware, and control are selected to complement the windows and interior, keeping the technology unobtrusive.' },
		],
	},
	{
		slug: 'home-theater',
		name: 'Home Theater',
		image: withBase('/images/private-cinema.webp'),
		imageAlt: 'A private home cinema with immersive seating and integrated lighting',
		intro: 'Create a place to settle in and enjoy films, sports, and music with immersive picture and sound, carefully integrated into your home.',
		statement: 'A cinema experience made personal.',
		benefits: [
			{ title: 'Immersive sound and picture', text: 'Display, speakers, and acoustics are considered together to create a balanced experience suited to the room and your viewing habits.' },
			{ title: 'Comfort from the first scene', text: 'Lighting, shades, and AV can come together in an easy-to-start viewing scene that lets you focus on what is on screen.' },
			{ title: 'Designed to belong', text: 'Equipment, seating, and finishes are planned as part of the space, bringing a dedicated cinema or media room into harmony with your home.' },
		],
	},
];

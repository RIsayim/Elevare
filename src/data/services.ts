import { withBase } from '../utils/site-path';

export interface ServiceBenefit {
	title: string;
	text: string;
}

export interface ServiceDetailImage {
	src: string;
	alt: string;
}

export interface CoreService {
	slug: string;
	name: string;
	image: string;
	heroImage: string;
	heroImageAlt: string;
	heroTitleLines: [string, string];
	imageAlt: string;
	featureImage: string;
	featureImageAlt: string;
	serviceVideo: string;
	imagePair?: ServiceDetailImage[];
	featureTitle: string;
	featureText: string;
	intro: string;
	statement: string;
	benefits: ServiceBenefit[];
}

export const services: CoreService[] = [
	{
		slug: 'security-cameras',
		name: 'Security & Cameras',
		image: withBase('/images/about-gallery-control.webp'),
		heroImage: withBase('/images/service-heroes/security-cameras.webp'),
		heroImageAlt: 'A warm modern residence entry at blue hour with discreet integrated security cameras',
		heroTitleLines: ['Security', '& Cameras'],
		imageAlt: 'A discreetly integrated home control keypad in a warm modern interior',
		featureImage: withBase('/images/service-stories/security-cameras.webp'),
		featureImageAlt: 'A sunlit stone entry with a discreet security camera integrated near the doorway',
		serviceVideo: withBase('/videos/solace-project-01.mp4'),
		imagePair: [
			{ src: withBase('/images/service-details/security-entry-pair.webp'), alt: 'A warm stone and oak residence entry with a discreetly integrated security camera' },
			{ src: withBase('/images/service-details/security-camera-detail.webp'), alt: 'A discreet residential security camera mounted beneath an oak entry soffit' },
		],
		featureTitle: 'A quieter sense of security.',
		featureText: 'From the front door to the garden, discreet cameras and thoughtful coverage help you stay aware of what is happening around home. Carefully placed devices and useful notifications support peace of mind while keeping the architecture—and your day—uninterrupted.',
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
		heroImage: withBase('/images/service-heroes/home-network-wifi.webp'),
		heroImageAlt: 'A connected contemporary living space opening onto a Southern California hillside',
		heroTitleLines: ['Home Network', '& WiFi'],
		imageAlt: 'A contemporary residence with a connected home network',
		featureImage: withBase('/images/service-stories/home-network-wifi.webp'),
		featureImageAlt: 'A warm contemporary home with open rooms and garden views supported by a reliable network',
		serviceVideo: withBase('/videos/solace-project-02.mp4'),
		featureTitle: 'The connection behind every room.',
		featureText: 'Work, entertainment and everyday devices all rely on a connection that feels effortless. We plan the network around the home’s layout and materials, placing infrastructure with care so coverage reaches the spaces where you live, work and unwind.',
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
		heroImage: withBase('/images/service-heroes/whole-home-audio.webp'),
		heroImageAlt: 'A warm modern living room and terrace designed for whole home listening',
		heroTitleLines: ['Whole-Home', 'Audio'],
		imageAlt: 'A serene listening room with integrated architectural audio',
		featureImage: withBase('/images/service-stories/whole-home-audio.webp'),
		featureImageAlt: 'A calm open-plan living room designed for music throughout the home',
		serviceVideo: withBase('/videos/solace-project-03.mp4'),
		featureTitle: 'Sound that belongs in the room.',
		featureText: 'A favorite album can set the pace of a morning or bring everyone together at the end of the day. Carefully considered speakers and listening zones let music feel natural in each space, while simple controls make it easy to listen your way.',
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
		heroImage: withBase('/images/service-heroes/intelligent-lighting.webp'),
		heroImageAlt: 'Layered architectural lighting across a warm modern dining room at dusk',
		heroTitleLines: ['Intelligent', 'Lighting'],
		imageAlt: 'Warm architectural lighting bringing a garden terrace to life',
		featureImage: withBase('/images/service-stories/intelligent-lighting.webp'),
		featureImageAlt: 'A softly illuminated dining and living space at dusk with layered architectural lighting',
		serviceVideo: withBase('/videos/solace-project-04.mp4'),
		featureTitle: 'Light that changes how home feels.',
		featureText: 'The right light brings warmth to a gathering, clarity to a task and calm to the close of day. Layered architectural lighting gives each room its own character, with intuitive scenes that shift the atmosphere as naturally as your plans do.',
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
		heroImage: withBase('/images/service-heroes/automated-shades.webp'),
		heroImageAlt: 'Soft daylight filtered through automated linen shades in a calm modern bedroom',
		heroTitleLines: ['Automated', 'Shades'],
		imageAlt: 'Soft daylight filtered through motorized shades in a calm bedroom',
		featureImage: withBase('/images/service-stories/automated-shades.webp'),
		featureImageAlt: 'Soft woven shades filtering late afternoon daylight in a warm modern living room',
		serviceVideo: withBase('/videos/solace-project-05.mp4'),
		featureTitle: 'A softer relationship with daylight.',
		featureText: 'Morning sun, changing views and the need for privacy all shape how a room feels. Precisely fitted shades let you temper brightness and create a sense of retreat, while fabrics and discreet hardware sit comfortably within the design.',
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
		heroImage: withBase('/images/service-heroes/home-theater.webp'),
		heroImageAlt: 'A private home theater with integrated acoustic panels and warm step lighting',
		heroTitleLines: ['Home', 'Theater'],
		imageAlt: 'A private home cinema with immersive seating and integrated lighting',
		featureImage: withBase('/images/service-stories/home-theater.webp'),
		featureImageAlt: 'An intimate private cinema with deep upholstered seating and softly integrated lighting',
		serviceVideo: withBase('/videos/solace-hero.mp4'),
		featureTitle: 'A room made for complete escape.',
		featureText: 'A dedicated cinema invites you to leave the everyday behind for a while. Immersive sound, a generous picture and considered lighting work together with the room’s materials and seating, creating a comfortable setting for films, sport and shared evenings.',
		intro: 'Create a place to settle in and enjoy films, sports, and music with immersive picture and sound, carefully integrated into your home.',
		statement: 'A cinema experience made personal.',
		benefits: [
			{ title: 'Immersive sound and picture', text: 'Display, speakers, and acoustics are considered together to create a balanced experience suited to the room and your viewing habits.' },
			{ title: 'Comfort from the first scene', text: 'Lighting, shades, and AV can come together in an easy-to-start viewing scene that lets you focus on what is on screen.' },
			{ title: 'Designed to belong', text: 'Equipment, seating, and finishes are planned as part of the space, bringing a dedicated cinema or media room into harmony with your home.' },
		],
	},
];

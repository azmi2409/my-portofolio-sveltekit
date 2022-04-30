import Experience from '../components/About/Experience.svelte';
import Education from '../components/About/Education.svelte';
import Skills from '../components/About/Skills.svelte';
export const tabs = [
	{
		id: 1,
		name: 'Experience',
		content: Experience
	},
	{
		id: 2,
		name: 'Education',
		content: Education
	},
	{
		id: 3,
		name: 'Skills',
		content: Skills
	}
];

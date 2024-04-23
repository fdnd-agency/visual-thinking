export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [~2],
		"/artikelen": [~3],
		"/artikelen/[slug]": [~4],
		"/kennisclips": [~5],
		"/minicursussen": [~6],
		"/minicursussen/[slug]": [~7],
		"/over": [~8],
		"/tekenmethodes": [~9],
		"/tekenmethodes/[slug]": [~10],
		"/tekenmethodes/[slug]/stappenplan": [~11],
		"/tekenmethodes/[slug]/voorbeelden": [~12],
		"/tekenruimte": [13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';
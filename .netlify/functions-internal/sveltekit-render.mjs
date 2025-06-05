import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/.DS_Store","fonts/Quantico-subset.ttf","fonts/Yrsa-subset.ttf","images/arrows.svg","images/author.svg","images/category.svg","images/duration.svg","images/favicon.svg","images/instagram.svg","images/linkedin.svg","images/man.png","images/man.svg","images/materials.svg","images/pencil-cursor.svg","images/pencil.png","images/pencil.svg","images/visual-thinking-hbo-logo-footer.svg","images/visual-thinking-hbo-logo.svg","images/youtube.svg","styles/global.css"]),
	mimeTypes: {".ttf":"font/ttf",".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.XCu8I-EM.js",app:"_app/immutable/entry/app.BW1J5AKr.js",imports:["_app/immutable/entry/start.XCu8I-EM.js","_app/immutable/chunks/DMonA8zZ.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/entry/app.BW1J5AKr.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/0gV53gZ9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/artikelen",
				pattern: /^\/artikelen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/artikelen/[slug]",
				pattern: /^\/artikelen\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/kennisclips",
				pattern: /^\/kennisclips\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/minicursussen",
				pattern: /^\/minicursussen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/minicursussen/[slug]",
				pattern: /^\/minicursussen\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/over",
				pattern: /^\/over\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/tekenmethodes",
				pattern: /^\/tekenmethodes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/tekenmethodes/[slug]",
				pattern: /^\/tekenmethodes\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/tekenmethodes/[slug]/stappenplan",
				pattern: /^\/tekenmethodes\/([^/]+?)\/stappenplan\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/tekenmethodes/[slug]/voorbeelden",
				pattern: /^\/tekenmethodes\/([^/]+?)\/voorbeelden\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/tekenruimte",
				pattern: /^\/tekenruimte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

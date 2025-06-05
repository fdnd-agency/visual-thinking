import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.D899hlEv.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/CbvezQth.js","_app/immutable/chunks/oBaFlM7i.js","_app/immutable/chunks/0gV53gZ9.js","_app/immutable/chunks/DMonA8zZ.js","_app/immutable/chunks/CePwrPMt.js","_app/immutable/chunks/m__MPjwC.js"];
export const stylesheets = ["_app/immutable/assets/MiniCourses.3LJvtqbu.css"];
export const fonts = [];

import * as server from '../entries/pages/tekenmethodes/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tekenmethodes/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/tekenmethodes/+page.server.js";
export const imports = ["_app/immutable/nodes/9.BhCgREPI.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/CbvezQth.js","_app/immutable/chunks/oBaFlM7i.js","_app/immutable/chunks/0gV53gZ9.js","_app/immutable/chunks/DMonA8zZ.js","_app/immutable/chunks/CePwrPMt.js"];
export const stylesheets = ["_app/immutable/assets/MiniCourses.3LJvtqbu.css"];
export const fonts = [];

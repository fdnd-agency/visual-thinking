import * as server from '../entries/pages/artikelen/_slug_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artikelen/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/artikelen/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.DWJz55xC.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/0gV53gZ9.js","_app/immutable/chunks/oBaFlM7i.js","_app/immutable/chunks/CbvezQth.js","_app/immutable/chunks/DMonA8zZ.js"];
export const stylesheets = ["_app/immutable/assets/MiniCourses.3LJvtqbu.css","_app/immutable/assets/4.MBkVYXRy.css"];
export const fonts = [];

import * as server from '../entries/pages/kennisclips/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kennisclips/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/kennisclips/+page.server.js";
export const imports = ["_app/immutable/nodes/5.X3ppgnDD.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/CbvezQth.js","_app/immutable/chunks/oBaFlM7i.js","_app/immutable/chunks/0gV53gZ9.js","_app/immutable/chunks/DMonA8zZ.js"];
export const stylesheets = ["_app/immutable/assets/MiniCourses.3LJvtqbu.css"];
export const fonts = [];

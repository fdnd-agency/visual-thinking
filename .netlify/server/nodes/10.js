import * as server from '../entries/pages/tekenmethodes/_slug_/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tekenmethodes/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/tekenmethodes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/10.BwfWUDad.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/oBaFlM7i.js","_app/immutable/chunks/CbvezQth.js","_app/immutable/chunks/0gV53gZ9.js","_app/immutable/chunks/DMonA8zZ.js","_app/immutable/chunks/BC41oAXq.js"];
export const stylesheets = ["_app/immutable/assets/MiniCourses.3LJvtqbu.css","_app/immutable/assets/10.CGr936pG.css"];
export const fonts = [];

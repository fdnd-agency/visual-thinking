import * as server from '../entries/pages/tekenmethodes/_slug_/voorbeelden/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tekenmethodes/_slug_/voorbeelden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/tekenmethodes/[slug]/voorbeelden/+page.server.js";
export const imports = ["_app/immutable/nodes/12.D6BpHgp2.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/0gV53gZ9.js","_app/immutable/chunks/oBaFlM7i.js","_app/immutable/chunks/CbvezQth.js","_app/immutable/chunks/DMonA8zZ.js","_app/immutable/chunks/BC41oAXq.js"];
export const stylesheets = ["_app/immutable/assets/MiniCourses.3LJvtqbu.css","_app/immutable/assets/12.WINACe9K.css"];
export const fonts = [];

import * as server from '../entries/pages/over/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/over/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/over/+page.server.js";
export const imports = ["_app/immutable/nodes/8.QsYlZkL6.js","_app/immutable/chunks/Bwoi2yR4.js","_app/immutable/chunks/q4Dn0bqy.js","_app/immutable/chunks/CbvezQth.js","_app/immutable/chunks/oBaFlM7i.js","_app/immutable/chunks/0gV53gZ9.js","_app/immutable/chunks/DMonA8zZ.js","_app/immutable/chunks/CePwrPMt.js"];
export const stylesheets = ["_app/immutable/assets/MiniCourses.3LJvtqbu.css"];
export const fonts = [];

import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/header.js";
const css = {
  code: ".container.svelte-1kclnku{display:grid;grid-template-rows:auto 1fr;height:100vh}main.svelte-1kclnku{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:100%}.background-page1.svelte-1kclnku,.background-page2.svelte-1kclnku,.background-page3.svelte-1kclnku,.background-page4.svelte-1kclnku,.background-page5.svelte-1kclnku,.background-page6.svelte-1kclnku,.background-page7.svelte-1kclnku{height:90%;width:95%;display:flex;flex-direction:column;justify-content:center;align-items:center}.background-page5.svelte-1kclnku{flex-direction:row;justify-content:space-evenly}.background-page1.svelte-1kclnku,.background-page7.svelte-1kclnku{background-color:var(--vtDarkBlue)}.background-page2.svelte-1kclnku,.background-page3.svelte-1kclnku,.background-page4.svelte-1kclnku,.background-page5.svelte-1kclnku,.background-page6.svelte-1kclnku{background-color:var(--vtWhite);border:10px solid #090940;box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25)}.h1-page1.svelte-1kclnku,.h2-page1.svelte-1kclnku,.h1-page2.svelte-1kclnku,.h1-page4.svelte-1kclnku,.h1-page5.svelte-1kclnku,.h1-page6.svelte-1kclnku,.h1-page7.svelte-1kclnku,.h2-page7.svelte-1kclnku{color:var(--vtWhite);font-family:var(--vtPrimaryFont);display:inline;text-align:center}.h1-page5.svelte-1kclnku{text-align:left}.h1-page6.svelte-1kclnku{margin-bottom:0rem}.h1-page2.svelte-1kclnku,.h1-page4.svelte-1kclnku,.h1-page5.svelte-1kclnku,.h1-page6.svelte-1kclnku{color:var(--vtDarkBlue)}h1.svelte-1kclnku{font-size:1.6rem;margin-bottom:2rem}h2.svelte-1kclnku{font-size:1rem;margin:0}p.svelte-1kclnku{font-size:1rem}.p-page3.svelte-1kclnku,.p-page5.svelte-1kclnku,.p-page6.svelte-1kclnku,.p-page7.svelte-1kclnku{color:var(--vtDarkBlue);font-family:var(--vtPrimaryFont)}.p-page7.svelte-1kclnku{color:var(--vtWhite);font-size:1rem;text-align:center;margin-top:2rem}.img-page1.svelte-1kclnku{transform:rotate(90deg);width:7%}.img-page2.svelte-1kclnku{width:40%}.img-page5.svelte-1kclnku{width:40%}.img-page7.svelte-1kclnku{width:7%;margin-bottom:2rem}.button-page1.svelte-1kclnku,.buttonL-page2.svelte-1kclnku,.buttonR-page2.svelte-1kclnku,.buttonL-page3.svelte-1kclnku,.buttonR-page3.svelte-1kclnku,.buttonL-page4.svelte-1kclnku,.buttonR-page4.svelte-1kclnku,.buttonL-page5.svelte-1kclnku,.buttonR-page5.svelte-1kclnku,.buttonL-page6.svelte-1kclnku,.buttonR-page6.svelte-1kclnku,.buttonL-page7.svelte-1kclnku,.buttonR-page7.svelte-1kclnku{width:8rem;height:2.5rem;font-size:1.2rem;font-family:var(--vtPrimaryFont);margin-bottom:2.7rem}.button-page1.svelte-1kclnku,.buttonR-page2.svelte-1kclnku,.buttonR-page3.svelte-1kclnku,.buttonR-page4.svelte-1kclnku,.buttonR-page5.svelte-1kclnku,.buttonR-page6.svelte-1kclnku,.buttonR-page7.svelte-1kclnku{right:0;bottom:0;position:absolute;margin-right:3rem}.buttonL-page2.svelte-1kclnku,.buttonL-page3.svelte-1kclnku,.buttonL-page4.svelte-1kclnku,.buttonL-page5.svelte-1kclnku,.buttonL-page6.svelte-1kclnku,.buttonL-page7.svelte-1kclnku{left:0;bottom:0;position:absolute;margin-left:3rem}.button-page1.svelte-1kclnku,.buttonL-page7.svelte-1kclnku,.buttonR-page7.svelte-1kclnku{border:1px solid var(--vtDarkBlue);background:var(--vtWhite);color:var(--vtDarkBlue)}.buttonL-page2.svelte-1kclnku,.buttonR-page2.svelte-1kclnku,.buttonL-page3.svelte-1kclnku,.buttonR-page3.svelte-1kclnku,.buttonL-page4.svelte-1kclnku,.buttonR-page4.svelte-1kclnku,.buttonL-page5.svelte-1kclnku,.buttonR-page5.svelte-1kclnku,.buttonL-page6.svelte-1kclnku,.buttonR-page6.svelte-1kclnku{border:1px solid var(--vtWhite);background:var(--vtDarkBlue);color:var(--vtWhite)}.link-page6.svelte-1kclnku{background-color:var(--vtDarkBlue);color:var(--vtWhite);font-family:var(--vtPrimaryFont);padding:0.5rem;margin-bottom:1rem}a.svelte-1kclnku{text-decoration:none;color:var(--vtWhite)}@media(min-width: 31em) and (max-width: 55em){main.svelte-1kclnku{height:78vh}h1.svelte-1kclnku{font-size:1.2rem;margin-bottom:2rem}h2.svelte-1kclnku{font-size:0.7rem;margin:0}p.svelte-1kclnku{font-size:0.7rem}.link-page6.svelte-1kclnku{padding:0.5rem;font-size:0.7rem}.button-page1.svelte-1kclnku,.buttonL-page2.svelte-1kclnku,.buttonR-page2.svelte-1kclnku,.buttonL-page3.svelte-1kclnku,.buttonR-page3.svelte-1kclnku,.buttonL-page4.svelte-1kclnku,.buttonR-page4.svelte-1kclnku,.buttonL-page5.svelte-1kclnku,.buttonR-page5.svelte-1kclnku,.buttonL-page6.svelte-1kclnku,.buttonR-page6.svelte-1kclnku,.buttonL-page7.svelte-1kclnku,.buttonR-page7.svelte-1kclnku{width:6rem;font-size:1rem}}@media(max-width: 31em){main.svelte-1kclnku{height:78vh}h1.svelte-1kclnku{font-size:1rem;margin-bottom:1rem}h2.svelte-1kclnku{font-size:0.7rem;margin:0}p.svelte-1kclnku{font-size:0.7rem}h2.svelte-1kclnku{max-width:95%}.link-page6.svelte-1kclnku{padding:0.5rem;font-size:0.7rem}.button-page1.svelte-1kclnku,.buttonL-page2.svelte-1kclnku,.buttonR-page2.svelte-1kclnku,.buttonL-page3.svelte-1kclnku,.buttonR-page3.svelte-1kclnku,.buttonL-page4.svelte-1kclnku,.buttonR-page4.svelte-1kclnku,.buttonL-page5.svelte-1kclnku,.buttonR-page5.svelte-1kclnku,.buttonL-page6.svelte-1kclnku,.buttonR-page6.svelte-1kclnku,.buttonL-page7.svelte-1kclnku,.buttonR-page7.svelte-1kclnku{width:6rem;font-size:1rem;margin-bottom:2rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-1kclnku">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1kclnku">${`<section class="background-page1 svelte-1kclnku"><h1 class="h1-page1 svelte-1kclnku" data-svelte-h="svelte-1jvvj0w">&quot;Graphics are the doorway to big picture thinking and to
                    system thinking. <br>
                    For visual thinking it is important to graphics as a process,
                    rather then an artifact.&quot; <br>
                    - David Sibbet, Visual Meetings</h1> <h2 class="h2-page1 svelte-1kclnku" data-svelte-h="svelte-193f7d0">In deze minicursus krijg je een introductie opdracht over
                    het tekenen van structuur en kleur. <br> Pak een vel papier
                    en een aantal stiften van verschillende diktes om mee te doen.</h2> <img class="img-page1 svelte-1kclnku" src="/pencil.svg" alt=""> <button class="button-page1 svelte-1kclnku" data-svelte-h="svelte-lz48t4">Volgende</button></section>`}</main> </div>`;
});
export {
  Page as default
};
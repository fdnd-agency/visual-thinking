import "clsx";
/* empty css                                                     */
import "../../chunks/client.js";
import { I as Introduction } from "../../chunks/introduction.js";
import { H as Hexagon } from "../../chunks/Hexagon.js";
function Homepage($$payload) {
  $$payload.out += `<section><h2 class="screenreader-only">Visual Thinking Onderwerpen</h2> <ul class="svelte-gmbjht"><li class="svelte-gmbjht">`;
  Hexagon($$payload, {
    class: "hide-on-mobile",
    img: {
      src: "/images/man.png",
      alt: "Illustratie van een denkend persoon"
    }
  });
  $$payload.out += `<!----></li> <li class="svelte-gmbjht">`;
  Hexagon($$payload, {
    class: "hide-on-mobile",
    img: {
      src: "/images/pencil.png",
      alt: "Illustratie van een potlood"
    }
  });
  $$payload.out += `<!----></li> <li class="svelte-gmbjht">`;
  Hexagon($$payload, {
    href: "/over",
    backgroundColor: "--color-tertiary-80",
    color: "--color-primary",
    text: "Over Visual Thinking"
  });
  $$payload.out += `<!----></li> <li class="svelte-gmbjht">`;
  Hexagon($$payload, {
    href: "/tekenmethodes",
    backgroundColor: "--color-quinary",
    color: "--color-primary",
    text: "Ontdek de Visual Thinking methodes"
  });
  $$payload.out += `<!----></li> <li class="svelte-gmbjht">`;
  Hexagon($$payload, { href: "/artikelen", text: "Artikelen" });
  $$payload.out += `<!----></li> <li class="svelte-gmbjht">`;
  Hexagon($$payload, {
    href: "/minicursussen",
    backgroundColor: "--color-senary",
    color: "--color-primary",
    text: "Minicursussen"
  });
  $$payload.out += `<!----></li> <li class="svelte-gmbjht">`;
  Hexagon($$payload, {
    href: "/kennisclips",
    backgroundColor: "--color-quaternary",
    color: "--color-primary",
    text: "Kennisclips"
  });
  $$payload.out += `<!----></li> <li class="svelte-gmbjht">`;
  Hexagon($$payload, { href: "/tekenruimte", text: "Tekenruimte" });
  $$payload.out += `<!----></li></ul></section>`;
}
function _page($$payload, $$props) {
  let { data } = $$props;
  const { page } = data;
  $$payload.out += `<div class="hexagons">`;
  Introduction($$payload, { page, class: "hexagons" });
  $$payload.out += `<!----> `;
  Homepage($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};

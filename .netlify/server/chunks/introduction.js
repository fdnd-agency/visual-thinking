import { B as attr_class, E as escape_html, J as clsx } from "./utils.js";
/* empty css                                          */
import { h as html } from "./html.js";
function Introduction($$payload, $$props) {
  let { page, class: className } = $$props;
  const { title, content } = page;
  $$payload.out += `<section${attr_class(clsx(className), "svelte-2ygil")}><h1 class="svelte-2ygil">${escape_html(title)}</h1> ${html(content.html)}</section>`;
}
export {
  Introduction as I
};

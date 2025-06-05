import "clsx";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
/* empty css                                                        */
import "../../../chunks/client.js";
import { I as Introduction } from "../../../chunks/introduction.js";
import { F as ensure_array_like, G as attr, E as escape_html, I as stringify } from "../../../chunks/utils.js";
function Articles($$payload, $$props) {
  let { articles } = $$props;
  const each_array = ensure_array_like(articles);
  $$payload.out += `<section class="grid svelte-nzrx10"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    $$payload.out += `<a${attr("href", `/artikelen/${stringify(article.slug)}`)} class="svelte-nzrx10"><article class="svelte-nzrx10"><img${attr("src", article.visual.url)}${attr("alt", article.title)} width="200" height="200" class="svelte-nzrx10"> <h2 class="svelte-nzrx10">${escape_html(article.title)}</h2></article></a>`;
  }
  $$payload.out += `<!--]--></section>`;
}
function _page($$payload, $$props) {
  let { data } = $$props;
  const { page, articles } = data;
  Breadcrumb($$payload, {
    titel: "Artikelen",
    backgroundColor: "var(--color-tertiary)"
  });
  $$payload.out += `<!----> `;
  Introduction($$payload, { page });
  $$payload.out += `<!----> `;
  Articles($$payload, { articles });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};

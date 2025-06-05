import "clsx";
import { F as ensure_array_like, E as escape_html, G as attr, I as stringify, y as pop, w as push, B as attr_class } from "../../../chunks/utils.js";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
/* empty css                                                        */
import "../../../chunks/client.js";
import { I as Introduction } from "../../../chunks/introduction.js";
function Overview($$payload, $$props) {
  push();
  let { methods } = $$props;
  const each_array = ensure_array_like(methods);
  $$payload.out += `<section class="svelte-1iia5se"><h2>Alle methodes (${escape_html(methods.length)})</h2> <ul class="svelte-1iia5se"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let method = each_array[$$index];
    $$payload.out += `<li class="svelte-1iia5se"><a${attr("href", `/tekenmethodes/${stringify(method.slug)}`)} class="svelte-1iia5se"><picture><source${attr("srcset", method.template.url.replace(":webp", ":avif"))} type="image/avif"> <source${attr("srcset", method.template.url)} type="image/webp"> <img${attr("src", method.template.url.replace(":webp", ":png"))}${attr("alt", "Voorbeeld van " + method.title)} width="300" height="225" loading="lazy" class="svelte-1iia5se"></picture> <h3 class="svelte-1iia5se">${escape_html(method.title)}</h3></a></li>`;
  }
  $$payload.out += `<!--]--></ul></section>`;
  pop();
}
function Filter($$payload, $$props) {
  push();
  let { categories } = $$props;
  let width = "24";
  let height = "24";
  let color = "#000";
  let javascript = { enabled: false };
  const each_array = ensure_array_like(categories);
  $$payload.out += `<form action="/tekenmethodes" method="get"${attr_class("svelte-mslb75", void 0, { "js-on": javascript.enabled })}><fieldset class="svelte-mslb75"><legend>Filter op categorie</legend> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<div class="svelte-mslb75"><label${attr("for", category.slug)} class="svelte-mslb75">${escape_html(category.title)} <svg xmlns="http://www.w3.org/2000/svg"${attr("width", width)}${attr("height", height)} viewBox="0 0 384 512" class="close-button svelte-mslb75"><path${attr("fill", color)} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg></label> <input type="checkbox"${attr("id", category.slug)} name="filter"${attr("value", category.slug)} class="svelte-mslb75"></div>`;
  }
  $$payload.out += `<!--]--></fieldset> <button type="submit" class="filter-button svelte-mslb75">toepassen</button></form>`;
  pop();
}
function Methods($$payload, $$props) {
  let { methods, categories } = $$props;
  Filter($$payload, { categories });
  $$payload.out += `<!----> `;
  Overview($$payload, { methods });
  $$payload.out += `<!---->`;
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { page, categories } = data;
  Breadcrumb($$payload, {
    titel: "Tekenmethodes",
    backgroundColor: "var(--color-quinary)"
  });
  $$payload.out += `<!----> `;
  Introduction($$payload, { page });
  $$payload.out += `<!----> `;
  Methods($$payload, { methods: data.methods, categories });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};

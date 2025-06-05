import { K as attr_style, G as attr, E as escape_html, I as stringify } from "./utils.js";
/* empty css                                          */
function Breadcrumb($$payload, $$props) {
  let { titel, url, backgroundColor } = $$props;
  $$payload.out += `<div class="breadcrumb svelte-epzwhu"${attr_style(`--background-color:${stringify(backgroundColor)}`)}>`;
  if (url) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", url)} class="svelte-epzwhu">${escape_html(titel)}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="svelte-epzwhu">${escape_html(titel)}</span>`;
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  Breadcrumb as B
};

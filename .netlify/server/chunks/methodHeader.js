import { E as escape_html, G as attr, y as pop, w as push, I as stringify } from "./utils.js";
/* empty css                                          */
function MethodHeader($$payload, $$props) {
  push();
  let { title, slug, pdf } = $$props;
  $$payload.out += `<header class="svelte-13dwyul"><h1 class="svelte-13dwyul">${escape_html(title)}</h1> <nav class="svelte-13dwyul"><ul class="svelte-13dwyul"><li class="svelte-13dwyul"><a${attr("href", `/tekenmethodes/${stringify(slug)}`)} class="svelte-13dwyul">Beschrijving</a></li> <li class="svelte-13dwyul"><a${attr("href", `/tekenmethodes/${stringify(slug)}/stappenplan`)} class="svelte-13dwyul">Stappenplan</a></li> <li class="svelte-13dwyul"><a${attr("href", `/tekenmethodes/${stringify(slug)}/voorbeelden`)} class="svelte-13dwyul">Voorbeelden</a></li></ul> `;
  if (pdf) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", pdf.url)}${attr("download", `${stringify(slug)}.pdf`)} target="blank" class="vt-standard-button">Download PDF</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav></header>`;
  pop();
}
export {
  MethodHeader as M
};

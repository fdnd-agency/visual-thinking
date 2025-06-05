import { E as escape_html, G as attr, y as pop, w as push } from "../../../../chunks/utils.js";
import { h as html } from "../../../../chunks/html.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
/* empty css                                                           */
import "../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { title, visual, intro, content } = data.article;
  Breadcrumb($$payload, {
    titel: "Overzicht",
    url: "/artikelen",
    backgroundColor: "var(--color-tertiary)"
  });
  $$payload.out += `<!----> <header class="svelte-19wadbe"><div class="svelte-19wadbe"><p class="svelte-19wadbe">Gepost op <time class="svelte-19wadbe">26 maart 2019<time class="svelte-19wadbe"></time></time></p> <p class="svelte-19wadbe">Door <strong class="svelte-19wadbe">Charley Muhren</strong></p></div> <h1 class="svelte-19wadbe">${escape_html(title)}</h1> <ul class="svelte-19wadbe"><li class="svelte-19wadbe"><a href="/" class="svelte-19wadbe">Creatief denken</a></li> <li class="svelte-19wadbe"><a href="/" class="svelte-19wadbe">Onderwijs</a></li></ul></header> <div class="content svelte-19wadbe">`;
  if (visual.url) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", visual.url)}${attr("alt", title)}>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <p class="intro">${escape_html(intro)}</p> <div class="rich-text">${html(content.html)}</div></div>`;
  pop();
}
export {
  _page as default
};

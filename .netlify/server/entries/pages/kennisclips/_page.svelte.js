import "clsx";
import { G as attr, E as escape_html, y as pop, w as push } from "../../../chunks/utils.js";
/* empty css                                                        */
import "../../../chunks/client.js";
import { h as html } from "../../../chunks/html.js";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { I as Icons } from "../../../chunks/Icons.js";
function KnowledgeClips($$payload, $$props) {
  push();
  const iconSize = 50;
  let index = 0;
  let { clips } = $$props;
  Breadcrumb($$payload, {
    titel: "Kennisclips",
    backgroundColor: "var(--color-quaternary)"
  });
  $$payload.out += `<!----> <main><h1 class="screenreader-only">Alle kennisclips</h1> <section class="clips-container svelte-1t3lzj3"><button class="svelte-1t3lzj3">`;
  Icons($$payload, {
    name: "arrowLeft",
    width: iconSize,
    height: iconSize
  });
  $$payload.out += `<!----></button> <iframe class="youtubelink svelte-1t3lzj3" title="kennisclips"${attr("src", clips[index].youTubeLink)}></iframe> <button class="svelte-1t3lzj3">`;
  Icons($$payload, {
    name: "arrowRight",
    width: iconSize,
    height: iconSize
  });
  $$payload.out += `<!----></button></section> <section class="text-container"><h2 class="svelte-1t3lzj3">${escape_html(clips[index].title)}</h2> <p class="svelte-1t3lzj3">${html(clips[index].content.html)}</p></section></main>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const clips = data.categories;
  KnowledgeClips($$payload, { clips });
  pop();
}
export {
  _page as default
};

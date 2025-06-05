import { E as escape_html, F as ensure_array_like, G as attr, y as pop, w as push } from "../../../../chunks/utils.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
/* empty css                                                           */
import "../../../../chunks/client.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  Breadcrumb($$payload, {
    titel: "Minicursussen",
    backgroundColor: "var(--color-senary)"
  });
  $$payload.out += `<!----> <div class="svelte-1mf51pq"><header><h1 class="svelte-1mf51pq">${escape_html(data.miniCourse?.title)}</h1></header> `;
  if (data.miniCourse && data.miniCourse.slides) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data.miniCourse.slides);
    $$payload.out += `<!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let slide = each_array[index];
      $$payload.out += `<article class="svelte-1mf51pq"><h2 class="svelte-1mf51pq">${escape_html(slide.title)}</h2> <div class="slide-content svelte-1mf51pq">${html(slide.content.html)}</div> `;
      if (slide.image && slide.image.url.length > 0) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img${attr("src", slide.image.url)} alt="gifs" class="svelte-1mf51pq">`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></article>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};

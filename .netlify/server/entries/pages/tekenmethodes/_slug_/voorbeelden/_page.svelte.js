import { F as ensure_array_like, G as attr, y as pop, w as push } from "../../../../../chunks/utils.js";
import { B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
/* empty css                                                              */
import "../../../../../chunks/client.js";
import { M as MethodHeader } from "../../../../../chunks/methodHeader.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { title, slug, pdf } = data.methods[0];
  const each_array = ensure_array_like(data.methods);
  Breadcrumb($$payload, {
    titel: "Overzicht",
    url: "/tekenmethodes",
    backgroundColor: "var(--color-quinary)"
  });
  $$payload.out += `<!----> `;
  MethodHeader($$payload, { title, slug, pdf });
  $$payload.out += `<!----> <section class="images-buttons svelte-zk1kr"><div class="js-disable svelte-zk1kr"><div class="scroll-btn svelte-zk1kr">`;
  if (data.methods[0].examples.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="button-prev" class="carousel-btn prev-btn svelte-zk1kr"><button class="icon-button svelte-zk1kr"><svg id="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"></path></svg></button></div> <div id="button-next" class="carousel-btn next-btn svelte-zk1kr"><button class="icon-button svelte-zk1kr"><svg id="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"></path></svg></button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div id="js-carrousel"><div class="carrousel svelte-zk1kr" id="scrollbar"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let method = each_array[$$index_1];
    if (method.examples.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(method.examples);
      $$payload.out += `<!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let example = each_array_1[$$index];
        $$payload.out += `<img class="carrousel-img svelte-zk1kr"${attr("src", example.url)} alt="Example Slide" loading="lazy">`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<p class="carrousel-missing svelte-zk1kr">Geen voorbeelden</p>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
  pop();
}
export {
  _page as default
};

import { F as ensure_array_like, G as attr, y as pop, w as push } from "../../../../chunks/utils.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
/* empty css                                                           */
import "../../../../chunks/client.js";
import { M as MethodHeader } from "../../../../chunks/methodHeader.js";
import { h as html } from "../../../../chunks/html.js";
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
  $$payload.out += `<!----> <section class="section-wrapper svelte-fmvc8y"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let method = each_array[$$index];
    $$payload.out += `<img${attr("src", method?.template?.url)} alt="template_image" loading="lazy" class="svelte-fmvc8y"> <p class="svelte-fmvc8y">${html(method?.description.html)}</p>`;
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}
export {
  _page as default
};

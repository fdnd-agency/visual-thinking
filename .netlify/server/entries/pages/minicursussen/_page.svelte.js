import "clsx";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
/* empty css                                                        */
import "../../../chunks/client.js";
import { I as Introduction } from "../../../chunks/introduction.js";
import { F as ensure_array_like, I as stringify, y as pop, w as push } from "../../../chunks/utils.js";
import { H as Hexagon } from "../../../chunks/Hexagon.js";
function MiniCourses($$payload, $$props) {
  push();
  let { miniCourses } = $$props;
  $$payload.out += `<section class="svelte-qx9tr7"><h2 class="screenreader-only">Kies hier een minicursus</h2> <ul class="svelte-qx9tr7">`;
  if (miniCourses && miniCourses.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(miniCourses);
    $$payload.out += `<!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let course = each_array[index];
      $$payload.out += `<li class="svelte-qx9tr7">`;
      Hexagon($$payload, {
        href: `/minicursussen/${stringify(course.slug)}`,
        backgroundColor: "var(--background-color)",
        color: "--color-primary",
        text: course.title
      });
      $$payload.out += `<!----></li>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></ul></section>`;
  pop();
}
function _page($$payload, $$props) {
  let { data } = $$props;
  const { page, miniCourses } = data;
  Breadcrumb($$payload, {
    titel: "Minicursussen",
    backgroundColor: "var(--color-senary)"
  });
  $$payload.out += `<!----> <div class="hexagons minicourse">`;
  Introduction($$payload, { page, class: "hexagons minicourse" });
  $$payload.out += `<!----> `;
  MiniCourses($$payload, { miniCourses });
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};

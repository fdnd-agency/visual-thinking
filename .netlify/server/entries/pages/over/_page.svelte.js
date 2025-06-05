import "clsx";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
/* empty css                                                        */
import "../../../chunks/client.js";
import { I as Introduction } from "../../../chunks/introduction.js";
function _page($$payload, $$props) {
  let { data } = $$props;
  const { page } = data;
  Breadcrumb($$payload, {
    titel: "Over",
    backgroundColor: "var(--color-tertiary-80)"
  });
  $$payload.out += `<!----> `;
  Introduction($$payload, { page });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};

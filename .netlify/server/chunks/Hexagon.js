import { G as attr, K as attr_style, B as attr_class, E as escape_html, J as clsx, y as pop, w as push, I as stringify } from "./utils.js";
/* empty css                                          */
function Hexagon($$payload, $$props) {
  push();
  let {
    text = "Default text",
    backgroundColor = "--color-septenary-40",
    color = "--font-color",
    href = null,
    img = null,
    class: className = ""
  } = $$props;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)}${attr_style(`--background-color: var(${stringify(backgroundColor)}); --color: var(${stringify(color)})`)}${attr_class(`hover ${className}`, "svelte-pcg8y1")}>`;
    if (img) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", img.src)}${attr("alt", img.alt)} class="svelte-pcg8y1">`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="svelte-pcg8y1">${escape_html(text)}</span>`;
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${attr_style(`--background-color: var(${stringify(backgroundColor)}); --color: var(${stringify(color)})`)}${attr_class(clsx(className), "svelte-pcg8y1")}>`;
    if (img) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", img.src)}${attr("alt", img.alt)} class="svelte-pcg8y1">`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="svelte-pcg8y1">${escape_html(text)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Hexagon as H
};

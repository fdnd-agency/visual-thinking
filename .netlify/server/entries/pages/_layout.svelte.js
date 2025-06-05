import "clsx";
/* empty css                                                     */
import { I as Icons } from "../../chunks/Icons.js";
import "../../chunks/client.js";
import { z as getContext, A as store_get, B as attr_class, C as unsubscribe_stores, y as pop, w as push } from "../../chunks/utils.js";
function Footer($$payload) {
  const iconSize = 26;
  $$payload.out += `<footer class="svelte-1i4lfre"><nav class="svelte-1i4lfre"><a href="/" class="svelte-1i4lfre">`;
  Icons($$payload, { name: "VisualThinkingLogoFooter" });
  $$payload.out += `<!----></a> <div class="socials svelte-1i4lfre"><ul class="svelte-1i4lfre"><li class="svelte-1i4lfre"><a href="https://www.instagram.com/charley_muhren/" class="svelte-1i4lfre">`;
  Icons($$payload, {
    name: "instagram",
    width: iconSize,
    height: iconSize
  });
  $$payload.out += `<!----> <span class="svelte-1i4lfre">Instagram</span></a></li> <li class="svelte-1i4lfre"><a href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa" class="svelte-1i4lfre">`;
  Icons($$payload, {
    name: "youtube",
    width: iconSize,
    height: iconSize
  });
  $$payload.out += `<!----> <span class="svelte-1i4lfre">Youtube</span></a></li> <li class="svelte-1i4lfre"><a href="https://www.linkedin.com/in/charleymuhren/" class="svelte-1i4lfre">`;
  Icons($$payload, {
    name: "linkedin",
    width: iconSize,
    height: iconSize
  });
  $$payload.out += `<!----> <span class="svelte-1i4lfre">LinkedIn</span></a></li></ul> <p class="svelte-1i4lfre">© Charley Muhren, 2024</p></div></nav></footer>`;
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  const logoSize = 80;
  let activeRoute = store_get($$store_subs ??= {}, "$page", page).route.id;
  $$payload.out += `<header><a href="/" class="logo svelte-3lvxpy">`;
  Icons($$payload, {
    name: "VisualThinkingLogo",
    width: logoSize,
    height: logoSize
  });
  $$payload.out += `<!----></a> <nav class="svelte-3lvxpy"><ul class="svelte-3lvxpy"><li class="svelte-3lvxpy"><a href="/tekenmethodes"${attr_class("svelte-3lvxpy", void 0, { "active": activeRoute == "/tekenmethodes" })}>Tekenmethodes</a></li> <li class="svelte-3lvxpy"><a href="/over"${attr_class("svelte-3lvxpy", void 0, { "active": activeRoute == "/over" })}>Over</a></li> <li class="svelte-3lvxpy"><a href="/minicursussen"${attr_class("svelte-3lvxpy", void 0, { "active": activeRoute == "/minicursussen" })}>Minicursussen</a></li> <li class="svelte-3lvxpy"><a href="/kennisclips"${attr_class("svelte-3lvxpy", void 0, { "active": activeRoute == "/kennisclips" })}>Kennisclips</a></li> <li class="svelte-3lvxpy"><a href="/artikelen"${attr_class("svelte-3lvxpy", void 0, { "active": activeRoute == "/artikelen" })}>Artikelen</a></li> <li class="svelte-3lvxpy"><a href="/tekenruimte"${attr_class("svelte-3lvxpy", void 0, { "active": activeRoute == "/tekenruimte" })}>Tekenruimte</a></li></ul></nav></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  Header($$payload);
  $$payload.out += `<!----> <main>`;
  children?.($$payload);
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};

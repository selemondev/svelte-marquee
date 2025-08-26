import { x as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out.push(`<!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!---->`);
}
export {
  _layout as default
};

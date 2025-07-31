import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, computed, defineComponent, watchEffect, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { d as useRoute } from './server.mjs';
import { defineStore } from 'pinia';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import '@vue/shared';

const useUserStore = defineStore("user", () => {
  const savedName = ref("");
  const previousNames = ref(/* @__PURE__ */ new Set());
  const usedNames = computed(() => Array.from(previousNames.value));
  const otherNames = computed(
    () => usedNames.value.filter((name) => name !== savedName.value)
  );
  function setNewName(name) {
    if (savedName.value) previousNames.value.add(savedName.value);
    savedName.value = name;
  }
  return {
    setNewName,
    otherNames,
    savedName
  };
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const user = useUserStore();
    const name = route.params.id;
    watchEffect(() => {
      user.setNewName(route.params.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_TheCounter = resolveComponent("TheCounter");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ "m-3": "" }, _attrs))}><h3>Hi, ${ssrInterpolate(unref(name))}!</h3>`);
      if (unref(user).otherNames.length) {
        _push(`<!--[--><span>Also as known as:</span><ul><!--[-->`);
        ssrRenderList(unref(user).otherNames, (otherName) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/hi/${otherName}`,
            replace: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(otherName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(otherName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_TheCounter, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back`);
          } else {
            return [
              createTextVNode("Back")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hi/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.vue.mjs.map

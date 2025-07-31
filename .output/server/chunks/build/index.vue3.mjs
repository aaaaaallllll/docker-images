import { b as buildProps, i as iconPropType, _ as _export_sfc, u as useLocale, d as definePropType, g as ElIcon, w as withInstall, k as withNoopInstall, E as ElButton, j as arrow_right_default, s as search_default } from './index.mjs';
import { defineComponent, ref, provide, createElementBlock, openBlock, unref, normalizeClass, renderSlot, getCurrentInstance, inject, createElementVNode, createBlock, withCtx, resolveDynamicComponent, toDisplayString, mergeProps, createTextVNode, createVNode, isRef, useSSRContext } from 'vue';
import { a as useNamespace } from './server.mjs';
import { _ as __nuxt_component_3, D as DEFINE_HOME_TITLE } from './move.vue.mjs';
import { E as ElInput } from './index2.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.png.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@ctrl/tinycolor';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import './_plugin-vue_export-helper.mjs';

const breadcrumbKey = Symbol("breadcrumbKey");

const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});

const __default__$1 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": unref(t)("el.breadcrumb.label"),
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["aria-label"]);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "breadcrumb.vue"]]);

const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: Boolean
});

const __default__ = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const router = instance.appContext.config.globalProperties.$router;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        ((_a = unref(breadcrumbContext)) == null ? void 0 : _a.separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(breadcrumbContext).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString((_b = unref(breadcrumbContext)) == null ? void 0 : _b.separator), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "breadcrumb-item.vue"]]);

const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const input3 = ref("");
    const tabIndex = ref(0);
    const changeTabIndex = (index) => {
      tabIndex.value = index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      const _component_el_breadcrumb = ElBreadcrumb;
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      const _component_transition_move = __nuxt_component_3;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-bg" }, _attrs))}><header class="flex-center-center h-[86px] main-bg"><nav class="w-default flex-between-center"><img class="w-[88px] h-[88px] ml-[25px]"${ssrRenderAttr("src", _imports_0)} alt="找甲方logo图">`);
      _push(ssrRenderComponent(_component_el_button, { color: "#082B8D99" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`进入工作台`);
          } else {
            return [
              createTextVNode("进入工作台")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header><main class="h-[497px] flex-center-center mt-[10px] color-[#666]"><section class="w-default h-full bg-[#fff] p-[15px] pl-[40px] pr-[40px] rounded-[5px]"><header class="flex-start-center font-size-[14px]"> 网页导航： `);
      _push(ssrRenderComponent(_component_el_breadcrumb, { "separator-icon": unref(arrow_right_default) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, { to: { path: "/" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`首页`);
                } else {
                  return [
                    createTextVNode("首页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`搜索`);
                } else {
                  return [
                    createTextVNode("搜索")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_breadcrumb_item, { to: { path: "/" } }, {
                default: withCtx(() => [
                  createTextVNode("首页")
                ]),
                _: 1
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode("搜索")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><nav class="mt-[24px] pl-[20px]">`);
      _push(ssrRenderComponent(_component_transition_move, {
        tabList: unref(DEFINE_HOME_TITLE),
        label: "title",
        color: "#2962FF",
        tabIndex: unref(tabIndex),
        onChangeTabIndex: changeTabIndex
      }, null, _parent));
      _push(`</nav>`);
      _push(ssrRenderComponent(_component_el_input, {
        class: "next-input mt-[20px] pl-[15px]",
        modelValue: unref(input3),
        "onUpdate:modelValue": ($event) => isRef(input3) ? input3.value = $event : null,
        style: { "max-width": "600px" },
        placeholder: "请输入内容进行查询"
      }, {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-[#128BED] w-full flex-start-center pl-[20px] pr-[20px] color-[#fff] rounded-r-[2px] h-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, { icon: unref(search_default) }, null, _parent2, _scopeId));
            _push2(`<p class="ml-[10px]"${_scopeId}>搜索</p></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-[#128BED] w-full flex-start-center pl-[20px] pr-[20px] color-[#fff] rounded-r-[2px] h-1" }, [
                createVNode(_component_el_button, { icon: unref(search_default) }, null, 8, ["icon"]),
                createVNode("p", { class: "ml-[10px]" }, "搜索")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></main></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map

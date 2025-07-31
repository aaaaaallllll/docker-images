import { E as ElPopover, _ as _imports_2 } from './xiaocx.png.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.png.mjs';
import { _ as _imports_1 } from './zhaojiafang.jpg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import './icon.mjs';
import './server.mjs';
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
import '@vue/shared';
import 'lodash-unified';
import '@popperjs/core';
import './index3.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_el_popover = ElPopover;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-bg h-[281px] flex-column-center color-[#fff]" }, _attrs))}><nav class="w-default"><div class="flex-between-center"><aside class="flex-column-start-start"><img class="w-[88px] h-[88px]"${ssrRenderAttr("src", _imports_0)} alt="找甲方logo图"><label class="color-[#fff]">北京找甲方科技有限公司</label><div class="mt-[20px] mb-[10px] opacity-0">xxxx</div></aside><article class="flex-start-center gap-[50px]"><ul class="flex-column-start font-size-[12px] w-[80px] gap-[18px]"><li class="font-bold font-size-[16px]">资源中心</li><li>产品说明</li><li>新闻快讯</li><li>行业研究</li></ul><ul class="flex-column-start font-size-[12px] w-[80px] gap-[18px]"><li class="font-bold font-size-[16px]">产品下载</li>`);
  _push(ssrRenderComponent(_component_el_popover, {
    placement: "bottom",
    trigger: "hover"
  }, {
    reference: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="h-1"${_scopeId}>找甲方APP</li>`);
      } else {
        return [
          createVNode("li", { class: "h-1" }, "找甲方APP")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<article class="flex-column-center"${_scopeId}><label class="flex-center-center color-[#333] font-size-[10px]"${_scopeId}>下载找甲方APP</label><img class="w-[83px] h-[83px]"${ssrRenderAttr("src", _imports_1)} alt="手机扫码二维码下载APP"${_scopeId}></article>`);
      } else {
        return [
          createVNode("article", { class: "flex-column-center" }, [
            createVNode("label", { class: "flex-center-center color-[#333] font-size-[10px]" }, "下载找甲方APP"),
            createVNode("img", {
              class: "w-[83px] h-[83px]",
              src: _imports_1,
              alt: "手机扫码二维码下载APP"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<li>PC工作台</li>`);
  _push(ssrRenderComponent(_component_el_popover, {
    placement: "bottom",
    trigger: "hover"
  }, {
    reference: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="h-1"${_scopeId}>找甲方小程序</li>`);
      } else {
        return [
          createVNode("li", { class: "h-1" }, "找甲方小程序")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<article class="flex-column-center"${_scopeId}><label class="flex-center-center color-[#333] font-size-[10px]"${_scopeId}>微信扫码进入找甲方小程序</label><img class="w-[83px] h-[83px]"${ssrRenderAttr("src", _imports_2)} alt="微信小程序"${_scopeId}></article>`);
      } else {
        return [
          createVNode("article", { class: "flex-column-center" }, [
            createVNode("label", { class: "flex-center-center color-[#333] font-size-[10px]" }, "微信扫码进入找甲方小程序"),
            createVNode("img", {
              class: "w-[83px] h-[83px]",
              src: _imports_2,
              alt: "微信小程序"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul><ul class="flex-column-start font-size-[12px] w-[80px] gap-[18px]"><li class="font-bold font-size-[16px]">关于我们</li><li>公司简介</li><li>免责声明</li><li>友情链接</li></ul></article></div><p class="w-full flex-start-center mt-[4px] ml-[26px]">友情链接</p><div class="flex-start-center w-[705px] h-[1px] bg-[#fff] mt-[15px]"></div><main class="flex-start-center gap-[20px] ml-[35px] mt-[18px]"><label>Ⓒ2014-2025 北京找甲方科技有限公司</label><label>增值电信业务经营许可证：</label><label>京ICP备15042523号</label><label>企业征信备案号</label></main></nav></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Footer" });

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Footer = __nuxt_component_0;
  _push(`<!--[-->`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map

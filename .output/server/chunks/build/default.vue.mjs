import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.png.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-bg h-[281px] flex-column-center color-[#fff]" }, _attrs))}><nav class="w-default"><div class="flex-between-center"><aside class="flex-column-start-start"><img class="w-[88px] h-[88px]"${ssrRenderAttr("src", _imports_0)} alt="找甲方logo图"><label class="color-[#fff]">北京找甲方科技有限公司</label><div class="mt-[20px] mb-[10px] opacity-0">xxxx</div></aside><article class="flex-start-center gap-[50px]"><ul class="flex-column-start font-size-[12px] w-[80px] gap-[18px]"><li class="font-bold font-size-[16px]">资源中心</li><li>产品说明</li><li>新闻快讯</li><li>行业研究</li></ul><ul class="flex-column-start font-size-[12px] w-[80px] gap-[18px]"><li class="font-bold font-size-[16px]">产品下载</li><li>找甲方APP</li><li>PC工作台</li><li>找甲方小程序</li></ul><ul class="flex-column-start font-size-[12px] w-[80px] gap-[18px]"><li class="font-bold font-size-[16px]">关于我们</li><li>公司简介</li><li>免责声明</li><li>友情链接</li></ul></article></div><p class="w-full flex-start-center mt-[4px] ml-[26px]">友情链接</p><div class="flex-start-center w-[705px] h-[1px] bg-[#fff] mt-[15px]"></div><main class="flex-start-center gap-[20px] ml-[35px] mt-[18px]"><label>Ⓒ2014-2025 北京找甲方科技有限公司</label><label>增值电信业务经营许可证：</label><label>京ICP备15042523号</label><label>企业征信备案号</label></main></nav></footer>`);
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

import { mergeProps, useSSRContext, defineComponent, ref, unref, isRef, withCtx, createTextVNode, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './zhaojiafang.jpg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { E as ElInput, i as isValidMobile } from './index2.mjs';
import { E as ElButton } from './index.mjs';
import { m as myFetch, E as ElMessage } from './myFetch.mjs';
import { c as useRouter } from './server.mjs';
import './index3.mjs';
import 'lodash-unified';
import './icon.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade-in" }, _attrs))}><label class="flex-center-center mt-[16px] color-[#666] font-size-[12px]">为注册微信号将自动创建找甲方账户</label><div class="inline-block border border-[#CBCBCB] rounded-[5px] mt-[8px] overflow-hidden"><img${ssrRenderAttr("src", _imports_1)} alt="微信扫码登录找甲方"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login/wexin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "LoginWexin" });

const pc_password_login = async (params) => {
  return await myFetch("/pc_password_login", params);
};
const pc_send_sms = async (params) => {
  return await myFetch("/pc_send_sms", params);
};
const pc_api_login = async (params) => {
  return await myFetch("/pc_api_login", params);
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "phone",
  __ssrInlineRender: true,
  setup(__props) {
    const mobile = ref("");
    const password = ref("");
    const code = ref("");
    const isMobileLogin = ref(true);
    const login = async () => {
      if (!isValidMobile(mobile.value)) {
        return ElMessage.warning("请输入正确的手机号！");
      }
      if (isMobileLogin.value) {
        if (!password.value) {
          return ElMessage.warning("请输入密码！");
        }
        const res = await pc_password_login({
          mobile: mobile.value,
          password: password.value
        });
        console.log(res);
      } else {
        if (!code.value) {
          return ElMessage.warning("请输入验证码！");
        }
        const res = await pc_api_login({
          mobile: mobile.value,
          code: code.value
        });
        console.log(res);
      }
    };
    const getCode = async () => {
      if (!isValidMobile(mobile.value)) {
        return ElMessage.warning("请输入正确的手机号！");
      }
      const res = await pc_send_sms({
        mobile: mobile.value
      });
      console.log(res);
      ElMessage.success("发送短信成功！");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[45px] flex-column-center font-size-[12px] animate-fade-in" }, _attrs))}><div class="w-[200px] relative pre-input">`);
      _push(ssrRenderComponent(_component_el_input, {
        style: { "width": "100%" },
        modelValue: unref(mobile),
        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
        placeholder: "输入手机号码",
        clearable: ""
      }, null, _parent));
      _push(`<span class="absolute left-[10px] top-[7px] color-[#333]">+86</span></div>`);
      if (unref(isMobileLogin)) {
        _push(ssrRenderComponent(_component_el_input, {
          class: "mt-[10px]",
          modelValue: unref(password),
          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
          style: { "width": "200px" },
          type: "password",
          placeholder: "输入密码",
          clearable: ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isMobileLogin)) {
        _push(`<div class="flex-between-center mt-[10px] w-[200px]">`);
        _push(ssrRenderComponent(_component_el_input, {
          modelValue: unref(code),
          "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : null,
          style: { "width": "120px" },
          placeholder: "输入验证码"
        }, null, _parent));
        _push(ssrRenderComponent(_component_el_button, {
          class: "w-[75px] font-size-[12px]",
          plain: "",
          onClick: getCode
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`获取验证码`);
            } else {
              return [
                createTextVNode("获取验证码")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_el_button, {
        class: "mt-[25px] w-[200px]",
        type: "primary",
        onClick: login
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`登录`);
          } else {
            return [
              createTextVNode("登录")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isMobileLogin)) {
        _push(`<a class="mt-[20px] h-1">手机验证码登录</a>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isMobileLogin)) {
        _push(`<a class="mt-[20px] h-1">手机账号密码登录</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isMobileLogin)) {
        _push(`<label class="mt-[10px] color-[#999] h-1">忘记密码</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login/phone.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "LoginPhone" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isWeixinLogin = ref(false);
    const computeIsWX = computed(() => {
      return {
        t: isWeixinLogin.value ? "微信扫码" : "手机号",
        f: isWeixinLogin.value ? "手机号" : "微信扫码"
      };
    });
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_login_wexin = __nuxt_component_0;
      const _component_login_phone = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-bg vhw-full flex-center-end" }, _attrs))}><aside class="w-[925px] h-full flex-center-center bg-[#fff]"><main class="w-[512px] border-[#CBCBCB] border p-[20px] rounded-[5px]"><header class="flex-center-end"><button class="bg-[#2962FF2B] color-[#2962FF] h-[40px] rounded-[2px] pl-[20px] pr-[20px] font-size-[16px] inline-block">${ssrInterpolate(unref(computeIsWX).f)}登录 </button></header><div class="flex-column-center animate-fade-h"><label class="flex-center-center mt-[57px] font-size-[26px] color-[#333]"><span class="color-[#2962FF]">${ssrInterpolate(unref(computeIsWX).t)}</span>`);
      if (unref(isWeixinLogin)) {
        _push(`<span>一键</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`登录 </label>`);
      _push(ssrRenderComponent(_component_login_wexin, {
        style: unref(isWeixinLogin) ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_login_phone, {
        style: !unref(isWeixinLogin) ? null : { display: "none" }
      }, null, _parent));
      _push(`<label class="font-size-[12px] line-height-[20px] mt-[100px] t-c pl-[70px] pr-[70px] color-[#333]"><span class="color-[#666]">注册登录即代表同意</span> 用户服务协议、隐私政策、会员服务协议、授权许可协议、产品联合运营协议 </label></div></main></aside></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map

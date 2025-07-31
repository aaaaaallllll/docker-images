import { shallowReactive, defineComponent, watch, renderSlot, isVNode, mergeProps, useSSRContext, getCurrentWatcher, onWatcherCleanup, ref, unref, isRef, withCtx, createTextVNode, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './zhaojiafang.jpg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { m as mutable, E as ElInput, i as isValidMobile } from './index2.mjs';
import { b as buildProps, d as definePropType, i as iconPropType, l as useEmptyValuesProps, m as useSizeProp, p as provideGlobalConfig, n as withInstallFunction, E as ElButton } from './index.mjs';
import { m as isElement, h as isBoolean, i as isNumber, p as baseURL, c as useRouter } from './server.mjs';
import { isString, isFunction } from '@vue/shared';
import 'lodash-unified';
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

const messageTypes = ["success", "info", "warning", "error"];
const messageDefaults = mutable({
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: void 0
});
buildProps({
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },
  center: {
    type: Boolean,
    default: messageDefaults.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  id: {
    type: String,
    default: messageDefaults.id
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  onClose: {
    type: definePropType(Function),
    default: messageDefaults.onClose
  },
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  plain: {
    type: Boolean,
    default: messageDefaults.plain
  },
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});

const instances = shallowReactive([]);

const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: useSizeProp,
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...useEmptyValuesProps
});

const messageConfig = {};
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = (void 0).body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = (void 0).querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      appendTo = (void 0).body;
    }
    normalized.appendTo = appendTo;
  }
  if (isBoolean(messageConfig.grouping) && !normalized.grouping) {
    normalized.grouping = messageConfig.grouping;
  }
  if (isNumber(messageConfig.duration) && normalized.duration === 3e3) {
    normalized.duration = messageConfig.duration;
  }
  if (isNumber(messageConfig.offset) && normalized.offset === 16) {
    normalized.offset = messageConfig.offset;
  }
  if (isBoolean(messageConfig.showClose) && !normalized.showClose) {
    normalized.showClose = messageConfig.showClose;
  }
  return normalized;
};
const message = (options = {}, context) => {
  return { close: () => void 0 };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized });
  };
});
function closeAll(type) {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;

const ElMessage = withInstallFunction(message, "$message");

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade-in" }, _attrs))}><label class="flex-center-center mt-[16px] color-[#666] font-size-[12px]">为注册微信号将自动创建找甲方账户</label><div class="inline-block border border-[#CBCBCB] rounded-[5px] mt-[8px] overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="微信扫码登录找甲方"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login/wexin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "LoginWexin" });

/* empty css                                                                                                                            */
/* empty css                                                                                                                             */
/* empty css                                                                                                                               */
function myFetch(url, params, options) {
  return new Promise(async (resolve, reject) => {
    const controller = new AbortController();
    if (getCurrentWatcher()) {
      onWatcherCleanup(() => {
        controller.abort();
      });
    }
    const res = await fetch(baseURL + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
      ...options,
      signal: controller.signal
    });
    let json;
    try {
      json = await res.json();
    } catch (error) {
      ElMessage.error("请求失败！");
      return reject(error);
    }
    return resolve(json.data);
  });
}

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

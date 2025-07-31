import { defineComponent, ref, computed, provide, renderSlot, unref, getCurrentInstance, watch, inject, withDirectives, cloneVNode, Fragment, Text, Comment, createVNode, createBlock, createCommentVNode, openBlock, mergeProps, withCtx, toRef, normalizeClass, Teleport as Teleport$1, shallowRef, createElementBlock, Transition, vShow, normalizeStyle, readonly, toDisplayString, createTextVNode, useSSRContext, isVNode, useSlots, withModifiers, createElementVNode, renderList, isRef } from 'vue';
import { b as buildProps, _ as _export_sfc, w as withInstall, d as definePropType, c as buildProp, f as formItemContextKey, i as iconPropType, a as addUnit, e as withInstallDirective, E as ElButton, u as useLocale, g as ElIcon, h as arrow_left_default, j as arrow_right_default, k as withNoopInstall } from './index.mjs';
import { t as tryOnScopeDispose, i as isNumber, h as isBoolean, j as isClient, a as useNamespace, k as useGetDerivedNamespace, l as useIdInjection, m as isElement, o as useZIndex, b as useId, c as useRouter } from './server.mjs';
import { placements, createPopper } from '@popperjs/core';
import { u as useAriaProps, o as onClickOutside, E as ElInput } from './index2.mjs';
import { isFunction, isArray, NOOP, isObject, isString } from '@vue/shared';
import { isNil, fromPairs, isUndefined, throttle } from 'lodash-unified';
import { ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0$4 } from './logo.png.mjs';
import { _ as _imports_0$5 } from './zhaojiafang.jpg.mjs';
import dayjs from 'dayjs';
import { D as DEFINE_HOME_TITLE, a as DEFINE_HOME_HOTS, b as DEFINE_HOME_CAROUSEL, c as DEFINE_HOME_NAV, _ as __nuxt_component_3$1, d as DEFINE_HOME_SOCIAL } from './move.vue.mjs';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper.mjs';
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

const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");

const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});

const __default__$9 = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "popper.vue"]]);

const ElPopper = withInstall(Popper);

const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");

function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = (void 0).setTimeout(fn, delay);
  };
  const cancelTimeout = () => (void 0).clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}

const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose
  } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = unref(autoClose);
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, unref(showAfter));
  };
  const onClose = (event) => {
    cancelTimeoutForAutoClose();
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};

const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: placements,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: definePropType(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...useAriaProps(["ariaLabel"])
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};

const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  ...useAriaProps(["ariaLabel"])
});

const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});

const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  down: "ArrowDown",
  numpadEnter: "NumpadEnter"
};

const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space]
  }
});

const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});

const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      hasUpdateHandler.value && isClient;
      if (isModelBindingAbsent.value || true) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || true)
        return;
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};

const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];

const isTriggerType = (trigger, type) => {
  if (isArray(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};

const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};

const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns = useNamespace("only-child");
  return createVNode("span", {
    "class": ns.e("content")
  }, [s]);
}

const __default__$8 = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "trigger.vue"]]);

const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};

const __default__$7 = defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "trigger.vue"]]);

const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});

const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport$1, {
        key: 1,
        to: _ctx.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "teleport.vue"]]);

const ElTeleport = withInstall(Teleport);

const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = computed(() => `#${id.value}`);
  return {
    id,
    selector
  };
};
const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();
  return {
    id,
    selector
  };
};

const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");

const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};

const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = (void 0).createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === (void 0).activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = (void 0).activeElement;
    let cleanup = false;
    if (isElement(element) && !isFocusable(element) && !element.getAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
      cleanup = true;
    }
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = (void 0).performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
    if (isElement(element) && cleanup) {
      element.removeAttribute("tabindex");
    }
  }
};
const useFocusReason = () => {
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};

const _sfc_main$m = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusAfterTrapped;
    const { focusReason } = useFocusReason();
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = (void 0).activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        relatedTarget && trapContainer.contains(relatedTarget);
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    return {
      onKeydown
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$2], ["__file", "focus-trap.vue"]]);

const usePopperContentFocusTrap = (props, emit) => {
  const trapped = ref(false);
  const focusStartRef = ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target;
      }
      trapped.value = true;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (!props.trapping) {
      if (event.detail.focusReason === "pointer") {
        event.preventDefault();
      }
      trapped.value = false;
    }
  };
  const onReleaseRequested = () => {
    trapped.value = false;
    emit("close");
  };
  return {
    focusStartRef,
    trapped,
    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};

const buildPopperOptions = (props, modifiers = []) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: [...genModifiers(props), ...modifiers]
  };
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  return;
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}

const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
  const stateUpdater = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state }) => {
      const derivedState = deriveState(state);
      Object.assign(states.value, derivedState);
    },
    requires: ["computeStyles"]
  };
  const options = computed(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
    return {
      onFirstUpdate,
      placement: placement || "bottom",
      strategy: strategy || "absolute",
      modifiers: [
        ...modifiers || [],
        stateUpdater,
        { name: "applyStyles", enabled: false }
      ]
    };
  });
  const instanceRef = shallowRef();
  const states = ref({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const destroy = () => {
    if (!instanceRef.value)
      return;
    instanceRef.value.destroy();
    instanceRef.value = void 0;
  };
  watch(options, (newOptions) => {
    const instance = unref(instanceRef);
    if (instance) {
      instance.setOptions(newOptions);
    }
  }, {
    deep: true
  });
  watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
    destroy();
    if (!referenceElement || !popperElement)
      return;
    instanceRef.value = createPopper(referenceElement, popperElement, unref(options));
  });
  return {
    state: computed(() => {
      var _a;
      return { ...((_a = unref(instanceRef)) == null ? void 0 : _a.state) || {} };
    }),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.update();
    },
    forceUpdate: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.forceUpdate();
    },
    instanceRef: computed(() => unref(instanceRef))
  };
};
function deriveState(state) {
  const elements = Object.keys(state.elements);
  const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
  const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
  return {
    styles,
    attributes
  };
}

const DEFAULT_ARROW_OFFSET = 0;
const usePopperContent = (props) => {
  const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
  const arrowRef = ref();
  const arrowOffset = ref();
  const eventListenerModifier = computed(() => {
    return {
      name: "eventListeners",
      enabled: !!props.visible
    };
  });
  const arrowModifier = computed(() => {
    var _a;
    const arrowEl = unref(arrowRef);
    const offset = (_a = unref(arrowOffset)) != null ? _a : DEFAULT_ARROW_OFFSET;
    return {
      name: "arrow",
      enabled: !isUndefined(arrowEl),
      options: {
        element: arrowEl,
        padding: offset
      }
    };
  });
  const options = computed(() => {
    return {
      onFirstUpdate: () => {
        update();
      },
      ...buildPopperOptions(props, [
        unref(arrowModifier),
        unref(eventListenerModifier)
      ])
    };
  });
  const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
  const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
  watch(instanceRef, (instance) => popperInstanceRef.value = instance);
  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles,
    role,
    forceUpdate,
    update
  };
};

const usePopperContentDOM = (props, {
  attributes,
  styles,
  role
}) => {
  const { nextZIndex } = useZIndex();
  const ns = useNamespace("popper");
  const contentAttrs = computed(() => unref(attributes).popper);
  const contentZIndex = ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
  const contentClass = computed(() => [
    ns.b(),
    ns.is("pure", props.pure),
    ns.is(props.effect),
    props.popperClass
  ]);
  const contentStyle = computed(() => {
    return [
      { zIndex: unref(contentZIndex) },
      unref(styles).popper,
      props.popperStyle || {}
    ];
  });
  const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
  const arrowStyle = computed(() => unref(styles).arrow || {});
  const updateZIndex = () => {
    contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
  };
  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,
    updateZIndex
  };
};

const __default__$6 = defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      focusStartRef,
      trapped,
      onFocusAfterReleased,
      onFocusAfterTrapped,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = usePopperContentFocusTrap(props, emit);
    const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
    const {
      arrowStyle,
      contentAttrs,
      contentClass,
      contentStyle,
      updateZIndex
    } = usePopperContentDOM(props, {
      styles,
      attributes,
      role
    });
    const formItemContext = inject(formItemContextKey, void 0);
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowStyle,
      arrowRef,
      arrowOffset
    });
    if (formItemContext) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const updatePopper = (shouldUpdateZIndex = true) => {
      update();
      shouldUpdateZIndex && updateZIndex();
    };
    expose({
      popperContentRef: contentRef,
      popperInstanceRef: instanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "contentRef",
        ref: contentRef
      }, unref(contentAttrs), {
        style: unref(contentStyle),
        class: unref(contentClass),
        tabindex: "-1",
        onMouseenter: (e) => _ctx.$emit("mouseenter", e),
        onMouseleave: (e) => _ctx.$emit("mouseleave", e)
      }), [
        createVNode(unref(ElFocusTrap), {
          trapped: unref(trapped),
          "trap-on-focus-in": true,
          "focus-trap-el": unref(contentRef),
          "focus-start-el": unref(focusStartRef),
          onFocusAfterTrapped: unref(onFocusAfterTrapped),
          onFocusAfterReleased: unref(onFocusAfterReleased),
          onFocusin: unref(onFocusInTrap),
          onFocusoutPrevented: unref(onFocusoutPrevented),
          onReleaseRequested: unref(onReleaseRequested)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
      ], 16, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "content.vue"]]);

const __default__$5 = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const { selector } = usePopperContainerId();
    const ns = useNamespace("tooltip");
    const contentRef = ref();
    let stopHandle;
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const transitionClass = computed(() => {
      return props.transition || `${ns.namespace.value}-fade-in-linear`;
    });
    const persistentRef = computed(() => {
      return props.persistent;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const appendTo = computed(() => {
      return props.appendTo || selector.value;
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = ref(true);
    const onTransitionLeave = () => {
      onHide();
      isFocusInsideContent() && tryFocus((void 0).body);
      ariaHidden.value = true;
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside(computed(() => {
        var _a;
        return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      }), () => {
        if (unref(controlled))
          return;
        const $trigger = unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    const isFocusInsideContent = (event) => {
      var _a;
      const popperContent = (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      const activeElement = (event == null ? void 0 : event.relatedTarget) || (void 0).activeElement;
      return popperContent == null ? void 0 : popperContent.contains(activeElement);
    };
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      } else {
        ariaHidden.value = false;
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    expose({
      contentRef,
      isFocusInsideContent
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        disabled: !_ctx.teleported,
        to: unref(appendTo)
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(transitionClass),
            onAfterLeave: onTransitionLeave,
            onBeforeEnter,
            onAfterEnter: onAfterShow,
            onBeforeLeave
          }, {
            default: withCtx(() => [
              unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
                key: 0,
                id: unref(id),
                ref_key: "contentRef",
                ref: contentRef
              }, _ctx.$attrs, {
                "aria-label": _ctx.ariaLabel,
                "aria-hidden": ariaHidden.value,
                "boundaries-padding": _ctx.boundariesPadding,
                "fallback-placements": _ctx.fallbackPlacements,
                "gpu-acceleration": _ctx.gpuAcceleration,
                offset: _ctx.offset,
                placement: _ctx.placement,
                "popper-options": _ctx.popperOptions,
                strategy: _ctx.strategy,
                effect: _ctx.effect,
                enterable: _ctx.enterable,
                pure: _ctx.pure,
                "popper-class": _ctx.popperClass,
                "popper-style": [_ctx.popperStyle, unref(contentStyle)],
                "reference-el": _ctx.referenceEl,
                "trigger-target-el": _ctx.triggerTargetEl,
                visible: unref(shouldShow),
                "z-index": _ctx.zIndex,
                onMouseenter: unref(onContentEnter),
                onMouseleave: unref(onContentLeave),
                onBlur,
                onClose: unref(onClose)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
                [vShow, unref(shouldShow)]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        _: 3
      }, 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "content.vue"]]);

const __default__$4 = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: popperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("popper");
    const { arrowOffset, arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns).e("arrow")),
        style: normalizeStyle(unref(arrowStyle)),
        "data-popper-arrow": ""
      }, null, 6);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "arrow.vue"]]);

const __default__$3 = defineComponent({
  name: "ElTooltip"
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter"),
      hideAfter: toRef(props, "hideAfter"),
      autoClose: toRef(props, "autoClose"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = (event) => {
      var _a;
      return (_a = contentRef.value) == null ? void 0 : _a.isFocusInsideContent(event);
    };
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": _ctx.popperClass,
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, ["innerHTML"])) : (openBlock(), createElementBlock("span", { key: 1 }, toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), {
                key: 0,
                "arrow-offset": _ctx.arrowOffset
              }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "tooltip.vue"]]);

const ElTooltip = withInstall(Tooltip);

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  inheritAttrs: false
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Collection = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$1], ["__file", "collection.vue"]]);

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  name: "ElCollectionItem",
  inheritAttrs: false
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var CollectionItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render], ["__file", "collection-item.vue"]]);

const COLLECTION_ITEM_SIGN = `data-el-collection-item`;
const createCollectionWithScope = (name) => {
  const COLLECTION_NAME = `El${name}Collection`;
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`;
  const COLLECTION_INJECTION_KEY = Symbol(COLLECTION_NAME);
  const COLLECTION_ITEM_INJECTION_KEY = Symbol(COLLECTION_ITEM_NAME);
  const ElCollection = {
    ...Collection,
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref();
      const itemMap = /* @__PURE__ */ new Map();
      const getItems = () => {
        const collectionEl = unref(collectionRef);
        if (!collectionEl)
          return [];
        const orderedNodes = Array.from(collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`));
        const items = [...itemMap.values()];
        return items.sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));
      };
      provide(COLLECTION_INJECTION_KEY, {
        itemMap,
        getItems,
        collectionRef
      });
    }
  };
  const ElCollectionItem = {
    ...CollectionItem,
    name: COLLECTION_ITEM_NAME,
    setup(_, { attrs }) {
      const collectionItemRef = ref();
      inject(COLLECTION_INJECTION_KEY, void 0);
      provide(COLLECTION_ITEM_INJECTION_KEY, {
        collectionItemRef
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY,
    COLLECTION_ITEM_INJECTION_KEY,
    ElCollection,
    ElCollectionItem
  };
};

const dropdownProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  triggerKeys: {
    type: definePropType(Array),
    default: () => [
      EVENT_CODE.enter,
      EVENT_CODE.numpadEnter,
      EVENT_CODE.space,
      EVENT_CODE.down
    ]
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  type: {
    type: definePropType(String)
  },
  placement: {
    type: definePropType(String),
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: definePropType([Number, String]),
    default: 0
  },
  maxHeight: {
    type: definePropType([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: roleTypes,
    default: "menu"
  },
  buttonProps: {
    type: definePropType(Object)
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  }
});
buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: iconPropType
  }
});
buildProps({
  onKeydown: { type: definePropType(Function) }
});
createCollectionWithScope("Dropdown");

const popoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  teleported: useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  },
  "onUpdate:visible": {
    type: Function
  }
});
const popoverEmits = {
  "update:visible": (value) => isBoolean(value),
  "before-enter": () => true,
  "before-leave": () => true,
  "after-enter": () => true,
  "after-leave": () => true
};

const updateEventKeyRaw = `onUpdate:visible`;
const __default__$2 = defineComponent({
  name: "ElPopover"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: popoverProps,
  emits: popoverEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const onUpdateVisible = computed(() => {
      return props[updateEventKeyRaw];
    });
    const ns = useNamespace("popover");
    const tooltipRef = ref();
    const popperRef = computed(() => {
      var _a;
      return (_a = unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const style = computed(() => {
      return [
        {
          width: addUnit(props.width)
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const gpuAcceleration = computed(() => {
      return props.transition === `${ns.namespace.value}-fade-in-linear`;
    });
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const beforeEnter = () => {
      emit("before-enter");
    };
    const beforeLeave = () => {
      emit("before-leave");
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("update:visible", false);
      emit("after-leave");
    };
    expose({
      popperRef,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "tooltipRef",
        ref: tooltipRef
      }, _ctx.$attrs, {
        trigger: _ctx.trigger,
        placement: _ctx.placement,
        disabled: _ctx.disabled,
        visible: _ctx.visible,
        transition: _ctx.transition,
        "popper-options": _ctx.popperOptions,
        tabindex: _ctx.tabindex,
        content: _ctx.content,
        offset: _ctx.offset,
        "show-after": _ctx.showAfter,
        "hide-after": _ctx.hideAfter,
        "auto-close": _ctx.autoClose,
        "show-arrow": _ctx.showArrow,
        "aria-label": _ctx.title,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "popper-class": unref(kls),
        "popper-style": unref(style),
        teleported: _ctx.teleported,
        persistent: _ctx.persistent,
        "gpu-acceleration": unref(gpuAcceleration),
        "onUpdate:visible": unref(onUpdateVisible),
        onBeforeShow: beforeEnter,
        onBeforeHide: beforeLeave,
        onShow: afterEnter,
        onHide: afterLeave
      }), {
        content: withCtx(() => [
          _ctx.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("title")),
            role: "title"
          }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ])
        ]),
        default: withCtx(() => [
          _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]);
    };
  }
});
var Popover = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "popover.vue"]]);

const attachEvents = (el, binding) => {
  const popperComponent = binding.arg || binding.value;
  const popover = popperComponent == null ? void 0 : popperComponent.popperRef;
  if (popover) {
    popover.triggerRef = el;
  }
};
var PopoverDirective = {
  mounted(el, binding) {
    attachEvents(el, binding);
  },
  updated(el, binding) {
    attachEvents(el, binding);
  }
};
const VPopover = "popover";

const ElPopoverDirective = withInstallDirective(PopoverDirective, VPopover);
const ElPopover = withInstall(Popover, {
  directive: ElPopoverDirective
});

const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAAXNSR0IB2cksfwAAAA9QTFRFAAAA////////////////j0LeaAAAAAV0Uk5TACZNc5mysekVAAAAk0lEQVR4nDVP2wGDMAg8ogOkrQNozQDRZoBI2H+m8lA+yAWO4wCA1y7fDI8k4xR2SO3QXPwzX14qq6WbqaVkzdRWNKV47xQsFcXUBpY81aCztqnjF7hkuvTBXtnkWetpZE45sCpxLFgw18DdxNj3qebUSWQNQzSQNrPLj0Hg021mZD/ILyu80bvVsF5E5MAdtDnhD6itEo6cF2aCAAAAAElFTkSuQmCC";

const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWBAMAAADtIdsqAAAAAXNSR0IB2cksfwAAAA9QTFRFAAAA////////////////j0LeaAAAAAV0Uk5TACZNmXNW//kVAAAATklEQVR4nL2OwQ2AMAwDj8IAEV2gJEzQZIBKsP9MNIIZuNfJ9sMs5u7RoHZVPTvcJCYExQdrY4Yqn0z+EvN4pehBFaxldQmbJ7nc52eFB5dfC7dztoHKAAAAAElFTkSuQmCC";

const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMBAMAAABCcoqQAAAAAXNSR0IB2cksfwAAAA9QTFRFAAAA+XA4+nA3+3A4+nA3TakT2wAAAAV0Uk5TAID/QL86DWV/AAAAQ0lEQVR4nGNgEDJgAAIhZRDp4gQkGBWNnAwYjBxYlAQYhBiYVRwYFIGCCgwqYNKFgYFJgMFIgBmohlFJCaSNUZiBAQC53QT15XYj5AAAAABJRU5ErkJggg==";

const dataFliter = (val, format = "YYYY-MM-DD HH:mm:ss") => {
  if (!val) return "";
  return dayjs(val).format(format);
};

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const keyword = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_el_button = ElButton;
      _push(`<!--[--><header class="flex-center-center h-[38px] pt-[24px] main-bg"><nav class="w-default flex-start-center"><img class="w-[88px] h-[88px] ml-[25px]"${ssrRenderAttr("src", _imports_0$4)} alt="找甲方logo图"><ul class="flex-start-center color-[#fff] h-[38px] gap-[30px] rounded-[5px] overflow-hidden ml-[36px] pr-[30px] font-size-[16px] bg-[#A4BCFF4F]"><li class="bg-[#082B8D99] w-[191px] h-full flex-center-center"><section class="flex-center-center gap-[6px]"><p>${ssrInterpolate(unref(dataFliter)(/* @__PURE__ */ new Date(), "YYYY-MM-DD"))}</p><span>|</span><p>今日更新</p></section></li><!--[-->`);
      ssrRenderList(unref(DEFINE_HOME_TITLE), (mock, i) => {
        _push(`<li class="h-full flex-center-center">${ssrInterpolate(mock.title)}：${ssrInterpolate(mock.value)}</li>`);
      });
      _push(`<!--]--></ul><ul class="flex-start-center gap-[25px] ml-[72px] color-[#FFFFFF99]"><li><img class="w-[20px] h-[20px] c-p"${ssrRenderAttr("src", _imports_1$1)} alt="手机APP下载"></li><label class="w-[1px] h-[19px] bg-[#FFFFFF99]"></label><li class="line-height-4">`);
      _push(ssrRenderComponent(_component_el_popover, {
        placement: "bottom",
        trigger: "hover"
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-[13px] h-[20px] c-p"${ssrRenderAttr("src", _imports_2)} alt="微信小程序"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-[13px] h-[20px] c-p",
                src: _imports_2,
                alt: "微信小程序"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="flex-column-center"${_scopeId}><label class="flex-center-center color-[#333] font-size-[10px]"${_scopeId}>下载找甲方APP</label><img class="w-[83px] h-[83px]"${ssrRenderAttr("src", _imports_0$5)} alt="手机扫码二维码下载APP"${_scopeId}></article>`);
          } else {
            return [
              createVNode("article", { class: "flex-column-center" }, [
                createVNode("label", { class: "flex-center-center color-[#333] font-size-[10px]" }, "下载找甲方APP"),
                createVNode("img", {
                  class: "w-[83px] h-[83px]",
                  src: _imports_0$5,
                  alt: "手机扫码二维码下载APP"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><label class="w-[1px] h-[19px] bg-[#FFFFFF99]"></label>`);
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
      _push(`</ul></nav></header><main class="flex-center-center h-[320px] main-bg"><aside class="w-default h-full flex-column-center"><h1 class="font-size-[32px] line-height-[48px] color-[#fff]"> 找项目 找商机 找人脉 就用找甲方 </h1><article class="mt-[44px] flex-start-center rounded-[10px] overflow-hidden"><input class="w-[507px] h-[53px] font-size-[18px] pl-[24px] color-[#333]" type="text" placeholder="输入关键词找项目"${ssrRenderAttr("value", unref(keyword))}><button class="w-[110px] h-[53px] font-size-[18px] bg-[#ED3636] color-[#fff]"> 搜索项目 </button></article><label class="flex-start-center gap-[10px] w-[617px] mt-[22px] font-size-[12px] color-[#fff]"><h6 class="flex-start-center"><img class="w-7.5px h-[10px] mr-3.5px"${ssrRenderAttr("src", _imports_4)} alt="热搜">热搜： </h6><!--[-->`);
      ssrRenderList(unref(DEFINE_HOME_HOTS), (hot, i) => {
        _push(`<a class="color-[#fff] h-1">${ssrInterpolate(hot.title)}</a>`);
      });
      _push(`<!--]--></label></aside></main><!--]-->`);
    };
  }
});

const _sfc_setup$c = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/header.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$e, { __name: "HomeHeader" });

const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
    default: ""
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3e3
  },
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],
    default: ""
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "hover"
  },
  type: {
    type: String,
    values: ["", "card"],
    default: ""
  },
  cardScale: {
    type: Number,
    default: 0.83
  },
  loop: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  motionBlur: Boolean
});
const carouselEmits = {
  change: (current, prev) => [current, prev].every(isNumber)
};

const carouselContextKey = Symbol("carouselContextKey");
const CAROUSEL_ITEM_NAME = "ElCarouselItem";

const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
      result.push(child, ...flattedChildren(child.component.subTree));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else if (isVNode(child) && child.shapeFlag === 2) {
      result.push(...flattedChildren(child.type()));
    } else {
      result.push(child);
    }
  });
  return result;
};

const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};

const THROTTLE_TIME = 300;
const useCarousel = (props, emit, componentName) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = useOrderedChildren(getCurrentInstance(), CAROUSEL_ITEM_NAME);
  const slots = useSlots();
  const activeIndex = ref(-1);
  const timer = ref(null);
  const hover = ref(false);
  const root = ref();
  const containerHeight = ref(0);
  const isItemsTwoLength = ref(true);
  const isFirstCall = ref(true);
  const isTransitioning = ref(false);
  const arrowDisplay = computed(() => props.arrow !== "never" && !unref(isVertical));
  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0);
  });
  const isCardType = computed(() => props.type === "card");
  const isVertical = computed(() => props.direction === "vertical");
  const containerStyle = computed(() => {
    if (props.height !== "auto") {
      return {
        height: props.height
      };
    }
    return {
      height: `${containerHeight.value}px`,
      overflow: "hidden"
    };
  });
  const throttledArrowClick = throttle((index) => {
    setActiveItem(index);
  }, THROTTLE_TIME, { trailing: true });
  const throttledIndicatorHover = throttle((index) => {
    handleIndicatorHover(index);
  }, THROTTLE_TIME);
  const isTwoLengthShow = (index) => {
    if (!isItemsTwoLength.value)
      return true;
    return activeIndex.value <= 1 ? index <= 1 : index > 1;
  };
  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }
  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value)
      return;
    timer.value = setInterval(() => playSlides(), props.interval);
  }
  const playSlides = () => {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1;
    } else if (props.loop) {
      activeIndex.value = 0;
    } else {
      isTransitioning.value = false;
    }
  };
  function setActiveItem(index) {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (isString(index)) {
      const filteredItems = items.value.filter((item) => item.props.name === index);
      if (filteredItems.length > 0) {
        index = items.value.indexOf(filteredItems[0]);
      }
    }
    index = Number(index);
    if (Number.isNaN(index) || index !== Math.floor(index)) {
      return;
    }
    const itemCount = items.value.length;
    const oldIndex = activeIndex.value;
    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0;
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1;
    } else {
      activeIndex.value = index;
    }
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex);
    }
    resetTimer();
  }
  function resetItemPosition(oldIndex) {
    items.value.forEach((item, index) => {
      item.translateItem(index, activeIndex.value, oldIndex);
    });
  }
  function itemInStage(item, index) {
    var _a, _b, _c, _d;
    const _items = unref(items);
    const itemCount = _items.length;
    if (itemCount === 0 || !item.states.inStage)
      return false;
    const nextItemIndex = index + 1;
    const prevItemIndex = index - 1;
    const lastItemIndex = itemCount - 1;
    const isLastItemActive = _items[lastItemIndex].states.active;
    const isFirstItemActive = _items[0].states.active;
    const isNextItemActive = (_b = (_a = _items[nextItemIndex]) == null ? void 0 : _a.states) == null ? void 0 : _b.active;
    const isPrevItemActive = (_d = (_c = _items[prevItemIndex]) == null ? void 0 : _c.states) == null ? void 0 : _d.active;
    if (index === lastItemIndex && isFirstItemActive || isNextItemActive) {
      return "left";
    } else if (index === 0 && isLastItemActive || isPrevItemActive) {
      return "right";
    }
    return false;
  }
  function handleMouseEnter() {
    hover.value = true;
    if (props.pauseOnHover) {
      pauseTimer();
    }
  }
  function handleMouseLeave() {
    hover.value = false;
    startTimer();
  }
  function handleTransitionEnd() {
    isTransitioning.value = false;
  }
  function handleButtonEnter(arrow) {
    if (unref(isVertical))
      return;
    items.value.forEach((item, index) => {
      if (arrow === itemInStage(item, index)) {
        item.states.hover = true;
      }
    });
  }
  function handleButtonLeave() {
    if (unref(isVertical))
      return;
    items.value.forEach((item) => {
      item.states.hover = false;
    });
  }
  function handleIndicatorClick(index) {
    if (index !== activeIndex.value) {
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
    activeIndex.value = index;
  }
  function handleIndicatorHover(index) {
    if (props.trigger === "hover" && index !== activeIndex.value) {
      activeIndex.value = index;
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
  }
  function prev() {
    setActiveItem(activeIndex.value - 1);
  }
  function next() {
    setActiveItem(activeIndex.value + 1);
  }
  function resetTimer() {
    pauseTimer();
    if (!props.pauseOnHover)
      startTimer();
  }
  function setContainerHeight(height) {
    if (props.height !== "auto")
      return;
    containerHeight.value = height;
  }
  function PlaceholderItem() {
    var _a;
    const defaultSlots = (_a = slots.default) == null ? void 0 : _a.call(slots);
    if (!defaultSlots)
      return null;
    const flatSlots = flattedChildren(defaultSlots);
    const normalizeSlots = flatSlots.filter((slot) => {
      return isVNode(slot) && slot.type.name === CAROUSEL_ITEM_NAME;
    });
    if ((normalizeSlots == null ? void 0 : normalizeSlots.length) === 2 && props.loop && !isCardType.value) {
      isItemsTwoLength.value = true;
      return normalizeSlots;
    }
    isItemsTwoLength.value = false;
    return null;
  }
  watch(() => activeIndex.value, (current, prev2) => {
    resetItemPosition(prev2);
    if (isItemsTwoLength.value) {
      current = current % 2;
      prev2 = prev2 % 2;
    }
    if (prev2 > -1) {
      emit("change", current, prev2);
    }
  });
  watch(() => props.autoplay, (autoplay) => {
    autoplay ? startTimer() : pauseTimer();
  });
  watch(() => props.loop, () => {
    setActiveItem(activeIndex.value);
  });
  watch(() => props.interval, () => {
    resetTimer();
  });
  shallowRef();
  provide(carouselContextKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    cardScale: props.cardScale,
    addItem,
    removeItem,
    setActiveItem,
    setContainerHeight
  });
  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    isTransitioning,
    items,
    isVertical,
    containerStyle,
    isItemsTwoLength,
    handleButtonEnter,
    handleTransitionEnd,
    handleButtonLeave,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    PlaceholderItem,
    isTwoLengthShow,
    throttledArrowClick,
    throttledIndicatorHover
  };
};

const COMPONENT_NAME = "ElCarousel";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: carouselProps,
  emits: carouselEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      root,
      activeIndex,
      arrowDisplay,
      hasLabel,
      hover,
      isCardType,
      items,
      isVertical,
      containerStyle,
      handleButtonEnter,
      handleButtonLeave,
      isTransitioning,
      handleIndicatorClick,
      handleMouseEnter,
      handleMouseLeave,
      handleTransitionEnd,
      setActiveItem,
      prev,
      next,
      PlaceholderItem,
      isTwoLengthShow,
      throttledArrowClick,
      throttledIndicatorHover
    } = useCarousel(props, emit);
    const ns = useNamespace("carousel");
    const { t } = useLocale();
    const carouselClasses = computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (unref(isCardType)) {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const carouselContainer = computed(() => {
      const classes = [ns.e("container")];
      if (props.motionBlur && unref(isTransitioning) && items.value.length > 1) {
        classes.push(unref(isVertical) ? `${ns.namespace.value}-transitioning-vertical` : `${ns.namespace.value}-transitioning`);
      }
      return classes;
    });
    const indicatorsClasses = computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (unref(hasLabel)) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside") {
        classes.push(ns.em("indicators", "outside"));
      }
      if (unref(isVertical)) {
        classes.push(ns.em("indicators", "right"));
      }
      return classes;
    });
    expose({
      activeIndex,
      setActiveItem,
      prev,
      next
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(carouselClasses)),
        onMouseenter: withModifiers(unref(handleMouseEnter), ["stop"]),
        onMouseleave: withModifiers(unref(handleMouseLeave), ["stop"])
      }, [
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: "carousel-arrow-left",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "left")]),
              "aria-label": unref(t)("el.carousel.leftArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("left"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) - 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_left_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) > 0)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 1,
          name: "carousel-arrow-right",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "right")]),
              "aria-label": unref(t)("el.carousel.rightArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("right"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) + 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) < unref(items).length - 1)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(carouselContainer)),
          style: normalizeStyle(unref(containerStyle)),
          onTransitionend: unref(handleTransitionEnd)
        }, [
          createVNode(unref(PlaceholderItem)),
          renderSlot(_ctx.$slots, "default")
        ], 46, ["onTransitionend"]),
        _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
          key: 2,
          class: normalizeClass(unref(indicatorsClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item, index) => {
            return withDirectives((openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass([
                unref(ns).e("indicator"),
                unref(ns).em("indicator", _ctx.direction),
                unref(ns).is("active", index === unref(activeIndex))
              ]),
              onMouseenter: ($event) => unref(throttledIndicatorHover)(index),
              onClick: withModifiers(($event) => unref(handleIndicatorClick)(index), ["stop"])
            }, [
              createElementVNode("button", {
                class: normalizeClass(unref(ns).e("button")),
                "aria-label": unref(t)("el.carousel.indicator", { index: index + 1 })
              }, [
                unref(hasLabel) ? (openBlock(), createElementBlock("span", { key: 0 }, toDisplayString(item.props.label), 1)) : createCommentVNode("v-if", true)
              ], 10, ["aria-label"])
            ], 42, ["onMouseenter", "onClick"])), [
              [vShow, unref(isTwoLengthShow)(index)]
            ]);
          }), 128))
        ], 2)) : createCommentVNode("v-if", true),
        props.motionBlur ? (openBlock(), createElementBlock("svg", {
          key: 3,
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          style: { "display": "none" }
        }, [
          createElementVNode("defs", null, [
            createElementVNode("filter", { id: "elCarouselHorizontal" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "12,0"
              })
            ]),
            createElementVNode("filter", { id: "elCarouselVertical" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "0,10"
              })
            ])
          ])
        ])) : createCommentVNode("v-if", true)
      ], 42, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "carousel.vue"]]);

const carouselItemProps = buildProps({
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: ""
  }
});

const useCarouselItem = (props) => {
  const carouselContext = inject(carouselContextKey);
  const instance = getCurrentInstance();
  const carouselItemRef = ref();
  const hover = ref(false);
  const translate = ref(0);
  const scale = ref(1);
  const active = ref(false);
  const ready = ref(false);
  const inStage = ref(false);
  const animating = ref(false);
  const { isCardType, isVertical, cardScale } = carouselContext;
  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index = carouselContext.items.value.findIndex(({ uid }) => uid === instance.uid);
      carouselContext.setActiveItem(index);
    }
  }
  return {
    carouselItemRef,
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick
  };
};

const __default__ = defineComponent({
  name: CAROUSEL_ITEM_NAME
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: carouselItemProps,
  setup(__props) {
    const ns = useNamespace("carousel");
    const {
      carouselItemRef,
      active,
      animating,
      hover,
      inStage,
      isVertical,
      translate,
      isCardType,
      scale,
      ready,
      handleItemClick
    } = useCarouselItem();
    const itemKls = computed(() => [
      ns.e("item"),
      ns.is("active", active.value),
      ns.is("in-stage", inStage.value),
      ns.is("hover", hover.value),
      ns.is("animating", animating.value),
      {
        [ns.em("item", "card")]: isCardType.value,
        [ns.em("item", "card-vertical")]: isCardType.value && isVertical.value
      }
    ]);
    const itemStyle = computed(() => {
      const translateType = `translate${unref(isVertical) ? "Y" : "X"}`;
      const _translate = `${translateType}(${unref(translate)}px)`;
      const _scale = `scale(${unref(scale)})`;
      const transform = [_translate, _scale].join(" ");
      return {
        transform
      };
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "carouselItemRef",
        ref: carouselItemRef,
        class: normalizeClass(unref(itemKls)),
        style: normalizeStyle(unref(itemStyle)),
        onClick: unref(handleItemClick)
      }, [
        unref(isCardType) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("mask"))
        }, null, 2)), [
          [vShow, !unref(active)]
        ]) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 14, ["onClick"])), [
        [vShow, unref(ready)]
      ]);
    };
  }
});
var CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "carousel-item.vue"]]);

const ElCarousel = withInstall(Carousel, {
  CarouselItem
});
const ElCarouselItem = withNoopInstall(CarouselItem);

const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAAXNSR0IB2cksfwAAABVQTFRFAAAAs7OzsLCwsbGx4uLi8/PzzMzMSE8jawAAAAd0Uk5TAFeSmczls8a1gvIAAABASURBVHicY2BUNgYBRQYGYWMIEGBQhrIUGKAMYwM0lgmcFQJjmTrDWCFwda5wlkkwXIcrnGWGZjLCXoRb4O4DAKpaHR7QIdWuAAAAAElFTkSuQmCC";

const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAAXNSR0IB2cksfwAAABVQTFRFAAAAs7OzsLCwsbGx4uLizMzM////W8wOXAAAAAd0Uk5TAFeSmcyz/1U+dZsAAABCSURBVHicY2BUNgYBRQYGYWMIEGBQhrIUGKAMYwNUlkkwjGWaCpcNC4axTJNhLBNnGMsFrtcZrhfdZIS9CLfA3QcA0wodgM6SAj8AAAAASUVORK5CYII=";

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "nav",
  __ssrInlineRender: true,
  setup(__props) {
    const carousel = ref(null);
    const handlePrev = (dir) => {
      if (dir === "left") {
        carousel.value.prev();
      } else {
        carousel.value.next();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_el_tooltip = ElTooltip;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "w-full h-[160px] bg-[#fff] rounded-[5px] p-[15px] gap-[15px] flex-start-center c-black" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        ref_key: "carousel",
        ref: carousel,
        class: "w-[230px] relative",
        height: "120px",
        interval: 5e3,
        arrow: "never",
        "indicator-position": "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="flex-start-center absolute gap-[6px] bottom-[10px] right-[15px] z-1"${_scopeId}><button class="h-1"${_scopeId}><img class="w-[17px] h-[17px]"${ssrRenderAttr("src", _imports_0$3)} alt="前一张"${_scopeId}></button><button class="h-1"${_scopeId}><img class="w-[17px] h-[17px]"${ssrRenderAttr("src", _imports_1)} alt="后一张"${_scopeId}></button></section><!--[-->`);
            ssrRenderList(unref(DEFINE_HOME_CAROUSEL), (img, i) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-full h-full"${ssrRenderAttr("src", img.img)} alt="广告轮播图"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-full h-full",
                        src: img.img,
                        alt: "广告轮播图"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("section", { class: "flex-start-center absolute gap-[6px] bottom-[10px] right-[15px] z-1" }, [
                createVNode("button", {
                  class: "h-1",
                  onClick: ($event) => handlePrev("left")
                }, [
                  createVNode("img", {
                    class: "w-[17px] h-[17px]",
                    src: _imports_0$3,
                    alt: "前一张"
                  })
                ], 8, ["onClick"]),
                createVNode("button", {
                  class: "h-1",
                  onClick: ($event) => handlePrev("right")
                }, [
                  createVNode("img", {
                    class: "w-[17px] h-[17px]",
                    src: _imports_1,
                    alt: "后一张"
                  })
                ], 8, ["onClick"])
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(DEFINE_HOME_CAROUSEL), (img, i) => {
                return openBlock(), createBlock(_component_el_carousel_item, { key: i }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-full h-full",
                      src: img.img,
                      alt: "广告轮播图"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="flex-between-center flex-wrap w-[calc(100%-230px)]"><!--[-->`);
      ssrRenderList(unref(DEFINE_HOME_NAV), (nav, i) => {
        _push(`<li class="${ssrRenderClass([[!nav.noBg ? "bg-[#E7F1FF]" : ""], "w-[calc((100%-15px)/4)] flex-start-center gap-[10px] p-[10px] rounded-[10px] mb-[2px] c-p transform-translate-z-0 transition hover-scale-101"])}"><button class="w-[30px] h-[30px] bg-[#D5E0FF] rounded-[10px] p-[6px]"><img class="w-full h-full"${ssrRenderAttr("src", nav.icon)} alt="导航栏图标"></button><div class="flex-column-start-start w-[calc(100%-50px)]"><p class="color-[#333] font-size-[16px] font-bold">${ssrInterpolate(nav.title)}</p>`);
        _push(ssrRenderComponent(_component_el_tooltip, {
          content: nav.remark,
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="w-full color-[#666] font-size-[12px] over-1"${_scopeId}>${ssrInterpolate(nav.remark)}</p>`);
            } else {
              return [
                createVNode("p", { class: "w-full color-[#666] font-size-[12px] over-1" }, toDisplayString(nav.remark), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/nav.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$b, { __name: "HomeNav" });

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "news1",
  __ssrInlineRender: true,
  setup(__props) {
    const newsList = ref([1, 2, 4]);
    const tabIndex = ref(0);
    const changeTabIndex = (index) => {
      tabIndex.value = index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_transition_move = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#fff] rounded-[5px] p-[15px] color-[#333]" }, _attrs))}><header class="flex-between-center font-size-[12px] color-[#999]"><aside class="flex-start-center font-size-[16px]">`);
      _push(ssrRenderComponent(_component_transition_move, {
        tabList: [{ label: "拟在建" }, { label: "招投标" }],
        color: "#2962FF",
        tabIndex: unref(tabIndex),
        onChangeTabIndex: changeTabIndex
      }, null, _parent));
      _push(`<p class="ml-[35px] font-size-[12px]"> 更新于${ssrInterpolate(unref(dataFliter)(/* @__PURE__ */ new Date(), "MM/DD : hh:mm"))}</p></aside><a class="color-[#666] h-1">查看全部</a></header><ul><!--[-->`);
      ssrRenderList(unref(newsList), (news, i) => {
        _push(`<li class="w-full font-size-[12px] mt-[10px] color-[#333]"><header class="font-size-[14px]">灵山雨污分流管网建设项目(一期)-湘桂、南站、体育馆、港泰城、光大片区雨污分流项目</header><nav class="flex-between-center color-[#666]"><aside class="flex-start-center gap-[10px] mt-[8px]"><button class="bg-[#A252FF] rounded-[2px] color-[#fff] pr-[6px] pl-[6px] pt-[2px] pb-[2px]">项目进展：报批立项</button><button class="bg-[#EAF3FF] rounded-[2px] pr-[6px] pl-[6px] pt-[2px] pb-[2px]">环保/市政/工业生产建筑</button><button class="bg-[#EAF3FF] rounded-[2px] pr-[6px] pl-[6px] pt-[2px] pb-[2px]">垃圾处理/厂房</button></aside><aside class="flex-start-center gap-[16px]"><p>内蒙古自治区-通辽市</p><p>${ssrInterpolate(unref(dataFliter)(/* @__PURE__ */ new Date(), "YYYY.MM.DD"))}</p></aside></nav><p class="color-[#666] mt-[10px]">相关产品：LED显示屏、防水材料、发电机组,等... ... <span class="color-[#FF6A36] ml-[10px]"> 查与我相关 + </span></p><footer class="flex-between-center"><p class="color-[#666] mt-[10px]"> 业主联系人 / 项目预算 <button class="bg-[#FFA761] rounded-[2px] color-[#fff] pr-[6px] pl-[6px] pt-[2px] pb-[2px] ml-[10px]">已人工核实 | 查联系方式</button></p><a class="color-[#128BED] h-1">项目详情</a></footer>`);
        if (i !== unref(newsList).length - 1) {
          _push(`<div class="h-[1px] mt-[15px] w-full bg-[#f3f3f3]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});

const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/news1.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$a, { __name: "HomeNews1" });

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "news2",
  __ssrInlineRender: true,
  setup(__props) {
    const newsList = ref([1, 2, 4]);
    const tabIndex = ref(0);
    const changeTabIndex = (index) => {
      tabIndex.value = index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_transition_move = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#fff] rounded-[5px] p-[15px] color-[#333]" }, _attrs))}><header class="flex-between-center font-size-[12px] color-[#999]"><aside class="flex-start-center font-size-[16px]">`);
      _push(ssrRenderComponent(_component_transition_move, {
        pageId: "news_id2_",
        tabList: [{ label: "新闻快讯" }, { label: "精选内容" }],
        color: "#ED3636",
        tabIndex: unref(tabIndex),
        onChangeTabIndex: changeTabIndex
      }, null, _parent));
      _push(`</aside></header><ul><!--[-->`);
      ssrRenderList(unref(newsList), (news, i) => {
        _push(`<li class="w-full font-size-12px mt-10px color-#333"><header class="font-size-16px">浙江同福特美刻股份有限公司审核问询回复</header><p class="font-size-14px mt-12px color-#999"> 近日，《新财富杂志》揭晓了2025年度新财富500创富榜单。字节跳动创始人张一鸣以4815.7亿元的持股估值首次登顶首富，较排名第二的农夫山泉创始人钟睒睒高出1200亿元。月活用户破1.8亿的DeepSeek，推动梁文锋以1846亿元持股估值跻身前十。此次榜单中，浙江杭州占据四席，北... </p><aside class="flex-start-center gap-10px mt-8px color-#47ABFC mt-8px"><button class="border border-color-#47ABFC rounded-2px pr-6px pl-6px pt-2px pb-2px">项目进展：报批立项</button><button class="border border-color-#47ABFC rounded-2px pr-6px pl-6px pt-2px pb-2px">环保/市政/工业生产建筑</button><button class="border border-color-#47ABFC rounded-2px pr-6px pl-6px pt-2px pb-2px">垃圾处理/厂房</button></aside>`);
        if (i !== unref(newsList).length - 1) {
          _push(`<div class="h-1px mt-15px w-full bg-#f3f3f3"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/news2.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$9, { __name: "HomeNews2" });

const _imports_0$2 = "" + __buildAssetsURL("industry-search.CRf8KIXt.png");

const _sfc_main$8 = {
  __name: "HomeIndustryResearch",
  __ssrInlineRender: true,
  setup(__props) {
    const industryItems = ref([1, 2, 4]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><header class="flex-between-center"><strong>找甲方 专业项目数据服务</strong></header><ul class="flex-between-center gap-[25px] mt-[30px]"><li class="w-[50%]"><p class="mb-[15px]">项目反查</p><img class="w-full h-[220px]"${ssrRenderAttr("src", _imports_0$2)} alt="项目反差"></li><li class="h-[253px] w-[1px] bg-[#F3F3F3]"></li><li class="w-[50%]"><p class="mb-[15px]">行业研究</p><ul class="flex-column-between-start h-[220px]"><!--[-->`);
      ssrRenderList(unref(industryItems), (item) => {
        _push(`<li class="flex-between-center gap-[10px]"><img class="w-[125px] h-[60px]"${ssrRenderAttr("src", _imports_0$2)} alt="项目反差"><div class="flex-column-start"><p class="font-size-[14px]">2025年建筑行业经济发展趋势及产业研究</p><footer class="w-full font-size-[12px] flex-between-center"><p class="color-[#666]">${ssrInterpolate(unref(dataFliter)(/* @__PURE__ */ new Date(), "YYYY.MM.DD hh.mm"))}</p><a class="color-[#2962FF] h-1">获取报告</a></footer></div></li>`);
      });
      _push(`<!--]--></ul></li></ul></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/industry-research.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _imports_0$1 = "" + __buildAssetsURL("distrct.COkSGere.png");

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "regional-project",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))} data-v-f6613d57><strong data-v-f6613d57>地区项目信息</strong><div class="flex-between-center" data-v-f6613d57><article class="w-[50%]" data-v-f6613d57><ul class="w-full flex-start-center flex-wrap mt-[25px]" data-v-f6613d57><!--[-->`);
      ssrRenderList(33, (d) => {
        _push(`<li class="min-w-[20%] flex-center-center mt-[10px] li-after font-size-[14px] hover-scale-101 transition c-p" data-v-f6613d57>${ssrInterpolate("北京")}</li>`);
      });
      _push(`<!--]--></ul></article><aside class="w-[50%] pl-[20px] pr-[20px]" data-v-f6613d57><ul class="w-full flex-wrap flex-between-center gap-[5px]" data-v-f6613d57><!--[-->`);
      ssrRenderList(8, (d) => {
        _push(`<li class="w-[calc((100%-20px)/2)] h-[58px] gap-[20px] hover-scale-101 transition c-p relative flex-center-center" data-v-f6613d57><img class="w-full h-full absolute left-0 top-0 z-0"${ssrRenderAttr("src", _imports_0$1)} alt="地区图" data-v-f6613d57><p class="color-[#fff] relative z-1" data-v-f6613d57>京津冀地区</p></li>`);
      });
      _push(`<!--]--></ul></aside></div></aside>`);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/regional-project.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-f6613d57"]]), { __name: "HomeRegionalProject" });

const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_el_popover = ElPopover;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-#333 font-size-16px" }, _attrs))}><strong>我的订阅</strong><ul class="mt-[20px] font-size-[14px]"><li>订阅地区：<button class="bg-[#E7F1FF] color-[#128BED] w-[157px] rounded-[2px]">选择</button></li><li class="mt-[20px]">行业选择：<button class="bg-[#E7F1FF] color-[#128BED] w-[157px] rounded-[2px]">选择</button></li></ul><button class="h-[30px] mt-[25px] font-size-[12px] bg-[#E7F1FF] color-[#128BED] w-full rounded-[2px]">进入我的工作台</button>`);
  _push(ssrRenderComponent(_component_el_popover, {
    width: 259,
    placement: "top",
    trigger: "hover",
    "popper-style": "background:#F0F3FF"
  }, {
    reference: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="h-[30px] mt-[6px] font-size-[12px] border border-[#128BED] color-[#128BED] w-full rounded-[2px]"${_scopeId}>下载APP</button>`);
      } else {
        return [
          createVNode("button", { class: "h-[30px] mt-[6px] font-size-[12px] border border-[#128BED] color-[#128BED] w-full rounded-[2px]" }, "下载APP")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<article class="flex-center-center p-[10px]"${_scopeId}><p class="flex-column-start color-[#333] font-size-[10px]"${_scopeId}><span${_scopeId}>扫描二维码</span><span class="mt-[5px]"${_scopeId}>下载“找甲方APP”</span><span class="mt-[20px]"${_scopeId}>或</span><span class="mt-[5px]"${_scopeId}>访问各大应用市场</span><span class="mt-[5px]"${_scopeId}>搜索“找甲方”</span></p><img class="w-[136px] h-[136px] ml-[10px]"${ssrRenderAttr("src", _imports_0$5)} alt="手机扫码二维码下载APP"${_scopeId}></article>`);
      } else {
        return [
          createVNode("article", { class: "flex-center-center p-[10px]" }, [
            createVNode("p", { class: "flex-column-start color-[#333] font-size-[10px]" }, [
              createVNode("span", null, "扫描二维码"),
              createVNode("span", { class: "mt-[5px]" }, "下载“找甲方APP”"),
              createVNode("span", { class: "mt-[20px]" }, "或"),
              createVNode("span", { class: "mt-[5px]" }, "访问各大应用市场"),
              createVNode("span", { class: "mt-[5px]" }, "搜索“找甲方”")
            ]),
            createVNode("img", {
              class: "w-[136px] h-[136px] ml-[10px]",
              src: _imports_0$5,
              alt: "手机扫码二维码下载APP"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</aside>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/subs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc$1(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]), { __name: "HomeSubs" });

const _imports_0 = "" + __buildAssetsURL("helper.BOw0w3xJ.png");

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-#333 font-size-16px" }, _attrs))}><header class="flex-between-center"><strong>项目小助手</strong><p class="font-size-[14px]">添加小助手，限时领取VIP</p></header><section class="mt-[14px] c-p"><img class="w-full"${ssrRenderAttr("src", _imports_0)} alt="项目小助手"></section></aside>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/helper.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc$1(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeHelper" });

const _sfc_main$4 = {
  __name: "HomeSocialMedia",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-#333 font-size-16px" }, _attrs))}><strong>社交媒体</strong><ul class="font-size-[12px] flex-start-center flex-wrap gap-[10px] mt-[15px] pb-[15px]"><!--[-->`);
      ssrRenderList(unref(DEFINE_HOME_SOCIAL), (social) => {
        _push(`<li class="w-[calc((100%-10px)/2)] h-[36px] bg-[#E8EFFF] rounded-[5px] p-[5px] flex-between-center pl-[10px] pr-[10px]"><img class="h-full"${ssrRenderAttr("src", social.icon)} alt="社交媒体渠道"><span class="flex-1 flex-center-center">${ssrInterpolate(social.title)}</span></li>`);
      });
      _push(`<!--]--></ul></aside>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/social-media.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "firm-lib",
  __ssrInlineRender: true,
  setup(__props) {
    const tabIndex = ref(0);
    const changeTabIndex = (index) => {
      tabIndex.value = index;
    };
    const firmLibs = ref([1, 2, 4, 5, 6]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_transition_move = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-#333 font-size-16px" }, _attrs))}><header class="flex-between-center"><strong>企业库</strong><aside class="flex-start-center font-size-[12px]">`);
      _push(ssrRenderComponent(_component_transition_move, {
        pageId: "news_id3_",
        tabList: [{ label: "业主单位" }, { label: "设计院" }, { label: "施工单位" }],
        color: "#128BED",
        tabIndex: unref(tabIndex),
        onChangeTabIndex: changeTabIndex
      }, null, _parent));
      _push(`</aside></header><ul class="mt-[15px]"><!--[-->`);
      ssrRenderList(unref(firmLibs), (cn, i) => {
        _push(`<li class="font-size-[12px]"><header class="flex-between-center"><p class="font-size-[14px]">西藏金龙矿业股份有限公司</p><a class="color-[#128BED] h-1">参与项目列表</a></header><footer class="flex-between-center mt-[5px]"><div class="flex-start-center"><button class="color-[#395EB0] border border-[#395EB0] rounded-[2px] pl-[10px] pr-[10px]"> 冶金矿产 </button><span class="color-[#666] ml-[15px]"> 西藏自治区 </span></div><span class="color-[#FA9D3B]">联系人：3人</span></footer>`);
        if (i !== unref(firmLibs).length - 1) {
          _push(`<div class="h-[1px] mt-[15px] mb-[15px] w-full bg-[#f3f3f3]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/firm-lib.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$3, { __name: "HomeFirmLib" });

const _sfc_main$2 = {
  __name: "HomeSupplyKeywords",
  __ssrInlineRender: true,
  setup(__props) {
    const keyword = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><header class="flex-between-center"><strong>供给关键词</strong><a class="font-size-[14px] color-[#128BED] h-1">查项目采供资源</a></header><nav class="mt-[12px]">`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(keyword),
        "onUpdate:modelValue": ($event) => isRef(keyword) ? keyword.value = $event : null,
        placeholder: "输入 我能提供的设备"
      }, null, _parent));
      _push(`</nav><section class="font-size-[14px] color-[#666] mt-[10px]"> 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 脚手架 电容器 变压箱 光缆 钢材 混凝土 玻璃幕墙 </section></aside>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/supply-keywords.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "free-use",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><header class="flex-between-center"><strong>免费试用</strong></header><nav class="mt-[20px]"><span class="font-size-[14px]">请拨打咨询电话： </span><span class="">158 2986 1786</span></nav></aside>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/free-use.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = Object.assign(_sfc_main$1, { __name: "HomeFreeUse" });

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_home_header = __nuxt_component_0;
  const _component_home_nav = __nuxt_component_1;
  const _component_home_news1 = __nuxt_component_2;
  const _component_home_news2 = __nuxt_component_3;
  const _component_home_industry_research = _sfc_main$8;
  const _component_home_regional_project = __nuxt_component_5;
  const _component_home_subs = __nuxt_component_6;
  const _component_home_helper = __nuxt_component_7;
  const _component_home_social_media = _sfc_main$4;
  const _component_home_firm_lib = __nuxt_component_9;
  const _component_home_supply_keywords = _sfc_main$2;
  const _component_home_free_use = __nuxt_component_11;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-bg" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_home_header, null, null, _parent));
  _push(`<main class="mt-[-38px] pb-[38px] flex-column-center"><section class="w-default">`);
  _push(ssrRenderComponent(_component_home_nav, null, null, _parent));
  _push(`<ul class="w-full flex-between-start mt-[10px] gap-[10px]"><li class="w-[752px]">`);
  _push(ssrRenderComponent(_component_home_news1, null, null, _parent));
  _push(ssrRenderComponent(_component_home_news2, { class: "mt-[10px]" }, null, _parent));
  _push(ssrRenderComponent(_component_home_industry_research, { class: "mt-[10px]" }, null, _parent));
  _push(ssrRenderComponent(_component_home_regional_project, { class: "mt-[10px]" }, null, _parent));
  _push(`</li><li class="flex-1">`);
  _push(ssrRenderComponent(_component_home_subs, null, null, _parent));
  _push(ssrRenderComponent(_component_home_helper, { class: "mt-[10px]" }, null, _parent));
  _push(ssrRenderComponent(_component_home_social_media, { class: "mt-[10px]" }, null, _parent));
  _push(ssrRenderComponent(_component_home_firm_lib, { class: "mt-[10px]" }, null, _parent));
  _push(ssrRenderComponent(_component_home_supply_keywords, { class: "mt-[10px]" }, null, _parent));
  _push(ssrRenderComponent(_component_home_free_use, { class: "mt-[10px]" }, null, _parent));
  _push(`</li></ul></section></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map

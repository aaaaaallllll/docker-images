import { E as ElPopover, _ as _imports_2, a as ElTooltip } from './xiaocx.png.mjs';
import { E as ElButton, u as useLocale, a as ElIcon } from './index.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, createTextVNode, useSSRContext, isVNode, shallowRef, getCurrentInstance, useSlots, computed, watch, provide, createElementBlock, openBlock, withModifiers, normalizeClass, createBlock, createCommentVNode, createElementVNode, Transition, withDirectives, vShow, normalizeStyle, renderSlot, Fragment, renderList, toDisplayString, inject, mergeProps, isRef } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0$6 } from './logo.png.mjs';
import { _ as _imports_1$2 } from './zhaojiafang.jpg.mjs';
import { c as useRouter, J as JUMP_OUTSIDE_LINK, i as isNumber, a as useNamespace } from './server.mjs';
import dayjs from 'dayjs';
import { D as DEFINE_HOME_TITLE, a as DEFINE_HOME_CAROUSEL, b as DEFINE_HOME_NAV, _ as __nuxt_component_3$1, c as DEFINE_HOME_SOCIAL } from './move.vue.mjs';
import { m as myFetch } from './myFetch.mjs';
import { b as buildProps, _ as _export_sfc, c as arrow_left_default, d as arrow_right_default, w as withInstall, e as withNoopInstall } from './icon.mjs';
import { throttle } from 'lodash-unified';
import { isArray, isString } from '@vue/shared';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper.mjs';
import { E as ElInput } from './index2.mjs';
import '@popperjs/core';
import './index3.mjs';
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

const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAAXNSR0IB2cksfwAAAA9QTFRFAAAA////////////////j0LeaAAAAAV0Uk5TACZNc5mysekVAAAAk0lEQVR4nDVP2wGDMAg8ogOkrQNozQDRZoBI2H+m8lA+yAWO4wCA1y7fDI8k4xR2SO3QXPwzX14qq6WbqaVkzdRWNKV47xQsFcXUBpY81aCztqnjF7hkuvTBXtnkWetpZE45sCpxLFgw18DdxNj3qebUSWQNQzSQNrPLj0Hg021mZD/ILyu80bvVsF5E5MAdtDnhD6itEo6cF2aCAAAAAElFTkSuQmCC";

const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWBAMAAADtIdsqAAAAAXNSR0IB2cksfwAAAA9QTFRFAAAA////////////////j0LeaAAAAAV0Uk5TACZNmXNW//kVAAAATklEQVR4nL2OwQ2AMAwDj8IAEV2gJEzQZIBKsP9MNIIZuNfJ9sMs5u7RoHZVPTvcJCYExQdrY4Yqn0z+EvN4pehBFaxldQmbJ7nc52eFB5dfC7dztoHKAAAAAElFTkSuQmCC";

const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMBAMAAABCcoqQAAAAAXNSR0IB2cksfwAAAA9QTFRFAAAA+XA4+nA3+3A4+nA3TakT2wAAAAV0Uk5TAID/QL86DWV/AAAAQ0lEQVR4nGNgEDJgAAIhZRDp4gQkGBWNnAwYjBxYlAQYhBiYVRwYFIGCCgwqYNKFgYFJgMFIgBmohlFJCaSNUZiBAQC53QT15XYj5AAAAABJRU5ErkJggg==";

const dataFliter = (val, format = "YYYY-MM-DD HH:mm:ss") => {
  if (!val) return "";
  return dayjs(val).format(format);
};

const pc_industry_list = async (params) => {
  return await myFetch("/pc_industry_list", params);
};
const api_nzj_nzjhot = async () => {
  return await myFetch("/api_nzj_nzjhot", {});
};
const pc_enterprise_library = async (params) => {
  return await myFetch("/pc_enterprise_library", params);
};

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const keyword = ref("");
    const HOME_HOTS = ref([]);
    const getHots = async () => {
      const nzj_nzjhot = await api_nzj_nzjhot();
      HOME_HOTS.value = nzj_nzjhot;
    };
    getHots();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_el_button = ElButton;
      _push(`<!--[--><header class="flex-center-center h-[38px] pt-[24px] main-bg"><nav class="w-default flex-between-center"><aside class="flex-start-center"><img class="w-[88px] h-[88px] ml-[25px]"${ssrRenderAttr("src", _imports_0$6)} alt="找甲方logo图"><ul class="flex-start-center color-[#fff] h-[38px] gap-[30px] rounded-[5px] overflow-hidden ml-[36px] pr-[30px] font-size-[16px] bg-[#A4BCFF4F]"><li class="bg-[#082B8D99] w-[191px] h-full flex-center-center"><section class="flex-center-center gap-[6px]"><p>${ssrInterpolate(unref(dataFliter)(/* @__PURE__ */ new Date(), "YYYY-MM-DD"))}</p><span>|</span><p>今日更新</p></section></li><!--[-->`);
      ssrRenderList(unref(DEFINE_HOME_TITLE), (mock, i) => {
        _push(`<li class="h-full flex-center-center">${ssrInterpolate(mock.title)}：${ssrInterpolate(mock.value)}</li>`);
      });
      _push(`<!--]--></ul></aside><ul class="flex-start-center gap-[25px] ml-[72px] color-[#FFFFFF99]"><li>`);
      _push(ssrRenderComponent(_component_el_popover, {
        placement: "bottom",
        trigger: "hover"
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-[20px] h-[20px] c-p"${ssrRenderAttr("src", _imports_1$1)} alt="微信小程序"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-[20px] h-[20px] c-p",
                src: _imports_1$1,
                alt: "微信小程序"
              })
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
      _push(`</li><label class="w-[1px] h-[19px] bg-[#FFFFFF99]"></label><li class="line-height-4">`);
      _push(ssrRenderComponent(_component_el_popover, {
        placement: "bottom",
        trigger: "hover"
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-[13px] h-[20px] c-p"${ssrRenderAttr("src", _imports_3)} alt="手机扫码二维码下载APP"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-[13px] h-[20px] c-p",
                src: _imports_3,
                alt: "手机扫码二维码下载APP"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="flex-column-center"${_scopeId}><label class="flex-center-center color-[#333] font-size-[10px]"${_scopeId}>下载找甲方APP</label><img class="w-[83px] h-[83px]"${ssrRenderAttr("src", _imports_1$2)} alt="手机扫码二维码下载APP"${_scopeId}></article>`);
          } else {
            return [
              createVNode("article", { class: "flex-column-center" }, [
                createVNode("label", { class: "flex-center-center color-[#333] font-size-[10px]" }, "下载找甲方APP"),
                createVNode("img", {
                  class: "w-[83px] h-[83px]",
                  src: _imports_1$2,
                  alt: "手机扫码二维码下载APP"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><label class="w-[1px] h-[19px] bg-[#FFFFFF99]"></label>`);
      _push(ssrRenderComponent(_component_el_button, {
        color: "#082B8D99",
        onClick: ($event) => unref(JUMP_OUTSIDE_LINK)("/subscrib/list")
      }, {
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
      _push(`</ul></nav></header><main class="flex-center-center h-[320px] main-bg"><aside class="w-default h-full flex-column-center"><h1 class="font-size-[32px] line-height-[48px] color-[#fff]"> 找项目 找商机 找人脉 就用找甲方 </h1><article class="mt-[44px] flex-start-center rounded-[10px] overflow-hidden"><input class="w-[507px] h-[53px] font-size-[18px] pl-[24px] color-[#333]" type="text" placeholder="输入关键词找项目"${ssrRenderAttr("value", unref(keyword))}><button class="w-[110px] h-[53px] font-size-[18px] bg-[#ED3636] color-[#fff]"> 搜索项目 </button></article><ul class="w-[617px] flex-start-center mt-[22px] font-size-[12px] color-[#fff]"><h6 class="flex-start-center min-w-[50px] h-1"><img class="w-7.5px h-[10px] mr-3.5px"${ssrRenderAttr("src", _imports_5)} alt="热搜">热搜： </h6><li class="over-1"><!--[-->`);
      ssrRenderList(unref(HOME_HOTS), (hot, i) => {
        _push(`<span class="ml-[10px]">${ssrInterpolate(hot)}</span>`);
      });
      _push(`<!--]--></li></ul></aside></main><!--]-->`);
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

const _imports_0$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAAXNSR0IB2cksfwAAABVQTFRFAAAAs7OzsLCwsbGx4uLi8/PzzMzMSE8jawAAAAd0Uk5TAFeSmczls8a1gvIAAABASURBVHicY2BUNgYBRQYGYWMIEGBQhrIUGKAMYwM0lgmcFQJjmTrDWCFwda5wlkkwXIcrnGWGZjLCXoRb4O4DAKpaHR7QIdWuAAAAAElFTkSuQmCC";

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
            _push2(`<section class="flex-start-center absolute gap-[6px] bottom-[10px] right-[15px] z-1"${_scopeId}><button class="h-1"${_scopeId}><img class="w-[17px] h-[17px]"${ssrRenderAttr("src", _imports_0$5)} alt="前一张"${_scopeId}></button><button class="h-1"${_scopeId}><img class="w-[17px] h-[17px]"${ssrRenderAttr("src", _imports_1)} alt="后一张"${_scopeId}></button></section><!--[-->`);
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
                    src: _imports_0$5,
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

const _imports_0$4 = "" + __buildAssetsURL("industry-search.CRf8KIXt.png");

const _imports_0$3 = "" + __buildAssetsURL("qiwei.Fg4v7Hhh.jpg");

const _sfc_main$8 = {
  __name: "HomeIndustryResearch",
  __ssrInlineRender: true,
  setup(__props) {
    const industryItems = ref([]);
    const getIndustryList = async () => {
      const res = await pc_industry_list();
      console.log("行业列表：", res);
      industryItems.value = res;
    };
    getIndustryList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><header class="flex-between-center"><strong>找甲方 专业项目数据服务</strong></header><ul class="flex-between-center gap-[25px] mt-[30px]"><li class="w-[50%]"><p class="mb-[15px]">项目反查</p><img class="w-full h-[220px]"${ssrRenderAttr("src", _imports_0$4)} alt="项目反差"></li><li class="h-[253px] w-[1px] bg-[#F3F3F3]"></li><li class="w-[50%]"><p class="mb-[15px]">行业研究</p><ul class="flex-column-between-start h-[220px] overflow-x-hidden overflow-y-auto gap-[20px]"><!--[-->`);
      ssrRenderList(unref(industryItems), (item) => {
        _push(`<li class="flex-between-center gap-[10px]"><img class="w-[125px] h-[60px]"${ssrRenderAttr("src", _imports_0$4)} alt="项目反差"><div class="flex-column-start"><p class="font-size-[14px]"> 2025年建筑行业经济发展趋势及产业研究 </p><footer class="w-full font-size-[12px] flex-between-center"><p class="color-[#666]">${ssrInterpolate(unref(dataFliter)(/* @__PURE__ */ new Date(), "YYYY.MM.DD hh.mm"))}</p>`);
        _push(ssrRenderComponent(_component_el_popover, {
          width: 320,
          placement: "top",
          trigger: "click",
          "popper-style": "background:#F0F3FF"
        }, {
          reference: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="color-[#2962FF] h-1"${_scopeId}>获取报告</a>`);
            } else {
              return [
                createVNode("a", { class: "color-[#2962FF] h-1" }, "获取报告")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<article class="flex-center-center p-[10px]"${_scopeId}><p class="flex-column-start"${_scopeId}><span class="color-[#2962FF] font-size-[16px]"${_scopeId}>添加小助理企业微信 <br${_scopeId}>获取报告原文</span><span class="mt-[17px] font-size-[12px] color-[#999]"${_scopeId}> 不定期分享最新报告<br${_scopeId}>招标政策以及项目信息 </span></p><img class="w-[108px] h-[108px] ml-[20px]"${ssrRenderAttr("src", _imports_0$3)} alt="扫码添加小助理企业微信"${_scopeId}></article>`);
            } else {
              return [
                createVNode("article", { class: "flex-center-center p-[10px]" }, [
                  createVNode("p", { class: "flex-column-start" }, [
                    createVNode("span", { class: "color-[#2962FF] font-size-[16px]" }, [
                      createTextVNode("添加小助理企业微信 "),
                      createVNode("br"),
                      createTextVNode("获取报告原文")
                    ]),
                    createVNode("span", { class: "mt-[17px] font-size-[12px] color-[#999]" }, [
                      createTextVNode(" 不定期分享最新报告"),
                      createVNode("br"),
                      createTextVNode("招标政策以及项目信息 ")
                    ])
                  ]),
                  createVNode("img", {
                    class: "w-[108px] h-[108px] ml-[20px]",
                    src: _imports_0$3,
                    alt: "扫码添加小助理企业微信"
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</footer></div></li>`);
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

const _imports_0$2 = "" + __buildAssetsURL("distrct.COkSGere.png");

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "regional-project",
  __ssrInlineRender: true,
  setup(__props) {
    const areaList = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))} data-v-a580c305><strong data-v-a580c305>地区项目信息</strong><div class="flex-between-start" data-v-a580c305><article class="w-[50%]" data-v-a580c305><ul class="w-full flex-start-center flex-wrap mt-[25px] gap-[10px]" data-v-a580c305><!--[-->`);
      ssrRenderList(unref(areaList), (d) => {
        _push(`<li class="flex-center-center mt-[10px] li-after font-size-[14px] hover-scale-101 transition c-p relative" data-v-a580c305>${ssrInterpolate(d)} <span class="absolute right-[-5px] w-[1px] h-[80%] bg-[#ccc]" data-v-a580c305></span></li>`);
      });
      _push(`<!--]--></ul></article><aside class="w-[50%] pl-[20px] pr-[20px]" data-v-a580c305><ul class="w-full flex-wrap flex-between-center gap-[5px]" data-v-a580c305><!--[-->`);
      ssrRenderList(8, (d) => {
        _push(`<li class="w-[calc((100%-20px)/2)] h-[58px] gap-[20px] hover-scale-101 transition c-p relative flex-center-center" data-v-a580c305><img class="w-full h-full absolute left-0 top-0 z-0"${ssrRenderAttr("src", _imports_0$2)} alt="地区图" data-v-a580c305><p class="color-[#fff] relative z-1" data-v-a580c305>京津冀地区</p></li>`);
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
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-a580c305"]]), { __name: "HomeRegionalProject" });

const _imports_0$1 = "" + __buildAssetsURL("app.BO3sge6q.png");

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "subs",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><strong>我的订阅</strong><ul class="mt-[20px] font-size-[14px]"><li> 订阅地区：<button class="bg-[#E7F1FF] color-[#128BED] w-[157px] rounded-[2px]"> 选择 </button></li><li class="mt-[20px]"> 行业选择：<button class="bg-[#E7F1FF] color-[#128BED] w-[157px] rounded-[2px]"> 选择 </button></li></ul><button class="h-[30px] mt-[25px] font-size-[12px] bg-[#E7F1FF] color-[#128BED] w-full rounded-[2px]"> 进入我的工作台 </button>`);
      _push(ssrRenderComponent(_component_el_popover, {
        width: 289,
        placement: "top",
        trigger: "hover",
        "popper-style": "background:#F0F3FF"
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="h-[30px] mt-[6px] font-size-[12px] border border-[#128BED] color-[#128BED] w-full rounded-[2px]"${_scopeId}> 下载APP </button>`);
          } else {
            return [
              createVNode("button", { class: "h-[30px] mt-[6px] font-size-[12px] border border-[#128BED] color-[#128BED] w-full rounded-[2px]" }, " 下载APP ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="flex-center-center p-[10px]"${_scopeId}><p class="flex-column-start color-[#333] font-size-[10px]"${_scopeId}><span${_scopeId}>扫描二维码</span><span class="mt-[5px]"${_scopeId}>下载“找甲方APP”</span><span class="mt-[20px]"${_scopeId}>或</span><span class="mt-[5px]"${_scopeId}>访问各大应用市场</span><span class="mt-[5px]"${_scopeId}>搜索“找甲方”</span></p><img class="w-[136px] h-[136px] ml-[10px]"${ssrRenderAttr("src", _imports_0$1)} alt="手机扫码二维码下载APP"${_scopeId}></article>`);
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
                  src: _imports_0$1,
                  alt: "手机扫码二维码下载APP"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside>`);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/subs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$6, { __name: "HomeSubs" });

const _imports_0 = "" + __buildAssetsURL("helper.BOw0w3xJ.png");

const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-#333 font-size-16px" }, _attrs))}><header class="flex-between-center"><strong>项目小助手</strong><p class="font-size-[14px]">添加小助手，限时领取VIP</p></header><section class="mt-[14px] c-p"><img class="w-full"${ssrRenderAttr("src", _imports_0)} alt="项目小助手"></section></aside>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/helper.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc$1(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]), { __name: "HomeHelper" });

const _sfc_main$4 = {
  __name: "HomeSocialMedia",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><strong>社交媒体</strong><ul class="font-size-[12px] flex-start-center flex-wrap gap-[10px] mt-[15px] pb-[15px]"><!--[-->`);
      ssrRenderList(unref(DEFINE_HOME_SOCIAL), (social) => {
        _push(`<li class="w-[calc((100%-10px)/2)] h-[36px] bg-[#E8EFFF] rounded-[5px] p-[5px] flex-between-center pl-[10px] pr-[10px] h-1"><img class="h-full"${ssrRenderAttr("src", social.icon)} alt="社交媒体渠道">`);
        if (!social.app_scan) {
          _push(`<span class="flex-1 flex-center-center">${ssrInterpolate(social.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (social.app_scan) {
          _push(ssrRenderComponent(_component_el_popover, {
            placement: "bottom",
            trigger: "hover"
          }, {
            reference: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="flex-1 flex-center-center"${_scopeId}>${ssrInterpolate(social.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "flex-1 flex-center-center" }, toDisplayString(social.title), 1)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<article class="flex-column-center"${_scopeId}><label class="flex-center-center color-[#333] font-size-[10px]"${_scopeId}>使用${ssrInterpolate(social.title)}APP扫码</label><img class="w-[83px] h-[83px]"${ssrRenderAttr("src", social.app_scan)} alt="手机APP下载"${_scopeId}></article>`);
              } else {
                return [
                  createVNode("article", { class: "flex-column-center" }, [
                    createVNode("label", { class: "flex-center-center color-[#333] font-size-[10px]" }, "使用" + toDisplayString(social.title) + "APP扫码", 1),
                    createVNode("img", {
                      class: "w-[83px] h-[83px]",
                      src: social.app_scan,
                      alt: "手机APP下载"
                    }, null, 8, ["src"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
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
    const firmLibs = ref([]);
    const getFirmLib = async () => {
      const res = await pc_enterprise_library({
        // qy_type: tabIndex.value + 1 + "",
        page: 1,
        pageSize: 5
      });
      console.log("企业列表:", res);
      firmLibs.value = res;
    };
    getFirmLib();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_transition_move = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><header class="flex-between-center"><strong>企业库</strong><aside class="flex-start-center font-size-[12px]">`);
      _push(ssrRenderComponent(_component_transition_move, {
        pageId: "news_id3_",
        tabList: [
          { label: "业主单位" },
          { label: "设计院" },
          { label: "施工单位" }
        ],
        color: "#128BED",
        tabIndex: unref(tabIndex),
        onChangeTabIndex: changeTabIndex
      }, null, _parent));
      _push(`</aside></header><ul class="mt-[15px] h-[400px] overflow-y-auto overflow-x-hidden"><!--[-->`);
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] rounded-[5px] p-[15px] color-[#333] font-size-[16px]" }, _attrs))}><header class="flex-between-center"><strong>免费试用</strong></header><nav class="mt-[20px]"><span class="font-size-[14px]">请拨打咨询电话： </span><span class="">158 2986 1786</span></nav><p class="flex-start-center color-[#999] mt-[35px] mb-[40px] font-size-[14px]"> 或扫码关注 <img class="w-[108px] h-[108px] ml-[20px]"${ssrRenderAttr("src", _imports_0$3)} alt="扫码添加小助理企业微信"></p></aside>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/free-use.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ Object.assign(_export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeFreeUse" });

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

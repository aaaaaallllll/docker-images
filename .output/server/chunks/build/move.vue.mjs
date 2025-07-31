import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { p as pick } from './index2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const home_carousel_img1 = "" + __buildAssetsURL("guanggao0.Bkz80xw3.png");

const home_carousel_img2 = "" + __buildAssetsURL("guanggao0.Bkz80xw3.png");

const icon_nizaijianxiangmu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3cpath%20stroke-linejoin='round'%20stroke-width='4'%20stroke='%23333'%20d='M18%206H8a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h10a2%202%200%200%200%202-2V8a2%202%200%200%200-2-2ZM18%2028H8a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h10a2%202%200%200%200%202-2V30a2%202%200%200%200-2-2ZM40%206H30a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h10a2%202%200%200%200%202-2V8a2%202%200%200%200-2-2ZM40%2028H30a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h10a2%202%200%200%200%202-2V30a2%202%200%200%200-2-2Z'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_guoshenxiangmu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3cpath%20stroke-width='4'%20stroke='%23333'%20d='M5%2037a2%202%200%200%201%202-2h34a2%202%200%200%201%202%202v5a2%202%200%200%201-2%202H7a2%202%200%200%201-2-2v-5Z'%20data-follow-stroke='%23333'/%3e%3cpath%20stroke-width='4'%20stroke='%23333'%20d='M5%2031a2%202%200%200%201%202-2h34a2%202%200%200%201%202%202v11a2%202%200%200%201-2%202H7a2%202%200%200%201-2-2V31Z'%20data-follow-stroke='%23333'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M18.763%2015.664a1%201%200%200%201%20.942-.664h8.59a1%201%200%200%201%20.942.664L34%2029H14l4.763-13.336Z'%20data-follow-stroke='%23333'/%3e%3crect%20stroke-width='4'%20stroke='%23333'%20rx='5.4'%20height='10.8'%20width='18'%20y='4'%20x='15'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_yezhudanwei = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='m17%2014%2027%2010v20H17V14Z'%20clip-rule='evenodd'%20data-follow-stroke='%23333'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M17%2014%204%2024v20h13M35%2044V32l-9-3v15M44%2044H17'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_dingyuechaxun = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M11%2016v26M24%2029v13M24%2019V6M37%206v26'%20data-follow-stroke='%23333'/%3e%3cpath%20stroke-linejoin='round'%20stroke-width='4'%20stroke='%23333'%20d='M11%2016a5%205%200%201%200%200-10%205%205%200%200%200%200%2010ZM24%2029a5%205%200%201%200%200-10%205%205%200%200%200%200%2010ZM37%2042a5%205%200%201%200%200-10%205%205%200%200%200%200%2010Z'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_zhaotoubiaoxinxi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M4%2024c0%2011.046%208.954%2020%2020%2020v0c11.046%200%2020-8.954%2020-20S35.046%204%2024%204'%20data-follow-stroke='%23333'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M36%2024c0-6.627-5.373-12-12-12s-12%205.373-12%2012%205.373%2012%2012%2012v0'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_zhongbiaochaxun = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3ccircle%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20r='20'%20cy='24'%20cx='24'%20data-follow-stroke='%23333'/%3e%3cpath%20d='M24%2037v7-7Z'%20clip-rule='evenodd'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M24%2037v7'%20data-follow-stroke='%23333'/%3e%3cpath%20d='M36%2024h8-8Z'%20clip-rule='evenodd'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M36%2024h8'%20data-follow-stroke='%23333'/%3e%3cpath%20d='M4%2024h7-7Z'%20clip-rule='evenodd'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M4%2024h7'%20data-follow-stroke='%23333'/%3e%3cpath%20d='M24%2011V4v7Z'%20clip-rule='evenodd'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M24%2011V4'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_xiangmuhecha = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3cpath%20stroke-linejoin='round'%20stroke-width='4'%20stroke='%23333'%20d='M21%2038c9.389%200%2017-7.611%2017-17S30.389%204%2021%204%204%2011.611%204%2021s7.611%2017%2017%2017Z'%20data-follow-stroke='%23333'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M26.657%2014.343A7.975%207.975%200%200%200%2021%2012c-2.209%200-4.209.895-5.657%202.343M33.222%2033.222l8.485%208.485'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_diqubiaoxun = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2048%2048'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='M17%2012%204%206v30l13%206%2014-6%2013%206V12L31%206l-14%206ZM31%206v30M17%2012v30'%20data-follow-stroke='%23333'/%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-width='4'%20stroke='%23333'%20d='m10.5%209%206.5%203%2014-6%206.5%203M10.5%2039l6.5%203%2014-6%206.5%203'%20data-follow-stroke='%23333'/%3e%3c/svg%3e";

const icon_douyin = "" + __buildAssetsURL("douyin.FvlnG-Ad.svg");

const app_douyin = "" + __buildAssetsURL("douyin.BK-2Km0M.png");

const icon_shipinghao = "" + __buildAssetsURL("shipinghao.BLI0lqWC.svg");

const app_shipinghao = "" + __buildAssetsURL("shipinghao.Cwyau0WR.png");

const icon_jinritoutiao = "" + __buildAssetsURL("toutiao.D2Me-PZB.svg");

const icon_xiaohongshu = "" + __buildAssetsURL("xiaohongshu.C0k5ueMe.svg");

const app_xiaohongshu = "" + __buildAssetsURL("xiaohongshu.FnjENNNB.png");

const DEFINE_HOME_TITLE = [
  {
    title: "拟在建",
    value: "10000"
  },
  {
    title: "招投标",
    value: "10000"
  }
];
const DEFINE_HOME_CAROUSEL = [
  {
    img: home_carousel_img1
  },
  {
    img: home_carousel_img2
  }
];
const DEFINE_HOME_NAV = [
  {
    title: "拟在建项目",
    remark: "精准全国拟建、在建项目库123123123xxx精准全国拟建、在建项目库",
    icon: icon_nizaijianxiangmu,
    url: "/message/nzj"
  },
  {
    title: "过审项目",
    remark: "最新获批项目，直击源头",
    icon: icon_guoshenxiangmu,
    url: "/message/pf"
  },
  {
    title: "业主单位",
    remark: "业主单位  设计院  施工单位",
    icon: icon_yezhudanwei,
    url: "/company/company/1"
  },
  {
    title: "订阅查询",
    remark: "个性化精准订阅查询信息",
    icon: icon_dingyuechaxun,
    url: "/subscrib/list"
  },
  {
    title: "招投标信息",
    remark: "每日更新全国招投标信息",
    icon: icon_zhaotoubiaoxinxi,
    noBg: true,
    url: "/message/ztb"
  },
  {
    title: "中标查询",
    remark: "实时中标信息及企业查询",
    icon: icon_zhongbiaochaxun,
    url: "/message/zb"
  },
  {
    title: "项目核查",
    remark: "1v1人工核验项目信息",
    icon: icon_xiangmuhecha,
    url: "/message/pf"
  },
  {
    title: "地区标讯",
    remark: "地区项目和招投标信息",
    icon: icon_diqubiaoxun,
    noBg: true
  }
];
const DEFINE_HOME_SOCIAL = [
  {
    title: "抖音",
    icon: icon_douyin,
    app_scan: app_douyin
  },
  {
    title: "视频号",
    icon: icon_shipinghao,
    app_scan: app_shipinghao
  },
  {
    title: "今日头条",
    icon: icon_jinritoutiao,
    app_scan: null
  },
  {
    title: "小红书",
    icon: icon_xiaohongshu,
    app_scan: app_xiaohongshu
  }
];

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "move",
  __ssrInlineRender: true,
  props: {
    tabList: {
      type: Array,
      default: () => []
    },
    tabIndex: {
      type: Number,
      default: () => 0
    },
    color: {
      type: String,
      default: () => ""
    },
    label: {
      type: String,
      default: () => "label"
    },
    pageId: {
      type: String,
      default: () => "news_id_"
    }
  },
  emits: ["changeTabIndex"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const tabsList = props.tabList;
    ref(null);
    const activeTab = ref(props.tabIndex);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs gap-[30px]" }, _attrs))} data-v-d987b8b2><!--[-->`);
      ssrRenderList(unref(tabsList), (item, tabI) => {
        _push(`<div class="${ssrRenderClass([{ active: tabI === unref(activeTab) }, "tab color-[#333] font-bold flex-start-center gap-[30px] c-p"])}"${ssrRenderAttr("data-tab", __props.pageId + tabI)} data-v-d987b8b2>${ssrInterpolate(unref(pick)(item, __props.label))}</div>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle({ "background-color": __props.color })}" class="tab-underline" data-v-d987b8b2></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transition/move.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-d987b8b2"]]), { __name: "TransitionMove" });

export { DEFINE_HOME_TITLE as D, __nuxt_component_3 as _, DEFINE_HOME_CAROUSEL as a, DEFINE_HOME_NAV as b, DEFINE_HOME_SOCIAL as c };
//# sourceMappingURL=move.vue.mjs.map

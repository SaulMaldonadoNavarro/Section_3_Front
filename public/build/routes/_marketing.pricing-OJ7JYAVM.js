import {
  FaHandshake,
  FaTrophy
} from "/build/_shared/chunk-JM2CCGXS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-UK5NTJ6J.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\marketing\\\\PricingPlan.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\marketing\\PricingPlan.jsx"
  );
  import.meta.hot.lastModified = "1690988557599.3623";
}
function PricingPlan({
  title,
  price,
  perks,
  icon
}) {
  const Icon = icon;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {}, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: title }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: price }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: perk }, perk, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 38,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = PricingPlan;
var PricingPlan_default = PricingPlan;
var _c;
$RefreshReg$(_c, "PricingPlan");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_marketing.pricing.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_marketing.pricing.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_marketing.pricing.jsx"
  );
  import.meta.hot.lastModified = "1690988557599.3623";
}
var PRICING_PLANS = [{
  id: "p1",
  title: "Basic",
  price: "Free forever",
  perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
  icon: FaHandshake
}, {
  id: "p2",
  title: "Pro",
  price: "$9.99/month",
  perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
  icon: FaTrophy
}];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, false, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PricingPlan_default, { title: plan.title, price: plan.price, perks: plan.perks, icon: plan.icon }, void 0, false, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, plan.id, false, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 40,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_marketing.pricing.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = PricingPage;
function meta() {
}
var _c2;
$RefreshReg$(_c2, "PricingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PricingPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_marketing.pricing-OJ7JYAVM.js.map

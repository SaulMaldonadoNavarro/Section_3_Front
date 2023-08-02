import {
  Logo_default
} from "/build/_shared/chunk-7YAUSRDO.js";
import {
  Link,
  NavLink,
  Outlet
} from "/build/_shared/chunk-LWBGD6IB.js";
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

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\navigation\\\\MainHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\navigation\\MainHeader.jsx"
  );
  import.meta.hot.lastModified = "1690988557599.3623";
}
function MainHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/pricing", children: "Pricing" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth", className: "cta", children: "Login" }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = MainHeader;
var MainHeader_default = MainHeader;
var _c;
$RefreshReg$(_c, "MainHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_marketing.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_marketing.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_marketing.jsx"
  );
}
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Hi from mkt file" }, void 0, false, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainHeader_default, {}, void 0, false, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_marketing.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = MarketingLayout;
function links() {
  return [{
    rel: "stylesheet",
    href: marketing_default
  }];
}
var _c2;
$RefreshReg$(_c2, "MarketingLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MarketingLayout as default,
  links
};
//# sourceMappingURL=/build/routes/_marketing-M2ECQGB7.js.map

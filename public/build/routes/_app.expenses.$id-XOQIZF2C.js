import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-QPBQLXSP.js";
import {
  useLoaderData,
  useNavigate
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

// app/routes/_app.expenses.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_app.expenses.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_app.expenses.$id.jsx"
  );
  import.meta.hot.lastModified = "1691017155562.1555";
}
function UpdateExpensesPage() {
  _s();
  const navigate = useNavigate();
  useLoaderData();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/_app.expenses.$id.jsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/_app.expenses.$id.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(UpdateExpensesPage, "9yrXEKMyyxEj91G2J4fd1HyzJKY=", false, function() {
  return [useNavigate, useLoaderData];
});
_c = UpdateExpensesPage;
var _c;
$RefreshReg$(_c, "UpdateExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UpdateExpensesPage as default
};
//# sourceMappingURL=/build/routes/_app.expenses.$id-XOQIZF2C.js.map

import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-QPBQLXSP.js";
import {
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/data/expenses.server
var require_expenses = __commonJS({
  "empty-module:~/data/expenses.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/data/validation.server
var require_validation = __commonJS({
  "empty-module:~/data/validation.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_app.expenses.add.jsx
var import_node = __toESM(require_node());
var import_expenses = __toESM(require_expenses());
var import_validation = __toESM(require_validation());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_app.expenses.add.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_app.expenses.add.jsx"
  );
  import.meta.hot.lastModified = "1691004397566.026";
}
function AddExpensesPage() {
  _s();
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/_app.expenses.add.jsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_app.expenses.add.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(AddExpensesPage, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = AddExpensesPage;
var _c;
$RefreshReg$(_c, "AddExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddExpensesPage as default
};
//# sourceMappingURL=/build/routes/_app.expenses.add-RVLAU2B4.js.map

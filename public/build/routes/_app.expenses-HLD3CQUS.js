import {
  FaDownload,
  FaPlus
} from "/build/_shared/chunk-JM2CCGXS.js";
import {
  Link,
  Outlet,
  useLoaderData
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

// empty-module:../data/expenses.server
var require_expenses = __commonJS({
  "empty-module:../data/expenses.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/expenses/ExpenseListItem.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ExpenseListItem.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ExpenseListItem.jsx"
  );
  import.meta.hot.lastModified = "1691015053406.6992";
}
function ExpenseListItem({
  id,
  title,
  amount
}) {
  function deleteExpenseItemHandler() {
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: id, children: "Edit" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = ExpenseListItem;
var ExpenseListItem_default = ExpenseListItem;
var _c;
$RefreshReg$(_c, "ExpenseListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ExpensesList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ExpensesList.jsx"
  );
  import.meta.hot.lastModified = "1690988557583.737";
}
function ExpensesList({
  expenses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExpenseListItem_default, { id: expense.id, title: expense.title, amount: expense.amount }, void 0, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 27,
    columnNumber: 11
  }, this) }, expense.id, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 26,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = ExpensesList;
var ExpensesList_default = ExpensesList;
var _c2;
$RefreshReg$(_c2, "ExpensesList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_app.expenses.jsx
var import_expenses = __toESM(require_expenses());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_app.expenses.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_app.expenses.jsx"
  );
  import.meta.hot.lastModified = "1691012314028.5085";
}
var DUMMY_EXPENSES = [{
  id: "e1",
  title: "First Expense",
  amount: 12.99,
  date: (/* @__PURE__ */ new Date()).toISOString()
}, {
  id: "e2",
  title: "Second Expense",
  amount: 16.99,
  date: (/* @__PURE__ */ new Date()).toISOString()
}];
function ExpensesPage() {
  _s();
  const expenses = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_app.expenses.jsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Expenses Page Father" }, void 0, false, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaPlus, {}, void 0, false, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 48,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Add Expense" }, void 0, false, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 50,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 47,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaDownload, {}, void 0, false, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 52,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "expenses.raw", children: "Load Raw Data" }, void 0, false, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 53,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExpensesList_default, { expenses }, void 0, false, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.expenses.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.expenses.jsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(ExpensesPage, "ChyLtWFpt7aA8dCzrR5yXcvzSMw=", false, function() {
  return [useLoaderData];
});
_c3 = ExpensesPage;
var _c3;
$RefreshReg$(_c3, "ExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ExpensesPage as default
};
//# sourceMappingURL=/build/routes/_app.expenses-HLD3CQUS.js.map

import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-UK5NTJ6J.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/expenses/ExpenseStatistics.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ExpenseStatistics.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ExpenseStatistics.jsx"
  );
  import.meta.hot.lastModified = "1690988557583.737";
}
function calculateSummaryStatistics(expenses) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;
  return {
    minAmount,
    maxAmount,
    sum,
    mean
  };
}
function ExpenseStatistics({
  expenses
}) {
  _s();
  const {
    minAmount,
    maxAmount,
    sum,
    mean
  } = (0, import_react.useMemo)(() => calculateSummaryStatistics(expenses), [expenses]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, false, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Total" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Average" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: " Min. Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Max. Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(ExpenseStatistics, "p2xC83GiILF2qC9FD1C02JEZGaY=");
_c = ExpenseStatistics;
var ExpenseStatistics_default = ExpenseStatistics;
var _c;
$RefreshReg$(_c, "ExpenseStatistics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ChartBar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ChartBar.jsx"
  );
  import.meta.hot.lastModified = "1690988557583.737";
}
var ChartBar = ({
  maxValue,
  value,
  label
}) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round(value / maxValue * 100) + "%";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar--fill", style: {
      height: barFillHeight
    } }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c2 = ChartBar;
var ChartBar_default = ChartBar;
var _c2;
$RefreshReg$(_c2, "ChartBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\Chart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\Chart.jsx"
  );
  import.meta.hot.lastModified = "1690988557583.737";
}
function Chart({
  expenses
}) {
  const chartDataPoints = [{
    label: "Jan",
    value: 0
  }, {
    label: "Feb",
    value: 0
  }, {
    label: "Mar",
    value: 0
  }, {
    label: "Apr",
    value: 0
  }, {
    label: "May",
    value: 0
  }, {
    label: "Jun",
    value: 0
  }, {
    label: "Jul",
    value: 0
  }, {
    label: "Aug",
    value: 0
  }, {
    label: "Sep",
    value: 0
  }, {
    label: "Oct",
    value: 0
  }, {
    label: "Nov",
    value: 0
  }, {
    label: "Dec",
    value: 0
  }];
  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ChartBar_default, { value: dataPoint.value, maxValue: totalMaximum, label: dataPoint.label }, dataPoint.label, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 71,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_c3 = Chart;
var Chart_default = Chart;
var _c3;
$RefreshReg$(_c3, "Chart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_app.expenses_.analysis.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_app.expenses_.analysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_app.expenses_.analysis.jsx"
  );
  import.meta.hot.lastModified = "1690988557599.3623";
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
function ExpensesAnalysisPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Chart_default, { expenses: DUMMY_EXPENSES }, void 0, false, {
      fileName: "app/routes/_app.expenses_.analysis.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ExpenseStatistics_default, { expenses: DUMMY_EXPENSES }, void 0, false, {
      fileName: "app/routes/_app.expenses_.analysis.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.expenses_.analysis.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c4 = ExpensesAnalysisPage;
var _c4;
$RefreshReg$(_c4, "ExpensesAnalysisPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ExpensesAnalysisPage as default
};
//# sourceMappingURL=/build/routes/_app.expenses_.analysis-4KFXZGOU.js.map

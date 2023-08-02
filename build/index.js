var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-GGRRQU2L.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap", rel: "stylesheet" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}

// app/routes/_app.expenses_.analysis.jsx
var app_expenses_analysis_exports = {};
__export(app_expenses_analysis_exports, {
  default: () => ExpensesAnalysisPage
});

// app/components/expenses/ExpenseStatistics.jsx
var import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function calculateSummaryStatistics(expenses) {
  let amounts = expenses.map((expense) => +expense.amount), maxAmount = Math.max(...amounts), minAmount = Math.min(...amounts), sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0), mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  let { minAmount, maxAmount, sum, mean } = (0, import_react3.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: "Total" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: "Average" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: " Min. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: "Max. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var ExpenseStatistics_default = ExpenseStatistics;

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  return maxValue > 0 && (barFillHeight = Math.round(value / maxValue * 100) + "%"), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      },
      void 0,
      !1,
      {
        fileName: "app/components/expenses/ChartBar.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, ChartBar_default = ChartBar;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Chart({ expenses }) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (let expense of expenses) {
    let expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value), totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      ChartBar_default,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label,
      !1,
      {
        fileName: "app/components/expenses/Chart.jsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var Chart_default = Chart;

// app/routes/_app.expenses_.analysis.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 16.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  }
];
function ExpensesAnalysisPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Chart_default, { expenses: DUMMY_EXPENSES }, void 0, !1, {
      fileName: "app/routes/_app.expenses_.analysis.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExpenseStatistics_default, { expenses: DUMMY_EXPENSES }, void 0, !1, {
      fileName: "app/routes/_app.expenses_.analysis.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.expenses_.analysis.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this);
}

// app/routes/_marketing.pricing.jsx
var marketing_pricing_exports = {};
__export(marketing_pricing_exports, {
  default: () => PricingPage,
  meta: () => meta
});
var import_fa = require("react-icons/fa");

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function PricingPlan({ title, price, perks, icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(icon, {}, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 7,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: title }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: price }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: perk }, perk, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var PricingPlan_default = PricingPlan;

// app/routes/_marketing.pricing.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: import_fa.FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: import_fa.FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      PricingPlan_default,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_marketing.pricing.jsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    ) }, plan.id, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing.pricing.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function meta() {
}

// app/routes/_app.expenses.$id.jsx
var app_expenses_id_exports = {};
__export(app_expenses_id_exports, {
  default: () => UpdateExpensesPage
});
var import_react5 = require("@remix-run/react");

// app/components/expenses/ExpenseForm.jsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ExpenseForm() {
  let today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), validation = (0, import_react4.useActionData)(), params = (0, import_react4.useParams)(), matches = (0, import_react4.useMatches)();
  console.log(matches);
  let expenseData = matches.find((match) => match.id === "routes/_app.expenses").data.find((expense) => expense.id === params.id), navigation = (0, import_react4.useNavigation)(), defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  }, isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Form, { method: "post", className: "form", id: "expense-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "text", id: "title", name: "title", required: !0, maxLength: 30, defaultValue: defaultValues.title }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "form-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            type: "number",
            id: "amount",
            name: "amount",
            min: "0",
            step: "0.01",
            defaultValue: defaultValues.amount,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 39,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            type: "date",
            id: "date",
            name: "date",
            max: today,
            defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : "",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 51,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    validation && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: Object.values(validation).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: error }, error, !1, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Link, { to: "..", children: "Cancel" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseForm.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: !0,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/_app.expenses.$id.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function UpdateExpensesPage() {
  let navigate = (0, import_react5.useNavigate)();
  (0, import_react5.useLoaderData)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/_app.expenses.$id.jsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_app.expenses.$id.jsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/_app.expenses.add.jsx
var app_expenses_add_exports = {};
__export(app_expenses_add_exports, {
  action: () => action,
  default: () => AddExpensesPage
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/expenses.server.js
async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch (error) {
    throw console.log(error), error;
  }
}
async function getExpenses() {
  try {
    return prisma.expense.findMany({ orderBy: { date: "desc" } });
  } catch (error) {
    throw console.log(error), error;
  }
}

// app/data/validation.server.js
function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}
function isValidAmount(value) {
  let amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}
function isValidDate(value) {
  return value && new Date(value).getTime() < (/* @__PURE__ */ new Date()).getTime();
}
function validateExpenseInput(input) {
  let validationErrors = {};
  if (isValidTitle(input.title) || (validationErrors.title = "Invalid expense title. Must be at most 30 characters long."), isValidAmount(input.amount) || (validationErrors.amount = "Invalid amount. Must be a number greater than zero."), isValidDate(input.date) || (validationErrors.date = "Invalid date. Must be a date before today."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/routes/_app.expenses.add.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AddExpensesPage() {
  let navigate = (0, import_react6.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/_app.expenses.add.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_app.expenses.add.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
async function action({ request }) {
  let formData = await request.formData(), expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  return await addExpense(expenseData), (0, import_node2.redirect)("/expenses");
}

// app/routes/_marketing._index.jsx
var marketing_index_exports = {};
__export(marketing_index_exports, {
  default: () => Index,
  meta: () => meta2
});
var import_react7 = require("@remix-run/react"), import_fa2 = require("react-icons/fa"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa2.FaDollarSign, {}, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 9,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "A Central Space" }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 10,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: "images/expenses-management.jpg", alt: "A list of expenses." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 14,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Manage your expenses in one central place." }, void 0, !1, {
            fileName: "app/routes/_marketing._index.jsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "Get Started" }, void 0, !1, {
              fileName: "app/routes/_marketing._index.jsx",
              lineNumber: 20,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa2.FaArrowRight, {}, void 0, !1, {
              fileName: "app/routes/_marketing._index.jsx",
              lineNumber: 21,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_marketing._index.jsx",
            lineNumber: 19,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_marketing._index.jsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_marketing._index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa2.FaChartBar, {}, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Detailed Analytics" }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_marketing._index.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing._index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function meta2() {
}

// app/routes/_marketing.auth.jsx
var marketing_auth_exports = {};
__export(marketing_auth_exports, {
  default: () => AuthPage,
  links: () => links2
});

// app/styles/auth.css
var auth_default = "/build/_assets/auth-7ZCCMTFI.css";

// app/components/auth/AuthForm.jsx
var import_fa3 = require("react-icons/fa"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react8.useSearchParams)(), authMode = searchParams.get("mode") || "login";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("form", { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_fa3.FaLock, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 13,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_fa3.FaUserPlus, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 13,
      columnNumber: 46
    }, this) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { children: authMode === "login" ? "Login" : "Create an user" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react8.Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: authMode === "login" ? "Create a new user" : "Log in with existing user" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/routes/_marketing.auth.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function AuthPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AuthForm_default, {}, void 0, !1, {
    fileName: "app/routes/_marketing.auth.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
function links2() {
  return [{ rel: "stylesheet", href: auth_default }];
}

// app/routes/_app.expenses.jsx
var app_expenses_exports = {};
__export(app_expenses_exports, {
  default: () => ExpensesPage,
  loader: () => loader
});
var import_react10 = require("@remix-run/react");

// app/components/expenses/ExpenseListItem.jsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function ExpenseListItem({ id, title, amount }) {
  function deleteExpenseItemHandler() {
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react9.Link, { to: id, children: "Edit" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    ExpenseListItem_default,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    },
    void 0,
    !1,
    {
      fileName: "app/components/expenses/ExpensesList.jsx",
      lineNumber: 9,
      columnNumber: 11
    },
    this
  ) }, expense.id, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var ExpensesList_default = ExpensesList;

// app/routes/_app.expenses.jsx
var import_fa4 = require("react-icons/fa");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), DUMMY_EXPENSES2 = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 16.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  }
];
function ExpensesPage() {
  let expenses = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_app.expenses.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { children: "Expenses Page Father" }, void 0, !1, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react10.Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_fa4.FaPlus, {}, void 0, !1, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 32,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "Add Expense" }, void 0, !1, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 34,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 31,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_fa4.FaDownload, {}, void 0, !1, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 36,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("a", { href: "expenses.raw", children: "Load Raw Data" }, void 0, !1, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 37,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ExpensesList_default, { expenses }, void 0, !1, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_app.expenses.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.expenses.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}
function loader() {
  return getExpenses();
}

// app/routes/expenses.raw.jsx
var expenses_raw_exports = {};
__export(expenses_raw_exports, {
  loader: () => loader2
});
var DUMMY_EXPENSES3 = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 16.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  }
];
function loader2() {
  return DUMMY_EXPENSES3;
}

// app/routes/_marketing.jsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => MarketingLayout,
  links: () => links3
});

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/routes/_marketing.jsx
var import_react13 = require("@remix-run/react");

// app/components/util/Logo.jsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react11.Link, { to: "/", children: "RemixExpenses" }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Logo_default = Logo;

// app/components/navigation/MainHeader.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function MainHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react12.NavLink, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 10,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react12.NavLink, { to: "/pricing", children: "Pricing" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react12.Link, { to: "/auth", className: "cta", children: "Login" }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/routes/_marketing.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "Hi from mkt file" }, void 0, !1, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(MainHeader_default, {}, void 0, !1, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function links3() {
  return [{ rel: "stylesheet", href: marketing_default }];
}

// app/routes/_app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => ExpensesAppLayout,
  links: () => links4
});

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/routes/_app.jsx
var import_react15 = require("@remix-run/react");

// app/components/navigation/ExpensesHeader.jsx
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function ExpensesHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react14.NavLink, { to: "/expenses", end: !0, children: "Manage Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react14.NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { className: "cta", children: "Logout" }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/_app.jsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function ExpensesAppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { children: "Hi from app file" }, void 0, !1, {
      fileName: "app/routes/_app.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ExpensesHeader_default, {}, void 0, !1, {
      fileName: "app/routes/_app.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_app.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function links4() {
  return [{ rel: "stylesheet", href: expenses_default }];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3IUKKXNL.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-LWBGD6IB.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-UK5NTJ6J.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WEM62SOV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app": { id: "routes/_app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_app-IY3KMKMO.js", imports: ["/build/_shared/chunk-7YAUSRDO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses": { id: "routes/_app.expenses", parentId: "routes/_app", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses-HLD3CQUS.js", imports: ["/build/_shared/chunk-JM2CCGXS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses.$id": { id: "routes/_app.expenses.$id", parentId: "routes/_app.expenses", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses.$id-XOQIZF2C.js", imports: ["/build/_shared/chunk-QPBQLXSP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses.add": { id: "routes/_app.expenses.add", parentId: "routes/_app.expenses", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses.add-RVLAU2B4.js", imports: ["/build/_shared/chunk-QPBQLXSP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses_.analysis": { id: "routes/_app.expenses_.analysis", parentId: "routes/_app", path: "expenses/analysis", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses_.analysis-4KFXZGOU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing": { id: "routes/_marketing", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing-M2ECQGB7.js", imports: ["/build/_shared/chunk-7YAUSRDO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing._index": { id: "routes/_marketing._index", parentId: "routes/_marketing", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_marketing._index-D2PYRJDD.js", imports: ["/build/_shared/chunk-JM2CCGXS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing.auth": { id: "routes/_marketing.auth", parentId: "routes/_marketing", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing.auth-TBBWNLUH.js", imports: ["/build/_shared/chunk-JM2CCGXS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing.pricing": { id: "routes/_marketing.pricing", parentId: "routes/_marketing", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing.pricing-OJ7JYAVM.js", imports: ["/build/_shared/chunk-JM2CCGXS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/expenses.raw": { id: "routes/expenses.raw", parentId: "root", path: "expenses/raw", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.raw-WV32WYUC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "37493e7e", hmr: { runtime: "/build/_shared\\chunk-UK5NTJ6J.js", timestamp: 1691018275112 }, url: "/build/manifest-37493E7E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_app.expenses_.analysis": {
    id: "routes/_app.expenses_.analysis",
    parentId: "routes/_app",
    path: "expenses/analysis",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_analysis_exports
  },
  "routes/_marketing.pricing": {
    id: "routes/_marketing.pricing",
    parentId: "routes/_marketing",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_pricing_exports
  },
  "routes/_app.expenses.$id": {
    id: "routes/_app.expenses.$id",
    parentId: "routes/_app.expenses",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_id_exports
  },
  "routes/_app.expenses.add": {
    id: "routes/_app.expenses.add",
    parentId: "routes/_app.expenses",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_add_exports
  },
  "routes/_marketing._index": {
    id: "routes/_marketing._index",
    parentId: "routes/_marketing",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: marketing_index_exports
  },
  "routes/_marketing.auth": {
    id: "routes/_marketing.auth",
    parentId: "routes/_marketing",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_auth_exports
  },
  "routes/_app.expenses": {
    id: "routes/_app.expenses",
    parentId: "routes/_app",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_exports
  },
  "routes/expenses.raw": {
    id: "routes/expenses.raw",
    parentId: "root",
    path: "expenses/raw",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_raw_exports
  },
  "routes/_marketing": {
    id: "routes/_marketing",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: marketing_exports
  },
  "routes/_app": {
    id: "routes/_app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map

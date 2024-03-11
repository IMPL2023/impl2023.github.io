"use strict";
(() => {
var exports = {};
exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 8443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fjoinus_preferredRegion_absolutePagePath_private_next_pages_2Fjoinus_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/joinus.tsx
var joinus_namespaceObject = {};
__webpack_require__.r(joinus_namespaceObject);
__webpack_require__.d(joinus_namespaceObject, {
  "default": () => (joinus)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.tsx
var _document = __webpack_require__(3104);
// EXTERNAL MODULE: ./src/pages/_app.tsx
var _app = __webpack_require__(9212);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/Layout/Main.Layout.tsx
var Main_Layout = __webpack_require__(3183);
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Title = __webpack_require__(3492);
// EXTERNAL MODULE: ./src/Icons/index.tsx
var Icons = __webpack_require__(8337);
;// CONCATENATED MODULE: ./src/components/Common/TitleS.tsx


const TitleS = ({ title })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex items-center w-full mt-20",
        "data-aos": "fade-right",
        "data-aos-delay": "50",
        "data-aos-duration": "1000",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                className: "text-3xl md:text-1xl text-text",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-neon font-fira"
                    }),
                    " ",
                    title
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Icons/* LineSvg */.Od, {
                className: "relative md:w-96 hidden md:inline-flex !ml-10"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/joinus.tsx




function B() {
    const boldStyle = {
        fontWeight: "bold"
    };
    return /*#__PURE__*/ _jsx("span", {
        style: boldStyle
    });
}
const Joinus = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Main_Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "w-4/5 md:w-4/5 text-white text-xl",
                    children: "We are currently looking for self-motivated PhD students (starting from Fall 2024 or later) and Post-docs to work together on 3D computer vision. The specific research topics include (but are not limited to):"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-4/5 md:w-4/5 text-textDark  pl-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                        style: {
                            listStyleType: "decimal"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "Data-efficient learning (includes semi-supervised learning, few-shot learning, self-supervised learning) for 3D scene understanding;"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "Multi-modal joint learning for scene understanding with images and point clouds;"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "Out-of-distribution learning (includes domain adaptation/generalization and open-vocabulary learning) for scene understanding;"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "Continual/incremental learning for 3D scene understanding;"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "Semantic 3D scene reconstruction that jointly reconstructs and understands scenes;"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "Language-guided 3D scene understanding such as 3D Visual Grounding and 3D QA;"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "3D Generation and Editing (object-level or scene-level)."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                    title: "PhD"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "w-4/5 md:w-4/5 text-white text-xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "General Requirements:"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-4/5 md:w-4/5 text-textDark pl-4 ",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                        style: {
                            listStyleType: "decimal"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have ",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: " a bachelor's or master's degree in computer science or a related field, with excellent academic performance. "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have strong programming skills and be familiar with deep learning frameworks like PyTorch.",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1 pr-1",
                                        children: "Winners of ACM/ICPC or NOI/IOIare preferred"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have some research experience in computer vision/machine learning.",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "Having relevant research papers is a plus"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have good English reading, writing, and oral communication skills. The English requirement for admission to SUTD's PhD program is approximately:",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "TOEFL >=90, IELTS >=6.5"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should be",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: " self-motivated"
                                    }),
                                    "\xa0 and",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "passionate about research"
                                    }),
                                    "."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "w-4/5 md:w-4/5 text-white text-xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "PhD Scholarships:"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-4/5 md:w-4/5 text-textDark pl-4 ",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                        style: {
                            listStyleType: "decimal"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "SUTD Graduate Fellowship: The application deadline for Fall 2024 admission is February 2024. For more details, please see",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                                        className: "text-white pl-1",
                                        children: [
                                            "     ",
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                style: {
                                                    textDecoration: "underline"
                                                },
                                                href: "https://sutd.edu.sg/Admissions/Graduate/PhD-Programmes/SUTD-PhD-Programme",
                                                children: "SUTD PhD Programme"
                                            })
                                        ]
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "SINGA Scholarship: The application deadline for",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: " Spring 2025"
                                    }),
                                    " admission is",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: " 1 June, 2023"
                                    }),
                                    ". For more details, please see",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                                        className: "text-white pl-1",
                                        children: [
                                            "     ",
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                style: {
                                                    textDecoration: "underline"
                                                },
                                                href: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa",
                                                children: "SINGA"
                                            })
                                        ]
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "If you have published a top conference paper as the first author, you can also apply for the AISG Scholarship (5000 SGD per month for international students). The application deadline for Fall 2024 admission is 7 February 2024. For more details, please see",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                                        className: "text-white pl-1",
                                        children: [
                                            "     ",
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                style: {
                                                    textDecoration: "underline"
                                                },
                                                href: "https://aisingapore.org/research/phd-fellowship-programme/",
                                                children: "AISG PhD Fellowship Programme"
                                            })
                                        ]
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: "If you hold Singapore Citizen/PR status, there are more scholarship options available (please email for consultation)."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(TitleS, {
                    title: "PostDoc"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "w-4/5 md:w-4/5 text-white text-xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "General Requirements:"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-4/5 md:w-4/5 text-textDark pl-4 ",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                        style: {
                            listStyleType: "decimal"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have a",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "PhD degree in computer science or a related field"
                                    }),
                                    ", with a specialization on computer vision."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have a strong background in",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "computer vision/machine learning/3D geometry"
                                    }),
                                    ", along with a",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "solid grasp of mathematical concepts "
                                    }),
                                    "related to",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "computer vision/machine learning"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should be proficient in programming languages and familiar with",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "pytorch/tensorflow or other deep learning frameworks"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have multiple project experiences in",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "computer vision/machine learning"
                                    }),
                                    ", coupled with a track record of",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "publishing research papers in esteemed conferences or journals"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have excellent",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "problem-solving and analytical abilities"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have strong",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "English reading and academic writing skills"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "effective communication skills and the ability to work collaboratively "
                                    }),
                                    "in a research group."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                style: {
                                    padding: "2px"
                                },
                                children: [
                                    "You should have strong",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        className: "text-white pl-1",
                                        children: "self-motivation and research enthusiasm"
                                    }),
                                    "."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                    title: "How to apply?"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    className: "w-4/5 md:w-4/5 text-textDark ",
                    children: [
                        "Please send your",
                        /*#__PURE__*/ jsx_runtime.jsx("b", {
                            className: "text-white pl-1 ",
                            children: "English resume, transcripts"
                        }),
                        ", together with a",
                        /*#__PURE__*/ jsx_runtime.jsx("b", {
                            className: "text-white pl-1 ",
                            children: "research proposal"
                        }),
                        "\xa0 stating your interested research topic in 3D computer vision, to Professor Zhao Na at",
                        /*#__PURE__*/ jsx_runtime.jsx("b", {
                            className: "text-white pl-1 ",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "mailto:na_zhao@sutd.edu.sg",
                                children: "na_zhao@sutd.edu.sg"
                            })
                        }),
                        ". The email title should be: [Target Position (PhD/Postdoc) Application] Your Name + Institution Name + Qualification (Bachelor/Master/PhD)."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const joinus = (Joinus);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fjoinus&preferredRegion=&absolutePagePath=private-next-pages%2Fjoinus.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fjoinus_preferredRegion_absolutePagePath_private_next_pages_2Fjoinus_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(joinus_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(joinus_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(joinus_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(joinus_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(joinus_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(joinus_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(joinus_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(joinus_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(joinus_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(joinus_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(joinus_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/joinus",
        pathname: "/joinus",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: joinus_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [389,535,183,492], () => (__webpack_exec__(8443)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 3405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Ffun_preferredRegion_absolutePagePath_private_next_pages_2Ffun_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/fun.tsx
var fun_namespaceObject = {};
__webpack_require__.r(fun_namespaceObject);
__webpack_require__.d(fun_namespaceObject, {
  "default": () => (fun)
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
// EXTERNAL MODULE: ./src/data/index.ts
var data = __webpack_require__(5320);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Title = __webpack_require__(3492);
;// CONCATENATED MODULE: ./src/components/carousel.component.js




function Carousel({ fun }) {
    let [current, setCurrent] = (0,external_react_.useState)(0);
    let previousSlide = ()=>{
        if (current === 0) setCurrent(fun.imgs.length - 1);
        else setCurrent(current - 1);
    };
    let nextSlide = ()=>{
        if (current === fun.imgs.length - 1) {
            setCurrent(0);
        } else setCurrent(current + 1);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "overflow-hidden relative w-3/5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "m-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "text-neon font-fira text-1xl m-2",
                            children: fun.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "text-neon font-fira text-1xl m-2",
                            children: [
                                "[",
                                fun.date,
                                "]"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `flex transition ease-out duration-40 `,
                    style: {
                        transform: `translateX(-${current * 100}%)`
                    },
                    children: fun.imgs.map((s)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: s
                        });
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: previousSlide,
                            children: /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsFillArrowLeftCircleFill, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: nextSlide,
                            children: /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsFillArrowRightCircleFill, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "absolute bottom-0 py-4 flex justify-center gap-3 w-full",
                    children: fun.imgs.map((s, i)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: ()=>{
                                setCurrent(i);
                            },
                            className: `rounded-full w-2 h-2 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"}`
                        }, "circle" + i);
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/fun.tsx





const slidesData = [
    {
        imageUrl: "slide1.jpg",
        alt: "Slide 1",
        caption: "Welcome to Slide 1"
    },
    {
        imageUrl: "slide2.jpg",
        alt: "Slide 2",
        caption: "This is Slide 2"
    },
    {
        imageUrl: "slide3.jpg",
        alt: "Slide 3",
        caption: "And Here Comes Slide 3"
    }
];
const Fun = ({ fun })=>{
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    ];
    const slidesData = [
        {
            imageUrl: images[0],
            alt: "Slide 1",
            caption: "Welcome to Slide 1"
        },
        {
            imageUrl: images[1],
            alt: "Slide 1",
            caption: "Welcome to Slide 1"
        },
        {
            imageUrl: images[2],
            alt: "Slide 1",
            caption: "Welcome to Slide 1"
        }
    ];
    // const SlideComponent = () => {
    //   const [currentIndex, setCurrentIndex] = useState(0);
    //   const handleNextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    //   };
    //   const handlePrevSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //       (prevIndex - 1 + slidesData.length) % slidesData.length
    //     );
    //   };
    //   return (
    //     <div className="slide-container">
    //       <button onClick={handlePrevSlide} className="arrow-button left-arrow">
    //         Previous
    //       </button>
    //       <div className="slide">
    //         <img
    //           src={slidesData[currentIndex].imageUrl}
    //           alt={slidesData[currentIndex].alt}
    //         />
    //         <h3>{slidesData[currentIndex].caption}</h3>
    //       </div>
    //       <button onClick={handleNextSlide} className="arrow-button right-arrow">
    //         Next
    //       </button>
    //     </div>
    //   );
    // };
    return /*#__PURE__*/ jsx_runtime.jsx(Main_Layout/* default */.Z, {
        children: data/* default */.Z.funs.map((fun, i)=>/*#__PURE__*/ jsx_runtime.jsx(Carousel, {
                fun: fun
            }))
    });
};
/* harmony default export */ const fun = (Fun);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffun&preferredRegion=&absolutePagePath=private-next-pages%2Ffun.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Ffun_preferredRegion_absolutePagePath_private_next_pages_2Ffun_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(fun_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(fun_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(fun_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(fun_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(fun_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(fun_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(fun_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(fun_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(fun_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(fun_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(fun_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/fun",
        pathname: "/fun",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: fun_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [389,535,183,492], () => (__webpack_exec__(3405)));
module.exports = __webpack_exports__;

})();
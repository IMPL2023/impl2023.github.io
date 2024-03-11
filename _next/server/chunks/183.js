"use strict";
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 3183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6930);
/* harmony import */ var _components_nav_Sidebar_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const zindex = {
    "z-index": "-99"
};
const Layout = ({ children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav_Sidebar_nav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start mb-10 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            zIndex: "-99"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-100 h-30 rounded-full bg-bgwhite fixed mx-auto my-auto blur-xl inset-0 opacity-5"
                        })
                    }),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const NavOption = ({ item })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "border-b-2 border-transparent cursor-pointer text-text hover:border-neon",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
            activeClass: "active",
            duration: 500,
            onClick: ()=>router.push(item.href),
            // href={item.href}
            offset: -100,
            smooth: true,
            spy: true,
            to: item.href,
            children: item.name
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavOption);


/***/ }),

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _NavOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(756);
/* harmony import */ var _navOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);






const SideBar = ()=>{
    const [showSidebar, setShowSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !showSidebar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-white cursor-pointer md:hidden fixed grid h-14 place-items-center right-10 rounded-full top-4 w-14 z-50",
                onClick: ()=>setShowSidebar(true),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiMenu, {
                    color: "black",
                    size: "30"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `bg-bgblue px-10 flex-col gap-4 flex md:hidden justify-center items-center fixed min-h-[120vh] top-0 right-0 z-50
                    transition-all duration-500 ease-in-out 
                    ${showSidebar ? "translate-x-0 " : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid bg-white cursor-pointer h-12 absolute place-items-center rounded-full top-4 left-10 w-12",
                        onClick: ()=>setShowSidebar(false),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoIosClose, {
                            color: "black",
                            size: "40"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-4",
                        children: _navOptions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.map((option, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavOption__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                item: option,
                                number: i + 1
                            }, option.name))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);


/***/ }),

/***/ 6930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* reexport */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/Icons/Logo.tsx

const Logo = ({ className })=>{
    return(// <img
    //   className={className}
    //   // height="80"
    //   width="160"
    //   src='logos\IMPL_LOGO.png'
    // >
    // </img>
    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: className,
        fill: "none",
        height: "80",
        viewBox: "0 0 86 50",
        width: "220",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: "Avneesh Agarwal"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                clipRule: "evenodd",
                d: "M9.36 40 l-9.36 0 l0 -28.04 l9.36 0 l0 21.8 l-3.12 0 l0 -18.68 l-3.12 0 l0 21.8 l6.24 0 l0 3.12 z M31.672 27.84 l8.96 -15.88 l9.92 0 l0 28.04 l-9.36 0 l0 -10.48 l-5.96 10.48 l-7.16 0 l-9.08 -15.92 l0 -5.88 l10.92 18.68 l3.52 0 l10.88 -18.68 l0 18.68 l3.12 0 l0 -21.8 l-5 0 l-10.84 18.72 l-10.68 -18.72 l-5 0 l0 21.8 l3.08 0 l0 -5.88 l3.12 5.36 l0 3.64 l-9.32 0 l0 -28.04 l9.92 0 z M53.984 11.96 l22.84 0 c4.28 0 7.76 3.48 7.76 7.8 c0 4.28 -3.48 7.8 -7.76 7.8 l-19.72 -0.04 l0 9.36 l3.12 0 l0 -6.24 l3.08 0 l0 9.36 l-9.32 0 l0 -15.6 l22.84 0.04 c2.56 0 4.64 -2.12 4.64 -4.68 c0 -2.6 -2.08 -4.68 -4.64 -4.68 l-19.72 0 l0 3.12 l19.72 0 c0.8 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.56 1.56 l-0.04 0 l-22.72 0 l0 -9.36 z M89.536 15.079999999999998 l0 15.56 l27.64 0 l0 9.36 l-30.76 0 l0 -3.12 l27.68 0 l0 -3.12 l-27.68 0 l0 -21.8 l9.36 0 l0 15.6 l-3.12 0 l0 -12.48 l-3.12 0 z",
                fill: "white",
                fillRule: "evenodd"
            })
        ]
    }));
};
/* harmony default export */ const Icons_Logo = (Logo);

// EXTERNAL MODULE: ./src/components/nav/NavOption.tsx
var NavOption = __webpack_require__(756);
// EXTERNAL MODULE: ./src/components/nav/navOptions.tsx
var navOptions = __webpack_require__(5782);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./src/components/nav/Header.nav.tsx






const Header = ()=>{
    const [handleShow, setHandleShow] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: `px-8 md:px-24 fixed md:py-4 py-6 bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full max-w-[100vw] top-0 z-20  ${handleShow ? "shadow-2xl" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex justify-between items-center max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(external_react_scroll_.Link, {
                    activeClass: "active",
                    duration: 500,
                    href: "intro",
                    offset: -100,
                    smooth: true,
                    spy: true,
                    title: "Avneesh",
                    to: "intro",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Icons_Logo, {
                        className: "cursor-pointer"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("ol", {
                    className: "hidden space-x-8 md:flex",
                    children: navOptions/* default */.Z.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(NavOption/* default */.Z, {
                            item: item,
                            number: i + 1
                        }, i))
                })
            ]
        })
    });
};


// EXTERNAL MODULE: ./src/components/nav/Sidebar.nav.tsx
var Sidebar_nav = __webpack_require__(999);
;// CONCATENATED MODULE: ./src/components/nav/index.ts




/***/ }),

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navOptions = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Publications",
        href: "publications"
    },
    {
        name: "Lab Members",
        href: "group"
    },
    // {
    //   name: 'Funding',
    //   href: 'funding',
    // },
    // {
    //   name: 'Blog',
    //   href: 'blog',
    // },
    // {
    //   name: 'Fun!',
    //   href: 'fun',
    // },
    {
        name: "Join Us",
        href: "joinus"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navOptions);


/***/ })

};
;
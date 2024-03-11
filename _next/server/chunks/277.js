"use strict";
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 3859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export About */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Common_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3492);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5320);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const About = ()=>{
    const linkStyle = {
        textDecoration: "underline"
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0",
        id: "about",
        children: [
            /*#__PURE__*/ _jsx(Title, {
                title: "About me"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mt-10 text-1xl text-textDark md:w-1/2",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                style: {
                                    margin: 10
                                },
                                children: [
                                    /*#__PURE__*/ _jsx("h1", {
                                        className: "text-white",
                                        style: {
                                            marginBottom: 10
                                        },
                                        children: "Asst Prof. Na ZHAO"
                                    }),
                                    "I am currently an Assistant Professor in the Information Systems Technology and Design (ISTD) Pillar at ",
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "https://www.sutd.edu.sg/",
                                        className: "text-white",
                                        children: " Singapore University of Technology and Design  (SUTD)"
                                    }),
                                    " . Prior to joining SUTD, I was a Research Fellow in Computer Vision and Robot Perception Lab, Department of Computer Science,",
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "http://www.nus.edu.sg/",
                                        className: "text-white",
                                        children: "National University of Singapore (NUS)"
                                    }),
                                    ". I recieved my Ph.D. in Computer Science from NUS in March 2021, supervised by ",
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "https://www.chuatatseng.com/",
                                        className: "text-white",
                                        children: "Professor Tat-Seng Chua"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                style: {
                                    margin: 10
                                },
                                children: [
                                    "I am heading ",
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-white",
                                        children: "Intelligent Machine Perception Lab (IMPL)"
                                    }),
                                    " at SUTD, with a primary focus on, but not limited to: (1)  ",
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-white",
                                        children: " Computer Vision"
                                    }),
                                    ": 3D computer vision, (3D) scene understanding such as object detection and semantic segmentation. (2)  ",
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-white",
                                        children: " Machine Learning"
                                    }),
                                    ": data-efficient learning, out-of-distribution learning, multi-modal learning, obust learning, continual learning."
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                className: "text-white",
                                children: [
                                    "Links: [",
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "https://github.com/Na-Z",
                                        className: "p-1",
                                        style: linkStyle,
                                        children: "Github"
                                    }),
                                    "] [",
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "https://scholar.google.com/citations?user=KOL2dMwAAAAJ&hl=en&oi=ao",
                                        className: "p-1",
                                        style: linkStyle,
                                        children: "Google Scholar"
                                    }),
                                    "] [",
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "mailto:na_zhao@sutd.edu.sg",
                                        className: "p-1",
                                        style: linkStyle,
                                        children: "Mail"
                                    }),
                                    "]"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Image, {
                        alt: "data.username",
                        className: "object-contain relative mx-auto mt-20 border-2 rounded-full  md:ml-40 w-80 h-80 border-neon",
                        height: 300,
                        src: data.image,
                        width: 300
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3811:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Blog

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Common_Title = __webpack_require__(3492);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/Blog/Post.tsx


const Post_Post = ({ post })=>{
    return /*#__PURE__*/ _jsxs("a", {
        className: "relative flex flex-col m-5 my-5 mt-5 rounded-lg md:mb-0 md:mx-5 w-80 md:w-96 dark:bg-darkerBlue",
        href: `https://blog.avneesh.tech/${post.slug}`,
        rel: "noreferrer",
        target: "_blank",
        children: [
            post.coverImage && /*#__PURE__*/ _jsx(Image, {
                alt: post.title,
                className: "rounded-t-lg object-cover",
                height: 786,
                src: post.coverImage,
                width: 1500
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex flex-col p-4 pb-4",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "text-lg font-medium text-neon",
                        children: post.title
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                        className: "mt-4 text-base break-words text-text",
                        children: [
                            post.brief.substring(0, 100),
                            "..."
                        ]
                    })
                ]
            })
        ]
    }, post._id);
};

;// CONCATENATED MODULE: ./src/components/Blog/index.tsx



const Blog = ({ Posts })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col items-center justify-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0",
        id: "blog",
        children: [
            /*#__PURE__*/ _jsx(Title, {
                title: "Blog"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "flex flex-wrap justify-between mt-10",
                children: Posts.slice(0, 3).map((post)=>{
                    return /*#__PURE__*/ _jsx(Post, {
                        post: post
                    }, post._id);
                })
            })
        ]
    });
};


/***/ }),

/***/ 9747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ Contact)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Contact/ContactButtons.tsx



const ContactButtons = ({ link, name, icon, marginLeft })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                className: `items-center hidden px-5 py-2 mt-10 ${marginLeft} duration-100 border-2 rounded-lg fill-current md:flex border-neon text-neon hover:scale-105`,
                href: link,
                rel: "noreferrer",
                target: "_blank",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        alt: name,
                        height: 25,
                        src: `/logos/${icon}`,
                        width: 25
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "ml-2",
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("a", {
                className: `flex items-center mt-10 duration-100 rounded-lg fill-current ${marginLeft} md:hidden text-neon`,
                href: link,
                rel: "noreferrer",
                target: "_blank",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    alt: name,
                    height: 25,
                    src: `/logos/${icon}`,
                    width: 25
                })
            })
        ]
    });
};
/* harmony default export */ const Contact_ContactButtons = (ContactButtons);

// EXTERNAL MODULE: ./src/Icons/index.tsx
var Icons = __webpack_require__(8337);
// EXTERNAL MODULE: ./src/data/index.ts
var data = __webpack_require__(5320);
;// CONCATENATED MODULE: ./src/components/Contact/index.tsx





const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "z-50 flex flex-col items-center justify-center w-full",
        id: "contact",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-center mt-10 space-x-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Icons/* LineSvg */.Od, {
                        className: "relative w-20 h-1 md:w-60"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-xl text-text md:text-4xl whitespace-nowrap",
                        children: "Get in Touch"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Icons/* LineSvg */.Od, {
                        className: "relative w-20 h-1 md:w-60"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-wrap items-center justify-center mx-auto",
                children: data/* default */.Z.links.map(({ icon, link, name }, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx(Contact_ContactButtons, {
                            icon: icon,
                            link: link,
                            marginLeft: i === 0 ? "ml-0" : "ml-6 md:ml-10",
                            name: name
                        })
                    }, name))
            })
        ]
    });
};


/***/ }),

/***/ 4678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ FundingNews)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Title = __webpack_require__(3492);
;// CONCATENATED MODULE: ./src/components/FundingNews/New.tsx

const New = ({ New_i })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("article", {
        className: "flex flex-col items-center mt-4 md:flex-row text-neon text-1xl text-textDark",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                    children: [
                        "[",
                        New_i.date,
                        "]"
                    ]
                }),
                ":   ",
                New_i.content
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/data/index.ts
var data = __webpack_require__(5320);
;// CONCATENATED MODULE: ./src/components/FundingNews/index.tsx




const FundingNews = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0 ",
        id: "work",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "Funding"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-col",
                children: data/* default */.Z.fundingnews.map((N, i)=>/*#__PURE__*/ jsx_runtime.jsx(New, {
                        New_i: N
                    }, i))
            })
        ]
    });
};


/***/ }),

/***/ 8868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5320);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Intro = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        animate: {
            y: 0
        },
        className: "space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0",
        id: "intro",
        initial: {
            y: 40
        },
        transition: {
            duration: 0.5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-3/5 md:w-3/5 text-textDark float-left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-5/5 md:w-5/5 text-textDark ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl text-neon font-fira",
                                children: "Welcome to "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-5xl font-extrabold text-text md:text-5xl",
                                children: "Intelligent Machine Perception Lab"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl text-textDark md:text-2xl",
                                children: "at Singapore University of Technology and Design"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-5/5 md:w-5/5 text-textDark ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-neon",
                                children: [
                                    _data__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.intro,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: _data__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.intro2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: _data__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.intro3
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                alt: "data.username",
                className: "object-contain float-left w-3/9 ",
                height: 400,
                src: _data__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.school,
                width: 500
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ Members)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Title = __webpack_require__(3492);
// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__(6810);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: ./src/components/Members/Member.tsx


const Member = ({ member })=>{
    const white = {
        color: "white"
    };
    let parts = member.bg.split("|");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
        className: "flex flex-col p-4 pb-4 ",
        style: {
            width: "18rem"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Card_default()).Img, {
                variant: "top",
                src: member.image,
                sizes: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()).Body, {
                className: "bg-card p-2",
                children: [
                    member.homepage === "" ? /*#__PURE__*/ jsx_runtime.jsx((Card_default()).Title, {
                        className: "p-2",
                        children: member.name
                    }) : /*#__PURE__*/ jsx_runtime.jsx("a", {
                        style: {
                            textDecoration: "underline"
                        },
                        href: member.homepage,
                        children: /*#__PURE__*/ jsx_runtime.jsx((Card_default()).Text, {
                            className: "p-1",
                            children: member.name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        style: {
                            listStyleType: "square"
                        },
                        className: "ml-4 pl-2",
                        children: [
                            member.title === "" ? "" : /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: white,
                                children: /*#__PURE__*/ jsx_runtime.jsx((Card_default()).Text, {
                                    className: "p-1",
                                    children: member.title
                                })
                            }),
                            member.comment === "" ? "" : /*#__PURE__*/ jsx_runtime.jsx("li", {
                                style: white,
                                children: /*#__PURE__*/ jsx_runtime.jsx((Card_default()).Text, {
                                    className: "p-1",
                                    children: member.comment
                                })
                            }),
                            parts.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    style: white,
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Card_default()).Text, {
                                        className: "p-1",
                                        children: item
                                    })
                                }, index))
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/data/index.ts
var data = __webpack_require__(5320);
;// CONCATENATED MODULE: ./src/components/Members/index.tsx




const Faculty = [];
const PhDs = [];
const PostDocs_RAs = [];
const Visitors = [];
const Alumni = [];
data/* default */.Z.members.forEach((item)=>{
    switch(item.type){
        case "Faculty":
            Faculty.push(item);
            break;
        case "PhD":
            PhDs.push(item);
            break;
        case "PostDoc":
            PostDocs_RAs.push(item);
            break;
        case "RA":
            PostDocs_RAs.push(item);
            break;
        case "Visitor":
            Visitors.push(item);
            break;
        case "Alumni":
            Alumni.push(item);
            break;
    }
});
const Members = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0",
        id: "work",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "Faculty"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-wrap  mt-10",
                children: Faculty.map((member, i)=>/*#__PURE__*/ jsx_runtime.jsx(Member, {
                        member: member
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "Research Staff"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-wrap  mt-10",
                children: PostDocs_RAs.map((member, i)=>/*#__PURE__*/ jsx_runtime.jsx(Member, {
                        member: member
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "PhD Students"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-wrap  mt-10",
                children: PhDs.map((member, i)=>/*#__PURE__*/ jsx_runtime.jsx(Member, {
                        member: member
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "Visitors and Interns"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-wrap  mt-10",
                children: Visitors.map((member, i)=>/*#__PURE__*/ jsx_runtime.jsx(Member, {
                        member: member
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "Alumni"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-wrap  mt-10",
                children: Alumni.map((member, i)=>/*#__PURE__*/ jsx_runtime.jsx(Member, {
                        member: member
                    }, i))
            })
        ]
    });
};


/***/ }),

/***/ 6404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ News)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Title = __webpack_require__(3492);
;// CONCATENATED MODULE: ./src/components/News/New.tsx

const New = ({ New_i })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("article", {
        className: "flex flex-col items-center mt-4 md:flex-row text-neon text-1xl text-textDark",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                    children: [
                        "[",
                        New_i.date,
                        "]"
                    ]
                }),
                ":   ",
                New_i.content
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/data/index.ts
var data = __webpack_require__(5320);
;// CONCATENATED MODULE: ./src/components/News/index.tsx




const News = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0 ",
        id: "work",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "News"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-col",
                children: data/* default */.Z.news.map((N, i)=>/*#__PURE__*/ jsx_runtime.jsx(New, {
                        New_i: N
                    }, i))
            })
        ]
    });
};


/***/ }),

/***/ 2274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ Papers)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Title = __webpack_require__(3492);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Papers/Paper.tsx


function replaceSpecialCharactersWithSuperscript(inputString) {
    const replacedString = inputString.replace(/[*#]/g, (match)=>`<sup>${match}</sup>`);
    return replacedString;
}
const Paper = ({ paper })=>{
    const renderComment = (comment)=>{
        // 检查 comment 中是否包含 'Oral'
        const hasOral = comment.includes("Oral Presentation");
        if (hasOral) {
            // 分割字符串
            const parts = comment.split("Oral Presentation");
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "text-textDark mt-3 md:max-w-[700px] italic-text",
                children: [
                    parts[0],
                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                        className: "text-white pl-1",
                        children: "Oral Presentation"
                    }),
                    parts[1]
                ]
            });
        } else {
            console.log(comment);
            return /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-textDark mt-3 md:max-w-[700px] italic-text",
                children: comment
            });
        }
    };
    const renderItem = (author)=>{
        author = replaceSpecialCharactersWithSuperscript(author);
        if (author.includes("Na Zhao")) {
            return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2",
                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                        dangerouslySetInnerHTML: {
                            __html: author
                        }
                    })
                })
            });
        } else {
            return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2",
                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: author
                        }
                    })
                })
            });
        }
    };
    const linkStyle = {
        textDecoration: "underline"
    };
    const divStyle = {
        borderBottom: "2px solid rgba(255, 255, 255, 0.1)"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "flex flex-col items-center mt-10 md:flex-row",
        style: divStyle,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                alt: "",
                className: "relative md:w-[450px] pb-5 w-full ml-4 h-[250px] rounded-lg object-contain",
                height: 250,
                loading: "lazy",
                src: paper.image,
                width: 450
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "ml-2 mt-5 md:mt-0 md:ml-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "text-2xl font-semibold text-neon",
                        children: paper.title
                    }),
                    paper.authors.map((author, i)=>author.startsWith("#") || author.startsWith("*") ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: author
                        }) : renderItem(author)),
                    renderComment(paper.content),
                    renderComment(paper.comment),
                    paper.pdf.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-textDark mt-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "text-neon",
                            style: linkStyle,
                            children: [
                                "[",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: paper.pdf,
                                    children: "PDF"
                                }),
                                "]"
                            ]
                        })
                    }),
                    paper.project.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-textDark mt-2 ml-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "text-neon",
                            style: linkStyle,
                            children: [
                                "[",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: paper.project,
                                    children: "Project"
                                }),
                                "]"
                            ]
                        })
                    }),
                    paper.video.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-textDark mt-2 ml-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "text-neon",
                            style: linkStyle,
                            children: [
                                "[",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: paper.video,
                                    children: "Video"
                                }),
                                "]"
                            ]
                        })
                    }),
                    paper.code.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-textDark mt-2 ml-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "text-neon",
                            style: linkStyle,
                            children: [
                                "[",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: paper.code,
                                    children: "Code"
                                }),
                                "]"
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Papers/PaperText.tsx

function PaperText_replaceSpecialCharactersWithSuperscript(inputString) {
    const replacedString = inputString.replace(/[*#]/g, (match)=>`<sup>${match}</sup>`);
    return replacedString;
}
const PaperText = ({ paper })=>{
    const renderComment = (comment)=>{
        // 检查 comment 中是否包含 'Oral'
        const hasOral = comment.includes("Oral Presentation");
        if (hasOral) {
            // 分割字符串
            const parts = comment.split("Oral Presentation");
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "text-textDark mt-3 md:max-w-[700px] italic-text",
                children: [
                    parts[0],
                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                        className: "text-white pl-1",
                        children: "Oral Presentation"
                    }),
                    parts[1]
                ]
            });
        } else {
            console.log(comment);
            return /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-textDark mt-3 md:max-w-[700px] italic-text",
                children: comment
            });
        }
    };
    const renderItem = (author)=>{
        author = PaperText_replaceSpecialCharactersWithSuperscript(author);
        if (author.includes("Na Zhao")) {
            return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2",
                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                        dangerouslySetInnerHTML: {
                            __html: author
                        }
                    })
                })
            });
        } else {
            return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2",
                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: author
                        }
                    })
                })
            });
        }
    };
    const linkStyle = {
        textDecoration: "underline"
    };
    const divStyle = {
        borderBottom: "2px solid rgba(255, 255, 255, 0.1)"
    };
    return /*#__PURE__*/ jsx_runtime.jsx("article", {
        className: "flex flex-col items-center mb-5 md:flex-row",
        style: divStyle,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "ml-2 mt-10 mb-2 md:mt-0 md:ml-5",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    className: "text-base font-semibold text-neon",
                    children: paper.title
                }),
                paper.authors.map((author, i)=>author.startsWith("#") || author.startsWith("*") ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-base",
                        children: author
                    }) : renderItem(author)),
                renderComment(paper.content),
                renderComment(paper.comment),
                paper.pdf.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "text-textDark mt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-base text-neon",
                        style: linkStyle,
                        children: [
                            "[",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: paper.pdf,
                                children: "PDF"
                            }),
                            "]"
                        ]
                    })
                }),
                paper.project.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "text-textDark mt-2 ml-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-base text-neon",
                        style: linkStyle,
                        children: [
                            "[",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: paper.project,
                                children: "Project"
                            }),
                            "]"
                        ]
                    })
                }),
                paper.video.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "text-textDark mt-2 ml-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-base text-neon",
                        style: linkStyle,
                        children: [
                            "[",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: paper.video,
                                children: "Video"
                            }),
                            "]"
                        ]
                    })
                }),
                paper.code.trim() != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "text-textDark mt-2 ml-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-base text-neon",
                        style: linkStyle,
                        children: [
                            "[",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: paper.code,
                                children: "Code"
                            }),
                            "]"
                        ]
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/data/index.ts
var data = __webpack_require__(5320);
;// CONCATENATED MODULE: ./src/components/Papers/index.tsx





const List_2024 = [];
const List_2023 = [];
const List_2022 = [];
const List_2021_and_before = [];
data/* default */.Z.papers.forEach((item)=>{
    if (item.comment.includes("2024")) {
        List_2024.push(item);
    } else if (item.comment.includes("2023")) {
        List_2023.push(item);
    } else if (item.comment.includes("2022")) {
        List_2022.push(item);
    } else {
        List_2021_and_before.push(item);
    }
});
const Papers = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "max-w-7xl w-full mx-auto p-5 md:p-0",
        id: "work",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Title/* Title */.D, {
                title: "Publications:"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-4 text-textDark"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("article", {
                        className: "flex flex-col items-center mt-5 md:flex-row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "text-2xl",
                            children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                children: "2024:"
                            })
                        })
                    }),
                    List_2024.map((paper, i)=>/*#__PURE__*/ jsx_runtime.jsx(Paper, {
                            paper: paper
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("article", {
                        className: "flex flex-col items-center mt-5 md:flex-row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "text-2xl",
                            children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                children: "2023:"
                            })
                        })
                    }),
                    List_2023.map((paper, i)=>/*#__PURE__*/ jsx_runtime.jsx(Paper, {
                            paper: paper
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("article", {
                        className: "flex flex-col  mt-5 ",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-2xl",
                                children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                    children: "2022:"
                                })
                            })
                        })
                    }),
                    List_2022.map((paper, i)=>/*#__PURE__*/ jsx_runtime.jsx(Paper, {
                            paper: paper
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("article", {
                        className: "flex flex-col  mt-5 mb-5",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-2xl",
                                children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                    children: "2021 and before:"
                                })
                            })
                        })
                    }),
                    List_2021_and_before.map((paper, i)=>/*#__PURE__*/ jsx_runtime.jsx(PaperText, {
                            paper: paper
                        }, i))
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1928:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Projects

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Common/Title.tsx
var Common_Title = __webpack_require__(3492);
// EXTERNAL MODULE: ./src/Icons/index.tsx
var Icons = __webpack_require__(8337);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/Projects/Project.tsx



const Project_Project = ({ project })=>{
    return /*#__PURE__*/ _jsxs("article", {
        className: "flex flex-col items-center mt-10 md:flex-row",
        children: [
            /*#__PURE__*/ _jsx(Image, {
                alt: project.name,
                className: "relative md:w-[450px] w-full ml-4 h-[250px] rounded-lg object-contain",
                height: 250,
                loading: "lazy",
                src: project.image,
                width: 450
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "ml-2 mt-5 md:mt-0 md:ml-20",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        className: "text-3xl font-semibold text-neon",
                        children: project.name
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-textDark mt-3 md:max-w-[700px]",
                        children: project.about
                    }),
                    project.tech.map((tech, i)=>/*#__PURE__*/ _jsx("span", {
                            className: "inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2",
                            children: tech
                        }, i)),
                    /*#__PURE__*/ _jsxs("p", {
                        className: "text-textDark mt-2",
                        children: [
                            /*#__PURE__*/ _jsx("span", {
                                className: "text-neon",
                                children: "Role:"
                            }),
                            " ",
                            project.role
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex mt-4 space-x-4",
                        children: [
                            project.links.GitHub && /*#__PURE__*/ _jsxs("a", {
                                className: "flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon",
                                href: project.links.GitHub,
                                rel: "noreferrer",
                                target: "_blank",
                                children: [
                                    /*#__PURE__*/ _jsx(GitHubIcon, {}),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "ml-2",
                                        children: "GitHub"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("a", {
                                className: "flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon",
                                href: project.links.Live,
                                rel: "noreferrer",
                                target: "_blank",
                                children: [
                                    /*#__PURE__*/ _jsx(VisitIcon, {}),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "ml-2",
                                        children: "Visit"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/data/index.ts
var src_data = __webpack_require__(5320);
;// CONCATENATED MODULE: ./src/components/Projects/index.tsx




const Projects = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "max-w-7xl w-full mx-auto p-5 md:p-0",
        id: "work",
        children: [
            /*#__PURE__*/ _jsx(Title, {
                title: "What I've worked on"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "flex flex-col",
                children: data.projects.map((project, i)=>/*#__PURE__*/ _jsx(Project, {
                        project: project
                    }, i))
            })
        ]
    });
};


/***/ }),

/***/ 4277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sq: () => (/* reexport safe */ _News__WEBPACK_IMPORTED_MODULE_6__.S),
/* harmony export */   iu: () => (/* reexport safe */ _Members__WEBPACK_IMPORTED_MODULE_8__.i),
/* harmony export */   oM: () => (/* reexport safe */ _FundingNews__WEBPACK_IMPORTED_MODULE_9__.o),
/* harmony export */   p2: () => (/* reexport safe */ _Intro__WEBPACK_IMPORTED_MODULE_3__.p),
/* harmony export */   r8: () => (/* reexport safe */ _Contact__WEBPACK_IMPORTED_MODULE_2__.r),
/* harmony export */   rO: () => (/* reexport safe */ _Papers__WEBPACK_IMPORTED_MODULE_7__.r)
/* harmony export */ });
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3859);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3811);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9747);
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8868);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1928);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6930);
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6404);
/* harmony import */ var _Papers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2274);
/* harmony import */ var _Members__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5879);
/* harmony import */ var _FundingNews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Intro__WEBPACK_IMPORTED_MODULE_3__]);
_Intro__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
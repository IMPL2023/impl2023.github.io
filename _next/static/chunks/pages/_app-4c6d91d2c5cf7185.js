(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2711:function(e,t,o){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=p||l||Function("return this")(),m=Object.prototype.toString,u=Math.max,h=Math.min,g=function(){return d.Date.now()};function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return n;if(f(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=f(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var p=r.test(e);return p||s.test(e)?c(e.slice(2),p?2:8):i.test(e)?n:+e}var v=function(e,o,n){var a=!0,i=!0;if("function"!=typeof e)throw TypeError(t);return f(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),function(e,o,n){var a,i,r,s,c,p,l=0,d=!1,m=!1,v=!0;if("function"!=typeof e)throw TypeError(t);function y(t){var o=a,n=i;return a=i=void 0,l=t,s=e.apply(n,o)}function w(e){var t=e-p;return void 0===p||t>=o||t<0||m&&e-l>=r}function x(){var e,t=g();if(w(t))return k(t);c=setTimeout(x,(e=o-(t-p),m?h(e,r-(t-l)):e))}function k(e){return c=void 0,v&&a?y(e):(a=i=void 0,s)}function E(){var e,t=g(),n=w(t);if(a=arguments,i=this,p=t,n){if(void 0===c)return l=e=p,c=setTimeout(x,o),d?y(e):s;if(m)return c=setTimeout(x,o),y(p)}return void 0===c&&(c=setTimeout(x,o)),s}return o=b(o)||0,f(n)&&(d=!!n.leading,r=(m="maxWait"in n)?u(b(n.maxWait)||0,o):r,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,a=p=i=c=void 0},E.flush=function(){return void 0===c?s:k(g())},E}(e,o,{leading:a,maxWait:o,trailing:i})},y=NaN,w=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,E=/^0o[0-7]+$/i,S=parseInt,G="object"==typeof e&&e&&e.Object===Object&&e,C="object"==typeof self&&self&&self.Object===Object&&self,A=G||C||Function("return this")(),D=Object.prototype.toString,O=Math.max,T=Math.min,N=function(){return A.Date.now()};function P(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==D.call(t))return y;if(P(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=P(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var n=k.test(e);return n||E.test(e)?S(e.slice(2),n?2:8):x.test(e)?y:+e}var X=function(e,t,o){var n,a,i,r,s,c,p=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function u(t){var o=n,i=a;return n=a=void 0,p=t,r=e.apply(i,o)}function h(e){var o=e-c;return void 0===c||o>=t||o<0||d&&e-p>=i}function g(){var e,o=N();if(h(o))return f(o);s=setTimeout(g,(e=t-(o-c),d?T(e,i-(o-p)):e))}function f(e){return s=void 0,m&&n?u(e):(n=a=void 0,r)}function b(){var e,o=N(),i=h(o);if(n=arguments,a=this,c=o,i){if(void 0===s)return p=e=c,s=setTimeout(g,t),l?u(e):r;if(d)return s=setTimeout(g,t),u(c)}return void 0===s&&(s=setTimeout(g,t)),r}return t=j(t)||0,P(o)&&(l=!!o.leading,i=(d="maxWait"in o)?O(j(o.maxWait)||0,t):i,m="trailing"in o?!!o.trailing:m),b.cancel=function(){void 0!==s&&clearTimeout(s),p=0,n=c=a=s=void 0},b.flush=function(){return void 0===s?r:f(N())},b},H=function(){};function I(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(function e(t){var o=void 0,n=void 0;for(o=0;o<t.length;o+=1)if((n=t[o]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(o)))return H()})}function Z(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var L={isSupported:function(){return!!Z()},ready:function(e,t){var o=window.document,n=new(Z())(I);H=t,n.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},M=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},z=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,R=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,W=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,F=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function q(){return navigator.userAgent||navigator.vendor||window.opera||""}var J=new(function(){function e(){M(this,e)}return V(e,[{key:"phone",value:function(){var e=q();return!(!z.test(e)&&!R.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=q();return!(!W.test(e)&&!F.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),U=function(e,t){var o=void 0;return J.ie11()?(o=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):o=new CustomEvent(e,{detail:t}),document.dispatchEvent(o)},B=function(e){return e.forEach(function(e,t){var o,n,a,i,r,s;return o=window.pageYOffset,n=e.options,a=e.position,i=e.node,e.data,r=function(){var t;e.animated&&((t=n.animatedClassNames)&&t.forEach(function(e){return i.classList.remove(e)}),U("aos:out",i),e.options.id&&U("aos:in:"+e.options.id,i),e.animated=!1)},void(n.mirror&&o>=a.out&&!n.once?r():o>=a.in?e.animated||((s=n.animatedClassNames)&&s.forEach(function(e){return i.classList.add(e)}),U("aos:in",i),e.options.id&&U("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&r())})},Y=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}},$=function(e,t,o){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||o},K=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},Q=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},eo=function(){return document.all&&!window.atob},en=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=Q,t=et,e.forEach(function(e,o){var n,a,i,r,s,c=$(e.node,"mirror",t.mirror),p=$(e.node,"once",t.once),l=$(e.node,"id"),d=t.useClassNames&&e.node.getAttribute("data-aos"),m=[t.animatedClassName].concat(d?d.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,o){var n=window.innerHeight,a=$(e,"anchor"),i=$(e,"anchor-placement"),r=Number($(e,"offset",i?0:t)),s=i||o,c=e;a&&document.querySelectorAll(a)&&(c=document.querySelectorAll(a)[0]);var p=Y(c).top-n;switch(s){case"top-bottom":break;case"center-bottom":p+=c.offsetHeight/2;break;case"bottom-bottom":p+=c.offsetHeight;break;case"top-center":p+=n/2;break;case"center-center":p+=n/2+c.offsetHeight/2;break;case"bottom-center":p+=n/2+c.offsetHeight;break;case"top-top":p+=n;break;case"bottom-top":p+=n+c.offsetHeight;break;case"center-top":p+=n+c.offsetHeight/2}return p+r}(e.node,t.offset,t.anchorPlacement),out:c&&(n=e.node,a=t.offset,window.innerHeight,i=$(n,"anchor"),r=$(n,"offset",a),s=n,i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]),Y(s).top+s.offsetHeight-r)},e.options={once:p,mirror:c,animatedClassNames:m,id:l}}),B(Q=e),window.addEventListener("scroll",v(function(){B(Q,et.once)},et.throttleDelay)))},ea=function(){if(Q=K(),er(et.disable)||eo())return ei();en()},ei=function(){Q.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},er=function(e){return!0===e||"mobile"===e&&J.mobile()||"phone"===e&&J.phone()||"tablet"===e&&J.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=_(et,e),Q=K(),et.disableMutationObserver||L.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||L.ready("[data-aos]",ea),er(et.disable)||eo()?ei():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){en(!0)}):window.addEventListener("load",function(){en(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&en(!0),window.addEventListener("resize",X(en,et.debounceDelay,!0)),window.addEventListener("orientationchange",X(en,et.debounceDelay,!0)),Q)},refresh:en,refreshHard:ea}}()},6840:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(9444)}])},5320:function(e,t){"use strict";t.Z={name:"IMPL",image:"/avatar.png",school:"/sutd1.jpg",username:"avneesh0612",keywords:"Avneesh, Agarwal, Avneesh Agarwal, web dev, blogger, content creator",profession:"FullStack web3 developer",intro:"We are a dynamic research group dedicated to advancing the fields of Computer Vision and Machine Learning. Our research spans across two major areas:",intro2:"(1) Computer Vision: 3D computer vision, 3D reconstruction, (3D) scene understanding. ",intro3:" (2) Machine Learning: data-efficient learning, out-of-distribution learning, multi-modal learning, robust learning, continual learning.",about:"",website:"https://www.avneesh.tech",projects:[{name:"thirdweb",image:"/projects/thirdweb.png",about:"Build web3 apps easily with thirdweb's powerful SDKs, audited smart contracts, and developer tools—for Ethereum, Polygon, Solana, & more.",tech:["Web3","Next.js","Chakra UI","Typescript","Content writing"],links:{Live:"https://thirdweb.com/",Github:"https://github.com/thirdweb-dev"},role:"Developer Relations Engineer"},{name:"Yoke",image:"/projects/yoke.png",about:"YOKE is the leading NIL software enabling teams to grow a business through building community. Thousands of athletes earn monthly income through NIL Clubs powered by YOKE.",tech:["Next.js","Chakra UI","Typescript","web3","thirdweb"],links:{Live:"https://www.yoketeam.com/"},role:"Fullstack web3 developer"},{name:"Candypay",image:"/projects/candypay.png",about:"Seamless, mobile-native NFT & Payments experiences on solana! \uD83C\uDF6D",tech:["Next.js","solana","Typescript"],links:{GitHub:"https://github.com/candypay",Live:"https://www.producthunt.com/posts/faucetli"},role:"Fullstack web3 developer"}],links:[{name:"GitHub",icon:"github.svg",link:"https://github.com/IMPL2023"},{name:"Mail Us",icon:"mail.svg",link:"mailto:na_zhao@sutd.edu.sg"}],fundingnews:[{date:"Sep 2023",content:"xxxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxxx SGD$500,000.00"},{date:"Sep 2022",content:"xxxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxxx SGD$500,000.00"},{date:"Sep 2021",content:"xxxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxxx SGD$500,000.00"}],news:[{date:"Dec 2023",content:'We are awarded a grant titled "MANTIS - Cross-modality Resiliency against Real-world Attacks" from DSO!'},{date:"Dec 2023",content:"Two papers about semi-supervised 3D object detection and robust visual recognition are accepted by AAAI 2024!"},{date:"29 Oct 2023",content:"Asst Prof. Na Zhao is invited as a reviewer for CVPR 2024."},{date:"Oct 2023",content:"One paper about self-supervised point cloud representation learning is accepted by 3DV 2024 as an oral paper!"},{date:"14 Oct 2023",content:"Our team is delighted to welcome Guohang, a new visiting student, to our research group."},{date:"Sep 2023",content:"One paper about visual domain generalization is accepted by IJCV 2023!"},{date:"2 Sep 2023",content:"Our team is delighted to welcome Wang Chengshun, a new PhD student, to our research group."},{date:"1 Sep 2023",content:"Asst Prof. Na Zhao is invited as a reviewer for ICLR 2024."},{date:"1 Sep 2023",content:"Our team is delighted to welcome Qian Peisheng, a new PhD student, to our research group."},{date:"30 Aug 2023",content:"Asst Prof. Na Zhao gives talks at A*STAR."},{date:"19 Aug 2023",content:"Our team is delighted to welcome Jia Heng(ZJU PhD), a new visiting student, to our research group."},{date:"Aug 2023",content:"One paper about robust few-shot point cloud segmentation is accepted by BMVC 2023!"},{date:"Aug 2023",content:'We are awarded a grant titled "Towards Realistic Deep Learning for 3D Vision" from A*STAR!'},{date:"25 Jul 2023",content:"Asst Prof. Na Zhao gives talks at Temasek Laboratories@SUTD."},{date:"Jun 2023",content:"Our team is delighted to welcome Liu Chao, a new PhD student, to our research group."},{date:"19 Jun 2023",content:"Asst Prof. Na Zhao gives talks at Zhejiang University (ZJU)."},{date:"Jun 2023",content:"One paper about 6-DoF grasps synthesis is accepted by IROS 2023!"},{date:"15 Jun 2023",content:"Asst Prof. Na Zhao gives talks at Fudan University (FDU)."},{date:"9 Jun 2023",content:"Asst Prof. Na Zhao gives talks at Nanjing University of Science and Technology (NJUST)."},{date:"4 Jul 2023",content:"One paper about generalized few-shot point cloud segmentation is accepted by ICCV 2023!"},{date:"26 May 2023",content:"Asst Prof. Na Zhao is invited as a reviewer for TKDE (IEEE’s Transactions on Knowledge and Data Engineering)."},{date:"May 2023",content:"One paper about monocular 3D object detection is accepted by TCSVT 2023!"},{date:"26 May 2023",content:"Our team is delighted to welcome Yining, a new PhD student, to our research group."},{date:"Apr 2023",content:"Our team is delighted to welcome Pengkun(FDU PhD), a new visiting student, to our research group."},{date:"9 Apr 2023",content:"Asst Prof. Na Zhao is invited as a reviewer for NeurIPS 2023."},{date:"Mar 2023",content:"Asst Prof. Na Zhao is invited to serve as Demo Chair at Sixth IEEE International Conference on Multimedia Information Processing and Retrieval (MIPR 2023)!"},{date:"Feb 2023",content:"Our team is delighted to welcome Zexian(NTU master), a new Intern, to our research group."},{date:"Feb 2023",content:"Asst Prof. Na Zhao is invited to join the Organising Committee of IEEE ICME 2023 Workshop on 3D Multimedia Analytics, Search and Generation!"},{date:"6 Feb 2023",content:"Asst Prof. Na Zhao is invited as a reviewer for ICCV 2023."},{date:"19 Dec 2022",content:"Asst Prof. Na Zhao is invited as a program committee for IJCAI 2023."},{date:"15 Dec 2022",content:"Asst Prof. Na Zhao is invited as a reviewer for TCSVT (IEEE Transactions on Circuits and Systems for Video Technology)."},{date:"9 Dec 2022",content:"Asst Prof. Na Zhao is invited as a reviewer for TIP (IEEE  Transactions on Image Processing)."},{date:"2 Nov 2022",content:"Asst Prof. Na Zhao is invited as a reviewer for CVPR 2023."},{date:"Oct 2022",content:'We are awarded a grant titled "Multi-modal Joint Learning for Scene Understanding" from SUTD-ZJU IDEA!'},{date:"Sep 2022",content:'We are awarded a grant titled "Data-efficient 3D Object Detection for Robot Perception" from TL@SUTD as the sole Principal Investigator!'},{date:"3 Aug 2022",content:"Asst Prof. Na Zhao is invited as a program committee for AAAI 2023."},{date:"Aug 2022",content:"Asst Prof. Na Zhao join the Singapore University of Technology and Design as an Assistant Professor!"}],papers:[{image:"/papers/Robust Visual Recognition.png",title:"Robust Visual Recognition with Class-Imbalanced Open-World Noisy Data",authors:["Na Zhao","Gim Hee Lee"],content:"",comment:"Thirty-Eighth AAAI Conference on Artificial Intelligence, 2024",pdf:"https://na-z.github.io/",video:"",project:"",code:"https://na-z.github.io/"},{image:"/papers/Dual-Perspective Knowledge.png",title:"Dual-Perspective Knowledge Enrichment for Semi-Supervised 3D Object Detection",authors:["Yucheng Han","Na Zhao*","Weiling Chen","Keng-Teck Ma","Hanwang Zhang","* indicates corresponding author"],content:"",comment:"Thirty-Eighth AAAI Conference on Artificial Intelligence, 2024",pdf:"https://na-z.github.io/",video:"",project:"",code:"https://na-z.github.io/"},{image:"/papers/Enhancing Generalizability.png",title:"Enhancing Generalizability of Representation Learning for Data-Efficient 3D Scene Understanding",authors:["Yunsong Wang","Na Zhao","Gim Hee Lee"],content:"Oral Presentation",comment:"International Conference on 3D Vision (3DV), 2024",pdf:"https://na-z.github.io/",video:"",project:"",code:"https://na-z.github.io/"},{image:"/papers/Style-Hallucinated.png",title:"Style-Hallucinated Dual Consistency Learning: A Unified Framework for Visual Domain Generalization",authors:["Yuyang Zhao","Zhun Zhong","Na Zhao","Nicu Sebe","Gim Hee Lee"],content:"",comment:"International Journal on Computer Vision (IJCV), 2023",pdf:"https://arxiv.org/pdf/2212.09068.pdf",video:"",project:"",code:"https://github.com/HeliosZhao/SHADE-VisualDG"},{image:"/papers/Generalized-Few-Shot.png",title:"Generalized Few-Shot Point Cloud Segmentation Via Geometric Words",authors:["Yating Xu","Conghui Hu","Na Zhao","Gim Hee Lee"],content:"",comment:"International Conference on Computer Vision (ICCV), 2023",pdf:"https://na-z.github.io/",video:"",project:"",code:"https://github.com/Pixie8888/GFS-3DSeg_GWs"},{image:"/papers/PDR.png",title:"PDR: Progressive Depth Regularization for Monocular 3D Object Detection",authors:["Hualian Sheng","Sijia Cai","Na Zhao#","Bing Deng","Min-Jian Zhao#","Gim Hee Lee","# indicates co-corresponding author"],content:"",comment:"IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 2023",pdf:"https://ieeexplore.ieee.org/abstract/document/10124735",video:"",project:"",code:""},{image:"/papers/Rethinking.png",title:"Rethinking IoU-based Optimization for Single-stage 3D Object Detection",authors:["Hualian Sheng","Sijia Cai","Na Zhao*","Bing Deng","Jianqiang Huang","Xian-Sheng Hua","Min-Jian Zhao","Gim Hee Lee","* indicates corresponding author"],content:"",comment:"European Conference on Computer Vision (ECCV), 2022",pdf:"https://www.ecva.net//papers/eccv_2022/papers_ECCV//papers/136690536.pdf",video:"",project:"",code:"https://github.com/hlsheng1/RDIoU"},{image:"/papers/Teaching.png",title:"Teaching with Soft Label Smoothing for Mitigating Noisy Labels in Facial Expressions",authors:["Tohar Lukov","Na Zhao","Gim Hee Lee","Ser-Nam Lim"],content:"",comment:"European Conference on Computer Vision (ECCV), 2022",pdf:"https://www.ecva.net//papers/eccv_2022/papers_ECCV//papers/136720639.pdf",video:"",project:"",code:"https://github.com/toharl/soft"},{image:"/papers/Style-Hallucinated-Dual Consistency.png",title:"Style-Hallucinated Dual Consistency Learning for Domain Generalized Semantic Segmentation",authors:["Yuyang Zhao","Zhun Zhong","Na Zhao","Nicu Sebe","Gim Hee Lee"],content:"",comment:"European Conference on Computer Vision (ECCV), 2022",pdf:"https://www.ecva.net//papers/eccv_2022/papers_ECCV//papers/136880530.pdf",video:"",project:"",code:"https://github.com/HeliosZhao/SHADE"},{image:"/papers/Static-Dynamic.png",title:"Static-Dynamic Co-Teaching for Class-Incremental 3D Object Detection",authors:["Na Zhao","Gim Hee Lee"],content:"",comment:"Thirty-Sixth AAAI Conference on Artificial Intelligence, 2022 Oral Presentation",pdf:"https://ojs.aaai.org/index.php/AAAI/article/view/20254",video:"",project:"",code:"https://github.com/Na-Z/SDCoT"},{image:"/papers/Few-shot.png",title:"Few-shot 3D Point Cloud Semantic Segmentation",authors:["Na Zhao","Tat-Seng Chua","Gim Hee Lee"],content:"",comment:"IEEE Conference on Computer Vision and Patten Recognition (CVPR), 2021",pdf:"https://arxiv.org/pdf/2006.12052.pdf",video:"https://www.youtube.com/watch?v=i5X1L1_03Rs",project:"",code:"https://github.com/Na-Z/attMPTI"},{image:"/papers/SESS.png",title:"SESS: Self-Ensembling Semi-Supervised 3D Object Detection",authors:["Na Zhao","Tat-Seng Chua","Gim Hee Lee"],content:"",comment:"IEEE Conference on Computer Vision and Patten Recognition (CVPR), 2020 Oral Presentation",pdf:"https://arxiv.org/pdf/1912.11803.pdf",video:"https://www.youtube.com/watch?v=AGJsp4aksS0",project:"",code:"https://github.com/Na-Z/sess"},{image:"/papers/PS2-Net.png",title:"PS^2-Net: A Locally and Globally Aware Network for Point-Based Semantic Segmentation",authors:["Na Zhao","Tat-Seng Chua","Gim Hee Lee"],content:"",comment:"25th International Conference on Pattern Recognition (ICPR), 2020",pdf:"https://arxiv.org/pdf/1908.05425.pdf",video:"https://www.youtube.com/watch?v=IupewGCU0o8",project:"",code:"https://github.com/Na-Z/PS-2Net"}],funs:[{name:"Trip to xxxx",content:"",date:"Aug 1st",imgs:["https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80","https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80","https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]},{name:"Trip to xxxx",content:"",date:"Aug 1st",imgs:["https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80","https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80","https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]}],members:[{name:"Na Zhao",type:"Faculty",comment:"",bg:"Research Fellow Computer Vision and Robot Perception Lab with Gim Hee Lee|PhD NUS with Tat-Seng Chua",title:"Assistant Professor",image:"/members/nazhao.png",mail:"na_zhao@sutd.edu.sg"},{name:"XXX XXX",type:"PhD",comment:"Since started in Sep 2023",title:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"PhD",comment:"Since started in Sep 2023",title:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"PhD",title:"",comment:"Since started in Sep 2023",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"PhD",title:"",comment:"Since started in Sep 2023",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"PostDoc",title:"Research Fellow",comment:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"PostDoc",title:"Research Fellow",comment:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"Research Assistant",title:"Research Assistant",comment:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"Visitor",title:"",comment:"Since started in Sep 2023",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"Visitor",comment:"Since started in Sep 2023",title:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"Visitor",title:"",comment:"Since started in Sep 2023",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"Alumni",comment:"",title:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"Alumni",title:"",comment:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""},{name:"XXX XXX",type:"Alumni",title:"",comment:"",bg:"M.Sc in xxx",image:"/members/placeHolder.png",mail:""}]}},9444:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return b}});var n=o(5893),a=o(5320);o(7952);var i=o(2711),r=o.n(i);o(3497);var s=o(7294),c=o(9008),p=o.n(c);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var d=["keyOverride"],m={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},u=function(e,t,o){void 0===t&&(t=[]);var n=void 0===o?{}:o,a=n.defaultWidth,i=n.defaultHeight;return t.reduce(function(t,o,n){return t.push(s.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:o.url})),o.alt&&t.push(s.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(s.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(s.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(s.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:o.width.toString()})):a&&t.push(s.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:a.toString()})),o.height?t.push(s.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(s.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:i.toString()})),t},[])},h=function(e){var t,o,n,a,i,r=[];e.titleTemplate&&(m.templateTitle=e.titleTemplate);var c="";e.title?(c=e.title,m.templateTitle&&(c=m.templateTitle.replace(/%s/g,function(){return c}))):e.defaultTitle&&(c=e.defaultTitle),c&&r.push(s.createElement("title",{key:"title"},c));var p=e.noindex||m.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||m.nofollow||e.dangerouslySetAllPagesToNoFollow,g="";if(e.robotsProps){var f=e.robotsProps,b=f.nosnippet,v=f.maxSnippet,y=f.maxImagePreview,w=f.maxVideoPreview,x=f.noarchive,k=f.noimageindex,E=f.notranslate,S=f.unavailableAfter;g=(b?",nosnippet":"")+(v?",max-snippet:"+v:"")+(y?",max-image-preview:"+y:"")+(x?",noarchive":"")+(S?",unavailable_after:"+S:"")+(k?",noimageindex":"")+(w?",max-video-preview:"+w:"")+(E?",notranslate":"")}if(p||h?(e.dangerouslySetAllPagesToNoIndex&&(m.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(m.nofollow=!0),r.push(s.createElement("meta",{key:"robots",name:"robots",content:(p?"noindex":"index")+","+(h?"nofollow":"follow")+g}))):r.push(s.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),e.description&&r.push(s.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&r.push(s.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&r.push(s.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){r.push(s.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&r.push(s.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&r.push(s.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&r.push(s.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&r.push(s.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||c)&&r.push(s.createElement("meta",{key:"og:title",property:"og:title",content:(null==(a=e.openGraph)?void 0:a.title)||c})),(null!=(o=e.openGraph)&&o.description||e.description)&&r.push(s.createElement("meta",{key:"og:description",property:"og:description",content:(null==(i=e.openGraph)?void 0:i.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&r.push(s.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var G=e.openGraph.type.toLowerCase();r.push(s.createElement("meta",{key:"og:type",property:"og:type",content:G})),"profile"===G&&e.openGraph.profile?(e.openGraph.profile.firstName&&r.push(s.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&r.push(s.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&r.push(s.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&r.push(s.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===G&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){r.push(s.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&r.push(s.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&r.push(s.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){r.push(s.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===G&&e.openGraph.article?(e.openGraph.article.publishedTime&&r.push(s.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&r.push(s.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&r.push(s.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){r.push(s.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&r.push(s.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){r.push(s.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===G||"video.episode"===G||"video.tv_show"===G||"video.other"===G)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&r.push(s.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&r.push(s.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){r.push(s.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){r.push(s.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&r.push(s.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&r.push(s.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){r.push(s.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&r.push(s.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(m.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(m.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&r.push.apply(r,u("image",e.openGraph.images,{defaultWidth:m.defaultOpenGraphImageWidth,defaultHeight:m.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(m.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(m.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&r.push.apply(r,u("video",e.openGraph.videos,{defaultWidth:m.defaultOpenGraphVideoWidth,defaultHeight:m.defaultOpenGraphVideoHeight})),e.openGraph.audio&&r.push.apply(r,u("audio",e.openGraph.audio)),e.openGraph.locale&&r.push(s.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&r.push(s.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&r.push(s.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,o,n=e.keyOverride,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,d);r.push(s.createElement("meta",l({key:"meta:"+(null!=(t=null!=(o=null!=n?n:a.name)?o:a.property)?t:a.httpEquiv)},a)))}),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach(function(e){var t;r.push(s.createElement("link",l({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),r},g=function(e){return s.createElement(p(),null,h(e))},f=function(e){var t=e.title,o=e.themeColor,n=e.noindex,a=void 0!==n&&n,i=e.nofollow,r=e.robotsProps,c=e.description,p=e.canonical,l=e.openGraph,d=e.facebook,m=e.twitter,u=e.additionalMetaTags,f=e.titleTemplate,b=e.defaultTitle,v=e.mobileAlternate,y=e.languageAlternates,w=e.additionalLinkTags,x=e.useAppDir,k=void 0!==x&&x;return s.createElement(s.Fragment,null,k?h({title:t,themeColor:o,noindex:a,nofollow:i,robotsProps:r,description:c,canonical:p,facebook:d,openGraph:l,additionalMetaTags:u,twitter:m,titleTemplate:f,defaultTitle:b,mobileAlternate:v,languageAlternates:y,additionalLinkTags:w}):s.createElement(g,{title:t,themeColor:o,noindex:a,nofollow:i,robotsProps:r,description:c,canonical:p,facebook:d,openGraph:l,additionalMetaTags:u,twitter:m,titleTemplate:f,defaultTitle:b,mobileAlternate:v,languageAlternates:y,additionalLinkTags:w}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g");var b=e=>{let{Component:t,pageProps:o}=e;return r().init(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{canonical:a.Z.website,defaultTitle:a.Z.name,description:a.Z.about,openGraph:{url:a.Z.website,title:a.Z.name,description:a.Z.about,images:[{url:"/og-image.png",width:800,height:420,alt:a.Z.name}],profile:{firstName:a.Z.name.split(" ")[0],gender:"Male",lastName:a.Z.name.split(" ")[1],username:a.Z.username}},title:a.Z.name,titleTemplate:a.Z.name,twitter:{handle:"@".concat(a.Z.username),site:"@".concat(a.Z.username),cardType:"summary_large_image"}}),(0,n.jsx)(t,{...o})]})}},3497:function(){},7952:function(){},9008:function(e,t,o){e.exports=o(2636)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);
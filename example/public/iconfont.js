(function(window){var svgSprite='<svg><symbol id="icon-pen" viewBox="0 0 1024 1024"><path d="M199.394 980.082c-69.192 0-135.736-22.132-177.486-59.636a41.952 41.952 0 0 1-13.762-34.718 42.024 42.024 0 0 1 19.224-31.824l-0.028 0.014c-0.192 0 5.706-4.846 15.974-17.038 16.466-19.538 28.89-41.546 42.024-64.836 21.162-37.476 43.034-76.224 83.336-108.39 46.72-37.258 110.178-46.392 165.58-23.96 0.82 0.328 1.638 0.696 2.43 1.078 22.144 10.65 41.532 25.354 57.614 43.702 19.714 22.458 33.694 49.818 40.466 79.132 10.13 61.738-12.916 121.564-59.608 158.808-50.186 40.042-114.026 57.668-175.764 57.668z m-83.882-99.106c59.772 24.93 149.224 22.24 207.33-24.124 23.046-18.376 34.404-47.922 29.654-77.096-2.02-8.356-7.864-24.726-21.244-39.962-8.3-9.474-18.294-17.162-29.736-22.842-27.06-10.472-57.86-5.83-80.524 12.274-27.578 21.994-43.798 50.748-62.584 84.046-12.588 22.31-25.558 45.286-42.896 67.704z m875.794-813.73c-14.198-13.872-67.28-53.492-154.466 18.964-43.934 35.688-226.062 186.988-320.84 280.4-84.892 75.622-132.24 135.612-144.692 183.398-10.704 41.04-3.796 79.772 18.022 101.126l32.056 31.32c14.472 14.13 36.426 21.544 61.464 21.544 12.752 0 26.268-1.912 40.002-5.844 47.538-13.544 106.436-62.242 178.66-147.3 92.784-98.64 240.178-284.55 274.256-328.552 70.586-88.99 29.764-141.17 15.538-155.056z m-491.47 550.246c-11.168 3.194-19.114 2.908-22.582 2.252l-26.514-25.912c-0.71-3.44-1.228-11.346 1.72-22.664 1.786-6.812 7.286-20.322 23.806-42.494l66.698 63.246c-22.43 17.66-36.188 23.6-43.128 25.572z m409.936-446.95c-33.886 43.716-178.85 226.622-270.76 324.416a1103.294 1103.294 0 0 1-34.972 39.272l-71.748-68.034c11.904-11.718 25.366-24.404 41.05-38.382 94.068-92.648 273.628-241.776 316.552-276.646l0.41-0.328c21.818-18.158 34.876-21.362 37.518-18.718s-0.164 15.852-18.05 38.42z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
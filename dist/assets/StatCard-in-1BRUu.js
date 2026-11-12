import{ad as u,j as e}from"./vendor-react-DK1NLE7n.js";const y=u.memo(({icon:x,title:m,value:h,change:r,changeType:o,iconBgColor:j="bg-gray-700/50",iconColor:b="text-brand-text-primary",subtitle:i,colorVariant:g="default",valueClassName:w="",description:v,onClick:l,image:a,compactOnMobile:s=!1,iconBesideContentOnMobile:t=!1})=>{const d={blue:{iconBg:"grad-brand",iconColor:"text-white"},orange:{iconBg:"grad-orange",iconColor:"text-white"},purple:{iconBg:"grad-purple",iconColor:"text-white"},pink:{iconBg:"grad-pink",iconColor:"text-white"},green:{iconBg:"grad-green",iconColor:"text-white"},red:{iconBg:"bg-gradient-to-br from-red-600 to-red-700",iconColor:"text-white"},default:{iconBg:"grad-brand",iconColor:"text-white"}},c=d[g]||d.default,p=n=>e.jsxs("svg",{...n,xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),f=n=>e.jsxs("svg",{...n,xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),e.jsx("polyline",{points:"16 17 22 17 22 11"})]});return e.jsx("div",{onClick:l,className:`
      relative
      ${s?"p-2 sm:p-6":"p-5 sm:p-6"}
      rounded-2xl
      bg-white
      border border-[#EAEFF4]
      shadow-[0_9px_17.5px_rgba(0,0,0,0.05)]
      hover:shadow-md
      transition-all duration-200 ease-out
      group
      h-full
      flex flex-col justify-between
      ${l?"cursor-pointer":""}
    `,children:e.jsxs("div",{className:`relative z-10 h-full flex ${t?"flex-row items-center gap-2 sm:flex-col sm:items-stretch sm:justify-between sm:gap-0":"flex-col justify-between"}`,children:[e.jsxs("div",{className:`flex items-start justify-between ${t?"mb-0 sm:mb-4":s?"mb-2 sm:mb-4":"mb-4"}`,children:[e.jsx("div",{className:`
            ${t?"w-8 h-8 sm:w-12 sm:h-12":s?"w-10 h-10 sm:w-12 sm:h-12":"w-11 h-11 sm:w-12 sm:h-12"}
            rounded-xl
            flex items-center justify-center 
            flex-shrink-0 
            ${c.iconBg} ${c.iconColor}
            group-hover:scale-105
            transition-transform duration-200
            overflow-hidden
          `,children:a?e.jsx("img",{src:a,alt:"",className:"w-full h-full object-cover",loading:"lazy",decoding:"async"}):e.jsx("div",{className:"w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center",children:x})}),r&&e.jsxs("div",{className:`
              inline-flex items-center 
              text-[11px]
              font-bold
              gap-1
              px-2.5 py-1
              rounded-full
              flex-shrink-0
              ${o==="increase"?"solid-green text-white":"bg-red-600 text-white"}
            `,children:[o==="increase"?e.jsx(p,{className:"w-3 h-3"}):e.jsx(f,{className:"w-3 h-3"}),e.jsx("span",{children:r})]})]}),e.jsxs("div",{className:t?"min-w-0 flex-1 sm:flex-none":"",children:[e.jsx("p",{className:`
            text-xs
            text-[#5A6A85]
            font-semibold 
            uppercase
            tracking-wider
            mb-1
            leading-tight
          `,children:m}),e.jsx("p",{className:`
            text-xl sm:text-2xl
            font-extrabold 
            text-[#2A3547] 
            break-words
            tracking-tight
            leading-tight
            ${w}
          `,children:h}),i&&e.jsx("p",{className:`
              hidden sm:block
              text-xs 
              text-[#5A6A85]
              mt-1.5
              line-clamp-2
              leading-relaxed
              font-normal
            `,children:i})]})]})})});export{y as S};

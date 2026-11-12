import{j as e,ad as w}from"./vendor-react-DK1NLE7n.js";const l={primary:{bg:"grad-brand",text:"text-white",dot:"bg-white"},secondary:{bg:"solid-cyan",text:"text-white",dot:"bg-white"},success:{bg:"solid-green",text:"text-white",dot:"bg-white"},warning:{bg:"solid-orange",text:"text-white",dot:"bg-white"},error:{bg:"bg-red-600",text:"text-white",dot:"bg-white"},info:{bg:"solid-blue",text:"text-white",dot:"bg-white"}},b={sm:"text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 font-semibold",md:"text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 font-semibold",lg:"text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1.5 font-bold"},o=({variant:a="primary",children:i,size:n="md",className:s="",dot:r=!1})=>{const t=l[a]||l.primary;return e.jsxs("span",{className:`
        inline-flex items-center gap-1.5
        rounded-full
        ${t.bg}
        ${t.text}
        ${b[n]}
        leading-tight
        whitespace-nowrap
        select-none
        ${s}
      `,children:[r&&e.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t.dot}`}),i]})},c={primary:"grad-brand text-white",secondary:"grad-cyan text-white",success:"grad-green text-white",warning:"grad-orange text-white",error:"bg-gradient-to-br from-red-600 to-red-700 text-white"},u=({title:a,value:i,icon:n,subtitle:s,change:r,changeType:t="increase",iconColorVariant:h="primary",onClick:d,className:p="",valueClassName:g="",compactOnMobile:x=!1,badge:m})=>e.jsxs("div",{onClick:d,className:`
        relative
        bg-white
        rounded-xl sm:rounded-2xl
        border border-[#EAEFF4]
        p-2.5 sm:p-6
        shadow-[0_9px_17.5px_rgba(0,0,0,0.05)]
        hover:shadow-md
        transition-all duration-200
        ${d?"cursor-pointer":""}
        flex
        ${x?"flex-row items-center gap-2.5 sm:flex-col sm:items-stretch sm:justify-between sm:gap-0":"flex-col justify-between"}
        min-h-[90px] sm:min-h-0
        ${p}
      `,children:[e.jsxs("div",{className:`flex ${x?"items-center justify-start gap-0 mb-0 sm:items-start sm:justify-between sm:gap-2 sm:mb-4":"items-start justify-between gap-1.5 mb-2 sm:gap-2 sm:mb-4"}`,children:[e.jsx("div",{className:`
            w-7 h-7 sm:w-12 sm:h-12
            rounded-lg sm:rounded-xl
            flex items-center justify-center
            flex-shrink-0
            ${c[h]||c.primary}
            transition-transform duration-200
            hover:scale-105
          `,children:w.cloneElement(n,{className:"w-4 h-4 sm:w-6 sm:h-6"})}),r&&e.jsxs(o,{variant:t==="increase"?"success":"error",size:"sm",className:"text-[8px] sm:text-xs",children:[t==="increase"?"+":"-",r]}),m&&e.jsx(o,{variant:m.variant,size:"sm",className:"text-[8px] sm:text-xs",children:m.text})]}),e.jsxs("div",{className:x?"min-w-0 flex-1 sm:w-full sm:flex-none":"",children:[e.jsx("p",{className:"text-[8px] sm:text-xs font-semibold uppercase tracking-wider text-[#5A6A85] mb-0.5 sm:mb-1",children:a}),e.jsx("h4",{className:`text-xs sm:text-2xl font-extrabold text-[#2A3547] tracking-tight leading-tight tabular-nums ${g}`,children:i}),s&&e.jsx("p",{className:"hidden sm:block text-xs text-[#5A6A85] mt-1 leading-relaxed font-normal",children:s})]})]});export{u as M};

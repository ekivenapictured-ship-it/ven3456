import{b as s,j as e,aJ as h,ap as g}from"./vendor-react-DK1NLE7n.js";import{g as k}from"./bioLinks-DrdWVZQ3.js";import{u as j}from"./useSupabaseRealtimeRefresh-D2QwVXAt.js";import{u as w,c}from"./index-Bq7L-As1.js";import"./vendor-supabase-B5bvKxnm.js";import"./vendor-react-dom-BuA-vWUZ.js";import"./vendor-others-Cyi_3W6P.js";import"./vendor-react-query-CZdPsCeS.js";const L=({slug:n})=>{const l=w(),[t,p]=s.useState(null),[x,d]=s.useState(!0),[r,f]=s.useState(""),[u,b]=s.useState(0);if(j("public-bio-link",["bio_link_pages"],()=>{b(i=>i+1)},{realtime:!1,refreshOnFocus:!1}),s.useEffect(()=>{let i=!1;return k(n).then(a=>{i||p(a)}).catch(a=>{i||f(a instanceof Error?a.message:"Halaman link tidak dapat dimuat.")}).finally(()=>{i||d(!1)}),()=>{i=!0}},[n,u]),x)return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-[#f8f8f8] text-sm text-[#737373]",children:c("links.public.loading","Memuat halaman...",l)});if(r||!t)return e.jsx("main",{className:"flex min-h-screen items-center justify-center bg-[#f8f8f8] px-6 text-center",children:e.jsxs("div",{className:"max-w-sm",children:[e.jsx("h1",{className:"text-xl font-semibold text-[#171717]",children:r?"Halaman belum siap":c("links.public.notFound","Link tidak ditemukan",l)}),e.jsx("p",{className:"mt-2 text-sm leading-6 text-[#737373]",children:r||"Halaman ini tidak tersedia atau belum dipublikasikan."})]})});const o=t.whatsapp_number.replace(/\D/g,""),m=o?`https://wa.me/${o}`:"";return e.jsxs("main",{className:"bio-link-page min-h-screen bg-white pb-14 text-[#171717]",style:{fontFamily:"Arial, sans-serif"},children:[e.jsx("style",{children:`
        .bio-link-page .bio-link-button {
          background-color: #171717 !important;
          border-color: #171717 !important;
          color: #ffffff !important;
        }
        .bio-link-page .bio-link-button:hover {
          background-color: #404040 !important;
          border-color: #404040 !important;
        }
        @media (max-width: 639px) {
          .bio-link-page .bio-link-title {
            font-size: 20px !important;
            line-height: 1.25 !important;
            letter-spacing: 0.01em !important;
          }
          .bio-link-page .bio-link-subtitle {
            font-size: 14px !important;
            line-height: 1.4 !important;
            letter-spacing: 0.01em !important;
          }
          .bio-link-page .bio-link-button {
            min-height: 50px !important;
            border-radius: 10px !important;
            font-size: 11px !important;
            letter-spacing: 0.1em !important;
          }
        }
      `}),e.jsxs("div",{className:"mx-auto min-h-screen w-full max-w-[590px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.06)]",children:[e.jsxs("div",{className:"relative h-[170px] overflow-visible bg-[#d4d4d4] sm:h-[220px]",children:[t.cover_url&&e.jsx("img",{src:t.cover_url,alt:"",className:"absolute inset-0 h-full w-full object-cover grayscale",loading:"lazy",decoding:"async"}),e.jsx("div",{className:"absolute inset-0 bg-black/20"}),e.jsx("div",{className:"absolute -bottom-[44px] left-1/2 z-10 h-[104px] w-[104px] -translate-x-1/2 overflow-hidden rounded-full border-[4px] border-white bg-[#d4d4d4] shadow-sm sm:-bottom-[58px] sm:h-[132px] sm:w-[132px] sm:border-[5px]",children:t.avatar_url?e.jsx("img",{src:t.avatar_url,alt:t.title,className:"h-full w-full object-cover grayscale",loading:"lazy",decoding:"async"}):e.jsx("div",{className:"flex h-full w-full items-center justify-center text-4xl font-light text-[#525252]",children:(t.title||"?").slice(0,1).toUpperCase()})})]}),e.jsxs("section",{className:"px-5 pt-[106px] text-center sm:px-6 sm:pt-[164px]",children:[e.jsx("h1",{className:"bio-link-title font-medium tracking-wide text-[#171717]",style:{fontSize:"clamp(1.25rem, 5vw, 1.6875rem)",lineHeight:1.25},children:t.title}),t.subtitle&&e.jsx("p",{className:"bio-link-subtitle mt-2 font-normal tracking-wide text-[#737373] sm:mt-3",style:{fontSize:"clamp(0.875rem, 3.8vw, 1.125rem)",lineHeight:1.45},children:t.subtitle}),e.jsxs("div",{className:"mx-auto mt-6 flex max-w-[535px] flex-col gap-[9px] sm:mt-11 sm:gap-[18px]",children:[m&&e.jsxs("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"bio-link-button flex min-h-[50px] items-center justify-center gap-2 rounded-[10px] border border-[#e5e5e5] bg-white px-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#262626] shadow-sm transition hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#a3a3a3] focus:ring-offset-2 sm:min-h-[72px] sm:gap-3 sm:rounded-[15px] sm:px-5 sm:text-sm sm:tracking-[0.24em]",children:[e.jsx(h,{size:17,"aria-hidden":"true"}),t.whatsapp_label||"WhatsApp"]}),t.links.map(i=>e.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"bio-link-button flex min-h-[50px] items-center justify-center gap-2 rounded-[10px] border border-[#e5e5e5] bg-white px-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#262626] shadow-sm transition hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#a3a3a3] focus:ring-offset-2 sm:min-h-[72px] sm:gap-3 sm:rounded-[15px] sm:px-5 sm:text-sm sm:tracking-[0.24em]",children:[e.jsx(g,{size:16,"aria-hidden":"true"}),i.title]},i.id))]})]})]})]})};export{L as default};

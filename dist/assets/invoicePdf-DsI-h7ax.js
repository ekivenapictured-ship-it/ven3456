import{ad as ae,j as t}from"./vendor-react-Dzj7JIuv.js";import{P as ne,T as de}from"./index-C7jDSzTi.js";import{h as xe,D as be,m as $t,c as he,e as ge,j as L,l as Ut,a as b,M as et,s as g,P as d,d as A,b as z,k as ie,i as r,f as At,C,g as fe}from"./pdfCore-CGVnqKRO.js";const Te=({project:s,profile:l,packages:M=[],client:E,issuedDate:Tt,invoiceNumber:v,id:e="invoice-document"})=>{const f=l||{},dt=M||[],[a,st]=ae.useState(!1);ae.useEffect(()=>{st(!1)},[f.logoBase64]);const y=o=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(o),Q=o=>{if(!o)return"Tanpa Tanggal";try{return new Date(o).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch{return o}},at=Q(s.date),U=(s.projectName||"").replace(/^Acara Pernikahan\s+/i,"").trim(),_=at!=="Tanpa Tanggal"&&U.endsWith(at)?U.slice(0,-at.length).replace(/[\s,–—-]+$/,"").trim():U,Z=Array.isArray(s.addOns)?s.addOns:[],Y=Array.isArray(s.additionalPackages)?s.additionalPackages:[],xt=Array.isArray(s.customCosts)?s.customCosts:[],bt=(Number(s.totalCost)||0)+(Number(s.discountAmount)||0),It=Z.reduce((o,n)=>o+(Number(n?.price)||0),0),Pt=Y.reduce((o,n)=>o+(Number(n?.price)||0),0),D=xt.reduce((o,n)=>o+(Number(n?.amount)||0),0),rt=Math.max(0,bt-It-Pt-(Number(s.transportCost)||0)-D),V=Number(s.amountPaid)||0,X=Math.max(0,(Number(s.totalCost)||0)-V),P=X<=0,h=dt.find(o=>o.id===s.packageId||o.name===s.packageName);let m="",p=[],I=[];if(h){const o=h.durationOptions?.find(n=>n.label===s.durationSelection);m=o?.photographers?.trim()||[h.photographers,h.videographers].filter(Boolean).join(" & "),o&&(o.digitalItems&&o.digitalItems.length>0&&(p=o.digitalItems),o.physicalItems&&o.physicalItems.length>0&&(I=o.physicalItems)),p.length===0&&h.digitalItems&&h.digitalItems.length>0&&(p=h.digitalItems),I.length===0&&h.physicalItems&&h.physicalItems.length>0&&(I=h.physicalItems)}return t.jsxs("div",{id:e,className:"invoice-container invoice-document-mobile bg-white rounded-none border border-slate-200 shadow-xl overflow-visible print:shadow-none print:border-none print:bg-white print:rounded-none mx-auto w-full min-w-0 font-sans text-slate-900",children:[t.jsx("div",{className:"invoice-header avoid-break p-2.5 sm:p-6 border-b-2 sm:border-b-4 border-brand-accent bg-slate-50 print:bg-white print:p-0 print:pt-4 print:pb-4",children:t.jsxs("div",{className:"invoice-header-content flex flex-row justify-between items-start gap-2.5 sm:gap-4",children:[t.jsxs("div",{className:"invoice-brand-panel flex flex-col gap-1 sm:gap-2 flex-1 min-w-0 pr-1",children:[f.logoBase64&&!a?t.jsx("img",{src:f.logoBase64,alt:f.companyName||"Logo",onError:()=>st(!0),className:"invoice-logo h-9 sm:h-20 w-auto max-w-[130px] sm:max-w-[220px] object-contain object-left self-start block shrink-0"}):t.jsxs("div",{className:"invoice-logo-fallback flex items-center gap-1.5 sm:gap-3",children:[t.jsx("div",{className:"w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-brand-accent flex items-center justify-center shrink-0",children:t.jsx("span",{className:"text-white font-bold text-xs sm:text-xl",children:f.companyName?.charAt(0)||"V"})}),t.jsx("h1",{className:"text-xs sm:text-xl font-bold text-slate-800 truncate",children:f.companyName||"Vendor"})]}),t.jsxs("div",{className:"invoice-company-meta text-[7.5px] sm:text-[11px] leading-snug sm:leading-relaxed text-slate-500 max-w-full sm:max-w-[280px] break-words print:text-black",children:[t.jsx("p",{className:"font-bold text-slate-700 print:text-black",children:f.companyName}),t.jsx("p",{children:f.address}),t.jsxs("p",{className:"break-words",children:[f.phone,f.phone&&f.email?" • ":"",f.email]})]})]}),t.jsxs("div",{className:"invoice-meta-panel text-right flex flex-col items-end shrink-0",children:[t.jsx("h2",{className:"invoice-title text-base sm:text-3xl font-black text-brand-accent tracking-tighter mb-0.5 sm:mb-1.5",children:"INVOICE"}),t.jsxs("div",{className:"invoice-meta-badge bg-slate-200 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-sm text-[7.5px] sm:text-[11px] font-bold text-slate-700 mb-1 sm:mb-2 print:bg-white print:border print:border-slate-300",children:["ID: #",v||`INV-${s.id.slice(-8).toUpperCase()}`]}),t.jsxs("div",{className:"invoice-meta-text text-[7.5px] sm:text-[11px] text-slate-500 text-right space-y-0 sm:space-y-0.5 print:text-black",children:[t.jsxs("p",{children:["Diterbitkan: ",t.jsx("span",{className:"font-bold text-slate-700 print:text-black",children:Q(Tt||new Date().toISOString().slice(0,10))})]}),t.jsxs("p",{children:["Status: ",t.jsx("span",{className:`font-bold ${s.paymentStatus===ne.LUNAS?"text-green-600":"text-orange-600"} print:text-black uppercase`,children:s.paymentStatus})]})]})]})]})}),t.jsxs("div",{className:"invoice-body p-2.5 sm:p-6 space-y-2.5 sm:space-y-5 print:p-0 print:pt-4",children:[t.jsxs("div",{className:"invoice-section avoid-break grid grid-cols-2 gap-2.5 sm:gap-6 border-b border-slate-100 pb-2.5 sm:pb-4 print:border-slate-200",children:[t.jsxs("div",{children:[t.jsx("h4",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 sm:mb-2 print:text-slate-500",children:"Penerima Invoice"}),t.jsxs("div",{className:"space-y-0.5 sm:space-y-1",children:[t.jsx("p",{className:"invoice-party-name text-[10px] sm:text-base font-bold text-slate-800 print:text-black",children:s.clientName}),E&&t.jsxs("div",{className:"invoice-party-meta text-[7.5px] sm:text-[11px] text-slate-600 print:text-black space-y-0 sm:space-y-0.5",children:[t.jsx("p",{children:E.phone}),t.jsx("p",{children:E.email})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 sm:mb-2 print:text-slate-500",children:"Detail Layanan"}),t.jsxs("div",{className:"space-y-0.5 sm:space-y-1",children:[t.jsx("p",{className:"invoice-party-name truncate text-[10px] sm:text-base font-bold text-slate-800 print:text-black",title:_||s.projectName,children:_||s.projectName}),t.jsxs("div",{className:"invoice-party-meta grid grid-cols-2 gap-x-1.5 sm:gap-x-3 gap-y-0.5 sm:gap-y-1 text-[7.5px] sm:text-[11px] text-slate-600 print:text-black",children:[t.jsxs("p",{className:"col-span-2 whitespace-nowrap",children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Tanggal Acara:"})," ",at]}),t.jsxs("p",{children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Lokasi:"})," ",s.location]}),t.jsxs("p",{children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Tipe:"})," ",s.projectType]}),s.address&&t.jsxs("p",{className:"col-span-2",children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Alamat:"})," ",s.address]})]})]})]})]}),t.jsx("div",{className:"invoice-table-wrapper mb-2.5 sm:mb-6",children:t.jsxs("table",{className:"invoice-table-tight w-full text-left",children:[t.jsxs("colgroup",{children:[t.jsx("col",{style:{width:"8%"}}),t.jsx("col",{style:{width:"68%"}}),t.jsx("col",{style:{width:"24%"}})]}),t.jsx("thead",{children:t.jsxs("tr",{className:"bg-slate-100 border-b border-black print:bg-slate-50",children:[t.jsx("th",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-[7px] sm:text-[10px] font-black text-black uppercase tracking-widest border-r border-black",children:"No"}),t.jsx("th",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-[7px] sm:text-[10px] font-black text-black uppercase tracking-widest border-r border-black",children:"Deskripsi Produk / Layanan"}),t.jsx("th",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right text-[7px] sm:text-[10px] font-black text-black uppercase tracking-widest",children:"Total Harga"})]})}),t.jsxs("tbody",{className:"divide-y divide-black print:divide-black text-[8px] sm:text-[12px]",children:[t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:"1"}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title invoice-item-title-main font-bold text-slate-800 text-[8.5px] sm:text-[13px] print:text-black m-0 p-0",children:s.packageName}),m&&t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:m})]}),p.length>0?t.jsx("div",{className:"mt-0.5 sm:mt-1 space-y-0 sm:space-y-0.5",children:p.map((o,n)=>t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:o})]},n))}):t.jsx("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 mt-0.5 italic",children:"Package utama layanan profesional"}),I.length>0&&t.jsxs("div",{className:"mt-1 pt-1 sm:mt-1.5 sm:pt-1.5 border-t border-slate-200 space-y-0 sm:space-y-0.5",children:[t.jsx("p",{className:"invoice-item-tag text-[6.5px] sm:text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5",children:"Vendor (Allpackage):"}),I.map((o,n)=>t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:o.name})]},n))]})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-bold text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:y(rt)})]}),Y.map((o,n)=>{const G=dt.find(H=>H.id===o.id||H.name===o.name),N=[...G?.digitalItems||[],...(G?.physicalItems||[]).map(H=>H.name)].filter(Boolean);return t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:2+n}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title invoice-item-title-main font-bold text-slate-800 text-[8.5px] sm:text-[13px] print:text-black m-0 p-0",children:o.name||G?.name}),N.length>0&&t.jsx("div",{className:"mt-0.5 sm:mt-1 space-y-0 sm:space-y-0.5",children:N.map((H,St)=>t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:H})]},`${o.id}-${St}`))})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:y(Number(o.price)||0)})]},o.id||`additional-package-${n}`)}),Z.map((o,n)=>t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:2+Y.length+n}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title font-medium text-slate-800 text-[8px] sm:text-[12px] print:text-black m-0 p-0",children:o.name}),t.jsx("span",{className:"invoice-item-tag block text-[6.5px] sm:text-[9px] text-slate-500 uppercase font-bold tracking-tight mt-0.5",children:"Add-on Item"})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:y(o.price)})]},o.id||n)),Number(s.transportCost)>0&&t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:Y.length+Z.length+2}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title font-medium text-slate-800 text-[8px] sm:text-[12px] print:text-black m-0 p-0",children:"Biaya Transport"}),t.jsx("span",{className:"invoice-item-tag block text-[6.5px] sm:text-[9px] text-slate-500 uppercase font-bold tracking-tight mt-0.5",children:"Logistik & Operasional"})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:y(Number(s.transportCost))})]}),xt.map((o,n)=>{const G=s.transportCost&&Number(s.transportCost)>0?1:0,N=2+Y.length+Z.length+G+n;return t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:N}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsx("div",{className:"invoice-desc-box m-0 p-0 block",children:t.jsx("p",{className:"invoice-item-title font-medium text-slate-800 text-[8px] sm:text-[12px] print:text-black m-0 p-0",children:o.description})})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:y(o.amount)})]},o.id||n)})]})]})}),t.jsxs("div",{className:"invoice-totals avoid-break flex flex-row justify-between items-start gap-2 sm:gap-4 border-t border-slate-100 pt-2.5 sm:pt-4 print:border-slate-200",children:[t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"invoice-payment-box bg-slate-50 p-2 sm:p-3.5 rounded border border-slate-100 print:bg-white print:border-slate-200",children:[t.jsx("h5",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5 sm:mb-1.5",children:"Informasi Pembayaran"}),t.jsx("p",{className:"invoice-bank-text text-[8px] sm:text-[12px] font-bold text-slate-800 mb-0.5 sm:mb-1 print:text-black",children:f.bankAccount}),t.jsx("p",{className:"invoice-payment-note text-[7px] sm:text-[10px] text-slate-500 leading-snug sm:leading-relaxed print:text-black",children:"Silakan kirimkan bukti transfer melalui Whatsapp atau Portal Client setelah melakukan pembayaran."})]}),t.jsxs("div",{className:"invoice-terms mt-1.5 sm:mt-2.5 text-[6.5px] sm:text-[9.5px] text-slate-400 italic leading-snug sm:leading-relaxed print:text-slate-500 whitespace-pre-line",children:['"',f.termsAndConditions||"Terima kasih telah mempercayai layanan kami. Kepuasan Anda adalah prioritas kami.",'"']})]}),t.jsxs("div",{className:"invoice-total-panel w-[140px] sm:w-[280px] shrink-0 space-y-1 sm:space-y-1.5",children:[t.jsxs("div",{className:"invoice-total-row flex justify-between text-[8px] sm:text-[12px] text-slate-600 px-1.5 sm:px-2 print:text-black",children:[t.jsx("span",{children:"Subtotal"}),t.jsx("span",{className:"font-medium",children:y(bt)})]}),s.discountAmount?t.jsxs("div",{className:"invoice-total-row flex justify-between text-[8px] sm:text-[12px] text-red-600 px-1.5 sm:px-2 font-medium",children:[t.jsx("span",{children:"Diskon"}),t.jsxs("span",{children:["-",y(s.discountAmount)]})]}):null,t.jsx("div",{className:"h-px bg-slate-200 my-0.5 sm:my-1"}),t.jsxs("div",{className:"invoice-grand-total flex justify-between items-center px-1.5 py-1 sm:px-2.5 sm:py-1.5 bg-slate-100 rounded print:bg-white print:border print:border-slate-200",children:[t.jsx("span",{className:"invoice-total-label text-[7px] sm:text-[11px] font-black text-slate-600 uppercase print:text-black",children:"Grand Total"}),t.jsx("span",{className:"invoice-grand-val text-[9.5px] sm:text-lg font-black text-brand-accent print:text-black tracking-tight",children:y(s.totalCost)})]}),t.jsxs("div",{className:"invoice-total-row flex justify-between text-[7.5px] sm:text-[11px] text-green-600 px-1.5 sm:px-2 pt-0.5 font-bold",children:[t.jsx("span",{children:"Sudah Dibayar"}),t.jsx("span",{children:y(V)})]}),t.jsxs("div",{className:`invoice-balance-due flex justify-between items-center px-1.5 py-1 sm:px-2.5 sm:py-1.5 border sm:border-2 rounded-md mt-0.5 sm:mt-1 print:bg-white ${P?"border-green-200 bg-green-50 print:border-slate-800":"border-brand-accent/20 bg-brand-accent/5 print:border-slate-800"}`,children:[t.jsx("span",{className:`invoice-total-label text-[7px] sm:text-[11px] font-black uppercase print:text-black ${P?"text-green-700":"text-brand-accent"}`,children:P?"Lunas":"Sisa Pembayaran"}),t.jsx("span",{className:`invoice-balance-val text-[9px] sm:text-base font-black tracking-tight print:text-black ${P?"text-green-700":"text-brand-accent"}`,children:y(X)})]})]})]}),t.jsxs("div",{className:"invoice-signature-section avoid-break grid grid-cols-3 gap-2 sm:gap-6 pt-2.5 sm:pt-4 border-t border-slate-100 print:border-slate-200",children:[t.jsx("div",{className:"col-span-2 flex items-end justify-center pb-1 sm:pb-2",children:t.jsx("p",{className:"invoice-footer-note text-[6.5px] sm:text-[9px] text-slate-400 text-center uppercase tracking-widest font-black",children:"Dicetak Otomatis Vena Pictures"})}),t.jsxs("div",{className:"text-center flex flex-col items-center",children:[t.jsx("p",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2",children:"Hormat Kami,"}),t.jsx("div",{className:"invoice-signature-box h-10 sm:h-14 w-full flex items-center justify-center",children:s.invoiceSignature||f.signatureBase64?t.jsx("img",{src:s.invoiceSignature||f.signatureBase64,alt:"Tanda Tangan",className:"invoice-signature-img h-9 sm:h-14 w-auto max-w-full object-contain grayscale mx-auto block"}):t.jsx("div",{className:"h-px w-14 sm:w-24 bg-slate-200 mx-auto mt-3 sm:mt-6 print:bg-slate-300"})}),t.jsx("p",{className:"invoice-signer-name text-[8px] sm:text-[12px] font-bold text-slate-800 mt-1 sm:mt-1.5 print:text-black underline underline-offset-2 sm:underline-offset-4 decoration-slate-300",children:f.authorizedSigner}),t.jsx("p",{className:"invoice-footer-note text-[6.5px] sm:text-[9px] font-black text-slate-400 uppercase mt-0.5 tracking-tighter",children:f.companyName})]})]})]}),[...s.dpProofUrl?[{url:s.dpProofUrl,label:"Bukti Transfer DP"}]:[],...(s.paymentProofs||[]).map((o,n)=>({url:o.url,label:`Bukti Pembayaran ${n+1}${o.amount?` - ${y(o.amount)}`:""}`}))].map((o,n)=>t.jsxs("section",{className:`invoice-proof-appendix mx-auto w-full max-w-[800px] border-t border-slate-200 bg-white p-4 sm:p-6 print:border-0 ${n>0||s.dpProofUrl?"print:break-before-page":""}`,children:[t.jsx("h3",{className:"mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 print:text-black",children:o.label}),t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"block",children:t.jsx("img",{src:o.url,alt:o.label,className:"mx-auto max-h-[900px] max-w-full object-contain",crossOrigin:"anonymous"})})]},o.url)),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Explicitly style and protect the invoice document from outside index.css pollution */
        #${e}, .invoice-container {
          width: 100% !important;
          max-width: 800px;
          box-sizing: border-box !important;
          background-color: #ffffff !important;
          color: #0f172a !important;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
          -webkit-font-smoothing: antialiased !important;
          overflow: visible !important;
        }
        .force-desktop,
        .html2pdf__container #${e},
        .html2pdf__container .invoice-container {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border-left: none !important;
          border-right: none !important;
          overflow: visible !important;
        }
        #${e} *, .invoice-container * {
          box-sizing: border-box !important;
        }
        #${e} .invoice-table-wrapper, .invoice-container .invoice-table-wrapper {
          page-break-inside: auto !important;
          break-inside: auto !important;
          overflow: visible !important;
          border: none !important;
        }
        #${e} table, .invoice-container table {
          border-collapse: collapse !important;
          border: 1.5px solid #000000 !important;
          width: 100% !important;
          table-layout: fixed !important;
          background-color: #ffffff !important;
          page-break-inside: auto !important;
          break-inside: auto !important;
        }
        #${e} thead, .invoice-container thead {
          display: table-header-group !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        #${e} thead tr, .invoice-container thead tr {
          background-color: #f8fafc !important;
          border-bottom: 1.5px solid #000000 !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        #${e} thead th, .invoice-container thead th {
          background-color: #f8fafc !important;
          border: 1px solid #000000 !important;
          border-top: none !important;
          padding: 7px 10px !important;
          font-size: 10px !important;
          font-weight: 800 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          color: #000000 !important;
          vertical-align: top !important;
        }
        #${e} tbody, .invoice-container tbody {
          page-break-inside: auto !important;
          break-inside: auto !important;
        }
        #${e} tbody tr, .invoice-container tbody tr {
          background-color: #ffffff !important;
          border-bottom: 1px solid #000000 !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          vertical-align: top !important;
        }
        #${e} tbody tr:nth-child(even), .invoice-container tbody tr:nth-child(even) {
          background-color: #ffffff !important;
        }
        #${e} {
          width: 100% !important;
          max-width: 800px;
          box-sizing: border-box !important;
          background-color: #ffffff !important;
        }
        .force-desktop,
        .html2pdf__container #${e} {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
        }
        #${e} tbody td, .invoice-container tbody td {
          border: 1px solid #000000 !important;
          padding: 6px 10px !important;
          padding-top: 6px !important;
          padding-bottom: 6px !important;
          background-color: #ffffff !important;
          vertical-align: top !important;
          color: #000000 !important;
          line-height: 1.15 !important;
        }
        #${e} p, .invoice-container p {
          margin: 0 !important;
          line-height: 1.35 !important;
        }
        #${e} tbody td .invoice-desc-box,
        .invoice-container tbody td .invoice-desc-box {
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
        }
        #${e} tbody td .invoice-item-title,
        .invoice-container tbody td .invoice-item-title {
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1.15 !important;
          display: block !important;
        }
        #${e} tbody td .invoice-item-title-main,
        .invoice-container tbody td .invoice-item-title-main {
          line-height: 1.08 !important;
        }
        #${e} tbody td .invoice-item-sub,
        .invoice-container tbody td .invoice-item-sub {
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1.25 !important;
        }
        #${e} tbody td .invoice-item-tag,
        .invoice-container tbody td .invoice-item-tag {
          margin-top: 2px !important;
          margin-bottom: 0 !important;
          padding: 0 !important;
          line-height: 1.15 !important;
          display: block !important;
        }
        @media (max-width: 768px) {
          #${e}:not(.force-desktop) {
            overflow: hidden !important;
          }
          #${e}:not(.force-desktop) .invoice-header {
            padding: 10px 12px !important;
          }
          #${e}:not(.force-desktop) .invoice-header-content {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 8px !important;
            width: 100% !important;
          }
          #${e}:not(.force-desktop) .invoice-brand-panel {
            flex: 1 1 0% !important;
            min-width: 0 !important;
            width: auto !important;
            max-width: 56% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          #${e}:not(.force-desktop) .invoice-meta-panel {
            flex: 0 0 auto !important;
            width: auto !important;
            max-width: 44% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-end !important;
            text-align: right !important;
          }
          #${e}:not(.force-desktop) .invoice-body {
            padding: 10px 12px !important;
          }
          #${e}:not(.force-desktop) .invoice-logo {
            display: block !important;
            height: 32px !important;
            max-height: 32px !important;
            width: auto !important;
            max-width: 120px !important;
            object-fit: contain !important;
            object-position: left center !important;
            margin-bottom: 2px !important;
          }
          #${e}:not(.force-desktop) .invoice-title {
            font-size: 14px !important;
            line-height: 1.1 !important;
            color: var(--color-accent, #3b82f6) !important;
            text-align: right !important;
            margin-bottom: 3px !important;
          }
          #${e}:not(.force-desktop) .invoice-meta-badge {
            font-size: 7px !important;
            padding: 2px 6px !important;
            white-space: nowrap !important;
            margin-bottom: 3px !important;
          }
          #${e}:not(.force-desktop) .invoice-company-meta {
            width: 100% !important;
            max-width: 100% !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
          }
          #${e}:not(.force-desktop) .invoice-company-meta p {
            font-size: 7px !important;
            line-height: 1.35 !important;
            white-space: normal !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
          }
          #${e}:not(.force-desktop) .invoice-meta-text {
            text-align: right !important;
            width: 100% !important;
          }
          #${e}:not(.force-desktop) .invoice-meta-text p,
          #${e}:not(.force-desktop) .invoice-meta-text span {
            font-size: 7px !important;
            line-height: 1.35 !important;
            white-space: nowrap !important;
            text-align: right !important;
          }
          #${e}:not(.force-desktop) .invoice-section {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
            padding-bottom: 8px !important;
          }
          #${e}:not(.force-desktop) .invoice-section > div {
            min-width: 0 !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
          }
          #${e}:not(.force-desktop) .invoice-party-meta p,
          #${e}:not(.force-desktop) .invoice-party-meta span {
            font-size: 7px !important;
            line-height: 1.3 !important;
          }
          #${e}:not(.force-desktop) .invoice-section-label {
            font-size: 6.5px !important;
            line-height: 1.2 !important;
          }
          #${e}:not(.force-desktop) .invoice-party-name {
            font-size: 9.5px !important;
            line-height: 1.25 !important;
          }
          #${e}:not(.force-desktop) .invoice-table-wrapper {
            overflow-x: hidden !important;
            display: block !important;
            width: 100% !important;
            margin-bottom: 10px !important;
          }
          #${e}:not(.force-desktop) table {
            table-layout: fixed !important;
            min-width: 0 !important;
            width: 100% !important;
            font-size: 7.5px !important;
            border: 1px solid #000000 !important;
          }
          #${e}:not(.force-desktop) thead th,
          #${e}:not(.force-desktop) tbody td {
            font-size: 7.5px !important;
            padding: 3.5px 5px !important;
            padding-top: 3.5px !important;
            padding-bottom: 3.5px !important;
            line-height: 1.15 !important;
            vertical-align: top !important;
          }
          #${e}:not(.force-desktop) thead th {
            font-size: 7px !important;
            letter-spacing: 0.03em !important;
            white-space: nowrap !important;
          }
          #${e}:not(.force-desktop) .invoice-item-title {
            font-size: 8px !important;
            line-height: 1.15 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          #${e}:not(.force-desktop) .invoice-item-title-main {
            line-height: 1.1 !important;
          }
          #${e}:not(.force-desktop) .invoice-item-sub {
            font-size: 6.5px !important;
            line-height: 1.25 !important;
          }
          #${e}:not(.force-desktop) .invoice-item-tag {
            font-size: 6px !important;
            line-height: 1.15 !important;
          }
          #${e}:not(.force-desktop) tbody td:first-child {
            width: 8% !important;
          }
          #${e}:not(.force-desktop) tbody td:nth-child(2) {
            width: 66% !important;
          }
          #${e}:not(.force-desktop) tbody td:nth-child(3) {
            width: 26% !important;
            white-space: nowrap !important;
            text-align: right !important;
            font-size: 7.5px !important;
          }
          #${e}:not(.force-desktop) .invoice-totals {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 10px !important;
            padding: 8px 0 0 0 !important;
            background: transparent !important;
            border-left: none !important;
            border-right: none !important;
            border-bottom: none !important;
            border-radius: 0 !important;
            margin-bottom: 0 !important;
          }
          #${e}:not(.force-desktop) .invoice-payment-box {
            padding: 6px 8px !important;
          }
          #${e}:not(.force-desktop) .invoice-bank-text {
            font-size: 7.5px !important;
            line-height: 1.25 !important;
          }
          #${e}:not(.force-desktop) .invoice-payment-note {
            font-size: 6.5px !important;
            line-height: 1.25 !important;
          }
          #${e}:not(.force-desktop) .invoice-terms {
            font-size: 6px !important;
            line-height: 1.25 !important;
          }
          #${e}:not(.force-desktop) .invoice-total-panel {
            width: 43% !important;
            min-width: 132px !important;
            max-width: 165px !important;
          }
          #${e}:not(.force-desktop) .invoice-total-row,
          #${e}:not(.force-desktop) .invoice-grand-total,
          #${e}:not(.force-desktop) .invoice-balance-due {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            white-space: nowrap !important;
          }
          #${e}:not(.force-desktop) .invoice-total-row,
          #${e}:not(.force-desktop) .invoice-total-row span {
            font-size: 7px !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
          }
          #${e}:not(.force-desktop) .invoice-total-label {
            font-size: 6.5px !important;
            line-height: 1.15 !important;
            white-space: nowrap !important;
          }
          #${e}:not(.force-desktop) .invoice-grand-val {
            font-size: 8.5px !important;
            line-height: 1.15 !important;
            white-space: nowrap !important;
          }
          #${e}:not(.force-desktop) .invoice-balance-val {
            font-size: 8px !important;
            line-height: 1.15 !important;
            white-space: nowrap !important;
          }
          #${e}:not(.force-desktop) .invoice-signature-section {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 8px !important;
            padding: 8px 0 0 0 !important;
            box-shadow: none !important;
            border-left: none !important;
            border-right: none !important;
            border-bottom: none !important;
            border-radius: 0 !important;
          }
          #${e}:not(.force-desktop) .invoice-signature-box {
            height: 36px !important;
            min-height: 36px !important;
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          #${e}:not(.force-desktop) .invoice-signature-img {
            display: block !important;
            height: 32px !important;
            max-height: 32px !important;
            width: auto !important;
            max-width: 100% !important;
            object-fit: contain !important;
            margin: 0 auto !important;
          }
          #${e}:not(.force-desktop) .invoice-signer-name {
            font-size: 7.5px !important;
            line-height: 1.2 !important;
          }
          #${e}:not(.force-desktop) .invoice-footer-note {
            font-size: 6px !important;
            line-height: 1.2 !important;
          }
        }
        .avoid-break {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        .html2pdf-pad-row td {
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          background: transparent !important;
        }

        @media print {
          @page {
            margin: 6mm 8mm !important;
            size: A4 portrait;
          }
          body * { 
            visibility: hidden !important; 
          }
          #${e}, #${e} * { 
            visibility: visible !important; 
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          #${e} {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}})]})},ue=(s,l=[])=>l.filter(M=>M.projectId===s&&M.type===de.INCOME).sort((M,E)=>E.date.localeCompare(M.date))[0]?.date||new Date().toISOString().slice(0,10),ke=s=>`Invoice-${(s.projectName||s.clientName||"Invoice").replace(/[\\/:*?"<>|\s]+/g,"_")||s.id.slice(-8)}.pdf`,ve=async s=>{const{project:l,packages:M=[],client:E}=s,Tt=s.issuedDate||ue(l.id),v=s.profile||{},e=xe(v.brandColor)||be,f=$t(e,.92),dt=$t(e,.55),a=he("portrait");await ge(a);const st=[...l.dpProofUrl?[{url:l.dpProofUrl,label:"BUKTI TRANSFER DP"}]:[],...(l.paymentProofs||[]).map((i,c)=>({url:i.url,label:`BUKTI PEMBAYARAN ${c+1}${i.amount?` - ${L(i.amount)}`:""}`}))],[y,Q,...at]=await Promise.all([Ut(v.logoBase64),Ut(l.invoiceSignature||v.signatureBase64,{grayscale:!0}),...st.map(i=>Ut(i.url))]),U=Array.isArray(l.addOns)?l.addOns:[],_=Array.isArray(l.additionalPackages)?l.additionalPackages:[],Z=Array.isArray(l.customCosts)?l.customCosts:[],Y=(Number(l.totalCost)||0)+(Number(l.discountAmount)||0),xt=U.reduce((i,c)=>i+(Number(c?.price)||0),0),bt=_.reduce((i,c)=>i+(Number(c?.price)||0),0),It=Z.reduce((i,c)=>i+(Number(c?.amount)||0),0),Pt=Math.max(0,Y-xt-bt-(Number(l.transportCost)||0)-It),D=M.find(i=>i.id===l.packageId||i.name===l.packageName);let rt="",V=[],X=[];if(D){const i=D.durationOptions?.find(c=>c.label===l.durationSelection);rt=i?.photographers?.trim()||[D.photographers,D.videographers].filter(Boolean).join(" & "),i?.digitalItems?.length&&(V=i.digitalItems),i?.physicalItems?.length&&(X=i.physicalItems),V.length===0&&D.digitalItems?.length&&(V=D.digitalItems),X.length===0&&D.physicalItems?.length&&(X=D.physicalItems)}const{fill:P,stroke:h,ink:m,setFont:p,writeLines:I,wrap:o}=fe(a);let n=et;const G=n;let N=G;const H=46,St=15;if(y){const i=y.width/y.height;let c=St,x=c*i;x>H&&(x=H,c=x/i);try{a.addImage(y.dataUrl,"PNG",b,N,x,c,void 0,"FAST")}catch{}N+=c+2.2}else P(e),a.roundedRect(b,N,7.5,7.5,1.2,1.2,"F"),p(11,"bold"),m(r.white),a.text(g((v.companyName||"V").charAt(0).toUpperCase()),b+7.5/2,N+7.5/2+11*d/2,{align:"center"}),p(12,"bold"),m(r.text),a.text(g(v.companyName||"Vendor"),b+7.5+2.5,N+7.5/2+12*d/2),N+=7.5+2.2;const Ct=[];v.address&&Ct.push(g(v.address));const _t=[v.phone,v.email].filter(Boolean).join(" • ");_t&&Ct.push(g(_t)),p(8.5,"bold"),m(r.textSoft),a.text(g(v.companyName||"Vendor"),b,N+8.5*d),N+=A(8.5,1.3),N=I(Ct,b,N,7,"normal",r.muted,"left",1.35);let R=G;p(20,"bold"),m(e),a.text("INVOICE",z,R+20*d,{align:"right"}),R+=A(20,1.05)+1.2;const Yt=`ID: #INV-${g(l.id||"").slice(-8).toUpperCase()}`;p(7.5,"bold");const Vt=3,Xt=a.getTextWidth(Yt)+Vt*2,Lt=5.2;P(r.badge),a.roundedRect(z-Xt,R,Xt,Lt,.8,.8,"F"),m(r.textSoft),a.text(Yt,z-Vt,R+Lt/2,{align:"right",baseline:"middle"}),R+=Lt+1.6;const Gt=(i,c,x)=>{p(7.5,"normal");const u=g(i),j=g(c);m(r.label);const T=a.getTextWidth(u);p(7.5,"bold");const k=a.getTextWidth(j),$=z-(T+k+1);p(7.5,"normal"),m(r.label),a.text(u,$,R+7.5*d),p(7.5,"bold"),m(x),a.text(j,z-k,R+7.5*d),R+=A(7.5,1.35)};Gt("Diterbitkan: ",ie(Tt),r.text),Gt("Status: ",String(l.paymentStatus||"").toUpperCase(),l.paymentStatus===ne.LUNAS?r.green:r.orange),n=Math.max(N,R)+2,h(e),a.setLineWidth(.8),a.line(b,n,z,n),n+=4.5;const Kt=6,ht=(C-Kt)/2,Dt=b,it=b+ht+Kt;let lt=n;p(7,"bold"),m(r.muted),a.text("PENERIMA INVOICE",Dt,lt+7*d),a.text("DETAIL LAYANAN",it,lt+7*d),lt+=A(7,1.2)+1.4;let pt=lt;p(10,"bold"),m(r.text),a.text(g(l.clientName||"-"),Dt,pt+10*d),pt+=A(10,1.25)+.6,E&&(pt=I([E.phone,E.email].filter(Boolean).map(g),Dt,pt,7.5,"normal",r.textSoft,"left",1.3));let W=lt;const gt=ie(l.date),Wt=(l.projectName||"").replace(/^Acara Pernikahan\s+/i,"").trim(),oe=gt!=="Tanpa Tanggal"&&Wt.endsWith(gt)?Wt.slice(0,-gt.length).replace(/[\s,–—-]+$/,"").trim():Wt;p(10,"bold"),m(r.text),a.text(g(oe||l.projectName||"-"),it,W+10*d),W+=A(10,1.25)+.6;const ft=(i,c,x,u,j)=>{p(7.5,"normal");const T=g(i);m(r.muted),a.text(T,x,u+7.5*d);const k=a.getTextWidth(T);m(r.textSoft);const $=o(c||"-",Math.max(8,j-k));let tt=u;return $.forEach(me=>{a.text(me,x+k,tt+7.5*d),tt+=A(7.5,1.3)}),tt};W=ft("Tanggal Acara: ",gt,it,W,ht);const Bt=ht/2;W=Math.max(ft("Lokasi: ",l.location||"-",it,W,Bt-2),ft("Tipe: ",l.projectType||"-",it+Bt,W,Bt-2)),l.address&&(W=ft("Alamat: ",l.address,it,W,ht)),n=Math.max(pt,W)+2,h(r.borderSoft),a.setLineWidth(.2),a.line(b,n,z,n),n+=4;const ut=C*.08,kt=C*.68,qt=C-ut-kt,Ot=b,S=Ot+ut,nt=S+kt,B=2,vt=1.8,yt=kt-B*2,ot=[];ot.push({no:"1",title:g(l.packageName||"-"),titleSize:8.5,titleBold:!0,subs:[...rt?[rt]:[],...V.length>0?V:["Package utama layanan profesional"]],physicalLabel:X.length>0?"Vendor (Allpackage):":void 0,physicals:X.map(i=>i.name),price:L(Pt)}),_.forEach((i,c)=>{const x=M.find(j=>j.id===i.id||j.name===i.name),u=[...x?.digitalItems||[],...(x?.physicalItems||[]).map(j=>j.name)].filter(Boolean);ot.push({no:String(2+c),title:g(i.name||x?.name||"-"),titleSize:8.5,titleBold:!0,subs:u,physicals:[],price:L(Number(i.price)||0)})}),U.forEach((i,c)=>{ot.push({no:String(2+_.length+c),title:g(i.name||"-"),titleSize:8,titleBold:!1,subs:["Add-on Item"],physicals:[],price:L(Number(i.price)||0)})}),l.transportCost&&Number(l.transportCost)>0&&ot.push({no:String(_.length+U.length+2),title:"Biaya Transport",titleSize:8,titleBold:!1,subs:["Logistik & Operasional"],physicals:[],price:L(Number(l.transportCost))}),Z.forEach((i,c)=>{const x=l.transportCost&&Number(l.transportCost)>0?1:0,u=2+_.length+U.length+x+c;ot.push({no:String(u),title:g(i.description||"-"),titleSize:8,titleBold:!1,subs:[],physicals:[],price:L(Number(i.amount)||0)})});const Jt=()=>{P(r.headBg),a.rect(b,n,C,6.6,"F"),h(r.black),a.setLineWidth(.25),a.rect(b,n,C,6.6,"S"),a.line(S,n,S,n+6.6),a.line(nt,n,nt,n+6.6),p(7,"bold"),m(r.black);const c=n+6.6/2+7*d/2;a.text("NO",Ot+ut/2,c,{align:"center"}),a.text("DESKRIPSI PRODUK / LAYANAN",S+B,c),a.text("TOTAL HARGA",nt+qt-B,c,{align:"right"}),n+=6.6};Jt(),ot.forEach(i=>{p(i.titleSize,i.titleBold?"bold":"normal");const c=o(i.title,yt);p(7,"normal");const x=i.subs.flatMap(tt=>o(`•  ${tt}`,yt));p(6.5,"bold");const u=i.physicalLabel?o(i.physicalLabel,yt):[];p(7,"normal");const j=i.physicals.flatMap(tt=>o(`•  ${tt}`,yt));let T=c.length*A(i.titleSize,1.15);T+=x.length*A(7,1.25),i.physicals.length>0&&(T+=1.4+u.length*A(6.5,1.2),T+=j.length*A(7,1.25));const k=vt*2+T;n+k>At&&(a.addPage(),n=et,Jt()),P(r.white),a.rect(b,n,C,k,"F"),h(r.black),a.setLineWidth(.2),a.rect(b,n,C,k,"S"),a.line(S,n,S,n+k),a.line(nt,n,nt,n+k),p(8,"normal"),m(r.text),a.text(i.no,Ot+ut/2,n+vt+8*d,{align:"center"}),p(8,i.titleBold?"bold":"normal"),m(r.text),a.text(i.price,nt+qt-B,n+vt+8*d,{align:"right"});let $=n+vt;$=I(c,S+B,$,i.titleSize,i.titleBold?"bold":"normal",r.text,"left",1.15),x.length&&($=I(x,S+B,$,7,"normal",r.muted,"left",1.25)),i.physicals.length>0&&(h(r.borderSoft),a.setLineWidth(.15),a.line(S+B,$+.6,S+kt-B,$+.6),$+=1.4,$=I(u,S+B,$,6.5,"bold",r.label,"left",1.2),$=I(j,S+B,$,7,"normal",r.muted,"left",1.25)),n+=k});const K=80,O=z-K,zt=C-K-6,se=v.termsAndConditions||"Terima kasih telah mempercayai layanan kami. Kepuasan Anda adalah prioritas kami.",re="Silakan kirimkan bukti transfer melalui Whatsapp atau Portal Client setelah melakukan pembayaran.";p(7,"normal");const Qt=o(re,zt-6);p(6.5,"italic");const Zt=o(`"${se}"`,zt),Mt=11+Qt.length*A(7,1.3)+3,le=Math.max(Mt+2.5+Zt.length*A(6.5,1.3),9+5.2+1.5+9+5.2+9);n+le+4>At&&(a.addPage(),n=et);let q=n+5;h(r.borderSoft),a.setLineWidth(.2),a.line(b,q-2.5,z,q-2.5),P(r.panel),h(r.borderSoft),a.setLineWidth(.2),a.roundedRect(b,q,zt,Mt,1,1,"FD"),p(7,"bold"),m(r.label),a.text("INFORMASI PEMBAYARAN",b+3,q+3+7*d),p(9,"bold"),m(r.text),a.text(g(v.bankAccount||"-"),b+3,q+8.5+9*d),p(7,"normal"),m(r.label);let te=q+12.5;Qt.forEach(i=>{a.text(i,b+3,te+7*d),te+=A(7,1.3)});let Et=q+Mt+2.5;Et=I(Zt,b,Et,6.5,"italic",r.muted,"left",1.3);let w=q;const pe=5.2,Ht=(i,c,x,u="normal")=>{p(9,u),m(x),a.text(g(i),O+2,w+9*d),a.text(g(c),O+K-2,w+9*d,{align:"right"}),w+=pe};Ht("Subtotal",L(Y),r.textSoft),l.discountAmount&&Ht("Diskon",L(Math.abs(Number(l.discountAmount)||0)),r.red,"bold"),h(r.borderSoft),a.setLineWidth(.2),a.line(O,w+.6,O+K,w+.6),w+=2.4;const Nt=9.5;P(r.headBg),a.roundedRect(O,w,K,Nt,1,1,"F"),p(8,"bold"),m(r.label),a.text("GRAND TOTAL",O+2.5,w+Nt/2+8*d/2),p(12,"bold"),m(e),a.text(L(l.totalCost),O+K-2.5,w+Nt/2+12*d/2,{align:"right"}),w+=Nt+1.6,Ht("Sudah Dibayar",L(l.amountPaid||0),r.green,"bold");const ce=Number(l.amountPaid)||0,ee=Math.max(0,(Number(l.totalCost)||0)-ce),wt=ee<=0,jt=9.5;P(wt?$t(r.green,.9):f),h(wt?$t(r.green,.55):dt),a.setLineWidth(.3),a.roundedRect(O,w,K,jt,1,1,"FD"),p(8,"bold"),m(wt?r.green:e),a.text(wt?"LUNAS":"SISA PEMBAYARAN",O+2.5,w+jt/2+8*d/2),p(11,"bold"),a.text(L(ee),O+K-2.5,w+jt/2+11*d/2,{align:"right"}),w+=jt,n=Math.max(w,Et)+4,n+30>At&&(a.addPage(),n=et),h(r.borderSoft),a.setLineWidth(.2),a.line(b,n,z,n),n+=4;const Rt=6,ct=(C-Rt*2)/3,J=b+2*(ct+Rt)+ct/2;p(6.5,"bold"),m(r.muted),a.text("DICETAK OTOMATIS VENA PICTURES",b+(ct*2+Rt)/2,n+6.5*d,{align:"center"}),p(7,"bold"),m(r.muted),a.text("HORMAT KAMI,",J,n+7*d,{align:"center"});let F=n+7*d+3;const mt=14;if(Q){const i=Q.width/Q.height;let c=mt,x=c*i;x>ct&&(x=ct,c=x/i);try{a.addImage(Q.dataUrl,"PNG",J-x/2,F+(mt-c)/2,x,c,void 0,"FAST")}catch{}}else h(r.border),a.setLineWidth(.2),a.line(J-12,F+mt-1,J+12,F+mt-1);F+=mt+1.6;const Ft=g(v.authorizedSigner||"");if(p(8.5,"bold"),m(r.text),a.text(Ft,J,F+8.5*d,{align:"center"}),Ft){const i=a.getTextWidth(Ft);h(r.border),a.setLineWidth(.15),a.line(J-i/2,F+8.5*d+.9,J+i/2,F+8.5*d+.9)}return F+=A(8.5,1.3),p(6.5,"bold"),m(r.muted),a.text(g(v.companyName||""),J,F+6.5*d,{align:"center"}),at.forEach((i,c)=>{if(!i)return;a.addPage(),p(14,"bold"),m(e),a.text(g(st[c].label),b,et+6);const x=C,u=At-et-18,j=i.width/i.height;let T=x,k=T/j;k>u&&(k=u,T=k*j);try{a.addImage(i.dataUrl,"PNG",b+(C-T)/2,et+14,T,k,void 0,"FAST")}catch{}}),a},Ie=async s=>{(await ve(s)).save(ke(s.project))};export{Te as I,Ie as d,ue as g};

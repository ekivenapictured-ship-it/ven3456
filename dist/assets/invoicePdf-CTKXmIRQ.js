import{ad as Qt,j as t}from"./vendor-react-DK1NLE7n.js";import{P as ee,T as pe}from"./index-Bq7L-As1.js";import{h as ce,D as me,m as Zt,c as de,e as xe,j as W,l as Mt,a as x,M as Z,s as h,P as m,d as $,b as E,k as te,i as r,f as wt,C,g as he}from"./pdfCore-B9e0lykY.js";const je=({project:s,profile:p,packages:M=[],client:H,issuedDate:jt,invoiceNumber:k,id:e="invoice-document"})=>{const b=p||{},ct=M||[],[a,nt]=Qt.useState(!1);Qt.useEffect(()=>{nt(!1)},[b.logoBase64]);const v=i=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(i),q=i=>{if(!i)return"Tanpa Tanggal";try{return new Date(i).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch{return i}},tt=q(s.date),_=(s.projectName||"").replace(/^Acara Pernikahan\s+/i,"").trim(),Y=tt!=="Tanpa Tanggal"&&_.endsWith(tt)?_.slice(0,-tt.length).replace(/[\s,–—-]+$/,"").trim():_,J=Array.isArray(s.addOns)?s.addOns:[],V=Array.isArray(s.additionalPackages)?s.additionalPackages:[],mt=Array.isArray(s.customCosts)?s.customCosts:[],dt=(Number(s.totalCost)||0)+(Number(s.discountAmount)||0),$t=J.reduce((i,o)=>i+(Number(o?.price)||0),0),At=V.reduce((i,o)=>i+(Number(o?.price)||0),0),B=mt.reduce((i,o)=>i+(Number(o?.amount)||0),0),ot=Math.max(0,dt-$t-At-(Number(s.transportCost)||0)-B),y=ct.find(i=>i.id===s.packageId||i.name===s.packageName);let R="",T=[],g=[];if(y){const i=y.durationOptions?.find(o=>o.label===s.durationSelection);R=i?.photographers?.trim()||[y.photographers,y.videographers].filter(Boolean).join(" & "),i&&(i.digitalItems&&i.digitalItems.length>0&&(T=i.digitalItems),i.physicalItems&&i.physicalItems.length>0&&(g=i.physicalItems)),T.length===0&&y.digitalItems&&y.digitalItems.length>0&&(T=y.digitalItems),g.length===0&&y.physicalItems&&y.physicalItems.length>0&&(g=y.physicalItems)}return t.jsxs("div",{id:e,className:"invoice-container invoice-document-mobile bg-white rounded-none border border-slate-200 shadow-xl overflow-visible print:shadow-none print:border-none print:bg-white print:rounded-none mx-auto w-full min-w-0 font-sans text-slate-900",children:[t.jsx("div",{className:"invoice-header avoid-break p-2.5 sm:p-6 border-b-2 sm:border-b-4 border-brand-accent bg-slate-50 print:bg-white print:p-0 print:pt-4 print:pb-4",children:t.jsxs("div",{className:"invoice-header-content flex flex-row justify-between items-start gap-2.5 sm:gap-4",children:[t.jsxs("div",{className:"invoice-brand-panel flex flex-col gap-1 sm:gap-2 flex-1 min-w-0 pr-1",children:[b.logoBase64&&!a?t.jsx("img",{src:b.logoBase64,alt:b.companyName||"Logo",onError:()=>nt(!0),className:"invoice-logo h-9 sm:h-20 w-auto max-w-[130px] sm:max-w-[220px] object-contain object-left self-start block shrink-0"}):t.jsxs("div",{className:"invoice-logo-fallback flex items-center gap-1.5 sm:gap-3",children:[t.jsx("div",{className:"w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-brand-accent flex items-center justify-center shrink-0",children:t.jsx("span",{className:"text-white font-bold text-xs sm:text-xl",children:b.companyName?.charAt(0)||"V"})}),t.jsx("h1",{className:"text-xs sm:text-xl font-bold text-slate-800 truncate",children:b.companyName||"Vendor"})]}),t.jsxs("div",{className:"invoice-company-meta text-[7.5px] sm:text-[11px] leading-snug sm:leading-relaxed text-slate-500 max-w-full sm:max-w-[280px] break-words print:text-black",children:[t.jsx("p",{className:"font-bold text-slate-700 print:text-black",children:b.companyName}),t.jsx("p",{children:b.address}),t.jsxs("p",{className:"break-words",children:[b.phone,b.phone&&b.email?" • ":"",b.email]})]})]}),t.jsxs("div",{className:"invoice-meta-panel text-right flex flex-col items-end shrink-0",children:[t.jsx("h2",{className:"invoice-title text-base sm:text-3xl font-black text-brand-accent tracking-tighter mb-0.5 sm:mb-1.5",children:"INVOICE"}),t.jsxs("div",{className:"invoice-meta-badge bg-slate-200 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-sm text-[7.5px] sm:text-[11px] font-bold text-slate-700 mb-1 sm:mb-2 print:bg-white print:border print:border-slate-300",children:["ID: #",k||`INV-${s.id.slice(-8).toUpperCase()}`]}),t.jsxs("div",{className:"invoice-meta-text text-[7.5px] sm:text-[11px] text-slate-500 text-right space-y-0 sm:space-y-0.5 print:text-black",children:[t.jsxs("p",{children:["Diterbitkan: ",t.jsx("span",{className:"font-bold text-slate-700 print:text-black",children:q(jt||new Date().toISOString().slice(0,10))})]}),t.jsxs("p",{children:["Status: ",t.jsx("span",{className:`font-bold ${s.paymentStatus===ee.LUNAS?"text-green-600":"text-orange-600"} print:text-black uppercase`,children:s.paymentStatus})]})]})]})]})}),t.jsxs("div",{className:"invoice-body p-2.5 sm:p-6 space-y-2.5 sm:space-y-5 print:p-0 print:pt-4",children:[t.jsxs("div",{className:"invoice-section avoid-break grid grid-cols-2 gap-2.5 sm:gap-6 border-b border-slate-100 pb-2.5 sm:pb-4 print:border-slate-200",children:[t.jsxs("div",{children:[t.jsx("h4",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 sm:mb-2 print:text-slate-500",children:"Penerima Invoice"}),t.jsxs("div",{className:"space-y-0.5 sm:space-y-1",children:[t.jsx("p",{className:"invoice-party-name text-[10px] sm:text-base font-bold text-slate-800 print:text-black",children:s.clientName}),H&&t.jsxs("div",{className:"invoice-party-meta text-[7.5px] sm:text-[11px] text-slate-600 print:text-black space-y-0 sm:space-y-0.5",children:[t.jsx("p",{children:H.phone}),t.jsx("p",{children:H.email})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 sm:mb-2 print:text-slate-500",children:"Detail Layanan"}),t.jsxs("div",{className:"space-y-0.5 sm:space-y-1",children:[t.jsx("p",{className:"invoice-party-name truncate text-[10px] sm:text-base font-bold text-slate-800 print:text-black",title:Y||s.projectName,children:Y||s.projectName}),t.jsxs("div",{className:"invoice-party-meta grid grid-cols-2 gap-x-1.5 sm:gap-x-3 gap-y-0.5 sm:gap-y-1 text-[7.5px] sm:text-[11px] text-slate-600 print:text-black",children:[t.jsxs("p",{className:"col-span-2 whitespace-nowrap",children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Tanggal Acara:"})," ",tt]}),t.jsxs("p",{children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Lokasi:"})," ",s.location]}),t.jsxs("p",{children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Tipe:"})," ",s.projectType]}),s.address&&t.jsxs("p",{className:"col-span-2",children:[t.jsx("span",{className:"text-slate-400 font-medium",children:"Alamat:"})," ",s.address]})]})]})]})]}),t.jsx("div",{className:"invoice-table-wrapper mb-2.5 sm:mb-6",children:t.jsxs("table",{className:"invoice-table-tight w-full text-left",children:[t.jsxs("colgroup",{children:[t.jsx("col",{style:{width:"8%"}}),t.jsx("col",{style:{width:"68%"}}),t.jsx("col",{style:{width:"24%"}})]}),t.jsx("thead",{children:t.jsxs("tr",{className:"bg-slate-100 border-b border-black print:bg-slate-50",children:[t.jsx("th",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-[7px] sm:text-[10px] font-black text-black uppercase tracking-widest border-r border-black",children:"No"}),t.jsx("th",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-[7px] sm:text-[10px] font-black text-black uppercase tracking-widest border-r border-black",children:"Deskripsi Produk / Layanan"}),t.jsx("th",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right text-[7px] sm:text-[10px] font-black text-black uppercase tracking-widest",children:"Total Harga"})]})}),t.jsxs("tbody",{className:"divide-y divide-black print:divide-black text-[8px] sm:text-[12px]",children:[t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:"1"}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title invoice-item-title-main font-bold text-slate-800 text-[8.5px] sm:text-[13px] print:text-black m-0 p-0",children:s.packageName}),R&&t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:R})]}),T.length>0?t.jsx("div",{className:"mt-0.5 sm:mt-1 space-y-0 sm:space-y-0.5",children:T.map((i,o)=>t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:i})]},o))}):t.jsx("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 mt-0.5 italic",children:"Package utama layanan profesional"}),g.length>0&&t.jsxs("div",{className:"mt-1 pt-1 sm:mt-1.5 sm:pt-1.5 border-t border-slate-200 space-y-0 sm:space-y-0.5",children:[t.jsx("p",{className:"invoice-item-tag text-[6.5px] sm:text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5",children:"Vendor (Allpackage):"}),g.map((i,o)=>t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:i.name})]},o))]})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-bold text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:v(ot)})]}),V.map((i,o)=>{const I=ct.find(l=>l.id===i.id||l.name===i.name),P=[...I?.digitalItems||[],...(I?.physicalItems||[]).map(l=>l.name)].filter(Boolean);return t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:2+o}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title invoice-item-title-main font-bold text-slate-800 text-[8.5px] sm:text-[13px] print:text-black m-0 p-0",children:i.name||I?.name}),P.length>0&&t.jsx("div",{className:"mt-0.5 sm:mt-1 space-y-0 sm:space-y-0.5",children:P.map((l,xt)=>t.jsxs("p",{className:"invoice-item-sub text-[7px] sm:text-[10px] text-slate-500 leading-tight flex items-start gap-1",children:[t.jsx("span",{className:"shrink-0",children:"•"}),t.jsx("span",{children:l})]},`${i.id}-${xt}`))})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:v(Number(i.price)||0)})]},i.id||`additional-package-${o}`)}),J.map((i,o)=>t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:2+V.length+o}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title font-medium text-slate-800 text-[8px] sm:text-[12px] print:text-black m-0 p-0",children:i.name}),t.jsx("span",{className:"invoice-item-tag block text-[6.5px] sm:text-[9px] text-slate-500 uppercase font-bold tracking-tight mt-0.5",children:"Add-on Item"})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:v(i.price)})]},i.id||o)),Number(s.transportCost)>0&&t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:V.length+J.length+2}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsxs("div",{className:"invoice-desc-box m-0 p-0 block",children:[t.jsx("p",{className:"invoice-item-title font-medium text-slate-800 text-[8px] sm:text-[12px] print:text-black m-0 p-0",children:"Biaya Transport"}),t.jsx("span",{className:"invoice-item-tag block text-[6.5px] sm:text-[9px] text-slate-500 uppercase font-bold tracking-tight mt-0.5",children:"Logistik & Operasional"})]})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:v(Number(s.transportCost))})]}),mt.map((i,o)=>{const I=s.transportCost&&Number(s.transportCost)>0?1:0,P=2+V.length+J.length+I+o;return t.jsxs("tr",{className:"align-top bg-white",children:[t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-center text-slate-800 font-medium border-r border-black align-top",children:P}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 border-r border-black align-top",children:t.jsx("div",{className:"invoice-desc-box m-0 p-0 block",children:t.jsx("p",{className:"invoice-item-title font-medium text-slate-800 text-[8px] sm:text-[12px] print:text-black m-0 p-0",children:i.description})})}),t.jsx("td",{className:"px-1.5 py-1 sm:px-3 sm:py-2 text-right font-medium text-slate-800 text-[8px] sm:text-[12px] whitespace-nowrap print:text-black align-top",children:v(i.amount)})]},i.id||o)})]})]})}),t.jsxs("div",{className:"invoice-totals avoid-break flex flex-row justify-between items-start gap-2 sm:gap-4 border-t border-slate-100 pt-2.5 sm:pt-4 print:border-slate-200",children:[t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"invoice-payment-box bg-slate-50 p-2 sm:p-3.5 rounded border border-slate-100 print:bg-white print:border-slate-200",children:[t.jsx("h5",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5 sm:mb-1.5",children:"Informasi Pembayaran"}),t.jsx("p",{className:"invoice-bank-text text-[8px] sm:text-[12px] font-bold text-slate-800 mb-0.5 sm:mb-1 print:text-black",children:b.bankAccount}),t.jsx("p",{className:"invoice-payment-note text-[7px] sm:text-[10px] text-slate-500 leading-snug sm:leading-relaxed print:text-black",children:"Silakan kirimkan bukti transfer melalui Whatsapp atau Portal Client setelah melakukan pembayaran."})]}),t.jsxs("div",{className:"invoice-terms mt-1.5 sm:mt-2.5 text-[6.5px] sm:text-[9.5px] text-slate-400 italic leading-snug sm:leading-relaxed print:text-slate-500 whitespace-pre-line",children:['"',b.termsAndConditions||"Terima kasih telah mempercayai layanan kami. Kepuasan Anda adalah prioritas kami.",'"']})]}),t.jsxs("div",{className:"invoice-total-panel w-[140px] sm:w-[280px] shrink-0 space-y-1 sm:space-y-1.5",children:[t.jsxs("div",{className:"invoice-total-row flex justify-between text-[8px] sm:text-[12px] text-slate-600 px-1.5 sm:px-2 print:text-black",children:[t.jsx("span",{children:"Subtotal"}),t.jsx("span",{className:"font-medium",children:v(dt)})]}),s.discountAmount?t.jsxs("div",{className:"invoice-total-row flex justify-between text-[8px] sm:text-[12px] text-red-600 px-1.5 sm:px-2 font-medium",children:[t.jsx("span",{children:"Diskon"}),t.jsxs("span",{children:["-",v(s.discountAmount)]})]}):null,t.jsx("div",{className:"h-px bg-slate-200 my-0.5 sm:my-1"}),t.jsxs("div",{className:"invoice-grand-total flex justify-between items-center px-1.5 py-1 sm:px-2.5 sm:py-1.5 bg-slate-100 rounded print:bg-white print:border print:border-slate-200",children:[t.jsx("span",{className:"invoice-total-label text-[7px] sm:text-[11px] font-black text-slate-600 uppercase print:text-black",children:"Grand Total"}),t.jsx("span",{className:"invoice-grand-val text-[9.5px] sm:text-lg font-black text-brand-accent print:text-black tracking-tight",children:v(s.totalCost)})]}),t.jsxs("div",{className:"invoice-total-row flex justify-between text-[7.5px] sm:text-[11px] text-green-600 px-1.5 sm:px-2 pt-0.5 font-bold",children:[t.jsx("span",{children:"Sudah Dibayar"}),t.jsx("span",{children:v(s.amountPaid||0)})]}),t.jsxs("div",{className:"invoice-balance-due flex justify-between items-center px-1.5 py-1 sm:px-2.5 sm:py-1.5 border sm:border-2 border-brand-accent/20 rounded-md mt-0.5 sm:mt-1 bg-brand-accent/5 print:bg-white print:border-slate-800",children:[t.jsx("span",{className:"invoice-total-label text-[7px] sm:text-[11px] font-black text-brand-accent uppercase print:text-black",children:"Sisa Pembayaran"}),t.jsx("span",{className:"invoice-balance-val text-[9px] sm:text-base font-black text-brand-accent print:text-black tracking-tight",children:v(s.totalCost-(s.amountPaid||0))})]})]})]}),t.jsxs("div",{className:"invoice-signature-section avoid-break grid grid-cols-3 gap-2 sm:gap-6 pt-2.5 sm:pt-4 border-t border-slate-100 print:border-slate-200",children:[t.jsx("div",{className:"col-span-2 flex items-end justify-center pb-1 sm:pb-2",children:t.jsx("p",{className:"invoice-footer-note text-[6.5px] sm:text-[9px] text-slate-400 text-center uppercase tracking-widest font-black",children:"Dicetak Otomatis Vena Pictures"})}),t.jsxs("div",{className:"text-center flex flex-col items-center",children:[t.jsx("p",{className:"invoice-section-label text-[7px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2",children:"Hormat Kami,"}),t.jsx("div",{className:"invoice-signature-box h-10 sm:h-14 w-full flex items-center justify-center",children:s.invoiceSignature||b.signatureBase64?t.jsx("img",{src:s.invoiceSignature||b.signatureBase64,alt:"Tanda Tangan",className:"invoice-signature-img h-9 sm:h-14 w-auto max-w-full object-contain grayscale mx-auto block"}):t.jsx("div",{className:"h-px w-14 sm:w-24 bg-slate-200 mx-auto mt-3 sm:mt-6 print:bg-slate-300"})}),t.jsx("p",{className:"invoice-signer-name text-[8px] sm:text-[12px] font-bold text-slate-800 mt-1 sm:mt-1.5 print:text-black underline underline-offset-2 sm:underline-offset-4 decoration-slate-300",children:b.authorizedSigner}),t.jsx("p",{className:"invoice-footer-note text-[6.5px] sm:text-[9px] font-black text-slate-400 uppercase mt-0.5 tracking-tighter",children:b.companyName})]})]})]}),[...s.dpProofUrl?[{url:s.dpProofUrl,label:"Bukti Transfer DP"}]:[],...(s.paymentProofs||[]).map((i,o)=>({url:i.url,label:`Bukti Pembayaran ${o+1}${i.amount?` - ${v(i.amount)}`:""}`}))].map((i,o)=>t.jsxs("section",{className:`invoice-proof-appendix mx-auto w-full max-w-[800px] border-t border-slate-200 bg-white p-4 sm:p-6 print:border-0 ${o>0||s.dpProofUrl?"print:break-before-page":""}`,children:[t.jsx("h3",{className:"mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 print:text-black",children:i.label}),t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"block",children:t.jsx("img",{src:i.url,alt:i.label,className:"mx-auto max-h-[900px] max-w-full object-contain",crossOrigin:"anonymous"})})]},i.url)),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})},be=(s,p=[])=>p.filter(M=>M.projectId===s&&M.type===pe.INCOME).sort((M,H)=>H.date.localeCompare(M.date))[0]?.date||new Date().toISOString().slice(0,10),ge=s=>`Invoice-${(s.projectName||s.clientName||"Invoice").replace(/[\\/:*?"<>|\s]+/g,"_")||s.id.slice(-8)}.pdf`,fe=async s=>{const{project:p,packages:M=[],client:H}=s,jt=s.issuedDate||be(p.id),k=s.profile||{},e=ce(k.brandColor)||me,b=Zt(e,.92),ct=Zt(e,.55),a=de("portrait");await xe(a);const nt=[...p.dpProofUrl?[{url:p.dpProofUrl,label:"BUKTI TRANSFER DP"}]:[],...(p.paymentProofs||[]).map((n,c)=>({url:n.url,label:`BUKTI PEMBAYARAN ${c+1}${n.amount?` - ${W(n.amount)}`:""}`}))],[v,q,...tt]=await Promise.all([Mt(k.logoBase64),Mt(p.invoiceSignature||k.signatureBase64,{grayscale:!0}),...nt.map(n=>Mt(n.url))]),_=Array.isArray(p.addOns)?p.addOns:[],Y=Array.isArray(p.additionalPackages)?p.additionalPackages:[],J=Array.isArray(p.customCosts)?p.customCosts:[],V=(Number(p.totalCost)||0)+(Number(p.discountAmount)||0),mt=_.reduce((n,c)=>n+(Number(c?.price)||0),0),dt=Y.reduce((n,c)=>n+(Number(c?.price)||0),0),$t=J.reduce((n,c)=>n+(Number(c?.amount)||0),0),At=Math.max(0,V-mt-dt-(Number(p.transportCost)||0)-$t),B=M.find(n=>n.id===p.packageId||n.name===p.packageName);let ot="",y=[],R=[];if(B){const n=B.durationOptions?.find(c=>c.label===p.durationSelection);ot=n?.photographers?.trim()||[B.photographers,B.videographers].filter(Boolean).join(" & "),n?.digitalItems?.length&&(y=n.digitalItems),n?.physicalItems?.length&&(R=n.physicalItems),y.length===0&&B.digitalItems?.length&&(y=B.digitalItems),R.length===0&&B.physicalItems?.length&&(R=B.physicalItems)}const{fill:T,stroke:g,ink:i,setFont:o,writeLines:I,wrap:P}=he(a);let l=Z;const xt=l;let L=xt;const Ht=46,ae=15;if(v){const n=v.width/v.height;let c=ae,d=c*n;d>Ht&&(d=Ht,c=d/n);try{a.addImage(v.dataUrl,"PNG",x,L,d,c,void 0,"FAST")}catch{}L+=c+2.2}else T(e),a.roundedRect(x,L,7.5,7.5,1.2,1.2,"F"),o(11,"bold"),i(r.white),a.text(h((k.companyName||"V").charAt(0).toUpperCase()),x+7.5/2,L+7.5/2+11*m/2,{align:"center"}),o(12,"bold"),i(r.text),a.text(h(k.companyName||"Vendor"),x+7.5+2.5,L+7.5/2+12*m/2),L+=7.5+2.2;const Tt=[];k.address&&Tt.push(h(k.address));const Rt=[k.phone,k.email].filter(Boolean).join(" • ");Rt&&Tt.push(h(Rt)),o(8.5,"bold"),i(r.textSoft),a.text(h(k.companyName||"Vendor"),x,L+8.5*m),L+=$(8.5,1.3),L=I(Tt,x,L,7,"normal",r.muted,"left",1.35);let F=xt;o(20,"bold"),i(e),a.text("INVOICE",E,F+20*m,{align:"right"}),F+=$(20,1.05)+1.2;const Ft=`ID: #INV-${h(p.id||"").slice(-8).toUpperCase()}`;o(7.5,"bold");const Ut=3,_t=a.getTextWidth(Ft)+Ut*2,It=5.2;T(r.badge),a.roundedRect(E-_t,F,_t,It,.8,.8,"F"),i(r.textSoft),a.text(Ft,E-Ut,F+It/2,{align:"right",baseline:"middle"}),F+=It+1.6;const Yt=(n,c,d)=>{o(7.5,"normal");const f=h(n),w=h(c);i(r.label);const A=a.getTextWidth(f);o(7.5,"bold");const u=a.getTextWidth(w),j=E-(A+u+1);o(7.5,"normal"),i(r.label),a.text(f,j,F+7.5*m),o(7.5,"bold"),i(d),a.text(w,E-u,F+7.5*m),F+=$(7.5,1.35)};Yt("Diterbitkan: ",te(jt),r.text),Yt("Status: ",String(p.paymentStatus||"").toUpperCase(),p.paymentStatus===ee.LUNAS?r.green:r.orange),l=Math.max(L,F)+2,g(e),a.setLineWidth(.8),a.line(x,l,E,l),l+=4.5;const Vt=6,ht=(C-Vt)/2,Pt=x,et=x+ht+Vt;let st=l;o(7,"bold"),i(r.muted),a.text("PENERIMA INVOICE",Pt,st+7*m),a.text("DETAIL LAYANAN",et,st+7*m),st+=$(7,1.2)+1.4;let rt=st;o(10,"bold"),i(r.text),a.text(h(p.clientName||"-"),Pt,rt+10*m),rt+=$(10,1.25)+.6,H&&(rt=I([H.phone,H.email].filter(Boolean).map(h),Pt,rt,7.5,"normal",r.textSoft,"left",1.3));let D=st;const bt=te(p.date),St=(p.projectName||"").replace(/^Acara Pernikahan\s+/i,"").trim(),ie=bt!=="Tanpa Tanggal"&&St.endsWith(bt)?St.slice(0,-bt.length).replace(/[\s,–—-]+$/,"").trim():St;o(10,"bold"),i(r.text),a.text(h(ie||p.projectName||"-"),et,D+10*m),D+=$(10,1.25)+.6;const gt=(n,c,d,f,w)=>{o(7.5,"normal");const A=h(n);i(r.muted),a.text(A,d,f+7.5*m);const u=a.getTextWidth(A);i(r.textSoft);const j=P(c||"-",Math.max(8,w-u));let Q=f;return j.forEach(le=>{a.text(le,d+u,Q+7.5*m),Q+=$(7.5,1.3)}),Q};D=gt("Tanggal Acara: ",bt,et,D,ht);const Ct=ht/2;D=Math.max(gt("Lokasi: ",p.location||"-",et,D,Ct-2),gt("Tipe: ",p.projectType||"-",et+Ct,D,Ct-2)),p.address&&(D=gt("Alamat: ",p.address,et,D,ht)),l=Math.max(rt,D)+2,g(r.borderSoft),a.setLineWidth(.2),a.line(x,l,E,l),l+=4;const ft=C*.08,ut=C*.68,Xt=C-ft-ut,Lt=x,S=Lt+ft,at=S+ut,O=2,kt=1.8,vt=ut-O*2,it=[];it.push({no:"1",title:h(p.packageName||"-"),titleSize:8.5,titleBold:!0,subs:[...ot?[ot]:[],...y.length>0?y:["Package utama layanan profesional"]],physicalLabel:R.length>0?"Vendor (Allpackage):":void 0,physicals:R.map(n=>n.name),price:W(At)}),Y.forEach((n,c)=>{const d=M.find(w=>w.id===n.id||w.name===n.name),f=[...d?.digitalItems||[],...(d?.physicalItems||[]).map(w=>w.name)].filter(Boolean);it.push({no:String(2+c),title:h(n.name||d?.name||"-"),titleSize:8.5,titleBold:!0,subs:f,physicals:[],price:W(Number(n.price)||0)})}),_.forEach((n,c)=>{it.push({no:String(2+Y.length+c),title:h(n.name||"-"),titleSize:8,titleBold:!1,subs:["Add-on Item"],physicals:[],price:W(Number(n.price)||0)})}),p.transportCost&&Number(p.transportCost)>0&&it.push({no:String(Y.length+_.length+2),title:"Biaya Transport",titleSize:8,titleBold:!1,subs:["Logistik & Operasional"],physicals:[],price:W(Number(p.transportCost))}),J.forEach((n,c)=>{const d=p.transportCost&&Number(p.transportCost)>0?1:0,f=2+Y.length+_.length+d+c;it.push({no:String(f),title:h(n.description||"-"),titleSize:8,titleBold:!1,subs:[],physicals:[],price:W(Number(n.amount)||0)})});const Gt=()=>{T(r.headBg),a.rect(x,l,C,6.6,"F"),g(r.black),a.setLineWidth(.25),a.rect(x,l,C,6.6,"S"),a.line(S,l,S,l+6.6),a.line(at,l,at,l+6.6),o(7,"bold"),i(r.black);const c=l+6.6/2+7*m/2;a.text("NO",Lt+ft/2,c,{align:"center"}),a.text("DESKRIPSI PRODUK / LAYANAN",S+O,c),a.text("TOTAL HARGA",at+Xt-O,c,{align:"right"}),l+=6.6};Gt(),it.forEach(n=>{o(n.titleSize,n.titleBold?"bold":"normal");const c=P(n.title,vt);o(7,"normal");const d=n.subs.flatMap(Q=>P(`•  ${Q}`,vt));o(6.5,"bold");const f=n.physicalLabel?P(n.physicalLabel,vt):[];o(7,"normal");const w=n.physicals.flatMap(Q=>P(`•  ${Q}`,vt));let A=c.length*$(n.titleSize,1.15);A+=d.length*$(7,1.25),n.physicals.length>0&&(A+=1.4+f.length*$(6.5,1.2),A+=w.length*$(7,1.25));const u=kt*2+A;l+u>wt&&(a.addPage(),l=Z,Gt()),T(r.white),a.rect(x,l,C,u,"F"),g(r.black),a.setLineWidth(.2),a.rect(x,l,C,u,"S"),a.line(S,l,S,l+u),a.line(at,l,at,l+u),o(8,"normal"),i(r.text),a.text(n.no,Lt+ft/2,l+kt+8*m,{align:"center"}),o(8,n.titleBold?"bold":"normal"),i(r.text),a.text(n.price,at+Xt-O,l+kt+8*m,{align:"right"});let j=l+kt;j=I(c,S+O,j,n.titleSize,n.titleBold?"bold":"normal",r.text,"left",1.15),d.length&&(j=I(d,S+O,j,7,"normal",r.muted,"left",1.25)),n.physicals.length>0&&(g(r.borderSoft),a.setLineWidth(.15),a.line(S+O,j+.6,S+ut-O,j+.6),j+=1.4,j=I(f,S+O,j,6.5,"bold",r.label,"left",1.2),j=I(w,S+O,j,7,"normal",r.muted,"left",1.25)),l+=u});const X=80,z=E-X,Wt=C-X-6,ne=k.termsAndConditions||"Terima kasih telah mempercayai layanan kami. Kepuasan Anda adalah prioritas kami.",oe="Silakan kirimkan bukti transfer melalui Whatsapp atau Portal Client setelah melakukan pembayaran.";o(7,"normal");const Kt=P(oe,Wt-6);o(6.5,"italic");const qt=P(`"${ne}"`,Wt),Bt=11+Kt.length*$(7,1.3)+3,se=Math.max(Bt+2.5+qt.length*$(6.5,1.3),9+5.2+1.5+9+5.2+9);l+se+4>wt&&(a.addPage(),l=Z);let G=l+5;g(r.borderSoft),a.setLineWidth(.2),a.line(x,G-2.5,E,G-2.5),T(r.panel),g(r.borderSoft),a.setLineWidth(.2),a.roundedRect(x,G,Wt,Bt,1,1,"FD"),o(7,"bold"),i(r.label),a.text("INFORMASI PEMBAYARAN",x+3,G+3+7*m),o(9,"bold"),i(r.text),a.text(h(k.bankAccount||"-"),x+3,G+8.5+9*m),o(7,"normal"),i(r.label);let Jt=G+12.5;Kt.forEach(n=>{a.text(n,x+3,Jt+7*m),Jt+=$(7,1.3)});let Dt=G+Bt+2.5;Dt=I(qt,x,Dt,6.5,"italic",r.muted,"left",1.3);let N=G;const re=5.2,Ot=(n,c,d,f="normal")=>{o(9,f),i(d),a.text(h(n),z+2,N+9*m),a.text(h(c),z+X-2,N+9*m,{align:"right"}),N+=re};Ot("Subtotal",W(V),r.textSoft),p.discountAmount&&Ot("Diskon",W(Math.abs(Number(p.discountAmount)||0)),r.red,"bold"),g(r.borderSoft),a.setLineWidth(.2),a.line(z,N+.6,z+X,N+.6),N+=2.4;const yt=9.5;T(r.headBg),a.roundedRect(z,N,X,yt,1,1,"F"),o(8,"bold"),i(r.label),a.text("GRAND TOTAL",z+2.5,N+yt/2+8*m/2),o(12,"bold"),i(e),a.text(W(p.totalCost),z+X-2.5,N+yt/2+12*m/2,{align:"right"}),N+=yt+1.6,Ot("Sudah Dibayar",W(p.amountPaid||0),r.green,"bold");const Nt=9.5;T(b),g(ct),a.setLineWidth(.3),a.roundedRect(z,N,X,Nt,1,1,"FD"),o(8,"bold"),i(e),a.text("SISA PEMBAYARAN",z+2.5,N+Nt/2+8*m/2),o(11,"bold"),a.text(W((Number(p.totalCost)||0)-(Number(p.amountPaid)||0)),z+X-2.5,N+Nt/2+11*m/2,{align:"right"}),N+=Nt,l=Math.max(N,Dt)+4,l+30>wt&&(a.addPage(),l=Z),g(r.borderSoft),a.setLineWidth(.2),a.line(x,l,E,l),l+=4;const zt=6,lt=(C-zt*2)/3,K=x+2*(lt+zt)+lt/2;o(6.5,"bold"),i(r.muted),a.text("DICETAK OTOMATIS VENA PICTURES",x+(lt*2+zt)/2,l+6.5*m,{align:"center"}),o(7,"bold"),i(r.muted),a.text("HORMAT KAMI,",K,l+7*m,{align:"center"});let U=l+7*m+3;const pt=14;if(q){const n=q.width/q.height;let c=pt,d=c*n;d>lt&&(d=lt,c=d/n);try{a.addImage(q.dataUrl,"PNG",K-d/2,U+(pt-c)/2,d,c,void 0,"FAST")}catch{}}else g(r.border),a.setLineWidth(.2),a.line(K-12,U+pt-1,K+12,U+pt-1);U+=pt+1.6;const Et=h(k.authorizedSigner||"");if(o(8.5,"bold"),i(r.text),a.text(Et,K,U+8.5*m,{align:"center"}),Et){const n=a.getTextWidth(Et);g(r.border),a.setLineWidth(.15),a.line(K-n/2,U+8.5*m+.9,K+n/2,U+8.5*m+.9)}return U+=$(8.5,1.3),o(6.5,"bold"),i(r.muted),a.text(h(k.companyName||""),K,U+6.5*m,{align:"center"}),tt.forEach((n,c)=>{if(!n)return;a.addPage(),o(14,"bold"),i(e),a.text(h(nt[c].label),x,Z+6);const d=C,f=wt-Z-18,w=n.width/n.height;let A=d,u=A/w;u>f&&(u=f,A=u*w);try{a.addImage(n.dataUrl,"PNG",x+(C-A)/2,Z+14,A,u,void 0,"FAST")}catch{}}),a},$e=async s=>{(await fe(s)).save(ge(s.project))};export{je as I,$e as d,be as g};

import{b as f,j as e,ad as U}from"./vendor-react-DK1NLE7n.js";import{z as M,b$ as O,cd as Y,F as K,a7 as G,S as L,M as I,ag as J,b as D,d as q,$ as B,x as S,am as V,D as X,ce as _}from"./index-Bq7L-As1.js";import{H as Q}from"./HelpBox-DJBvjDrf.js";import{d as Z,P as E}from"./paymentSlipPdf-CkYTNOWi.js";import"./vendor-supabase-B5bvKxnm.js";import"./vendor-react-dom-BuA-vWUZ.js";import"./vendor-others-Cyi_3W6P.js";import"./vendor-react-query-CZdPsCeS.js";import"./pdfCore-B9e0lykY.js";import"./vendor-pdfjs-CCISBf-K.js";(()=>{try{return CSS&&CSS.supports&&CSS.supports("selector(body:has(.x))")}catch{return!1}})();const ee=(()=>{try{const t=navigator.userAgent.toLowerCase();return!t.includes("mobile")&&(t.includes("chrome")||t.includes("firefox")||t.includes("safari"))}catch{return!1}})(),te=({areaId:t,label:r="Cetak",title:p,showPreview:x=!1,directPrint:d=!1,...n})=>{f.useEffect(()=>{const m=()=>{document.body.classList.add("printing")},a=()=>{document.body.classList.remove("printing"),document.documentElement.style.removeProperty("--fit-scale")};return window.addEventListener("beforeprint",m),window.addEventListener("afterprint",a),()=>{window.removeEventListener("beforeprint",m),window.removeEventListener("afterprint",a),document.body.classList.remove("printing"),document.documentElement.style.removeProperty("--fit-scale")}},[t]);const i=f.useCallback(()=>{try{document.body.classList.add("printing"),window.print()}finally{setTimeout(()=>document.body.classList.remove("printing"),300)}},[]),c=f.useCallback(m=>{try{const a=document.createElement("iframe");a.style.position="absolute",a.style.left="-9999px",a.style.top="0",a.style.width="1px",a.style.height="1px",a.style.border="none",a.setAttribute("sandbox","allow-same-origin allow-scripts allow-modals allow-popups"),document.body.appendChild(a);const l=a.contentDocument||a.contentWindow?.document;if(!l){i();return}const s=m.cloneNode(!0);s.querySelectorAll(".non-printable, button, .button-primary, .button-secondary").forEach(h=>h.remove());const g=`
        @page { 
          size: A4 portrait; 
          margin: 2cm 2.5cm;
        }
        
        :root {
          --fit-scale: scale(1);
        }
        
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          box-sizing: border-box !important;
        }
        
        html, body { 
          font-family: 'Manrope', sans-serif !important;
          line-height: 1.15 !important;
          color: #000 !important;
          background: #fff !important;
          margin: 0 !important;
          padding: 0 !important;
          font-size: 12pt !important;
          width: 100% !important;
          height: auto !important;
        }
        
        .page-canvas {
          width: 160mm;
          height: 257mm;
          overflow: hidden;
          margin: 0 auto;
          position: relative;
        }

        #fitWrapper {
          width: 160mm;
          margin: 0 auto;
          transform-origin: top left !important;
        }
        
        #fitWrapper[data-fit-scale="true"] {
          transform: var(--fit-scale) !important;
        }
        
        .printable-content { 
          max-width: 100% !important;
          width: 100% !important;
          box-shadow: none !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          background: white !important;
          overflow: visible !important;
        }
        
        /* ==========================================================================
           ENHANCED DOCUMENT STYLING - INVOICE, RECEIPT, CONTRACT, BUKTI PEMBAYARAN
           ========================================================================== */
        
        /* ===== INVOICE STYLING - DYNAMIC NO BACKGROUND ===== */
        .print-invoice {
          font-family: 'Manrope', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
          background: transparent !important;
          color: #1e293b !important;
          line-height: 1.5 !important;
          font-size: 12pt !important;
        }
        
        .print-invoice .max-w-4xl {
          max-width: none !important;
          margin: 0 !important;
          background: transparent !important;
          padding: 0 !important;
          box-shadow: none !important;
          width: 100% !important;
        }
        
        .print-invoice header {
          display: flex !important;
          justify-content: space-between !important;
          align-items: flex-start !important;
          margin-bottom: 18pt !important;
          border-bottom: none !important;
          padding: 0 !important;
        }
        
        .print-invoice header img {
          height: 32pt !important;
          max-width: 32pt !important;
          object-fit: contain !important;
          margin-bottom: 6pt !important;
          border-radius: 4pt !important;
        }
        
        .print-invoice .printable-bg-blue {
          background: #3b82f6 !important;
          color: #ffffff !important;
          padding: 16pt !important;
          border-radius: 6pt !important;
          margin: 16pt 0 !important;
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1) !important;
        }
        
        /* Grid alignment for info sections and footer */
        .print-invoice .doc-header-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 24pt !important;
          align-items: start !important;
        }
        
        .print-invoice .doc-footer-flex {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 32pt !important;
          align-items: start !important;
        }
        
        .print-invoice .invoice-totals {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
        }
        
        .print-invoice .invoice-totals .flex {
          width: 180pt !important;
          min-width: 180pt !important;
        }
        
        /* Add colon and bold styling for totals */
        .print-invoice .invoice-totals span:first-child {
          font-weight: 600 !important;
          color: #0f172a !important;
          position: relative !important;
          padding-right: 8pt !important;
        }
        
        .print-invoice .invoice-totals span:first-child::after {
          content: " :" !important;
          color: #94a3b8 !important;
          font-weight: 700 !important;
          margin-left: 2pt !important;
        }
        
        .print-invoice .invoice-totals span:last-child {
          font-weight: 700 !important;
          color: #1e293b !important;
        }
        
        .print-invoice .invoice-totals .flex:last-child span:first-child,
        .print-invoice .invoice-totals .flex:last-child span:last-child {
          font-weight: 800 !important;
          color: #0f172a !important;
        }
        
        .print-invoice .invoice-table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 16pt 0 !important;
          border: none !important;
        }
        
        .print-invoice .invoice-table-header th {
          padding: 9pt !important;
          font-size: 10pt !important;
          font-weight: 600 !important;
          color: #64748b !important;
          background: none !important;
          border-bottom: 2pt solid #e2e8f0 !important;
        }
        
        .print-invoice .invoice-table-body td {
          padding: 9pt !important;
          font-size: 10pt !important;
          vertical-align: top !important;
          border: none !important;
        }
        
        /* ===== RECEIPT STYLING ===== */
        .print-receipt {
          font-family: 'Manrope', 'Inter', sans-serif !important;
          background: #ffffff !important;
          color: #1e293b !important;
          line-height: 1.2 !important;
          font-size: 12pt !important;
        }
        
        .print-receipt header {
          text-align: center !important;
          margin-bottom: 12pt !important;
          padding-bottom: 8pt !important;
          border-bottom: 2px solid #059669 !important;
        }
        
        .print-receipt .printable-bg-green-light {
          background: linear-gradient(135deg, #d1fae5, #a7f3d0) !important;
          border: 2px solid #059669 !important;
          border-radius: 8pt !important;
          padding: 12pt !important;
          margin: 12pt 0 !important;
          text-align: center !important;
        }
        
        /* ===== GENERAL STYLING ===== */
        h1, h2, h3, h4, h5, h6 {
          color: #000 !important;
          page-break-after: avoid !important;
          margin-top: 0.8em !important;
          margin-bottom: 0.4em !important;
        }
        
        p { 
          margin: 0 0 8pt 0 !important;
          text-align: justify !important;
          font-size: 12pt !important;
          line-height: 1.2 !important;
        }
        
        table { 
          border-collapse: collapse !important; 
          width: 100% !important; 
          margin: 0.8em 0 !important;
        }
        
        th, td { 
          border: 1px solid #333 !important; 
          padding: 6px !important; 
          text-align: left !important;
          font-size: 10pt !important;
        }
        
        th {
          background-color: #f5f5f5 !important;
          font-weight: bold !important;
        }
        
        .avoid-break {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        .print-text-green {
          color: #059669 !important;
        }
        
        .printable-text-white {
          color: #ffffff !important;
        }
        
        button, input, select, textarea, .non-printable {
          display: none !important;
        }
      `;l.open(),l.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>${p||"Dokumen"}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
          <style>${g}</style>
        </head>
        <body>
          <div class="page-canvas" id="pageCanvas">
            <div class="fit-to-page" id="fitWrapper">
              ${s.innerHTML}
            </div>
          </div>
          <script>
            window.onload = function() {
              // Auto fit content
              function mmToPx(mm) {
                const el = document.createElement('div');
                el.style.width = mm + 'mm';
                el.style.position = 'absolute';
                el.style.visibility = 'hidden';
                document.body.appendChild(el);
                const px = el.getBoundingClientRect().width;
                document.body.removeChild(el);
                return px;
              }
              
              const printableWidthMM = 160, printableHeightMM = 257;
              const printableWidthPx = mmToPx(printableWidthMM);
              const printableHeightPx = mmToPx(printableHeightMM);
              const wrapper = document.getElementById('fitWrapper');
              const canvas = document.getElementById('pageCanvas');
              
              if (canvas) {
                canvas.style.width = printableWidthMM + 'mm';
                canvas.style.height = printableHeightMM + 'mm';
              }
              
              if (wrapper) {
                const rect = wrapper.getBoundingClientRect();
                const scaleX = printableWidthPx / rect.width;
                const scaleY = printableHeightPx / rect.height;
                const scale = Math.min(1, scaleX, scaleY);
                wrapper.setAttribute('data-fit-scale', 'true');
                document.documentElement.style.setProperty('--fit-scale', 'scale(' + scale + ')');
              }
              
              // Direct print tanpa dialog preview
              setTimeout(function() {
                try {
                  window.print();
                } catch (e) {
                  console.error('Direct print failed:', e);
                }
                // Cleanup iframe setelah print
                setTimeout(function() {
                  if (window.parent && window.parent.document.body.contains(window.frameElement)) {
                    window.parent.document.body.removeChild(window.frameElement);
                  }
                }, 1000);
              }, 500);
            };
          <\/script>
        </body>
        </html>
      `),l.close()}catch{i()}},[p,i]),o=f.useCallback(()=>{let m=null;if(t&&(m=document.getElementById(t),m||(m=document.querySelector(".printable-area")),!m)){i();return}if(d&&m)if(ee){c(m);return}else{document.body.classList.add("printing");try{window.print()}finally{setTimeout(()=>document.body.classList.remove("printing"),300)}return}if(m){const a=window.open("","_blank","width=800,height=600");if(a){const l=m.cloneNode(!0);l.querySelectorAll(".non-printable, button, .button-primary, .button-secondary").forEach(g=>g.remove()),a.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <title>${p||"Dokumen Kontrak"}</title>
            ${(()=>{try{return`
                  <link rel="preconnect" href="https://fonts.googleapis.com">
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
                `+Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map(y=>y.outerHTML).join(`
`)}catch{return""}})()}
            <style>
          @page { 
            size: A4 portrait; 
            margin: 2cm 2.5cm; /* Indonesian standard: 2cm top/bottom, 2.5cm left/right */
          }
          
          :root {
            --fit-scale: scale(1);
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-sizing: border-box !important;
          }
          
          html, body { 
            font-family: 'Manrope', sans-serif !important;
            line-height: 1.15 !important; /* Indonesian standard line spacing */
            color: #000 !important;
            background: #fff !important;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 12pt !important; /* Standard document font size */
            width: 100% !important;
            height: auto !important;
          }
          
          /* Page canvas ensures we stay within a single A4 page printable area */
          .page-canvas {
            width: 160mm;
            height: 257mm; /* 297mm - 20mm - 20mm */
            overflow: hidden;
            margin: 0 auto;
            position: relative;
          }

          /* The wrapper holds the actual document content at the exact printable width */
          #fitWrapper {
            width: 160mm; /* A4 width (210mm) - 25mm - 25mm = 160mm */
            margin: 0 auto; /* center within printable area */
            transform-origin: top left !important;
          }
          
          /* When scaling is needed to fit height, apply the transform */
          #fitWrapper[data-fit-scale="true"] {
            transform: var(--fit-scale) !important;
          }
          
          .printable-content { 
            max-width: 100% !important;
            width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
            overflow: visible !important;
          }
          
          img, svg {
            max-width: 100% !important;
            height: auto !important;
          }
          
          h1, h2, h3, h4, h5, h6 {
            color: #000 !important;
            page-break-after: avoid !important;
            margin-top: 0.8em !important;
            margin-bottom: 0.4em !important;
            font-family: inherit !important;
          }
          
          h2 { 
            font-size: 16pt !important; 
            text-align: center !important; 
            font-weight: bold !important;
            margin-bottom: 0.2em !important;
          }
          h3 { 
            font-size: 14pt !important; 
            text-align: center !important; 
            font-weight: bold !important;
            margin-bottom: 1em !important;
          }
          h4 { 
            font-size: 12pt !important; 
            font-weight: bold !important; 
            text-align: center !important;
            margin: 0.8em 0 0.4em 0 !important;
          }
          
          p { 
            margin: 0 0 8pt 0 !important; /* 8pt spacing after paragraphs */
            text-align: justify !important;
            orphans: 2 !important;
            widows: 2 !important;
            font-size: 12pt !important;
            line-height: 1.2 !important; /* Indonesian standard line spacing */
          }
          
          .my-4 {
            margin: 0.8em 0 !important;
          }
          
          .mt-6 {
            margin-top: 1.2em !important;
          }
          
          .space-y-4 > * + * {
            margin-top: 0.8em !important;
          }
          
          table { 
            border-collapse: collapse !important; 
            width: 100% !important; 
            margin: 0.8em 0 !important;
            page-break-inside: avoid !important;
          }
          
          thead { display: table-header-group !important; }
          tfoot { display: table-footer-group !important; }
          tr { page-break-inside: avoid !important; break-inside: avoid !important; }
          
          th, td { 
            border: 1px solid #333 !important; 
            padding: 6px !important; 
            text-align: left !important;
            vertical-align: top !important;
            font-size: 10pt !important;
          }
          
          th {
            background-color: #f5f5f5 !important;
            font-weight: bold !important;
          }
          
          .avoid-break, 
          .signature-section,
          section { 
            page-break-inside: avoid !important; 
          }
          
          .signature-section {
            margin-top: 1.5em !important;
            padding-top: 0.8em !important;
            border-top: 2px solid #333 !important;
            page-break-inside: avoid !important;
          }
          
          .signature-area {
            display: inline-block !important;
            width: 45% !important;
            text-align: center !important;
            vertical-align: top !important;
            margin: 0 2.5% !important;
          }
          
          .signature-area img {
            max-height: 30px !important;
            max-width: 80px !important;
            object-fit: contain !important;
          }
          
          .signature-area p {
            font-size: 10pt !important;
            margin: 0.2em 0 !important;
          }
          
          .border-t-2 {
            border-top: 2px dotted #333 !important;
            padding-top: 0.2em !important;
            margin-top: 0.5em !important;
          }
          
          .printable-bg-blue { 
            background-color: #2563eb !important; 
            color: white !important;
          }
          
          .printable-text-white { 
            color: #ffffff !important; 
          }
          
          .print-text-green { 
            color: #16a34a !important; 
          }
          
          /* Hide any remaining interactive elements */
          button, input, select, textarea,
          .non-printable {
            display: none !important;
          }
          
          /* Ensure proper flex layout for signatures */
          .flex {
            display: flex !important;
          }
          
          .justify-between {
            justify-content: space-between !important;
          }
          
          .items-start {
            align-items: flex-start !important;
          }
          
          .text-center {
            text-align: center !important;
          }
          
          .font-bold {
            font-weight: bold !important;
          }
          
          .text-xs {
            font-size: 9pt !important;
          }
          
          .italic {
            font-style: italic !important;
          }
        </style>
          </head>
          <body>
            <div class="page-canvas" id="pageCanvas"><div class="fit-to-page" id="fitWrapper">${l.innerHTML}</div></div>
            <script>
              (function() {
                function mmToPx(mm) {
                  const el = document.createElement('div');
                  el.style.width = mm + 'mm';
                  el.style.position = 'absolute';
                  el.style.visibility = 'hidden';
                  document.body.appendChild(el);
                  const px = el.getBoundingClientRect().width;
                  document.body.removeChild(el);
                  return px;
                }
                async function ready() {
                  try {
                    if (document.fonts && document.fonts.ready) {
                      await document.fonts.ready;
                    }
                  } catch {}
                  try {
                    const images = Array.from(document.images || []);
                    await Promise.all(images.map(img => (img.decode ? img.decode().catch(()=>{}) : Promise.resolve())));
                  } catch {}
                }
                async function fit() {
                  // A4 printable area: width 160mm, height 257mm (after 25mm L/R and 20mm T/B)
                  var printableWidthMM = 160, printableHeightMM = 257;
                  const printableWidthPx = mmToPx(printableWidthMM);
                  const printableHeightPx = mmToPx(printableHeightMM);
                  const wrapper = document.getElementById('fitWrapper');
                  const canvas = document.getElementById('pageCanvas');
                  if (canvas) {
                    canvas.style.width = printableWidthMM + 'mm';
                    canvas.style.height = printableHeightMM + 'mm';
                    canvas.style.overflow = 'hidden';
                    canvas.style.margin = '0 auto';
                  }
                  if (wrapper) {
                    const rect = wrapper.getBoundingClientRect();
                    const scaleX = printableWidthPx / rect.width;
                    const scaleY = printableHeightPx / rect.height;
                    const scale = Math.min(1, scaleX, scaleY);
                    wrapper.setAttribute('data-fit-scale', 'true');
                    document.documentElement.style.setProperty('--fit-scale', 'scale(' + scale + ')');
                  }
                  (window as any).__fitReady = true;
                }
                window.addEventListener('load', function(){ ready().then(fit); });
              })();
            <\/script>
          </body>
          </html>
        `),a.document.close(),a.onload=()=>{setTimeout(()=>{a.focus(),a.print(),setTimeout(()=>{a.close()},1e3)},800)};return}}i()},[t,p,d,i,c]);return e.jsx("button",{type:"button",onClick:o,className:"button-primary inline-flex items-center gap-2",...n,children:r})},ae=(t,r)=>{const{showDecimals:p=!0,compact:x=!1}=r||{};return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:p?2:0,maximumFractionDigits:p?2:0,notation:x?"compact":"standard"}).format(t)},P=t=>ae(t,{showDecimals:!1}),N=t=>new Date(t).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}),be=({accessId:t,teamMembers:r,clients:p=[],projects:x,teamProjectPayments:d,teamPaymentRecords:n,showNotification:i,userProfile:c})=>{const[o,m]=f.useState("dashboard"),[a,l]=f.useState(null),[s,g]=f.useState(null),h=c,[y,v]=f.useState(null),[k,C]=f.useState(!1),[F,z]=f.useState(!1),$=f.useCallback(async u=>{},[]);f.useEffect(()=>{},[s,$]);const R=f.useCallback(async()=>{if(s)try{await Z({record:s,teamMembers:r||[],teamProjectPayments:d||[],projects:x||[],profile:h})}catch{window.print()}},[s,r,d,x,h]),b=f.useMemo(()=>{const u=r?.filter(w=>w.portalAccessId===t||w.id===t||w.name===t||M(w.name)===t)||[];return(u.length===1?u[0]:null)||y},[r,t,y]);f.useEffect(()=>{if(!t)return;if(!((r?.filter(w=>w.portalAccessId===t||w.id===t||w.name===t||M(w.name)===t)||[]).length===1)&&!b){let w=!0;return C(!0),O(t).then(A=>{w&&v(A)}).catch(A=>{}).finally(()=>{w&&(C(!1),z(!0))}),()=>{w=!1}}},[t,r,b]);const T=f.useMemo(()=>(x||[]).filter(u=>u.team?.some(j=>j.memberId===b?.id)).sort((u,j)=>new Date(j.date).getTime()-new Date(u.date).getTime()),[x,b]);if(!b)return t&&(k||!F)?e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-white p-4",children:e.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[e.jsxs("div",{className:"relative flex justify-center items-center mb-6",children:[e.jsx("div",{className:"absolute border-4 border-brand-accent/20 rounded-full w-16 h-16"}),e.jsx("div",{className:"animate-spin border-4 border-transparent border-t-brand-accent rounded-full w-16 h-16"})]}),e.jsx("p",{className:"text-sm font-medium text-slate-600 animate-pulse",children:"Memuat Portal Tim..."})]})}):e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-white p-4",children:e.jsxs("div",{className:"w-full max-w-lg p-8 text-center bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-3xl font-bold",children:"!"}),e.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"Portal Tidak Ditemukan"}),e.jsx("p",{className:"mt-3 text-slate-600 leading-relaxed",children:"Tautan portal tim yang Anda gunakan tidak valid atau telah dihapus."}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsx("a",{href:"#/home",className:"inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white rounded-xl text-sm font-medium shadow-sm hover:opacity-90 transition-opacity",children:"Kembali ke Beranda"})})]})});const W=[{id:"dashboard",label:"Dasbor"},{id:"projects",label:"Acara Pernikahan"},{id:"payments",label:"Pembayaran"},{id:"performance",label:"Kinerja"}],H=()=>{switch(o){case"dashboard":return e.jsx(ne,{member:b,projects:T,teamProjectPayments:d});case"projects":return e.jsx(ie,{projects:T,clients:p,onProjectClick:l,memberId:b.id});case"payments":return e.jsx(se,{member:b,projects:x,teamProjectPayments:d,teamPaymentRecords:n,onSlipView:g});case"performance":return e.jsx(re,{member:b});default:return null}};return e.jsx("div",{className:"freelancer-portal min-h-screen bg-[#f4f6f9] text-slate-800 px-3 py-5 sm:px-6 sm:py-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("header",{className:"relative isolate overflow-hidden mb-5 sm:mb-7 rounded-[1.75rem] bg-slate-900 text-white shadow-xl shadow-slate-900/10 widget-animate",children:[e.jsx("div",{className:"absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10"}),e.jsx("div",{className:"absolute -right-2 -top-14 h-52 w-52 rounded-full border border-white/10"}),e.jsxs("div",{className:"relative flex flex-col gap-6 p-5 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10",children:[e.jsxs("div",{className:"flex items-center gap-4 sm:gap-5",children:[e.jsx("div",{className:"h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden shrink-0 bg-white/10 text-white ring-1 ring-white/20 flex items-center justify-center text-2xl font-semibold shadow-lg",children:b.avatarUrl?e.jsx("img",{src:b.avatarUrl,alt:`${b.name} avatar`,className:"w-full h-full object-cover",loading:"lazy",decoding:"async"}):b.name?.charAt(0).toUpperCase()||"?"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-slate-300",children:"Portal Freelancer"}),e.jsxs("h1",{className:"mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white",children:["Halo, ",b.name]}),e.jsx("p",{className:"mt-1.5 text-sm text-slate-300",children:"Kelola agenda, pembayaran, dan kinerja Anda."})]})]}),h?.phone&&e.jsx(Q,{variant:"public",phone:h.phone,buttonOnly:!0,className:"relative z-10 w-full sm:w-fit !bg-white !text-slate-800 !shadow-none hover:!bg-slate-100 focus:!ring-white"})]})]}),e.jsx("div",{className:"mb-6 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm widget-animate",style:{animationDelay:"100ms"},children:e.jsx("nav",{className:"grid grid-cols-4 gap-1.5 sm:flex","aria-label":"Navigasi portal freelancer",role:"tablist",children:W.map(u=>{const j=u.id==="dashboard"?Y:u.id==="projects"?K:u.id==="payments"?G:L,w=o===u.id;return e.jsxs("button",{type:"button",role:"tab","aria-label":u.label,"aria-selected":w,onClick:()=>m(u.id),className:`shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${w?"bg-slate-900 text-white shadow-sm":"text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`,children:[e.jsx(j,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:u.label}),e.jsx("span",{className:"sm:hidden",children:u.id==="projects"?"Acara":u.id==="payments"?"Pembayaran":u.id==="performance"?"Kinerja":"Dasbor"})]},u.id)})})}),e.jsx("main",{children:H()}),e.jsx(I,{isOpen:!!a,onClose:()=>l(null),title:"Detail Acara Pernikahan",size:"3xl",children:a&&e.jsx(oe,{project:a,member:b,showNotification:i,onClose:()=>l(null)})}),s&&e.jsxs(U.Fragment,{children:[e.jsx("div",{style:{position:"fixed",left:0,top:0,zIndex:-9999,opacity:0,pointerEvents:"none",width:"800px"},children:e.jsx(E,{record:s,teamMembers:r&&r.length>0?r:[b],teamProjectPayments:d,projects:x,userProfile:h})}),e.jsxs(I,{isOpen:!!s,onClose:()=>g(null),title:`Slip Pembayaran: ${s?.recordNumber}`,size:"4xl",children:[e.jsx("div",{className:"bg-slate-50 border border-slate-200 rounded-xl overflow-x-auto",children:s&&e.jsx(E,{record:s,teamMembers:r&&r.length>0?r:[b],teamProjectPayments:d,projects:x,userProfile:h})}),e.jsxs("div",{className:"mt-5 flex justify-end items-center gap-2 non-printable border-t border-slate-200 pt-4",children:[e.jsx(te,{areaId:`payment-slip-content-${s.id}`,label:"Cetak",title:`Slip Pembayaran - ${s.recordNumber||""}`}),e.jsxs("button",{type:"button",onClick:R,className:"inline-flex items-center gap-2 px-5 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-sm",children:[e.jsx(J,{className:"w-4 h-4"}),"Unduh PDF"]})]})]})]})]})})},ne=({member:t,projects:r,teamProjectPayments:p})=>{const x=f.useMemo(()=>{const n=p.filter(o=>o.teamMemberId===t.id&&o.status==="Unpaid").reduce((o,m)=>o+m.fee,0),i=p.filter(o=>o.teamMemberId===t.id&&o.status==="Paid").reduce((o,m)=>o+m.fee,0),c=r.filter(o=>o.status==="Selesai"&&o.team.some(m=>m.memberId===t.id)).length;return{unpaidFee:n,paidFee:i,completedProjects:c,activeProjects:r.filter(o=>o.status!=="Selesai"&&o.status!=="Dibatalkan").length}},[t,r,p]),d=f.useMemo(()=>{const n=r.filter(c=>new Date(c.date)>=new Date&&c.status!=="Selesai"&&c.status!=="Dibatalkan").sort((c,o)=>new Date(c.date).getTime()-new Date(o.date).getTime())[0],i=[];return n&&i.push({...n,type:"project"}),i.sort((c,o)=>new Date(c.date).getTime()-new Date(o.date).getTime())},[r,t]);return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4",children:[{label:"Pembayaran Diterima",value:P(x.paidFee),icon:X,note:"Total pembayaran lunas",tone:"solid-green text-white"},{label:"Pembayaran Pending",value:P(x.unpaidFee),icon:B,note:"Menunggu pembayaran",tone:"solid-orange text-white"},{label:"Acara Aktif",value:x.activeProjects,icon:D,note:"Dalam penugasan",tone:"solid-cyan text-white"},{label:"Acara Selesai",value:x.completedProjects,icon:_,note:"Penugasan tuntas",tone:"solid-purple text-white"}].map(n=>e.jsx("article",{className:"rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.12em] text-slate-500",children:n.label}),e.jsx("p",{className:"mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 tabular-nums",children:n.value}),e.jsx("p",{className:"mt-1.5 text-xs text-slate-500",children:n.note})]}),e.jsx("span",{className:`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${n.tone}`,children:e.jsx(n.icon,{className:"h-5 w-5"})})]})},n.label))}),e.jsxs("section",{className:"overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700",children:e.jsx(D,{className:"h-5 w-5"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Agenda Berikutnya"}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-500",children:"Jadwal acara terdekat Anda"})]})]}),e.jsxs("span",{className:"hidden sm:inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600",children:[d.length," agenda"]})]}),e.jsx("div",{className:"p-4 sm:p-6",children:d.length>0?e.jsx("div",{className:"space-y-3",children:d.map((n,i)=>e.jsxs("div",{className:"flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsxs("div",{className:"flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200",children:[e.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide",children:new Date(n.date).toLocaleDateString("id-ID",{month:"short"})}),e.jsx("span",{className:"text-lg font-semibold leading-none",children:new Date(n.date).getDate()})]}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate font-semibold text-slate-900",children:n.projectName}),e.jsx("p",{className:"mt-1 text-sm text-slate-500",children:N(n.date)})]})]}),e.jsxs("span",{className:"inline-flex w-fit items-center gap-2 rounded-full solid-cyan px-3 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/25",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-white"}),"Akan Datang"]})]},i))}):e.jsxs("div",{className:"flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-5 py-10 text-center",children:[e.jsx("span",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm ring-1 ring-slate-200",children:e.jsx(D,{className:"h-5 w-5"})}),e.jsx("p",{className:"mt-4 text-sm font-medium text-slate-700",children:"Belum ada agenda mendatang"}),e.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Jadwal baru akan muncul di sini saat Anda mendapat penugasan."})]})})]})]})},ie=({projects:t,clients:r,onProjectClick:p,memberId:x})=>{const[d,n]=f.useState("all"),i=a=>{const l=new Date,s=new Date(a.date),g=a.status==="Selesai",h=a.status==="Dibatalkan",y=!g&&!h&&s>=new Date(l.getFullYear(),l.getMonth(),l.getDate()),v=!g&&!h&&s<new Date(l.getFullYear(),l.getMonth(),l.getDate());return{isCompleted:g,isUpcoming:y,isOngoing:v}},c=f.useMemo(()=>{let a=0,l=0,s=0;return t.forEach(g=>{const h=i(g);h.isUpcoming?a++:h.isOngoing?l++:h.isCompleted&&s++}),{upcoming:a,ongoing:l,completed:s,all:t.length}},[t]),o=f.useMemo(()=>{let a=t.slice();return d!=="all"&&(a=a.filter(l=>{const s=i(l);return d==="upcoming"?s.isUpcoming:d==="ongoing"?s.isOngoing:d==="completed"?s.isCompleted:!0})),d==="completed"?a.sort((l,s)=>new Date(s.date).getTime()-new Date(l.date).getTime()):a.sort((l,s)=>new Date(l.date).getTime()-new Date(s.date).getTime()),a},[t,d]),m=({id:a,label:l,count:s})=>{const g="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",h={all:{active:"bg-slate-900 text-white border-slate-900 shadow-sm",inactive:"bg-white text-slate-600 border-slate-200 hover:bg-slate-100"},upcoming:{active:"solid-cyan text-white border-transparent shadow-sm",inactive:"bg-cyan-600/10 text-cyan-700 border-cyan-600/20 hover:bg-cyan-600/20"},ongoing:{active:"solid-orange text-white border-transparent shadow-sm",inactive:"bg-orange-600/10 text-orange-700 border-orange-600/20 hover:bg-orange-600/20"},completed:{active:"solid-green text-white border-transparent shadow-sm",inactive:"bg-green-600/10 text-green-700 border-green-600/20 hover:bg-green-600/20"}},y=d===a?h[a].active:h[a].inactive;return e.jsxs("button",{onClick:()=>n(a),"aria-pressed":d===a,className:`${g} ${y}`,children:[l," (",s,")"]})};return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"freelancer-project-filters flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm",children:[e.jsx(m,{id:"all",label:"Semua",count:c.all}),e.jsx(m,{id:"upcoming",label:"Akan Datang",count:c.upcoming}),e.jsx(m,{id:"ongoing",label:"Berjalan",count:c.ongoing}),e.jsx(m,{id:"completed",label:"Selesai",count:c.completed})]}),o.map((a,l)=>{const s=a.team.find(k=>k.memberId===x),g=r.find(k=>k.id===a.clientId),{isUpcoming:h,isCompleted:y}=i(a),v=y?{text:"Selesai",cls:"solid-green text-white ring-white/25"}:h?{text:"Akan Datang",cls:"solid-cyan text-white ring-white/25"}:{text:"Berjalan",cls:"solid-orange text-white ring-white/25"};return e.jsx("button",{type:"button",onClick:()=>p(a),className:"freelancer-project-card h-fit w-full p-3 sm:p-4 bg-white rounded-2xl border border-slate-200/80 text-left hover:border-slate-400 flex justify-between items-center gap-3 transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 widget-animate",style:{animationDelay:`${l*80}ms`},children:e.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 flex-1",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-slate-100 flex items-center justify-center text-sm font-medium text-slate-600",children:g?.avatarUrl?e.jsx("img",{src:g.avatarUrl,alt:`${a.clientName} avatar`,className:"w-full h-full object-cover",loading:"lazy",decoding:"async"}):(a.clientName||"K").charAt(0).toUpperCase()}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",children:[e.jsx("h3",{className:"font-semibold text-sm sm:text-base text-public-text-primary leading-tight truncate",children:a.projectName}),e.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[s?.subJob&&e.jsx("span",{className:"text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md inline-block leading-none",children:s.subJob}),e.jsx("span",{className:`text-[10px] font-medium px-2.5 py-1 rounded-full leading-none ring-1 ring-inset ${v.cls}`,children:v.text})]})]}),e.jsxs("p",{className:"text-xs text-public-text-secondary leading-tight mt-1 truncate",children:[a.clientName," • ",N(a.date)]})]})]})},a.id)}),o.length===0&&e.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center widget-animate",children:[e.jsx("span",{className:"mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-500",children:e.jsx(D,{className:"h-5 w-5"})}),e.jsx("p",{className:"mt-3 text-sm font-medium text-slate-700",children:"Tidak ada acara pada kategori ini"}),e.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Coba pilih filter yang lain."})]})]})},se=({member:t,projects:r,teamProjectPayments:p,teamPaymentRecords:x,onSlipView:d})=>e.jsxs("section",{className:"freelancer-payments overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm widget-animate",children:[e.jsxs("div",{className:"border-b border-slate-100 px-5 py-5 sm:px-6",children:[e.jsx("h2",{className:"text-base font-semibold text-slate-900",children:"Riwayat Pembayaran"}),e.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Ringkasan fee dari penugasan Anda"})]}),e.jsxs("div",{className:"freelancer-payment-cards hidden p-3",children:[p.filter(n=>n.teamMemberId===t.id).map(n=>{const i=n.status==="Paid",c=i?x.find(o=>o.projectPaymentIds.includes(n.id)):null;return e.jsxs("article",{className:"rounded-xl border border-slate-200 bg-white p-4 shadow-sm",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-slate-900 break-words",children:r.find(o=>o.id===n.projectId)?.projectName||"N/A"}),e.jsx("p",{className:"mt-1 text-xs text-slate-500",children:N(n.date)})]}),e.jsx("span",{className:`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${i?"solid-green text-white":"solid-orange text-white"}`,children:i?"Lunas":"Belum Lunas"})]}),e.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3 border-t border-slate-100 pt-3",children:[e.jsx("span",{className:"text-xs text-slate-500",children:"Pembayaran"}),e.jsx("span",{className:"text-sm font-semibold text-slate-900",children:P(n.fee)})]}),c&&e.jsx("button",{type:"button",onClick:()=>d(c),className:"mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50",children:"Lihat slip pembayaran"})]},n.id)}),p.filter(n=>n.teamMemberId===t.id).length===0&&e.jsx("p",{className:"rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500",children:"Belum ada riwayat pembayaran."})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"freelancer-payment-table w-full min-w-[680px] text-sm",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-center font-medium text-slate-500 w-12",children:"No"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-500",children:"Acara Pernikahan"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-500",children:"Tanggal"}),e.jsx("th",{className:"p-3 text-right font-medium text-slate-500",children:"Pembayaran"}),e.jsx("th",{className:"p-3 text-center font-medium text-slate-500",children:"Status & Aksi"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-200",children:p.filter(n=>n.teamMemberId===t.id).map((n,i)=>{const o=n.status==="Paid"?x.find(m=>m.projectPaymentIds.includes(n.id)):null;return e.jsxs("tr",{className:"widget-animate",style:{animationDelay:`${i*50}ms`},children:[e.jsx("td",{className:"p-3 text-center font-medium text-slate-500",children:i+1}),e.jsx("td",{className:"p-3 font-semibold text-public-text-primary",children:r.find(m=>m.id===n.projectId)?.projectName||"N/A"}),e.jsx("td",{className:"p-3 text-public-text-secondary",children:N(n.date)}),e.jsx("td",{className:"p-3 text-right font-medium text-public-text-primary",children:P(n.fee)}),e.jsxs("td",{className:"p-3 text-center space-x-2",children:[e.jsx("span",{className:`px-2.5 py-1 text-xs font-medium rounded-full ${n.status==="Paid"?"solid-green text-white":"solid-orange text-white"}`,children:n.status==="Paid"?"Lunas":"Belum Lunas"}),o&&e.jsx("button",{onClick:()=>d(o),className:"text-xs font-medium text-slate-700 hover:text-slate-950 hover:underline",children:"Lihat Slip"})]})]},n.id)})})]})})]}),re=({member:t})=>e.jsxs("div",{className:"freelancer-performance space-y-5",children:[e.jsx("div",{className:"freelancer-performance-rating overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm widget-animate",style:{animationDelay:"100ms"},children:e.jsxs("div",{className:"flex flex-col items-center justify-between gap-5 sm:flex-row",children:[e.jsxs("div",{className:"text-center sm:text-left",children:[e.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.15em] text-slate-500",children:"Ringkasan performa"}),e.jsx("h3",{className:"mt-2 text-lg font-semibold text-slate-900",children:"Peringkat Kinerja"}),e.jsx("p",{className:"mt-1 text-sm text-slate-500",children:"Penilaian dari perjalanan kerja Anda"})]}),e.jsxs("div",{className:"flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-3 ring-1 ring-inset ring-slate-200",children:[e.jsx(L,{className:"h-6 w-6 text-amber-500"}),e.jsxs("p",{className:"text-3xl font-semibold tracking-tight text-slate-900",children:[t.rating.toFixed(1)," ",e.jsx("span",{className:"text-base font-medium text-slate-400",children:"/ 5.0"})]})]})]})}),e.jsxs("section",{className:"freelancer-performance-notes rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm widget-animate",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Catatan Kinerja dari Admin"}),e.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Masukan dan apresiasi untuk Anda"}),e.jsxs("div",{className:"mt-5 space-y-3 max-h-80 overflow-y-auto pr-1",children:[t.performanceNotes.map((r,p)=>e.jsxs("div",{className:`p-4 rounded-xl border widget-animate ${r.type===V.PRAISE?"border-emerald-100 bg-emerald-50/60":"border-amber-100 bg-amber-50/60"}`,style:{animationDelay:`${300+p*100}ms`},children:[e.jsxs("p",{className:"text-sm leading-relaxed text-slate-700",children:['"',r.note,'"']}),e.jsx("p",{className:"text-right text-xs text-slate-500 mt-3",children:N(r.date)})]},r.id)),t.performanceNotes.length===0&&e.jsx("div",{className:"rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500",children:"Belum ada catatan kinerja."})]})]})]}),oe=({project:t,member:r,showNotification:p,onClose:x})=>{const d=t.team.find(i=>i.memberId===r.id),n=[{label:"Brief & moodboard",description:"Referensi internal acara",url:t.driveLink},{label:"File dari pengantin",description:"Dokumen yang dibagikan klien",url:t.clientDriveLink},{label:"File hasil akhir",description:"Materi final untuk pengantin",url:t.finalDriveLink}];return e.jsxs("div",{className:"freelancer-project-detail space-y-5 sm:space-y-6",children:[e.jsxs("section",{className:"relative overflow-hidden rounded-2xl bg-slate-900 p-5 text-white sm:p-6",children:[e.jsx("div",{className:"absolute -right-8 -top-14 h-40 w-40 rounded-full border border-white/10"}),e.jsx("div",{className:"absolute -right-1 -top-8 h-28 w-28 rounded-full border border-white/10"}),e.jsxs("div",{className:"relative",children:[e.jsx("p",{className:"text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300",children:"Informasi acara"}),e.jsx("h2",{className:"mt-2 text-xl font-semibold tracking-tight sm:text-2xl",children:t.projectName}),e.jsx("p",{className:"mt-1 text-sm text-slate-300",children:t.clientName}),d&&e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("span",{className:"inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/15",children:d.role}),d.subJob&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/15",children:d.subJob})]})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-slate-900",children:"Jadwal & lokasi"}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-500",children:"Informasi utama penugasan Anda"})]}),e.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[e.jsxs("div",{className:"flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4",children:[e.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600",children:e.jsx(D,{className:"h-4 w-4"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-xs text-slate-500",children:"Tanggal acara"}),e.jsx("p",{className:"mt-1 text-sm font-medium text-slate-900",children:N(t.date)})]})]}),e.jsxs("div",{className:"flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4",children:[e.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600",children:e.jsx(q,{className:"h-4 w-4"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-xs text-slate-500",children:"Lokasi"}),e.jsx("p",{className:"mt-1 text-sm font-medium text-slate-900",children:t.location||"Belum ditentukan"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:col-span-2",children:[e.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600",children:e.jsx(B,{className:"h-4 w-4"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-xs text-slate-500",children:"Waktu kerja"}),e.jsxs("p",{className:"mt-1 text-sm font-medium text-slate-900",children:[t.startTime||"Belum ditentukan"," ",e.jsx("span",{className:"px-1 text-slate-400",children:"—"})," ",t.endTime||"Belum ditentukan"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-slate-900",children:"Dokumen & tautan"}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-500",children:"Materi yang terkait dengan acara ini"})]}),e.jsx("div",{className:"grid gap-2 sm:grid-cols-3",children:n.map(i=>e.jsxs("div",{className:`rounded-xl border p-3.5 ${i.url?"border-slate-200 bg-white":"border-dashed border-slate-200 bg-slate-50/70"}`,children:[e.jsx("p",{className:"text-sm font-medium text-slate-800",children:i.label}),e.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-500",children:i.description}),i.url?e.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-800 hover:text-slate-500 hover:underline",children:[e.jsx(S,{className:"h-3.5 w-3.5"}),"Buka tautan"]}):e.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"Belum tersedia"})]},i.label))})]}),t.notes&&e.jsxs("section",{className:"rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-4 w-4 text-slate-500"}),e.jsx("h3",{className:"text-sm font-semibold text-slate-900",children:"Catatan acara"})]}),e.jsx("p",{className:"mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-600",children:t.notes})]})]})};export{be as default};

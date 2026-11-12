import{j as a,ac as N}from"./vendor-react-DK1NLE7n.js";import{M as k}from"./index-Bq7L-As1.js";function I(e,s){const l=new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),m=e.team&&e.team.length>0?e.team.map(t=>`- ${t.name}`).join(`
`):"Tim belum ditugaskan.",n=[];if(n.push(`${l}`),n.push(`*${e.projectName}*`),n.push(`
*Tim Bertugas:*
${m}`),(e.startTime||e.endTime||e.location)&&n.push(""),e.startTime&&n.push(`*Waktu Mulai:* ${e.startTime}`),e.endTime&&n.push(`*Waktu Selesai:* ${e.endTime}`),e.location&&n.push(`*Lokasi :* ${e.location}`),e.notes&&(n.push(""),n.push(`*Catatan:*
${e.notes}`)),(e.location||e.driveLink)&&n.push(""),e.location){const o=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.location)}`;n.push(`*Link Lokasi:*
${o}`)}e.driveLink&&(e.location&&n.push(""),n.push(`*Link Moodboard:*
${e.driveLink}`)),s.briefingTemplate&&(n.push(`
---
`),n.push(s.briefingTemplate));const r=n.join(`
`).replace(/\n\n\n+/g,`

`).trim(),$=`whatsapp://send?text=${encodeURIComponent(r)}`,i=t=>t.toISOString().replace(/-|:|\.\d{3}/g,""),c=/(\d{2}:\d{2})/,d=e.startTime?.match(c),u=e.endTime?.match(c);let h="",g="";if(d){const t=e.date.split("T")[0],o=new Date(`${t}T${d[1]}:00`),f=s.eventTypes?.includes(e.projectType)?2:8,T=u?new Date(`${t}T${u[1]}:00`):new Date(o.getTime()+f*60*60*1e3),x=`${i(o)}/${i(T)}`,p=`Briefing untuk ${e.projectName}:

${r}`;h=`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.projectName)}&dates=${x}&details=${encodeURIComponent(p)}&location=${encodeURIComponent(e.location||"")}`;const D=p.replace(/\n/g,"\\n");g=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT",`UID:${e.id}@VenaPictures.com`,`DTSTAMP:${i(new Date)}`,`DTSTART:${i(o)}`,`DTEND:${i(T)}`,`SUMMARY:${e.projectName}`,`DESCRIPTION:${D}`,`LOCATION:${e.location||""}`,"END:VEVENT","END:VCALENDAR"].join(`
`)}return{text:r,whatsappLink:$,googleCalendarLink:h,icsDataUri:g}}const y=({isOpen:e,onClose:s,project:l,briefingData:m})=>a.jsx(k,{isOpen:e,onClose:s,title:"Bagikan Briefing Acara Pernikahan",size:"2xl",children:l&&a.jsxs("div",{className:"space-y-4",children:[a.jsx("textarea",{value:m.text,readOnly:!0,rows:15,className:"input-field w-full text-sm"}),a.jsx("div",{className:"flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-200",children:a.jsxs("a",{href:m.whatsappLink,target:"_blank",rel:"noopener noreferrer",className:"button-primary inline-flex items-center justify-center gap-2 text-xs sm:text-sm w-full sm:w-auto",children:[a.jsx(N,{className:"w-4 h-4"})," Bagikan ke WhatsApp"]})})]})});export{y as P,I as g};

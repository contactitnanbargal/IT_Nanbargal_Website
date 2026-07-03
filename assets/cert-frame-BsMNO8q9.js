const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jspdf.es.min-Bkwqt6Zh.js","assets/index-7B6m8-IW.js","assets/motion-CFI7ASVz.js","assets/router-CHHfm-p0.js","assets/vendor-C1U7dC3e.js","assets/index-D6Rc3t5l.css"])))=>i.map(i=>d[i]);
import{_ as h}from"./index-7B6m8-IW.js";import{j as c}from"./motion-CFI7ASVz.js";import{r as d}from"./router-CHHfm-p0.js";const b={accent:"#c9a84c",background:"#060e24",glow:"#1a3a78",name:"#f5edd8",title:"#ffffff"},u={certId:"",name:"",companyName:"IT NANBARGAL",companyTagline:"Software Company · Tamil Nadu · Est. 2024 · Not a Coaching Center",certNoLabel:"Certificate No.",certifyPhrase:"This is to proudly certify that",titleMain:"CERTIFICATE OF INTERNSHIP",titleSub:"COMPLETION",presentTo:"is presented to",completedPrefix:"has successfully completed the",completedBold:"4-Week Project-Based Internship Program",completedSuffix:"in",programName:"Full Stack Application Development & Production Deployment",conductedPrefix:"Conducted by",conductedBy:"IT Nanbargal",startDate:"10 March 2026",dateJoiner:"to",endDate:"07 April 2026",locationLine:"Tamil Nadu, India",projects:[{label:"PROJECT 01",icon:"🌐",title:`Live Website
Published on Internet`},{label:"PROJECT 02",icon:"⚙️",title:`Full-Stack App
with Payment Integration`},{label:"PROJECT 03",icon:"📱",title:`React Native Mobile App
Built & Store-Ready`}],skillsHeading:"Key Learnings & Technical Deliverables",skills:[{title:"Frontend Development",desc:"HTML5, CSS3, React.js, Responsive UI"},{title:"Backend & REST APIs",desc:"Node.js, Express.js, API Architecture"},{title:"Database Integration",desc:"PostgreSQL, Supabase / Firebase"},{title:"Payment Integration",desc:"Razorpay / Stripe / Payment Gateways"},{title:"Mobile Development",desc:"React Native, APK & AAB Build"},{title:"Authentication & Security",desc:"JWT, Session Auth, Secure Login"},{title:"Website & App Deployment",desc:"Live on Internet, Custom Domain, Hosting"},{title:"App Store Process",desc:"Play Store Setup, Listing & Submission"},{title:"Version Control",desc:"GitHub Workflow, Branching, Commits"}],outcomeIcon:"🏆",outcomeHeading:"Project Outcome",outcomeText:"Successfully built and deployed a production-ready full-stack application with a live website published on the internet, backend APIs, database, authentication, and payment gateway integration — and developed a React Native mobile app with complete Play Store setup and submission. All projects are real, functional, and portfolio-worthy.",sig1Name:"Sri Varsan S",sig1Role:"Founder & Program Director",sig2Script:"IT Nanbargal",sig2Name:"IT Nanbargal",sig2Role:"Software Company · Tamil Nadu",issueDateLabel:"Date of Issue",issueDate:"07 April 2026",credTypeLabel:"Credential Type",credentialType:"Project Internship",certIdLabel:"Certificate ID",qrLabel:"Scan · Verify",regItems:["GST · 33RDXPS2095Q1ZY","UDYAM · TN-20-0215420","itnanbargal.com"],verifyBase:"itnanbargal.com/verify/",verifyLabel:"Verify",colors:{...b}};function f(){return JSON.parse(JSON.stringify(u))}function y(n){const e=f();if(!n||typeof n!="object")return e;const t=n;for(const i of Object.keys(e)){const a=t[i];a!=null&&(i==="colors"&&typeof a=="object"?e.colors={...e.colors,...a}:i==="projects"&&Array.isArray(a)?e.projects=a:i==="skills"&&Array.isArray(a)?e.skills=a:i==="regItems"&&Array.isArray(a)?e.regItems=a:typeof a==typeof e[i]&&(e[i]=a))}return e}function x(n){if(!n)return null;try{const e=typeof n=="string"?JSON.parse(n):n;return y(e)}catch{return null}}function P(n){const e=x(n.content);if(e)return n.id&&(e.certId=n.id),n.name&&(e.name=n.name),e;const t=f();return t.certId=n.id||"",t.name=n.name||"",n.program&&(t.programName=n.program),n.issue_date&&(t.issueDate=n.issue_date),n.start_date&&(t.startDate=n.start_date),n.end_date&&(t.endDate=n.end_date),n.location&&(t.locationLine=n.location),t}function I(n){if(!n||n.type!=="CAPTURE_DONE"||!(n.blob instanceof Blob))return!1;if(n.format==="pdf")return w(n),!0;const e=URL.createObjectURL(n.blob),t=document.createElement("a");return t.href=e,t.download=n.filename||`certificate.${n.format||"png"}`,document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(e),4e3),!0}async function w(n){try{const{jsPDF:e}=await h(async()=>{const{jsPDF:a}=await import("./jspdf.es.min-Bkwqt6Zh.js").then(s=>s.j);return{jsPDF:a}},__vite__mapDeps([0,1,2,3,4,5])),t=await new Promise((a,s)=>{const r=new FileReader;r.onload=()=>a(r.result),r.onerror=()=>s(r.error),r.readAsDataURL(n.blob)}),i=new e({orientation:"portrait",unit:"mm",format:"a4",compress:!0});i.addImage(t,"JPEG",0,0,210,297,void 0,"FAST"),i.save(n.filename||"certificate.pdf")}catch(e){console.error("PDF export failed:",e)}}function N(n){return{name:n.name,program:n.programName,issue_date:n.issueDate,start_date:n.startDate,end_date:n.endDate,location:n.locationLine}}const T=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>IT Nanbargal – Certificate of Internship Completion</title>
    <!-- Non-blocking font load: media="print" keeps a slow font CDN from
         blocking the render engine; onload flips it to apply everywhere -->
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Cinzel:wght@400;600;700;800;900&family=Montserrat:wght@200;300;400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
      rel="stylesheet"
      media="print"
      onload="this.media='all'"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      @page {
        size: A4 portrait;
        margin: 0;
      }
      :root {
        /* Accent (gold) family — driven by content.colors.accent */
        --gB: #e8c96d;
        --gM: #c9a84c;
        --gD: #9a7a2e;
        --gRGB: 201, 168, 76;
        --gBRGB: 232, 201, 109;
        /* Name / ivory family — driven by content.colors.name */
        --iv: #f5edd8;
        --id: #ddd0b0;
        /* Main title color — driven by content.colors.title */
        --title: #ffffff;
        /* Background family — driven by content.colors.background + .glow */
        --bgDeep: #060e24;
        --bgMid: #0d1a3a;
        --bgLow: #091530;
        --bgGlow1: #1a3a78;
        --bgGlow2: #0a1d50;
        --bgGlow3: #0c2060;
        --w: rgba(255, 255, 255, 1);
        --w8: rgba(255, 255, 255, 0.82);
        --w5: rgba(255, 255, 255, 0.55);
        --w3: rgba(255, 255, 255, 0.35);
      }
      /* Re-theme the inline SVG corner ornaments (attribute selectors beat
         presentation attributes, so custom colors apply to them too) */
      .corner [stroke='#c9a84c'] { stroke: var(--gM); }
      .corner [fill='#c9a84c'] { fill: var(--gM); }
      .corner [fill='#e8c96d'] { fill: var(--gB); }
      .corner [stroke='rgba(201,168,76,0.2)'] { stroke: rgba(var(--gRGB), 0.2); }
      .corner [stroke='rgba(201,168,76,0.3)'] { stroke: rgba(var(--gRGB), 0.3); }
      .corner [fill='rgba(201,168,76,0.45)'] { fill: rgba(var(--gRGB), 0.45); }
      .corner [fill='rgba(201,168,76,0.5)'] { fill: rgba(var(--gRGB), 0.5); }
      html,
      body {
        width: 210mm;
        height: 297mm;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        background: var(--bgDeep);
      }
      .cert {
        width: 210mm;
        height: 297mm;
        position: relative;
        overflow: hidden;
        background: var(--bgDeep);
        font-family: 'Montserrat', sans-serif;
      }
      .bg-rich {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(
            ellipse 160% 55% at 50% -2%,
            var(--bgGlow1) 0%,
            transparent 54%
          ),
          radial-gradient(
            ellipse 80% 50% at 0% 100%,
            var(--bgGlow2) 0%,
            transparent 52%
          ),
          radial-gradient(
            ellipse 80% 50% at 100% 0%,
            var(--bgGlow3) 0%,
            transparent 52%
          ),
          linear-gradient(175deg, var(--bgDeep) 0%, var(--bgMid) 45%, var(--bgLow) 100%);
      }
      .bg-shimmer {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(
            ellipse 110% 22% at 50% 0%,
            rgba(var(--gRGB), 0.18) 0%,
            transparent 60%
          ),
          radial-gradient(
            ellipse 70% 18% at 50% 100%,
            rgba(var(--gRGB), 0.1) 0%,
            transparent 60%
          ),
          radial-gradient(
            ellipse 40% 30% at 12% 45%,
            rgba(var(--gRGB), 0.06) 0%,
            transparent 60%
          ),
          radial-gradient(
            ellipse 40% 30% at 88% 45%,
            rgba(var(--gRGB), 0.06) 0%,
            transparent 60%
          );
      }
      .bg-stars {
        position: absolute;
        inset: 0;
        background-image:
          radial-gradient(
            1px 1px at 15% 18%,
            rgba(255, 255, 255, 0.25) 0%,
            transparent 100%
          ),
          radial-gradient(
            1px 1px at 72% 12%,
            rgba(255, 255, 255, 0.18) 0%,
            transparent 100%
          ),
          radial-gradient(
            1px 1px at 88% 35%,
            rgba(255, 255, 255, 0.22) 0%,
            transparent 100%
          ),
          radial-gradient(
            1px 1px at 5% 60%,
            rgba(255, 255, 255, 0.15) 0%,
            transparent 100%
          ),
          radial-gradient(
            1px 1px at 92% 70%,
            rgba(255, 255, 255, 0.2) 0%,
            transparent 100%
          ),
          radial-gradient(
            1.5px 1.5px at 45% 8%,
            rgba(var(--gRGB), 0.4) 0%,
            transparent 100%
          ),
          radial-gradient(
            1.5px 1.5px at 30% 90%,
            rgba(var(--gRGB), 0.3) 0%,
            transparent 100%
          ),
          radial-gradient(
            1px 1px at 65% 85%,
            rgba(255, 255, 255, 0.18) 0%,
            transparent 100%
          );
      }
      .wm {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 120mm;
        height: 120mm;
        opacity: 0.04;
        pointer-events: none;
      }
      .wm img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .b1 {
        position: absolute;
        inset: 5mm;
        border: 1.2mm solid var(--gM);
      }
      .b2 {
        position: absolute;
        inset: 7mm;
        border: 0.3mm solid rgba(var(--gRGB), 0.5);
      }
      .b3 {
        position: absolute;
        inset: 8.5mm;
        border: 0.15mm solid rgba(var(--gRGB), 0.25);
      }
      .b4 {
        position: absolute;
        inset: 10mm;
        border: 0.08mm solid rgba(var(--gRGB), 0.12);
      }
      .corner {
        position: absolute;
        width: 38mm;
        height: 38mm;
        pointer-events: none;
      }
      .c-tl {
        top: 0;
        left: 0;
      }
      .c-tr {
        top: 0;
        right: 0;
        transform: scaleX(-1);
      }
      .c-bl {
        bottom: 0;
        left: 0;
        transform: scaleY(-1);
      }
      .c-br {
        bottom: 0;
        right: 0;
        transform: scale(-1, -1);
      }
      .side-acc {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.8mm;
        height: 75mm;
      }
      .side-acc.l {
        left: 11.5mm;
      }
      .side-acc.r {
        right: 11.5mm;
      }
      .sa-line {
        flex: 1;
        width: 0.4mm;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--gM) 25%,
          var(--gB) 50%,
          var(--gM) 75%,
          transparent
        );
      }
      .sa-dot {
        width: 1.3mm;
        height: 1.3mm;
        border-radius: 50%;
        background: var(--gM);
        flex-shrink: 0;
      }
      .sa-dia {
        width: 2.4mm;
        height: 2.4mm;
        background: linear-gradient(135deg, var(--gB), var(--gD));
        transform: rotate(45deg);
        flex-shrink: 0;
        box-shadow: 0 0 5px rgba(var(--gRGB), 0.6);
      }
      .cert-id {
        position: absolute;
        top: 11mm;
        right: 14mm;
        text-align: right;
      }
      .cert-id-lbl {
        font-family: 'Montserrat', sans-serif;
        font-size: 5pt;
        font-weight: 500;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        color: var(--gM);
        display: block;
        margin-bottom: 1mm;
      }
      .cert-id-val {
        font-family: 'Cinzel', serif;
        font-size: 8.5pt;
        font-weight: 700;
        letter-spacing: 0.14em;
        color: var(--iv);
      }
      .content {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12mm 21mm 6mm;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 5mm;
        width: 100%;
        justify-content: center;
        margin-bottom: 3mm;
      }
      .logo-wrap {
        width: 18mm;
        height: 18mm;
        flex-shrink: 0;
        border-radius: 50%;
        border: 0.6mm solid rgba(var(--gRGB), 0.6);
        background: radial-gradient(
          circle,
          rgba(var(--gRGB), 0.1),
          rgba(var(--gRGB), 0.02)
        );
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow:
          0 0 16px rgba(var(--gRGB), 0.28),
          0 0 40px rgba(74, 159, 255, 0.12);
        overflow: hidden;
      }
      .logo-wrap img {
        width: 15mm;
        height: 15mm;
        object-fit: contain;
      }
      .company-name {
        font-family: 'Cinzel', serif;
        font-size: 21pt;
        font-weight: 900;
        color: var(--gB);
        letter-spacing: 0.2em;
        line-height: 1;
        text-shadow: 0 0 30px rgba(var(--gBRGB), 0.4);
      }
      .company-tagline {
        font-family: 'Montserrat', sans-serif;
        font-size: 5.5pt;
        font-weight: 400;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: var(--id);
        margin-top: 2mm;
      }
      .div-full {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 3mm;
        margin: 2.5mm 0;
      }
      .div-full .dline {
        flex: 1;
        height: 0.55mm;
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--gD) 15%,
          var(--gB) 40%,
          var(--gM) 50%,
          var(--gB) 60%,
          var(--gD) 85%,
          transparent 100%
        );
      }
      .gem {
        width: 3mm;
        height: 3mm;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--gB), var(--gD));
        transform: rotate(45deg);
        box-shadow:
          0 0 8px rgba(var(--gRGB), 0.9),
          0 0 2px rgba(255, 255, 255, 0.4);
      }
      .gem-sm {
        width: 1.6mm;
        height: 1.6mm;
        flex-shrink: 0;
        background: var(--gM);
        transform: rotate(45deg);
      }
      .div-thin {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2mm;
        margin: 1.8mm 0;
      }
      .div-thin .dline {
        flex: 1;
        height: 0.2mm;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(var(--gRGB), 0.45),
          transparent
        );
      }
      .div-thin .gem-sm {
        width: 1.2mm;
        height: 1.2mm;
      }
      .certify-phrase {
        font-family: 'EB Garamond', serif;
        font-size: 10pt;
        font-style: italic;
        color: var(--w5);
        letter-spacing: 0.07em;
        margin-bottom: 2mm;
      }
      .cert-title {
        font-family: 'Cinzel', serif;
        font-size: 25pt;
        font-weight: 900;
        color: var(--title);
        letter-spacing: 0.1em;
        line-height: 1.05;
        text-align: center;
        text-shadow: 0 2px 25px rgba(74, 120, 220, 0.5);
      }
      .cert-of {
        font-family: 'Cinzel', serif;
        font-size: 12pt;
        font-weight: 600;
        color: var(--gB);
        letter-spacing: 0.32em;
        margin-top: 1.8mm;
        text-align: center;
        text-shadow: 0 0 18px rgba(var(--gBRGB), 0.38);
      }
      .present-to {
        font-family: 'EB Garamond', serif;
        font-size: 9.5pt;
        font-style: italic;
        color: var(--w3);
        letter-spacing: 0.06em;
        margin: 2.5mm 0 1.5mm;
      }
      .recipient {
        font-family: 'Cormorant Garamond', serif;
        font-size: 42pt;
        font-weight: 700;
        font-style: italic;
        color: var(--iv);
        letter-spacing: 0.03em;
        line-height: 1;
        text-align: center;
        text-shadow:
          0 0 50px rgba(245, 237, 216, 0.18),
          0 4px 30px rgba(0, 0, 0, 0.5);
        margin-bottom: 2mm;
      }
      .name-underline {
        width: 135mm;
        display: flex;
        flex-direction: column;
        gap: 1.3mm;
        margin-bottom: 3mm;
      }
      .nu-thick {
        height: 0.6mm;
        background: linear-gradient(90deg, transparent, var(--gM), transparent);
      }
      .nu-thin {
        height: 0.2mm;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(var(--gRGB), 0.5),
          transparent
        );
      }
      .prog-completed {
        font-family: 'EB Garamond', serif;
        font-size: 10pt;
        font-style: italic;
        color: rgba(255, 255, 255, 0.72);
        margin-bottom: 1.8mm;
        line-height: 1.6;
      }
      .prog-completed strong {
        color: var(--w8);
        font-style: normal;
        font-weight: 600;
      }
      .prog-name {
        font-family: 'Cinzel', serif;
        font-size: 11.5pt;
        font-weight: 700;
        color: var(--gB);
        text-align: center;
        letter-spacing: 0.06em;
        line-height: 1.35;
        margin-bottom: 1.2mm;
        text-shadow: 0 0 20px rgba(var(--gBRGB), 0.3);
      }
      .prog-dates {
        font-family: 'EB Garamond', serif;
        font-size: 9pt;
        font-style: italic;
        color: var(--w5);
        text-align: center;
        margin-bottom: 3mm;
        line-height: 1.5;
      }
      .prog-dates span {
        color: var(--gM);
        font-style: normal;
        font-weight: 600;
      }
      .deliverables {
        display: flex;
        gap: 2.5mm;
        width: 100%;
        margin-bottom: 3mm;
      }
      .deliv {
        flex: 1;
        border: 0.35mm solid rgba(var(--gRGB), 0.45);
        padding: 3.2mm 2.5mm;
        text-align: center;
        position: relative;
        background: linear-gradient(
          160deg,
          rgba(var(--gRGB), 0.08) 0%,
          rgba(var(--gRGB), 0.02) 100%
        );
      }
      .deliv::before {
        content: '';
        position: absolute;
        top: -0.35mm;
        left: 10%;
        right: 10%;
        height: 0.7mm;
        background: linear-gradient(90deg, transparent, var(--gM), transparent);
      }
      .deliv-n {
        font-family: 'Montserrat', sans-serif;
        font-size: 5.5pt;
        color: var(--gM);
        letter-spacing: 0.22em;
        display: block;
        margin-bottom: 1.8mm;
      }
      .deliv-ico {
        font-size: 14pt;
        display: block;
        margin-bottom: 2mm;
        line-height: 1;
      }
      .deliv-t {
        font-family: 'Montserrat', sans-serif;
        font-size: 6.5pt;
        font-weight: 600;
        color: var(--iv);
        letter-spacing: 0.05em;
        text-transform: uppercase;
        display: block;
        line-height: 1.5;
      }
      .skills-head {
        font-family: 'Montserrat', sans-serif;
        font-size: 5.5pt;
        font-weight: 600;
        color: var(--gM);
        letter-spacing: 0.32em;
        text-transform: uppercase;
        margin-bottom: 2mm;
        text-align: center;
      }
      .skills-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2mm 4mm;
        width: 100%;
        margin-bottom: 2.5mm;
      }
      .sk-row {
        display: flex;
        align-items: flex-start;
        gap: 2mm;
      }
      .sk-dot {
        width: 1.5mm;
        height: 1.5mm;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--gB), var(--gM));
        border-radius: 50%;
        margin-top: 1.8mm;
        box-shadow: 0 0 4px rgba(var(--gRGB), 0.8);
      }
      .sk-txt strong {
        font-family: 'Montserrat', sans-serif;
        font-size: 7pt;
        font-weight: 600;
        color: var(--iv);
        display: block;
        line-height: 1.3;
      }
      .sk-txt span {
        font-family: 'Montserrat', sans-serif;
        font-size: 6.2pt;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.78);
        line-height: 1.45;
      }
      .outcome {
        width: 100%;
        border: 0.3mm solid rgba(var(--gRGB), 0.35);
        background: linear-gradient(
          135deg,
          rgba(var(--gRGB), 0.08),
          rgba(var(--gRGB), 0.02)
        );
        padding: 3mm 5mm;
        display: flex;
        align-items: flex-start;
        gap: 4mm;
        margin-bottom: 2.5mm;
        position: relative;
      }
      .outcome::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0.7mm;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--gM),
          transparent
        );
      }
      .outcome-ico {
        font-size: 12pt;
        flex-shrink: 0;
        padding-top: 0.5mm;
      }
      .outcome-head {
        font-family: 'Montserrat', sans-serif;
        font-size: 6pt;
        font-weight: 700;
        color: var(--gB);
        letter-spacing: 0.24em;
        text-transform: uppercase;
        display: block;
        margin-bottom: 1mm;
      }
      .outcome-txt {
        font-family: 'EB Garamond', serif;
        font-size: 8.3pt;
        font-style: italic;
        color: rgba(255, 255, 255, 0.78);
        line-height: 1.6;
      }
      .footer-row {
        display: flex;
        width: 100%;
        align-items: flex-end;
        margin-top: auto;
        margin-bottom: 4mm; /* adds space below footer */
      }
      .seal-col {
        width: 40mm;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 7mm;
      }
      .seal-outer {
        width: 36mm;
        height: 36mm;
        border-radius: 50%;
        border: 0.9mm solid var(--gM);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: radial-gradient(
          circle,
          rgba(var(--gRGB), 0.09),
          rgba(var(--gRGB), 0.01)
        );
        position: relative;
        box-shadow:
          0 0 18px rgba(var(--gRGB), 0.22),
          inset 0 0 10px rgba(var(--gRGB), 0.07);
      }
      .seal-outer::before {
        content: '';
        position: absolute;
        inset: 2mm;
        border-radius: 50%;
        border: 0.25mm dashed rgba(var(--gRGB), 0.4);
      }
      .seal-outer::after {
        content: '';
        position: absolute;
        inset: 3.8mm;
        border-radius: 50%;
        border: 0.1mm solid rgba(var(--gRGB), 0.15);
      }
      .seal-logo {
        width: 32mm;
        height: auto;
        object-fit: contain;
        margin-bottom: 1mm;
      }
      .seal-t1 {
        font-family: 'Cinzel', serif;
        font-size: 5pt;
        font-weight: 700;
        color: var(--gB);
        letter-spacing: 0.12em;
        text-align: center;
        line-height: 1.3;
        display: none; /* add this line */
      }
      .seal-t2 {
        font-family: 'Cinzel', serif;
        font-size: 3.8pt;
        color: var(--gM);
        letter-spacing: 0.18em;
        text-align: center;
        margin-top: 0.5mm;
        display: none; /* add this line */
      }
      .sigs {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 10mm;
        padding: 0 4mm;
        margin-bottom: 13mm;
      }
      .sig-block {
        text-align: center;
        flex: 1;
        max-width: 44mm;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }
      .sig-script {
        font-family: 'Cormorant Garamond', serif;
        font-size: 17pt;
        font-style: italic;
        font-weight: 600;
        color: var(--gB);
        letter-spacing: 0.02em;
        line-height: 1;
        margin-bottom: 2mm;
      }
      .sig-line {
        width: 35mm;
        height: 0.4mm;
        background: linear-gradient(90deg, transparent, var(--gM), transparent);
        margin-bottom: 2mm;
      }
      .sig-name {
        font-family: 'Montserrat', sans-serif;
        font-size: 7pt;
        font-weight: 600;
        color: var(--iv);
        line-height: 1.3;
      }
      .sig-role {
        font-family: 'Montserrat', sans-serif;
        font-size: 5pt;
        font-weight: 400;
        color: var(--id);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-top: 0.6mm;
        line-height: 1.5;
      }
      .meta-col {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 3.5mm;
        margin-bottom: 7mm;
      }
      .meta-grid {
        display: flex;
        flex-direction: column;
        gap: 2mm;
        width: 100%;
        align-items: flex-end;
      }
      .meta-item {
        text-align: right;
      }
      .meta-lbl {
        font-family: 'Montserrat', sans-serif;
        font-size: 4.8pt;
        font-weight: 500;
        color: var(--id);
        letter-spacing: 0.22em;
        text-transform: uppercase;
        display: block;
        margin-bottom: 0.6mm;
        line-height: 1;
      }
      .meta-val {
        font-family: 'Cinzel', serif;
        font-size: 7pt;
        font-weight: 700;
        color: var(--gB);
        letter-spacing: 0.1em;
        line-height: 1.2;
        display: block;
      }
      .qr-box {
        width: 24mm;
        height: 24mm;
        border: 0.4mm solid rgba(var(--gRGB), 0.5);
        background: rgba(var(--gRGB), 0.03);
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding-top: 1.6mm; /* small top space */
      }

      .qr-c {
        position: absolute;
        width: 3.2mm;
        height: 3.2mm;
      }
      .qr-c.tl {
        top: 0.8mm;
        left: 0.8mm;
        border-top: 0.6mm solid var(--gM);
        border-left: 0.6mm solid var(--gM);
      }
      .qr-c.tr {
        top: 0.8mm;
        right: 0.8mm;
        border-top: 0.6mm solid var(--gM);
        border-right: 0.6mm solid var(--gM);
      }
      .qr-c.bl {
        bottom: 3mm;
        left: 0.8mm;
        border-bottom: 0.6mm solid var(--gM);
        border-left: 0.6mm solid var(--gM);
      }
      .qr-c.br {
        bottom: 3mm;
        right: 0.8mm;
        border-bottom: 0.6mm solid var(--gM);
        border-right: 0.6mm solid var(--gM);
      }
      .qr-img-el {
        width: 13mm;
        height: 13mm;
        object-fit: contain;

        margin-top: 0.5mm;
        margin-bottom: 5mm;
      }

      /* placeholder QR grid */
      .qr-ph {
        width: 13mm;
        height: 13mm;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.6mm;

        margin-top: 0.3mm;
        margin-bottom: 5mm;
      }
      .qp {
        aspect-ratio: 1;
        background: rgba(var(--gRGB), 0.22);
        border-radius: 0.2mm;
      }
      .qp.d {
        background: rgba(var(--gRGB), 0.7);
      }
      .qp.e {
        background: transparent;
      }
      .qr-lbl {
        font-family: 'Montserrat', sans-serif;
        font-size: 4pt;
        font-weight: 500;
        color: var(--gM);
        letter-spacing: 0.18em;
        text-transform: uppercase;

        position: absolute;
        bottom: 0.9mm;
        left: 0;
        right: 0;
        text-align: center;
      }
      .reg-strip {
        position: absolute;
        bottom: 12mm;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6mm;
      }
      .reg-txt {
        font-family: 'Montserrat', sans-serif;
        font-size: 5pt;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.72);
        letter-spacing: 0.14em;
        text-transform: uppercase;
        white-space: nowrap;
      }
      .reg-sep {
        width: 1mm;
        height: 1mm;
        background: var(--gM);
        border-radius: 50%;
        flex-shrink: 0;
      }
      @media print {
        html,
        body {
          width: 210mm;
          height: 297mm;
        }
        * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    </style>
  </head>
  <body>
    <div class="cert">
      <div class="bg-rich"></div>
      <div class="bg-shimmer"></div>
      <div class="bg-stars"></div>
      <div class="wm">
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
      <div class="b4"></div>

      <svg class="corner c-tl" viewBox="0 0 130 130" fill="none">
        <path d="M7 7 L80 7" stroke="#c9a84c" stroke-width="3.5" />
        <path d="M7 7 L7 80" stroke="#c9a84c" stroke-width="3.5" />
        <path
          d="M7 7 L7 40 Q7 7 40 7"
          stroke="rgba(201,168,76,0.2)"
          stroke-width="12"
          fill="none"
        />
        <circle cx="7" cy="7" r="4.5" fill="#e8c96d" />
        <circle cx="80" cy="7" r="2.5" fill="#c9a84c" opacity="0.7" />
        <circle cx="7" cy="80" r="2.5" fill="#c9a84c" opacity="0.7" />
        <path d="M42 7 Q46 16 50 7 Q46 11 42 7Z" fill="#c9a84c" opacity="0.7" />
        <path d="M7 42 Q16 46 7 50 Q11 46 7 42Z" fill="#c9a84c" opacity="0.7" />
        <path
          d="M25 25 Q30 18 35 25 Q30 21 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <path
          d="M25 25 Q18 30 25 35 Q21 30 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <path
          d="M16 7 L16 16 L7 16"
          stroke="rgba(201,168,76,0.3)"
          stroke-width="0.7"
          fill="none"
        />
        <rect
          x="21"
          y="21"
          width="4"
          height="4"
          transform="rotate(45 23 23)"
          fill="rgba(201,168,76,0.5)"
        />
      </svg>
      <svg class="corner c-tr" viewBox="0 0 130 130" fill="none">
        <path d="M7 7 L80 7" stroke="#c9a84c" stroke-width="3.5" />
        <path d="M7 7 L7 80" stroke="#c9a84c" stroke-width="3.5" />
        <path
          d="M7 7 L7 40 Q7 7 40 7"
          stroke="rgba(201,168,76,0.2)"
          stroke-width="12"
          fill="none"
        />
        <circle cx="7" cy="7" r="4.5" fill="#e8c96d" />
        <circle cx="80" cy="7" r="2.5" fill="#c9a84c" opacity="0.7" />
        <circle cx="7" cy="80" r="2.5" fill="#c9a84c" opacity="0.7" />
        <path d="M42 7 Q46 16 50 7 Q46 11 42 7Z" fill="#c9a84c" opacity="0.7" />
        <path d="M7 42 Q16 46 7 50 Q11 46 7 42Z" fill="#c9a84c" opacity="0.7" />
        <path
          d="M25 25 Q30 18 35 25 Q30 21 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <path
          d="M25 25 Q18 30 25 35 Q21 30 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <path
          d="M16 7 L16 16 L7 16"
          stroke="rgba(201,168,76,0.3)"
          stroke-width="0.7"
          fill="none"
        />
        <rect
          x="21"
          y="21"
          width="4"
          height="4"
          transform="rotate(45 23 23)"
          fill="rgba(201,168,76,0.5)"
        />
      </svg>
      <svg class="corner c-bl" viewBox="0 0 130 130" fill="none">
        <path d="M7 7 L80 7" stroke="#c9a84c" stroke-width="3.5" />
        <path d="M7 7 L7 80" stroke="#c9a84c" stroke-width="3.5" />
        <path
          d="M7 7 L7 40 Q7 7 40 7"
          stroke="rgba(201,168,76,0.2)"
          stroke-width="12"
          fill="none"
        />
        <circle cx="7" cy="7" r="4.5" fill="#e8c96d" />
        <path d="M42 7 Q46 16 50 7 Q46 11 42 7Z" fill="#c9a84c" opacity="0.7" />
        <path d="M7 42 Q16 46 7 50 Q11 46 7 42Z" fill="#c9a84c" opacity="0.7" />
        <path
          d="M25 25 Q30 18 35 25 Q30 21 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <path
          d="M25 25 Q18 30 25 35 Q21 30 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <rect
          x="21"
          y="21"
          width="4"
          height="4"
          transform="rotate(45 23 23)"
          fill="rgba(201,168,76,0.5)"
        />
      </svg>
      <svg class="corner c-br" viewBox="0 0 130 130" fill="none">
        <path d="M7 7 L80 7" stroke="#c9a84c" stroke-width="3.5" />
        <path d="M7 7 L7 80" stroke="#c9a84c" stroke-width="3.5" />
        <path
          d="M7 7 L7 40 Q7 7 40 7"
          stroke="rgba(201,168,76,0.2)"
          stroke-width="12"
          fill="none"
        />
        <circle cx="7" cy="7" r="4.5" fill="#e8c96d" />
        <path d="M42 7 Q46 16 50 7 Q46 11 42 7Z" fill="#c9a84c" opacity="0.7" />
        <path d="M7 42 Q16 46 7 50 Q11 46 7 42Z" fill="#c9a84c" opacity="0.7" />
        <path
          d="M25 25 Q30 18 35 25 Q30 21 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <path
          d="M25 25 Q18 30 25 35 Q21 30 25 25Z"
          fill="rgba(201,168,76,0.45)"
        />
        <rect
          x="21"
          y="21"
          width="4"
          height="4"
          transform="rotate(45 23 23)"
          fill="rgba(201,168,76,0.5)"
        />
      </svg>

      <div class="side-acc l">
        <div class="sa-line"></div>
        <div class="sa-dot"></div>
        <div class="sa-dia"></div>
        <div class="sa-dot"></div>
        <div class="sa-dia"></div>
        <div class="sa-dot"></div>
        <div class="sa-line"></div>
      </div>
      <div class="side-acc r">
        <div class="sa-line"></div>
        <div class="sa-dot"></div>
        <div class="sa-dia"></div>
        <div class="sa-dot"></div>
        <div class="sa-dia"></div>
        <div class="sa-dot"></div>
        <div class="sa-line"></div>
      </div>

      <div class="cert-id">
        <span class="cert-id-lbl" id="certNoLbl">Certificate No.</span>
        <span class="cert-id-val" id="certId">ITN-2026-XXXX</span>
      </div>

      <div class="content">
        <div class="header">
          <div class="logo-wrap">
            <!-- ✅ LOCAL FILE: logo.png -->
            <img
              src="data:image/png;base64,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"
              alt="IT Nanbargal"
            />
          </div>
          <div>
            <div class="company-name" id="companyName">IT NANBARGAL</div>
            <div class="company-tagline" id="companyTagline">Software Company &nbsp;·&nbsp; Tamil Nadu &nbsp;·&nbsp; Est. 2024 &nbsp;·&nbsp; Not a Coaching Center</div>
          </div>
        </div>

        <div class="div-full">
          <div class="dline"></div>
          <div class="gem-sm"></div>
          <div class="gem"></div>
          <div class="gem-sm"></div>
          <div class="dline"></div>
        </div>

        <div class="certify-phrase" id="certifyPhrase">This is to proudly certify that</div>
        <div class="cert-title" id="certTitle">CERTIFICATE OF INTERNSHIP</div>
        <div class="cert-of" id="certSub">COMPLETION</div>

        <div class="div-thin">
          <div class="dline"></div>
          <div class="gem-sm"></div>
          <div class="dline"></div>
        </div>

        <div class="present-to" id="presentTo">is presented to</div>
        <div class="recipient" id="studentName">Student Name</div>
        <div class="name-underline">
          <div class="nu-thick"></div>
          <div class="nu-thin"></div>
        </div>

        <div class="prog-completed" id="progCompleted">
          <span id="completedPrefix">has successfully completed the</span>
          <strong id="completedBold">4-Week Project-Based Internship Program</strong>
          <span id="completedSuffix">in</span>
        </div>
        <div class="prog-name" id="progName">Full Stack Application Development &amp; Production Deployment</div>
        <div class="prog-dates" id="progDates">
          <span id="conductedPrefix" style="color: var(--w5); font-style: italic; font-weight: 400">Conducted by</span> <span id="conductedBy">IT Nanbargal</span>&nbsp;·&nbsp;<span id="startDate">10 March 2026</span>
          <span id="dateJoiner" style="color: var(--w5); font-style: italic; font-weight: 400">to</span> <span id="endDate">07 April 2026</span>&nbsp;·&nbsp;<span id="locationLine" style="color: var(--w5); font-style: italic; font-weight: 400">Tamil Nadu, India</span>
        </div>

        <div class="deliverables" id="deliverables">
          <div class="deliv">
            <span class="deliv-n">PROJECT 01</span
            ><span class="deliv-ico">🌐</span
            ><span class="deliv-t"
              >Live Website<br />Published on Internet</span
            >
          </div>
          <div class="deliv">
            <span class="deliv-n">PROJECT 02</span
            ><span class="deliv-ico">⚙️</span
            ><span class="deliv-t"
              >Full-Stack App<br />with Payment Integration</span
            >
          </div>
          <div class="deliv">
            <span class="deliv-n">PROJECT 03</span
            ><span class="deliv-ico">📱</span
            ><span class="deliv-t"
              >React Native Mobile App<br />Built &amp; Store-Ready</span
            >
          </div>
        </div>

        <div class="div-thin">
          <div class="dline"></div>
          <div class="gem-sm"></div>
          <div class="dline"></div>
        </div>

        <div class="skills-head" id="skillsHead">Key Learnings &amp; Technical Deliverables</div>
        <div class="skills-grid" id="skillsGrid">
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Frontend Development</strong
              ><span>HTML5, CSS3, React.js, Responsive UI</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Backend &amp; REST APIs</strong
              ><span>Node.js, Express.js, API Architecture</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Database Integration</strong
              ><span>PostgreSQL, Supabase / Firebase</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Payment Integration</strong
              ><span>Razorpay / Stripe / Payment Gateways</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Mobile Development</strong
              ><span>React Native, APK &amp; AAB Build</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Authentication &amp; Security</strong
              ><span>JWT, Session Auth, Secure Login</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Website &amp; App Deployment</strong
              ><span>Live on Internet, Custom Domain, Hosting</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>App Store Process</strong
              ><span>Play Store Setup, Listing &amp; Submission</span>
            </div>
          </div>
          <div class="sk-row">
            <div class="sk-dot"></div>
            <div class="sk-txt">
              <strong>Version Control</strong
              ><span>GitHub Workflow, Branching, Commits</span>
            </div>
          </div>
        </div>

        <div class="outcome">
          <div class="outcome-ico" id="outcomeIco">🏆</div>
          <div>
            <span class="outcome-head" id="outcomeHead">Project Outcome</span>
            <span class="outcome-txt" id="outcomeTxt"
              >Successfully built and deployed a production-ready full-stack
              application with a live website published on the internet, backend
              APIs, database, authentication, and payment gateway integration —
              and developed a React Native mobile app with complete Play Store
              setup and submission. All projects are real, functional, and
              portfolio-worthy.</span
            >
          </div>
        </div>

        <div class="div-full" style="margin: 0 0 2mm">
          <div class="dline"></div>
          <div class="gem-sm"></div>
          <div class="gem"></div>
          <div class="gem-sm"></div>
          <div class="dline"></div>
        </div>

        <div class="footer-row">
          <div class="seal-col">
            <div class="seal-outer">
              <!-- ✅ LOCAL FILE: seal.png -->
              <img src="/seal.png" class="seal-logo" alt="Seal" />
              <div class="seal-t1" id="sealT1">IT NANBARGAL</div>
              <div class="seal-t2" id="sealT2">OFFICIAL SEAL</div>
            </div>
          </div>
          <div class="sigs">
            <div class="sig-block">
              <img
                src="/signature_bold_gold.png"
                style="height: 45px; margin-bottom: 2mm; object-fit: contain"
              />
              <div class="sig-line"></div>
              <div class="sig-name" id="sig1Name">Sri Varsan S</div>
              <div class="sig-role" id="sig1Role">Founder &amp; Program Director</div>
            </div>
            <div class="sig-block">
              <div class="sig-script" id="sig2Script">IT Nanbargal</div>
              <div class="sig-line"></div>
              <div class="sig-name" id="sig2Name">IT Nanbargal</div>
              <div class="sig-role" id="sig2Role">Software Company · Tamil Nadu</div>
            </div>
          </div>
          <div class="meta-col">
            <div class="meta-grid">
              <div class="meta-item">
                <span class="meta-lbl" id="issueDateLbl">Date of Issue</span
                ><span class="meta-val" id="issueDate">07 April 2026</span>
              </div>
              <div class="meta-item">
                <span class="meta-lbl" id="credTypeLbl">Credential Type</span
                ><span class="meta-val" id="credType">Project Internship</span>
              </div>
              <div class="meta-item">
                <span class="meta-lbl" id="certIdLbl">Certificate ID</span
                ><span class="meta-val" id="certId2">ITN-2026-XXXX</span>
              </div>
            </div>
            <div class="qr-box">
              <div class="qr-c tl"></div>
              <div class="qr-c tr"></div>
              <div class="qr-c bl"></div>
              <div class="qr-c br"></div>
              <img
                id="qrImg"
                class="qr-img-el"
                src="seal.jpeg"
                alt="QR"
                style="display: none"
              />
              <div class="qr-ph" id="qrPh">
                <div class="qp d"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp d"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp d"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp d"></div>
                <div class="qp d"></div>
                <div class="qp e"></div>
                <div class="qp d"></div>
                <div class="qp d"></div>
              </div>
              <div class="qr-lbl" id="qrLbl">Scan · Verify</div>
            </div>
          </div>
        </div>
      </div>

      <div class="reg-strip" id="regStrip">
        <span class="reg-txt">GST · 33RDXPS2095Q1ZY</span>
        <div class="reg-sep"></div>
        <span class="reg-txt">UDYAM · TN-20-0215420</span>
        <div class="reg-sep"></div>
        <span class="reg-txt">itnanbargal.com</span>
        <div class="reg-sep"></div>
        <span class="reg-txt" id="verifyUrl"
          >Verify · itnanbargal.com/verify/ITN-2026-XXXX</span
        >
      </div>
    </div>
    <!-- html2canvas is only needed for PNG/JPG/SVG capture; \`defer\` keeps a
         slow/blocked CDN from ever stalling the certificate render below -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
      defer
    ><\/script>
    <script>
      /* ═══════════════════════════════════════════════════════════════
         DATA-DRIVEN RENDER ENGINE
         Every text and color on the certificate comes from a single
         "content" object. Sources (later wins):
           1. DEFAULT_CONTENT below
           2. ?d=<base64url JSON> query param (full content object)
           3. Legacy query params (name, id, issue_date, program, …)
           4. postMessage({ type: 'RENDER', content }) from parent app
         ═══════════════════════════════════════════════════════════════ */
      var DEFAULT_CONTENT = {
        certId: 'ITN-2026-XXXX',
        name: 'Student Name',
        companyName: 'IT NANBARGAL',
        companyTagline:
          'Software Company · Tamil Nadu · Est. 2024 · Not a Coaching Center',
        certNoLabel: 'Certificate No.',
        certifyPhrase: 'This is to proudly certify that',
        titleMain: 'CERTIFICATE OF INTERNSHIP',
        titleSub: 'COMPLETION',
        presentTo: 'is presented to',
        completedPrefix: 'has successfully completed the',
        completedBold: '4-Week Project-Based Internship Program',
        completedSuffix: 'in',
        programName: 'Full Stack Application Development & Production Deployment',
        conductedPrefix: 'Conducted by',
        conductedBy: 'IT Nanbargal',
        startDate: '10 March 2026',
        dateJoiner: 'to',
        endDate: '07 April 2026',
        locationLine: 'Tamil Nadu, India',
        projects: [
          { label: 'PROJECT 01', icon: '🌐', title: 'Live Website\\nPublished on Internet' },
          { label: 'PROJECT 02', icon: '⚙️', title: 'Full-Stack App\\nwith Payment Integration' },
          { label: 'PROJECT 03', icon: '📱', title: 'React Native Mobile App\\nBuilt & Store-Ready' }
        ],
        skillsHeading: 'Key Learnings & Technical Deliverables',
        skills: [
          { title: 'Frontend Development', desc: 'HTML5, CSS3, React.js, Responsive UI' },
          { title: 'Backend & REST APIs', desc: 'Node.js, Express.js, API Architecture' },
          { title: 'Database Integration', desc: 'PostgreSQL, Supabase / Firebase' },
          { title: 'Payment Integration', desc: 'Razorpay / Stripe / Payment Gateways' },
          { title: 'Mobile Development', desc: 'React Native, APK & AAB Build' },
          { title: 'Authentication & Security', desc: 'JWT, Session Auth, Secure Login' },
          { title: 'Website & App Deployment', desc: 'Live on Internet, Custom Domain, Hosting' },
          { title: 'App Store Process', desc: 'Play Store Setup, Listing & Submission' },
          { title: 'Version Control', desc: 'GitHub Workflow, Branching, Commits' }
        ],
        outcomeIcon: '🏆',
        outcomeHeading: 'Project Outcome',
        outcomeText:
          'Successfully built and deployed a production-ready full-stack application with a live website published on the internet, backend APIs, database, authentication, and payment gateway integration — and developed a React Native mobile app with complete Play Store setup and submission. All projects are real, functional, and portfolio-worthy.',
        sig1Name: 'Sri Varsan S',
        sig1Role: 'Founder & Program Director',
        sig2Script: 'IT Nanbargal',
        sig2Name: 'IT Nanbargal',
        sig2Role: 'Software Company · Tamil Nadu',
        issueDateLabel: 'Date of Issue',
        issueDate: '07 April 2026',
        credTypeLabel: 'Credential Type',
        credentialType: 'Project Internship',
        certIdLabel: 'Certificate ID',
        qrLabel: 'Scan · Verify',
        regItems: ['GST · 33RDXPS2095Q1ZY', 'UDYAM · TN-20-0215420', 'itnanbargal.com'],
        verifyBase: 'itnanbargal.com/verify/',
        verifyLabel: 'Verify',
        colors: {
          accent: '#c9a84c',
          background: '#060e24',
          glow: '#1a3a78',
          name: '#f5edd8',
          title: '#ffffff'
        }
      };

      /* ── color helpers ── */
      function hexToRgb(hex) {
        var m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
        if (!m) return null;
        var n = parseInt(m[1], 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      }
      function rgbToHex(r, g, b) {
        return (
          '#' +
          [r, g, b]
            .map(function (v) {
              v = Math.max(0, Math.min(255, Math.round(v)));
              return ('0' + v.toString(16)).slice(-2);
            })
            .join('')
        );
      }
      function shade(hex, f) {
        /* f > 0 lightens toward white, f < 0 darkens toward black */
        var c = hexToRgb(hex);
        if (!c) return hex;
        return rgbToHex(
          c[0] + (f > 0 ? (255 - c[0]) * f : c[0] * f),
          c[1] + (f > 0 ? (255 - c[1]) * f : c[1] * f),
          c[2] + (f > 0 ? (255 - c[2]) * f : c[2] * f)
        );
      }

      function esc(s) {
        var d = document.createElement('div');
        d.textContent = s == null ? '' : String(s);
        return d.innerHTML;
      }

      function setText(id, val) {
        var el = document.getElementById(id);
        if (el && val != null) el.textContent = val;
      }

      var CONTENT = JSON.parse(JSON.stringify(DEFAULT_CONTENT));

      function mergeContent(patch) {
        if (!patch || typeof patch !== 'object') return;
        Object.keys(patch).forEach(function (k) {
          if (patch[k] == null) return;
          if (k === 'colors' && typeof patch.colors === 'object') {
            Object.keys(patch.colors).forEach(function (ck) {
              if (patch.colors[ck]) CONTENT.colors[ck] = patch.colors[ck];
            });
          } else {
            CONTENT[k] = patch[k];
          }
        });
      }

      function applyColors(colors) {
        var r = document.documentElement.style;
        var accent = colors.accent || '#c9a84c';
        var aRgb = hexToRgb(accent) || [201, 168, 76];
        r.setProperty('--gM', accent);
        r.setProperty('--gB', shade(accent, 0.28));
        r.setProperty('--gD', shade(accent, -0.32));
        r.setProperty('--gRGB', aRgb.join(', '));
        var bRgb = hexToRgb(shade(accent, 0.28)) || [232, 201, 109];
        r.setProperty('--gBRGB', bRgb.join(', '));
        var nm = colors.name || '#f5edd8';
        r.setProperty('--iv', nm);
        r.setProperty('--id', shade(nm, -0.12));
        r.setProperty('--title', colors.title || '#ffffff');
        var bg = colors.background || '#060e24';
        r.setProperty('--bgDeep', bg);
        r.setProperty('--bgMid', shade(bg, 0.09));
        r.setProperty('--bgLow', shade(bg, 0.04));
        var glow = colors.glow || '#1a3a78';
        r.setProperty('--bgGlow1', glow);
        r.setProperty('--bgGlow2', shade(glow, -0.42));
        r.setProperty('--bgGlow3', shade(glow, -0.3));
      }

      function render(c) {
        var idShown = c.certId || 'ITN-2026-XXXX';
        setText('certId', idShown);
        setText('certId2', idShown);
        setText('studentName', c.name || 'Student Name');
        setText('companyName', c.companyName);
        setText('companyTagline', c.companyTagline);
        setText('certNoLbl', c.certNoLabel);
        setText('certifyPhrase', c.certifyPhrase);
        setText('certTitle', c.titleMain);
        setText('certSub', c.titleSub);
        setText('presentTo', c.presentTo);
        setText('completedPrefix', c.completedPrefix);
        setText('completedBold', c.completedBold);
        setText('completedSuffix', c.completedSuffix);
        setText('progName', c.programName);
        setText('conductedPrefix', c.conductedPrefix);
        setText('conductedBy', c.conductedBy);
        setText('startDate', c.startDate);
        setText('dateJoiner', c.dateJoiner);
        setText('endDate', c.endDate);
        setText('locationLine', c.locationLine);
        setText('skillsHead', c.skillsHeading);
        setText('outcomeIco', c.outcomeIcon);
        setText('outcomeHead', c.outcomeHeading);
        setText('outcomeTxt', c.outcomeText);
        setText('sig1Name', c.sig1Name);
        setText('sig1Role', c.sig1Role);
        setText('sig2Script', c.sig2Script);
        setText('sig2Name', c.sig2Name);
        setText('sig2Role', c.sig2Role);
        setText('issueDateLbl', c.issueDateLabel);
        setText('issueDate', c.issueDate);
        setText('credTypeLbl', c.credTypeLabel);
        setText('credType', c.credentialType);
        setText('certIdLbl', c.certIdLabel);
        setText('qrLbl', c.qrLabel);

        /* projects */
        var dv = document.getElementById('deliverables');
        if (dv && Array.isArray(c.projects)) {
          dv.innerHTML = c.projects
            .map(function (p) {
              return (
                '<div class="deliv"><span class="deliv-n">' +
                esc(p.label) +
                '</span><span class="deliv-ico">' +
                esc(p.icon) +
                '</span><span class="deliv-t">' +
                esc(p.title).replace(/\\n/g, '<br />') +
                '</span></div>'
              );
            })
            .join('');
          dv.style.display = c.projects.length ? 'flex' : 'none';
        }

        /* skills */
        var sg = document.getElementById('skillsGrid');
        if (sg && Array.isArray(c.skills)) {
          sg.innerHTML = c.skills
            .map(function (s) {
              return (
                '<div class="sk-row"><div class="sk-dot"></div><div class="sk-txt"><strong>' +
                esc(s.title) +
                '</strong><span>' +
                esc(s.desc) +
                '</span></div></div>'
              );
            })
            .join('');
          sg.style.display = c.skills.length ? 'grid' : 'none';
          var sh = document.getElementById('skillsHead');
          if (sh) sh.style.display = c.skills.length ? 'block' : 'none';
        }

        /* outcome visibility */
        var oc = document.querySelector('.outcome');
        if (oc) oc.style.display = c.outcomeText ? 'flex' : 'none';

        /* registration strip */
        var rs = document.getElementById('regStrip');
        if (rs) {
          var items = (c.regItems || []).slice();
          items.push(
            (c.verifyLabel || 'Verify') +
              ' · ' +
              (c.verifyBase || '') +
              (c.certId || 'ITN-2026-XXXX')
          );
          rs.innerHTML = items
            .map(function (t) {
              return '<span class="reg-txt">' + esc(t) + '</span>';
            })
            .join('<div class="reg-sep"></div>');
        }

        applyColors(c.colors || {});

        document.title = (c.companyName || 'Certificate') + ' – ' + (c.certId || '');
        window._certFilename = 'ITN-Certificate-' + (c.certId || 'certificate');

        /* QR — colored to match the theme */
        var qrImg = document.getElementById('qrImg');
        var qrPh = document.getElementById('qrPh');
        if (qrImg && c.certId && c.certId.indexOf('XXXX') === -1) {
          var vLink = 'https://' + (c.verifyBase || 'itnanbargal.com/verify/') + c.certId;
          var fg = ((c.colors && c.colors.accent) || '#c9a84c').replace('#', '');
          var bg = ((c.colors && c.colors.background) || '#060e24').replace('#', '');
          qrImg.onerror = function () {
            /* QR service unreachable — fall back to the decorative grid */
            qrImg.style.display = 'none';
            if (qrPh) qrPh.style.display = 'grid';
          };
          qrImg.src =
            'https://api.qrserver.com/v1/create-qr-code/?size=260x260&color=' +
            fg +
            '&bgcolor=' +
            bg +
            '&data=' +
            encodeURIComponent(vLink);
          qrImg.style.display = 'block';
          if (qrPh) qrPh.style.display = 'none';
        } else if (qrImg) {
          qrImg.style.display = 'none';
          if (qrPh) qrPh.style.display = 'grid';
        }
      }

      /* ── initial render from URL ── */
      (function () {
        var p = new URLSearchParams(window.location.search);

        /* full content via ?d= (base64url-encoded JSON) */
        var d = p.get('d');
        if (d) {
          try {
            var json = decodeURIComponent(
              escape(atob(d.replace(/-/g, '+').replace(/_/g, '/')))
            );
            mergeContent(JSON.parse(json));
          } catch (e) {
            console.error('Bad ?d= payload', e);
          }
        }

        /* legacy simple params still supported */
        var legacy = {
          name: p.get('name'),
          certId: p.get('id'),
          issueDate: p.get('issue_date'),
          programName: p.get('program'),
          startDate: p.get('start_date'),
          endDate: p.get('end_date')
        };
        Object.keys(legacy).forEach(function (k) {
          if (!legacy[k]) delete legacy[k];
        });
        mergeContent(legacy);

        render(CONTENT);

        /* tell the embedding app we are ready for live RENDER messages
           (more reliable than the iframe load event, which can be delayed
           by slow external resources) */
        if (window.parent && window.parent !== window) {
          try {
            window.parent.postMessage({ type: 'TEMPLATE_READY' }, '*');
          } catch (err) {}
        }
      })();

      /* ── live re-render from parent app ── */
      window.addEventListener('message', function (e) {
        if (!e.data || e.data.type !== 'RENDER') return;
        if (e.data.reset) CONTENT = JSON.parse(JSON.stringify(DEFAULT_CONTENT));
        mergeContent(e.data.content);
        render(CONTENT);
        if (e.source && e.source.postMessage)
          e.source.postMessage({ type: 'RENDER_DONE' }, '*');
      });
    <\/script>
    <script>
      // Convert an img element's src to a base64 data URL using a canvas
      function imgToDataURL(img) {
        return new Promise(function (resolve) {
          if (!img.src || img.src.startsWith('data:')) {
            resolve(null);
            return;
          }
          var tempImg = new Image();
          tempImg.crossOrigin = 'anonymous';
          tempImg.onload = function () {
            try {
              var c = document.createElement('canvas');
              c.width = tempImg.naturalWidth;
              c.height = tempImg.naturalHeight;
              c.getContext('2d').drawImage(tempImg, 0, 0);
              resolve(c.toDataURL());
            } catch (e) {
              resolve(null);
            }
          };
          tempImg.onerror = function () {
            resolve(null);
          };
          // Add cache-bust to bypass opaque response cache
          tempImg.src =
            img.src +
            (img.src.indexOf('?') === -1 ? '?' : '&') +
            '_cb=' +
            Date.now();
        });
      }

      // Replace all img srcs with base64 so html2canvas never hits CORS/taint
      function inlineAllImages(el) {
        var imgs = el.querySelectorAll('img');
        var promises = [];
        imgs.forEach(function (img) {
          promises.push(
            imgToDataURL(img).then(function (dataUrl) {
              if (dataUrl) img.src = dataUrl;
            })
          );
        });
        return Promise.all(promises);
      }

      /* html2canvas 1.4.1 crashes with "createPattern ... width or height
         of 0" when any raster source (blocked image, tiny gradient layer)
         ends up zero-sized. Substitute a 1×1 transparent canvas — a
         zero-size pattern would have painted nothing anyway. */
      (function () {
        var orig = CanvasRenderingContext2D.prototype.createPattern;
        CanvasRenderingContext2D.prototype.createPattern = function (img, rep) {
          try {
            var w = img && (img.width || img.naturalWidth || img.videoWidth);
            var h = img && (img.height || img.naturalHeight || img.videoHeight);
            if (!w || !h) {
              var c = document.createElement('canvas');
              c.width = 1;
              c.height = 1;
              return orig.call(this, c, rep);
            }
          } catch (err) {}
          return orig.call(this, img, rep);
        };
      })();

      window.addEventListener('message', function (e) {
        if (!e.data || e.data.type !== 'CAPTURE') return;
        var format = e.data.format || 'png';
        var certEl = document.querySelector('.cert');
        if (!certEl) {
          e.source.postMessage(
            { type: 'CAPTURE_ERROR', error: 'No cert element' },
            '*'
          );
          return;
        }
        if (typeof html2canvas === 'undefined') {
          e.source.postMessage(
            {
              type: 'CAPTURE_ERROR',
              error:
                'Capture library not loaded (offline?). Check your internet connection and try again.',
            },
            '*'
          );
          return;
        }

        // Step 1: inline all images as base64
        var hiddenImgs = [];
        inlineAllImages(certEl)
          .then(function () {
            // Step 1b: hide any image that failed to load (e.g. the QR code
            // when the QR service is blocked by an ad-blocker) — html2canvas
            // crashes on zero-size images otherwise.
            certEl.querySelectorAll('img').forEach(function (img) {
              if (
                img.style.display !== 'none' &&
                (!img.complete || img.naturalWidth === 0)
              ) {
                hiddenImgs.push([img, img.style.display]);
                img.style.display = 'none';
              }
            });
            // Step 2: capture with html2canvas
            return html2canvas(certEl, {
              scale: 3,
              useCORS: false,
              allowTaint: false,
              backgroundColor:
                (CONTENT.colors && CONTENT.colors.background) || '#060e24',
              width: certEl.offsetWidth,
              height: certEl.offsetHeight,
              logging: false,
              imageTimeout: 0,
            });
          })
          .then(function (canvas) {
            // restore images hidden for the capture
            hiddenImgs.forEach(function (pair) {
              pair[0].style.display = pair[1];
            });
            hiddenImgs = [];
            var ext =
              format === 'jpg'
                ? 'jpg'
                : format === 'svg'
                  ? 'svg'
                  : format === 'pdf'
                    ? 'pdf'
                    : 'png';
            var fname = (window._certFilename || 'certificate') + '.' + ext;

            /* Step 3: hand the file to the PARENT page as a Blob.
               Browsers block downloads started inside an iframe without a
               user gesture — the user's click happened in the parent, so
               the parent must trigger the download. Standalone use (no
               parent) still downloads directly. */
            function deliver(blob) {
              if (!blob) {
                fail('Could not create image');
                return;
              }
              if (e.source && e.source !== window) {
                e.source.postMessage(
                  {
                    type: 'CAPTURE_DONE',
                    format: format,
                    filename: fname,
                    blob: blob,
                    width: canvas.width,
                    height: canvas.height,
                  },
                  '*'
                );
              } else {
                var url = URL.createObjectURL(blob);
                var link = document.createElement('a');
                link.href = url;
                link.download = fname;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setTimeout(function () {
                  URL.revokeObjectURL(url);
                }, 4000);
              }
            }
            function fail(msg) {
              if (e.source)
                e.source.postMessage({ type: 'CAPTURE_ERROR', error: msg }, '*');
            }

            if (format === 'jpg' || format === 'pdf') {
              /* PDF uses the same flattened JPEG capture; the parent app
                 wraps it into a real A4 PDF (jsPDF), so the download looks
                 exactly like the PNG/JPG — no print-dialog settings needed. */
              var jpgCanvas = document.createElement('canvas');
              jpgCanvas.width = canvas.width;
              jpgCanvas.height = canvas.height;
              var ctx = jpgCanvas.getContext('2d');
              ctx.fillStyle =
                (CONTENT.colors && CONTENT.colors.background) || '#060e24';
              ctx.fillRect(0, 0, jpgCanvas.width, jpgCanvas.height);
              ctx.drawImage(canvas, 0, 0);
              jpgCanvas.toBlob(deliver, 'image/jpeg', 0.95);
            } else if (format === 'svg') {
              var w = canvas.width;
              var h = canvas.height;
              var pngData = canvas.toDataURL('image/png');
              var svgStr =
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' +
                w +
                '" height="' +
                h +
                '"><image width="' +
                w +
                '" height="' +
                h +
                '" xlink:href="' +
                pngData +
                '"/></svg>';
              deliver(new Blob([svgStr], { type: 'image/svg+xml' }));
            } else {
              canvas.toBlob(deliver, 'image/png');
            }
          })
          .catch(function (err) {
            hiddenImgs.forEach(function (pair) {
              pair[0].style.display = pair[1];
            });
            hiddenImgs = [];
            console.error('Capture error:', err);
            e.source.postMessage(
              { type: 'CAPTURE_ERROR', error: err.message || String(err) },
              '*'
            );
          });
      });
    <\/script>
  </body>
</html>
`,p=794,v=1123;function C({iframeRef:n,onLoad:e,title:t="Certificate",maxWidth:i=900}){const a=d.useRef(null),[s,r]=d.useState(1);return d.useEffect(()=>{const l=a.current;if(!l)return;const o=()=>{const g=l.clientWidth;g>0&&r(g/p)};o();const m=new ResizeObserver(o);return m.observe(l),window.addEventListener("resize",o),()=>{m.disconnect(),window.removeEventListener("resize",o)}},[]),c.jsx("div",{ref:a,style:{width:"100%",maxWidth:i,margin:"0 auto"},children:c.jsx("div",{style:{width:"100%",height:Math.round(v*s),overflow:"hidden",borderRadius:4},children:c.jsx("iframe",{ref:n,srcDoc:T,title:t,onLoad:e,style:{width:p,height:v,border:"none",display:"block",transform:`scale(${s})`,transformOrigin:"top left",background:"#060e24"}})})})}export{C,b as D,P as c,I as d,f as n,N as r};

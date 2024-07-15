/*! For license information please see 4b243dd3.fd4ccf94.js.LICENSE.txt */
"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[1608],{71496:(e,t,o)=>{var n=o(64836);t.Z=void 0;var r=n(o(64938)),i=o(85893),a=(0,r.default)((0,i.jsx)("path",{d:"M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"}),"KeyboardArrowDownRounded");t.Z=a},84938:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(67294),r=o(71496),i=o(86010);const a=e=>{let{policiesData:t,index:o,setIndex:a}=e;const l=(0,n.useRef)(null),[c,p]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=e=>{c&&!l.current?.contains(e.target)&&p(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[c]),n.createElement("div",{className:(0,i.Z)("max-w-[300px]",c&&"border border-black")},n.createElement("div",{ref:l,onClick:()=>p(!c),className:(0,i.Z)("w-[300px]  bg-[#EEF7FF]"," hover:cursor-pointer",c?"":"hover:border hover:border-black ")},n.createElement("div",{className:"flex justify-between items-center py-[6.5px] pl-[10px] text-black "},n.createElement("span",{className:"text-[16px] leading-[20px] font-normal"},s(t[o].date)," ",0===o&&"(Latest Update)"),n.createElement(r.Z,{className:(0,i.Z)("scale-[1.2] mr-[11.3px]",c&&"rotate-180")})),n.createElement("div",{className:(0,i.Z)("w-[300px] absolute bg-[#EEF7FF]",!c&&"hidden")},t.map(((e,t)=>n.createElement("div",{onClick:()=>{a(t)},className:"pl-[10px] py-[6.5px] text-black font-normal hover:font-semibold hover:bg-[#CBE8FF]"},n.createElement("span",{className:"text-[16px] leading-[20px]"},s(e.date)," ",0===t&&"(Latest Update)")))))))},s=e=>{const t=new Date(e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`};const l=(0,o(64529).Ue)((e=>({language:"english",setLanguage:t=>e({language:t})}))),c=e=>{let{title:t,policiesData:o,index:r,setIndex:i}=e;const s=(0,n.useRef)([]),{language:c}=l();return n.createElement("div",{className:"flex flex-col max-w-[1180px] w-full"},n.createElement("div",{className:"flex justify-start items-start md:items-end flex-col md:flex-row"},n.createElement("div",{className:"text-black text-[40px] font-bold leading-[48px] mr-[16px]"},t),n.createElement("div",{className:"text-[16px] leading-[19px] text-[#878D96] font-normal mb-[3px] mt-[10px] md:mt-0"},"Last modified: ",p(o[0].date))),n.createElement("div",{className:"mt-[30px] bg-[#EEF7FF] rounded-[10px] px-[40px] py-[30px] mb-[40px]"},n.createElement("div",{className:"font-semibold text-[24px] leading-[29px] text-black mb-[6px]"},"Index"),o[r].article.filter((e=>e.index)).map((e=>n.createElement("div",{className:"text-[18px] text-[#004FFF] leading-[26px] font-normal mt-[12px] "},n.createElement("span",{onClick:()=>{return t=e.index,o=s.current[t]?.getBoundingClientRect().top,n=(o||0)+window.pageYOffset-80,void window.scrollTo({top:n,behavior:"smooth"});var t,o,n},className:"hover:underline hover:cursor-pointer"},`${e[c].title}`))))),o[r].article.map((e=>n.createElement("div",{className:e[c].noborder?"mb-[15px]":"mb-[39px]",ref:t=>{e.index&&(s.current[e.index]=t)}},e[c].title&&n.createElement("div",{className:"mb-[18px] font-bold text-[26px] leading-[31px]"},e[c].title),e[c].content&&e[c].contentInnerhtml?n.createElement("div",{className:"font-normal text-[18px] leading-[26px] text-[#4D5358] whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:e[c].content}}):n.createElement("div",{className:"font-normal text-[18px] leading-[26px] text-[#4D5358] whitespace-pre-wrap"},e[c].content),e[c].table&&n.createElement(d,{tabledata:e[c].table}),!e[c].noborder&&n.createElement("div",{className:"mt-[40px] border bordre-[1px] border-t-0 border-black"})))),n.createElement("div",null,n.createElement("div",{className:"mb-[18px] font-bold text-[26px] leading-[31px]"},"Past Policy"),n.createElement(a,{policiesData:o,index:r,setIndex:i})))},p=e=>{const t=new Date(e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},d=e=>{let{tabledata:t}=e;return t?n.createElement("div",{className:"border border-[#878D96] border-solid  w-full overflow-auto "},n.createElement("div",{className:"bg-[#F2F4F8] flex px-[20px] min-w-[1080px] py-[12px]"},t[0].map((e=>n.createElement("div",{style:e.style},e.content)))),t.filter(((e,t)=>t>0)).map((e=>n.createElement("div",{className:"bg-white flex items-center min-w-[1080px] relative"},e.map((e=>n.createElement("div",{style:e.style},e.content))))))):n.createElement(n.Fragment,null)}},6698:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(67294);const r=()=>n.createElement("header",{className:"z-10 fixed top-0 left-0 right-0 w-full bg-black h-[80px] flex justify-center items-center"},n.createElement("div",{className:"relative max-w-[1920px] w-full pl-[40px] pr-[35px] flex justify-start items-center"},n.createElement("div",{className:"flex justify-center items-center"},n.createElement("img",{src:"/img/xplalogo.svg",className:"mr-[30px]",alt:"xpla-logo",width:"114px",height:"20px"}),n.createElement("span",{className:"text-white leading-[35.8px] text-[30px] font-medium"},"Policies"))))},14904:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(86010),r=o(67294),i=o(16550),a=o(73727);const s=()=>{const e=(0,i.TH)(),{pathname:t}=e;return r.createElement("div",{className:"md:mt-0 flex "},r.createElement(a.rU,{className:(0,n.Z)("text-[16px] font-medium leading-[19px] mr-[12px]","/privacy-policy"===t?"text-[#00B1FF]":"text-[#878D96]"),to:"/privacy-policy"},"Privacy Policy"),r.createElement("div",{className:"border-r-[0.7px]  border-[#878D96] mr-[12px]"}),r.createElement(a.rU,{className:(0,n.Z)("text-[16px] font-medium leading-[19px] ","/cookie-policy"===t?"text-[#00B1FF]":"text-[#878D96]"),to:"/cookie-policy"},"Cookie Policy"))}},91282:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(86010),r=o(67294);const i=()=>r.createElement("div",{className:(0,n.Z)("sticky bottom-[74px] mb-[74px]")},r.createElement("div",{className:(0,n.Z)("absolute","bottom-[0px]","hover:cursor-pointer","right-[calc(50%-960px+35px)]","max-[1920px]:right-[35px]","drop-shadow-[8px_16px_20px_rgba(0,0,0,0.15)]",""),onClick:()=>{window.scrollTo(0,0)}},r.createElement("div",{className:"rounded-full bg-[#00B1FF] px-[20px] py-[28px]"},r.createElement("span",{className:"font-bold text-[20px] leading-[24px] text-white"},"TOP"))))},56468:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var n=o(51336),r=o(67294),i=o(6698),a=o(14904),s=o(84938);const l=JSON.parse('[{"date":"2024-07-15","article":[{"index":1,"english":{"title":"1. Introduction and Overview","content":"Metamagnet and its subsidiaries and affiliates (\u201cXPLA\u201d, \u201cwe\u201d, \u201cour\u201d, and/or \u201cus\u201d), value the privacy of individuals who use XPLA ACADEMY (academy.xpla.dev) (the \u201cWebsite\u201d and/or \u201cSite\u201d) and its related software, products and services (collectively, the \u201cServices\u201d). This Privacy Policy (\u201cPrivacy Policy\u201d) describes how XPLA collects, uses, shares, and discloses information about users and their rights and choices regarding such information. If you have any questions or wish to exercise your rights and options, please contact us in the \u201cContact Us\u201d section."}},{"index":2,"english":{"noborder":true,"title":"2. Personal Data We Collect","content":"XPLA collects certain Personal Information from you when you use the Service. This information is collected and may be stored electronically by us. This information may be provided to us voluntarily by you, collected automatically by us from you, or provided to us from third-party sources.\\n\\n2.1. Collected Personal Data\\n\\nWe may collect the following types of Personal Data from you directly in our Services. We may collect Personal Data from points of service that you voluntarily provide or where Personal Data is being collected as follows:"}},{"english":{"noborder":true,"table":[[{"content":"Service","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":700,"lineHeight":"19px"}},{"content":"Purpose","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":700,"lineHeight":"19px"}},{"content":"Items","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":700,"paddingLeft":"20px","marginLeft":"20px","lineHeight":"19px"}}],[{"content":"","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px 12px 20px"}},{"content":"For using ACADEMY service and the demo projects provided for educational purposes","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","marginLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"ID, password, testnet wallet address, gameplay information (including the demo games)","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","paddingLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}}],[{"content":"XPLA ACADEMY","style":{"position":"absolute","top":"0px","width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"0px 0px 12px 20px"}},{"content":"","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"0px 0px 12px 20px"}},{"content":"For customer support and to provide and improve services","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"30px 0px 30px 0px","marginLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"Email address, project details, GitHub repository link, inquiry details (any information you provide to us when requesting customer support)","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","paddingLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}}]]}},{"english":{"content":"2.2. Usage Data Through Automated Means (Including Cookies)\\n\\nTo enable our systems to recognize your browser or device and to provide and improve XPLA Services, we use cookies and other identifiers. For more information about cookies and how we use them, please read our [Cookie Policy]."}},{"index":3,"english":{"title":"3. What We Do With Personal Data We Collect","content":"We collect and use information for business purposes in accordance with the practices described in this Privacy Policy. Our business purposes for collecting and using information include.\\n\u25cf Provide our XPLA games/blockchain related Services and identify you as a user.\\n\u25cf Carry out marketing tasks such as promoting events such as newsletter subscription.\\n\u25cf Provide customer support and respond to your requests and inquiries.\\n\u25cf To operate, maintain, improve, personalize and analyze the Services.\\n\u25cf We process Personal Data in compliance with applicable law and regulations."}},{"index":4,"english":{"noborder":true,"title":"4. Sharing of Your Information","content":"We do not share your Personal Data with third parties unless clearly authorized by you or in the following circumstances. However, within the scope necessary to achieve the purpose of use, the handling of Personal Data may be entrusted to our affiliates or third parties as further detailed below. We manage/supervise so that the information can be safely handled when entrusting Personal Data.\\n\\n4.1 Third Party Service Providers:\\n\\nWe may provide your information to third party companies (the \u201cThird Party Service Providers\u201d) that perform services on our behalf, including, without limitation, operation of the services, data analysis, marketing services, promotional events, email campaigns, hosting services, and customer service or support. The Third Party Service Providers may access your Personal Data, but use it solely as directed by us for performing requested services."}},{"english":{"noborder":true,"table":[[{"content":"Service","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":700,"lineHeight":"19px"}},{"content":"Third Party Service Providers & Subcontractor","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":700,"lineHeight":"19px"}},{"content":"Purpose","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":700,"paddingLeft":"20px","marginLeft":"20px","lineHeight":"19px"}},{"content":"Retention and Usage Period","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":700,"paddingLeft":"20px","marginLeft":"20px","lineHeight":"19px"}}],[{"content":"","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px 12px 20px"}},{"content":"Com2uS Holdings Corporation","style":{"display":"flex","flex":1,"width":"280px","color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"30px 0px 30px 0px","marginLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"Product management, development, and operation","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"20px 0px 20px 0px","paddingLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","paddingLeft":"20px"}}],[{"content":"XPLA ACADEMY","style":{"position":"absolute","top":"0px","width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"0px 0px 12px 20px"}},{"content":"","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"0px 0px 12px 20px"}},{"content":"ZENAAD Co., Ltd","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"39.5px 0px 39.5px 0px","marginLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"To manage/operate technical infrastructure","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"30px 0px 30px 0px","paddingLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"Until the end of the contract","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"0px 0px 79px 0px","paddingLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}}]]}},{"english":{"content":"For third-party service providers that use cookies, please read our Cookie Policy.\\n\\n4.2 Business Partners: In relation to the development and operation of the Services, we have partnerships with our affiliates.\\n\\n4.3 We provide your information when the provision of data is mandatory by law or when there is a request from a court, investigative agency, or other administrative agency according to a legal procedure.\\n\\n4.4 If the information is processed into a form that cannot identify a specific individual, it may be provided to a third party."}},{"index":5,"english":{"noborder":true,"title":"5. Retaining and Deleting Personal Data","content":"We will only retain your information for as long as is necessary for you to continue to use the Services or to achieve the purposes described in this Privacy Policy. In some cases, you have the right to ask us to delete your information. We may retain some data after your request for termination, as described below, in order to comply with our legal obligations, to resolve disputes, to prevent fraud and abuse, and enforce our Terms of Service or other agreements. If any other purpose has been achieved, the data will be destroyed."}},{"english":{"noborder":true,"table":[[{"content":"Service","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":700,"lineHeight":"19px"}},{"content":"Purpose","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":700,"lineHeight":"19px"}},{"content":"Retention and Usage Period","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":700,"paddingLeft":"20px","marginLeft":"20px","lineHeight":"19px"}}],[{"content":"","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px 12px 20px"}},{"content":"For using academy service","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","marginLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"Until processing of the withdrawal request is complete","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","paddingLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}}],[{"content":"XPLA ACADEMY","style":{"position":"absolute","top":"-5px","width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"0px 0px 0px 20px"}},{"content":"","style":{"width":280,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"0px 0px 12px 20px"}},{"content":"Customer Support","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","marginLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}},{"content":"3 years","style":{"display":"flex","flex":1,"color":"#343A3F","fontSize":"16px","fontWeight":400,"lineHeight":"19px","padding":"12px 0px","paddingLeft":"20px","borderBottom":"0.7px solid #DDE1E6"}}]]}},{"english":{"content":"In addition to the retention periods for each service-specific collected item, we may retain the following information for the specified periods to comply with legal requirements.\\n- Records of customer complaints or dispute resolution: 3 years.\\n- Computer communication or internet log-in records of computer communication or facts about an internet user\u2019s utilization of telecommunication service: 3 months."}},{"index":6,"english":{"title":"6. Transfer of Personal Data to Third Countries","contentInnerhtml":true,"content":"We store all information in relation to the Services, within the Republic of Korea.\\n\\nPlease check the Personal Information Protection Act of the Republic of Korea <a target=\'_blank\' rel=\'noopener noreferrer\' href=\'https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%B2%95\'>here</a>.\\n\\nHowever, we may transfer your Personal Data to countries or regions where there may not be equivalent data protection standards, if a transfer is necessary to fulfill our obligations to you under our Terms of Service. In all cases, appropriate security measures to protect Personal Data are applied in the country or region in question. However, appropriate security measures to protect Personal Data may vary from the data protection laws of your country of residence. For information about appropriate security measures to protect Personal Data, please read the \u201c7. Security of Your Information\u201d section.\\n\\nFor information about the company\'s Information Protection, see the \u201c7. Security of Your Information\u201d section.\\n\\nBy visiting the Service, providing data to us and agreeing to our Privacy Policy, you acknowledge and agree that your Personal Data may be processed for the purposes set out in our Privacy Policy. Transfer to third parties done under your consent can be withdrawn at any time. However, please understand that in this case, you may not be able to use the Service if your Personal Data cannot be transferred to third countries. We also strive to ensure that appropriate safeguards are implemented, including through standard contractual clauses, when transferring Personal Data to third countries."}},{"index":7,"english":{"title":"7. Security of Your Information","content":"We take appropriate safeguards in accordance with our security policies and applicable law to protect the data you share and the data we collect and store from unauthorized access or unauthorized alteration, disclosure, or destruction. We cannot guarantee that unauthorized access, hacking, data loss or other violations will not occur. We recommend that you do not share your account password with third parties for any reason. Also, email and messaging systems are not considered secure, thus strongly suggest you not to send your Personal Data through these mediums."}},{"index":8,"english":{"title":"8. Our Policy Concerning Children","contentInnerhtml":true,"content":"Our all services are not directed towards, nor designed to attract the attention of, children. We do not knowingly collect or maintain personal information from any person under the age of sixteen.\\n\\nIf you are a parent or guardian and you believe we have collected information from your child, please contact us via email (contact@metamagnet.org)."}},{"index":9,"english":{"title":"9. Your Privacy Rights","contentInnerhtml":true,"content":"<b>9.1 Right of Access </b>\\nYou have the right to verify whether we process your Personal Data and, if so, access to your Personal Data together with certain additional information. Such additional information includes the purposes of processing, the categories of Personal Data concerned and the recipients of the Personal Data. We will provide you with a copy of your Personal Data without affecting the rights and freedoms of others. You may access your Personal Data by contacting us at contact@metamagnet.org.\\n\\n<b>9.2 Right to Rectification</b>\\nYou are entitled to have any inaccurate Personal Data about you rectified and, taking into account the purposes of the processing, to have any incomplete Personal Data about you completed. You may change your Personal Data by contacting us at contact@metamagnet.org.\\n\\n<b>9.3 Right to Erasure</b>\\nIn some circumstances you are entitled to the erasure of your Personal Data without undue delay. Those circumstances include:\\n- The Personal Data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;\\n- You withdraw consent to consent-based processing;\\n- You object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes; and\\n- The Personal Data has been unlawfully processed. However, there are exclusions of the right to erasure. The general exclusions include where processing is necessary:\\n- For exercising the right of freedom of expression and information;\\n- For compliance with a legal obligation; or\\n- For the establishment, exercise or defense of legal claims.\\n- If you choose to delete your Personal Data, we will immediately delete your Personal Data. Even after your Personal Data is terminated or deleted, some or all of your information may still remain visible to others, including but not limited to any information that has been incorporated into any User contents or copied, stored or disseminated by you or other users.\\n\\nYou may request erasure of your information by contacting us at contact@metamagnet.org.\\n\\n<b>9.4 Right to Restrict Processing</b>\\nIn some circumstances, you are entitled to restrict the processing of your Personal Data. Those circumstances are:\\n- You contest the accuracy of the Personal Data;\\n- Processing is unlawful, but you oppose erasure;\\n- We no longer need the Personal Data for the purposes of our processing, but you require the Personal Data for the establishment, exercise, or defense of legal claims; and\\n- You have objected to processing, pending the verification of that objection.\\nWhere processing has been restricted on this basis, we may continue to store your Personal Data. However, we will only otherwise process it:\\n- With your consent;\\n- For the establishment, exercise, or defense of legal claims;\\n- For the protection of the rights of another natural or legal person;\\n- For reasons of important public interest. \\nYou may request restriction of the processing of your information by contacting us at contact@metamagnet.org.\\n\\n\\n<b>9.5 Right to Object</b>\\nYou have the right to object to our processing of your Personal Data on grounds relating to your particular situation, but only to the extent that the legal basis for the processing is that the processing is necessary for: \\ni) The performance of a task carried out in the public interest or in the exercise of any official authority vested in us; or\\nii) The purposes of the legitimate interests pursued by us or by a third party.\\nIf you make such an objection, we will cease to process the Personal Data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights, and freedoms, or the processing is for the establishment, exercise, or defense of legal claims. \\n\\nYou may request restriction of the processing of your information by contacting us at contact@metamagnet.org.\\n\\n<b>9.6 Right to Object to Processing for Direct Marketing Purposes</b>\\nYou have the right to object to our processing of your Personal Data for direct marketing purposes (including profiling for direct marketing purposes). If you raise such an objection, we will stop processing your Personal Data for this purpose. You may object to the processing of your information for direct marketing purposes by contacting us at contact@metamagnet.org.\\n\\n<b>9.7 Right to Object to Processing for Scientific, Historical, or Statistical Purposes</b>\\nYou have the right to object to the processing of your Personal Data for scientific or historical research purposes or for statistical purposes on grounds relevant to your particular situation. You may object to the processing of your information for scientific, historical or statistical purposes by contacting us at contact@metamagnet.org.\\n\\n<b>9.8 Right to Data Portability</b>\\nTo the extent that the legal basis for our processing of your Personal Data is:\\n - Consent; or\\n - That the processing is necessary for the performance of a contract to which you are party or in order to take steps at your request prior to entering into a contract,\\nand such processing is carried out by automated means, you have the right to receive your Personal Data from us in a structured, commonly used and machine-readable format and the right to have your Personal Data transmitted to another controller. However, this right does not apply where it would adversely affect the rights and freedoms of others. You may request to receive your information by contacting us at contact@metamagnet.org.\\n\\n<b>9.9 Right to Withdraw Consent</b>\\nIf the legal basis for the processing of your Personal Data is consent, you have the right to withdraw that consent at any time. Withdrawal does not affect the legality of processing prior to withdrawal. You may exercise your rights in relation to your Personal Data by giving written notice to contact@metamagnet.org.\\n\\n<b>9.10 Additional Rights</b>\\n- European residents have the following rights under the GDPR with respect to their Personal Data including the above rights.\\nIf you believe that our processing of Personal Data infringes data protection law, you may file a complaint with the supervisory authority responsible for data protection.\\nYou can find out more about your country\'s oversight bodies by visiting:\\n <a target=\'_blank\' rel=\'noopener noreferrer\' href=\'http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080\'>http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080</a>\\n\\n- California residents have certain rights under the California Consumer Privacy Act (CCPA) & California Privacy Rights Act Disclosures\\n(CPRA) with respect to their Personal Data in addition to the above rights.\\nThis section applies solely to the personal information collected from consumers or users who reside in the State of California (\u201cusers\u201d or \u201cyou\u201d). \\nThe right to request disclosure of Personal Data regarding categories of personal information, categories of sources of collection, purposes, categories of third parties with whom we share the information, and specific personal information we collect about you (Cal. Civ. Code \xa71799.100, \xa71799.130)\\n\\n(a) In the 12 months preceding the date of this Disclosure, we may have collected and disclosed for a business purpose the categories of personal information and shared personal information with the categories of third parties. \\nPlease refer to our \u201cPersonal Data We Collect\u201d and \u201cSharing of Your Information\u201d concerning the categories of personal information(including the categories of sources from which the personal information is collected) and shared personal information with the categories of third parties. \\nAlso, we disclose the purpose for such collecting. Please refer to our \u201cWhat We Do With Personal Data We Collect.\u201d\\n\\n(b) No Sale of Personal Information.\\nWe do not sell or share any personal information to third parties for a business or commercial purpose. For the purposes of this Disclosure, \u201csale of personal information\u201d means the disclosure of personal information for monetary or other valuable consideration.\\n(c) Privacy Rights of California Residents.\\nYou have the following rights under the CCPA & CPRA.\\n\\n\u302e Right to Request Disclosure of Your Personal Information (Cal. Civ. Code \xa71798.100, \xa71798.130)\\nYou have the right to request that we disclosed to you any of the following:\\n- Whether we collect and use your personal information;\\n- The categories of personal information we have collected about you;\\n- The business or commercial purpose for collecting personal information;\\n- Whether we sell or share your personal information to third parties; \\n- The categories of personal information we have disclosed about you for a business purpose;\\n- The categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose; \\n- The business or commercial purpose for collecting, sharing, or selling personal information; and \\n- The specific pieces of personal information we collected about you. \\nIn accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request. \\n\\n\u302e Right to Request Deletion (Cal. Civ. Code \xa71798.105)\\nYou have the right to request that we delete your personal information we have collected from you. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.\\n\\n\u302e Right to Nondiscrimination (Cal. Civ. Code \xa71798.125)\\nWe will not discriminate against you if you exercise your privacy rights\\nIf you want to exercise any of your rights, please feel free to contact us by sending an email to contact@metamagnet.org.\\nUpon request, please provide sufficient information to reasonably determine that you are the person or authorized representative from whom we collected personal information. If we cannot verify your identity, your request may be denied.\\nState in your request the rights you wish to exercise and the scope of your request.\\nWe will consider and act on all of the above requests in accordance with applicable law. We also do not discriminate against you for exercising these rights.\\n"}},{"index":10,"english":{"title":"10. Change/Update to Privacy Policy","content":"We may amend, at our discretion, any portion of this Privacy Policy at any time by posting or displaying the amended Privacy Policy within/on XPLA website. You will be deemed to have accepted such amendments by continuing to use the Service. Except as otherwise stated, any such amendments will be automatically effective after they are initially posted. Our policy will be regularly updated. We will notify you of the changes where required by law to do so. This policy was last updated on July 25, 2024"}},{"index":11,"english":{"title":"11. Link","content":"The Services may contain links to other websites. The fact that the Service links to a website or provides banner advertisements or other types of advertisements does not imply endorsement or endorsement by us of such third parties, nor does it indicate our affiliation with such third parties. We are not responsible for the Privacy Policies of other websites that you choose to access on the Services. It is your responsibility to read the Privacy Policies of these other websites when you exit the Service."}},{"index":12,"english":{"title":"12. Data Protection Officer and Representative","content":"Our data protection officer can be reached at:\\n\\t- Name : Paul Kim\\n\\t- Email : contact@metamagnet.org\\n\\nOur representative can be reached at:\\n\\t- Name : VeraSafe Czech Republic s.r.o.\\n\\t- Email : article27@VeraSafe.com \\n\\t- Address : Klimentsk\xe1 46 Prague 1, 11002 Czech Republic"}},{"english":{"contentInnerhtml":true,"content":"<b>Questions</b>\\nIf you have any questions regarding our Privacy Policy and/or practices, please email us at contact@metamagnet.org."}}]}]');var c=o(91282);function p(){const[e,t]=(0,r.useState)(0);return r.createElement(n.Z,{title:"XPLA ACADEMY",description:"Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."},r.createElement(i.Z,null),r.createElement("div",{className:"w-full flex justify-center items-start"},r.createElement("div",{className:"w-full max-w-[1920px] pl-[40px] pt-[30px] pb-[200px] pr-[35px] flex flex-col justify-start items-center"},r.createElement("div",{className:"mb-[30px] w-full max-w-[1180px] flex justify-start items-start relative"},r.createElement(a.Z,null)),r.createElement(s.Z,{title:"Privacy Policy",policiesData:l,index:e,setIndex:t}))),r.createElement(c.Z,null))}},50139:(e,t,o)=>{var n=o(67294),r=o(61688);var i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,p=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,o,n,r){var d=s(null);if(null===d.current){var u={hasValue:!1,value:null};d.current=u}else u=d.current;d=c((function(){function e(e){if(!l){if(l=!0,a=e,e=n(e),void 0!==r&&u.hasValue){var t=u.value;if(r(t,e))return s=t}return s=e}if(t=s,i(a,e))return t;var o=n(e);return void 0!==r&&r(t,o)?t:(a=e,s=o)}var a,s,l=!1,c=void 0===o?null:o;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,o,n,r]);var h=a(e,d[0],d[1]);return l((function(){u.hasValue=!0,u.value=h}),[h]),p(h),h}},52798:(e,t,o)=>{e.exports=o(50139)},64529:(e,t,o)=>{o.d(t,{Ue:()=>u});var n=o(25108);const r=e=>{let t;const o=new Set,r=(e,n)=>{const r="function"==typeof e?e(t):e;if(!Object.is(r,t)){const e=t;t=(null!=n?n:"object"!=typeof r)?r:Object.assign({},t,r),o.forEach((o=>o(t,e)))}},i=()=>t,a={setState:r,getState:i,subscribe:e=>(o.add(e),()=>o.delete(e)),destroy:()=>{n.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}};return t=e(r,i,a),a},i=e=>e?r(e):r;var a=o(67294),s=o(52798),l=o(25108);const{useSyncExternalStoreWithSelector:c}=s;let p=!1;const d=e=>{"function"!=typeof e&&l.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"==typeof e?i(e):e,o=(e,o)=>function(e,t=e.getState,o){o&&!p&&(l.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),p=!0);const n=c(e.subscribe,e.getState,e.getServerState||e.getState,t,o);return(0,a.useDebugValue)(n),n}(t,e,o);return Object.assign(o,t),o},u=e=>e?d(e):d}}]);
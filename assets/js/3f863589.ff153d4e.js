"use strict";(self.webpackChunkampistudio_docs=self.webpackChunkampistudio_docs||[]).push([[755],{9063:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=o(4848),r=o(8453);const n={sidebar_position:4},a="Firmware",s={id:"willow/firmware",title:"Firmware",description:"Willow comes pre-flashed with ZMK firmware and a default keymap with full support for ZMK Studio. With the nature of a small keyboard like Node, you're likely interested in making a custom keymap for it.",source:"@site/docs/willow/firmware.md",sourceDirName:"willow",slug:"/willow/firmware",permalink:"/willow/firmware",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Keycaps",permalink:"/willow/keycaps"}},l={},d=[];function h(e){const t={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"firmware",children:"Firmware"})}),"\n",(0,i.jsxs)(t.p,{children:["Willow comes pre-flashed with ZMK firmware and a default keymap with full support for ",(0,i.jsx)(t.a,{href:"https://zmk.dev/docs/features/studio",children:"ZMK Studio"}),". With the nature of a small keyboard like Node, you're likely interested in making a custom keymap for it."]}),"\n",(0,i.jsx)(t.h1,{id:"zmk-studio",children:"ZMK Studio"}),"\n",(0,i.jsxs)(t.p,{children:["Willow supports ZMK Studio for quick and easy remapping of keys. For a list of currently supported features, check our ",(0,i.jsx)(t.a,{href:"https://zmk.dev/docs/features/studio",children:"the ZMK documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To access and use ZMK Studio, you can visit ",(0,i.jsx)(t.a,{href:"http://zmk.studio",children:"zmk.studio"}),". If you plug the keyboard in via USB to your computer, you can edit the keymap from within your web browser. If you want to edit the keymap over bluetooth, you will need to ",(0,i.jsx)(t.a,{href:"https://github.com/zmkfirmware/zmk-studio/releases",children:"download the ZMK Studio application"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"building-your-own-firmware",children:"Building your own firmware"}),"\n",(0,i.jsxs)(t.p,{children:["If you are interested in taking advantage of ZMK features that are not currently supported by Studio, you will need to edit and compile new firmware yourself. We have created a ",(0,i.jsx)(t.a,{href:"https://github.com/AmPi-Studio/willow-zmk-config",children:"template repository"})," for Willow that you can copy to configure the keymap and additional behaviors yourself. If you are interested in setting up ZMK from scratch, ",(0,i.jsx)(t.a,{href:"https://zmk.dev",children:"you can follow the ZMK documentation"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"using-the-template",children:"Using the template"}),"\n",(0,i.jsxs)(t.p,{children:["To start customizing your firmare, begin by ",(0,i.jsx)(t.a,{href:"https://github.com/AmPi-Studio/willow-zmk-config",children:"visiting our template repository on GitHub"}),', select "Use this template" at the top right of the page, then create a new repository.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Use this template",src:o(2962).A+"",width:"356",height:"212"})}),"\n",(0,i.jsxs)(t.p,{children:["After copying the template repository, the firmware will be automatically built using GitHub Actions. You can edit the /config/willow.keymap file to customize your layout and add custom behaviors such as tap dances and macros. For documentation on editing your keymap, ",(0,i.jsx)(t.a,{href:"https://zmk.dev",children:"visit the ZMK documentation"}),". Alternatively, you can use the ",(0,i.jsx)(t.a,{href:"http://nickcoutsos.github.io/keymap-editor/",children:"visual keymap editor by Nick Coutsos"})," which makes things very easy. Unlike ZMK Studio, Nick Coutsos's keymap editor has full support for combos, tap dances, macros, and more."]}),"\n",(0,i.jsx)(t.p,{children:"After you edit your keymap either on your own or through the keymap editor, GitHub actions will automatically begin compiling your firmware."}),"\n",(0,i.jsx)(t.h1,{id:"downloading-the-firmware",children:"Downloading the Firmware"}),"\n",(0,i.jsx)(t.p,{children:'To download your firmware, click on the "Actions" tab in your GitHub repository.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"GitHub Actions Page",src:o(3293).A+"",width:"2646",height:"796"})}),"\n",(0,i.jsx)(t.p,{children:"You will see your workflow run that has built your firmware, click into that to find your download."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Firmware download button",src:o(75).A+"",width:"1962",height:"390"})}),"\n",(0,i.jsx)(t.p,{children:"The download will contain 3 items. You will find a firmware file for the left and right halves of the keyboard, and a settings reset."}),"\n",(0,i.jsxs)(t.p,{children:["The settings reset firwmare is only needed for troubleshooting. For information on clearing keyboard bonds using the settings reset firmware, follow the steps outlined in the ",(0,i.jsx)(t.a,{href:"https://zmk.dev/docs/troubleshooting#split-keyboard-halves-unable-to-pair",children:"ZMK documentation"})]}),"\n",(0,i.jsx)(t.h1,{id:"flashing-firmware",children:"Flashing Firmware"}),"\n",(0,i.jsx)(t.p,{children:"To flash your downloaded firmware, first ensure the power switch is in the off position, then plug the keyboard into your computer. Once plugged in, double press the reset button located on the back right side of the keyboard."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Willow Reset Button",src:o(7690).A+"",width:"1450",height:"914"})}),"\n",(0,i.jsx)(t.p,{children:'After double pressing the reset button, Willow\'s microcontroller will emulate a storage device called "NICENANO". Drag and drop the willow-nice_nano_v2-zmk.uf2 file into the storage device. When the bootloader automatically disconnects from your computer, you will have successfully flashed the keyboard half. Follow the same steps with the right half and flash the right firmware file.'}),"\n",(0,i.jsx)(t.p,{children:"Once flashed, you can power on and begin using your custom keymap."}),"\n",(0,i.jsxs)(t.p,{children:["When the keyboard is powered on for the first time, it will automatically enter pairing mode and Willow should be available to connect to from your computer. For more information about the bluetooth behavior and adding bluetooth switching functionality to your keymap, ",(0,i.jsx)(t.a,{href:"https://zmk.dev/docs/keymaps/behaviors/bluetooth",children:"check out the ZMK documentation"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},75:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/github_firmware_download-f0e5b600a9927b52089a5a56d21e4993.png"},2962:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/github_template_ss-d7d617c4c2ffb17e19e5a9f15e675bf6.png"},3293:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/node_github_actions_fw-49e559e937f2a27d3e21fa967d95df71.png"},7690:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/node_reset_button-4bdf559dfde0b54140b95e0a396eaa72.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var i=o(6540);const r={},n=i.createContext(r);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
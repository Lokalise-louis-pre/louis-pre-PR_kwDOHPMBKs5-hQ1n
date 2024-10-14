"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9691],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/components/Link/Link.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,asButton:()=>asButton,asLink:()=>asLink,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabledButton:()=>disabledButton});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_Link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Link/Link.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{...args});const asLink=Template.bind({});asLink.storyName="As Link",asLink.args={href:"https://docs.lokalise.com/",target:"_blank",children:"This link goes to https://docs.lokalise.com"},asLink.parameters={storySource:{source:"args => <Link {...args} />"}};const asButton=Template.bind({});asButton.storyName="As Button",asButton.args={children:"Add Term"},asButton.parameters={storySource:{source:"args => <Link {...args} />"}};const disabledButton=Template.bind({});disabledButton.storyName="Disabled Button",disabledButton.args={children:"Disabled Term",disabled:!0},disabledButton.parameters={storySource:{source:"args => <Link {...args} />"}};const componentMeta={title:"Components/Link",parameters:{controls:{sort:"requiredFirst"}},component:_Link__WEBPACK_IMPORTED_MODULE_3__.r,argTypes:{onClick:{action:""}},tags:["stories-mdx"],includeStories:["asLink","asButton","disabledButton"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Link",component:_Link__WEBPACK_IMPORTED_MODULE_3__.r,parameters:{controls:{sort:"requiredFirst"}},argTypes:{onClick:{action:""}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"link",children:"Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Link is meant to render either a link or a button that looks like a link."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:'import { Link } from \'@lokalise/louis\';\n\nexport default () => (\n\t<Link href="https://lokalise.com/" rel="noreferrer" target="_blank">\n\t\tThis link goes to https://lokalise.com\n\t</Link>\n);\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,{sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"as-link",children:"As Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"As Link",args:{href:"https://docs.lokalise.com/",target:"_blank",children:"This link goes to https://docs.lokalise.com"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"as-button",children:"As Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"As Button",args:{children:"Add Term"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"disabled-button",children:"Disabled Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Disabled Button",args:{children:"Disabled Term",disabled:!0},children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","asLink","asButton","disabledButton"]},"./src/components/Link/Link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),_utils_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/styles/link.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/index.ts"),_Pressable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Pressable/index.tsx");const Link=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.ZP)(_Pressable__WEBPACK_IMPORTED_MODULE_1__.s).withConfig({displayName:"Link",componentId:"sc-gfg66s-0"})(["",";",""],_utils_styles__WEBPACK_IMPORTED_MODULE_2__.J,(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__.c)((({href})=>!href),_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
			&:disabled {
				cursor: not-allowed;
				color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.S3)("color.text.disabled")};
			}
		`));Link.displayName="Link"},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Pressable_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Pressable/Pressable.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Pressable_module.Z,options);const Pressable_Pressable_module=Pressable_module.Z&&Pressable_module.Z.locals?Pressable_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isAnchor=props=>void 0!==props.href,Pressable=(0,react.forwardRef)((({children,className,...props},ref)=>isAnchor(props)?(0,jsx_runtime.jsx)("a",{className:(0,clsx.Z)(Pressable_Pressable_module.root,className),ref,...props,children}):(0,jsx_runtime.jsx)("button",{type:"button",className:(0,clsx.Z)(Pressable_Pressable_module.root,className),...props,ref,children})));Pressable.displayName="Pressable";try{isAnchor.displayName="Pressable",isAnchor.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>withLinkStyle});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const withLinkStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["cursor:pointer;font-size:inherit;font-weight:inherit;line-height:inherit;color:",";transition:color ",";background-color:transparent;padding:0;border:none;font-family:",";&:hover,&:focus,&:active,&:active:hover{color:",";}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.link.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("motion.speed.1"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("font.family.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.link.hover"))},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Pressable/Pressable.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".iPosh9GWbEqu1DyHfIfc {\n\tcursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/components/Pressable/Pressable.module.css"],names:[],mappings:"AAAA;CACC,eAAe;AAChB",sourcesContent:[".root {\n\tcursor: pointer;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"iPosh9GWbEqu1DyHfIfc"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=components-Link-Link-stories-mdx.0f3a41db.iframe.bundle.js.map
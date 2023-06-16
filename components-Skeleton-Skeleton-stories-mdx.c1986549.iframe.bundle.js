"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[818],{"./node_modules/@lokalise/styled/dist/tokens/excludeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>d});const d=c=>(e,s)=>!c.includes(e)&&s(e)},"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer,_:()=>defaultComponents});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Skeleton/Skeleton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemplateCircle:()=>TemplateCircle,TemplateRectangle:()=>TemplateRectangle,TemplateWithFlex:()=>TemplateWithFlex,animatedCircle:()=>animatedCircle,animatedRectangle:()=>animatedRectangle,circle:()=>circle,default:()=>Skeleton_stories,layoutWithFlex:()=>layoutWithFlex,rectangle:()=>rectangle});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js");const LoadingAnimation=styled_components_browser_esm.F4`
    0% {
        opacity: .3;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: .3;
    }
`,Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Skeleton__Container",componentId:"sc-19dwa64-0"})(["width:100%;",""],(0,modifier.c)("animated",styled_components_browser_esm.iv`
			animation-name: ${LoadingAnimation};
			animation-duration: 1.5s;
			animation-iteration-count: infinite;
		`));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Skeleton=_ref=>{let{children,animated=!1,description,className}=_ref;return(0,jsx_runtime.jsx)(Container,{animated,"aria-label":description,className,children})};Skeleton.displayName="Skeleton",Skeleton.displayName="Skeleton";try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{animated:{defaultValue:{value:"false"},description:"Toggles the animation.",name:"animated",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Adds accessibility label.",name:"description",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node, including `Rectangle` or `Circle` in the container.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}var excludeProps=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/excludeProps.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Circle=styled_components_browser_esm.ZP.div.withConfig({shouldForwardProp:(0,excludeProps.L)(["radius","size"])}).withConfig({displayName:"Circle",componentId:"sc-lum6rv-0"})(["height:","px;width:","px;border-radius:50%;background-color:",";"],(_ref=>{let{size}=_ref;return size}),(_ref2=>{let{size}=_ref2;return size}),(0,theme.S3)("color.background.disabled"));Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},size:{defaultValue:null,description:"Sets the height and width of the circle.",name:"size",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"src/components/Skeleton/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}const Rectangle=styled_components_browser_esm.ZP.div.withConfig({shouldForwardProp:(0,excludeProps.L)(["height","width","centered"])}).withConfig({displayName:"Rectangle",componentId:"sc-183z3od-0"})(["height:","px;width:",";border-radius:",";background-color:",";",";"],(_ref=>{let{height}=_ref;return height}),(_ref2=>{let{width}=_ref2;return"string"==typeof width?width:`${width}px`}),(0,theme.S3)("radius.m"),(0,theme.S3)("color.background.disabled"),(0,modifier.c)("centered",styled_components_browser_esm.iv`
			margin: 0 auto;
		`));Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},height:{defaultValue:null,description:"Set the height of Rectangle.",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Set the width of Rectangle. Can use percentage value.",name:"width",required:!0,type:{name:"string | number"}},centered:{defaultValue:null,description:"Center the Rectangle",name:"centered",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/components/Skeleton/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}const TemplateCircle=args=>{const{circleProps,...rest}=args;return(0,jsx_runtime.jsx)(Skeleton,{...rest,children:(0,jsx_runtime.jsx)(Circle,{...circleProps})})},TemplateRectangle=args=>{const{rectangleProps,...rest}=args;return(0,jsx_runtime.jsx)(Skeleton,{...rest,children:(0,jsx_runtime.jsx)(Rectangle,{...rectangleProps})})},TemplateWithFlex=args=>{const{circleProps,rectangleProps,...rest}=args;return(0,jsx_runtime.jsx)(Skeleton,{...rest,children:(0,jsx_runtime.jsxs)(Flex.k,{gap:2,align:"center",children:[(0,jsx_runtime.jsx)(Circle,{...circleProps}),(0,jsx_runtime.jsx)(Rectangle,{...rectangleProps})]})})};const circle=TemplateCircle.bind({});circle.storyName="Circle",circle.args={description:"Circle",circleProps:{size:30}},circle.parameters={storySource:{source:"args => {\n  const {\n    circleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Circle {...circleProps} />\n\t\t</Skeleton>;\n}"}};const rectangle=TemplateRectangle.bind({});rectangle.storyName="Rectangle",rectangle.args={description:"Rectangle",rectangleProps:{height:30,width:80}},rectangle.parameters={storySource:{source:"args => {\n  const {\n    rectangleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Rectangle {...rectangleProps} />\n\t\t</Skeleton>;\n}"}};const animatedCircle=TemplateCircle.bind({});animatedCircle.storyName="Animated Circle",animatedCircle.args={animated:!0,description:"Animated Circle",circleProps:{size:30}},animatedCircle.parameters={storySource:{source:"args => {\n  const {\n    circleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Circle {...circleProps} />\n\t\t</Skeleton>;\n}"}};const animatedRectangle=TemplateRectangle.bind({});animatedRectangle.storyName="Animated Rectangle",animatedRectangle.args={animated:!0,description:"Animated Rectangle",rectangleProps:{height:30,width:80}},animatedRectangle.parameters={storySource:{source:"args => {\n  const {\n    rectangleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Rectangle {...rectangleProps} />\n\t\t</Skeleton>;\n}"}};const layoutWithFlex=TemplateWithFlex.bind({});layoutWithFlex.storyName="Layout with Flex",layoutWithFlex.args={description:"Layout with Flex",circleProps:{size:30},rectangleProps:{height:30,width:80}},layoutWithFlex.parameters={storySource:{source:'args => {\n  const {\n    circleProps,\n    rectangleProps,\n    ...rest\n  } = args;\n  return <Skeleton {...rest}>\n\t\t\t<Flex gap={2} align="center">\n\t\t\t\t<Circle {...circleProps} />\n\t\t\t\t<Rectangle {...rectangleProps} />\n\t\t\t</Flex>\n\t\t</Skeleton>;\n}'}};const componentMeta={title:"Components/Skeleton",parameters:{controls:{sort:"requiredFirst",exclude:["children","skeletonProps"]}},component:Skeleton,subcomponents:{Circle,Rectangle},tags:["stories-mdx"],includeStories:["circle","rectangle","animatedCircle","animatedRectangle","layoutWithFlex"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Skeleton",component:Skeleton,subcomponents:{Circle,Rectangle},parameters:{controls:{sort:"requiredFirst",exclude:["children","skeletonProps"]}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"skeleton",children:"Skeleton"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Skeleton is used to create loading placeholders."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Skeleton exports 3 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"}),": main container component."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Circle"}),": circle with variable diameter."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Rectangle"}),": rectangle with variable dimensions."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Circle, Rectangle, Skeleton } from '@lokalise/louis';\n\nexport default () => (\n\t<Skeleton description=\"loading\" animated>\n\t\t<Circle size={30} />\n\t\t<Rectangle height={30} width={80} />\n\t</Skeleton>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Skeleton,sort:"requiredFirst",exclude:["as","forwardedAs","ref","theme"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Circle",args:{description:"Circle",circleProps:{size:30}},children:TemplateCircle.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Rectangle",args:{description:"Rectangle",rectangleProps:{height:30,width:80}},children:TemplateRectangle.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"animated",children:"Animated"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Animated Circle",args:{animated:!0,description:"Animated Circle",circleProps:{size:30}},children:TemplateCircle.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Animated Rectangle",args:{animated:!0,description:"Animated Rectangle",rectangleProps:{height:30,width:80}},children:TemplateRectangle.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"layout-with-flex",children:"Layout with Flex"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Layout with Flex",args:{description:"Layout with Flex",circleProps:{size:30},rectangleProps:{height:30,width:80}},children:TemplateWithFlex.bind({})})})]})}}};const Skeleton_stories=componentMeta},"./src/components/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Flex__Container",componentId:"sc-1rxy4x6-0"})(["display:flex;gap:"," ",";max-width:100%;align-items:",";justify-content:",";flex-wrap:",";flex-direction:",";flex-basis:",";flex-grow:",";flex-shrink:",";align-self:",";",""],(_ref=>{let{rowGap}=_ref;return(0,theme.W0)(rowGap)}),(_ref2=>{let{columnGap}=_ref2;return(0,theme.W0)(columnGap)}),(_ref3=>{let{alignItems}=_ref3;return alignItems}),(_ref4=>{let{justifyContent}=_ref4;return justifyContent}),(_ref5=>{let{flexWrap}=_ref5;return flexWrap}),(_ref6=>{let{flexDirection}=_ref6;return flexDirection}),(_ref7=>{let{basis}=_ref7;return basis}),(_ref8=>{let{grow}=_ref8;return grow}),(_ref9=>{let{shrink}=_ref9;return shrink}),(_ref10=>{let{alignSelf}=_ref10;return alignSelf}),(0,modifier.c)("inline",styled_components_browser_esm.iv`
			display: inline-flex;
		`));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,react.forwardRef)(((_ref,ref)=>{let{inline=!1,align="flex-start",justify="flex-start",wrap="wrap",direction="row",gap=0,children,as="div",...rest}=_ref;const rowGap="number"==typeof gap?gap:gap[0],columnGap="number"==typeof gap?gap:gap[1];return(0,jsx_runtime.jsx)(Container,{...rest,ref,inline,flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,as,rowGap,columnGap,children})}));Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{inline:{defaultValue:{value:"false"},description:"Toggles inline-flex.",name:"inline",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"flex-start"},description:"Sets align-items.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:{value:"flex-start"},description:"Sets justify-content.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"wrap"},description:"Sets flex-wrap.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"wrap"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},direction:{defaultValue:{value:"row"},description:"Sets flex-direction.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"row"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"Sets gap, or row-gap and column-gap, using theme spacing.",name:"gap",required:!1,type:{name:"SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels]"}},basis:{defaultValue:null,description:"Sets flex-basis when used as a child of another flex container.",name:"basis",required:!1,type:{name:"FlexBasis<string | number>"}},grow:{defaultValue:null,description:"Sets flex-grow when used as a child of another flex container.",name:"grow",required:!1,type:{name:"FlexGrow"}},shrink:{defaultValue:null,description:"Sets flex-shrink when used as a child of another flex container.",name:"shrink",required:!1,type:{name:"FlexShrink"}},alignSelf:{defaultValue:null,description:"Sets align-self when used as a child of another flex container.",name:"alignSelf",required:!1,type:{name:"AlignSelf"}},children:{defaultValue:null,description:"Renders any flex items in the flex container.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"Sets the HTML element to render for the flex container.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"aside"'},{value:'"div"'},{value:'"li"'},{value:'"main"'},{value:'"section"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Skeleton-Skeleton-stories-mdx.c1986549.iframe.bundle.js.map
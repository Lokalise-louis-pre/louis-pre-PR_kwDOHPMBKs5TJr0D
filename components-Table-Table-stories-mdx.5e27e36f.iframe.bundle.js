"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6513],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer,_:()=>defaultComponents});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Table/Table.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>Table_stories,table:()=>table});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.table.withConfig({displayName:"Table__Container",componentId:"sc-wmxjr4-0"})(["table-layout:fixed;width:100%;border:none;border-spacing:0;border-collapse:collapse;font-family:",";"],(0,theme.S3)("font.family.graphik")),HeaderCell=styled_components_browser_esm.ZP.th.withConfig({displayName:"Table__HeaderCell",componentId:"sc-wmxjr4-1"})([""," text-align:left;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:",";padding:",";"],(0,theme.cp)("body.small.strong"),(0,theme.S3)("color.border.light"),(0,theme.W0)(2)),Cell=styled_components_browser_esm.ZP.td.withConfig({displayName:"Table__Cell",componentId:"sc-wmxjr4-2"})([""," border:none;border-top-width:1px;border-top-style:solid;border-top-color:",";padding:",";"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.border.default"),(0,theme.W0)(2));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Table=_ref=>{let{className,children}=_ref;return(0,jsx_runtime.jsx)(Container,{className,children})};Table.displayName="Table",Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const TableHeader=_ref=>{let{className,children}=_ref;return(0,jsx_runtime.jsx)("thead",{className,children})};TableHeader.displayName="TableHeader";try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}const TableRow=_ref=>{let{className,children}=_ref;return(0,jsx_runtime.jsx)("tr",{className,children})};TableRow.displayName="TableRow";try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}const TableHeaderCell=_ref=>{let{children,width,align,colSpan,className}=_ref;return(0,jsx_runtime.jsx)(HeaderCell,{colSpan,style:{width,textAlign:align},className,children})};TableHeaderCell.displayName="TableHeaderCell";try{TableHeaderCell.displayName="TableHeaderCell",TableHeaderCell.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{width:{defaultValue:null,description:"Sets the width of the table data cell element.",name:"width",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"Sets the colspan attribute on the table data cell element.",name:"colSpan",required:!1,type:{name:"number"}},align:{defaultValue:null,description:"Sets the text-align style for content in the table data cell element.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in a table data cell element.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeaderCell.tsx#TableHeaderCell"]={docgenInfo:TableHeaderCell.__docgenInfo,name:"TableHeaderCell",path:"src/components/Table/TableHeaderCell.tsx#TableHeaderCell"})}catch(__react_docgen_typescript_loader_error){}const TableBody=_ref=>{let{className,children}=_ref;return(0,jsx_runtime.jsx)("tbody",{className,children})};TableBody.displayName="TableBody";try{TableBody.displayName="TableBody",TableBody.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:TableBody.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(__react_docgen_typescript_loader_error){}const TableCell=_ref=>{let{children,width,align,colSpan,className}=_ref;return(0,jsx_runtime.jsx)(Cell,{colSpan,style:{width,textAlign:align},className,children})};TableCell.displayName="TableCell";try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{width:{defaultValue:null,description:"Sets the width of the table data cell element.",name:"width",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"Sets the colspan attribute on the table data cell element.",name:"colSpan",required:!1,type:{name:"number"}},align:{defaultValue:null,description:"Sets the text-align style for content in the table data cell element.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in a table data cell element.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}const TableFooter=_ref=>{let{className,children}=_ref;return(0,jsx_runtime.jsx)("tfoot",{className,children})};TableFooter.displayName="TableFooter";try{TableFooter.displayName="TableFooter",TableFooter.__docgenInfo={description:"",displayName:"TableFooter",props:{className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:TableFooter.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>{const _components=Object.assign({em:"em"},(0,lib.ah)()),{tableCellProps,tableHeaderCellProps,tableFooterCellProps,...restArgs}=args;return(0,jsx_runtime.jsxs)(Table,{children:[(0,jsx_runtime.jsx)(TableHeader,{children:(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableHeaderCell,{...tableHeaderCellProps,children:"No."}),(0,jsx_runtime.jsx)(TableHeaderCell,{children:"First Name"}),(0,jsx_runtime.jsx)(TableHeaderCell,{children:"Last Name"})]})}),(0,jsx_runtime.jsxs)(TableBody,{children:[(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{...tableCellProps,children:"1"}),(0,jsx_runtime.jsx)(TableCell,{...tableCellProps,children:"John"}),(0,jsx_runtime.jsx)(TableCell,{...tableCellProps,children:"Doe"})]}),(0,jsx_runtime.jsxs)(TableRow,{children:[(0,jsx_runtime.jsx)(TableCell,{...tableCellProps,children:"2"}),(0,jsx_runtime.jsx)(TableCell,{...tableCellProps,children:"Jane"}),(0,jsx_runtime.jsx)(TableCell,{...tableCellProps,children:"Doe"})]})]}),(0,jsx_runtime.jsx)(TableFooter,{children:(0,jsx_runtime.jsx)(TableRow,{children:(0,jsx_runtime.jsx)(TableCell,{...tableFooterCellProps,children:(0,jsx_runtime.jsx)(_components.em,{children:"Total: 2 people"})})})})]})};const table=Template.bind({});table.storyName="Table",table.args={tableHeaderCellProps:{colSpan:1,width:"50px",align:"left"},tableFooterCellProps:{colSpan:3,width:"auto",align:"right"},tableCellProps:{colSpan:1,width:"auto",align:"left"}},table.parameters={storySource:{source:"args => {\n  const {\n    tableCellProps,\n    tableHeaderCellProps,\n    tableFooterCellProps,\n    ...restArgs\n  } = args;\n  return <Table>\n\t\t\t<TableHeader>\n\t\t\t\t<TableRow>\n\t\t\t\t\t<TableHeaderCell {...tableHeaderCellProps}>No.</TableHeaderCell>\n\t\t\t\t\t<TableHeaderCell>First Name</TableHeaderCell>\n\t\t\t\t\t<TableHeaderCell>Last Name</TableHeaderCell>\n\t\t\t\t</TableRow>\n\t\t\t</TableHeader>\n\t\t\t<TableBody>\n\t\t\t\t<TableRow>\n\t\t\t\t\t<TableCell {...tableCellProps}>1</TableCell>\n\t\t\t\t\t<TableCell {...tableCellProps}>John</TableCell>\n\t\t\t\t\t<TableCell {...tableCellProps}>Doe</TableCell>\n\t\t\t\t</TableRow>\n\t\t\t\t<TableRow>\n\t\t\t\t\t<TableCell {...tableCellProps}>2</TableCell>\n\t\t\t\t\t<TableCell {...tableCellProps}>Jane</TableCell>\n\t\t\t\t\t<TableCell {...tableCellProps}>Doe</TableCell>\n\t\t\t\t</TableRow>\n\t\t\t</TableBody>\n\t\t\t<TableFooter>\n\t\t\t\t<TableRow>\n\t\t\t\t\t<TableCell {...tableFooterCellProps}>\n\t\t\t\t\t\t<em>Total: 2 people</em>\n\t\t\t\t\t</TableCell>\n\t\t\t\t</TableRow>\n\t\t\t</TableFooter>\n\t\t</Table>;\n}"}};const componentMeta={title:"Components/Table",parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0}}},component:Table,subcomponents:{TableHeader,TableHeaderCell,TableBody,TableFooter,TableRow,TableCell},tags:["stories-mdx"],includeStories:["table"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Table",component:Table,subcomponents:{TableHeader,TableHeaderCell,TableBody,TableFooter,TableRow,TableCell},parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"table",children:"Table"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Table can be used to represent tabular data, comprised of rows and columns of cells containing data."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Table exports 7 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Table"}),": Main component which can contain a ",(0,jsx_runtime.jsx)(_components.code,{children:"TableHeader"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"TableBody"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"TableFooter"}),", and one or more ",(0,jsx_runtime.jsx)(_components.code,{children:"TableRow"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"TableCell"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TableHeader"}),": Renders a table header element."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TableHeaderCell"}),": Renders a styled table cell element for use in a ",(0,jsx_runtime.jsx)(_components.code,{children:"TableHeader"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TableBody"}),": Renders a table body element."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TableFooter"}),": Renders a table footer element."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TableRow"}),": Renders a table row element."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TableCell"}),": Renders a styled table cell element for use in a ",(0,jsx_runtime.jsx)(_components.code,{children:"TableBody"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"TableFooter"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Table, TableBody, TableRow, TableCell } from '@lokalise/louis';\n\nexport default () => (\n\t<Table>\n\t\t<TableBody>\n\t\t\t<TableRow>\n\t\t\t\t<TableCell>1</TableCell>\n\t\t\t\t<TableCell>John</TableCell>\n\t\t\t\t<TableCell>Doe</TableCell>\n\t\t\t</TableRow>\n\t\t\t<TableRow>\n\t\t\t\t<TableCell>2</TableCell>\n\t\t\t\t<TableCell>Jane</TableCell>\n\t\t\t\t<TableCell>Doe</TableCell>\n\t\t\t</TableRow>\n\t\t</TableBody>\n\t</Table>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4037%3A21036",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Table"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Table,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Table",args:{tableHeaderCellProps:{colSpan:1,width:"50px",align:"left"},tableFooterCellProps:{colSpan:3,width:"auto",align:"right"},tableCellProps:{colSpan:1,width:"auto",align:"left"}},children:Template.bind({})})})]})}}};const Table_stories=componentMeta}}]);
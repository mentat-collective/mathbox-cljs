shadow$provide.module$js$markdown=function(global,require,module,exports){let MD=new (require("module$node_modules$markdown_it$index"))({html:!0,linkify:!0,breaks:!1});global=require("module$node_modules$markdown_it_texmath$texmath");MD.use(global,{delimiters:"dollars"});global=require("module$node_modules$markdown_it_block_image$lib$index");MD.use(global);global=require("module$node_modules$markdown_it_toc_done_right$dist$markdownItTocDoneRight");MD.use(global);require=require("module$node_modules$markdown_it_sidenote$index");
MD.use(require);MD.use(function(md,opts){md.core.ruler.after("inline","todo-list-rule",state=>{state=state.tokens;for(let i=2;i<state.length;i++){var JSCompiler_temp;if(JSCompiler_temp="inline"===state[i].type&&"paragraph_open"===state[i-1].type&&"list_item_open"===state[i-2].type)JSCompiler_temp=state[i].content,JSCompiler_temp=JSCompiler_temp.startsWith("[ ] ")||JSCompiler_temp.startsWith("[x] ");if(JSCompiler_temp){state[i-2].attrSet("todo",!0);state[i-2].attrSet("checked",state[i].content.startsWith("[x] "));
JSCompiler_temp=state[i].children[0];JSCompiler_temp.content=JSCompiler_temp.content.slice(4);a:{for(JSCompiler_temp=i-3;0<=JSCompiler_temp;JSCompiler_temp--){let token=state[JSCompiler_temp];if("bullet_list_open"==token.type){JSCompiler_temp=token;break a}}JSCompiler_temp=void 0}JSCompiler_temp&&JSCompiler_temp.attrSet("has-todos",!0)}}})});module.exports={tokenize:function(text){return MD.parse(text,{})},tokenizeJSON:function(text){return JSON.stringify(MD.parse(text,{}))}}}
//# sourceMappingURL=module$js$markdown.js.map

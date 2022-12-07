goog.provide('nextjournal.viewer.katex');
var module$node_modules$katex$dist$katex=shadow.js.require("module$node_modules$katex$dist$katex", {});
nextjournal.viewer.katex.remove_unsupported_syntax = (function nextjournal$viewer$katex$remove_unsupported_syntax(content){
var G__67016 = content;
var G__67016__$1 = (((G__67016 == null))?null:clojure.string.replace(G__67016,/\\(begin|end)\{(align|eqnarray)\*?\}/,"\\$1{aligned}"));
var G__67016__$2 = (((G__67016__$1 == null))?null:clojure.string.replace(G__67016__$1,/\\(begin|end)\{equation[^}]*?\}/,""));
var G__67016__$3 = (((G__67016__$2 == null))?null:clojure.string.replace(G__67016__$2,/\\mbox\{/,"\\textrm{"));
var G__67016__$4 = (((G__67016__$3 == null))?null:clojure.string.replace(G__67016__$3,/\\label/,""));
if((G__67016__$4 == null)){
return null;
} else {
return clojure.string.replace(G__67016__$4,/\\\\\\\n/,"\\\\\n");
}
});
nextjournal.viewer.katex.to_html_string = (function nextjournal$viewer$katex$to_html_string(var_args){
var G__67018 = arguments.length;
switch (G__67018) {
case 1:
return nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$1 = (function (content){
return nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(content,null);
}));

(nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2 = (function (content,opts){
var temp__5757__auto__ = nextjournal.viewer.katex.remove_unsupported_syntax(content);
if((temp__5757__auto__ == null)){
return null;
} else {
var content__$1 = temp__5757__auto__;
return module$node_modules$katex$dist$katex.renderToString(content__$1,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"displayMode": false, "throwOnError": false, "errorColor": "#FF5722"}),opts));
}
}));

(nextjournal.viewer.katex.to_html_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=nextjournal.viewer.katex.js.map

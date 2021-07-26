// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__27646 = s;
var map__27646__$1 = (((((!((map__27646 == null))))?(((((map__27646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27646):map__27646);
var name = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__27649 = info;
var map__27650 = G__27649;
var map__27650__$1 = (((((!((map__27650 == null))))?(((((map__27650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27650):map__27650);
var shadow = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__27649__$1 = G__27649;
while(true){
var d__$2 = d__$1;
var map__27654 = G__27649__$1;
var map__27654__$1 = (((((!((map__27654 == null))))?(((((map__27654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27654):map__27654);
var shadow__$1 = cljs.core.get.call(null,map__27654__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__27656 = (d__$2 + (1));
var G__27657 = shadow__$1;
d__$1 = G__27656;
G__27649__$1 = G__27657;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__27658){
var map__27659 = p__27658;
var map__27659__$1 = (((((!((map__27659 == null))))?(((((map__27659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27659):map__27659);
var name_var = map__27659__$1;
var name = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__27661 = info;
var map__27661__$1 = (((((!((map__27661 == null))))?(((((map__27661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27661):map__27661);
var ns = cljs.core.get.call(null,map__27661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__27661__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__27664 = arguments.length;
switch (G__27664) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11501),(11501),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__27666 = cp;
switch (G__27666) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__27668_27672 = cljs.core.seq.call(null,s);
var chunk__27669_27673 = null;
var count__27670_27674 = (0);
var i__27671_27675 = (0);
while(true){
if((i__27671_27675 < count__27670_27674)){
var c_27676 = cljs.core._nth.call(null,chunk__27669_27673,i__27671_27675);
sb.append(cljs.compiler.escape_char.call(null,c_27676));


var G__27677 = seq__27668_27672;
var G__27678 = chunk__27669_27673;
var G__27679 = count__27670_27674;
var G__27680 = (i__27671_27675 + (1));
seq__27668_27672 = G__27677;
chunk__27669_27673 = G__27678;
count__27670_27674 = G__27679;
i__27671_27675 = G__27680;
continue;
} else {
var temp__5735__auto___27681 = cljs.core.seq.call(null,seq__27668_27672);
if(temp__5735__auto___27681){
var seq__27668_27682__$1 = temp__5735__auto___27681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27668_27682__$1)){
var c__4556__auto___27683 = cljs.core.chunk_first.call(null,seq__27668_27682__$1);
var G__27684 = cljs.core.chunk_rest.call(null,seq__27668_27682__$1);
var G__27685 = c__4556__auto___27683;
var G__27686 = cljs.core.count.call(null,c__4556__auto___27683);
var G__27687 = (0);
seq__27668_27672 = G__27684;
chunk__27669_27673 = G__27685;
count__27670_27674 = G__27686;
i__27671_27675 = G__27687;
continue;
} else {
var c_27688 = cljs.core.first.call(null,seq__27668_27682__$1);
sb.append(cljs.compiler.escape_char.call(null,c_27688));


var G__27689 = cljs.core.next.call(null,seq__27668_27682__$1);
var G__27690 = null;
var G__27691 = (0);
var G__27692 = (0);
seq__27668_27672 = G__27689;
chunk__27669_27673 = G__27690;
count__27670_27674 = G__27691;
i__27671_27675 = G__27692;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__27693_27698 = ast;
var map__27693_27699__$1 = (((((!((map__27693_27698 == null))))?(((((map__27693_27698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27693_27698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27693_27698):map__27693_27698);
var env_27700 = cljs.core.get.call(null,map__27693_27699__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_27700))){
var map__27695_27701 = env_27700;
var map__27695_27702__$1 = (((((!((map__27695_27701 == null))))?(((((map__27695_27701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27695_27701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27695_27701):map__27695_27701);
var line_27703 = cljs.core.get.call(null,map__27695_27702__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27704 = cljs.core.get.call(null,map__27695_27702__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__27697 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__27697,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__27697;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_27703 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_27704)?(column_27704 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__27713 = arguments.length;
switch (G__27713) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27720 = arguments.length;
var i__4737__auto___27721 = (0);
while(true){
if((i__4737__auto___27721 < len__4736__auto___27720)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27721]));

var G__27722 = (i__4737__auto___27721 + (1));
i__4737__auto___27721 = G__27722;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_27723 = (function (){var G__27714 = a;
if((!(typeof a === 'string'))){
return G__27714.toString();
} else {
return G__27714;
}
})();
var temp__5739__auto___27724 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___27724 == null)){
} else {
var sm_data_27725 = temp__5739__auto___27724;
cljs.core.swap_BANG_.call(null,sm_data_27725,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__27705_SHARP_){
return (p1__27705_SHARP_ + s_27723.length);
}));
}

cljs.core.print.call(null,s_27723);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__27715 = cljs.core.seq.call(null,xs);
var chunk__27716 = null;
var count__27717 = (0);
var i__27718 = (0);
while(true){
if((i__27718 < count__27717)){
var x = cljs.core._nth.call(null,chunk__27716,i__27718);
cljs.compiler.emits.call(null,x);


var G__27726 = seq__27715;
var G__27727 = chunk__27716;
var G__27728 = count__27717;
var G__27729 = (i__27718 + (1));
seq__27715 = G__27726;
chunk__27716 = G__27727;
count__27717 = G__27728;
i__27718 = G__27729;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27715);
if(temp__5735__auto__){
var seq__27715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27715__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27715__$1);
var G__27730 = cljs.core.chunk_rest.call(null,seq__27715__$1);
var G__27731 = c__4556__auto__;
var G__27732 = cljs.core.count.call(null,c__4556__auto__);
var G__27733 = (0);
seq__27715 = G__27730;
chunk__27716 = G__27731;
count__27717 = G__27732;
i__27718 = G__27733;
continue;
} else {
var x = cljs.core.first.call(null,seq__27715__$1);
cljs.compiler.emits.call(null,x);


var G__27734 = cljs.core.next.call(null,seq__27715__$1);
var G__27735 = null;
var G__27736 = (0);
var G__27737 = (0);
seq__27715 = G__27734;
chunk__27716 = G__27735;
count__27717 = G__27736;
i__27718 = G__27737;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq27707){
var G__27708 = cljs.core.first.call(null,seq27707);
var seq27707__$1 = cljs.core.next.call(null,seq27707);
var G__27709 = cljs.core.first.call(null,seq27707__$1);
var seq27707__$2 = cljs.core.next.call(null,seq27707__$1);
var G__27710 = cljs.core.first.call(null,seq27707__$2);
var seq27707__$3 = cljs.core.next.call(null,seq27707__$2);
var G__27711 = cljs.core.first.call(null,seq27707__$3);
var seq27707__$4 = cljs.core.next.call(null,seq27707__$3);
var G__27712 = cljs.core.first.call(null,seq27707__$4);
var seq27707__$5 = cljs.core.next.call(null,seq27707__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27708,G__27709,G__27710,G__27711,G__27712,seq27707__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__27738){
var map__27739 = p__27738;
var map__27739__$1 = (((((!((map__27739 == null))))?(((((map__27739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);
var m = map__27739__$1;
var gen_line = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__27748 = arguments.length;
switch (G__27748) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27754 = arguments.length;
var i__4737__auto___27755 = (0);
while(true){
if((i__4737__auto___27755 < len__4736__auto___27754)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27755]));

var G__27756 = (i__4737__auto___27755 + (1));
i__4737__auto___27755 = G__27756;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__27749_27757 = cljs.core.seq.call(null,xs);
var chunk__27750_27758 = null;
var count__27751_27759 = (0);
var i__27752_27760 = (0);
while(true){
if((i__27752_27760 < count__27751_27759)){
var x_27761 = cljs.core._nth.call(null,chunk__27750_27758,i__27752_27760);
cljs.compiler.emits.call(null,x_27761);


var G__27762 = seq__27749_27757;
var G__27763 = chunk__27750_27758;
var G__27764 = count__27751_27759;
var G__27765 = (i__27752_27760 + (1));
seq__27749_27757 = G__27762;
chunk__27750_27758 = G__27763;
count__27751_27759 = G__27764;
i__27752_27760 = G__27765;
continue;
} else {
var temp__5735__auto___27766 = cljs.core.seq.call(null,seq__27749_27757);
if(temp__5735__auto___27766){
var seq__27749_27767__$1 = temp__5735__auto___27766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27749_27767__$1)){
var c__4556__auto___27768 = cljs.core.chunk_first.call(null,seq__27749_27767__$1);
var G__27769 = cljs.core.chunk_rest.call(null,seq__27749_27767__$1);
var G__27770 = c__4556__auto___27768;
var G__27771 = cljs.core.count.call(null,c__4556__auto___27768);
var G__27772 = (0);
seq__27749_27757 = G__27769;
chunk__27750_27758 = G__27770;
count__27751_27759 = G__27771;
i__27752_27760 = G__27772;
continue;
} else {
var x_27773 = cljs.core.first.call(null,seq__27749_27767__$1);
cljs.compiler.emits.call(null,x_27773);


var G__27774 = cljs.core.next.call(null,seq__27749_27767__$1);
var G__27775 = null;
var G__27776 = (0);
var G__27777 = (0);
seq__27749_27757 = G__27774;
chunk__27750_27758 = G__27775;
count__27751_27759 = G__27776;
i__27752_27760 = G__27777;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq27742){
var G__27743 = cljs.core.first.call(null,seq27742);
var seq27742__$1 = cljs.core.next.call(null,seq27742);
var G__27744 = cljs.core.first.call(null,seq27742__$1);
var seq27742__$2 = cljs.core.next.call(null,seq27742__$1);
var G__27745 = cljs.core.first.call(null,seq27742__$2);
var seq27742__$3 = cljs.core.next.call(null,seq27742__$2);
var G__27746 = cljs.core.first.call(null,seq27742__$3);
var seq27742__$4 = cljs.core.next.call(null,seq27742__$3);
var G__27747 = cljs.core.first.call(null,seq27742__$4);
var seq27742__$5 = cljs.core.next.call(null,seq27742__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27743,G__27744,G__27745,G__27746,G__27747,seq27742__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27778_27782 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27779_27783 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27780_27784 = true;
var _STAR_print_fn_STAR__temp_val__27781_27785 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27780_27784);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27781_27785);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27779_27783);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27778_27782);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__27786 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__27786,(0),null);
var name = cljs.core.nth.call(null,vec__27786,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__27789 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__27789,(0),null);
var flags = cljs.core.nth.call(null,vec__27789,(1),null);
var pattern = cljs.core.nth.call(null,vec__27789,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__27792_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__27792_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__27794){
var map__27795 = p__27794;
var map__27795__$1 = (((((!((map__27795 == null))))?(((((map__27795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27795):map__27795);
var ast = map__27795__$1;
var info = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__27797 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27797__$1 = (((((!((map__27797 == null))))?(((((map__27797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27797):map__27797);
var cenv = map__27797__$1;
var options = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__27799 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.call(null,G__27799,cljs.analyzer.es5_allowed);
} else {
return G__27799;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__27800 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__27800,reserved);
} else {
return G__27800;
}
})();
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__27801_27802 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__27801_27803__$1 = (((G__27801_27802 instanceof cljs.core.Keyword))?G__27801_27802.fqn:null);
switch (G__27801_27803__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__27805){
var map__27806 = p__27805;
var map__27806__$1 = (((((!((map__27806 == null))))?(((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27806):map__27806);
var arg = map__27806__$1;
var env = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__27808 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__27808__$1 = (((((!((map__27808 == null))))?(((((map__27808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27808):map__27808);
var name = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__27810){
var map__27811 = p__27810;
var map__27811__$1 = (((((!((map__27811 == null))))?(((((map__27811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27811):map__27811);
var expr = cljs.core.get.call(null,map__27811__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__27811__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__27811__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__27813_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27813_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__27814){
var map__27815 = p__27814;
var map__27815__$1 = (((((!((map__27815 == null))))?(((((map__27815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27815):map__27815);
var env = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__27817){
var map__27818 = p__27817;
var map__27818__$1 = (((((!((map__27818 == null))))?(((((map__27818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27818):map__27818);
var items = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__27820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27820_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__27821){
var map__27822 = p__27821;
var map__27822__$1 = (((((!((map__27822 == null))))?(((((map__27822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27822):map__27822);
var items = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___27846 = cljs.core.seq.call(null,items);
if(temp__5735__auto___27846){
var items_27847__$1 = temp__5735__auto___27846;
var vec__27824_27848 = items_27847__$1;
var seq__27825_27849 = cljs.core.seq.call(null,vec__27824_27848);
var first__27826_27850 = cljs.core.first.call(null,seq__27825_27849);
var seq__27825_27851__$1 = cljs.core.next.call(null,seq__27825_27849);
var vec__27827_27852 = first__27826_27850;
var k_27853 = cljs.core.nth.call(null,vec__27827_27852,(0),null);
var v_27854 = cljs.core.nth.call(null,vec__27827_27852,(1),null);
var r_27855 = seq__27825_27851__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_27853),"\": ",emit_js_object_val.call(null,v_27854));

var seq__27830_27856 = cljs.core.seq.call(null,r_27855);
var chunk__27831_27857 = null;
var count__27832_27858 = (0);
var i__27833_27859 = (0);
while(true){
if((i__27833_27859 < count__27832_27858)){
var vec__27840_27860 = cljs.core._nth.call(null,chunk__27831_27857,i__27833_27859);
var k_27861__$1 = cljs.core.nth.call(null,vec__27840_27860,(0),null);
var v_27862__$1 = cljs.core.nth.call(null,vec__27840_27860,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27861__$1),"\": ",emit_js_object_val.call(null,v_27862__$1));


var G__27863 = seq__27830_27856;
var G__27864 = chunk__27831_27857;
var G__27865 = count__27832_27858;
var G__27866 = (i__27833_27859 + (1));
seq__27830_27856 = G__27863;
chunk__27831_27857 = G__27864;
count__27832_27858 = G__27865;
i__27833_27859 = G__27866;
continue;
} else {
var temp__5735__auto___27867__$1 = cljs.core.seq.call(null,seq__27830_27856);
if(temp__5735__auto___27867__$1){
var seq__27830_27868__$1 = temp__5735__auto___27867__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27830_27868__$1)){
var c__4556__auto___27869 = cljs.core.chunk_first.call(null,seq__27830_27868__$1);
var G__27870 = cljs.core.chunk_rest.call(null,seq__27830_27868__$1);
var G__27871 = c__4556__auto___27869;
var G__27872 = cljs.core.count.call(null,c__4556__auto___27869);
var G__27873 = (0);
seq__27830_27856 = G__27870;
chunk__27831_27857 = G__27871;
count__27832_27858 = G__27872;
i__27833_27859 = G__27873;
continue;
} else {
var vec__27843_27874 = cljs.core.first.call(null,seq__27830_27868__$1);
var k_27875__$1 = cljs.core.nth.call(null,vec__27843_27874,(0),null);
var v_27876__$1 = cljs.core.nth.call(null,vec__27843_27874,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27875__$1),"\": ",emit_js_object_val.call(null,v_27876__$1));


var G__27877 = cljs.core.next.call(null,seq__27830_27868__$1);
var G__27878 = null;
var G__27879 = (0);
var G__27880 = (0);
seq__27830_27856 = G__27877;
chunk__27831_27857 = G__27878;
count__27832_27858 = G__27879;
i__27833_27859 = G__27880;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__27881){
var map__27882 = p__27881;
var map__27882__$1 = (((((!((map__27882 == null))))?(((((map__27882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27882):map__27882);
var keys = cljs.core.get.call(null,map__27882__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27882__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__27882__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__27884){
var map__27885 = p__27884;
var map__27885__$1 = (((((!((map__27885 == null))))?(((((map__27885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27885):map__27885);
var items = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__27887){
var map__27888 = p__27887;
var map__27888__$1 = (((((!((map__27888 == null))))?(((((map__27888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27888):map__27888);
var expr = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__27890){
var map__27891 = p__27890;
var map__27891__$1 = (((((!((map__27891 == null))))?(((((map__27891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27891):map__27891);
var form = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__27893 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27893__$1 = (((((!((map__27893 == null))))?(((((map__27893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27893):map__27893);
var op = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__27895 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27895__$1 = (((((!((map__27895 == null))))?(((((map__27895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27895):map__27895);
var op = cljs.core.get.call(null,map__27895__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27895__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27895__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__27897){
var map__27898 = p__27897;
var map__27898__$1 = (((((!((map__27898 == null))))?(((((map__27898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27898):map__27898);
var test = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__27900){
var map__27901 = p__27900;
var map__27901__$1 = (((((!((map__27901 == null))))?(((((map__27901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27901):map__27901);
var v = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__27903_27939 = cljs.core.seq.call(null,nodes);
var chunk__27904_27940 = null;
var count__27905_27941 = (0);
var i__27906_27942 = (0);
while(true){
if((i__27906_27942 < count__27905_27941)){
var map__27923_27943 = cljs.core._nth.call(null,chunk__27904_27940,i__27906_27942);
var map__27923_27944__$1 = (((((!((map__27923_27943 == null))))?(((((map__27923_27943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27923_27943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27923_27943):map__27923_27943);
var ts_27945 = cljs.core.get.call(null,map__27923_27944__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27924_27946 = cljs.core.get.call(null,map__27923_27944__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27924_27947__$1 = (((((!((map__27924_27946 == null))))?(((((map__27924_27946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27924_27946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27924_27946):map__27924_27946);
var then_27948 = cljs.core.get.call(null,map__27924_27947__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27927_27949 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27945));
var chunk__27928_27950 = null;
var count__27929_27951 = (0);
var i__27930_27952 = (0);
while(true){
if((i__27930_27952 < count__27929_27951)){
var test_27953 = cljs.core._nth.call(null,chunk__27928_27950,i__27930_27952);
cljs.compiler.emitln.call(null,"case ",test_27953,":");


var G__27954 = seq__27927_27949;
var G__27955 = chunk__27928_27950;
var G__27956 = count__27929_27951;
var G__27957 = (i__27930_27952 + (1));
seq__27927_27949 = G__27954;
chunk__27928_27950 = G__27955;
count__27929_27951 = G__27956;
i__27930_27952 = G__27957;
continue;
} else {
var temp__5735__auto___27958 = cljs.core.seq.call(null,seq__27927_27949);
if(temp__5735__auto___27958){
var seq__27927_27959__$1 = temp__5735__auto___27958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27927_27959__$1)){
var c__4556__auto___27960 = cljs.core.chunk_first.call(null,seq__27927_27959__$1);
var G__27961 = cljs.core.chunk_rest.call(null,seq__27927_27959__$1);
var G__27962 = c__4556__auto___27960;
var G__27963 = cljs.core.count.call(null,c__4556__auto___27960);
var G__27964 = (0);
seq__27927_27949 = G__27961;
chunk__27928_27950 = G__27962;
count__27929_27951 = G__27963;
i__27930_27952 = G__27964;
continue;
} else {
var test_27965 = cljs.core.first.call(null,seq__27927_27959__$1);
cljs.compiler.emitln.call(null,"case ",test_27965,":");


var G__27966 = cljs.core.next.call(null,seq__27927_27959__$1);
var G__27967 = null;
var G__27968 = (0);
var G__27969 = (0);
seq__27927_27949 = G__27966;
chunk__27928_27950 = G__27967;
count__27929_27951 = G__27968;
i__27930_27952 = G__27969;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27948);
} else {
cljs.compiler.emitln.call(null,then_27948);
}

cljs.compiler.emitln.call(null,"break;");


var G__27970 = seq__27903_27939;
var G__27971 = chunk__27904_27940;
var G__27972 = count__27905_27941;
var G__27973 = (i__27906_27942 + (1));
seq__27903_27939 = G__27970;
chunk__27904_27940 = G__27971;
count__27905_27941 = G__27972;
i__27906_27942 = G__27973;
continue;
} else {
var temp__5735__auto___27974 = cljs.core.seq.call(null,seq__27903_27939);
if(temp__5735__auto___27974){
var seq__27903_27975__$1 = temp__5735__auto___27974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27903_27975__$1)){
var c__4556__auto___27976 = cljs.core.chunk_first.call(null,seq__27903_27975__$1);
var G__27977 = cljs.core.chunk_rest.call(null,seq__27903_27975__$1);
var G__27978 = c__4556__auto___27976;
var G__27979 = cljs.core.count.call(null,c__4556__auto___27976);
var G__27980 = (0);
seq__27903_27939 = G__27977;
chunk__27904_27940 = G__27978;
count__27905_27941 = G__27979;
i__27906_27942 = G__27980;
continue;
} else {
var map__27931_27981 = cljs.core.first.call(null,seq__27903_27975__$1);
var map__27931_27982__$1 = (((((!((map__27931_27981 == null))))?(((((map__27931_27981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27931_27981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931_27981):map__27931_27981);
var ts_27983 = cljs.core.get.call(null,map__27931_27982__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27932_27984 = cljs.core.get.call(null,map__27931_27982__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27932_27985__$1 = (((((!((map__27932_27984 == null))))?(((((map__27932_27984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27932_27984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27932_27984):map__27932_27984);
var then_27986 = cljs.core.get.call(null,map__27932_27985__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27935_27987 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27983));
var chunk__27936_27988 = null;
var count__27937_27989 = (0);
var i__27938_27990 = (0);
while(true){
if((i__27938_27990 < count__27937_27989)){
var test_27991 = cljs.core._nth.call(null,chunk__27936_27988,i__27938_27990);
cljs.compiler.emitln.call(null,"case ",test_27991,":");


var G__27992 = seq__27935_27987;
var G__27993 = chunk__27936_27988;
var G__27994 = count__27937_27989;
var G__27995 = (i__27938_27990 + (1));
seq__27935_27987 = G__27992;
chunk__27936_27988 = G__27993;
count__27937_27989 = G__27994;
i__27938_27990 = G__27995;
continue;
} else {
var temp__5735__auto___27996__$1 = cljs.core.seq.call(null,seq__27935_27987);
if(temp__5735__auto___27996__$1){
var seq__27935_27997__$1 = temp__5735__auto___27996__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27935_27997__$1)){
var c__4556__auto___27998 = cljs.core.chunk_first.call(null,seq__27935_27997__$1);
var G__27999 = cljs.core.chunk_rest.call(null,seq__27935_27997__$1);
var G__28000 = c__4556__auto___27998;
var G__28001 = cljs.core.count.call(null,c__4556__auto___27998);
var G__28002 = (0);
seq__27935_27987 = G__27999;
chunk__27936_27988 = G__28000;
count__27937_27989 = G__28001;
i__27938_27990 = G__28002;
continue;
} else {
var test_28003 = cljs.core.first.call(null,seq__27935_27997__$1);
cljs.compiler.emitln.call(null,"case ",test_28003,":");


var G__28004 = cljs.core.next.call(null,seq__27935_27997__$1);
var G__28005 = null;
var G__28006 = (0);
var G__28007 = (0);
seq__27935_27987 = G__28004;
chunk__27936_27988 = G__28005;
count__27937_27989 = G__28006;
i__27938_27990 = G__28007;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27986);
} else {
cljs.compiler.emitln.call(null,then_27986);
}

cljs.compiler.emitln.call(null,"break;");


var G__28008 = cljs.core.next.call(null,seq__27903_27975__$1);
var G__28009 = null;
var G__28010 = (0);
var G__28011 = (0);
seq__27903_27939 = G__28008;
chunk__27904_27940 = G__28009;
count__27905_27941 = G__28010;
i__27906_27942 = G__28011;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28012){
var map__28013 = p__28012;
var map__28013__$1 = (((((!((map__28013 == null))))?(((((map__28013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28013):map__28013);
var throw$ = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__28016 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__28016,(0),null);
var rstr = cljs.core.nth.call(null,vec__28016,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__28015_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28015_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__28019 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__28019,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__28019;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__28020_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28020_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__28021 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28022 = cljs.core.seq.call(null,vec__28021);
var first__28023 = cljs.core.first.call(null,seq__28022);
var seq__28022__$1 = cljs.core.next.call(null,seq__28022);
var p = first__28023;
var first__28023__$1 = cljs.core.first.call(null,seq__28022__$1);
var seq__28022__$2 = cljs.core.next.call(null,seq__28022__$1);
var ts = first__28023__$1;
var first__28023__$2 = cljs.core.first.call(null,seq__28022__$2);
var seq__28022__$3 = cljs.core.next.call(null,seq__28022__$2);
var n = first__28023__$2;
var xs = seq__28022__$3;
if(cljs.core.truth_(((cljs.core._EQ_.call(null,"@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__28024 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28025 = cljs.core.seq.call(null,vec__28024);
var first__28026 = cljs.core.first.call(null,seq__28025);
var seq__28025__$1 = cljs.core.next.call(null,seq__28025);
var p = first__28026;
var first__28026__$1 = cljs.core.first.call(null,seq__28025__$1);
var seq__28025__$2 = cljs.core.next.call(null,seq__28025__$1);
var ts = first__28026__$1;
var xs = seq__28025__$2;
if(cljs.core.truth_(((cljs.core._EQ_.call(null,"@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__28029 = arguments.length;
switch (G__28029) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__28037 = cljs.core.map.call(null,(function (p1__28027_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__28027_SHARP_);
} else {
return p1__28027_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__28038 = cljs.core.seq.call(null,vec__28037);
var first__28039 = cljs.core.first.call(null,seq__28038);
var seq__28038__$1 = cljs.core.next.call(null,seq__28038);
var x = first__28039;
var ys = seq__28038__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__28040 = cljs.core.seq.call(null,ys);
var chunk__28041 = null;
var count__28042 = (0);
var i__28043 = (0);
while(true){
if((i__28043 < count__28042)){
var next_line = cljs.core._nth.call(null,chunk__28041,i__28043);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28049 = seq__28040;
var G__28050 = chunk__28041;
var G__28051 = count__28042;
var G__28052 = (i__28043 + (1));
seq__28040 = G__28049;
chunk__28041 = G__28050;
count__28042 = G__28051;
i__28043 = G__28052;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28040);
if(temp__5735__auto__){
var seq__28040__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28040__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28040__$1);
var G__28053 = cljs.core.chunk_rest.call(null,seq__28040__$1);
var G__28054 = c__4556__auto__;
var G__28055 = cljs.core.count.call(null,c__4556__auto__);
var G__28056 = (0);
seq__28040 = G__28053;
chunk__28041 = G__28054;
count__28042 = G__28055;
i__28043 = G__28056;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28040__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28057 = cljs.core.next.call(null,seq__28040__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__28040 = G__28057;
chunk__28041 = G__28058;
count__28042 = G__28059;
i__28043 = G__28060;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__28044_28061 = cljs.core.seq.call(null,docs__$2);
var chunk__28045_28062 = null;
var count__28046_28063 = (0);
var i__28047_28064 = (0);
while(true){
if((i__28047_28064 < count__28046_28063)){
var e_28065 = cljs.core._nth.call(null,chunk__28045_28062,i__28047_28064);
if(cljs.core.truth_(e_28065)){
print_comment_lines.call(null,e_28065);
} else {
}


var G__28066 = seq__28044_28061;
var G__28067 = chunk__28045_28062;
var G__28068 = count__28046_28063;
var G__28069 = (i__28047_28064 + (1));
seq__28044_28061 = G__28066;
chunk__28045_28062 = G__28067;
count__28046_28063 = G__28068;
i__28047_28064 = G__28069;
continue;
} else {
var temp__5735__auto___28070 = cljs.core.seq.call(null,seq__28044_28061);
if(temp__5735__auto___28070){
var seq__28044_28071__$1 = temp__5735__auto___28070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28044_28071__$1)){
var c__4556__auto___28072 = cljs.core.chunk_first.call(null,seq__28044_28071__$1);
var G__28073 = cljs.core.chunk_rest.call(null,seq__28044_28071__$1);
var G__28074 = c__4556__auto___28072;
var G__28075 = cljs.core.count.call(null,c__4556__auto___28072);
var G__28076 = (0);
seq__28044_28061 = G__28073;
chunk__28045_28062 = G__28074;
count__28046_28063 = G__28075;
i__28047_28064 = G__28076;
continue;
} else {
var e_28077 = cljs.core.first.call(null,seq__28044_28071__$1);
if(cljs.core.truth_(e_28077)){
print_comment_lines.call(null,e_28077);
} else {
}


var G__28078 = cljs.core.next.call(null,seq__28044_28071__$1);
var G__28079 = null;
var G__28080 = (0);
var G__28081 = (0);
seq__28044_28061 = G__28078;
chunk__28045_28062 = G__28079;
count__28046_28063 = G__28080;
i__28047_28064 = G__28081;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some.call(null,(function (p1__28083_SHARP_){
return goog.string.startsWith(p1__28083_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28084){
var map__28085 = p__28084;
var map__28085__$1 = (((((!((map__28085 == null))))?(((((map__28085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28085):map__28085);
var doc = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28087){
var map__28088 = p__28087;
var map__28088__$1 = (((((!((map__28088 == null))))?(((((map__28088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28088):map__28088);
var name = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__28090_28114 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__28091_28115 = null;
var count__28092_28116 = (0);
var i__28093_28117 = (0);
while(true){
if((i__28093_28117 < count__28092_28116)){
var vec__28100_28118 = cljs.core._nth.call(null,chunk__28091_28115,i__28093_28117);
var i_28119 = cljs.core.nth.call(null,vec__28100_28118,(0),null);
var param_28120 = cljs.core.nth.call(null,vec__28100_28118,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28120);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28121 = seq__28090_28114;
var G__28122 = chunk__28091_28115;
var G__28123 = count__28092_28116;
var G__28124 = (i__28093_28117 + (1));
seq__28090_28114 = G__28121;
chunk__28091_28115 = G__28122;
count__28092_28116 = G__28123;
i__28093_28117 = G__28124;
continue;
} else {
var temp__5735__auto___28125 = cljs.core.seq.call(null,seq__28090_28114);
if(temp__5735__auto___28125){
var seq__28090_28126__$1 = temp__5735__auto___28125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28090_28126__$1)){
var c__4556__auto___28127 = cljs.core.chunk_first.call(null,seq__28090_28126__$1);
var G__28128 = cljs.core.chunk_rest.call(null,seq__28090_28126__$1);
var G__28129 = c__4556__auto___28127;
var G__28130 = cljs.core.count.call(null,c__4556__auto___28127);
var G__28131 = (0);
seq__28090_28114 = G__28128;
chunk__28091_28115 = G__28129;
count__28092_28116 = G__28130;
i__28093_28117 = G__28131;
continue;
} else {
var vec__28103_28132 = cljs.core.first.call(null,seq__28090_28126__$1);
var i_28133 = cljs.core.nth.call(null,vec__28103_28132,(0),null);
var param_28134 = cljs.core.nth.call(null,vec__28103_28132,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28134);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28135 = cljs.core.next.call(null,seq__28090_28126__$1);
var G__28136 = null;
var G__28137 = (0);
var G__28138 = (0);
seq__28090_28114 = G__28135;
chunk__28091_28115 = G__28136;
count__28092_28116 = G__28137;
i__28093_28117 = G__28138;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28106_28139 = cljs.core.seq.call(null,params);
var chunk__28107_28140 = null;
var count__28108_28141 = (0);
var i__28109_28142 = (0);
while(true){
if((i__28109_28142 < count__28108_28141)){
var param_28143 = cljs.core._nth.call(null,chunk__28107_28140,i__28109_28142);
cljs.compiler.emit.call(null,param_28143);

if(cljs.core._EQ_.call(null,param_28143,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28144 = seq__28106_28139;
var G__28145 = chunk__28107_28140;
var G__28146 = count__28108_28141;
var G__28147 = (i__28109_28142 + (1));
seq__28106_28139 = G__28144;
chunk__28107_28140 = G__28145;
count__28108_28141 = G__28146;
i__28109_28142 = G__28147;
continue;
} else {
var temp__5735__auto___28148 = cljs.core.seq.call(null,seq__28106_28139);
if(temp__5735__auto___28148){
var seq__28106_28149__$1 = temp__5735__auto___28148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28106_28149__$1)){
var c__4556__auto___28150 = cljs.core.chunk_first.call(null,seq__28106_28149__$1);
var G__28151 = cljs.core.chunk_rest.call(null,seq__28106_28149__$1);
var G__28152 = c__4556__auto___28150;
var G__28153 = cljs.core.count.call(null,c__4556__auto___28150);
var G__28154 = (0);
seq__28106_28139 = G__28151;
chunk__28107_28140 = G__28152;
count__28108_28141 = G__28153;
i__28109_28142 = G__28154;
continue;
} else {
var param_28155 = cljs.core.first.call(null,seq__28106_28149__$1);
cljs.compiler.emit.call(null,param_28155);

if(cljs.core._EQ_.call(null,param_28155,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28156 = cljs.core.next.call(null,seq__28106_28149__$1);
var G__28157 = null;
var G__28158 = (0);
var G__28159 = (0);
seq__28106_28139 = G__28156;
chunk__28107_28140 = G__28157;
count__28108_28141 = G__28158;
i__28109_28142 = G__28159;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28110_28160 = cljs.core.seq.call(null,params);
var chunk__28111_28161 = null;
var count__28112_28162 = (0);
var i__28113_28163 = (0);
while(true){
if((i__28113_28163 < count__28112_28162)){
var param_28164 = cljs.core._nth.call(null,chunk__28111_28161,i__28113_28163);
cljs.compiler.emit.call(null,param_28164);

if(cljs.core._EQ_.call(null,param_28164,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28165 = seq__28110_28160;
var G__28166 = chunk__28111_28161;
var G__28167 = count__28112_28162;
var G__28168 = (i__28113_28163 + (1));
seq__28110_28160 = G__28165;
chunk__28111_28161 = G__28166;
count__28112_28162 = G__28167;
i__28113_28163 = G__28168;
continue;
} else {
var temp__5735__auto___28169 = cljs.core.seq.call(null,seq__28110_28160);
if(temp__5735__auto___28169){
var seq__28110_28170__$1 = temp__5735__auto___28169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28110_28170__$1)){
var c__4556__auto___28171 = cljs.core.chunk_first.call(null,seq__28110_28170__$1);
var G__28172 = cljs.core.chunk_rest.call(null,seq__28110_28170__$1);
var G__28173 = c__4556__auto___28171;
var G__28174 = cljs.core.count.call(null,c__4556__auto___28171);
var G__28175 = (0);
seq__28110_28160 = G__28172;
chunk__28111_28161 = G__28173;
count__28112_28162 = G__28174;
i__28113_28163 = G__28175;
continue;
} else {
var param_28176 = cljs.core.first.call(null,seq__28110_28170__$1);
cljs.compiler.emit.call(null,param_28176);

if(cljs.core._EQ_.call(null,param_28176,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28177 = cljs.core.next.call(null,seq__28110_28170__$1);
var G__28178 = null;
var G__28179 = (0);
var G__28180 = (0);
seq__28110_28160 = G__28177;
chunk__28111_28161 = G__28178;
count__28112_28162 = G__28179;
i__28113_28163 = G__28180;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__28181 = cljs.core.seq.call(null,params);
var chunk__28182 = null;
var count__28183 = (0);
var i__28184 = (0);
while(true){
if((i__28184 < count__28183)){
var param = cljs.core._nth.call(null,chunk__28182,i__28184);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28185 = seq__28181;
var G__28186 = chunk__28182;
var G__28187 = count__28183;
var G__28188 = (i__28184 + (1));
seq__28181 = G__28185;
chunk__28182 = G__28186;
count__28183 = G__28187;
i__28184 = G__28188;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28181);
if(temp__5735__auto__){
var seq__28181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28181__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28181__$1);
var G__28189 = cljs.core.chunk_rest.call(null,seq__28181__$1);
var G__28190 = c__4556__auto__;
var G__28191 = cljs.core.count.call(null,c__4556__auto__);
var G__28192 = (0);
seq__28181 = G__28189;
chunk__28182 = G__28190;
count__28183 = G__28191;
i__28184 = G__28192;
continue;
} else {
var param = cljs.core.first.call(null,seq__28181__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28193 = cljs.core.next.call(null,seq__28181__$1);
var G__28194 = null;
var G__28195 = (0);
var G__28196 = (0);
seq__28181 = G__28193;
chunk__28182 = G__28194;
count__28183 = G__28195;
i__28184 = G__28196;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__28197){
var map__28198 = p__28197;
var map__28198__$1 = (((((!((map__28198 == null))))?(((((map__28198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28198):map__28198);
var expr = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__28200){
var map__28201 = p__28200;
var map__28201__$1 = (((((!((map__28201 == null))))?(((((map__28201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28201):map__28201);
var f = map__28201__$1;
var expr = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_28211__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28212 = cljs.compiler.munge.call(null,name_28211__$1);
var delegate_name_28213 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_28212),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_28213," = function (");

var seq__28203_28214 = cljs.core.seq.call(null,params);
var chunk__28204_28215 = null;
var count__28205_28216 = (0);
var i__28206_28217 = (0);
while(true){
if((i__28206_28217 < count__28205_28216)){
var param_28218 = cljs.core._nth.call(null,chunk__28204_28215,i__28206_28217);
cljs.compiler.emit.call(null,param_28218);

if(cljs.core._EQ_.call(null,param_28218,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28219 = seq__28203_28214;
var G__28220 = chunk__28204_28215;
var G__28221 = count__28205_28216;
var G__28222 = (i__28206_28217 + (1));
seq__28203_28214 = G__28219;
chunk__28204_28215 = G__28220;
count__28205_28216 = G__28221;
i__28206_28217 = G__28222;
continue;
} else {
var temp__5735__auto___28223 = cljs.core.seq.call(null,seq__28203_28214);
if(temp__5735__auto___28223){
var seq__28203_28224__$1 = temp__5735__auto___28223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28203_28224__$1)){
var c__4556__auto___28225 = cljs.core.chunk_first.call(null,seq__28203_28224__$1);
var G__28226 = cljs.core.chunk_rest.call(null,seq__28203_28224__$1);
var G__28227 = c__4556__auto___28225;
var G__28228 = cljs.core.count.call(null,c__4556__auto___28225);
var G__28229 = (0);
seq__28203_28214 = G__28226;
chunk__28204_28215 = G__28227;
count__28205_28216 = G__28228;
i__28206_28217 = G__28229;
continue;
} else {
var param_28230 = cljs.core.first.call(null,seq__28203_28224__$1);
cljs.compiler.emit.call(null,param_28230);

if(cljs.core._EQ_.call(null,param_28230,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28231 = cljs.core.next.call(null,seq__28203_28224__$1);
var G__28232 = null;
var G__28233 = (0);
var G__28234 = (0);
seq__28203_28214 = G__28231;
chunk__28204_28215 = G__28232;
count__28205_28216 = G__28233;
i__28206_28217 = G__28234;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_28212," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_28235 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_28235,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_28213,".call(this,");

var seq__28207_28236 = cljs.core.seq.call(null,params);
var chunk__28208_28237 = null;
var count__28209_28238 = (0);
var i__28210_28239 = (0);
while(true){
if((i__28210_28239 < count__28209_28238)){
var param_28240 = cljs.core._nth.call(null,chunk__28208_28237,i__28210_28239);
cljs.compiler.emit.call(null,param_28240);

if(cljs.core._EQ_.call(null,param_28240,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28241 = seq__28207_28236;
var G__28242 = chunk__28208_28237;
var G__28243 = count__28209_28238;
var G__28244 = (i__28210_28239 + (1));
seq__28207_28236 = G__28241;
chunk__28208_28237 = G__28242;
count__28209_28238 = G__28243;
i__28210_28239 = G__28244;
continue;
} else {
var temp__5735__auto___28245 = cljs.core.seq.call(null,seq__28207_28236);
if(temp__5735__auto___28245){
var seq__28207_28246__$1 = temp__5735__auto___28245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28207_28246__$1)){
var c__4556__auto___28247 = cljs.core.chunk_first.call(null,seq__28207_28246__$1);
var G__28248 = cljs.core.chunk_rest.call(null,seq__28207_28246__$1);
var G__28249 = c__4556__auto___28247;
var G__28250 = cljs.core.count.call(null,c__4556__auto___28247);
var G__28251 = (0);
seq__28207_28236 = G__28248;
chunk__28208_28237 = G__28249;
count__28209_28238 = G__28250;
i__28210_28239 = G__28251;
continue;
} else {
var param_28252 = cljs.core.first.call(null,seq__28207_28246__$1);
cljs.compiler.emit.call(null,param_28252);

if(cljs.core._EQ_.call(null,param_28252,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28253 = cljs.core.next.call(null,seq__28207_28246__$1);
var G__28254 = null;
var G__28255 = (0);
var G__28256 = (0);
seq__28207_28236 = G__28253;
chunk__28208_28237 = G__28254;
count__28209_28238 = G__28255;
i__28210_28239 = G__28256;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_28212,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_28212,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_28211__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_28212,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_28213,";");

cljs.compiler.emitln.call(null,"return ",mname_28212,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__28260){
var map__28261 = p__28260;
var map__28261__$1 = (((((!((map__28261 == null))))?(((((map__28261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28261):map__28261);
var variadic = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__28257_SHARP_){
var and__4115__auto__ = p1__28257_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__28257_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_28314__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28315 = cljs.compiler.munge.call(null,name_28314__$1);
var maxparams_28316 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_28317 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_28315),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_28318 = cljs.core.sort_by.call(null,(function (p1__28258_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__28258_SHARP_)));
}),cljs.core.seq.call(null,mmap_28317));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_28315," = null;");

var seq__28263_28319 = cljs.core.seq.call(null,ms_28318);
var chunk__28264_28320 = null;
var count__28265_28321 = (0);
var i__28266_28322 = (0);
while(true){
if((i__28266_28322 < count__28265_28321)){
var vec__28273_28323 = cljs.core._nth.call(null,chunk__28264_28320,i__28266_28322);
var n_28324 = cljs.core.nth.call(null,vec__28273_28323,(0),null);
var meth_28325 = cljs.core.nth.call(null,vec__28273_28323,(1),null);
cljs.compiler.emits.call(null,"var ",n_28324," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28325))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_28325);
} else {
cljs.compiler.emit_fn_method.call(null,meth_28325);
}

cljs.compiler.emitln.call(null,";");


var G__28326 = seq__28263_28319;
var G__28327 = chunk__28264_28320;
var G__28328 = count__28265_28321;
var G__28329 = (i__28266_28322 + (1));
seq__28263_28319 = G__28326;
chunk__28264_28320 = G__28327;
count__28265_28321 = G__28328;
i__28266_28322 = G__28329;
continue;
} else {
var temp__5735__auto___28330 = cljs.core.seq.call(null,seq__28263_28319);
if(temp__5735__auto___28330){
var seq__28263_28331__$1 = temp__5735__auto___28330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28263_28331__$1)){
var c__4556__auto___28332 = cljs.core.chunk_first.call(null,seq__28263_28331__$1);
var G__28333 = cljs.core.chunk_rest.call(null,seq__28263_28331__$1);
var G__28334 = c__4556__auto___28332;
var G__28335 = cljs.core.count.call(null,c__4556__auto___28332);
var G__28336 = (0);
seq__28263_28319 = G__28333;
chunk__28264_28320 = G__28334;
count__28265_28321 = G__28335;
i__28266_28322 = G__28336;
continue;
} else {
var vec__28276_28337 = cljs.core.first.call(null,seq__28263_28331__$1);
var n_28338 = cljs.core.nth.call(null,vec__28276_28337,(0),null);
var meth_28339 = cljs.core.nth.call(null,vec__28276_28337,(1),null);
cljs.compiler.emits.call(null,"var ",n_28338," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28339))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_28339);
} else {
cljs.compiler.emit_fn_method.call(null,meth_28339);
}

cljs.compiler.emitln.call(null,";");


var G__28340 = cljs.core.next.call(null,seq__28263_28331__$1);
var G__28341 = null;
var G__28342 = (0);
var G__28343 = (0);
seq__28263_28319 = G__28340;
chunk__28264_28320 = G__28341;
count__28265_28321 = G__28342;
i__28266_28322 = G__28343;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_28315," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_28316),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_28316)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_28316));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__28279_28344 = cljs.core.seq.call(null,ms_28318);
var chunk__28280_28345 = null;
var count__28281_28346 = (0);
var i__28282_28347 = (0);
while(true){
if((i__28282_28347 < count__28281_28346)){
var vec__28289_28348 = cljs.core._nth.call(null,chunk__28280_28345,i__28282_28347);
var n_28349 = cljs.core.nth.call(null,vec__28289_28348,(0),null);
var meth_28350 = cljs.core.nth.call(null,vec__28289_28348,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28350))){
cljs.compiler.emitln.call(null,"default:");

var restarg_28351 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_28351," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_28352 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_28351," = new cljs.core.IndexedSeq(",a_28352,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_28349,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28316)),(((cljs.core.count.call(null,maxparams_28316) > (1)))?", ":null),restarg_28351,");");
} else {
var pcnt_28353 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28350));
cljs.compiler.emitln.call(null,"case ",pcnt_28353,":");

cljs.compiler.emitln.call(null,"return ",n_28349,".call(this",(((pcnt_28353 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_28353,maxparams_28316)),null,(1),null)),(2),null))),");");
}


var G__28354 = seq__28279_28344;
var G__28355 = chunk__28280_28345;
var G__28356 = count__28281_28346;
var G__28357 = (i__28282_28347 + (1));
seq__28279_28344 = G__28354;
chunk__28280_28345 = G__28355;
count__28281_28346 = G__28356;
i__28282_28347 = G__28357;
continue;
} else {
var temp__5735__auto___28358 = cljs.core.seq.call(null,seq__28279_28344);
if(temp__5735__auto___28358){
var seq__28279_28359__$1 = temp__5735__auto___28358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28279_28359__$1)){
var c__4556__auto___28360 = cljs.core.chunk_first.call(null,seq__28279_28359__$1);
var G__28361 = cljs.core.chunk_rest.call(null,seq__28279_28359__$1);
var G__28362 = c__4556__auto___28360;
var G__28363 = cljs.core.count.call(null,c__4556__auto___28360);
var G__28364 = (0);
seq__28279_28344 = G__28361;
chunk__28280_28345 = G__28362;
count__28281_28346 = G__28363;
i__28282_28347 = G__28364;
continue;
} else {
var vec__28292_28365 = cljs.core.first.call(null,seq__28279_28359__$1);
var n_28366 = cljs.core.nth.call(null,vec__28292_28365,(0),null);
var meth_28367 = cljs.core.nth.call(null,vec__28292_28365,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28367))){
cljs.compiler.emitln.call(null,"default:");

var restarg_28368 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_28368," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_28369 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_28368," = new cljs.core.IndexedSeq(",a_28369,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_28366,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28316)),(((cljs.core.count.call(null,maxparams_28316) > (1)))?", ":null),restarg_28368,");");
} else {
var pcnt_28370 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28367));
cljs.compiler.emitln.call(null,"case ",pcnt_28370,":");

cljs.compiler.emitln.call(null,"return ",n_28366,".call(this",(((pcnt_28370 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_28370,maxparams_28316)),null,(1),null)),(2),null))),");");
}


var G__28371 = cljs.core.next.call(null,seq__28279_28359__$1);
var G__28372 = null;
var G__28373 = (0);
var G__28374 = (0);
seq__28279_28344 = G__28371;
chunk__28280_28345 = G__28372;
count__28281_28346 = G__28373;
i__28282_28347 = G__28374;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_28375 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_28318)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_28375,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_28315,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_28315,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__28259_SHARP_){
var vec__28295 = p1__28259_SHARP_;
var n = cljs.core.nth.call(null,vec__28295,(0),null);
var m = cljs.core.nth.call(null,vec__28295,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_28318),".cljs$lang$applyTo;");
} else {
}

var seq__28298_28376 = cljs.core.seq.call(null,ms_28318);
var chunk__28299_28377 = null;
var count__28300_28378 = (0);
var i__28301_28379 = (0);
while(true){
if((i__28301_28379 < count__28300_28378)){
var vec__28308_28380 = cljs.core._nth.call(null,chunk__28299_28377,i__28301_28379);
var n_28381 = cljs.core.nth.call(null,vec__28308_28380,(0),null);
var meth_28382 = cljs.core.nth.call(null,vec__28308_28380,(1),null);
var c_28383 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28382));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28382))){
cljs.compiler.emitln.call(null,mname_28315,".cljs$core$IFn$_invoke$arity$variadic = ",n_28381,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28315,".cljs$core$IFn$_invoke$arity$",c_28383," = ",n_28381,";");
}


var G__28384 = seq__28298_28376;
var G__28385 = chunk__28299_28377;
var G__28386 = count__28300_28378;
var G__28387 = (i__28301_28379 + (1));
seq__28298_28376 = G__28384;
chunk__28299_28377 = G__28385;
count__28300_28378 = G__28386;
i__28301_28379 = G__28387;
continue;
} else {
var temp__5735__auto___28388 = cljs.core.seq.call(null,seq__28298_28376);
if(temp__5735__auto___28388){
var seq__28298_28389__$1 = temp__5735__auto___28388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28298_28389__$1)){
var c__4556__auto___28390 = cljs.core.chunk_first.call(null,seq__28298_28389__$1);
var G__28391 = cljs.core.chunk_rest.call(null,seq__28298_28389__$1);
var G__28392 = c__4556__auto___28390;
var G__28393 = cljs.core.count.call(null,c__4556__auto___28390);
var G__28394 = (0);
seq__28298_28376 = G__28391;
chunk__28299_28377 = G__28392;
count__28300_28378 = G__28393;
i__28301_28379 = G__28394;
continue;
} else {
var vec__28311_28395 = cljs.core.first.call(null,seq__28298_28389__$1);
var n_28396 = cljs.core.nth.call(null,vec__28311_28395,(0),null);
var meth_28397 = cljs.core.nth.call(null,vec__28311_28395,(1),null);
var c_28398 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28397));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_28397))){
cljs.compiler.emitln.call(null,mname_28315,".cljs$core$IFn$_invoke$arity$variadic = ",n_28396,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28315,".cljs$core$IFn$_invoke$arity$",c_28398," = ",n_28396,";");
}


var G__28399 = cljs.core.next.call(null,seq__28298_28389__$1);
var G__28400 = null;
var G__28401 = (0);
var G__28402 = (0);
seq__28298_28376 = G__28399;
chunk__28299_28377 = G__28400;
count__28300_28378 = G__28401;
i__28301_28379 = G__28402;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_28315,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__28403){
var map__28404 = p__28403;
var map__28404__$1 = (((((!((map__28404 == null))))?(((((map__28404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28404):map__28404);
var statements = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__28406_28410 = cljs.core.seq.call(null,statements);
var chunk__28407_28411 = null;
var count__28408_28412 = (0);
var i__28409_28413 = (0);
while(true){
if((i__28409_28413 < count__28408_28412)){
var s_28414 = cljs.core._nth.call(null,chunk__28407_28411,i__28409_28413);
cljs.compiler.emitln.call(null,s_28414);


var G__28415 = seq__28406_28410;
var G__28416 = chunk__28407_28411;
var G__28417 = count__28408_28412;
var G__28418 = (i__28409_28413 + (1));
seq__28406_28410 = G__28415;
chunk__28407_28411 = G__28416;
count__28408_28412 = G__28417;
i__28409_28413 = G__28418;
continue;
} else {
var temp__5735__auto___28419 = cljs.core.seq.call(null,seq__28406_28410);
if(temp__5735__auto___28419){
var seq__28406_28420__$1 = temp__5735__auto___28419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28406_28420__$1)){
var c__4556__auto___28421 = cljs.core.chunk_first.call(null,seq__28406_28420__$1);
var G__28422 = cljs.core.chunk_rest.call(null,seq__28406_28420__$1);
var G__28423 = c__4556__auto___28421;
var G__28424 = cljs.core.count.call(null,c__4556__auto___28421);
var G__28425 = (0);
seq__28406_28410 = G__28422;
chunk__28407_28411 = G__28423;
count__28408_28412 = G__28424;
i__28409_28413 = G__28425;
continue;
} else {
var s_28426 = cljs.core.first.call(null,seq__28406_28420__$1);
cljs.compiler.emitln.call(null,s_28426);


var G__28427 = cljs.core.next.call(null,seq__28406_28420__$1);
var G__28428 = null;
var G__28429 = (0);
var G__28430 = (0);
seq__28406_28410 = G__28427;
chunk__28407_28411 = G__28428;
count__28408_28412 = G__28429;
i__28409_28413 = G__28430;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__28431){
var map__28432 = p__28431;
var map__28432__$1 = (((((!((map__28432 == null))))?(((((map__28432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28432):map__28432);
var try$ = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__28434,is_loop){
var map__28435 = p__28434;
var map__28435__$1 = (((((!((map__28435 == null))))?(((((map__28435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28435):map__28435);
var expr = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__28437_28451 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__28438_28452 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__28438_28452);

try{var seq__28439_28453 = cljs.core.seq.call(null,bindings);
var chunk__28440_28454 = null;
var count__28441_28455 = (0);
var i__28442_28456 = (0);
while(true){
if((i__28442_28456 < count__28441_28455)){
var map__28447_28457 = cljs.core._nth.call(null,chunk__28440_28454,i__28442_28456);
var map__28447_28458__$1 = (((((!((map__28447_28457 == null))))?(((((map__28447_28457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28447_28457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28447_28457):map__28447_28457);
var binding_28459 = map__28447_28458__$1;
var init_28460 = cljs.core.get.call(null,map__28447_28458__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28459);

cljs.compiler.emitln.call(null," = ",init_28460,";");


var G__28461 = seq__28439_28453;
var G__28462 = chunk__28440_28454;
var G__28463 = count__28441_28455;
var G__28464 = (i__28442_28456 + (1));
seq__28439_28453 = G__28461;
chunk__28440_28454 = G__28462;
count__28441_28455 = G__28463;
i__28442_28456 = G__28464;
continue;
} else {
var temp__5735__auto___28465 = cljs.core.seq.call(null,seq__28439_28453);
if(temp__5735__auto___28465){
var seq__28439_28466__$1 = temp__5735__auto___28465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28439_28466__$1)){
var c__4556__auto___28467 = cljs.core.chunk_first.call(null,seq__28439_28466__$1);
var G__28468 = cljs.core.chunk_rest.call(null,seq__28439_28466__$1);
var G__28469 = c__4556__auto___28467;
var G__28470 = cljs.core.count.call(null,c__4556__auto___28467);
var G__28471 = (0);
seq__28439_28453 = G__28468;
chunk__28440_28454 = G__28469;
count__28441_28455 = G__28470;
i__28442_28456 = G__28471;
continue;
} else {
var map__28449_28472 = cljs.core.first.call(null,seq__28439_28466__$1);
var map__28449_28473__$1 = (((((!((map__28449_28472 == null))))?(((((map__28449_28472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28449_28472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28449_28472):map__28449_28472);
var binding_28474 = map__28449_28473__$1;
var init_28475 = cljs.core.get.call(null,map__28449_28473__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28474);

cljs.compiler.emitln.call(null," = ",init_28475,";");


var G__28476 = cljs.core.next.call(null,seq__28439_28466__$1);
var G__28477 = null;
var G__28478 = (0);
var G__28479 = (0);
seq__28439_28453 = G__28476;
chunk__28440_28454 = G__28477;
count__28441_28455 = G__28478;
i__28442_28456 = G__28479;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__28437_28451);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__28480){
var map__28481 = p__28480;
var map__28481__$1 = (((((!((map__28481 == null))))?(((((map__28481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28481):map__28481);
var frame = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___28483 = cljs.core.count.call(null,exprs);
var i_28484 = (0);
while(true){
if((i_28484 < n__4613__auto___28483)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_28484)," = ",exprs.call(null,i_28484),";");

var G__28485 = (i_28484 + (1));
i_28484 = G__28485;
continue;
} else {
}
break;
}

var n__4613__auto___28486 = cljs.core.count.call(null,exprs);
var i_28487 = (0);
while(true){
if((i_28487 < n__4613__auto___28486)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_28487))," = ",temps.call(null,i_28487),";");

var G__28488 = (i_28487 + (1));
i_28487 = G__28488;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__28489){
var map__28490 = p__28489;
var map__28490__$1 = (((((!((map__28490 == null))))?(((((map__28490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);
var expr = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__28492_28504 = cljs.core.seq.call(null,bindings);
var chunk__28493_28505 = null;
var count__28494_28506 = (0);
var i__28495_28507 = (0);
while(true){
if((i__28495_28507 < count__28494_28506)){
var map__28500_28508 = cljs.core._nth.call(null,chunk__28493_28505,i__28495_28507);
var map__28500_28509__$1 = (((((!((map__28500_28508 == null))))?(((((map__28500_28508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28500_28508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28500_28508):map__28500_28508);
var binding_28510 = map__28500_28509__$1;
var init_28511 = cljs.core.get.call(null,map__28500_28509__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28510)," = ",init_28511,";");


var G__28512 = seq__28492_28504;
var G__28513 = chunk__28493_28505;
var G__28514 = count__28494_28506;
var G__28515 = (i__28495_28507 + (1));
seq__28492_28504 = G__28512;
chunk__28493_28505 = G__28513;
count__28494_28506 = G__28514;
i__28495_28507 = G__28515;
continue;
} else {
var temp__5735__auto___28516 = cljs.core.seq.call(null,seq__28492_28504);
if(temp__5735__auto___28516){
var seq__28492_28517__$1 = temp__5735__auto___28516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28492_28517__$1)){
var c__4556__auto___28518 = cljs.core.chunk_first.call(null,seq__28492_28517__$1);
var G__28519 = cljs.core.chunk_rest.call(null,seq__28492_28517__$1);
var G__28520 = c__4556__auto___28518;
var G__28521 = cljs.core.count.call(null,c__4556__auto___28518);
var G__28522 = (0);
seq__28492_28504 = G__28519;
chunk__28493_28505 = G__28520;
count__28494_28506 = G__28521;
i__28495_28507 = G__28522;
continue;
} else {
var map__28502_28523 = cljs.core.first.call(null,seq__28492_28517__$1);
var map__28502_28524__$1 = (((((!((map__28502_28523 == null))))?(((((map__28502_28523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28502_28523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28502_28523):map__28502_28523);
var binding_28525 = map__28502_28524__$1;
var init_28526 = cljs.core.get.call(null,map__28502_28524__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28525)," = ",init_28526,";");


var G__28527 = cljs.core.next.call(null,seq__28492_28517__$1);
var G__28528 = null;
var G__28529 = (0);
var G__28530 = (0);
seq__28492_28504 = G__28527;
chunk__28493_28505 = G__28528;
count__28494_28506 = G__28529;
i__28495_28507 = G__28530;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__28533){
var map__28534 = p__28533;
var map__28534__$1 = (((((!((map__28534 == null))))?(((((map__28534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28534):map__28534);
var expr = map__28534__$1;
var f = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_.call(null,tag)))){
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag))){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__28536 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__28531_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28531_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__28532_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28532_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__28536,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__28536,(1),null);
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_28539 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_28539,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_28540 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_28540,args)),(((mfa_28540 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_28540,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4115__auto__;
}
})())){
var fprop_28541 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_28541," ? ",f__$1,fprop_28541,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_28541," ? ",f__$1,fprop_28541,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__28542){
var map__28543 = p__28542;
var map__28543__$1 = (((((!((map__28543 == null))))?(((((map__28543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28543):map__28543);
var ctor = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__28545){
var map__28546 = p__28545;
var map__28546__$1 = (((((!((map__28546 == null))))?(((((map__28546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28546):map__28546);
var target = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4126__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__28548 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28548__$1 = (((((!((map__28548 == null))))?(((((map__28548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28548):map__28548);
var options = cljs.core.get.call(null,map__28548__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__28548__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__28549 = options;
var map__28549__$1 = (((((!((map__28549 == null))))?(((((map__28549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28549):map__28549);
var target = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__28550 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__28555 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__28555__$1 = (((((!((map__28555 == null))))?(((((map__28555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28555):map__28555);
var node_libs = cljs.core.get.call(null,map__28555__$1,true);
var libs_to_load = cljs.core.get.call(null,map__28555__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__28550,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__28550,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__28557_28577 = cljs.core.seq.call(null,libs_to_load);
var chunk__28558_28578 = null;
var count__28559_28579 = (0);
var i__28560_28580 = (0);
while(true){
if((i__28560_28580 < count__28559_28579)){
var lib_28581 = cljs.core._nth.call(null,chunk__28558_28578,i__28560_28580);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28581)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28581),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28581),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28581),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28581),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28581,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28581),"');");
}

}
}
}


var G__28582 = seq__28557_28577;
var G__28583 = chunk__28558_28578;
var G__28584 = count__28559_28579;
var G__28585 = (i__28560_28580 + (1));
seq__28557_28577 = G__28582;
chunk__28558_28578 = G__28583;
count__28559_28579 = G__28584;
i__28560_28580 = G__28585;
continue;
} else {
var temp__5735__auto___28586 = cljs.core.seq.call(null,seq__28557_28577);
if(temp__5735__auto___28586){
var seq__28557_28587__$1 = temp__5735__auto___28586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28557_28587__$1)){
var c__4556__auto___28588 = cljs.core.chunk_first.call(null,seq__28557_28587__$1);
var G__28589 = cljs.core.chunk_rest.call(null,seq__28557_28587__$1);
var G__28590 = c__4556__auto___28588;
var G__28591 = cljs.core.count.call(null,c__4556__auto___28588);
var G__28592 = (0);
seq__28557_28577 = G__28589;
chunk__28558_28578 = G__28590;
count__28559_28579 = G__28591;
i__28560_28580 = G__28592;
continue;
} else {
var lib_28593 = cljs.core.first.call(null,seq__28557_28587__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28593)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28593),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28593),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28593),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28593),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28593,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28593),"');");
}

}
}
}


var G__28594 = cljs.core.next.call(null,seq__28557_28587__$1);
var G__28595 = null;
var G__28596 = (0);
var G__28597 = (0);
seq__28557_28577 = G__28594;
chunk__28558_28578 = G__28595;
count__28559_28579 = G__28596;
i__28560_28580 = G__28597;
continue;
}
} else {
}
}
break;
}

var seq__28561_28598 = cljs.core.seq.call(null,node_libs);
var chunk__28562_28599 = null;
var count__28563_28600 = (0);
var i__28564_28601 = (0);
while(true){
if((i__28564_28601 < count__28563_28600)){
var lib_28602 = cljs.core._nth.call(null,chunk__28562_28599,i__28564_28601);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28602)," = require('",lib_28602,"');");


var G__28603 = seq__28561_28598;
var G__28604 = chunk__28562_28599;
var G__28605 = count__28563_28600;
var G__28606 = (i__28564_28601 + (1));
seq__28561_28598 = G__28603;
chunk__28562_28599 = G__28604;
count__28563_28600 = G__28605;
i__28564_28601 = G__28606;
continue;
} else {
var temp__5735__auto___28607 = cljs.core.seq.call(null,seq__28561_28598);
if(temp__5735__auto___28607){
var seq__28561_28608__$1 = temp__5735__auto___28607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28561_28608__$1)){
var c__4556__auto___28609 = cljs.core.chunk_first.call(null,seq__28561_28608__$1);
var G__28610 = cljs.core.chunk_rest.call(null,seq__28561_28608__$1);
var G__28611 = c__4556__auto___28609;
var G__28612 = cljs.core.count.call(null,c__4556__auto___28609);
var G__28613 = (0);
seq__28561_28598 = G__28610;
chunk__28562_28599 = G__28611;
count__28563_28600 = G__28612;
i__28564_28601 = G__28613;
continue;
} else {
var lib_28614 = cljs.core.first.call(null,seq__28561_28608__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28614)," = require('",lib_28614,"');");


var G__28615 = cljs.core.next.call(null,seq__28561_28608__$1);
var G__28616 = null;
var G__28617 = (0);
var G__28618 = (0);
seq__28561_28598 = G__28615;
chunk__28562_28599 = G__28616;
count__28563_28600 = G__28617;
i__28564_28601 = G__28618;
continue;
}
} else {
}
}
break;
}

var seq__28565_28619 = cljs.core.seq.call(null,global_exports_libs);
var chunk__28566_28620 = null;
var count__28567_28621 = (0);
var i__28568_28622 = (0);
while(true){
if((i__28568_28622 < count__28567_28621)){
var lib_28623 = cljs.core._nth.call(null,chunk__28566_28620,i__28568_28622);
var map__28573_28624 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28623));
var map__28573_28625__$1 = (((((!((map__28573_28624 == null))))?(((((map__28573_28624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28573_28624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28573_28624):map__28573_28624);
var global_exports_28626 = cljs.core.get.call(null,map__28573_28625__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28626,lib_28623);


var G__28627 = seq__28565_28619;
var G__28628 = chunk__28566_28620;
var G__28629 = count__28567_28621;
var G__28630 = (i__28568_28622 + (1));
seq__28565_28619 = G__28627;
chunk__28566_28620 = G__28628;
count__28567_28621 = G__28629;
i__28568_28622 = G__28630;
continue;
} else {
var temp__5735__auto___28631 = cljs.core.seq.call(null,seq__28565_28619);
if(temp__5735__auto___28631){
var seq__28565_28632__$1 = temp__5735__auto___28631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28565_28632__$1)){
var c__4556__auto___28633 = cljs.core.chunk_first.call(null,seq__28565_28632__$1);
var G__28634 = cljs.core.chunk_rest.call(null,seq__28565_28632__$1);
var G__28635 = c__4556__auto___28633;
var G__28636 = cljs.core.count.call(null,c__4556__auto___28633);
var G__28637 = (0);
seq__28565_28619 = G__28634;
chunk__28566_28620 = G__28635;
count__28567_28621 = G__28636;
i__28568_28622 = G__28637;
continue;
} else {
var lib_28638 = cljs.core.first.call(null,seq__28565_28632__$1);
var map__28575_28639 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28638));
var map__28575_28640__$1 = (((((!((map__28575_28639 == null))))?(((((map__28575_28639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28575_28639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28575_28639):map__28575_28639);
var global_exports_28641 = cljs.core.get.call(null,map__28575_28640__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28641,lib_28638);


var G__28642 = cljs.core.next.call(null,seq__28565_28632__$1);
var G__28643 = null;
var G__28644 = (0);
var G__28645 = (0);
seq__28565_28619 = G__28642;
chunk__28566_28620 = G__28643;
count__28567_28621 = G__28644;
i__28568_28622 = G__28645;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__28646){
var map__28647 = p__28646;
var map__28647__$1 = (((((!((map__28647 == null))))?(((((map__28647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28647):map__28647);
var name = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__28649){
var map__28650 = p__28649;
var map__28650__$1 = (((((!((map__28650 == null))))?(((((map__28650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);
var name = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__28652){
var map__28653 = p__28652;
var map__28653__$1 = (((((!((map__28653 == null))))?(((((map__28653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28653):map__28653);
var t = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28655_28679 = cljs.core.seq.call(null,protocols);
var chunk__28656_28680 = null;
var count__28657_28681 = (0);
var i__28658_28682 = (0);
while(true){
if((i__28658_28682 < count__28657_28681)){
var protocol_28683 = cljs.core._nth.call(null,chunk__28656_28680,i__28658_28682);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28683)),"}");


var G__28684 = seq__28655_28679;
var G__28685 = chunk__28656_28680;
var G__28686 = count__28657_28681;
var G__28687 = (i__28658_28682 + (1));
seq__28655_28679 = G__28684;
chunk__28656_28680 = G__28685;
count__28657_28681 = G__28686;
i__28658_28682 = G__28687;
continue;
} else {
var temp__5735__auto___28688 = cljs.core.seq.call(null,seq__28655_28679);
if(temp__5735__auto___28688){
var seq__28655_28689__$1 = temp__5735__auto___28688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28655_28689__$1)){
var c__4556__auto___28690 = cljs.core.chunk_first.call(null,seq__28655_28689__$1);
var G__28691 = cljs.core.chunk_rest.call(null,seq__28655_28689__$1);
var G__28692 = c__4556__auto___28690;
var G__28693 = cljs.core.count.call(null,c__4556__auto___28690);
var G__28694 = (0);
seq__28655_28679 = G__28691;
chunk__28656_28680 = G__28692;
count__28657_28681 = G__28693;
i__28658_28682 = G__28694;
continue;
} else {
var protocol_28695 = cljs.core.first.call(null,seq__28655_28689__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28695)),"}");


var G__28696 = cljs.core.next.call(null,seq__28655_28689__$1);
var G__28697 = null;
var G__28698 = (0);
var G__28699 = (0);
seq__28655_28679 = G__28696;
chunk__28656_28680 = G__28697;
count__28657_28681 = G__28698;
i__28658_28682 = G__28699;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28659_28700 = cljs.core.seq.call(null,fields__$1);
var chunk__28660_28701 = null;
var count__28661_28702 = (0);
var i__28662_28703 = (0);
while(true){
if((i__28662_28703 < count__28661_28702)){
var fld_28704 = cljs.core._nth.call(null,chunk__28660_28701,i__28662_28703);
cljs.compiler.emitln.call(null,"this.",fld_28704," = ",fld_28704,";");


var G__28705 = seq__28659_28700;
var G__28706 = chunk__28660_28701;
var G__28707 = count__28661_28702;
var G__28708 = (i__28662_28703 + (1));
seq__28659_28700 = G__28705;
chunk__28660_28701 = G__28706;
count__28661_28702 = G__28707;
i__28662_28703 = G__28708;
continue;
} else {
var temp__5735__auto___28709 = cljs.core.seq.call(null,seq__28659_28700);
if(temp__5735__auto___28709){
var seq__28659_28710__$1 = temp__5735__auto___28709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28659_28710__$1)){
var c__4556__auto___28711 = cljs.core.chunk_first.call(null,seq__28659_28710__$1);
var G__28712 = cljs.core.chunk_rest.call(null,seq__28659_28710__$1);
var G__28713 = c__4556__auto___28711;
var G__28714 = cljs.core.count.call(null,c__4556__auto___28711);
var G__28715 = (0);
seq__28659_28700 = G__28712;
chunk__28660_28701 = G__28713;
count__28661_28702 = G__28714;
i__28662_28703 = G__28715;
continue;
} else {
var fld_28716 = cljs.core.first.call(null,seq__28659_28710__$1);
cljs.compiler.emitln.call(null,"this.",fld_28716," = ",fld_28716,";");


var G__28717 = cljs.core.next.call(null,seq__28659_28710__$1);
var G__28718 = null;
var G__28719 = (0);
var G__28720 = (0);
seq__28659_28700 = G__28717;
chunk__28660_28701 = G__28718;
count__28661_28702 = G__28719;
i__28662_28703 = G__28720;
continue;
}
} else {
}
}
break;
}

var seq__28663_28721 = cljs.core.seq.call(null,pmasks);
var chunk__28664_28722 = null;
var count__28665_28723 = (0);
var i__28666_28724 = (0);
while(true){
if((i__28666_28724 < count__28665_28723)){
var vec__28673_28725 = cljs.core._nth.call(null,chunk__28664_28722,i__28666_28724);
var pno_28726 = cljs.core.nth.call(null,vec__28673_28725,(0),null);
var pmask_28727 = cljs.core.nth.call(null,vec__28673_28725,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28726,"$ = ",pmask_28727,";");


var G__28728 = seq__28663_28721;
var G__28729 = chunk__28664_28722;
var G__28730 = count__28665_28723;
var G__28731 = (i__28666_28724 + (1));
seq__28663_28721 = G__28728;
chunk__28664_28722 = G__28729;
count__28665_28723 = G__28730;
i__28666_28724 = G__28731;
continue;
} else {
var temp__5735__auto___28732 = cljs.core.seq.call(null,seq__28663_28721);
if(temp__5735__auto___28732){
var seq__28663_28733__$1 = temp__5735__auto___28732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28663_28733__$1)){
var c__4556__auto___28734 = cljs.core.chunk_first.call(null,seq__28663_28733__$1);
var G__28735 = cljs.core.chunk_rest.call(null,seq__28663_28733__$1);
var G__28736 = c__4556__auto___28734;
var G__28737 = cljs.core.count.call(null,c__4556__auto___28734);
var G__28738 = (0);
seq__28663_28721 = G__28735;
chunk__28664_28722 = G__28736;
count__28665_28723 = G__28737;
i__28666_28724 = G__28738;
continue;
} else {
var vec__28676_28739 = cljs.core.first.call(null,seq__28663_28733__$1);
var pno_28740 = cljs.core.nth.call(null,vec__28676_28739,(0),null);
var pmask_28741 = cljs.core.nth.call(null,vec__28676_28739,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28740,"$ = ",pmask_28741,";");


var G__28742 = cljs.core.next.call(null,seq__28663_28733__$1);
var G__28743 = null;
var G__28744 = (0);
var G__28745 = (0);
seq__28663_28721 = G__28742;
chunk__28664_28722 = G__28743;
count__28665_28723 = G__28744;
i__28666_28724 = G__28745;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__28746){
var map__28747 = p__28746;
var map__28747__$1 = (((((!((map__28747 == null))))?(((((map__28747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);
var t = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28749_28773 = cljs.core.seq.call(null,protocols);
var chunk__28750_28774 = null;
var count__28751_28775 = (0);
var i__28752_28776 = (0);
while(true){
if((i__28752_28776 < count__28751_28775)){
var protocol_28777 = cljs.core._nth.call(null,chunk__28750_28774,i__28752_28776);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28777)),"}");


var G__28778 = seq__28749_28773;
var G__28779 = chunk__28750_28774;
var G__28780 = count__28751_28775;
var G__28781 = (i__28752_28776 + (1));
seq__28749_28773 = G__28778;
chunk__28750_28774 = G__28779;
count__28751_28775 = G__28780;
i__28752_28776 = G__28781;
continue;
} else {
var temp__5735__auto___28782 = cljs.core.seq.call(null,seq__28749_28773);
if(temp__5735__auto___28782){
var seq__28749_28783__$1 = temp__5735__auto___28782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28749_28783__$1)){
var c__4556__auto___28784 = cljs.core.chunk_first.call(null,seq__28749_28783__$1);
var G__28785 = cljs.core.chunk_rest.call(null,seq__28749_28783__$1);
var G__28786 = c__4556__auto___28784;
var G__28787 = cljs.core.count.call(null,c__4556__auto___28784);
var G__28788 = (0);
seq__28749_28773 = G__28785;
chunk__28750_28774 = G__28786;
count__28751_28775 = G__28787;
i__28752_28776 = G__28788;
continue;
} else {
var protocol_28789 = cljs.core.first.call(null,seq__28749_28783__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28789)),"}");


var G__28790 = cljs.core.next.call(null,seq__28749_28783__$1);
var G__28791 = null;
var G__28792 = (0);
var G__28793 = (0);
seq__28749_28773 = G__28790;
chunk__28750_28774 = G__28791;
count__28751_28775 = G__28792;
i__28752_28776 = G__28793;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28753_28794 = cljs.core.seq.call(null,fields__$1);
var chunk__28754_28795 = null;
var count__28755_28796 = (0);
var i__28756_28797 = (0);
while(true){
if((i__28756_28797 < count__28755_28796)){
var fld_28798 = cljs.core._nth.call(null,chunk__28754_28795,i__28756_28797);
cljs.compiler.emitln.call(null,"this.",fld_28798," = ",fld_28798,";");


var G__28799 = seq__28753_28794;
var G__28800 = chunk__28754_28795;
var G__28801 = count__28755_28796;
var G__28802 = (i__28756_28797 + (1));
seq__28753_28794 = G__28799;
chunk__28754_28795 = G__28800;
count__28755_28796 = G__28801;
i__28756_28797 = G__28802;
continue;
} else {
var temp__5735__auto___28803 = cljs.core.seq.call(null,seq__28753_28794);
if(temp__5735__auto___28803){
var seq__28753_28804__$1 = temp__5735__auto___28803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28753_28804__$1)){
var c__4556__auto___28805 = cljs.core.chunk_first.call(null,seq__28753_28804__$1);
var G__28806 = cljs.core.chunk_rest.call(null,seq__28753_28804__$1);
var G__28807 = c__4556__auto___28805;
var G__28808 = cljs.core.count.call(null,c__4556__auto___28805);
var G__28809 = (0);
seq__28753_28794 = G__28806;
chunk__28754_28795 = G__28807;
count__28755_28796 = G__28808;
i__28756_28797 = G__28809;
continue;
} else {
var fld_28810 = cljs.core.first.call(null,seq__28753_28804__$1);
cljs.compiler.emitln.call(null,"this.",fld_28810," = ",fld_28810,";");


var G__28811 = cljs.core.next.call(null,seq__28753_28804__$1);
var G__28812 = null;
var G__28813 = (0);
var G__28814 = (0);
seq__28753_28794 = G__28811;
chunk__28754_28795 = G__28812;
count__28755_28796 = G__28813;
i__28756_28797 = G__28814;
continue;
}
} else {
}
}
break;
}

var seq__28757_28815 = cljs.core.seq.call(null,pmasks);
var chunk__28758_28816 = null;
var count__28759_28817 = (0);
var i__28760_28818 = (0);
while(true){
if((i__28760_28818 < count__28759_28817)){
var vec__28767_28819 = cljs.core._nth.call(null,chunk__28758_28816,i__28760_28818);
var pno_28820 = cljs.core.nth.call(null,vec__28767_28819,(0),null);
var pmask_28821 = cljs.core.nth.call(null,vec__28767_28819,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28820,"$ = ",pmask_28821,";");


var G__28822 = seq__28757_28815;
var G__28823 = chunk__28758_28816;
var G__28824 = count__28759_28817;
var G__28825 = (i__28760_28818 + (1));
seq__28757_28815 = G__28822;
chunk__28758_28816 = G__28823;
count__28759_28817 = G__28824;
i__28760_28818 = G__28825;
continue;
} else {
var temp__5735__auto___28826 = cljs.core.seq.call(null,seq__28757_28815);
if(temp__5735__auto___28826){
var seq__28757_28827__$1 = temp__5735__auto___28826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28757_28827__$1)){
var c__4556__auto___28828 = cljs.core.chunk_first.call(null,seq__28757_28827__$1);
var G__28829 = cljs.core.chunk_rest.call(null,seq__28757_28827__$1);
var G__28830 = c__4556__auto___28828;
var G__28831 = cljs.core.count.call(null,c__4556__auto___28828);
var G__28832 = (0);
seq__28757_28815 = G__28829;
chunk__28758_28816 = G__28830;
count__28759_28817 = G__28831;
i__28760_28818 = G__28832;
continue;
} else {
var vec__28770_28833 = cljs.core.first.call(null,seq__28757_28827__$1);
var pno_28834 = cljs.core.nth.call(null,vec__28770_28833,(0),null);
var pmask_28835 = cljs.core.nth.call(null,vec__28770_28833,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28834,"$ = ",pmask_28835,";");


var G__28836 = cljs.core.next.call(null,seq__28757_28827__$1);
var G__28837 = null;
var G__28838 = (0);
var G__28839 = (0);
seq__28757_28815 = G__28836;
chunk__28758_28816 = G__28837;
count__28759_28817 = G__28838;
i__28760_28818 = G__28839;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__28840){
var map__28841 = p__28840;
var map__28841__$1 = (((((!((map__28841 == null))))?(((((map__28841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28841):map__28841);
var target = cljs.core.get.call(null,map__28841__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__28841__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__28841__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__28841__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28841__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__28843){
var map__28844 = p__28843;
var map__28844__$1 = (((((!((map__28844 == null))))?(((((map__28844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28844):map__28844);
var op = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__27638__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27638__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__28850 = cljs.core.seq.call(null,table);
var chunk__28851 = null;
var count__28852 = (0);
var i__28853 = (0);
while(true){
if((i__28853 < count__28852)){
var vec__28860 = cljs.core._nth.call(null,chunk__28851,i__28853);
var sym = cljs.core.nth.call(null,vec__28860,(0),null);
var value = cljs.core.nth.call(null,vec__28860,(1),null);
var ns_28866 = cljs.core.namespace.call(null,sym);
var name_28867 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__28868 = seq__28850;
var G__28869 = chunk__28851;
var G__28870 = count__28852;
var G__28871 = (i__28853 + (1));
seq__28850 = G__28868;
chunk__28851 = G__28869;
count__28852 = G__28870;
i__28853 = G__28871;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28850);
if(temp__5735__auto__){
var seq__28850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28850__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28850__$1);
var G__28872 = cljs.core.chunk_rest.call(null,seq__28850__$1);
var G__28873 = c__4556__auto__;
var G__28874 = cljs.core.count.call(null,c__4556__auto__);
var G__28875 = (0);
seq__28850 = G__28872;
chunk__28851 = G__28873;
count__28852 = G__28874;
i__28853 = G__28875;
continue;
} else {
var vec__28863 = cljs.core.first.call(null,seq__28850__$1);
var sym = cljs.core.nth.call(null,vec__28863,(0),null);
var value = cljs.core.nth.call(null,vec__28863,(1),null);
var ns_28876 = cljs.core.namespace.call(null,sym);
var name_28877 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__28878 = cljs.core.next.call(null,seq__28850__$1);
var G__28879 = null;
var G__28880 = (0);
var G__28881 = (0);
seq__28850 = G__28878;
chunk__28851 = G__28879;
count__28852 = G__28880;
i__28853 = G__28881;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__28883 = arguments.length;
switch (G__28883) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_28888 = cljs.core.first.call(null,ks);
var vec__28884_28889 = cljs.core.conj.call(null,prefix,k_28888);
var top_28890 = cljs.core.nth.call(null,vec__28884_28889,(0),null);
var prefix_SINGLEQUOTE__28891 = vec__28884_28889;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_28888)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__28891) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_28890)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_28890)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28891)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_28890);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28891)),";");
}
} else {
}

var m_28892 = cljs.core.get.call(null,externs,k_28888);
if(cljs.core.empty_QMARK_.call(null,m_28892)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__28891,m_28892,top_level,known_externs);
}

var G__28893 = cljs.core.next.call(null,ks);
ks = G__28893;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map?rel=1626961177436

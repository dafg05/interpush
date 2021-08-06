// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32002){
var map__32003 = p__32002;
var map__32003__$1 = (((((!((map__32003 == null))))?(((((map__32003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32003):map__32003);
var m = map__32003__$1;
var n = cljs.core.get.call(null,map__32003__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32005_32037 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32006_32038 = null;
var count__32007_32039 = (0);
var i__32008_32040 = (0);
while(true){
if((i__32008_32040 < count__32007_32039)){
var f_32041 = cljs.core._nth.call(null,chunk__32006_32038,i__32008_32040);
cljs.core.println.call(null,"  ",f_32041);


var G__32042 = seq__32005_32037;
var G__32043 = chunk__32006_32038;
var G__32044 = count__32007_32039;
var G__32045 = (i__32008_32040 + (1));
seq__32005_32037 = G__32042;
chunk__32006_32038 = G__32043;
count__32007_32039 = G__32044;
i__32008_32040 = G__32045;
continue;
} else {
var temp__5735__auto___32046 = cljs.core.seq.call(null,seq__32005_32037);
if(temp__5735__auto___32046){
var seq__32005_32047__$1 = temp__5735__auto___32046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32005_32047__$1)){
var c__4556__auto___32048 = cljs.core.chunk_first.call(null,seq__32005_32047__$1);
var G__32049 = cljs.core.chunk_rest.call(null,seq__32005_32047__$1);
var G__32050 = c__4556__auto___32048;
var G__32051 = cljs.core.count.call(null,c__4556__auto___32048);
var G__32052 = (0);
seq__32005_32037 = G__32049;
chunk__32006_32038 = G__32050;
count__32007_32039 = G__32051;
i__32008_32040 = G__32052;
continue;
} else {
var f_32053 = cljs.core.first.call(null,seq__32005_32047__$1);
cljs.core.println.call(null,"  ",f_32053);


var G__32054 = cljs.core.next.call(null,seq__32005_32047__$1);
var G__32055 = null;
var G__32056 = (0);
var G__32057 = (0);
seq__32005_32037 = G__32054;
chunk__32006_32038 = G__32055;
count__32007_32039 = G__32056;
i__32008_32040 = G__32057;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32058 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32058);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32058)))?cljs.core.second.call(null,arglists_32058):arglists_32058));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32009_32059 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32010_32060 = null;
var count__32011_32061 = (0);
var i__32012_32062 = (0);
while(true){
if((i__32012_32062 < count__32011_32061)){
var vec__32023_32063 = cljs.core._nth.call(null,chunk__32010_32060,i__32012_32062);
var name_32064 = cljs.core.nth.call(null,vec__32023_32063,(0),null);
var map__32026_32065 = cljs.core.nth.call(null,vec__32023_32063,(1),null);
var map__32026_32066__$1 = (((((!((map__32026_32065 == null))))?(((((map__32026_32065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32026_32065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32026_32065):map__32026_32065);
var doc_32067 = cljs.core.get.call(null,map__32026_32066__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32068 = cljs.core.get.call(null,map__32026_32066__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32064);

cljs.core.println.call(null," ",arglists_32068);

if(cljs.core.truth_(doc_32067)){
cljs.core.println.call(null," ",doc_32067);
} else {
}


var G__32069 = seq__32009_32059;
var G__32070 = chunk__32010_32060;
var G__32071 = count__32011_32061;
var G__32072 = (i__32012_32062 + (1));
seq__32009_32059 = G__32069;
chunk__32010_32060 = G__32070;
count__32011_32061 = G__32071;
i__32012_32062 = G__32072;
continue;
} else {
var temp__5735__auto___32073 = cljs.core.seq.call(null,seq__32009_32059);
if(temp__5735__auto___32073){
var seq__32009_32074__$1 = temp__5735__auto___32073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32009_32074__$1)){
var c__4556__auto___32075 = cljs.core.chunk_first.call(null,seq__32009_32074__$1);
var G__32076 = cljs.core.chunk_rest.call(null,seq__32009_32074__$1);
var G__32077 = c__4556__auto___32075;
var G__32078 = cljs.core.count.call(null,c__4556__auto___32075);
var G__32079 = (0);
seq__32009_32059 = G__32076;
chunk__32010_32060 = G__32077;
count__32011_32061 = G__32078;
i__32012_32062 = G__32079;
continue;
} else {
var vec__32028_32080 = cljs.core.first.call(null,seq__32009_32074__$1);
var name_32081 = cljs.core.nth.call(null,vec__32028_32080,(0),null);
var map__32031_32082 = cljs.core.nth.call(null,vec__32028_32080,(1),null);
var map__32031_32083__$1 = (((((!((map__32031_32082 == null))))?(((((map__32031_32082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32031_32082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32031_32082):map__32031_32082);
var doc_32084 = cljs.core.get.call(null,map__32031_32083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32085 = cljs.core.get.call(null,map__32031_32083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32081);

cljs.core.println.call(null," ",arglists_32085);

if(cljs.core.truth_(doc_32084)){
cljs.core.println.call(null," ",doc_32084);
} else {
}


var G__32086 = cljs.core.next.call(null,seq__32009_32074__$1);
var G__32087 = null;
var G__32088 = (0);
var G__32089 = (0);
seq__32009_32059 = G__32086;
chunk__32010_32060 = G__32087;
count__32011_32061 = G__32088;
i__32012_32062 = G__32089;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__32033 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32034 = null;
var count__32035 = (0);
var i__32036 = (0);
while(true){
if((i__32036 < count__32035)){
var role = cljs.core._nth.call(null,chunk__32034,i__32036);
var temp__5735__auto___32090__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32090__$1)){
var spec_32091 = temp__5735__auto___32090__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32091));
} else {
}


var G__32092 = seq__32033;
var G__32093 = chunk__32034;
var G__32094 = count__32035;
var G__32095 = (i__32036 + (1));
seq__32033 = G__32092;
chunk__32034 = G__32093;
count__32035 = G__32094;
i__32036 = G__32095;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__32033);
if(temp__5735__auto____$1){
var seq__32033__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32033__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32033__$1);
var G__32096 = cljs.core.chunk_rest.call(null,seq__32033__$1);
var G__32097 = c__4556__auto__;
var G__32098 = cljs.core.count.call(null,c__4556__auto__);
var G__32099 = (0);
seq__32033 = G__32096;
chunk__32034 = G__32097;
count__32035 = G__32098;
i__32036 = G__32099;
continue;
} else {
var role = cljs.core.first.call(null,seq__32033__$1);
var temp__5735__auto___32100__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32100__$2)){
var spec_32101 = temp__5735__auto___32100__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32101));
} else {
}


var G__32102 = cljs.core.next.call(null,seq__32033__$1);
var G__32103 = null;
var G__32104 = (0);
var G__32105 = (0);
seq__32033 = G__32102;
chunk__32034 = G__32103;
count__32035 = G__32104;
i__32036 = G__32105;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32106 = cljs.core.conj.call(null,via,t);
var G__32107 = cljs.core.ex_cause.call(null,t);
via = G__32106;
t = G__32107;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32110 = datafied_throwable;
var map__32110__$1 = (((((!((map__32110 == null))))?(((((map__32110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32110):map__32110);
var via = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32111 = cljs.core.last.call(null,via);
var map__32111__$1 = (((((!((map__32111 == null))))?(((((map__32111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32111):map__32111);
var type = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32112 = data;
var map__32112__$1 = (((((!((map__32112 == null))))?(((((map__32112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32112):map__32112);
var problems = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32113 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32113__$1 = (((((!((map__32113 == null))))?(((((map__32113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);
var top_data = map__32113__$1;
var source = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32118 = phase;
var G__32118__$1 = (((G__32118 instanceof cljs.core.Keyword))?G__32118.fqn:null);
switch (G__32118__$1) {
case "read-source":
var map__32119 = data;
var map__32119__$1 = (((((!((map__32119 == null))))?(((((map__32119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32119):map__32119);
var line = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32121 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32121__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32121,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32121);
var G__32121__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32121__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32121__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32121__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32121__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32122 = top_data;
var G__32122__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32122,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32122);
var G__32122__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32122__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32122__$1);
var G__32122__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32122__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32122__$2);
var G__32122__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32122__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32122__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32122__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32122__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32123 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32123,(0),null);
var method = cljs.core.nth.call(null,vec__32123,(1),null);
var file = cljs.core.nth.call(null,vec__32123,(2),null);
var line = cljs.core.nth.call(null,vec__32123,(3),null);
var G__32126 = top_data;
var G__32126__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32126,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32126);
var G__32126__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32126__$1);
var G__32126__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__32126__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32126__$2);
var G__32126__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32126__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32126__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32126__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32126__$4;
}

break;
case "execution":
var vec__32127 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32127,(0),null);
var method = cljs.core.nth.call(null,vec__32127,(1),null);
var file = cljs.core.nth.call(null,vec__32127,(2),null);
var line = cljs.core.nth.call(null,vec__32127,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32109_SHARP_){
var or__4126__auto__ = (p1__32109_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32109_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__32130 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32130__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32130,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32130);
var G__32130__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32130__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32130__$1);
var G__32130__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__32130__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32130__$2);
var G__32130__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32130__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32130__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32130__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32130__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32118__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32134){
var map__32135 = p__32134;
var map__32135__$1 = (((((!((map__32135 == null))))?(((((map__32135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32135):map__32135);
var triage_data = map__32135__$1;
var phase = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32137 = phase;
var G__32137__$1 = (((G__32137 instanceof cljs.core.Keyword))?G__32137.fqn:null);
switch (G__32137__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32138_32147 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32139_32148 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32140_32149 = true;
var _STAR_print_fn_STAR__temp_val__32141_32150 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32140_32149);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32141_32150);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32132_SHARP_){
return cljs.core.dissoc.call(null,p1__32132_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32139_32148);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32138_32147);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32142_32151 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32143_32152 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32144_32153 = true;
var _STAR_print_fn_STAR__temp_val__32145_32154 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32144_32153);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32145_32154);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32133_SHARP_){
return cljs.core.dissoc.call(null,p1__32133_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32143_32152);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32142_32151);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32137__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1627930537798

// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37617){
var map__37618 = p__37617;
var map__37618__$1 = (((((!((map__37618 == null))))?(((((map__37618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37618):map__37618);
var m = map__37618__$1;
var n = cljs.core.get.call(null,map__37618__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37618__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37620_37652 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37621_37653 = null;
var count__37622_37654 = (0);
var i__37623_37655 = (0);
while(true){
if((i__37623_37655 < count__37622_37654)){
var f_37656 = cljs.core._nth.call(null,chunk__37621_37653,i__37623_37655);
cljs.core.println.call(null,"  ",f_37656);


var G__37657 = seq__37620_37652;
var G__37658 = chunk__37621_37653;
var G__37659 = count__37622_37654;
var G__37660 = (i__37623_37655 + (1));
seq__37620_37652 = G__37657;
chunk__37621_37653 = G__37658;
count__37622_37654 = G__37659;
i__37623_37655 = G__37660;
continue;
} else {
var temp__5735__auto___37661 = cljs.core.seq.call(null,seq__37620_37652);
if(temp__5735__auto___37661){
var seq__37620_37662__$1 = temp__5735__auto___37661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37620_37662__$1)){
var c__4556__auto___37663 = cljs.core.chunk_first.call(null,seq__37620_37662__$1);
var G__37664 = cljs.core.chunk_rest.call(null,seq__37620_37662__$1);
var G__37665 = c__4556__auto___37663;
var G__37666 = cljs.core.count.call(null,c__4556__auto___37663);
var G__37667 = (0);
seq__37620_37652 = G__37664;
chunk__37621_37653 = G__37665;
count__37622_37654 = G__37666;
i__37623_37655 = G__37667;
continue;
} else {
var f_37668 = cljs.core.first.call(null,seq__37620_37662__$1);
cljs.core.println.call(null,"  ",f_37668);


var G__37669 = cljs.core.next.call(null,seq__37620_37662__$1);
var G__37670 = null;
var G__37671 = (0);
var G__37672 = (0);
seq__37620_37652 = G__37669;
chunk__37621_37653 = G__37670;
count__37622_37654 = G__37671;
i__37623_37655 = G__37672;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37673 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37673);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37673)))?cljs.core.second.call(null,arglists_37673):arglists_37673));
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
var seq__37624_37674 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37625_37675 = null;
var count__37626_37676 = (0);
var i__37627_37677 = (0);
while(true){
if((i__37627_37677 < count__37626_37676)){
var vec__37638_37678 = cljs.core._nth.call(null,chunk__37625_37675,i__37627_37677);
var name_37679 = cljs.core.nth.call(null,vec__37638_37678,(0),null);
var map__37641_37680 = cljs.core.nth.call(null,vec__37638_37678,(1),null);
var map__37641_37681__$1 = (((((!((map__37641_37680 == null))))?(((((map__37641_37680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37641_37680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37641_37680):map__37641_37680);
var doc_37682 = cljs.core.get.call(null,map__37641_37681__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37683 = cljs.core.get.call(null,map__37641_37681__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37679);

cljs.core.println.call(null," ",arglists_37683);

if(cljs.core.truth_(doc_37682)){
cljs.core.println.call(null," ",doc_37682);
} else {
}


var G__37684 = seq__37624_37674;
var G__37685 = chunk__37625_37675;
var G__37686 = count__37626_37676;
var G__37687 = (i__37627_37677 + (1));
seq__37624_37674 = G__37684;
chunk__37625_37675 = G__37685;
count__37626_37676 = G__37686;
i__37627_37677 = G__37687;
continue;
} else {
var temp__5735__auto___37688 = cljs.core.seq.call(null,seq__37624_37674);
if(temp__5735__auto___37688){
var seq__37624_37689__$1 = temp__5735__auto___37688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37624_37689__$1)){
var c__4556__auto___37690 = cljs.core.chunk_first.call(null,seq__37624_37689__$1);
var G__37691 = cljs.core.chunk_rest.call(null,seq__37624_37689__$1);
var G__37692 = c__4556__auto___37690;
var G__37693 = cljs.core.count.call(null,c__4556__auto___37690);
var G__37694 = (0);
seq__37624_37674 = G__37691;
chunk__37625_37675 = G__37692;
count__37626_37676 = G__37693;
i__37627_37677 = G__37694;
continue;
} else {
var vec__37643_37695 = cljs.core.first.call(null,seq__37624_37689__$1);
var name_37696 = cljs.core.nth.call(null,vec__37643_37695,(0),null);
var map__37646_37697 = cljs.core.nth.call(null,vec__37643_37695,(1),null);
var map__37646_37698__$1 = (((((!((map__37646_37697 == null))))?(((((map__37646_37697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37646_37697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37646_37697):map__37646_37697);
var doc_37699 = cljs.core.get.call(null,map__37646_37698__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37700 = cljs.core.get.call(null,map__37646_37698__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37696);

cljs.core.println.call(null," ",arglists_37700);

if(cljs.core.truth_(doc_37699)){
cljs.core.println.call(null," ",doc_37699);
} else {
}


var G__37701 = cljs.core.next.call(null,seq__37624_37689__$1);
var G__37702 = null;
var G__37703 = (0);
var G__37704 = (0);
seq__37624_37674 = G__37701;
chunk__37625_37675 = G__37702;
count__37626_37676 = G__37703;
i__37627_37677 = G__37704;
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

var seq__37648 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37649 = null;
var count__37650 = (0);
var i__37651 = (0);
while(true){
if((i__37651 < count__37650)){
var role = cljs.core._nth.call(null,chunk__37649,i__37651);
var temp__5735__auto___37705__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37705__$1)){
var spec_37706 = temp__5735__auto___37705__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37706));
} else {
}


var G__37707 = seq__37648;
var G__37708 = chunk__37649;
var G__37709 = count__37650;
var G__37710 = (i__37651 + (1));
seq__37648 = G__37707;
chunk__37649 = G__37708;
count__37650 = G__37709;
i__37651 = G__37710;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__37648);
if(temp__5735__auto____$1){
var seq__37648__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37648__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37648__$1);
var G__37711 = cljs.core.chunk_rest.call(null,seq__37648__$1);
var G__37712 = c__4556__auto__;
var G__37713 = cljs.core.count.call(null,c__4556__auto__);
var G__37714 = (0);
seq__37648 = G__37711;
chunk__37649 = G__37712;
count__37650 = G__37713;
i__37651 = G__37714;
continue;
} else {
var role = cljs.core.first.call(null,seq__37648__$1);
var temp__5735__auto___37715__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37715__$2)){
var spec_37716 = temp__5735__auto___37715__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37716));
} else {
}


var G__37717 = cljs.core.next.call(null,seq__37648__$1);
var G__37718 = null;
var G__37719 = (0);
var G__37720 = (0);
seq__37648 = G__37717;
chunk__37649 = G__37718;
count__37650 = G__37719;
i__37651 = G__37720;
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
var G__37721 = cljs.core.conj.call(null,via,t);
var G__37722 = cljs.core.ex_cause.call(null,t);
via = G__37721;
t = G__37722;
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
var map__37725 = datafied_throwable;
var map__37725__$1 = (((((!((map__37725 == null))))?(((((map__37725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37725):map__37725);
var via = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37726 = cljs.core.last.call(null,via);
var map__37726__$1 = (((((!((map__37726 == null))))?(((((map__37726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37726):map__37726);
var type = cljs.core.get.call(null,map__37726__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__37726__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__37726__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37727 = data;
var map__37727__$1 = (((((!((map__37727 == null))))?(((((map__37727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37727):map__37727);
var problems = cljs.core.get.call(null,map__37727__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__37727__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__37727__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37728 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__37728__$1 = (((((!((map__37728 == null))))?(((((map__37728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37728):map__37728);
var top_data = map__37728__$1;
var source = cljs.core.get.call(null,map__37728__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__37733 = phase;
var G__37733__$1 = (((G__37733 instanceof cljs.core.Keyword))?G__37733.fqn:null);
switch (G__37733__$1) {
case "read-source":
var map__37734 = data;
var map__37734__$1 = (((((!((map__37734 == null))))?(((((map__37734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37734):map__37734);
var line = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37736 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__37736__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37736,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37736);
var G__37736__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37736__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37736__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37736__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37737 = top_data;
var G__37737__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37737,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37737);
var G__37737__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37737__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37737__$1);
var G__37737__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37737__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37737__$2);
var G__37737__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37737__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37737__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37737__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37737__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37738 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37738,(0),null);
var method = cljs.core.nth.call(null,vec__37738,(1),null);
var file = cljs.core.nth.call(null,vec__37738,(2),null);
var line = cljs.core.nth.call(null,vec__37738,(3),null);
var G__37741 = top_data;
var G__37741__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__37741,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37741);
var G__37741__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__37741__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37741__$1);
var G__37741__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__37741__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37741__$2);
var G__37741__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37741__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37741__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37741__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37741__$4;
}

break;
case "execution":
var vec__37742 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37742,(0),null);
var method = cljs.core.nth.call(null,vec__37742,(1),null);
var file = cljs.core.nth.call(null,vec__37742,(2),null);
var line = cljs.core.nth.call(null,vec__37742,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__37724_SHARP_){
var or__4126__auto__ = (p1__37724_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__37724_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37745 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37745__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__37745,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37745);
var G__37745__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37745__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37745__$1);
var G__37745__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__37745__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37745__$2);
var G__37745__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__37745__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37745__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37745__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37745__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37733__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37749){
var map__37750 = p__37749;
var map__37750__$1 = (((((!((map__37750 == null))))?(((((map__37750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37750):map__37750);
var triage_data = map__37750__$1;
var phase = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__37750__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__37752 = phase;
var G__37752__$1 = (((G__37752 instanceof cljs.core.Keyword))?G__37752.fqn:null);
switch (G__37752__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37753_37762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37754_37763 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37755_37764 = true;
var _STAR_print_fn_STAR__temp_val__37756_37765 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37755_37764);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37756_37765);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__37747_SHARP_){
return cljs.core.dissoc.call(null,p1__37747_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37754_37763);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37753_37762);
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
var _STAR_print_newline_STAR__orig_val__37757_37766 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37758_37767 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37759_37768 = true;
var _STAR_print_fn_STAR__temp_val__37760_37769 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37759_37768);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37760_37769);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__37748_SHARP_){
return cljs.core.dissoc.call(null,p1__37748_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37758_37767);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37757_37766);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37752__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1626961187256

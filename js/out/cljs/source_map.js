// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__26536){
var vec__26537 = p__26536;
var i = cljs.core.nth.call(null,vec__26537,(0),null);
var v = cljs.core.nth.call(null,vec__26537,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__26540 = seg;
var gcol = cljs.core.nth.call(null,vec__26540,(0),null);
var source = cljs.core.nth.call(null,vec__26540,(1),null);
var line = cljs.core.nth.call(null,vec__26540,(2),null);
var col = cljs.core.nth.call(null,vec__26540,(3),null);
var name = cljs.core.nth.call(null,vec__26540,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__26543 = seg;
var gcol = cljs.core.nth.call(null,vec__26543,(0),null);
var source = cljs.core.nth.call(null,vec__26543,(1),null);
var line = cljs.core.nth.call(null,vec__26543,(2),null);
var col = cljs.core.nth.call(null,vec__26543,(3),null);
var name = cljs.core.nth.call(null,vec__26543,(4),null);
var vec__26546 = relseg;
var rgcol = cljs.core.nth.call(null,vec__26546,(0),null);
var rsource = cljs.core.nth.call(null,vec__26546,(1),null);
var rline = cljs.core.nth.call(null,vec__26546,(2),null);
var rcol = cljs.core.nth.call(null,vec__26546,(3),null);
var rname = cljs.core.nth.call(null,vec__26546,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__26549 = segmap;
var map__26549__$1 = (((((!((map__26549 == null))))?(((((map__26549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26549):map__26549);
var gcol = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__26552 = arguments.length;
switch (G__26552) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__26556 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26560 = cljs.core.next.call(null,segs__$1);
var G__26561 = nrelseg;
var G__26562 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26560;
relseg__$1 = G__26561;
result__$1 = G__26562;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26556,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26556,(1),null);
var G__26563 = (gline + (1));
var G__26564 = cljs.core.next.call(null,lines__$1);
var G__26565 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26566 = result__$1;
gline = G__26563;
lines__$1 = G__26564;
relseg = G__26565;
result = G__26566;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__26568 = segmap;
var map__26568__$1 = (((((!((map__26568 == null))))?(((((map__26568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26568):map__26568);
var gcol = cljs.core.get.call(null,map__26568__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26568__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26568__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26568__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26568__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__26567_SHARP_){
return cljs.core.conj.call(null,p1__26567_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26571 = arguments.length;
switch (G__26571) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__26575 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26579 = cljs.core.next.call(null,segs__$1);
var G__26580 = nrelseg;
var G__26581 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26579;
relseg__$1 = G__26580;
result__$1 = G__26581;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26575,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26575,(1),null);
var G__26582 = (gline + (1));
var G__26583 = cljs.core.next.call(null,lines__$1);
var G__26584 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26585 = result__$1;
gline = G__26582;
lines__$1 = G__26583;
relseg = G__26584;
result = G__26585;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__26586){
var vec__26587 = p__26586;
var _ = cljs.core.nth.call(null,vec__26587,(0),null);
var source = cljs.core.nth.call(null,vec__26587,(1),null);
var line = cljs.core.nth.call(null,vec__26587,(2),null);
var col = cljs.core.nth.call(null,vec__26587,(3),null);
var name = cljs.core.nth.call(null,vec__26587,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__26590){
var vec__26591 = p__26590;
var gcol = cljs.core.nth.call(null,vec__26591,(0),null);
var sidx = cljs.core.nth.call(null,vec__26591,(1),null);
var line = cljs.core.nth.call(null,vec__26591,(2),null);
var col = cljs.core.nth.call(null,vec__26591,(3),null);
var name = cljs.core.nth.call(null,vec__26591,(4),null);
var seg = vec__26591;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__26594){
var vec__26595 = p__26594;
var _ = cljs.core.nth.call(null,vec__26595,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26595,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__26595,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__26595,(3),null);
var lname = cljs.core.nth.call(null,vec__26595,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__26601 = cljs.core.seq.call(null,infos);
var chunk__26602 = null;
var count__26603 = (0);
var i__26604 = (0);
while(true){
if((i__26604 < count__26603)){
var info = cljs.core._nth.call(null,chunk__26602,i__26604);
var segv_26955 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26956 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26957 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26956 > (lc_26957 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26601,chunk__26602,count__26603,i__26604,segv_26955,gline_26956,lc_26957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26956 - (lc_26957 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26955], null));
});})(seq__26601,chunk__26602,count__26603,i__26604,segv_26955,gline_26956,lc_26957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26601,chunk__26602,count__26603,i__26604,segv_26955,gline_26956,lc_26957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26956], null),cljs.core.conj,segv_26955);
});})(seq__26601,chunk__26602,count__26603,i__26604,segv_26955,gline_26956,lc_26957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26958 = seq__26601;
var G__26959 = chunk__26602;
var G__26960 = count__26603;
var G__26961 = (i__26604 + (1));
seq__26601 = G__26958;
chunk__26602 = G__26959;
count__26603 = G__26960;
i__26604 = G__26961;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26601);
if(temp__5735__auto__){
var seq__26601__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26601__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26601__$1);
var G__26962 = cljs.core.chunk_rest.call(null,seq__26601__$1);
var G__26963 = c__4556__auto__;
var G__26964 = cljs.core.count.call(null,c__4556__auto__);
var G__26965 = (0);
seq__26601 = G__26962;
chunk__26602 = G__26963;
count__26603 = G__26964;
i__26604 = G__26965;
continue;
} else {
var info = cljs.core.first.call(null,seq__26601__$1);
var segv_26966 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26967 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26968 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26967 > (lc_26968 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26601,chunk__26602,count__26603,i__26604,segv_26966,gline_26967,lc_26968,info,seq__26601__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26967 - (lc_26968 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26966], null));
});})(seq__26601,chunk__26602,count__26603,i__26604,segv_26966,gline_26967,lc_26968,info,seq__26601__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26601,chunk__26602,count__26603,i__26604,segv_26966,gline_26967,lc_26968,info,seq__26601__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26967], null),cljs.core.conj,segv_26966);
});})(seq__26601,chunk__26602,count__26603,i__26604,segv_26966,gline_26967,lc_26968,info,seq__26601__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26969 = cljs.core.next.call(null,seq__26601__$1);
var G__26970 = null;
var G__26971 = (0);
var G__26972 = (0);
seq__26601 = G__26969;
chunk__26602 = G__26970;
count__26603 = G__26971;
i__26604 = G__26972;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__26605_26973 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26606_26974 = null;
var count__26607_26975 = (0);
var i__26608_26976 = (0);
while(true){
if((i__26608_26976 < count__26607_26975)){
var vec__26781_26977 = cljs.core._nth.call(null,chunk__26606_26974,i__26608_26976);
var source_idx_26978 = cljs.core.nth.call(null,vec__26781_26977,(0),null);
var vec__26784_26979 = cljs.core.nth.call(null,vec__26781_26977,(1),null);
var __26980 = cljs.core.nth.call(null,vec__26784_26979,(0),null);
var lines_26981__$1 = cljs.core.nth.call(null,vec__26784_26979,(1),null);
var seq__26787_26982 = cljs.core.seq.call(null,lines_26981__$1);
var chunk__26788_26983 = null;
var count__26789_26984 = (0);
var i__26790_26985 = (0);
while(true){
if((i__26790_26985 < count__26789_26984)){
var vec__26829_26986 = cljs.core._nth.call(null,chunk__26788_26983,i__26790_26985);
var line_26987 = cljs.core.nth.call(null,vec__26829_26986,(0),null);
var cols_26988 = cljs.core.nth.call(null,vec__26829_26986,(1),null);
var seq__26832_26989 = cljs.core.seq.call(null,cols_26988);
var chunk__26833_26990 = null;
var count__26834_26991 = (0);
var i__26835_26992 = (0);
while(true){
if((i__26835_26992 < count__26834_26991)){
var vec__26842_26993 = cljs.core._nth.call(null,chunk__26833_26990,i__26835_26992);
var col_26994 = cljs.core.nth.call(null,vec__26842_26993,(0),null);
var infos_26995 = cljs.core.nth.call(null,vec__26842_26993,(1),null);
encode_cols.call(null,infos_26995,source_idx_26978,line_26987,col_26994);


var G__26996 = seq__26832_26989;
var G__26997 = chunk__26833_26990;
var G__26998 = count__26834_26991;
var G__26999 = (i__26835_26992 + (1));
seq__26832_26989 = G__26996;
chunk__26833_26990 = G__26997;
count__26834_26991 = G__26998;
i__26835_26992 = G__26999;
continue;
} else {
var temp__5735__auto___27000 = cljs.core.seq.call(null,seq__26832_26989);
if(temp__5735__auto___27000){
var seq__26832_27001__$1 = temp__5735__auto___27000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26832_27001__$1)){
var c__4556__auto___27002 = cljs.core.chunk_first.call(null,seq__26832_27001__$1);
var G__27003 = cljs.core.chunk_rest.call(null,seq__26832_27001__$1);
var G__27004 = c__4556__auto___27002;
var G__27005 = cljs.core.count.call(null,c__4556__auto___27002);
var G__27006 = (0);
seq__26832_26989 = G__27003;
chunk__26833_26990 = G__27004;
count__26834_26991 = G__27005;
i__26835_26992 = G__27006;
continue;
} else {
var vec__26845_27007 = cljs.core.first.call(null,seq__26832_27001__$1);
var col_27008 = cljs.core.nth.call(null,vec__26845_27007,(0),null);
var infos_27009 = cljs.core.nth.call(null,vec__26845_27007,(1),null);
encode_cols.call(null,infos_27009,source_idx_26978,line_26987,col_27008);


var G__27010 = cljs.core.next.call(null,seq__26832_27001__$1);
var G__27011 = null;
var G__27012 = (0);
var G__27013 = (0);
seq__26832_26989 = G__27010;
chunk__26833_26990 = G__27011;
count__26834_26991 = G__27012;
i__26835_26992 = G__27013;
continue;
}
} else {
}
}
break;
}


var G__27014 = seq__26787_26982;
var G__27015 = chunk__26788_26983;
var G__27016 = count__26789_26984;
var G__27017 = (i__26790_26985 + (1));
seq__26787_26982 = G__27014;
chunk__26788_26983 = G__27015;
count__26789_26984 = G__27016;
i__26790_26985 = G__27017;
continue;
} else {
var temp__5735__auto___27018 = cljs.core.seq.call(null,seq__26787_26982);
if(temp__5735__auto___27018){
var seq__26787_27019__$1 = temp__5735__auto___27018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26787_27019__$1)){
var c__4556__auto___27020 = cljs.core.chunk_first.call(null,seq__26787_27019__$1);
var G__27021 = cljs.core.chunk_rest.call(null,seq__26787_27019__$1);
var G__27022 = c__4556__auto___27020;
var G__27023 = cljs.core.count.call(null,c__4556__auto___27020);
var G__27024 = (0);
seq__26787_26982 = G__27021;
chunk__26788_26983 = G__27022;
count__26789_26984 = G__27023;
i__26790_26985 = G__27024;
continue;
} else {
var vec__26848_27025 = cljs.core.first.call(null,seq__26787_27019__$1);
var line_27026 = cljs.core.nth.call(null,vec__26848_27025,(0),null);
var cols_27027 = cljs.core.nth.call(null,vec__26848_27025,(1),null);
var seq__26851_27028 = cljs.core.seq.call(null,cols_27027);
var chunk__26852_27029 = null;
var count__26853_27030 = (0);
var i__26854_27031 = (0);
while(true){
if((i__26854_27031 < count__26853_27030)){
var vec__26861_27032 = cljs.core._nth.call(null,chunk__26852_27029,i__26854_27031);
var col_27033 = cljs.core.nth.call(null,vec__26861_27032,(0),null);
var infos_27034 = cljs.core.nth.call(null,vec__26861_27032,(1),null);
encode_cols.call(null,infos_27034,source_idx_26978,line_27026,col_27033);


var G__27035 = seq__26851_27028;
var G__27036 = chunk__26852_27029;
var G__27037 = count__26853_27030;
var G__27038 = (i__26854_27031 + (1));
seq__26851_27028 = G__27035;
chunk__26852_27029 = G__27036;
count__26853_27030 = G__27037;
i__26854_27031 = G__27038;
continue;
} else {
var temp__5735__auto___27039__$1 = cljs.core.seq.call(null,seq__26851_27028);
if(temp__5735__auto___27039__$1){
var seq__26851_27040__$1 = temp__5735__auto___27039__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26851_27040__$1)){
var c__4556__auto___27041 = cljs.core.chunk_first.call(null,seq__26851_27040__$1);
var G__27042 = cljs.core.chunk_rest.call(null,seq__26851_27040__$1);
var G__27043 = c__4556__auto___27041;
var G__27044 = cljs.core.count.call(null,c__4556__auto___27041);
var G__27045 = (0);
seq__26851_27028 = G__27042;
chunk__26852_27029 = G__27043;
count__26853_27030 = G__27044;
i__26854_27031 = G__27045;
continue;
} else {
var vec__26864_27046 = cljs.core.first.call(null,seq__26851_27040__$1);
var col_27047 = cljs.core.nth.call(null,vec__26864_27046,(0),null);
var infos_27048 = cljs.core.nth.call(null,vec__26864_27046,(1),null);
encode_cols.call(null,infos_27048,source_idx_26978,line_27026,col_27047);


var G__27049 = cljs.core.next.call(null,seq__26851_27040__$1);
var G__27050 = null;
var G__27051 = (0);
var G__27052 = (0);
seq__26851_27028 = G__27049;
chunk__26852_27029 = G__27050;
count__26853_27030 = G__27051;
i__26854_27031 = G__27052;
continue;
}
} else {
}
}
break;
}


var G__27053 = cljs.core.next.call(null,seq__26787_27019__$1);
var G__27054 = null;
var G__27055 = (0);
var G__27056 = (0);
seq__26787_26982 = G__27053;
chunk__26788_26983 = G__27054;
count__26789_26984 = G__27055;
i__26790_26985 = G__27056;
continue;
}
} else {
}
}
break;
}


var G__27057 = seq__26605_26973;
var G__27058 = chunk__26606_26974;
var G__27059 = count__26607_26975;
var G__27060 = (i__26608_26976 + (1));
seq__26605_26973 = G__27057;
chunk__26606_26974 = G__27058;
count__26607_26975 = G__27059;
i__26608_26976 = G__27060;
continue;
} else {
var temp__5735__auto___27061 = cljs.core.seq.call(null,seq__26605_26973);
if(temp__5735__auto___27061){
var seq__26605_27062__$1 = temp__5735__auto___27061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26605_27062__$1)){
var c__4556__auto___27063 = cljs.core.chunk_first.call(null,seq__26605_27062__$1);
var G__27064 = cljs.core.chunk_rest.call(null,seq__26605_27062__$1);
var G__27065 = c__4556__auto___27063;
var G__27066 = cljs.core.count.call(null,c__4556__auto___27063);
var G__27067 = (0);
seq__26605_26973 = G__27064;
chunk__26606_26974 = G__27065;
count__26607_26975 = G__27066;
i__26608_26976 = G__27067;
continue;
} else {
var vec__26867_27068 = cljs.core.first.call(null,seq__26605_27062__$1);
var source_idx_27069 = cljs.core.nth.call(null,vec__26867_27068,(0),null);
var vec__26870_27070 = cljs.core.nth.call(null,vec__26867_27068,(1),null);
var __27071 = cljs.core.nth.call(null,vec__26870_27070,(0),null);
var lines_27072__$1 = cljs.core.nth.call(null,vec__26870_27070,(1),null);
var seq__26873_27073 = cljs.core.seq.call(null,lines_27072__$1);
var chunk__26874_27074 = null;
var count__26875_27075 = (0);
var i__26876_27076 = (0);
while(true){
if((i__26876_27076 < count__26875_27075)){
var vec__26915_27077 = cljs.core._nth.call(null,chunk__26874_27074,i__26876_27076);
var line_27078 = cljs.core.nth.call(null,vec__26915_27077,(0),null);
var cols_27079 = cljs.core.nth.call(null,vec__26915_27077,(1),null);
var seq__26918_27080 = cljs.core.seq.call(null,cols_27079);
var chunk__26919_27081 = null;
var count__26920_27082 = (0);
var i__26921_27083 = (0);
while(true){
if((i__26921_27083 < count__26920_27082)){
var vec__26928_27084 = cljs.core._nth.call(null,chunk__26919_27081,i__26921_27083);
var col_27085 = cljs.core.nth.call(null,vec__26928_27084,(0),null);
var infos_27086 = cljs.core.nth.call(null,vec__26928_27084,(1),null);
encode_cols.call(null,infos_27086,source_idx_27069,line_27078,col_27085);


var G__27087 = seq__26918_27080;
var G__27088 = chunk__26919_27081;
var G__27089 = count__26920_27082;
var G__27090 = (i__26921_27083 + (1));
seq__26918_27080 = G__27087;
chunk__26919_27081 = G__27088;
count__26920_27082 = G__27089;
i__26921_27083 = G__27090;
continue;
} else {
var temp__5735__auto___27091__$1 = cljs.core.seq.call(null,seq__26918_27080);
if(temp__5735__auto___27091__$1){
var seq__26918_27092__$1 = temp__5735__auto___27091__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26918_27092__$1)){
var c__4556__auto___27093 = cljs.core.chunk_first.call(null,seq__26918_27092__$1);
var G__27094 = cljs.core.chunk_rest.call(null,seq__26918_27092__$1);
var G__27095 = c__4556__auto___27093;
var G__27096 = cljs.core.count.call(null,c__4556__auto___27093);
var G__27097 = (0);
seq__26918_27080 = G__27094;
chunk__26919_27081 = G__27095;
count__26920_27082 = G__27096;
i__26921_27083 = G__27097;
continue;
} else {
var vec__26931_27098 = cljs.core.first.call(null,seq__26918_27092__$1);
var col_27099 = cljs.core.nth.call(null,vec__26931_27098,(0),null);
var infos_27100 = cljs.core.nth.call(null,vec__26931_27098,(1),null);
encode_cols.call(null,infos_27100,source_idx_27069,line_27078,col_27099);


var G__27101 = cljs.core.next.call(null,seq__26918_27092__$1);
var G__27102 = null;
var G__27103 = (0);
var G__27104 = (0);
seq__26918_27080 = G__27101;
chunk__26919_27081 = G__27102;
count__26920_27082 = G__27103;
i__26921_27083 = G__27104;
continue;
}
} else {
}
}
break;
}


var G__27105 = seq__26873_27073;
var G__27106 = chunk__26874_27074;
var G__27107 = count__26875_27075;
var G__27108 = (i__26876_27076 + (1));
seq__26873_27073 = G__27105;
chunk__26874_27074 = G__27106;
count__26875_27075 = G__27107;
i__26876_27076 = G__27108;
continue;
} else {
var temp__5735__auto___27109__$1 = cljs.core.seq.call(null,seq__26873_27073);
if(temp__5735__auto___27109__$1){
var seq__26873_27110__$1 = temp__5735__auto___27109__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26873_27110__$1)){
var c__4556__auto___27111 = cljs.core.chunk_first.call(null,seq__26873_27110__$1);
var G__27112 = cljs.core.chunk_rest.call(null,seq__26873_27110__$1);
var G__27113 = c__4556__auto___27111;
var G__27114 = cljs.core.count.call(null,c__4556__auto___27111);
var G__27115 = (0);
seq__26873_27073 = G__27112;
chunk__26874_27074 = G__27113;
count__26875_27075 = G__27114;
i__26876_27076 = G__27115;
continue;
} else {
var vec__26934_27116 = cljs.core.first.call(null,seq__26873_27110__$1);
var line_27117 = cljs.core.nth.call(null,vec__26934_27116,(0),null);
var cols_27118 = cljs.core.nth.call(null,vec__26934_27116,(1),null);
var seq__26937_27119 = cljs.core.seq.call(null,cols_27118);
var chunk__26938_27120 = null;
var count__26939_27121 = (0);
var i__26940_27122 = (0);
while(true){
if((i__26940_27122 < count__26939_27121)){
var vec__26947_27123 = cljs.core._nth.call(null,chunk__26938_27120,i__26940_27122);
var col_27124 = cljs.core.nth.call(null,vec__26947_27123,(0),null);
var infos_27125 = cljs.core.nth.call(null,vec__26947_27123,(1),null);
encode_cols.call(null,infos_27125,source_idx_27069,line_27117,col_27124);


var G__27126 = seq__26937_27119;
var G__27127 = chunk__26938_27120;
var G__27128 = count__26939_27121;
var G__27129 = (i__26940_27122 + (1));
seq__26937_27119 = G__27126;
chunk__26938_27120 = G__27127;
count__26939_27121 = G__27128;
i__26940_27122 = G__27129;
continue;
} else {
var temp__5735__auto___27130__$2 = cljs.core.seq.call(null,seq__26937_27119);
if(temp__5735__auto___27130__$2){
var seq__26937_27131__$1 = temp__5735__auto___27130__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26937_27131__$1)){
var c__4556__auto___27132 = cljs.core.chunk_first.call(null,seq__26937_27131__$1);
var G__27133 = cljs.core.chunk_rest.call(null,seq__26937_27131__$1);
var G__27134 = c__4556__auto___27132;
var G__27135 = cljs.core.count.call(null,c__4556__auto___27132);
var G__27136 = (0);
seq__26937_27119 = G__27133;
chunk__26938_27120 = G__27134;
count__26939_27121 = G__27135;
i__26940_27122 = G__27136;
continue;
} else {
var vec__26950_27137 = cljs.core.first.call(null,seq__26937_27131__$1);
var col_27138 = cljs.core.nth.call(null,vec__26950_27137,(0),null);
var infos_27139 = cljs.core.nth.call(null,vec__26950_27137,(1),null);
encode_cols.call(null,infos_27139,source_idx_27069,line_27117,col_27138);


var G__27140 = cljs.core.next.call(null,seq__26937_27131__$1);
var G__27141 = null;
var G__27142 = (0);
var G__27143 = (0);
seq__26937_27119 = G__27140;
chunk__26938_27120 = G__27141;
count__26939_27121 = G__27142;
i__26940_27122 = G__27143;
continue;
}
} else {
}
}
break;
}


var G__27144 = cljs.core.next.call(null,seq__26873_27110__$1);
var G__27145 = null;
var G__27146 = (0);
var G__27147 = (0);
seq__26873_27073 = G__27144;
chunk__26874_27074 = G__27145;
count__26875_27075 = G__27146;
i__26876_27076 = G__27147;
continue;
}
} else {
}
}
break;
}


var G__27148 = cljs.core.next.call(null,seq__26605_27062__$1);
var G__27149 = null;
var G__27150 = (0);
var G__27151 = (0);
seq__26605_26973 = G__27148;
chunk__26606_26974 = G__27149;
count__26607_26975 = G__27150;
i__26608_26976 = G__27151;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__26953 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__26598_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26598_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__26599_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__26599_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__26600_SHARP_){
return clojure.string.join.call(null,",",p1__26600_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__26954 = G__26953;
goog.object.set(G__26954,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__26954;
} else {
return G__26953;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__27152 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__27152,(0),null);
var col_map = cljs.core.nth.call(null,vec__27152,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__27155 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__27155,(0),null);
var infos = cljs.core.nth.call(null,vec__27155,(1),null);
var G__27161 = cljs.core.next.call(null,col_map_seq);
var G__27162 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__27155,col,infos,vec__27152,line,col_map){
return (function (v,p__27158){
var map__27159 = p__27158;
var map__27159__$1 = (((((!((map__27159 == null))))?(((((map__27159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27159):map__27159);
var gline = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__27155,col,infos,vec__27152,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__27161;
new_cols = G__27162;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__27163 = cljs.core.next.call(null,line_map_seq);
var G__27164 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__27163;
new_lines = G__27164;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__27165_27437 = cljs.core.seq.call(null,reverse_map);
var chunk__27166_27438 = null;
var count__27167_27439 = (0);
var i__27168_27440 = (0);
while(true){
if((i__27168_27440 < count__27167_27439)){
var vec__27303_27441 = cljs.core._nth.call(null,chunk__27166_27438,i__27168_27440);
var line_27442 = cljs.core.nth.call(null,vec__27303_27441,(0),null);
var columns_27443 = cljs.core.nth.call(null,vec__27303_27441,(1),null);
var seq__27306_27444 = cljs.core.seq.call(null,columns_27443);
var chunk__27307_27445 = null;
var count__27308_27446 = (0);
var i__27309_27447 = (0);
while(true){
if((i__27309_27447 < count__27308_27446)){
var vec__27340_27448 = cljs.core._nth.call(null,chunk__27307_27445,i__27309_27447);
var column_27449 = cljs.core.nth.call(null,vec__27340_27448,(0),null);
var column_info_27450 = cljs.core.nth.call(null,vec__27340_27448,(1),null);
var seq__27343_27451 = cljs.core.seq.call(null,column_info_27450);
var chunk__27344_27452 = null;
var count__27345_27453 = (0);
var i__27346_27454 = (0);
while(true){
if((i__27346_27454 < count__27345_27453)){
var map__27351_27455 = cljs.core._nth.call(null,chunk__27344_27452,i__27346_27454);
var map__27351_27456__$1 = (((((!((map__27351_27455 == null))))?(((((map__27351_27455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27351_27455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27351_27455):map__27351_27455);
var gline_27457 = cljs.core.get.call(null,map__27351_27456__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27458 = cljs.core.get.call(null,map__27351_27456__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27459 = cljs.core.get.call(null,map__27351_27456__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27457], null),cljs.core.fnil.call(null,((function (seq__27343_27451,chunk__27344_27452,count__27345_27453,i__27346_27454,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27351_27455,map__27351_27456__$1,gline_27457,gcol_27458,name_27459,vec__27340_27448,column_27449,column_info_27450,vec__27303_27441,line_27442,columns_27443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27458], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27442,new cljs.core.Keyword(null,"col","col",-1959363084),column_27449,new cljs.core.Keyword(null,"name","name",1843675177),name_27459], null));
});})(seq__27343_27451,chunk__27344_27452,count__27345_27453,i__27346_27454,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27351_27455,map__27351_27456__$1,gline_27457,gcol_27458,name_27459,vec__27340_27448,column_27449,column_info_27450,vec__27303_27441,line_27442,columns_27443,inverted))
,cljs.core.sorted_map.call(null)));


var G__27460 = seq__27343_27451;
var G__27461 = chunk__27344_27452;
var G__27462 = count__27345_27453;
var G__27463 = (i__27346_27454 + (1));
seq__27343_27451 = G__27460;
chunk__27344_27452 = G__27461;
count__27345_27453 = G__27462;
i__27346_27454 = G__27463;
continue;
} else {
var temp__5735__auto___27464 = cljs.core.seq.call(null,seq__27343_27451);
if(temp__5735__auto___27464){
var seq__27343_27465__$1 = temp__5735__auto___27464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27343_27465__$1)){
var c__4556__auto___27466 = cljs.core.chunk_first.call(null,seq__27343_27465__$1);
var G__27467 = cljs.core.chunk_rest.call(null,seq__27343_27465__$1);
var G__27468 = c__4556__auto___27466;
var G__27469 = cljs.core.count.call(null,c__4556__auto___27466);
var G__27470 = (0);
seq__27343_27451 = G__27467;
chunk__27344_27452 = G__27468;
count__27345_27453 = G__27469;
i__27346_27454 = G__27470;
continue;
} else {
var map__27353_27471 = cljs.core.first.call(null,seq__27343_27465__$1);
var map__27353_27472__$1 = (((((!((map__27353_27471 == null))))?(((((map__27353_27471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27353_27471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27353_27471):map__27353_27471);
var gline_27473 = cljs.core.get.call(null,map__27353_27472__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27474 = cljs.core.get.call(null,map__27353_27472__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27475 = cljs.core.get.call(null,map__27353_27472__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27473], null),cljs.core.fnil.call(null,((function (seq__27343_27451,chunk__27344_27452,count__27345_27453,i__27346_27454,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27353_27471,map__27353_27472__$1,gline_27473,gcol_27474,name_27475,seq__27343_27465__$1,temp__5735__auto___27464,vec__27340_27448,column_27449,column_info_27450,vec__27303_27441,line_27442,columns_27443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27474], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27442,new cljs.core.Keyword(null,"col","col",-1959363084),column_27449,new cljs.core.Keyword(null,"name","name",1843675177),name_27475], null));
});})(seq__27343_27451,chunk__27344_27452,count__27345_27453,i__27346_27454,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27353_27471,map__27353_27472__$1,gline_27473,gcol_27474,name_27475,seq__27343_27465__$1,temp__5735__auto___27464,vec__27340_27448,column_27449,column_info_27450,vec__27303_27441,line_27442,columns_27443,inverted))
,cljs.core.sorted_map.call(null)));


var G__27476 = cljs.core.next.call(null,seq__27343_27465__$1);
var G__27477 = null;
var G__27478 = (0);
var G__27479 = (0);
seq__27343_27451 = G__27476;
chunk__27344_27452 = G__27477;
count__27345_27453 = G__27478;
i__27346_27454 = G__27479;
continue;
}
} else {
}
}
break;
}


var G__27480 = seq__27306_27444;
var G__27481 = chunk__27307_27445;
var G__27482 = count__27308_27446;
var G__27483 = (i__27309_27447 + (1));
seq__27306_27444 = G__27480;
chunk__27307_27445 = G__27481;
count__27308_27446 = G__27482;
i__27309_27447 = G__27483;
continue;
} else {
var temp__5735__auto___27484 = cljs.core.seq.call(null,seq__27306_27444);
if(temp__5735__auto___27484){
var seq__27306_27485__$1 = temp__5735__auto___27484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27306_27485__$1)){
var c__4556__auto___27486 = cljs.core.chunk_first.call(null,seq__27306_27485__$1);
var G__27487 = cljs.core.chunk_rest.call(null,seq__27306_27485__$1);
var G__27488 = c__4556__auto___27486;
var G__27489 = cljs.core.count.call(null,c__4556__auto___27486);
var G__27490 = (0);
seq__27306_27444 = G__27487;
chunk__27307_27445 = G__27488;
count__27308_27446 = G__27489;
i__27309_27447 = G__27490;
continue;
} else {
var vec__27355_27491 = cljs.core.first.call(null,seq__27306_27485__$1);
var column_27492 = cljs.core.nth.call(null,vec__27355_27491,(0),null);
var column_info_27493 = cljs.core.nth.call(null,vec__27355_27491,(1),null);
var seq__27358_27494 = cljs.core.seq.call(null,column_info_27493);
var chunk__27359_27495 = null;
var count__27360_27496 = (0);
var i__27361_27497 = (0);
while(true){
if((i__27361_27497 < count__27360_27496)){
var map__27366_27498 = cljs.core._nth.call(null,chunk__27359_27495,i__27361_27497);
var map__27366_27499__$1 = (((((!((map__27366_27498 == null))))?(((((map__27366_27498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27366_27498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27366_27498):map__27366_27498);
var gline_27500 = cljs.core.get.call(null,map__27366_27499__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27501 = cljs.core.get.call(null,map__27366_27499__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27502 = cljs.core.get.call(null,map__27366_27499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27500], null),cljs.core.fnil.call(null,((function (seq__27358_27494,chunk__27359_27495,count__27360_27496,i__27361_27497,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27366_27498,map__27366_27499__$1,gline_27500,gcol_27501,name_27502,vec__27355_27491,column_27492,column_info_27493,seq__27306_27485__$1,temp__5735__auto___27484,vec__27303_27441,line_27442,columns_27443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27501], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27442,new cljs.core.Keyword(null,"col","col",-1959363084),column_27492,new cljs.core.Keyword(null,"name","name",1843675177),name_27502], null));
});})(seq__27358_27494,chunk__27359_27495,count__27360_27496,i__27361_27497,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27366_27498,map__27366_27499__$1,gline_27500,gcol_27501,name_27502,vec__27355_27491,column_27492,column_info_27493,seq__27306_27485__$1,temp__5735__auto___27484,vec__27303_27441,line_27442,columns_27443,inverted))
,cljs.core.sorted_map.call(null)));


var G__27503 = seq__27358_27494;
var G__27504 = chunk__27359_27495;
var G__27505 = count__27360_27496;
var G__27506 = (i__27361_27497 + (1));
seq__27358_27494 = G__27503;
chunk__27359_27495 = G__27504;
count__27360_27496 = G__27505;
i__27361_27497 = G__27506;
continue;
} else {
var temp__5735__auto___27507__$1 = cljs.core.seq.call(null,seq__27358_27494);
if(temp__5735__auto___27507__$1){
var seq__27358_27508__$1 = temp__5735__auto___27507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27358_27508__$1)){
var c__4556__auto___27509 = cljs.core.chunk_first.call(null,seq__27358_27508__$1);
var G__27510 = cljs.core.chunk_rest.call(null,seq__27358_27508__$1);
var G__27511 = c__4556__auto___27509;
var G__27512 = cljs.core.count.call(null,c__4556__auto___27509);
var G__27513 = (0);
seq__27358_27494 = G__27510;
chunk__27359_27495 = G__27511;
count__27360_27496 = G__27512;
i__27361_27497 = G__27513;
continue;
} else {
var map__27368_27514 = cljs.core.first.call(null,seq__27358_27508__$1);
var map__27368_27515__$1 = (((((!((map__27368_27514 == null))))?(((((map__27368_27514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27368_27514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27368_27514):map__27368_27514);
var gline_27516 = cljs.core.get.call(null,map__27368_27515__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27517 = cljs.core.get.call(null,map__27368_27515__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27518 = cljs.core.get.call(null,map__27368_27515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27516], null),cljs.core.fnil.call(null,((function (seq__27358_27494,chunk__27359_27495,count__27360_27496,i__27361_27497,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27368_27514,map__27368_27515__$1,gline_27516,gcol_27517,name_27518,seq__27358_27508__$1,temp__5735__auto___27507__$1,vec__27355_27491,column_27492,column_info_27493,seq__27306_27485__$1,temp__5735__auto___27484,vec__27303_27441,line_27442,columns_27443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27517], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27442,new cljs.core.Keyword(null,"col","col",-1959363084),column_27492,new cljs.core.Keyword(null,"name","name",1843675177),name_27518], null));
});})(seq__27358_27494,chunk__27359_27495,count__27360_27496,i__27361_27497,seq__27306_27444,chunk__27307_27445,count__27308_27446,i__27309_27447,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27368_27514,map__27368_27515__$1,gline_27516,gcol_27517,name_27518,seq__27358_27508__$1,temp__5735__auto___27507__$1,vec__27355_27491,column_27492,column_info_27493,seq__27306_27485__$1,temp__5735__auto___27484,vec__27303_27441,line_27442,columns_27443,inverted))
,cljs.core.sorted_map.call(null)));


var G__27519 = cljs.core.next.call(null,seq__27358_27508__$1);
var G__27520 = null;
var G__27521 = (0);
var G__27522 = (0);
seq__27358_27494 = G__27519;
chunk__27359_27495 = G__27520;
count__27360_27496 = G__27521;
i__27361_27497 = G__27522;
continue;
}
} else {
}
}
break;
}


var G__27523 = cljs.core.next.call(null,seq__27306_27485__$1);
var G__27524 = null;
var G__27525 = (0);
var G__27526 = (0);
seq__27306_27444 = G__27523;
chunk__27307_27445 = G__27524;
count__27308_27446 = G__27525;
i__27309_27447 = G__27526;
continue;
}
} else {
}
}
break;
}


var G__27527 = seq__27165_27437;
var G__27528 = chunk__27166_27438;
var G__27529 = count__27167_27439;
var G__27530 = (i__27168_27440 + (1));
seq__27165_27437 = G__27527;
chunk__27166_27438 = G__27528;
count__27167_27439 = G__27529;
i__27168_27440 = G__27530;
continue;
} else {
var temp__5735__auto___27531 = cljs.core.seq.call(null,seq__27165_27437);
if(temp__5735__auto___27531){
var seq__27165_27532__$1 = temp__5735__auto___27531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27165_27532__$1)){
var c__4556__auto___27533 = cljs.core.chunk_first.call(null,seq__27165_27532__$1);
var G__27534 = cljs.core.chunk_rest.call(null,seq__27165_27532__$1);
var G__27535 = c__4556__auto___27533;
var G__27536 = cljs.core.count.call(null,c__4556__auto___27533);
var G__27537 = (0);
seq__27165_27437 = G__27534;
chunk__27166_27438 = G__27535;
count__27167_27439 = G__27536;
i__27168_27440 = G__27537;
continue;
} else {
var vec__27370_27538 = cljs.core.first.call(null,seq__27165_27532__$1);
var line_27539 = cljs.core.nth.call(null,vec__27370_27538,(0),null);
var columns_27540 = cljs.core.nth.call(null,vec__27370_27538,(1),null);
var seq__27373_27541 = cljs.core.seq.call(null,columns_27540);
var chunk__27374_27542 = null;
var count__27375_27543 = (0);
var i__27376_27544 = (0);
while(true){
if((i__27376_27544 < count__27375_27543)){
var vec__27407_27545 = cljs.core._nth.call(null,chunk__27374_27542,i__27376_27544);
var column_27546 = cljs.core.nth.call(null,vec__27407_27545,(0),null);
var column_info_27547 = cljs.core.nth.call(null,vec__27407_27545,(1),null);
var seq__27410_27548 = cljs.core.seq.call(null,column_info_27547);
var chunk__27411_27549 = null;
var count__27412_27550 = (0);
var i__27413_27551 = (0);
while(true){
if((i__27413_27551 < count__27412_27550)){
var map__27418_27552 = cljs.core._nth.call(null,chunk__27411_27549,i__27413_27551);
var map__27418_27553__$1 = (((((!((map__27418_27552 == null))))?(((((map__27418_27552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27418_27552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27418_27552):map__27418_27552);
var gline_27554 = cljs.core.get.call(null,map__27418_27553__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27555 = cljs.core.get.call(null,map__27418_27553__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27556 = cljs.core.get.call(null,map__27418_27553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27554], null),cljs.core.fnil.call(null,((function (seq__27410_27548,chunk__27411_27549,count__27412_27550,i__27413_27551,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27418_27552,map__27418_27553__$1,gline_27554,gcol_27555,name_27556,vec__27407_27545,column_27546,column_info_27547,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27555], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27539,new cljs.core.Keyword(null,"col","col",-1959363084),column_27546,new cljs.core.Keyword(null,"name","name",1843675177),name_27556], null));
});})(seq__27410_27548,chunk__27411_27549,count__27412_27550,i__27413_27551,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27418_27552,map__27418_27553__$1,gline_27554,gcol_27555,name_27556,vec__27407_27545,column_27546,column_info_27547,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted))
,cljs.core.sorted_map.call(null)));


var G__27557 = seq__27410_27548;
var G__27558 = chunk__27411_27549;
var G__27559 = count__27412_27550;
var G__27560 = (i__27413_27551 + (1));
seq__27410_27548 = G__27557;
chunk__27411_27549 = G__27558;
count__27412_27550 = G__27559;
i__27413_27551 = G__27560;
continue;
} else {
var temp__5735__auto___27561__$1 = cljs.core.seq.call(null,seq__27410_27548);
if(temp__5735__auto___27561__$1){
var seq__27410_27562__$1 = temp__5735__auto___27561__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27410_27562__$1)){
var c__4556__auto___27563 = cljs.core.chunk_first.call(null,seq__27410_27562__$1);
var G__27564 = cljs.core.chunk_rest.call(null,seq__27410_27562__$1);
var G__27565 = c__4556__auto___27563;
var G__27566 = cljs.core.count.call(null,c__4556__auto___27563);
var G__27567 = (0);
seq__27410_27548 = G__27564;
chunk__27411_27549 = G__27565;
count__27412_27550 = G__27566;
i__27413_27551 = G__27567;
continue;
} else {
var map__27420_27568 = cljs.core.first.call(null,seq__27410_27562__$1);
var map__27420_27569__$1 = (((((!((map__27420_27568 == null))))?(((((map__27420_27568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27420_27568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27420_27568):map__27420_27568);
var gline_27570 = cljs.core.get.call(null,map__27420_27569__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27571 = cljs.core.get.call(null,map__27420_27569__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27572 = cljs.core.get.call(null,map__27420_27569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27570], null),cljs.core.fnil.call(null,((function (seq__27410_27548,chunk__27411_27549,count__27412_27550,i__27413_27551,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27420_27568,map__27420_27569__$1,gline_27570,gcol_27571,name_27572,seq__27410_27562__$1,temp__5735__auto___27561__$1,vec__27407_27545,column_27546,column_info_27547,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27571], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27539,new cljs.core.Keyword(null,"col","col",-1959363084),column_27546,new cljs.core.Keyword(null,"name","name",1843675177),name_27572], null));
});})(seq__27410_27548,chunk__27411_27549,count__27412_27550,i__27413_27551,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27420_27568,map__27420_27569__$1,gline_27570,gcol_27571,name_27572,seq__27410_27562__$1,temp__5735__auto___27561__$1,vec__27407_27545,column_27546,column_info_27547,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted))
,cljs.core.sorted_map.call(null)));


var G__27573 = cljs.core.next.call(null,seq__27410_27562__$1);
var G__27574 = null;
var G__27575 = (0);
var G__27576 = (0);
seq__27410_27548 = G__27573;
chunk__27411_27549 = G__27574;
count__27412_27550 = G__27575;
i__27413_27551 = G__27576;
continue;
}
} else {
}
}
break;
}


var G__27577 = seq__27373_27541;
var G__27578 = chunk__27374_27542;
var G__27579 = count__27375_27543;
var G__27580 = (i__27376_27544 + (1));
seq__27373_27541 = G__27577;
chunk__27374_27542 = G__27578;
count__27375_27543 = G__27579;
i__27376_27544 = G__27580;
continue;
} else {
var temp__5735__auto___27581__$1 = cljs.core.seq.call(null,seq__27373_27541);
if(temp__5735__auto___27581__$1){
var seq__27373_27582__$1 = temp__5735__auto___27581__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27373_27582__$1)){
var c__4556__auto___27583 = cljs.core.chunk_first.call(null,seq__27373_27582__$1);
var G__27584 = cljs.core.chunk_rest.call(null,seq__27373_27582__$1);
var G__27585 = c__4556__auto___27583;
var G__27586 = cljs.core.count.call(null,c__4556__auto___27583);
var G__27587 = (0);
seq__27373_27541 = G__27584;
chunk__27374_27542 = G__27585;
count__27375_27543 = G__27586;
i__27376_27544 = G__27587;
continue;
} else {
var vec__27422_27588 = cljs.core.first.call(null,seq__27373_27582__$1);
var column_27589 = cljs.core.nth.call(null,vec__27422_27588,(0),null);
var column_info_27590 = cljs.core.nth.call(null,vec__27422_27588,(1),null);
var seq__27425_27591 = cljs.core.seq.call(null,column_info_27590);
var chunk__27426_27592 = null;
var count__27427_27593 = (0);
var i__27428_27594 = (0);
while(true){
if((i__27428_27594 < count__27427_27593)){
var map__27433_27595 = cljs.core._nth.call(null,chunk__27426_27592,i__27428_27594);
var map__27433_27596__$1 = (((((!((map__27433_27595 == null))))?(((((map__27433_27595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27433_27595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27433_27595):map__27433_27595);
var gline_27597 = cljs.core.get.call(null,map__27433_27596__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27598 = cljs.core.get.call(null,map__27433_27596__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27599 = cljs.core.get.call(null,map__27433_27596__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27597], null),cljs.core.fnil.call(null,((function (seq__27425_27591,chunk__27426_27592,count__27427_27593,i__27428_27594,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27433_27595,map__27433_27596__$1,gline_27597,gcol_27598,name_27599,vec__27422_27588,column_27589,column_info_27590,seq__27373_27582__$1,temp__5735__auto___27581__$1,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27598], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27539,new cljs.core.Keyword(null,"col","col",-1959363084),column_27589,new cljs.core.Keyword(null,"name","name",1843675177),name_27599], null));
});})(seq__27425_27591,chunk__27426_27592,count__27427_27593,i__27428_27594,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27433_27595,map__27433_27596__$1,gline_27597,gcol_27598,name_27599,vec__27422_27588,column_27589,column_info_27590,seq__27373_27582__$1,temp__5735__auto___27581__$1,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted))
,cljs.core.sorted_map.call(null)));


var G__27600 = seq__27425_27591;
var G__27601 = chunk__27426_27592;
var G__27602 = count__27427_27593;
var G__27603 = (i__27428_27594 + (1));
seq__27425_27591 = G__27600;
chunk__27426_27592 = G__27601;
count__27427_27593 = G__27602;
i__27428_27594 = G__27603;
continue;
} else {
var temp__5735__auto___27604__$2 = cljs.core.seq.call(null,seq__27425_27591);
if(temp__5735__auto___27604__$2){
var seq__27425_27605__$1 = temp__5735__auto___27604__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27425_27605__$1)){
var c__4556__auto___27606 = cljs.core.chunk_first.call(null,seq__27425_27605__$1);
var G__27607 = cljs.core.chunk_rest.call(null,seq__27425_27605__$1);
var G__27608 = c__4556__auto___27606;
var G__27609 = cljs.core.count.call(null,c__4556__auto___27606);
var G__27610 = (0);
seq__27425_27591 = G__27607;
chunk__27426_27592 = G__27608;
count__27427_27593 = G__27609;
i__27428_27594 = G__27610;
continue;
} else {
var map__27435_27611 = cljs.core.first.call(null,seq__27425_27605__$1);
var map__27435_27612__$1 = (((((!((map__27435_27611 == null))))?(((((map__27435_27611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27435_27611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27435_27611):map__27435_27611);
var gline_27613 = cljs.core.get.call(null,map__27435_27612__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27614 = cljs.core.get.call(null,map__27435_27612__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27615 = cljs.core.get.call(null,map__27435_27612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27613], null),cljs.core.fnil.call(null,((function (seq__27425_27591,chunk__27426_27592,count__27427_27593,i__27428_27594,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27435_27611,map__27435_27612__$1,gline_27613,gcol_27614,name_27615,seq__27425_27605__$1,temp__5735__auto___27604__$2,vec__27422_27588,column_27589,column_info_27590,seq__27373_27582__$1,temp__5735__auto___27581__$1,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27614], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27539,new cljs.core.Keyword(null,"col","col",-1959363084),column_27589,new cljs.core.Keyword(null,"name","name",1843675177),name_27615], null));
});})(seq__27425_27591,chunk__27426_27592,count__27427_27593,i__27428_27594,seq__27373_27541,chunk__27374_27542,count__27375_27543,i__27376_27544,seq__27165_27437,chunk__27166_27438,count__27167_27439,i__27168_27440,map__27435_27611,map__27435_27612__$1,gline_27613,gcol_27614,name_27615,seq__27425_27605__$1,temp__5735__auto___27604__$2,vec__27422_27588,column_27589,column_info_27590,seq__27373_27582__$1,temp__5735__auto___27581__$1,vec__27370_27538,line_27539,columns_27540,seq__27165_27532__$1,temp__5735__auto___27531,inverted))
,cljs.core.sorted_map.call(null)));


var G__27616 = cljs.core.next.call(null,seq__27425_27605__$1);
var G__27617 = null;
var G__27618 = (0);
var G__27619 = (0);
seq__27425_27591 = G__27616;
chunk__27426_27592 = G__27617;
count__27427_27593 = G__27618;
i__27428_27594 = G__27619;
continue;
}
} else {
}
}
break;
}


var G__27620 = cljs.core.next.call(null,seq__27373_27582__$1);
var G__27621 = null;
var G__27622 = (0);
var G__27623 = (0);
seq__27373_27541 = G__27620;
chunk__27374_27542 = G__27621;
count__27375_27543 = G__27622;
i__27376_27544 = G__27623;
continue;
}
} else {
}
}
break;
}


var G__27624 = cljs.core.next.call(null,seq__27165_27532__$1);
var G__27625 = null;
var G__27626 = (0);
var G__27627 = (0);
seq__27165_27437 = G__27624;
chunk__27166_27438 = G__27625;
count__27167_27439 = G__27626;
i__27168_27440 = G__27627;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1626961176828

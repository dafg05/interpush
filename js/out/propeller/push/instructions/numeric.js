// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.numeric');
goog.require('cljs.core');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.tools.math');
goog.require('cljs.reader');
propeller.push.instructions.numeric._gt = cljs.core.with_meta((function propeller$push$instructions$numeric$_gt(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_gt"], null));
propeller.push.instructions.numeric._gte = cljs.core.with_meta((function propeller$push$instructions$numeric$_gte(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_gte"], null));
propeller.push.instructions.numeric._lt = cljs.core.with_meta((function propeller$push$instructions$numeric$_lt(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_lt"], null));
propeller.push.instructions.numeric._lte = cljs.core.with_meta((function propeller$push$instructions$numeric$_lte(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_lte"], null));
propeller.push.instructions.numeric._add = cljs.core.with_meta((function propeller$push$instructions$numeric$_add(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_add"], null));
propeller.push.instructions.numeric._subtract = cljs.core.with_meta((function propeller$push$instructions$numeric$_subtract(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_subtract"], null));
propeller.push.instructions.numeric._mult = cljs.core.with_meta((function propeller$push$instructions$numeric$_mult(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_mult"], null));
propeller.push.instructions.numeric._quot = cljs.core.with_meta((function propeller$push$instructions$numeric$_quot(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31296_SHARP_,p2__31295_SHARP_){
if((p2__31295_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot.call(null,p1__31296_SHARP_,p2__31295_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_quot"], null));
propeller.push.instructions.numeric._mod = cljs.core.with_meta((function propeller$push$instructions$numeric$_mod(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31298_SHARP_,p2__31297_SHARP_){
if((p2__31297_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod.call(null,p1__31298_SHARP_,p2__31297_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_mod"], null));
propeller.push.instructions.numeric._max = cljs.core.with_meta((function propeller$push$instructions$numeric$_max(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_max"], null));
propeller.push.instructions.numeric._min = cljs.core.with_meta((function propeller$push$instructions$numeric$_min(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_min"], null));
propeller.push.instructions.numeric._from_boolean = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_boolean(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31299_SHARP_){
return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,(cljs.core.truth_(p1__31299_SHARP_)?(1):(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_boolean"], null));
propeller.push.instructions.numeric._from_char = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_char(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"char","char",-641587586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_char"], null));
propeller.push.instructions.numeric._from_string = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_string(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31300_SHARP_){
try{return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,cljs.reader.read_string.call(null,p1__31300_SHARP_));
}catch (e31301){if((e31301 instanceof Error)){
var e = e31301;
return null;
} else {
throw e31301;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_string"], null));
propeller.push.instructions.numeric._inc = cljs.core.with_meta((function propeller$push$instructions$numeric$_inc(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_inc"], null));
propeller.push.instructions.numeric._dec = cljs.core.with_meta((function propeller$push$instructions$numeric$_dec(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_dec"], null));
var seq__31302_31318 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710)], null));
var chunk__31309_31319 = null;
var count__31310_31320 = (0);
var i__31311_31321 = (0);
while(true){
if((i__31311_31321 < count__31310_31320)){
var stack__31043__auto___31322 = cljs.core._nth.call(null,chunk__31309_31319,i__31311_31321);
var seq__31312_31323 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__31314_31324 = null;
var count__31315_31325 = (0);
var i__31316_31326 = (0);
while(true){
if((i__31316_31326 < count__31315_31325)){
var func__31044__auto___31327 = cljs.core._nth.call(null,chunk__31314_31324,i__31316_31326);
var instruction_name__31045__auto___31328 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31322),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31327)))].join(''));
var metadata__31046__auto___31329 = ((function (seq__31312_31323,chunk__31314_31324,count__31315_31325,i__31316_31326,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31328,func__31044__auto___31327,stack__31043__auto___31322){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31312_31323,chunk__31314_31324,count__31315_31325,i__31316_31326,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31328,func__31044__auto___31327,stack__31043__auto___31322))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31327),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31322,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31322)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31327)))))));
var new_func__31047__auto___31330 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31327,stack__31043__auto___31322),metadata__31046__auto___31329);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31328,new_func__31047__auto___31330);


var G__31331 = seq__31312_31323;
var G__31332 = chunk__31314_31324;
var G__31333 = count__31315_31325;
var G__31334 = (i__31316_31326 + (1));
seq__31312_31323 = G__31331;
chunk__31314_31324 = G__31332;
count__31315_31325 = G__31333;
i__31316_31326 = G__31334;
continue;
} else {
var temp__5735__auto___31335 = cljs.core.seq.call(null,seq__31312_31323);
if(temp__5735__auto___31335){
var seq__31312_31336__$1 = temp__5735__auto___31335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31312_31336__$1)){
var c__4556__auto___31337 = cljs.core.chunk_first.call(null,seq__31312_31336__$1);
var G__31338 = cljs.core.chunk_rest.call(null,seq__31312_31336__$1);
var G__31339 = c__4556__auto___31337;
var G__31340 = cljs.core.count.call(null,c__4556__auto___31337);
var G__31341 = (0);
seq__31312_31323 = G__31338;
chunk__31314_31324 = G__31339;
count__31315_31325 = G__31340;
i__31316_31326 = G__31341;
continue;
} else {
var func__31044__auto___31342 = cljs.core.first.call(null,seq__31312_31336__$1);
var instruction_name__31045__auto___31343 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31322),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31342)))].join(''));
var metadata__31046__auto___31344 = ((function (seq__31312_31323,chunk__31314_31324,count__31315_31325,i__31316_31326,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31343,func__31044__auto___31342,seq__31312_31336__$1,temp__5735__auto___31335,stack__31043__auto___31322){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31312_31323,chunk__31314_31324,count__31315_31325,i__31316_31326,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31343,func__31044__auto___31342,seq__31312_31336__$1,temp__5735__auto___31335,stack__31043__auto___31322))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31322,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31322)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31342)))))));
var new_func__31047__auto___31345 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31342,stack__31043__auto___31322),metadata__31046__auto___31344);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31343,new_func__31047__auto___31345);


var G__31346 = cljs.core.next.call(null,seq__31312_31336__$1);
var G__31347 = null;
var G__31348 = (0);
var G__31349 = (0);
seq__31312_31323 = G__31346;
chunk__31314_31324 = G__31347;
count__31315_31325 = G__31348;
i__31316_31326 = G__31349;
continue;
}
} else {
}
}
break;
}

var G__31350 = seq__31302_31318;
var G__31351 = chunk__31309_31319;
var G__31352 = count__31310_31320;
var G__31353 = (i__31311_31321 + (1));
seq__31302_31318 = G__31350;
chunk__31309_31319 = G__31351;
count__31310_31320 = G__31352;
i__31311_31321 = G__31353;
continue;
} else {
var temp__5735__auto___31354 = cljs.core.seq.call(null,seq__31302_31318);
if(temp__5735__auto___31354){
var seq__31302_31355__$1 = temp__5735__auto___31354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31302_31355__$1)){
var c__4556__auto___31356 = cljs.core.chunk_first.call(null,seq__31302_31355__$1);
var G__31357 = cljs.core.chunk_rest.call(null,seq__31302_31355__$1);
var G__31358 = c__4556__auto___31356;
var G__31359 = cljs.core.count.call(null,c__4556__auto___31356);
var G__31360 = (0);
seq__31302_31318 = G__31357;
chunk__31309_31319 = G__31358;
count__31310_31320 = G__31359;
i__31311_31321 = G__31360;
continue;
} else {
var stack__31043__auto___31361 = cljs.core.first.call(null,seq__31302_31355__$1);
var seq__31303_31362 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__31305_31363 = null;
var count__31306_31364 = (0);
var i__31307_31365 = (0);
while(true){
if((i__31307_31365 < count__31306_31364)){
var func__31044__auto___31366 = cljs.core._nth.call(null,chunk__31305_31363,i__31307_31365);
var instruction_name__31045__auto___31367 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31361),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31366)))].join(''));
var metadata__31046__auto___31368 = ((function (seq__31303_31362,chunk__31305_31363,count__31306_31364,i__31307_31365,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31367,func__31044__auto___31366,stack__31043__auto___31361,seq__31302_31355__$1,temp__5735__auto___31354){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31303_31362,chunk__31305_31363,count__31306_31364,i__31307_31365,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31367,func__31044__auto___31366,stack__31043__auto___31361,seq__31302_31355__$1,temp__5735__auto___31354))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31361,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31361)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31366)))))));
var new_func__31047__auto___31369 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31366,stack__31043__auto___31361),metadata__31046__auto___31368);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31367,new_func__31047__auto___31369);


var G__31370 = seq__31303_31362;
var G__31371 = chunk__31305_31363;
var G__31372 = count__31306_31364;
var G__31373 = (i__31307_31365 + (1));
seq__31303_31362 = G__31370;
chunk__31305_31363 = G__31371;
count__31306_31364 = G__31372;
i__31307_31365 = G__31373;
continue;
} else {
var temp__5735__auto___31374__$1 = cljs.core.seq.call(null,seq__31303_31362);
if(temp__5735__auto___31374__$1){
var seq__31303_31375__$1 = temp__5735__auto___31374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31303_31375__$1)){
var c__4556__auto___31376 = cljs.core.chunk_first.call(null,seq__31303_31375__$1);
var G__31377 = cljs.core.chunk_rest.call(null,seq__31303_31375__$1);
var G__31378 = c__4556__auto___31376;
var G__31379 = cljs.core.count.call(null,c__4556__auto___31376);
var G__31380 = (0);
seq__31303_31362 = G__31377;
chunk__31305_31363 = G__31378;
count__31306_31364 = G__31379;
i__31307_31365 = G__31380;
continue;
} else {
var func__31044__auto___31381 = cljs.core.first.call(null,seq__31303_31375__$1);
var instruction_name__31045__auto___31382 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31361),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31381)))].join(''));
var metadata__31046__auto___31383 = ((function (seq__31303_31362,chunk__31305_31363,count__31306_31364,i__31307_31365,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31382,func__31044__auto___31381,seq__31303_31375__$1,temp__5735__auto___31374__$1,stack__31043__auto___31361,seq__31302_31355__$1,temp__5735__auto___31354){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31303_31362,chunk__31305_31363,count__31306_31364,i__31307_31365,seq__31302_31318,chunk__31309_31319,count__31310_31320,i__31311_31321,instruction_name__31045__auto___31382,func__31044__auto___31381,seq__31303_31375__$1,temp__5735__auto___31374__$1,stack__31043__auto___31361,seq__31302_31355__$1,temp__5735__auto___31354))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31381),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31361,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31361)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31381)))))));
var new_func__31047__auto___31384 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31381,stack__31043__auto___31361),metadata__31046__auto___31383);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31382,new_func__31047__auto___31384);


var G__31385 = cljs.core.next.call(null,seq__31303_31375__$1);
var G__31386 = null;
var G__31387 = (0);
var G__31388 = (0);
seq__31303_31362 = G__31385;
chunk__31305_31363 = G__31386;
count__31306_31364 = G__31387;
i__31307_31365 = G__31388;
continue;
}
} else {
}
}
break;
}

var G__31389 = cljs.core.next.call(null,seq__31302_31355__$1);
var G__31390 = null;
var G__31391 = (0);
var G__31392 = (0);
seq__31302_31318 = G__31389;
chunk__31309_31319 = G__31390;
count__31310_31320 = G__31391;
i__31311_31321 = G__31392;
continue;
}
} else {
}
}
break;
}
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_cos","float_cos",-95039530),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.cos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_sin","float_sin",-1816563777),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.sin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_tan","float_tan",1899962771),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.tan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_from_integer","float_from_integer",-1946851415),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.float$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_from_float","integer_from_float",-175769178),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.int$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));

//# sourceMappingURL=numeric.js.map?rel=1626961182171

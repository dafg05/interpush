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
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26312_SHARP_,p2__26311_SHARP_){
if((p2__26311_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot.call(null,p1__26312_SHARP_,p2__26311_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_quot"], null));
propeller.push.instructions.numeric._mod = cljs.core.with_meta((function propeller$push$instructions$numeric$_mod(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26314_SHARP_,p2__26313_SHARP_){
if((p2__26313_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod.call(null,p1__26314_SHARP_,p2__26313_SHARP_);
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
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26315_SHARP_){
return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,(cljs.core.truth_(p1__26315_SHARP_)?(1):(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_boolean"], null));
propeller.push.instructions.numeric._from_char = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_char(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"char","char",-641587586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_char"], null));
propeller.push.instructions.numeric._from_string = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_string(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26316_SHARP_){
try{return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,cljs.reader.read_string.call(null,p1__26316_SHARP_));
}catch (e26317){if((e26317 instanceof Error)){
var e = e26317;
return null;
} else {
throw e26317;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_string"], null));
propeller.push.instructions.numeric._inc = cljs.core.with_meta((function propeller$push$instructions$numeric$_inc(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_inc"], null));
propeller.push.instructions.numeric._dec = cljs.core.with_meta((function propeller$push$instructions$numeric$_dec(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_dec"], null));
var seq__26318_26334 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710)], null));
var chunk__26325_26335 = null;
var count__26326_26336 = (0);
var i__26327_26337 = (0);
while(true){
if((i__26327_26337 < count__26326_26336)){
var stack__26005__auto___26338 = cljs.core._nth.call(null,chunk__26325_26335,i__26327_26337);
var seq__26328_26339 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__26330_26340 = null;
var count__26331_26341 = (0);
var i__26332_26342 = (0);
while(true){
if((i__26332_26342 < count__26331_26341)){
var func__26006__auto___26343 = cljs.core._nth.call(null,chunk__26330_26340,i__26332_26342);
var instruction_name__26007__auto___26344 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26338),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26343)))].join(''));
var metadata__26008__auto___26345 = ((function (seq__26328_26339,chunk__26330_26340,count__26331_26341,i__26332_26342,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26344,func__26006__auto___26343,stack__26005__auto___26338){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26328_26339,chunk__26330_26340,count__26331_26341,i__26332_26342,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26344,func__26006__auto___26343,stack__26005__auto___26338))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26343),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26338,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26338)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26343)))))));
var new_func__26009__auto___26346 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26343,stack__26005__auto___26338),metadata__26008__auto___26345);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26344,new_func__26009__auto___26346);


var G__26347 = seq__26328_26339;
var G__26348 = chunk__26330_26340;
var G__26349 = count__26331_26341;
var G__26350 = (i__26332_26342 + (1));
seq__26328_26339 = G__26347;
chunk__26330_26340 = G__26348;
count__26331_26341 = G__26349;
i__26332_26342 = G__26350;
continue;
} else {
var temp__5735__auto___26351 = cljs.core.seq.call(null,seq__26328_26339);
if(temp__5735__auto___26351){
var seq__26328_26352__$1 = temp__5735__auto___26351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26328_26352__$1)){
var c__4556__auto___26353 = cljs.core.chunk_first.call(null,seq__26328_26352__$1);
var G__26354 = cljs.core.chunk_rest.call(null,seq__26328_26352__$1);
var G__26355 = c__4556__auto___26353;
var G__26356 = cljs.core.count.call(null,c__4556__auto___26353);
var G__26357 = (0);
seq__26328_26339 = G__26354;
chunk__26330_26340 = G__26355;
count__26331_26341 = G__26356;
i__26332_26342 = G__26357;
continue;
} else {
var func__26006__auto___26358 = cljs.core.first.call(null,seq__26328_26352__$1);
var instruction_name__26007__auto___26359 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26338),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26358)))].join(''));
var metadata__26008__auto___26360 = ((function (seq__26328_26339,chunk__26330_26340,count__26331_26341,i__26332_26342,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26359,func__26006__auto___26358,seq__26328_26352__$1,temp__5735__auto___26351,stack__26005__auto___26338){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26328_26339,chunk__26330_26340,count__26331_26341,i__26332_26342,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26359,func__26006__auto___26358,seq__26328_26352__$1,temp__5735__auto___26351,stack__26005__auto___26338))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26358),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26338,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26338)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26358)))))));
var new_func__26009__auto___26361 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26358,stack__26005__auto___26338),metadata__26008__auto___26360);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26359,new_func__26009__auto___26361);


var G__26362 = cljs.core.next.call(null,seq__26328_26352__$1);
var G__26363 = null;
var G__26364 = (0);
var G__26365 = (0);
seq__26328_26339 = G__26362;
chunk__26330_26340 = G__26363;
count__26331_26341 = G__26364;
i__26332_26342 = G__26365;
continue;
}
} else {
}
}
break;
}

var G__26366 = seq__26318_26334;
var G__26367 = chunk__26325_26335;
var G__26368 = count__26326_26336;
var G__26369 = (i__26327_26337 + (1));
seq__26318_26334 = G__26366;
chunk__26325_26335 = G__26367;
count__26326_26336 = G__26368;
i__26327_26337 = G__26369;
continue;
} else {
var temp__5735__auto___26370 = cljs.core.seq.call(null,seq__26318_26334);
if(temp__5735__auto___26370){
var seq__26318_26371__$1 = temp__5735__auto___26370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26318_26371__$1)){
var c__4556__auto___26372 = cljs.core.chunk_first.call(null,seq__26318_26371__$1);
var G__26373 = cljs.core.chunk_rest.call(null,seq__26318_26371__$1);
var G__26374 = c__4556__auto___26372;
var G__26375 = cljs.core.count.call(null,c__4556__auto___26372);
var G__26376 = (0);
seq__26318_26334 = G__26373;
chunk__26325_26335 = G__26374;
count__26326_26336 = G__26375;
i__26327_26337 = G__26376;
continue;
} else {
var stack__26005__auto___26377 = cljs.core.first.call(null,seq__26318_26371__$1);
var seq__26319_26378 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__26321_26379 = null;
var count__26322_26380 = (0);
var i__26323_26381 = (0);
while(true){
if((i__26323_26381 < count__26322_26380)){
var func__26006__auto___26382 = cljs.core._nth.call(null,chunk__26321_26379,i__26323_26381);
var instruction_name__26007__auto___26383 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26382)))].join(''));
var metadata__26008__auto___26384 = ((function (seq__26319_26378,chunk__26321_26379,count__26322_26380,i__26323_26381,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26383,func__26006__auto___26382,stack__26005__auto___26377,seq__26318_26371__$1,temp__5735__auto___26370){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26319_26378,chunk__26321_26379,count__26322_26380,i__26323_26381,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26383,func__26006__auto___26382,stack__26005__auto___26377,seq__26318_26371__$1,temp__5735__auto___26370))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26382),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26377,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26377)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26382)))))));
var new_func__26009__auto___26385 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26382,stack__26005__auto___26377),metadata__26008__auto___26384);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26383,new_func__26009__auto___26385);


var G__26386 = seq__26319_26378;
var G__26387 = chunk__26321_26379;
var G__26388 = count__26322_26380;
var G__26389 = (i__26323_26381 + (1));
seq__26319_26378 = G__26386;
chunk__26321_26379 = G__26387;
count__26322_26380 = G__26388;
i__26323_26381 = G__26389;
continue;
} else {
var temp__5735__auto___26390__$1 = cljs.core.seq.call(null,seq__26319_26378);
if(temp__5735__auto___26390__$1){
var seq__26319_26391__$1 = temp__5735__auto___26390__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26319_26391__$1)){
var c__4556__auto___26392 = cljs.core.chunk_first.call(null,seq__26319_26391__$1);
var G__26393 = cljs.core.chunk_rest.call(null,seq__26319_26391__$1);
var G__26394 = c__4556__auto___26392;
var G__26395 = cljs.core.count.call(null,c__4556__auto___26392);
var G__26396 = (0);
seq__26319_26378 = G__26393;
chunk__26321_26379 = G__26394;
count__26322_26380 = G__26395;
i__26323_26381 = G__26396;
continue;
} else {
var func__26006__auto___26397 = cljs.core.first.call(null,seq__26319_26391__$1);
var instruction_name__26007__auto___26398 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26397)))].join(''));
var metadata__26008__auto___26399 = ((function (seq__26319_26378,chunk__26321_26379,count__26322_26380,i__26323_26381,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26398,func__26006__auto___26397,seq__26319_26391__$1,temp__5735__auto___26390__$1,stack__26005__auto___26377,seq__26318_26371__$1,temp__5735__auto___26370){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26319_26378,chunk__26321_26379,count__26322_26380,i__26323_26381,seq__26318_26334,chunk__26325_26335,count__26326_26336,i__26327_26337,instruction_name__26007__auto___26398,func__26006__auto___26397,seq__26319_26391__$1,temp__5735__auto___26390__$1,stack__26005__auto___26377,seq__26318_26371__$1,temp__5735__auto___26370))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26397),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26377,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26377)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26397)))))));
var new_func__26009__auto___26400 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26397,stack__26005__auto___26377),metadata__26008__auto___26399);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26398,new_func__26009__auto___26400);


var G__26401 = cljs.core.next.call(null,seq__26319_26391__$1);
var G__26402 = null;
var G__26403 = (0);
var G__26404 = (0);
seq__26319_26378 = G__26401;
chunk__26321_26379 = G__26402;
count__26322_26380 = G__26403;
i__26323_26381 = G__26404;
continue;
}
} else {
}
}
break;
}

var G__26405 = cljs.core.next.call(null,seq__26318_26371__$1);
var G__26406 = null;
var G__26407 = (0);
var G__26408 = (0);
seq__26318_26334 = G__26405;
chunk__26325_26335 = G__26406;
count__26326_26336 = G__26407;
i__26327_26337 = G__26408;
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

//# sourceMappingURL=numeric.js.map?rel=1627930533768

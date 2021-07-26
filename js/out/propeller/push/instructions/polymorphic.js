// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.polymorphic');
goog.require('cljs.core');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.globals');
propeller.push.instructions.polymorphic._dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup(stack,state){
var top_item = propeller.push.state.peek_stack.call(null,state,stack);
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
return propeller.push.state.push_to_stack.call(null,state,stack,top_item);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_dup"], null));
propeller.push.instructions.polymorphic._dup_times = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_times(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var n = (function (){var x__4217__auto__ = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var y__4218__auto__ = ((propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size.call(null,state,stack)) + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = propeller.push.state.peek_stack.call(null,popped_state,stack);
var top_item_dup = cljs.core.take.call(null,(n - (1)),cljs.core.repeat.call(null,top_item));
if(((0) < n)){
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_item_dup);
} else {
return propeller.push.state.pop_stack.call(null,popped_state,stack);

}
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_dup_times"], null));
propeller.push.instructions.polymorphic._dup_items = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_items(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))){
return state;
} else {
var n = (function (){var x__4217__auto__ = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var y__4218__auto__ = (propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size.call(null,state,stack));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_items = cljs.core.take.call(null,n,cljs.core.get.call(null,popped_state,stack));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_items);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_dup_items"], null));
propeller.push.instructions.polymorphic._empty = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_empty(stack,state){
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),propeller.push.state.empty_stack_QMARK_.call(null,state,stack));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_empty"], null));
propeller.push.instructions.polymorphic._eq = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_eq(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_eq"], null));
propeller.push.instructions.polymorphic._flush = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_flush(stack,state){
return cljs.core.assoc.call(null,state,stack,cljs.core.List.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_flush"], null));
propeller.push.instructions.polymorphic._pop = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_pop(stack,state){
return propeller.push.state.pop_stack.call(null,state,stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_pop"], null));
propeller.push.instructions.polymorphic._rot = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_rot(stack,state){
if(((3) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_three = propeller.push.state.peek_stack_many.call(null,state,stack,(3));
var popped_state = propeller.push.state.pop_stack_many.call(null,state,stack,(3));
var top_three_rot = cljs.core.take.call(null,(3),cljs.core.conj.call(null,top_three,cljs.core.last.call(null,top_three)));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_three_rot);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_rot"], null));
propeller.push.instructions.polymorphic._shove = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_shove(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = propeller.push.state.peek_stack.call(null,popped_state,stack);
var popped_state__$1 = propeller.push.state.pop_stack.call(null,popped_state,stack);
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state__$1,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.update.call(null,popped_state__$1,stack,(function (p1__31445_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,index,p1__31445_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.drop.call(null,index,p1__31445_SHARP_)));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_shove"], null));
propeller.push.instructions.polymorphic._stack_depth = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_stack_depth(stack,state){
var stack_depth = cljs.core.count.call(null,cljs.core.get.call(null,state,stack));
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710),stack_depth);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_stack_depth"], null));
propeller.push.instructions.polymorphic._swap = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_swap(stack,state){
if(((2) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_two = propeller.push.state.peek_stack_many.call(null,state,stack,(2));
var popped_state = propeller.push.state.pop_stack_many.call(null,state,stack,(2));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,cljs.core.reverse.call(null,top_two));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_swap"], null));
propeller.push.instructions.polymorphic._yank = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return cljs.core.update.call(null,popped_state,stack,(function (p1__31446_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.call(null,index,p1__31446_SHARP_),cljs.core.rest.call(null,cljs.core.drop.call(null,index,p1__31446_SHARP_))));
}));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_yank"], null));
propeller.push.instructions.polymorphic._yank_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank_dup(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return propeller.push.state.push_to_stack.call(null,popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_yank_dup"], null));
propeller.push.instructions.polymorphic._deep_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_deep_dup(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = index_raw;
var y__4218__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.reverse.call(null,cljs.core.get.call(null,popped_state,stack)),index);
return propeller.push.state.push_to_stack.call(null,popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_deep_dup"], null));
var seq__31447_31463 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__31454_31464 = null;
var count__31455_31465 = (0);
var i__31456_31466 = (0);
while(true){
if((i__31456_31466 < count__31455_31465)){
var stack__31043__auto___31467 = cljs.core._nth.call(null,chunk__31454_31464,i__31456_31466);
var seq__31457_31468 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__31459_31469 = null;
var count__31460_31470 = (0);
var i__31461_31471 = (0);
while(true){
if((i__31461_31471 < count__31460_31470)){
var func__31044__auto___31472 = cljs.core._nth.call(null,chunk__31459_31469,i__31461_31471);
var instruction_name__31045__auto___31473 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31467),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31472)))].join(''));
var metadata__31046__auto___31474 = ((function (seq__31457_31468,chunk__31459_31469,count__31460_31470,i__31461_31471,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31473,func__31044__auto___31472,stack__31043__auto___31467){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31457_31468,chunk__31459_31469,count__31460_31470,i__31461_31471,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31473,func__31044__auto___31472,stack__31043__auto___31467))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31472),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31467,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31467)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31472)))))));
var new_func__31047__auto___31475 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31472,stack__31043__auto___31467),metadata__31046__auto___31474);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31473,new_func__31047__auto___31475);


var G__31476 = seq__31457_31468;
var G__31477 = chunk__31459_31469;
var G__31478 = count__31460_31470;
var G__31479 = (i__31461_31471 + (1));
seq__31457_31468 = G__31476;
chunk__31459_31469 = G__31477;
count__31460_31470 = G__31478;
i__31461_31471 = G__31479;
continue;
} else {
var temp__5735__auto___31480 = cljs.core.seq.call(null,seq__31457_31468);
if(temp__5735__auto___31480){
var seq__31457_31481__$1 = temp__5735__auto___31480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31457_31481__$1)){
var c__4556__auto___31482 = cljs.core.chunk_first.call(null,seq__31457_31481__$1);
var G__31483 = cljs.core.chunk_rest.call(null,seq__31457_31481__$1);
var G__31484 = c__4556__auto___31482;
var G__31485 = cljs.core.count.call(null,c__4556__auto___31482);
var G__31486 = (0);
seq__31457_31468 = G__31483;
chunk__31459_31469 = G__31484;
count__31460_31470 = G__31485;
i__31461_31471 = G__31486;
continue;
} else {
var func__31044__auto___31487 = cljs.core.first.call(null,seq__31457_31481__$1);
var instruction_name__31045__auto___31488 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31467),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31487)))].join(''));
var metadata__31046__auto___31489 = ((function (seq__31457_31468,chunk__31459_31469,count__31460_31470,i__31461_31471,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31488,func__31044__auto___31487,seq__31457_31481__$1,temp__5735__auto___31480,stack__31043__auto___31467){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31457_31468,chunk__31459_31469,count__31460_31470,i__31461_31471,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31488,func__31044__auto___31487,seq__31457_31481__$1,temp__5735__auto___31480,stack__31043__auto___31467))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31467,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31467)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31487)))))));
var new_func__31047__auto___31490 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31487,stack__31043__auto___31467),metadata__31046__auto___31489);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31488,new_func__31047__auto___31490);


var G__31491 = cljs.core.next.call(null,seq__31457_31481__$1);
var G__31492 = null;
var G__31493 = (0);
var G__31494 = (0);
seq__31457_31468 = G__31491;
chunk__31459_31469 = G__31492;
count__31460_31470 = G__31493;
i__31461_31471 = G__31494;
continue;
}
} else {
}
}
break;
}

var G__31495 = seq__31447_31463;
var G__31496 = chunk__31454_31464;
var G__31497 = count__31455_31465;
var G__31498 = (i__31456_31466 + (1));
seq__31447_31463 = G__31495;
chunk__31454_31464 = G__31496;
count__31455_31465 = G__31497;
i__31456_31466 = G__31498;
continue;
} else {
var temp__5735__auto___31499 = cljs.core.seq.call(null,seq__31447_31463);
if(temp__5735__auto___31499){
var seq__31447_31500__$1 = temp__5735__auto___31499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31447_31500__$1)){
var c__4556__auto___31501 = cljs.core.chunk_first.call(null,seq__31447_31500__$1);
var G__31502 = cljs.core.chunk_rest.call(null,seq__31447_31500__$1);
var G__31503 = c__4556__auto___31501;
var G__31504 = cljs.core.count.call(null,c__4556__auto___31501);
var G__31505 = (0);
seq__31447_31463 = G__31502;
chunk__31454_31464 = G__31503;
count__31455_31465 = G__31504;
i__31456_31466 = G__31505;
continue;
} else {
var stack__31043__auto___31506 = cljs.core.first.call(null,seq__31447_31500__$1);
var seq__31448_31507 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__31450_31508 = null;
var count__31451_31509 = (0);
var i__31452_31510 = (0);
while(true){
if((i__31452_31510 < count__31451_31509)){
var func__31044__auto___31511 = cljs.core._nth.call(null,chunk__31450_31508,i__31452_31510);
var instruction_name__31045__auto___31512 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31506),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31511)))].join(''));
var metadata__31046__auto___31513 = ((function (seq__31448_31507,chunk__31450_31508,count__31451_31509,i__31452_31510,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31512,func__31044__auto___31511,stack__31043__auto___31506,seq__31447_31500__$1,temp__5735__auto___31499){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31448_31507,chunk__31450_31508,count__31451_31509,i__31452_31510,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31512,func__31044__auto___31511,stack__31043__auto___31506,seq__31447_31500__$1,temp__5735__auto___31499))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31511),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31506,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31506)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31511)))))));
var new_func__31047__auto___31514 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31511,stack__31043__auto___31506),metadata__31046__auto___31513);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31512,new_func__31047__auto___31514);


var G__31515 = seq__31448_31507;
var G__31516 = chunk__31450_31508;
var G__31517 = count__31451_31509;
var G__31518 = (i__31452_31510 + (1));
seq__31448_31507 = G__31515;
chunk__31450_31508 = G__31516;
count__31451_31509 = G__31517;
i__31452_31510 = G__31518;
continue;
} else {
var temp__5735__auto___31519__$1 = cljs.core.seq.call(null,seq__31448_31507);
if(temp__5735__auto___31519__$1){
var seq__31448_31520__$1 = temp__5735__auto___31519__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31448_31520__$1)){
var c__4556__auto___31521 = cljs.core.chunk_first.call(null,seq__31448_31520__$1);
var G__31522 = cljs.core.chunk_rest.call(null,seq__31448_31520__$1);
var G__31523 = c__4556__auto___31521;
var G__31524 = cljs.core.count.call(null,c__4556__auto___31521);
var G__31525 = (0);
seq__31448_31507 = G__31522;
chunk__31450_31508 = G__31523;
count__31451_31509 = G__31524;
i__31452_31510 = G__31525;
continue;
} else {
var func__31044__auto___31526 = cljs.core.first.call(null,seq__31448_31520__$1);
var instruction_name__31045__auto___31527 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31506),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31526)))].join(''));
var metadata__31046__auto___31528 = ((function (seq__31448_31507,chunk__31450_31508,count__31451_31509,i__31452_31510,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31527,func__31044__auto___31526,seq__31448_31520__$1,temp__5735__auto___31519__$1,stack__31043__auto___31506,seq__31447_31500__$1,temp__5735__auto___31499){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31448_31507,chunk__31450_31508,count__31451_31509,i__31452_31510,seq__31447_31463,chunk__31454_31464,count__31455_31465,i__31456_31466,instruction_name__31045__auto___31527,func__31044__auto___31526,seq__31448_31520__$1,temp__5735__auto___31519__$1,stack__31043__auto___31506,seq__31447_31500__$1,temp__5735__auto___31499))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31526),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31506,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31506)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31526)))))));
var new_func__31047__auto___31529 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31526,stack__31043__auto___31506),metadata__31046__auto___31528);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31527,new_func__31047__auto___31529);


var G__31530 = cljs.core.next.call(null,seq__31448_31520__$1);
var G__31531 = null;
var G__31532 = (0);
var G__31533 = (0);
seq__31448_31507 = G__31530;
chunk__31450_31508 = G__31531;
count__31451_31509 = G__31532;
i__31452_31510 = G__31533;
continue;
}
} else {
}
}
break;
}

var G__31534 = cljs.core.next.call(null,seq__31447_31500__$1);
var G__31535 = null;
var G__31536 = (0);
var G__31537 = (0);
seq__31447_31463 = G__31534;
chunk__31454_31464 = G__31535;
count__31455_31465 = G__31536;
i__31456_31466 = G__31537;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=polymorphic.js.map?rel=1626961182354

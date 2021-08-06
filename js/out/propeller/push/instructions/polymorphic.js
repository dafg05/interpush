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
return cljs.core.update.call(null,popped_state__$1,stack,(function (p1__26566_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,index,p1__26566_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.drop.call(null,index,p1__26566_SHARP_)));
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
return cljs.core.update.call(null,popped_state,stack,(function (p1__26567_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.call(null,index,p1__26567_SHARP_),cljs.core.rest.call(null,cljs.core.drop.call(null,index,p1__26567_SHARP_))));
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
var seq__26568_26584 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__26575_26585 = null;
var count__26576_26586 = (0);
var i__26577_26587 = (0);
while(true){
if((i__26577_26587 < count__26576_26586)){
var stack__26005__auto___26588 = cljs.core._nth.call(null,chunk__26575_26585,i__26577_26587);
var seq__26578_26589 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__26580_26590 = null;
var count__26581_26591 = (0);
var i__26582_26592 = (0);
while(true){
if((i__26582_26592 < count__26581_26591)){
var func__26006__auto___26593 = cljs.core._nth.call(null,chunk__26580_26590,i__26582_26592);
var instruction_name__26007__auto___26594 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26588),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26593)))].join(''));
var metadata__26008__auto___26595 = ((function (seq__26578_26589,chunk__26580_26590,count__26581_26591,i__26582_26592,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26594,func__26006__auto___26593,stack__26005__auto___26588){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26578_26589,chunk__26580_26590,count__26581_26591,i__26582_26592,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26594,func__26006__auto___26593,stack__26005__auto___26588))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26593),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26588,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26588)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26593)))))));
var new_func__26009__auto___26596 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26593,stack__26005__auto___26588),metadata__26008__auto___26595);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26594,new_func__26009__auto___26596);


var G__26597 = seq__26578_26589;
var G__26598 = chunk__26580_26590;
var G__26599 = count__26581_26591;
var G__26600 = (i__26582_26592 + (1));
seq__26578_26589 = G__26597;
chunk__26580_26590 = G__26598;
count__26581_26591 = G__26599;
i__26582_26592 = G__26600;
continue;
} else {
var temp__5735__auto___26601 = cljs.core.seq.call(null,seq__26578_26589);
if(temp__5735__auto___26601){
var seq__26578_26602__$1 = temp__5735__auto___26601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26578_26602__$1)){
var c__4556__auto___26603 = cljs.core.chunk_first.call(null,seq__26578_26602__$1);
var G__26604 = cljs.core.chunk_rest.call(null,seq__26578_26602__$1);
var G__26605 = c__4556__auto___26603;
var G__26606 = cljs.core.count.call(null,c__4556__auto___26603);
var G__26607 = (0);
seq__26578_26589 = G__26604;
chunk__26580_26590 = G__26605;
count__26581_26591 = G__26606;
i__26582_26592 = G__26607;
continue;
} else {
var func__26006__auto___26608 = cljs.core.first.call(null,seq__26578_26602__$1);
var instruction_name__26007__auto___26609 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26588),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26608)))].join(''));
var metadata__26008__auto___26610 = ((function (seq__26578_26589,chunk__26580_26590,count__26581_26591,i__26582_26592,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26609,func__26006__auto___26608,seq__26578_26602__$1,temp__5735__auto___26601,stack__26005__auto___26588){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26578_26589,chunk__26580_26590,count__26581_26591,i__26582_26592,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26609,func__26006__auto___26608,seq__26578_26602__$1,temp__5735__auto___26601,stack__26005__auto___26588))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26608),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26588,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26588)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26608)))))));
var new_func__26009__auto___26611 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26608,stack__26005__auto___26588),metadata__26008__auto___26610);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26609,new_func__26009__auto___26611);


var G__26612 = cljs.core.next.call(null,seq__26578_26602__$1);
var G__26613 = null;
var G__26614 = (0);
var G__26615 = (0);
seq__26578_26589 = G__26612;
chunk__26580_26590 = G__26613;
count__26581_26591 = G__26614;
i__26582_26592 = G__26615;
continue;
}
} else {
}
}
break;
}

var G__26616 = seq__26568_26584;
var G__26617 = chunk__26575_26585;
var G__26618 = count__26576_26586;
var G__26619 = (i__26577_26587 + (1));
seq__26568_26584 = G__26616;
chunk__26575_26585 = G__26617;
count__26576_26586 = G__26618;
i__26577_26587 = G__26619;
continue;
} else {
var temp__5735__auto___26620 = cljs.core.seq.call(null,seq__26568_26584);
if(temp__5735__auto___26620){
var seq__26568_26621__$1 = temp__5735__auto___26620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26568_26621__$1)){
var c__4556__auto___26622 = cljs.core.chunk_first.call(null,seq__26568_26621__$1);
var G__26623 = cljs.core.chunk_rest.call(null,seq__26568_26621__$1);
var G__26624 = c__4556__auto___26622;
var G__26625 = cljs.core.count.call(null,c__4556__auto___26622);
var G__26626 = (0);
seq__26568_26584 = G__26623;
chunk__26575_26585 = G__26624;
count__26576_26586 = G__26625;
i__26577_26587 = G__26626;
continue;
} else {
var stack__26005__auto___26627 = cljs.core.first.call(null,seq__26568_26621__$1);
var seq__26569_26628 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__26571_26629 = null;
var count__26572_26630 = (0);
var i__26573_26631 = (0);
while(true){
if((i__26573_26631 < count__26572_26630)){
var func__26006__auto___26632 = cljs.core._nth.call(null,chunk__26571_26629,i__26573_26631);
var instruction_name__26007__auto___26633 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26627),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26632)))].join(''));
var metadata__26008__auto___26634 = ((function (seq__26569_26628,chunk__26571_26629,count__26572_26630,i__26573_26631,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26633,func__26006__auto___26632,stack__26005__auto___26627,seq__26568_26621__$1,temp__5735__auto___26620){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26569_26628,chunk__26571_26629,count__26572_26630,i__26573_26631,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26633,func__26006__auto___26632,stack__26005__auto___26627,seq__26568_26621__$1,temp__5735__auto___26620))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26627,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26627)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26632)))))));
var new_func__26009__auto___26635 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26632,stack__26005__auto___26627),metadata__26008__auto___26634);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26633,new_func__26009__auto___26635);


var G__26636 = seq__26569_26628;
var G__26637 = chunk__26571_26629;
var G__26638 = count__26572_26630;
var G__26639 = (i__26573_26631 + (1));
seq__26569_26628 = G__26636;
chunk__26571_26629 = G__26637;
count__26572_26630 = G__26638;
i__26573_26631 = G__26639;
continue;
} else {
var temp__5735__auto___26640__$1 = cljs.core.seq.call(null,seq__26569_26628);
if(temp__5735__auto___26640__$1){
var seq__26569_26641__$1 = temp__5735__auto___26640__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26569_26641__$1)){
var c__4556__auto___26642 = cljs.core.chunk_first.call(null,seq__26569_26641__$1);
var G__26643 = cljs.core.chunk_rest.call(null,seq__26569_26641__$1);
var G__26644 = c__4556__auto___26642;
var G__26645 = cljs.core.count.call(null,c__4556__auto___26642);
var G__26646 = (0);
seq__26569_26628 = G__26643;
chunk__26571_26629 = G__26644;
count__26572_26630 = G__26645;
i__26573_26631 = G__26646;
continue;
} else {
var func__26006__auto___26647 = cljs.core.first.call(null,seq__26569_26641__$1);
var instruction_name__26007__auto___26648 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26627),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26647)))].join(''));
var metadata__26008__auto___26649 = ((function (seq__26569_26628,chunk__26571_26629,count__26572_26630,i__26573_26631,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26648,func__26006__auto___26647,seq__26569_26641__$1,temp__5735__auto___26640__$1,stack__26005__auto___26627,seq__26568_26621__$1,temp__5735__auto___26620){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26569_26628,chunk__26571_26629,count__26572_26630,i__26573_26631,seq__26568_26584,chunk__26575_26585,count__26576_26586,i__26577_26587,instruction_name__26007__auto___26648,func__26006__auto___26647,seq__26569_26641__$1,temp__5735__auto___26640__$1,stack__26005__auto___26627,seq__26568_26621__$1,temp__5735__auto___26620))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26647),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26627,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26627)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26647)))))));
var new_func__26009__auto___26650 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26647,stack__26005__auto___26627),metadata__26008__auto___26649);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26648,new_func__26009__auto___26650);


var G__26651 = cljs.core.next.call(null,seq__26569_26641__$1);
var G__26652 = null;
var G__26653 = (0);
var G__26654 = (0);
seq__26569_26628 = G__26651;
chunk__26571_26629 = G__26652;
count__26572_26630 = G__26653;
i__26573_26631 = G__26654;
continue;
}
} else {
}
}
break;
}

var G__26655 = cljs.core.next.call(null,seq__26568_26621__$1);
var G__26656 = null;
var G__26657 = (0);
var G__26658 = (0);
seq__26568_26584 = G__26655;
chunk__26575_26585 = G__26656;
count__26576_26586 = G__26657;
i__26577_26587 = G__26658;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=polymorphic.js.map?rel=1627930534075

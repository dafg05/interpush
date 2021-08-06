// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.vector');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
propeller.push.instructions.vector._butlast = cljs.core.with_meta((function propeller$push$instructions$vector$_butlast(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26021_SHARP_){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,p1__26021_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_butlast"], null));
propeller.push.instructions.vector._concat = cljs.core.with_meta((function propeller$push$instructions$vector$_concat(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26023_SHARP_,p2__26022_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p2__26022_SHARP_,p1__26023_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_concat"], null));
propeller.push.instructions.vector._conj = cljs.core.with_meta((function propeller$push$instructions$vector$_conj(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26025_SHARP_,p2__26024_SHARP_){
return cljs.core.conj.call(null,p2__26024_SHARP_,p1__26025_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_conj"], null));
propeller.push.instructions.vector._contains = cljs.core.with_meta((function propeller$push$instructions$vector$_contains(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26027_SHARP_,p2__26026_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,p2__26026_SHARP_),p1__26027_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_contains"], null));
propeller.push.instructions.vector._emptyvector = cljs.core.with_meta((function propeller$push$instructions$vector$_emptyvector(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_emptyvector"], null));
propeller.push.instructions.vector._first = cljs.core.with_meta((function propeller$push$instructions$vector$_first(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26028_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__26028_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.first.call(null,p1__26028_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_first"], null));
propeller.push.instructions.vector._indexof = cljs.core.with_meta((function propeller$push$instructions$vector$_indexof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26029_SHARP_,p2__26030_SHARP_){
return propeller.utils.indexof.call(null,p1__26029_SHARP_,p2__26030_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_indexof"], null));
propeller.push.instructions.vector._iterate = cljs.core.with_meta((function propeller$push$instructions$vector$_iterate(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
if(((propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))) || (propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))){
return state;
} else {
var vect = propeller.push.state.peek_stack.call(null,state,stack);
var popped_state = propeller.push.state.pop_stack.call(null,state,stack);
if(cljs.core.empty_QMARK_.call(null,vect)){
return propeller.push.state.pop_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743));
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,vect))){
return propeller.push.state.push_to_stack.call(null,popped_state,lit_stack,cljs.core.first.call(null,vect));
} else {
return propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.keyword.call(null,[cljs.core.name.call(null,stack),"_iterate"].join(''))),new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.vec.call(null,cljs.core.rest.call(null,vect))),new cljs.core.Keyword(null,"exec","exec",1625568743),propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))),lit_stack,cljs.core.first.call(null,vect));

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_iterate"], null));
propeller.push.instructions.vector._last = cljs.core.with_meta((function propeller$push$instructions$vector$_last(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26031_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__26031_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.last.call(null,p1__26031_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_last"], null));
propeller.push.instructions.vector._length = cljs.core.with_meta((function propeller$push$instructions$vector$_length(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_length"], null));
propeller.push.instructions.vector._nth = cljs.core.with_meta((function propeller$push$instructions$vector$_nth(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26033_SHARP_,p2__26032_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p2__26032_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.get.call(null,p2__26032_SHARP_,cljs.core.mod.call(null,p1__26033_SHARP_,cljs.core.count.call(null,p2__26032_SHARP_)));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_nth"], null));
propeller.push.instructions.vector._occurrencesof = cljs.core.with_meta((function propeller$push$instructions$vector$_occurrencesof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit,vect){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__26034_SHARP_){
return cljs.core._EQ_.call(null,lit,p1__26034_SHARP_);
}),vect));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_occurrencesof"], null));
propeller.push.instructions.vector._pushall = cljs.core.with_meta((function propeller$push$instructions$vector$_pushall(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
var top_vector = propeller.push.state.peek_stack.call(null,state,stack);
var popped_state = propeller.push.state.pop_stack.call(null,state,stack);
return propeller.push.state.push_to_stack_many.call(null,popped_state,lit_stack,top_vector);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_pushall"], null));
propeller.push.instructions.vector._remove = cljs.core.with_meta((function propeller$push$instructions$vector$_remove(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit,vect){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__26035_SHARP_){
return cljs.core.not_EQ_.call(null,lit,p1__26035_SHARP_);
}),vect));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_remove"], null));
propeller.push.instructions.vector._replace = cljs.core.with_meta((function propeller$push$instructions$vector$_replace(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit1,lit2,vect){
return cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([lit1,lit2]),vect);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_replace"], null));
propeller.push.instructions.vector._replacefirst = cljs.core.with_meta((function propeller$push$instructions$vector$_replacefirst(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit1,lit2,vect){
var replaceindex = propeller.utils.indexof.call(null,lit1,vect);
if(cljs.core._EQ_.call(null,replaceindex,(-1))){
return vect;
} else {
return cljs.core.assoc.call(null,vect,replaceindex,lit2);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_replacefirst"], null));
propeller.push.instructions.vector._rest = cljs.core.with_meta((function propeller$push$instructions$vector$_rest(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26036_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__26036_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_rest"], null));
propeller.push.instructions.vector._reverse = cljs.core.with_meta((function propeller$push$instructions$vector$_reverse(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26037_SHARP_){
return cljs.core.vec.call(null,cljs.core.reverse.call(null,p1__26037_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_reverse"], null));
propeller.push.instructions.vector._set = cljs.core.with_meta((function propeller$push$instructions$vector$_set(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit,n,vect){
if(cljs.core.empty_QMARK_.call(null,vect)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.assoc.call(null,vect,cljs.core.mod.call(null,n,cljs.core.count.call(null,vect)),lit);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_set"], null));
propeller.push.instructions.vector._subvec = cljs.core.with_meta((function propeller$push$instructions$vector$_subvec(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (start_raw,stop_raw,vect){
var start = (function (){var x__4217__auto__ = cljs.core.count.call(null,vect);
var y__4218__auto__ = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = start_raw;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var stop = (function (){var x__4217__auto__ = cljs.core.count.call(null,vect);
var y__4218__auto__ = (function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = start_raw;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = stop_raw;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return cljs.core.subvec.call(null,vect,start,stop);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_subvec"], null));
propeller.push.instructions.vector._take = cljs.core.with_meta((function propeller$push$instructions$vector$_take(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__26038_SHARP_,p2__26039_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,p1__26038_SHARP_,p2__26039_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_take"], null));
var seq__26040_26056 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__26047_26057 = null;
var count__26048_26058 = (0);
var i__26049_26059 = (0);
while(true){
if((i__26049_26059 < count__26048_26058)){
var stack__26005__auto___26060 = cljs.core._nth.call(null,chunk__26047_26057,i__26049_26059);
var seq__26050_26061 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__26052_26062 = null;
var count__26053_26063 = (0);
var i__26054_26064 = (0);
while(true){
if((i__26054_26064 < count__26053_26063)){
var func__26006__auto___26065 = cljs.core._nth.call(null,chunk__26052_26062,i__26054_26064);
var instruction_name__26007__auto___26066 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26060),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26065)))].join(''));
var metadata__26008__auto___26067 = ((function (seq__26050_26061,chunk__26052_26062,count__26053_26063,i__26054_26064,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26066,func__26006__auto___26065,stack__26005__auto___26060){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26050_26061,chunk__26052_26062,count__26053_26063,i__26054_26064,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26066,func__26006__auto___26065,stack__26005__auto___26060))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26065),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26060,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26060)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26065)))))));
var new_func__26009__auto___26068 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26065,stack__26005__auto___26060),metadata__26008__auto___26067);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26066,new_func__26009__auto___26068);


var G__26069 = seq__26050_26061;
var G__26070 = chunk__26052_26062;
var G__26071 = count__26053_26063;
var G__26072 = (i__26054_26064 + (1));
seq__26050_26061 = G__26069;
chunk__26052_26062 = G__26070;
count__26053_26063 = G__26071;
i__26054_26064 = G__26072;
continue;
} else {
var temp__5735__auto___26073 = cljs.core.seq.call(null,seq__26050_26061);
if(temp__5735__auto___26073){
var seq__26050_26074__$1 = temp__5735__auto___26073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26050_26074__$1)){
var c__4556__auto___26075 = cljs.core.chunk_first.call(null,seq__26050_26074__$1);
var G__26076 = cljs.core.chunk_rest.call(null,seq__26050_26074__$1);
var G__26077 = c__4556__auto___26075;
var G__26078 = cljs.core.count.call(null,c__4556__auto___26075);
var G__26079 = (0);
seq__26050_26061 = G__26076;
chunk__26052_26062 = G__26077;
count__26053_26063 = G__26078;
i__26054_26064 = G__26079;
continue;
} else {
var func__26006__auto___26080 = cljs.core.first.call(null,seq__26050_26074__$1);
var instruction_name__26007__auto___26081 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26060),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26080)))].join(''));
var metadata__26008__auto___26082 = ((function (seq__26050_26061,chunk__26052_26062,count__26053_26063,i__26054_26064,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26081,func__26006__auto___26080,seq__26050_26074__$1,temp__5735__auto___26073,stack__26005__auto___26060){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26050_26061,chunk__26052_26062,count__26053_26063,i__26054_26064,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26081,func__26006__auto___26080,seq__26050_26074__$1,temp__5735__auto___26073,stack__26005__auto___26060))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26080),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26060,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26060)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26080)))))));
var new_func__26009__auto___26083 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26080,stack__26005__auto___26060),metadata__26008__auto___26082);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26081,new_func__26009__auto___26083);


var G__26084 = cljs.core.next.call(null,seq__26050_26074__$1);
var G__26085 = null;
var G__26086 = (0);
var G__26087 = (0);
seq__26050_26061 = G__26084;
chunk__26052_26062 = G__26085;
count__26053_26063 = G__26086;
i__26054_26064 = G__26087;
continue;
}
} else {
}
}
break;
}

var G__26088 = seq__26040_26056;
var G__26089 = chunk__26047_26057;
var G__26090 = count__26048_26058;
var G__26091 = (i__26049_26059 + (1));
seq__26040_26056 = G__26088;
chunk__26047_26057 = G__26089;
count__26048_26058 = G__26090;
i__26049_26059 = G__26091;
continue;
} else {
var temp__5735__auto___26092 = cljs.core.seq.call(null,seq__26040_26056);
if(temp__5735__auto___26092){
var seq__26040_26093__$1 = temp__5735__auto___26092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26040_26093__$1)){
var c__4556__auto___26094 = cljs.core.chunk_first.call(null,seq__26040_26093__$1);
var G__26095 = cljs.core.chunk_rest.call(null,seq__26040_26093__$1);
var G__26096 = c__4556__auto___26094;
var G__26097 = cljs.core.count.call(null,c__4556__auto___26094);
var G__26098 = (0);
seq__26040_26056 = G__26095;
chunk__26047_26057 = G__26096;
count__26048_26058 = G__26097;
i__26049_26059 = G__26098;
continue;
} else {
var stack__26005__auto___26099 = cljs.core.first.call(null,seq__26040_26093__$1);
var seq__26041_26100 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__26043_26101 = null;
var count__26044_26102 = (0);
var i__26045_26103 = (0);
while(true){
if((i__26045_26103 < count__26044_26102)){
var func__26006__auto___26104 = cljs.core._nth.call(null,chunk__26043_26101,i__26045_26103);
var instruction_name__26007__auto___26105 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26099),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26104)))].join(''));
var metadata__26008__auto___26106 = ((function (seq__26041_26100,chunk__26043_26101,count__26044_26102,i__26045_26103,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26105,func__26006__auto___26104,stack__26005__auto___26099,seq__26040_26093__$1,temp__5735__auto___26092){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26041_26100,chunk__26043_26101,count__26044_26102,i__26045_26103,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26105,func__26006__auto___26104,stack__26005__auto___26099,seq__26040_26093__$1,temp__5735__auto___26092))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26104),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26099,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26099)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26104)))))));
var new_func__26009__auto___26107 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26104,stack__26005__auto___26099),metadata__26008__auto___26106);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26105,new_func__26009__auto___26107);


var G__26108 = seq__26041_26100;
var G__26109 = chunk__26043_26101;
var G__26110 = count__26044_26102;
var G__26111 = (i__26045_26103 + (1));
seq__26041_26100 = G__26108;
chunk__26043_26101 = G__26109;
count__26044_26102 = G__26110;
i__26045_26103 = G__26111;
continue;
} else {
var temp__5735__auto___26112__$1 = cljs.core.seq.call(null,seq__26041_26100);
if(temp__5735__auto___26112__$1){
var seq__26041_26113__$1 = temp__5735__auto___26112__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26041_26113__$1)){
var c__4556__auto___26114 = cljs.core.chunk_first.call(null,seq__26041_26113__$1);
var G__26115 = cljs.core.chunk_rest.call(null,seq__26041_26113__$1);
var G__26116 = c__4556__auto___26114;
var G__26117 = cljs.core.count.call(null,c__4556__auto___26114);
var G__26118 = (0);
seq__26041_26100 = G__26115;
chunk__26043_26101 = G__26116;
count__26044_26102 = G__26117;
i__26045_26103 = G__26118;
continue;
} else {
var func__26006__auto___26119 = cljs.core.first.call(null,seq__26041_26113__$1);
var instruction_name__26007__auto___26120 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26099),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26119)))].join(''));
var metadata__26008__auto___26121 = ((function (seq__26041_26100,chunk__26043_26101,count__26044_26102,i__26045_26103,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26120,func__26006__auto___26119,seq__26041_26113__$1,temp__5735__auto___26112__$1,stack__26005__auto___26099,seq__26040_26093__$1,temp__5735__auto___26092){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26041_26100,chunk__26043_26101,count__26044_26102,i__26045_26103,seq__26040_26056,chunk__26047_26057,count__26048_26058,i__26049_26059,instruction_name__26007__auto___26120,func__26006__auto___26119,seq__26041_26113__$1,temp__5735__auto___26112__$1,stack__26005__auto___26099,seq__26040_26093__$1,temp__5735__auto___26092))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26119),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26099,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26099)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26119)))))));
var new_func__26009__auto___26122 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26119,stack__26005__auto___26099),metadata__26008__auto___26121);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26120,new_func__26009__auto___26122);


var G__26123 = cljs.core.next.call(null,seq__26041_26113__$1);
var G__26124 = null;
var G__26125 = (0);
var G__26126 = (0);
seq__26041_26100 = G__26123;
chunk__26043_26101 = G__26124;
count__26044_26102 = G__26125;
i__26045_26103 = G__26126;
continue;
}
} else {
}
}
break;
}

var G__26127 = cljs.core.next.call(null,seq__26040_26093__$1);
var G__26128 = null;
var G__26129 = (0);
var G__26130 = (0);
seq__26040_26056 = G__26127;
chunk__26047_26057 = G__26128;
count__26048_26058 = G__26129;
i__26049_26059 = G__26130;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=vector.js.map?rel=1627930533430

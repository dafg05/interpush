// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.vector');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
propeller.push.instructions.vector._butlast = cljs.core.with_meta((function propeller$push$instructions$vector$_butlast(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31166_SHARP_){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,p1__31166_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_butlast"], null));
propeller.push.instructions.vector._concat = cljs.core.with_meta((function propeller$push$instructions$vector$_concat(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31168_SHARP_,p2__31167_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p2__31167_SHARP_,p1__31168_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_concat"], null));
propeller.push.instructions.vector._conj = cljs.core.with_meta((function propeller$push$instructions$vector$_conj(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31170_SHARP_,p2__31169_SHARP_){
return cljs.core.conj.call(null,p2__31169_SHARP_,p1__31170_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_conj"], null));
propeller.push.instructions.vector._contains = cljs.core.with_meta((function propeller$push$instructions$vector$_contains(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31172_SHARP_,p2__31171_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,p2__31171_SHARP_),p1__31172_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_contains"], null));
propeller.push.instructions.vector._emptyvector = cljs.core.with_meta((function propeller$push$instructions$vector$_emptyvector(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_emptyvector"], null));
propeller.push.instructions.vector._first = cljs.core.with_meta((function propeller$push$instructions$vector$_first(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31173_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__31173_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.first.call(null,p1__31173_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_first"], null));
propeller.push.instructions.vector._indexof = cljs.core.with_meta((function propeller$push$instructions$vector$_indexof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31174_SHARP_,p2__31175_SHARP_){
return propeller.utils.indexof.call(null,p1__31174_SHARP_,p2__31175_SHARP_);
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
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31176_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__31176_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.last.call(null,p1__31176_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_last"], null));
propeller.push.instructions.vector._length = cljs.core.with_meta((function propeller$push$instructions$vector$_length(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_length"], null));
propeller.push.instructions.vector._nth = cljs.core.with_meta((function propeller$push$instructions$vector$_nth(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31178_SHARP_,p2__31177_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p2__31177_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.get.call(null,p2__31177_SHARP_,cljs.core.mod.call(null,p1__31178_SHARP_,cljs.core.count.call(null,p2__31177_SHARP_)));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_nth"], null));
propeller.push.instructions.vector._occurrencesof = cljs.core.with_meta((function propeller$push$instructions$vector$_occurrencesof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (lit,vect){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__31179_SHARP_){
return cljs.core._EQ_.call(null,lit,p1__31179_SHARP_);
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
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__31180_SHARP_){
return cljs.core.not_EQ_.call(null,lit,p1__31180_SHARP_);
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
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31181_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__31181_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_rest"], null));
propeller.push.instructions.vector._reverse = cljs.core.with_meta((function propeller$push$instructions$vector$_reverse(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31182_SHARP_){
return cljs.core.vec.call(null,cljs.core.reverse.call(null,p1__31182_SHARP_));
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
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__31183_SHARP_,p2__31184_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,p1__31183_SHARP_,p2__31184_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_take"], null));
var seq__31185_31201 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__31192_31202 = null;
var count__31193_31203 = (0);
var i__31194_31204 = (0);
while(true){
if((i__31194_31204 < count__31193_31203)){
var stack__31043__auto___31205 = cljs.core._nth.call(null,chunk__31192_31202,i__31194_31204);
var seq__31195_31206 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__31197_31207 = null;
var count__31198_31208 = (0);
var i__31199_31209 = (0);
while(true){
if((i__31199_31209 < count__31198_31208)){
var func__31044__auto___31210 = cljs.core._nth.call(null,chunk__31197_31207,i__31199_31209);
var instruction_name__31045__auto___31211 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31205),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31210)))].join(''));
var metadata__31046__auto___31212 = ((function (seq__31195_31206,chunk__31197_31207,count__31198_31208,i__31199_31209,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31211,func__31044__auto___31210,stack__31043__auto___31205){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31195_31206,chunk__31197_31207,count__31198_31208,i__31199_31209,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31211,func__31044__auto___31210,stack__31043__auto___31205))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31210),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31205,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31205)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31210)))))));
var new_func__31047__auto___31213 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31210,stack__31043__auto___31205),metadata__31046__auto___31212);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31211,new_func__31047__auto___31213);


var G__31214 = seq__31195_31206;
var G__31215 = chunk__31197_31207;
var G__31216 = count__31198_31208;
var G__31217 = (i__31199_31209 + (1));
seq__31195_31206 = G__31214;
chunk__31197_31207 = G__31215;
count__31198_31208 = G__31216;
i__31199_31209 = G__31217;
continue;
} else {
var temp__5735__auto___31218 = cljs.core.seq.call(null,seq__31195_31206);
if(temp__5735__auto___31218){
var seq__31195_31219__$1 = temp__5735__auto___31218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31195_31219__$1)){
var c__4556__auto___31220 = cljs.core.chunk_first.call(null,seq__31195_31219__$1);
var G__31221 = cljs.core.chunk_rest.call(null,seq__31195_31219__$1);
var G__31222 = c__4556__auto___31220;
var G__31223 = cljs.core.count.call(null,c__4556__auto___31220);
var G__31224 = (0);
seq__31195_31206 = G__31221;
chunk__31197_31207 = G__31222;
count__31198_31208 = G__31223;
i__31199_31209 = G__31224;
continue;
} else {
var func__31044__auto___31225 = cljs.core.first.call(null,seq__31195_31219__$1);
var instruction_name__31045__auto___31226 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31205),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31225)))].join(''));
var metadata__31046__auto___31227 = ((function (seq__31195_31206,chunk__31197_31207,count__31198_31208,i__31199_31209,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31226,func__31044__auto___31225,seq__31195_31219__$1,temp__5735__auto___31218,stack__31043__auto___31205){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31195_31206,chunk__31197_31207,count__31198_31208,i__31199_31209,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31226,func__31044__auto___31225,seq__31195_31219__$1,temp__5735__auto___31218,stack__31043__auto___31205))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31225),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31205,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31205)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31225)))))));
var new_func__31047__auto___31228 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31225,stack__31043__auto___31205),metadata__31046__auto___31227);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31226,new_func__31047__auto___31228);


var G__31229 = cljs.core.next.call(null,seq__31195_31219__$1);
var G__31230 = null;
var G__31231 = (0);
var G__31232 = (0);
seq__31195_31206 = G__31229;
chunk__31197_31207 = G__31230;
count__31198_31208 = G__31231;
i__31199_31209 = G__31232;
continue;
}
} else {
}
}
break;
}

var G__31233 = seq__31185_31201;
var G__31234 = chunk__31192_31202;
var G__31235 = count__31193_31203;
var G__31236 = (i__31194_31204 + (1));
seq__31185_31201 = G__31233;
chunk__31192_31202 = G__31234;
count__31193_31203 = G__31235;
i__31194_31204 = G__31236;
continue;
} else {
var temp__5735__auto___31237 = cljs.core.seq.call(null,seq__31185_31201);
if(temp__5735__auto___31237){
var seq__31185_31238__$1 = temp__5735__auto___31237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31185_31238__$1)){
var c__4556__auto___31239 = cljs.core.chunk_first.call(null,seq__31185_31238__$1);
var G__31240 = cljs.core.chunk_rest.call(null,seq__31185_31238__$1);
var G__31241 = c__4556__auto___31239;
var G__31242 = cljs.core.count.call(null,c__4556__auto___31239);
var G__31243 = (0);
seq__31185_31201 = G__31240;
chunk__31192_31202 = G__31241;
count__31193_31203 = G__31242;
i__31194_31204 = G__31243;
continue;
} else {
var stack__31043__auto___31244 = cljs.core.first.call(null,seq__31185_31238__$1);
var seq__31186_31245 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__31188_31246 = null;
var count__31189_31247 = (0);
var i__31190_31248 = (0);
while(true){
if((i__31190_31248 < count__31189_31247)){
var func__31044__auto___31249 = cljs.core._nth.call(null,chunk__31188_31246,i__31190_31248);
var instruction_name__31045__auto___31250 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31244),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31249)))].join(''));
var metadata__31046__auto___31251 = ((function (seq__31186_31245,chunk__31188_31246,count__31189_31247,i__31190_31248,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31250,func__31044__auto___31249,stack__31043__auto___31244,seq__31185_31238__$1,temp__5735__auto___31237){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31186_31245,chunk__31188_31246,count__31189_31247,i__31190_31248,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31250,func__31044__auto___31249,stack__31043__auto___31244,seq__31185_31238__$1,temp__5735__auto___31237))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31244,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31244)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31249)))))));
var new_func__31047__auto___31252 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31249,stack__31043__auto___31244),metadata__31046__auto___31251);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31250,new_func__31047__auto___31252);


var G__31253 = seq__31186_31245;
var G__31254 = chunk__31188_31246;
var G__31255 = count__31189_31247;
var G__31256 = (i__31190_31248 + (1));
seq__31186_31245 = G__31253;
chunk__31188_31246 = G__31254;
count__31189_31247 = G__31255;
i__31190_31248 = G__31256;
continue;
} else {
var temp__5735__auto___31257__$1 = cljs.core.seq.call(null,seq__31186_31245);
if(temp__5735__auto___31257__$1){
var seq__31186_31258__$1 = temp__5735__auto___31257__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31186_31258__$1)){
var c__4556__auto___31259 = cljs.core.chunk_first.call(null,seq__31186_31258__$1);
var G__31260 = cljs.core.chunk_rest.call(null,seq__31186_31258__$1);
var G__31261 = c__4556__auto___31259;
var G__31262 = cljs.core.count.call(null,c__4556__auto___31259);
var G__31263 = (0);
seq__31186_31245 = G__31260;
chunk__31188_31246 = G__31261;
count__31189_31247 = G__31262;
i__31190_31248 = G__31263;
continue;
} else {
var func__31044__auto___31264 = cljs.core.first.call(null,seq__31186_31258__$1);
var instruction_name__31045__auto___31265 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31244),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31264)))].join(''));
var metadata__31046__auto___31266 = ((function (seq__31186_31245,chunk__31188_31246,count__31189_31247,i__31190_31248,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31265,func__31044__auto___31264,seq__31186_31258__$1,temp__5735__auto___31257__$1,stack__31043__auto___31244,seq__31185_31238__$1,temp__5735__auto___31237){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31186_31245,chunk__31188_31246,count__31189_31247,i__31190_31248,seq__31185_31201,chunk__31192_31202,count__31193_31203,i__31194_31204,instruction_name__31045__auto___31265,func__31044__auto___31264,seq__31186_31258__$1,temp__5735__auto___31257__$1,stack__31043__auto___31244,seq__31185_31238__$1,temp__5735__auto___31237))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31244,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31244)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31264)))))));
var new_func__31047__auto___31267 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31264,stack__31043__auto___31244),metadata__31046__auto___31266);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31265,new_func__31047__auto___31267);


var G__31268 = cljs.core.next.call(null,seq__31186_31258__$1);
var G__31269 = null;
var G__31270 = (0);
var G__31271 = (0);
seq__31186_31245 = G__31268;
chunk__31188_31246 = G__31269;
count__31189_31247 = G__31270;
i__31190_31248 = G__31271;
continue;
}
} else {
}
}
break;
}

var G__31272 = cljs.core.next.call(null,seq__31185_31238__$1);
var G__31273 = null;
var G__31274 = (0);
var G__31275 = (0);
seq__31185_31201 = G__31272;
chunk__31192_31202 = G__31273;
count__31193_31203 = G__31274;
i__31194_31204 = G__31275;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=vector.js.map?rel=1626961182022

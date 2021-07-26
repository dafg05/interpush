// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.utils.helpers');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('propeller.push.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.globals');
goog.require('goog.string');
goog.require('goog.string.format');
propeller.push.utils.helpers.keep_number_reasonable = (function propeller$push$utils$helpers$keep_number_reasonable(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if((n > propeller.push.utils.globals.max_number_magnitude)){
return cljs.core.long$.call(null,propeller.push.utils.globals.max_number_magnitude);
} else {
if((n < (- propeller.push.utils.globals.max_number_magnitude))){
return cljs.core.long$.call(null,(- propeller.push.utils.globals.max_number_magnitude));
} else {
return n;

}
}
} else {
if(cljs.core.truth_(isNaN(n))){
return 0.0;
} else {
if(((cljs.core._EQ_.call(null,n,Infinity)) || ((n > propeller.push.utils.globals.max_number_magnitude)))){
return propeller.push.utils.globals.max_number_magnitude;
} else {
if(((cljs.core._EQ_.call(null,n,-Infinity)) || ((n < (- propeller.push.utils.globals.max_number_magnitude))))){
return (- propeller.push.utils.globals.max_number_magnitude);
} else {
if(((((- propeller.push.utils.globals.min_number_magnitude) < n)) && ((n < propeller.push.utils.globals.min_number_magnitude)))){
return 0.0;
} else {
return n;

}
}
}
}

}
});
propeller.push.utils.helpers.reasonable_string_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_string_length_QMARK_(string){
var length = cljs.core.count.call(null,string);
return (length <= propeller.push.utils.globals.max_string_length);
});
propeller.push.utils.helpers.reasonable_vector_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_vector_length_QMARK_(vector){
var length = cljs.core.count.call(null,vector);
return (length <= propeller.push.utils.globals.max_vector_length);
});
propeller.push.utils.helpers.get_args_from_stacks = (function propeller$push$utils$helpers$get_args_from_stacks(state,stacks){
var state__$1 = state;
var stacks__$1 = cljs.core.reverse.call(null,stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
var current_stack = cljs.core.first.call(null,stacks__$1);
if(propeller.push.state.empty_stack_QMARK_.call(null,state__$1,current_stack)){
return new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685);
} else {
var G__30771 = propeller.push.state.pop_stack.call(null,state__$1,current_stack);
var G__30772 = cljs.core.rest.call(null,stacks__$1);
var G__30773 = cljs.core.conj.call(null,args,propeller.push.state.peek_stack.call(null,state__$1,current_stack));
state__$1 = G__30771;
stacks__$1 = G__30772;
args = G__30773;
continue;
}
}
break;
}
});
propeller.push.utils.helpers.make_instruction = (function propeller$push$utils$helpers$make_instruction(state,function$,arg_stacks,return_stack){
var popped_args = propeller.push.utils.helpers.get_args_from_stacks.call(null,state,arg_stacks);
if(cljs.core._EQ_.call(null,popped_args,new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685))){
return state;
} else {
var result = cljs.core.apply.call(null,function$,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(popped_args));
var new_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(popped_args);
if(typeof result === 'number'){
return propeller.push.state.push_to_stack.call(null,new_state,return_stack,propeller.push.utils.helpers.keep_number_reasonable.call(null,result));
} else {
if(((typeof result === 'string') && ((!(propeller.push.utils.helpers.reasonable_string_length_QMARK_.call(null,result)))))){
return state;
} else {
if(((cljs.core.vector_QMARK_.call(null,result)) && ((!(propeller.push.utils.helpers.reasonable_vector_length_QMARK_.call(null,result)))))){
return state;
} else {
if(cljs.core._EQ_.call(null,result,new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031))){
return state;
} else {
return propeller.push.state.push_to_stack.call(null,new_state,return_stack,result);

}
}
}
}
}
});
propeller.push.utils.helpers.get_stack_instructions = (function propeller$push$utils$helpers$get_stack_instructions(stacks){
var seq__30774_30800 = cljs.core.seq.call(null,cljs.core.deref.call(null,propeller.push.core.instruction_table));
var chunk__30775_30801 = null;
var count__30776_30802 = (0);
var i__30777_30803 = (0);
while(true){
if((i__30777_30803 < count__30776_30802)){
var vec__30784_30804 = cljs.core._nth.call(null,chunk__30775_30801,i__30777_30803);
var instruction_name_30805 = cljs.core.nth.call(null,vec__30784_30804,(0),null);
var function_30806 = cljs.core.nth.call(null,vec__30784_30804,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function_30806)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("ERROR: Instruction %s does not have :stacks defined in metadata.",cljs.core.name.call(null,instruction_name_30805))),"\n","(:stacks (meta function))"].join('')));
}


var G__30807 = seq__30774_30800;
var G__30808 = chunk__30775_30801;
var G__30809 = count__30776_30802;
var G__30810 = (i__30777_30803 + (1));
seq__30774_30800 = G__30807;
chunk__30775_30801 = G__30808;
count__30776_30802 = G__30809;
i__30777_30803 = G__30810;
continue;
} else {
var temp__5735__auto___30811 = cljs.core.seq.call(null,seq__30774_30800);
if(temp__5735__auto___30811){
var seq__30774_30812__$1 = temp__5735__auto___30811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30774_30812__$1)){
var c__4556__auto___30813 = cljs.core.chunk_first.call(null,seq__30774_30812__$1);
var G__30814 = cljs.core.chunk_rest.call(null,seq__30774_30812__$1);
var G__30815 = c__4556__auto___30813;
var G__30816 = cljs.core.count.call(null,c__4556__auto___30813);
var G__30817 = (0);
seq__30774_30800 = G__30814;
chunk__30775_30801 = G__30815;
count__30776_30802 = G__30816;
i__30777_30803 = G__30817;
continue;
} else {
var vec__30787_30818 = cljs.core.first.call(null,seq__30774_30812__$1);
var instruction_name_30819 = cljs.core.nth.call(null,vec__30787_30818,(0),null);
var function_30820 = cljs.core.nth.call(null,vec__30787_30818,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function_30820)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("ERROR: Instruction %s does not have :stacks defined in metadata.",cljs.core.name.call(null,instruction_name_30819))),"\n","(:stacks (meta function))"].join('')));
}


var G__30821 = cljs.core.next.call(null,seq__30774_30812__$1);
var G__30822 = null;
var G__30823 = (0);
var G__30824 = (0);
seq__30774_30800 = G__30821;
chunk__30775_30801 = G__30822;
count__30776_30802 = G__30823;
i__30777_30803 = G__30824;
continue;
}
} else {
}
}
break;
}

var iter__4529__auto__ = (function propeller$push$utils$helpers$get_stack_instructions_$_iter__30790(s__30791){
return (new cljs.core.LazySeq(null,(function (){
var s__30791__$1 = s__30791;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__30791__$1);
if(temp__5735__auto__){
var s__30791__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30791__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30791__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30793 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30792 = (0);
while(true){
if((i__30792 < size__4528__auto__)){
var vec__30794 = cljs.core._nth.call(null,c__4527__auto__,i__30792);
var instruction_name = cljs.core.nth.call(null,vec__30794,(0),null);
var function$ = cljs.core.nth.call(null,vec__30794,(1),null);
if(clojure.set.subset_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function$)),stacks)){
cljs.core.chunk_append.call(null,b__30793,instruction_name);

var G__30825 = (i__30792 + (1));
i__30792 = G__30825;
continue;
} else {
var G__30826 = (i__30792 + (1));
i__30792 = G__30826;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30793),propeller$push$utils$helpers$get_stack_instructions_$_iter__30790.call(null,cljs.core.chunk_rest.call(null,s__30791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30793),null);
}
} else {
var vec__30797 = cljs.core.first.call(null,s__30791__$2);
var instruction_name = cljs.core.nth.call(null,vec__30797,(0),null);
var function$ = cljs.core.nth.call(null,vec__30797,(1),null);
if(clojure.set.subset_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function$)),stacks)){
return cljs.core.cons.call(null,instruction_name,propeller$push$utils$helpers$get_stack_instructions_$_iter__30790.call(null,cljs.core.rest.call(null,s__30791__$2)));
} else {
var G__30827 = cljs.core.rest.call(null,s__30791__$2);
s__30791__$1 = G__30827;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,propeller.push.core.instruction_table));
});
propeller.push.utils.helpers.get_literal_type = (function propeller$push$utils$helpers$get_literal_type(data){
var literals = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (thing){
return ((thing === true) || (thing === false));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),cljs.core.float_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.char_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (((cljs.core.first.call(null,thing) === true) || (cljs.core.first.call(null,thing) === false))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (cljs.core.float_QMARK_.call(null,cljs.core.first.call(null,thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (cljs.core.integer_QMARK_.call(null,cljs.core.first.call(null,thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (typeof cljs.core.first.call(null,thing) === 'string'));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-vector","generic-vector",1279149583),(function (thing){
return cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,thing);
})], null)], null);
return cljs.core.first.call(null,(function (){var iter__4529__auto__ = (function propeller$push$utils$helpers$get_literal_type_$_iter__30828(s__30829){
return (new cljs.core.LazySeq(null,(function (){
var s__30829__$1 = s__30829;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__30829__$1);
if(temp__5735__auto__){
var s__30829__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30829__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30829__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30831 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30830 = (0);
while(true){
if((i__30830 < size__4528__auto__)){
var vec__30832 = cljs.core._nth.call(null,c__4527__auto__,i__30830);
var stack = cljs.core.nth.call(null,vec__30832,(0),null);
var function$ = cljs.core.nth.call(null,vec__30832,(1),null);
if(cljs.core.truth_(function$.call(null,data))){
cljs.core.chunk_append.call(null,b__30831,stack);

var G__30838 = (i__30830 + (1));
i__30830 = G__30838;
continue;
} else {
var G__30839 = (i__30830 + (1));
i__30830 = G__30839;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30831),propeller$push$utils$helpers$get_literal_type_$_iter__30828.call(null,cljs.core.chunk_rest.call(null,s__30829__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30831),null);
}
} else {
var vec__30835 = cljs.core.first.call(null,s__30829__$2);
var stack = cljs.core.nth.call(null,vec__30835,(0),null);
var function$ = cljs.core.nth.call(null,vec__30835,(1),null);
if(cljs.core.truth_(function$.call(null,data))){
return cljs.core.cons.call(null,stack,propeller$push$utils$helpers$get_literal_type_$_iter__30828.call(null,cljs.core.rest.call(null,s__30829__$2)));
} else {
var G__30840 = cljs.core.rest.call(null,s__30829__$2);
s__30829__$1 = G__30840;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,literals);
})());
});
/**
 * Returns the literal stack corresponding to some vector stack.
 */
propeller.push.utils.helpers.get_vector_literal_type = (function propeller$push$utils$helpers$get_vector_literal_type(vector_stack){
return cljs.core.get.call(null,propeller.push.state.vec_stacks,vector_stack);
});
propeller.push.utils.helpers.print_state = (function propeller$push$utils$helpers$print_state(state){
var seq__30841 = cljs.core.seq.call(null,cljs.core.keys.call(null,propeller.push.state.empty_state));
var chunk__30842 = null;
var count__30843 = (0);
var i__30844 = (0);
while(true){
if((i__30844 < count__30843)){
var stack = cljs.core._nth.call(null,chunk__30842,i__30844);
cljs.core.print.call(null,goog.string.format("%-15s = ",stack));

cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__30845 = seq__30841;
var G__30846 = chunk__30842;
var G__30847 = count__30843;
var G__30848 = (i__30844 + (1));
seq__30841 = G__30845;
chunk__30842 = G__30846;
count__30843 = G__30847;
i__30844 = G__30848;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30841);
if(temp__5735__auto__){
var seq__30841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30841__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30841__$1);
var G__30849 = cljs.core.chunk_rest.call(null,seq__30841__$1);
var G__30850 = c__4556__auto__;
var G__30851 = cljs.core.count.call(null,c__4556__auto__);
var G__30852 = (0);
seq__30841 = G__30849;
chunk__30842 = G__30850;
count__30843 = G__30851;
i__30844 = G__30852;
continue;
} else {
var stack = cljs.core.first.call(null,seq__30841__$1);
cljs.core.print.call(null,goog.string.format("%-15s = ",stack));

cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__30853 = cljs.core.next.call(null,seq__30841__$1);
var G__30854 = null;
var G__30855 = (0);
var G__30856 = (0);
seq__30841 = G__30853;
chunk__30842 = G__30854;
count__30843 = G__30855;
i__30844 = G__30856;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=helpers.js.map?rel=1626961181711

// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.push.instructions.input_output');
goog.require('cljs.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.macros');
propeller.push.instructions.input_output.handle_input_instruction = (function propeller$push$instructions$input_output$handle_input_instruction(state,instruction){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state),instruction)){
var input = instruction.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state));
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),input);
} else {
throw Error(["Undefined instruction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)].join(''));
}
});
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"print_newline","print_newline",-1016300999),cljs.core.with_meta((function (state){
var current_output = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"print","print",1299562414),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),"\n"].join(''));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414)], null)], null)));
propeller.push.instructions.input_output._print = cljs.core.with_meta((function propeller$push$instructions$input_output$_print(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
var top_item = propeller.push.state.peek_stack.call(null,state,stack);
var top_item_str = ((((typeof top_item === 'string') || (cljs.core.char_QMARK_.call(null,top_item))))?top_item:cljs.core.pr_str.call(null,top_item));
var current_output = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
var popped_state = propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,state,stack),new cljs.core.Keyword(null,"print","print",1299562414));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"print","print",1299562414),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_item_str)].join(''));
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414)], null),new cljs.core.Keyword(null,"name","name",1843675177),"_print"], null));
var seq__26423_26439 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__26430_26440 = null;
var count__26431_26441 = (0);
var i__26432_26442 = (0);
while(true){
if((i__26432_26442 < count__26431_26441)){
var stack__26005__auto___26443 = cljs.core._nth.call(null,chunk__26430_26440,i__26432_26442);
var seq__26433_26444 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__26435_26445 = null;
var count__26436_26446 = (0);
var i__26437_26447 = (0);
while(true){
if((i__26437_26447 < count__26436_26446)){
var func__26006__auto___26448 = cljs.core._nth.call(null,chunk__26435_26445,i__26437_26447);
var instruction_name__26007__auto___26449 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26443),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26448)))].join(''));
var metadata__26008__auto___26450 = ((function (seq__26433_26444,chunk__26435_26445,count__26436_26446,i__26437_26447,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26449,func__26006__auto___26448,stack__26005__auto___26443){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26433_26444,chunk__26435_26445,count__26436_26446,i__26437_26447,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26449,func__26006__auto___26448,stack__26005__auto___26443))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26448),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26443,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26443)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26448)))))));
var new_func__26009__auto___26451 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26448,stack__26005__auto___26443),metadata__26008__auto___26450);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26449,new_func__26009__auto___26451);


var G__26452 = seq__26433_26444;
var G__26453 = chunk__26435_26445;
var G__26454 = count__26436_26446;
var G__26455 = (i__26437_26447 + (1));
seq__26433_26444 = G__26452;
chunk__26435_26445 = G__26453;
count__26436_26446 = G__26454;
i__26437_26447 = G__26455;
continue;
} else {
var temp__5735__auto___26456 = cljs.core.seq.call(null,seq__26433_26444);
if(temp__5735__auto___26456){
var seq__26433_26457__$1 = temp__5735__auto___26456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26433_26457__$1)){
var c__4556__auto___26458 = cljs.core.chunk_first.call(null,seq__26433_26457__$1);
var G__26459 = cljs.core.chunk_rest.call(null,seq__26433_26457__$1);
var G__26460 = c__4556__auto___26458;
var G__26461 = cljs.core.count.call(null,c__4556__auto___26458);
var G__26462 = (0);
seq__26433_26444 = G__26459;
chunk__26435_26445 = G__26460;
count__26436_26446 = G__26461;
i__26437_26447 = G__26462;
continue;
} else {
var func__26006__auto___26463 = cljs.core.first.call(null,seq__26433_26457__$1);
var instruction_name__26007__auto___26464 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26443),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26463)))].join(''));
var metadata__26008__auto___26465 = ((function (seq__26433_26444,chunk__26435_26445,count__26436_26446,i__26437_26447,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26464,func__26006__auto___26463,seq__26433_26457__$1,temp__5735__auto___26456,stack__26005__auto___26443){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26433_26444,chunk__26435_26445,count__26436_26446,i__26437_26447,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26464,func__26006__auto___26463,seq__26433_26457__$1,temp__5735__auto___26456,stack__26005__auto___26443))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26463),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26443,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26443)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26463)))))));
var new_func__26009__auto___26466 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26463,stack__26005__auto___26443),metadata__26008__auto___26465);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26464,new_func__26009__auto___26466);


var G__26467 = cljs.core.next.call(null,seq__26433_26457__$1);
var G__26468 = null;
var G__26469 = (0);
var G__26470 = (0);
seq__26433_26444 = G__26467;
chunk__26435_26445 = G__26468;
count__26436_26446 = G__26469;
i__26437_26447 = G__26470;
continue;
}
} else {
}
}
break;
}

var G__26471 = seq__26423_26439;
var G__26472 = chunk__26430_26440;
var G__26473 = count__26431_26441;
var G__26474 = (i__26432_26442 + (1));
seq__26423_26439 = G__26471;
chunk__26430_26440 = G__26472;
count__26431_26441 = G__26473;
i__26432_26442 = G__26474;
continue;
} else {
var temp__5735__auto___26475 = cljs.core.seq.call(null,seq__26423_26439);
if(temp__5735__auto___26475){
var seq__26423_26476__$1 = temp__5735__auto___26475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26423_26476__$1)){
var c__4556__auto___26477 = cljs.core.chunk_first.call(null,seq__26423_26476__$1);
var G__26478 = cljs.core.chunk_rest.call(null,seq__26423_26476__$1);
var G__26479 = c__4556__auto___26477;
var G__26480 = cljs.core.count.call(null,c__4556__auto___26477);
var G__26481 = (0);
seq__26423_26439 = G__26478;
chunk__26430_26440 = G__26479;
count__26431_26441 = G__26480;
i__26432_26442 = G__26481;
continue;
} else {
var stack__26005__auto___26482 = cljs.core.first.call(null,seq__26423_26476__$1);
var seq__26424_26483 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__26426_26484 = null;
var count__26427_26485 = (0);
var i__26428_26486 = (0);
while(true){
if((i__26428_26486 < count__26427_26485)){
var func__26006__auto___26487 = cljs.core._nth.call(null,chunk__26426_26484,i__26428_26486);
var instruction_name__26007__auto___26488 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26482),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26487)))].join(''));
var metadata__26008__auto___26489 = ((function (seq__26424_26483,chunk__26426_26484,count__26427_26485,i__26428_26486,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26488,func__26006__auto___26487,stack__26005__auto___26482,seq__26423_26476__$1,temp__5735__auto___26475){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26424_26483,chunk__26426_26484,count__26427_26485,i__26428_26486,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26488,func__26006__auto___26487,stack__26005__auto___26482,seq__26423_26476__$1,temp__5735__auto___26475))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26482,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26482)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26487)))))));
var new_func__26009__auto___26490 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26487,stack__26005__auto___26482),metadata__26008__auto___26489);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26488,new_func__26009__auto___26490);


var G__26491 = seq__26424_26483;
var G__26492 = chunk__26426_26484;
var G__26493 = count__26427_26485;
var G__26494 = (i__26428_26486 + (1));
seq__26424_26483 = G__26491;
chunk__26426_26484 = G__26492;
count__26427_26485 = G__26493;
i__26428_26486 = G__26494;
continue;
} else {
var temp__5735__auto___26495__$1 = cljs.core.seq.call(null,seq__26424_26483);
if(temp__5735__auto___26495__$1){
var seq__26424_26496__$1 = temp__5735__auto___26495__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26424_26496__$1)){
var c__4556__auto___26497 = cljs.core.chunk_first.call(null,seq__26424_26496__$1);
var G__26498 = cljs.core.chunk_rest.call(null,seq__26424_26496__$1);
var G__26499 = c__4556__auto___26497;
var G__26500 = cljs.core.count.call(null,c__4556__auto___26497);
var G__26501 = (0);
seq__26424_26483 = G__26498;
chunk__26426_26484 = G__26499;
count__26427_26485 = G__26500;
i__26428_26486 = G__26501;
continue;
} else {
var func__26006__auto___26502 = cljs.core.first.call(null,seq__26424_26496__$1);
var instruction_name__26007__auto___26503 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__26005__auto___26482),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26502)))].join(''));
var metadata__26008__auto___26504 = ((function (seq__26424_26483,chunk__26426_26484,count__26427_26485,i__26428_26486,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26503,func__26006__auto___26502,seq__26424_26496__$1,temp__5735__auto___26495__$1,stack__26005__auto___26482,seq__26423_26476__$1,temp__5735__auto___26475){
return (function (p1__25998__25999__auto__){
return cljs.core.dissoc.call(null,p1__25998__25999__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__26424_26483,chunk__26426_26484,count__26427_26485,i__26428_26486,seq__26423_26439,chunk__26430_26440,count__26431_26441,i__26432_26442,instruction_name__26007__auto___26503,func__26006__auto___26502,seq__26424_26496__$1,temp__5735__auto___26495__$1,stack__26005__auto___26482,seq__26423_26476__$1,temp__5735__auto___26475))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__26006__auto___26502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__26005__auto___26482,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__26005__auto___26482)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__26006__auto___26502)))))));
var new_func__26009__auto___26505 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__26006__auto___26502,stack__26005__auto___26482),metadata__26008__auto___26504);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__26007__auto___26503,new_func__26009__auto___26505);


var G__26506 = cljs.core.next.call(null,seq__26424_26496__$1);
var G__26507 = null;
var G__26508 = (0);
var G__26509 = (0);
seq__26424_26483 = G__26506;
chunk__26426_26484 = G__26507;
count__26427_26485 = G__26508;
i__26428_26486 = G__26509;
continue;
}
} else {
}
}
break;
}

var G__26510 = cljs.core.next.call(null,seq__26423_26476__$1);
var G__26511 = null;
var G__26512 = (0);
var G__26513 = (0);
seq__26423_26439 = G__26510;
chunk__26430_26440 = G__26511;
count__26431_26441 = G__26512;
i__26432_26442 = G__26513;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=input_output.js.map?rel=1627930533881

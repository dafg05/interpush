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
var seq__31055_31071 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__31062_31072 = null;
var count__31063_31073 = (0);
var i__31064_31074 = (0);
while(true){
if((i__31064_31074 < count__31063_31073)){
var stack__31043__auto___31075 = cljs.core._nth.call(null,chunk__31062_31072,i__31064_31074);
var seq__31065_31076 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__31067_31077 = null;
var count__31068_31078 = (0);
var i__31069_31079 = (0);
while(true){
if((i__31069_31079 < count__31068_31078)){
var func__31044__auto___31080 = cljs.core._nth.call(null,chunk__31067_31077,i__31069_31079);
var instruction_name__31045__auto___31081 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31075),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31080)))].join(''));
var metadata__31046__auto___31082 = ((function (seq__31065_31076,chunk__31067_31077,count__31068_31078,i__31069_31079,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31081,func__31044__auto___31080,stack__31043__auto___31075){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31065_31076,chunk__31067_31077,count__31068_31078,i__31069_31079,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31081,func__31044__auto___31080,stack__31043__auto___31075))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31080),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31075,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31075)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31080)))))));
var new_func__31047__auto___31083 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31080,stack__31043__auto___31075),metadata__31046__auto___31082);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31081,new_func__31047__auto___31083);


var G__31084 = seq__31065_31076;
var G__31085 = chunk__31067_31077;
var G__31086 = count__31068_31078;
var G__31087 = (i__31069_31079 + (1));
seq__31065_31076 = G__31084;
chunk__31067_31077 = G__31085;
count__31068_31078 = G__31086;
i__31069_31079 = G__31087;
continue;
} else {
var temp__5735__auto___31088 = cljs.core.seq.call(null,seq__31065_31076);
if(temp__5735__auto___31088){
var seq__31065_31089__$1 = temp__5735__auto___31088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31065_31089__$1)){
var c__4556__auto___31090 = cljs.core.chunk_first.call(null,seq__31065_31089__$1);
var G__31091 = cljs.core.chunk_rest.call(null,seq__31065_31089__$1);
var G__31092 = c__4556__auto___31090;
var G__31093 = cljs.core.count.call(null,c__4556__auto___31090);
var G__31094 = (0);
seq__31065_31076 = G__31091;
chunk__31067_31077 = G__31092;
count__31068_31078 = G__31093;
i__31069_31079 = G__31094;
continue;
} else {
var func__31044__auto___31095 = cljs.core.first.call(null,seq__31065_31089__$1);
var instruction_name__31045__auto___31096 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31075),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31095)))].join(''));
var metadata__31046__auto___31097 = ((function (seq__31065_31076,chunk__31067_31077,count__31068_31078,i__31069_31079,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31096,func__31044__auto___31095,seq__31065_31089__$1,temp__5735__auto___31088,stack__31043__auto___31075){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31065_31076,chunk__31067_31077,count__31068_31078,i__31069_31079,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31096,func__31044__auto___31095,seq__31065_31089__$1,temp__5735__auto___31088,stack__31043__auto___31075))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31095),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31075,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31075)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31095)))))));
var new_func__31047__auto___31098 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31095,stack__31043__auto___31075),metadata__31046__auto___31097);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31096,new_func__31047__auto___31098);


var G__31099 = cljs.core.next.call(null,seq__31065_31089__$1);
var G__31100 = null;
var G__31101 = (0);
var G__31102 = (0);
seq__31065_31076 = G__31099;
chunk__31067_31077 = G__31100;
count__31068_31078 = G__31101;
i__31069_31079 = G__31102;
continue;
}
} else {
}
}
break;
}

var G__31103 = seq__31055_31071;
var G__31104 = chunk__31062_31072;
var G__31105 = count__31063_31073;
var G__31106 = (i__31064_31074 + (1));
seq__31055_31071 = G__31103;
chunk__31062_31072 = G__31104;
count__31063_31073 = G__31105;
i__31064_31074 = G__31106;
continue;
} else {
var temp__5735__auto___31107 = cljs.core.seq.call(null,seq__31055_31071);
if(temp__5735__auto___31107){
var seq__31055_31108__$1 = temp__5735__auto___31107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31055_31108__$1)){
var c__4556__auto___31109 = cljs.core.chunk_first.call(null,seq__31055_31108__$1);
var G__31110 = cljs.core.chunk_rest.call(null,seq__31055_31108__$1);
var G__31111 = c__4556__auto___31109;
var G__31112 = cljs.core.count.call(null,c__4556__auto___31109);
var G__31113 = (0);
seq__31055_31071 = G__31110;
chunk__31062_31072 = G__31111;
count__31063_31073 = G__31112;
i__31064_31074 = G__31113;
continue;
} else {
var stack__31043__auto___31114 = cljs.core.first.call(null,seq__31055_31108__$1);
var seq__31056_31115 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__31058_31116 = null;
var count__31059_31117 = (0);
var i__31060_31118 = (0);
while(true){
if((i__31060_31118 < count__31059_31117)){
var func__31044__auto___31119 = cljs.core._nth.call(null,chunk__31058_31116,i__31060_31118);
var instruction_name__31045__auto___31120 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31114),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31119)))].join(''));
var metadata__31046__auto___31121 = ((function (seq__31056_31115,chunk__31058_31116,count__31059_31117,i__31060_31118,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31120,func__31044__auto___31119,stack__31043__auto___31114,seq__31055_31108__$1,temp__5735__auto___31107){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31056_31115,chunk__31058_31116,count__31059_31117,i__31060_31118,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31120,func__31044__auto___31119,stack__31043__auto___31114,seq__31055_31108__$1,temp__5735__auto___31107))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31119),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31114,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31114)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31119)))))));
var new_func__31047__auto___31122 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31119,stack__31043__auto___31114),metadata__31046__auto___31121);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31120,new_func__31047__auto___31122);


var G__31123 = seq__31056_31115;
var G__31124 = chunk__31058_31116;
var G__31125 = count__31059_31117;
var G__31126 = (i__31060_31118 + (1));
seq__31056_31115 = G__31123;
chunk__31058_31116 = G__31124;
count__31059_31117 = G__31125;
i__31060_31118 = G__31126;
continue;
} else {
var temp__5735__auto___31127__$1 = cljs.core.seq.call(null,seq__31056_31115);
if(temp__5735__auto___31127__$1){
var seq__31056_31128__$1 = temp__5735__auto___31127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31056_31128__$1)){
var c__4556__auto___31129 = cljs.core.chunk_first.call(null,seq__31056_31128__$1);
var G__31130 = cljs.core.chunk_rest.call(null,seq__31056_31128__$1);
var G__31131 = c__4556__auto___31129;
var G__31132 = cljs.core.count.call(null,c__4556__auto___31129);
var G__31133 = (0);
seq__31056_31115 = G__31130;
chunk__31058_31116 = G__31131;
count__31059_31117 = G__31132;
i__31060_31118 = G__31133;
continue;
} else {
var func__31044__auto___31134 = cljs.core.first.call(null,seq__31056_31128__$1);
var instruction_name__31045__auto___31135 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__31043__auto___31114),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31134)))].join(''));
var metadata__31046__auto___31136 = ((function (seq__31056_31115,chunk__31058_31116,count__31059_31117,i__31060_31118,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31135,func__31044__auto___31134,seq__31056_31128__$1,temp__5735__auto___31127__$1,stack__31043__auto___31114,seq__31055_31108__$1,temp__5735__auto___31107){
return (function (p1__31036__31037__auto__){
return cljs.core.dissoc.call(null,p1__31036__31037__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__31056_31115,chunk__31058_31116,count__31059_31117,i__31060_31118,seq__31055_31071,chunk__31062_31072,count__31063_31073,i__31064_31074,instruction_name__31045__auto___31135,func__31044__auto___31134,seq__31056_31128__$1,temp__5735__auto___31127__$1,stack__31043__auto___31114,seq__31055_31108__$1,temp__5735__auto___31107))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__31044__auto___31134),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__31043__auto___31114,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__31043__auto___31114)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__31044__auto___31134)))))));
var new_func__31047__auto___31137 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__31044__auto___31134,stack__31043__auto___31114),metadata__31046__auto___31136);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__31045__auto___31135,new_func__31047__auto___31137);


var G__31138 = cljs.core.next.call(null,seq__31056_31128__$1);
var G__31139 = null;
var G__31140 = (0);
var G__31141 = (0);
seq__31056_31115 = G__31138;
chunk__31058_31116 = G__31139;
count__31059_31117 = G__31140;
i__31060_31118 = G__31141;
continue;
}
} else {
}
}
break;
}

var G__31142 = cljs.core.next.call(null,seq__31055_31108__$1);
var G__31143 = null;
var G__31144 = (0);
var G__31145 = (0);
seq__31055_31071 = G__31142;
chunk__31062_31072 = G__31143;
count__31063_31073 = G__31144;
i__31064_31074 = G__31145;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=input_output.js.map?rel=1626961181874

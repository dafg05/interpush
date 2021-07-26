// Compiled by ClojureScript 1.10.764 {}
goog.provide('interp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.tools.reader');
goog.require('interp.utils');
goog.require('interp.instructions');
goog.require('propeller.push.interpreter');
goog.require('propeller.push.state');
goog.require('propeller.push.core');
goog.require('propeller.push.utils.helpers');
goog.require('clojure.set');
interp.core.step_limit = reagent.core.atom.call(null,(100));
interp.core.current_step = reagent.core.atom.call(null,(0));
interp.core.error_exists = reagent.core.atom.call(null,false);
interp.core.error_output = reagent.core.atom.call(null,"");
interp.core.push_code = reagent.core.atom.call(null,"(:exec_dup (1 2 :integer_add) \"hello\" (:integer_yank 5 6) :integer_gte :exec_if (5 6) false :integer_add)");
interp.core.push_state_history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
interp.core.input_error = (function interp$core$input_error(){
return cljs.core.reset_BANG_.call(null,interp.core.error_exists,true);
});
/**
 * Returns false if a program has any keywords not supported
 * by interpush, including those present in the instruction table in propeller 
 * but are not part of the #{:exec :integer :string :boolean} stacks. 
 */
interp.core.valid_program_QMARK_ = (function interp$core$valid_program_QMARK_(push_code){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.flatten.call(null,push_code))),cljs.core.set.call(null,propeller.push.utils.helpers.get_stack_instructions.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null))));
});
interp.core.invalid_instruction = (function interp$core$invalid_instruction(push_code){
return cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.flatten.call(null,push_code))),cljs.core.set.call(null,propeller.push.utils.helpers.get_stack_instructions.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)))));
});
interp.core.interpret_one_step = (function interp$core$interpret_one_step(){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,interp.core.push_state_history)),(cljs.core.deref.call(null,interp.core.current_step) + (1)))) || ((cljs.core.count.call(null,cljs.core.deref.call(null,interp.core.push_state_history)) === (0))))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.swap_BANG_.call(null,interp.core.current_step,cljs.core.inc);
}
});
interp.core.interpret_push = (function interp$core$interpret_push(){
if((cljs.core.count.call(null,cljs.core.deref.call(null,interp.core.push_state_history)) === (0))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.reset_BANG_.call(null,interp.core.current_step,(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.deref.call(null,interp.core.push_state_history))) - (1)));
}
});
/**
 * Returns a vector of push-states at every step of a program's interpretation
 * in order, including the final state
 */
interp.core.add_final_state = (function interp$core$add_final_state(state_history){
var final_state = cljs.core.dissoc.call(null,state_history,new cljs.core.Keyword(null,"history","history",-247395220));
return cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state_history),final_state);
});
interp.core.load_state_history = (function interp$core$load_state_history(program){
var program__$1 = ((((cljs.core._EQ_.call(null,cljs.core.count.call(null,program),(1))) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,program)))))?cljs.core.first.call(null,program):program
);
try{if(interp.core.valid_program_QMARK_.call(null,program__$1)){
cljs.core.reset_BANG_.call(null,interp.core.push_state_history,interp.core.add_final_state.call(null,propeller.push.interpreter.interpret_program.call(null,program__$1,cljs.core.assoc.call(null,propeller.push.state.empty_state,new cljs.core.Keyword(null,"keep-history","keep-history",1232813028),true),cljs.core.deref.call(null,interp.core.step_limit))));

cljs.core.reset_BANG_.call(null,interp.core.current_step,(0));

cljs.core.reset_BANG_.call(null,interp.core.error_exists,false);

return cljs.core.reset_BANG_.call(null,interp.core.error_output,"");
} else {
cljs.core.reset_BANG_.call(null,interp.core.error_output,["Error: Unrecognized Push instruction in program: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interp.core.invalid_instruction.call(null,program__$1))].join(''));

return interp.core.input_error.call(null);
}
}catch (e28750){if((e28750 instanceof Error)){
var e = e28750;
cljs.core.reset_BANG_.call(null,interp.core.error_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

return interp.core.input_error.call(null);
} else {
throw e28750;

}
}});
/**
 * Checks for unmatched parenthesis in the inputted code.
 * Interprets the inputted code if none found
 */
interp.core.load_code = (function interp$core$load_code(push_code){
if(interp.utils.balanced_QMARK_.call(null,push_code)){
return interp.core.load_state_history.call(null,cljs.tools.reader.read_string.call(null,push_code));
} else {
cljs.core.reset_BANG_.call(null,interp.core.error_output,"Unmatched parentheses!");

return interp.core.input_error.call(null);
}
});
interp.core.step_back = (function interp$core$step_back(){
if(((1) > cljs.core.deref.call(null,interp.core.current_step))){
return cljs.core.List.EMPTY;
} else {
cljs.core.reset_BANG_.call(null,interp.core.error_exists,false);

cljs.core.reset_BANG_.call(null,interp.core.error_output,"");

return cljs.core.swap_BANG_.call(null,interp.core.current_step,cljs.core.dec);
}
});
interp.core.load_button = (function interp$core$load_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.left-spacing.button-spacing","span.left-spacing.button-spacing",-1569492133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Load Push Code",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.load_code.call(null,cljs.core.deref.call(null,interp.core.push_code));
})], null)], null)], null);
});
interp.core.interpret_one_step_button = (function interp$core$interpret_one_step_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button-spacing","span.button-spacing",-156423300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Interpret One Step",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.interpret_one_step.call(null);
})], null)], null)], null);
});
interp.core.interpret_button = (function interp$core$interpret_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button-spacing","span.button-spacing",-156423300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Interpret",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.interpret_push.call(null);
})], null)], null)], null);
});
interp.core.step_back_button = (function interp$core$step_back_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button-spacing","span.button-spacing",-156423300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Previous Step",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.step_back.call(null);
})], null)], null)], null);
});
interp.core.int_text = (function interp$core$int_text(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.textbox","textarea.textbox",1676866954),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.push_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28751_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.push_code,p1__28751_SHARP_.target.value);
})], null)], null)], null);
});
interp.core.divvy_stack = (function interp$core$divvy_stack(stack){
var iter__4529__auto__ = (function interp$core$divvy_stack_$_iter__28752(s__28753){
return (new cljs.core.LazySeq(null,(function (){
var s__28753__$1 = s__28753;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__28753__$1);
if(temp__5735__auto__){
var s__28753__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28753__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28753__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28755 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28754 = (0);
while(true){
if((i__28754 < size__4528__auto__)){
var items = cljs.core._nth.call(null,c__4527__auto__,i__28754);
cljs.core.chunk_append.call(null,b__28755,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''));

var G__28756 = (i__28754 + (1));
i__28754 = G__28756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28755),interp$core$divvy_stack_$_iter__28752.call(null,cljs.core.chunk_rest.call(null,s__28753__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28755),null);
}
} else {
var items = cljs.core.first.call(null,s__28753__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''),interp$core$divvy_stack_$_iter__28752.call(null,cljs.core.rest.call(null,s__28753__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,stack);
});
interp.core.drop_outers = (function interp$core$drop_outers(s){

return cljs.core.drop.call(null,(1),cljs.core.drop_last.call(null,s));
});
interp.core.esp = (function interp$core$esp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Exec Stack: ",interp.core.drop_outers.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(stacks)))], null)], null);
});
interp.core.isp = (function interp$core$isp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Integer Stack: ",interp.core.drop_outers.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(stacks)))], null)], null);
});
interp.core.ssp = (function interp$core$ssp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"String Stack: ",interp.core.drop_outers.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(stacks)))], null)], null);
});
interp.core.bsp = (function interp$core$bsp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Boolean Stack: ",interp.core.drop_outers.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boolean","boolean",-1919418404).cljs$core$IFn$_invoke$arity$1(stacks)))], null)], null);
});
interp.core.insp = (function interp$core$insp(stacks){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Input Stack: ",interp.core.drop_outers.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(stacks)))], null)], null);
});
interp.core.output_component = (function interp$core$output_component(){
var state = ((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,interp.core.push_state_history)))?null:cljs.core.nth.call(null,cljs.core.deref.call(null,interp.core.push_state_history),cljs.core.deref.call(null,interp.core.current_step)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.outputbox","div.outputbox",2113762080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.esp.call(null,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.isp.call(null,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.ssp.call(null,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.bsp.call(null,state)], null)], null);
});
interp.core.home_page = (function interp$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"Push Interpreter"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.int_text], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bottom-spacing","div.bottom-spacing",50869588),"Current Step: ",((cljs.core.deref.call(null,interp.core.error_exists) === true)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.error","span.error",-283487575),"Error"], null):cljs.core.deref.call(null,interp.core.current_step)),". Step-limit: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.step_limit),new cljs.core.Keyword(null,"max","max",61366548),(100000),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28757_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.step_limit,p1__28757_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.load_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_one_step_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.step_back_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error","p.error",-1322813545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,interp.core.error_output))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.output_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instruction-list","div.instruction-list",-800111947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Instruction List:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),cljs.core.str.cljs$core$IFn$_invoke$arity$1(propeller.push.utils.helpers.get_stack_instructions.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)))], null)], null)], null);
});
interp.core.mount_root = (function interp$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.home_page], null),document.getElementById("app"));
});
interp.core.init_BANG_ = (function interp$core$init_BANG_(){
return interp.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1627306551689

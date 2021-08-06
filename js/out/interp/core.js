// Compiled by ClojureScript 1.10.764 {}
goog.provide('interp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
goog.require('interp.utils');
goog.require('interp.instructions');
goog.require('propeller.push.interpreter');
goog.require('propeller.push.state');
goog.require('propeller.push.core');
goog.require('propeller.push.utils.helpers');
goog.require('clojure.set');
goog.require('propeller.problems.simple_regression');
goog.require('propeller.gp');
goog.require('propeller.genome');
goog.require('propeller.variation');
interp.core.step_limit = reagent.core.atom.call(null,(100));
interp.core.current_step = reagent.core.atom.call(null,(0));
interp.core.error_exists = reagent.core.atom.call(null,false);
interp.core.error_output = reagent.core.atom.call(null,"");
interp.core.push_code = reagent.core.atom.call(null,"(:exec_dup (1 2 :integer_add) \"hello\" (:integer_yank 5 6) :integer_gte :exec_if (5 6) false :integer_add)");
interp.core.current_gen_info = reagent.core.atom.call(null,"");
interp.core.push_state_history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
interp.core.population = reagent.core.atom.call(null,cljs.core.List.EMPTY);
interp.core.generation = reagent.core.atom.call(null,(0));
interp.core.input_error = (function interp$core$input_error(){
return cljs.core.reset_BANG_.call(null,interp.core.error_exists,true);
});
interp.core.surrounding_parentheses_QMARK_ = (function interp$core$surrounding_parentheses_QMARK_(push_code){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,push_code),"(")) && (cljs.core._EQ_.call(null,cljs.core.last.call(null,push_code),")")));
});
/**
 * Written specifically for the unrecognized instruction error
 * thrown by pinterpret/interpret-program, where the unrecognized instruction
 * is the last word in the error string.
 */
interp.core.last_instruction_QMARK_ = (function interp$core$last_instruction_QMARK_(err_msg){
return cljs.core._EQ_.call(null,":",cljs.core.first.call(null,cljs.core.last.call(null,clojure.string.split.call(null,err_msg,/ /))));
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
try{cljs.core.reset_BANG_.call(null,interp.core.push_state_history,interp.core.add_final_state.call(null,propeller.push.interpreter.interpret_program.call(null,program__$1,cljs.core.assoc.call(null,propeller.push.state.empty_state,new cljs.core.Keyword(null,"keep-history","keep-history",1232813028),true),cljs.core.deref.call(null,interp.core.step_limit))));

cljs.core.reset_BANG_.call(null,interp.core.current_step,(0));

cljs.core.reset_BANG_.call(null,interp.core.error_exists,false);

return cljs.core.reset_BANG_.call(null,interp.core.error_output,"");
}catch (e22681){if((e22681 instanceof Error)){
var e = e22681;
if(interp.core.last_instruction_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e))){
cljs.core.reset_BANG_.call(null,interp.core.error_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
cljs.core.reset_BANG_.call(null,interp.core.error_output,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)," (all instructions must begin with the : character)."].join(''));
}

return interp.core.input_error.call(null);
} else {
throw e22681;

}
}});
interp.core.load_code = (function interp$core$load_code(push_code){
if((!(interp.utils.balanced_QMARK_.call(null,push_code)))){
cljs.core.reset_BANG_.call(null,interp.core.error_output,"Check for unmatched parentheses!");

return interp.core.input_error.call(null);
} else {
if((!(interp.core.surrounding_parentheses_QMARK_.call(null,push_code)))){
cljs.core.reset_BANG_.call(null,interp.core.error_output,"Missing surrounding parentheses!");

return interp.core.input_error.call(null);
} else {
return interp.core.load_state_history.call(null,cljs.tools.reader.read_string.call(null,push_code));

}
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
interp.core.regression_argmap = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-initial-plushy-size","max-initial-plushy-size",-374353728),new cljs.core.Keyword(null,"training-data","training-data",-774899967),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"elitism","elitism",-650754994),new cljs.core.Keyword(null,"variation","variation",-450640146),new cljs.core.Keyword(null,"max-generations","max-generations",784506896),new cljs.core.Keyword(null,"parent-selection","parent-selection",-1130458191),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271),new cljs.core.Keyword(null,"tournament-size","tournament-size",1575959771),new cljs.core.Keyword(null,"testing-data","testing-data",-691989988),new cljs.core.Keyword(null,"step-limit","step-limit",-1719865796),new cljs.core.Keyword(null,"error-function","error-function",-421428962),new cljs.core.Keyword(null,"population-size","population-size",-1175003618)],[(100),new cljs.core.Keyword(null,"train","train",1181893679).cljs$core$IFn$_invoke$arity$1(propeller.problems.simple_regression.train_and_test_data),propeller.problems.simple_regression.instructions,false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"umad","umad",-1269224474),0.5,new cljs.core.Keyword(null,"crossover","crossover",2002154789),0.5], null),(50),new cljs.core.Keyword(null,"lexicase","lexicase",-597628626),0.1,(5),new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(propeller.problems.simple_regression.train_and_test_data),(200),propeller.problems.simple_regression.error_function,(500)]);
interp.core.report = (function interp$core$report(pop,generation,argmap){
var best = cljs.core.first.call(null,pop);
var gen_info = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"generation","generation",-2132542044),generation,new cljs.core.Keyword(null,"best-plushy","best-plushy",-1759789480),new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(best),new cljs.core.Keyword(null,"best-program","best-program",-811166956),propeller.genome.plushy__GT_push.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(best),argmap),new cljs.core.Keyword(null,"best-total-error","best-total-error",-9608837),new cljs.core.Keyword(null,"total-error","total-error",1426239184).cljs$core$IFn$_invoke$arity$1(best),new cljs.core.Keyword(null,"best-errors","best-errors",850953133),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(best),new cljs.core.Keyword(null,"best-behaviors","best-behaviors",1832578489),new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$1(best)], null);
return cljs.core.reset_BANG_.call(null,interp.core.current_gen_info,gen_info);
});
interp.core.generate_pop = (function interp$core$generate_pop(population_size,instructions,max_initial_plushy_size){
return cljs.core.repeatedly.call(null,population_size,(function (){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plushy","plushy",980491793)],[propeller.genome.make_random_plushy.call(null,instructions,max_initial_plushy_size)]);
}));
});
interp.core.next_gen_pop = (function interp$core$next_gen_pop(population_size,evaluated_pop,argmap){
return cljs.core.repeatedly.call(null,population_size,(function (){
return propeller.variation.new_individual.call(null,evaluated_pop,argmap);
}));
});
interp.core.regression_gp = (function interp$core$regression_gp(p__22682){
var map__22683 = p__22682;
var map__22683__$1 = (((((!((map__22683 == null))))?(((((map__22683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22683):map__22683);
var argmap = map__22683__$1;
var population_size = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"population-size","population-size",-1175003618));
var max_generations = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"max-generations","max-generations",784506896));
var error_function = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"error-function","error-function",-421428962));
var instructions = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"instructions","instructions",1724333802));
var max_initial_plushy_size = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"max-initial-plushy-size","max-initial-plushy-size",-374353728));
if((cljs.core.deref.call(null,interp.core.generation) === (0))){
cljs.core.reset_BANG_.call(null,interp.core.population,interp.core.generate_pop.call(null,population_size,instructions,max_initial_plushy_size));
} else {
}

var evaluated_pop = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"total-error","total-error",1426239184),cljs.core.map.call(null,cljs.core.partial.call(null,error_function,argmap,new cljs.core.Keyword(null,"training-data","training-data",-774899967).cljs$core$IFn$_invoke$arity$1(argmap)),cljs.core.deref.call(null,interp.core.population)));
var best_individual = cljs.core.first.call(null,evaluated_pop);
if((new cljs.core.Keyword(null,"total-error","total-error",1426239184).cljs$core$IFn$_invoke$arity$1(best_individual) === (0))){
cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success-generation","success-generation",571163640),cljs.core.deref.call(null,interp.core.generation)], null));

cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total-test-error","total-test-error",552539969),new cljs.core.Keyword(null,"total-error","total-error",1426239184).cljs$core$IFn$_invoke$arity$1(error_function.call(null,argmap,new cljs.core.Keyword(null,"testing-data","testing-data",-691989988).cljs$core$IFn$_invoke$arity$1(argmap),best_individual))], null));
} else {
if((cljs.core.deref.call(null,interp.core.generation) >= max_generations)){
} else {
cljs.core.swap_BANG_.call(null,interp.core.generation,cljs.core.inc);

cljs.core.reset_BANG_.call(null,interp.core.population,interp.core.next_gen_pop.call(null,population_size,evaluated_pop,argmap));

}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"custom-report","custom-report",1014027624).cljs$core$IFn$_invoke$arity$1(argmap))){
return new cljs.core.Keyword(null,"custom-report","custom-report",1014027624).cljs$core$IFn$_invoke$arity$1(argmap).call(null,evaluated_pop,cljs.core.deref.call(null,interp.core.generation),argmap);
} else {
return interp.core.report.call(null,evaluated_pop,cljs.core.deref.call(null,interp.core.generation),argmap);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.textbox","textarea.textbox",1676866954),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.push_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22685_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.push_code,p1__22685_SHARP_.target.value);
})], null)], null)], null);
});
interp.core.next_gen_button = (function interp$core$next_gen_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.button-spacing","span.button-spacing",-156423300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next Generation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interp.core.regression_gp.call(null,interp.core.regression_argmap);
})], null)], null)], null);
});
interp.core.divvy_stack = (function interp$core$divvy_stack(stack){
var iter__4529__auto__ = (function interp$core$divvy_stack_$_iter__22686(s__22687){
return (new cljs.core.LazySeq(null,(function (){
var s__22687__$1 = s__22687;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22687__$1);
if(temp__5735__auto__){
var s__22687__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22687__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__22687__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__22689 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__22688 = (0);
while(true){
if((i__22688 < size__4528__auto__)){
var items = cljs.core._nth.call(null,c__4527__auto__,i__22688);
cljs.core.chunk_append.call(null,b__22689,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''));

var G__22690 = (i__22688 + (1));
i__22688 = G__22690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22689),interp$core$divvy_stack_$_iter__22686.call(null,cljs.core.chunk_rest.call(null,s__22687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22689),null);
}
} else {
var items = cljs.core.first.call(null,s__22687__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(items)," "].join(''),interp$core$divvy_stack_$_iter__22686.call(null,cljs.core.rest.call(null,s__22687__$2)));
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
/**
 * drops parantheses from the string output
 */
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
interp.core.gen_out = (function interp$core$gen_out(gen_info){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Generation:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(gen_info))], null)], null);
});
interp.core.program_out = (function interp$core$program_out(gen_info){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Best push program:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"best-program","best-program",-811166956).cljs$core$IFn$_invoke$arity$1(gen_info))], null)], null);
});
interp.core.total_error_out = (function interp$core$total_error_out(gen_info){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Best total error:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"best-total-error","best-total-error",-9608837).cljs$core$IFn$_invoke$arity$1(gen_info))], null)], null);
});
interp.core.errors_out = (function interp$core$errors_out(gen_info){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Best errors:  ",interp.core.drop_outers.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"best-errors","best-errors",850953133).cljs$core$IFn$_invoke$arity$1(gen_info)))], null)], null);
});
interp.core.push_output_component = (function interp$core$push_output_component(){
var state = ((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,interp.core.push_state_history)))?null:cljs.core.nth.call(null,cljs.core.deref.call(null,interp.core.push_state_history),cljs.core.deref.call(null,interp.core.current_step)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.outputbox","div.outputbox",2113762080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.esp.call(null,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.isp.call(null,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.ssp.call(null,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.bsp.call(null,state)], null)], null);
});
interp.core.gp_output_component = (function interp$core$gp_output_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.outputbox","div.outputbox",2113762080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.gen_out.call(null,cljs.core.deref.call(null,interp.core.current_gen_info))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.program_out.call(null,cljs.core.deref.call(null,interp.core.current_gen_info))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.total_error_out.call(null,cljs.core.deref.call(null,interp.core.current_gen_info))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),interp.core.errors_out.call(null,cljs.core.deref.call(null,interp.core.current_gen_info))], null)], null);
});
interp.core.home_page = (function interp$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"Interpush"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h1","div.h1",-366409281),"Push Interpreter"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.int_text], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bottom-spacing","div.bottom-spacing",50869588),"Current Step: ",((cljs.core.deref.call(null,interp.core.error_exists) === true)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.error","span.error",-283487575),"Error"], null):cljs.core.deref.call(null,interp.core.current_step)),". Step-limit: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,interp.core.step_limit),new cljs.core.Keyword(null,"max","max",61366548),(100000),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22691_SHARP_){
return cljs.core.reset_BANG_.call(null,interp.core.step_limit,p1__22691_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.load_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_one_step_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.step_back_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.interpret_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error","p.error",-1322813545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,interp.core.error_output))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.push_output_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h1","div.h1",-366409281),"Genetic Programming: Simple Regression"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.next_gen_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.gp_output_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instruction-list","div.instruction-list",-800111947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Push Instruction List:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,propeller.push.utils.helpers.get_stack_instructions.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null))))], null)], null)], null);
});
interp.core.mount_root = (function interp$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interp.core.home_page], null),document.getElementById("app"));
});
interp.core.init_BANG_ = (function interp$core$init_BANG_(){
return interp.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1628218145969

// Compiled by ClojureScript 1.10.764 {}
goog.provide('propeller.problems.simple_regression');
goog.require('cljs.core');
goog.require('propeller.genome');
goog.require('propeller.push.interpreter');
goog.require('propeller.push.state');
goog.require('propeller.tools.math');
goog.require('propeller.gp');
goog.require('cljs.reader');
/**
 * Target function: f(x) = x^3 + x + 3
 */
propeller.problems.simple_regression.target_function = (function propeller$problems$simple_regression$target_function(x){
return ((((x * x) * x) + x) + (3));
});
propeller.problems.simple_regression.train_and_test_data = (function (){var train_inputs = cljs.core.range.call(null,(-10),(11));
var test_inputs = cljs.core.concat.call(null,cljs.core.range.call(null,(-20),(-10)),cljs.core.range.call(null,(11),(21)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"train","train",1181893679),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),train_inputs,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.map.call(null,propeller.problems.simple_regression.target_function,train_inputs)], null),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),test_inputs,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.map.call(null,propeller.problems.simple_regression.target_function,test_inputs)], null)], null);
})();
propeller.problems.simple_regression.instructions = (new cljs.core.List(null,new cljs.core.Keyword(null,"in1","in1",-201447014),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_add","integer_add",-429483805),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_subtract","integer_subtract",-522113646),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_mult","integer_mult",-864719494),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_quot","integer_quot",1967229483),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_eq","integer_eq",1174436858),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_dup","exec_dup",62681535),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_if","exec_if",-1891127445),(new cljs.core.List(null,new cljs.core.Symbol(null,"close","close",-819286187,null),(new cljs.core.List(null,(0),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),(11),null));
/**
 * Finds the behaviors and errors of an individual. The error is the absolute
 *   deviation between the target output value and the program's selected behavior,
 *   or 1000000 if no behavior is produced. The behavior is here defined as the
 *   final top item on the INTEGER stack.
 */
propeller.problems.simple_regression.error_function = (function propeller$problems$simple_regression$error_function(argmap,data,individual){
var program = propeller.genome.plushy__GT_push.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(individual),argmap);
var inputs = new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(data);
var correct_outputs = new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(data);
var outputs = cljs.core.map.call(null,(function (input){
return propeller.push.state.peek_stack.call(null,propeller.push.interpreter.interpret_program.call(null,program,cljs.core.assoc.call(null,propeller.push.state.empty_state,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in1","in1",-201447014),input], null)),new cljs.core.Keyword(null,"step-limit","step-limit",-1719865796).cljs$core$IFn$_invoke$arity$1(argmap)),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),inputs);
var errors = cljs.core.map.call(null,(function (correct_output,output){
if(cljs.core._EQ_.call(null,output,new cljs.core.Keyword(null,"no-stack-item","no-stack-item",-1282481685))){
return (1000000);
} else {
return propeller.tools.math.abs.call(null,(correct_output - output));
}
}),correct_outputs,outputs);
return cljs.core.assoc.call(null,individual,new cljs.core.Keyword(null,"behaviors","behaviors",120724909),outputs,new cljs.core.Keyword(null,"errors","errors",-908790718),errors,new cljs.core.Keyword(null,"total-error","total-error",1426239184),cljs.core.apply.call(null,cljs.core._PLUS_,errors));
});
/**
 * Runs propel-gp, giving it a map of arguments.
 */
propeller.problems.simple_regression._main = (function propeller$problems$simple_regression$_main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26693 = arguments.length;
var i__4737__auto___26694 = (0);
while(true){
if((i__4737__auto___26694 < len__4736__auto___26693)){
args__4742__auto__.push((arguments[i__4737__auto___26694]));

var G__26695 = (i__4737__auto___26694 + (1));
i__4737__auto___26694 = G__26695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return propeller.problems.simple_regression._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(propeller.problems.simple_regression._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return propeller.gp.gp.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-initial-plushy-size","max-initial-plushy-size",-374353728),new cljs.core.Keyword(null,"training-data","training-data",-774899967),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"elitism","elitism",-650754994),new cljs.core.Keyword(null,"variation","variation",-450640146),new cljs.core.Keyword(null,"max-generations","max-generations",784506896),new cljs.core.Keyword(null,"parent-selection","parent-selection",-1130458191),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271),new cljs.core.Keyword(null,"tournament-size","tournament-size",1575959771),new cljs.core.Keyword(null,"testing-data","testing-data",-691989988),new cljs.core.Keyword(null,"step-limit","step-limit",-1719865796),new cljs.core.Keyword(null,"error-function","error-function",-421428962),new cljs.core.Keyword(null,"population-size","population-size",-1175003618)],[(100),new cljs.core.Keyword(null,"train","train",1181893679).cljs$core$IFn$_invoke$arity$1(propeller.problems.simple_regression.train_and_test_data),propeller.problems.simple_regression.instructions,false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"umad","umad",-1269224474),0.5,new cljs.core.Keyword(null,"crossover","crossover",2002154789),0.5], null),(500),new cljs.core.Keyword(null,"lexicase","lexicase",-597628626),0.1,(5),new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(propeller.problems.simple_regression.train_and_test_data),(200),propeller.problems.simple_regression.error_function,(500)]),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,(function (p1__26691_SHARP_){
if(typeof p1__26691_SHARP_ === 'string'){
return cljs.reader.read_string.call(null,p1__26691_SHARP_);
} else {
return p1__26691_SHARP_;
}
}),args))));
}));

(propeller.problems.simple_regression._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(propeller.problems.simple_regression._main.cljs$lang$applyTo = (function (seq26692){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26692));
}));


//# sourceMappingURL=simple_regression.js.map?rel=1627930534194

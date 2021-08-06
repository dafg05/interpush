// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e32349){if((e32349 instanceof Error)){
var e = e32349;
return "Error: Unable to stringify";
} else {
throw e32349;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32352 = arguments.length;
switch (G__32352) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32350_SHARP_){
if(typeof p1__32350_SHARP_ === 'string'){
return p1__32350_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32350_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32355 = arguments.length;
var i__4737__auto___32356 = (0);
while(true){
if((i__4737__auto___32356 < len__4736__auto___32355)){
args__4742__auto__.push((arguments[i__4737__auto___32356]));

var G__32357 = (i__4737__auto___32356 + (1));
i__4737__auto___32356 = G__32357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32354){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32354));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32359 = arguments.length;
var i__4737__auto___32360 = (0);
while(true){
if((i__4737__auto___32360 < len__4736__auto___32359)){
args__4742__auto__.push((arguments[i__4737__auto___32360]));

var G__32361 = (i__4737__auto___32360 + (1));
i__4737__auto___32360 = G__32361;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32358){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32358));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32362){
var map__32363 = p__32362;
var map__32363__$1 = (((((!((map__32363 == null))))?(((((map__32363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32363):map__32363);
var message = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28368__auto___32442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_32414){
var state_val_32415 = (state_32414[(1)]);
if((state_val_32415 === (7))){
var inst_32410 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32416_32443 = state_32414__$1;
(statearr_32416_32443[(2)] = inst_32410);

(statearr_32416_32443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (1))){
var state_32414__$1 = state_32414;
var statearr_32417_32444 = state_32414__$1;
(statearr_32417_32444[(2)] = null);

(statearr_32417_32444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (4))){
var inst_32367 = (state_32414[(7)]);
var inst_32367__$1 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32418 = state_32414;
(statearr_32418[(7)] = inst_32367__$1);

return statearr_32418;
})();
if(cljs.core.truth_(inst_32367__$1)){
var statearr_32419_32445 = state_32414__$1;
(statearr_32419_32445[(1)] = (5));

} else {
var statearr_32420_32446 = state_32414__$1;
(statearr_32420_32446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (15))){
var inst_32374 = (state_32414[(8)]);
var inst_32389 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32374);
var inst_32390 = cljs.core.first.call(null,inst_32389);
var inst_32391 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32390);
var inst_32392 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32391)].join('');
var inst_32393 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32392);
var state_32414__$1 = state_32414;
var statearr_32421_32447 = state_32414__$1;
(statearr_32421_32447[(2)] = inst_32393);

(statearr_32421_32447[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (13))){
var inst_32398 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32422_32448 = state_32414__$1;
(statearr_32422_32448[(2)] = inst_32398);

(statearr_32422_32448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (6))){
var state_32414__$1 = state_32414;
var statearr_32423_32449 = state_32414__$1;
(statearr_32423_32449[(2)] = null);

(statearr_32423_32449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (17))){
var inst_32396 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32424_32450 = state_32414__$1;
(statearr_32424_32450[(2)] = inst_32396);

(statearr_32424_32450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (3))){
var inst_32412 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32414__$1,inst_32412);
} else {
if((state_val_32415 === (12))){
var inst_32373 = (state_32414[(9)]);
var inst_32387 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32373,opts);
var state_32414__$1 = state_32414;
if(inst_32387){
var statearr_32425_32451 = state_32414__$1;
(statearr_32425_32451[(1)] = (15));

} else {
var statearr_32426_32452 = state_32414__$1;
(statearr_32426_32452[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (2))){
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32414__$1,(4),ch);
} else {
if((state_val_32415 === (11))){
var inst_32374 = (state_32414[(8)]);
var inst_32379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32380 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32374);
var inst_32381 = cljs.core.async.timeout.call(null,(1000));
var inst_32382 = [inst_32380,inst_32381];
var inst_32383 = (new cljs.core.PersistentVector(null,2,(5),inst_32379,inst_32382,null));
var state_32414__$1 = state_32414;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32414__$1,(14),inst_32383);
} else {
if((state_val_32415 === (9))){
var inst_32374 = (state_32414[(8)]);
var inst_32400 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32401 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32374);
var inst_32402 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32401);
var inst_32403 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32402)].join('');
var inst_32404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32403);
var state_32414__$1 = (function (){var statearr_32427 = state_32414;
(statearr_32427[(10)] = inst_32400);

return statearr_32427;
})();
var statearr_32428_32453 = state_32414__$1;
(statearr_32428_32453[(2)] = inst_32404);

(statearr_32428_32453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (5))){
var inst_32367 = (state_32414[(7)]);
var inst_32369 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32370 = (new cljs.core.PersistentArrayMap(null,2,inst_32369,null));
var inst_32371 = (new cljs.core.PersistentHashSet(null,inst_32370,null));
var inst_32372 = figwheel.client.focus_msgs.call(null,inst_32371,inst_32367);
var inst_32373 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32372);
var inst_32374 = cljs.core.first.call(null,inst_32372);
var inst_32375 = figwheel.client.autoload_QMARK_.call(null);
var state_32414__$1 = (function (){var statearr_32429 = state_32414;
(statearr_32429[(8)] = inst_32374);

(statearr_32429[(9)] = inst_32373);

return statearr_32429;
})();
if(cljs.core.truth_(inst_32375)){
var statearr_32430_32454 = state_32414__$1;
(statearr_32430_32454[(1)] = (8));

} else {
var statearr_32431_32455 = state_32414__$1;
(statearr_32431_32455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (14))){
var inst_32385 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32432_32456 = state_32414__$1;
(statearr_32432_32456[(2)] = inst_32385);

(statearr_32432_32456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (16))){
var state_32414__$1 = state_32414;
var statearr_32433_32457 = state_32414__$1;
(statearr_32433_32457[(2)] = null);

(statearr_32433_32457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (10))){
var inst_32406 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32434 = state_32414;
(statearr_32434[(11)] = inst_32406);

return statearr_32434;
})();
var statearr_32435_32458 = state_32414__$1;
(statearr_32435_32458[(2)] = null);

(statearr_32435_32458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (8))){
var inst_32373 = (state_32414[(9)]);
var inst_32377 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32373,opts);
var state_32414__$1 = state_32414;
if(cljs.core.truth_(inst_32377)){
var statearr_32436_32459 = state_32414__$1;
(statearr_32436_32459[(1)] = (11));

} else {
var statearr_32437_32460 = state_32414__$1;
(statearr_32437_32460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28274__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28274__auto____0 = (function (){
var statearr_32438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32438[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28274__auto__);

(statearr_32438[(1)] = (1));

return statearr_32438;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28274__auto____1 = (function (state_32414){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_32414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e32439){if((e32439 instanceof Object)){
var ex__28277__auto__ = e32439;
var statearr_32440_32461 = state_32414;
(statearr_32440_32461[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32462 = state_32414;
state_32414 = G__32462;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28274__auto__ = function(state_32414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28274__auto____1.call(this,state_32414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28274__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28274__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_32441 = f__28369__auto__.call(null);
(statearr_32441[(6)] = c__28368__auto___32442);

return statearr_32441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32463_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32463_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32469 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32465 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32466 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32467 = true;
var _STAR_print_fn_STAR__temp_val__32468 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32467);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32468);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32466);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32465);
}}catch (e32464){if((e32464 instanceof Error)){
var e = e32464;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32469], null));
} else {
var e = e32464;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32470){
var map__32471 = p__32470;
var map__32471__$1 = (((((!((map__32471 == null))))?(((((map__32471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32471):map__32471);
var opts = map__32471__$1;
var build_id = cljs.core.get.call(null,map__32471__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__32473){
var vec__32474 = p__32473;
var seq__32475 = cljs.core.seq.call(null,vec__32474);
var first__32476 = cljs.core.first.call(null,seq__32475);
var seq__32475__$1 = cljs.core.next.call(null,seq__32475);
var map__32477 = first__32476;
var map__32477__$1 = (((((!((map__32477 == null))))?(((((map__32477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32477):map__32477);
var msg = map__32477__$1;
var msg_name = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32475__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32479){
var vec__32480 = p__32479;
var seq__32481 = cljs.core.seq.call(null,vec__32480);
var first__32482 = cljs.core.first.call(null,seq__32481);
var seq__32481__$1 = cljs.core.next.call(null,seq__32481);
var map__32483 = first__32482;
var map__32483__$1 = (((((!((map__32483 == null))))?(((((map__32483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32483):map__32483);
var msg = map__32483__$1;
var msg_name = cljs.core.get.call(null,map__32483__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32481__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32485){
var map__32486 = p__32485;
var map__32486__$1 = (((((!((map__32486 == null))))?(((((map__32486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32486):map__32486);
var on_compile_warning = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__32488){
var vec__32489 = p__32488;
var seq__32490 = cljs.core.seq.call(null,vec__32489);
var first__32491 = cljs.core.first.call(null,seq__32490);
var seq__32490__$1 = cljs.core.next.call(null,seq__32490);
var map__32492 = first__32491;
var map__32492__$1 = (((((!((map__32492 == null))))?(((((map__32492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32492):map__32492);
var msg = map__32492__$1;
var msg_name = cljs.core.get.call(null,map__32492__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32490__$1;
var pred__32494 = cljs.core._EQ_;
var expr__32495 = msg_name;
if(cljs.core.truth_(pred__32494.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32495))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32494.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32495))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_32584){
var state_val_32585 = (state_32584[(1)]);
if((state_val_32585 === (7))){
var inst_32504 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32504)){
var statearr_32586_32633 = state_32584__$1;
(statearr_32586_32633[(1)] = (8));

} else {
var statearr_32587_32634 = state_32584__$1;
(statearr_32587_32634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (20))){
var inst_32578 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32588_32635 = state_32584__$1;
(statearr_32588_32635[(2)] = inst_32578);

(statearr_32588_32635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (27))){
var inst_32574 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32589_32636 = state_32584__$1;
(statearr_32589_32636[(2)] = inst_32574);

(statearr_32589_32636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (1))){
var inst_32497 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32497)){
var statearr_32590_32637 = state_32584__$1;
(statearr_32590_32637[(1)] = (2));

} else {
var statearr_32591_32638 = state_32584__$1;
(statearr_32591_32638[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (24))){
var inst_32576 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32592_32639 = state_32584__$1;
(statearr_32592_32639[(2)] = inst_32576);

(statearr_32592_32639[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (4))){
var inst_32582 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32584__$1,inst_32582);
} else {
if((state_val_32585 === (15))){
var inst_32580 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32593_32640 = state_32584__$1;
(statearr_32593_32640[(2)] = inst_32580);

(statearr_32593_32640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (21))){
var inst_32533 = (state_32584[(2)]);
var inst_32534 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32535 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32534);
var state_32584__$1 = (function (){var statearr_32594 = state_32584;
(statearr_32594[(7)] = inst_32533);

return statearr_32594;
})();
var statearr_32595_32641 = state_32584__$1;
(statearr_32595_32641[(2)] = inst_32535);

(statearr_32595_32641[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (31))){
var inst_32563 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(inst_32563){
var statearr_32596_32642 = state_32584__$1;
(statearr_32596_32642[(1)] = (34));

} else {
var statearr_32597_32643 = state_32584__$1;
(statearr_32597_32643[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (32))){
var inst_32572 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32598_32644 = state_32584__$1;
(statearr_32598_32644[(2)] = inst_32572);

(statearr_32598_32644[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (33))){
var inst_32559 = (state_32584[(2)]);
var inst_32560 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32561 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32560);
var state_32584__$1 = (function (){var statearr_32599 = state_32584;
(statearr_32599[(8)] = inst_32559);

return statearr_32599;
})();
var statearr_32600_32645 = state_32584__$1;
(statearr_32600_32645[(2)] = inst_32561);

(statearr_32600_32645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (13))){
var inst_32518 = figwheel.client.heads_up.clear.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(16),inst_32518);
} else {
if((state_val_32585 === (22))){
var inst_32539 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32540 = figwheel.client.heads_up.append_warning_message.call(null,inst_32539);
var state_32584__$1 = state_32584;
var statearr_32601_32646 = state_32584__$1;
(statearr_32601_32646[(2)] = inst_32540);

(statearr_32601_32646[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (36))){
var inst_32570 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32602_32647 = state_32584__$1;
(statearr_32602_32647[(2)] = inst_32570);

(statearr_32602_32647[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (29))){
var inst_32550 = (state_32584[(2)]);
var inst_32551 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32552 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32551);
var state_32584__$1 = (function (){var statearr_32603 = state_32584;
(statearr_32603[(9)] = inst_32550);

return statearr_32603;
})();
var statearr_32604_32648 = state_32584__$1;
(statearr_32604_32648[(2)] = inst_32552);

(statearr_32604_32648[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (6))){
var inst_32499 = (state_32584[(10)]);
var state_32584__$1 = state_32584;
var statearr_32605_32649 = state_32584__$1;
(statearr_32605_32649[(2)] = inst_32499);

(statearr_32605_32649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (28))){
var inst_32546 = (state_32584[(2)]);
var inst_32547 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32548 = figwheel.client.heads_up.display_warning.call(null,inst_32547);
var state_32584__$1 = (function (){var statearr_32606 = state_32584;
(statearr_32606[(11)] = inst_32546);

return statearr_32606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(29),inst_32548);
} else {
if((state_val_32585 === (25))){
var inst_32544 = figwheel.client.heads_up.clear.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(28),inst_32544);
} else {
if((state_val_32585 === (34))){
var inst_32565 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(37),inst_32565);
} else {
if((state_val_32585 === (17))){
var inst_32524 = (state_32584[(2)]);
var inst_32525 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32526 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32525);
var state_32584__$1 = (function (){var statearr_32607 = state_32584;
(statearr_32607[(12)] = inst_32524);

return statearr_32607;
})();
var statearr_32608_32650 = state_32584__$1;
(statearr_32608_32650[(2)] = inst_32526);

(statearr_32608_32650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (3))){
var inst_32516 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(inst_32516){
var statearr_32609_32651 = state_32584__$1;
(statearr_32609_32651[(1)] = (13));

} else {
var statearr_32610_32652 = state_32584__$1;
(statearr_32610_32652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (12))){
var inst_32512 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32611_32653 = state_32584__$1;
(statearr_32611_32653[(2)] = inst_32512);

(statearr_32611_32653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (2))){
var inst_32499 = (state_32584[(10)]);
var inst_32499__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32584__$1 = (function (){var statearr_32612 = state_32584;
(statearr_32612[(10)] = inst_32499__$1);

return statearr_32612;
})();
if(cljs.core.truth_(inst_32499__$1)){
var statearr_32613_32654 = state_32584__$1;
(statearr_32613_32654[(1)] = (5));

} else {
var statearr_32614_32655 = state_32584__$1;
(statearr_32614_32655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (23))){
var inst_32542 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(inst_32542){
var statearr_32615_32656 = state_32584__$1;
(statearr_32615_32656[(1)] = (25));

} else {
var statearr_32616_32657 = state_32584__$1;
(statearr_32616_32657[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (35))){
var state_32584__$1 = state_32584;
var statearr_32617_32658 = state_32584__$1;
(statearr_32617_32658[(2)] = null);

(statearr_32617_32658[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (19))){
var inst_32537 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(inst_32537){
var statearr_32618_32659 = state_32584__$1;
(statearr_32618_32659[(1)] = (22));

} else {
var statearr_32619_32660 = state_32584__$1;
(statearr_32619_32660[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (11))){
var inst_32508 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32620_32661 = state_32584__$1;
(statearr_32620_32661[(2)] = inst_32508);

(statearr_32620_32661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (9))){
var inst_32510 = figwheel.client.heads_up.clear.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(12),inst_32510);
} else {
if((state_val_32585 === (5))){
var inst_32501 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32584__$1 = state_32584;
var statearr_32621_32662 = state_32584__$1;
(statearr_32621_32662[(2)] = inst_32501);

(statearr_32621_32662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (14))){
var inst_32528 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(inst_32528){
var statearr_32622_32663 = state_32584__$1;
(statearr_32622_32663[(1)] = (18));

} else {
var statearr_32623_32664 = state_32584__$1;
(statearr_32623_32664[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (26))){
var inst_32554 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(inst_32554){
var statearr_32624_32665 = state_32584__$1;
(statearr_32624_32665[(1)] = (30));

} else {
var statearr_32625_32666 = state_32584__$1;
(statearr_32625_32666[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (16))){
var inst_32520 = (state_32584[(2)]);
var inst_32521 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32522 = figwheel.client.heads_up.display_exception.call(null,inst_32521);
var state_32584__$1 = (function (){var statearr_32626 = state_32584;
(statearr_32626[(13)] = inst_32520);

return statearr_32626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(17),inst_32522);
} else {
if((state_val_32585 === (30))){
var inst_32556 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32557 = figwheel.client.heads_up.display_warning.call(null,inst_32556);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(33),inst_32557);
} else {
if((state_val_32585 === (10))){
var inst_32514 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32627_32667 = state_32584__$1;
(statearr_32627_32667[(2)] = inst_32514);

(statearr_32627_32667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (18))){
var inst_32530 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32531 = figwheel.client.heads_up.display_exception.call(null,inst_32530);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(21),inst_32531);
} else {
if((state_val_32585 === (37))){
var inst_32567 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32628_32668 = state_32584__$1;
(statearr_32628_32668[(2)] = inst_32567);

(statearr_32628_32668[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (8))){
var inst_32506 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(11),inst_32506);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32629[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto____1 = (function (state_32584){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_32584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e32630){if((e32630 instanceof Object)){
var ex__28277__auto__ = e32630;
var statearr_32631_32669 = state_32584;
(statearr_32631_32669[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32670 = state_32584;
state_32584 = G__32670;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto__ = function(state_32584){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto____1.call(this,state_32584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_32632 = f__28369__auto__.call(null);
(statearr_32632[(6)] = c__28368__auto__);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28368__auto___32699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_32685){
var state_val_32686 = (state_32685[(1)]);
if((state_val_32686 === (1))){
var state_32685__$1 = state_32685;
var statearr_32687_32700 = state_32685__$1;
(statearr_32687_32700[(2)] = null);

(statearr_32687_32700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (2))){
var state_32685__$1 = state_32685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32685__$1,(4),ch);
} else {
if((state_val_32686 === (3))){
var inst_32683 = (state_32685[(2)]);
var state_32685__$1 = state_32685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32685__$1,inst_32683);
} else {
if((state_val_32686 === (4))){
var inst_32673 = (state_32685[(7)]);
var inst_32673__$1 = (state_32685[(2)]);
var state_32685__$1 = (function (){var statearr_32688 = state_32685;
(statearr_32688[(7)] = inst_32673__$1);

return statearr_32688;
})();
if(cljs.core.truth_(inst_32673__$1)){
var statearr_32689_32701 = state_32685__$1;
(statearr_32689_32701[(1)] = (5));

} else {
var statearr_32690_32702 = state_32685__$1;
(statearr_32690_32702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (5))){
var inst_32673 = (state_32685[(7)]);
var inst_32675 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32673);
var state_32685__$1 = state_32685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32685__$1,(8),inst_32675);
} else {
if((state_val_32686 === (6))){
var state_32685__$1 = state_32685;
var statearr_32691_32703 = state_32685__$1;
(statearr_32691_32703[(2)] = null);

(statearr_32691_32703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (7))){
var inst_32681 = (state_32685[(2)]);
var state_32685__$1 = state_32685;
var statearr_32692_32704 = state_32685__$1;
(statearr_32692_32704[(2)] = inst_32681);

(statearr_32692_32704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (8))){
var inst_32677 = (state_32685[(2)]);
var state_32685__$1 = (function (){var statearr_32693 = state_32685;
(statearr_32693[(8)] = inst_32677);

return statearr_32693;
})();
var statearr_32694_32705 = state_32685__$1;
(statearr_32694_32705[(2)] = null);

(statearr_32694_32705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28274__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28274__auto____0 = (function (){
var statearr_32695 = [null,null,null,null,null,null,null,null,null];
(statearr_32695[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28274__auto__);

(statearr_32695[(1)] = (1));

return statearr_32695;
});
var figwheel$client$heads_up_plugin_$_state_machine__28274__auto____1 = (function (state_32685){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_32685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e32696){if((e32696 instanceof Object)){
var ex__28277__auto__ = e32696;
var statearr_32697_32706 = state_32685;
(statearr_32697_32706[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32707 = state_32685;
state_32685 = G__32707;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28274__auto__ = function(state_32685){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28274__auto____1.call(this,state_32685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28274__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28274__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_32698 = f__28369__auto__.call(null);
(statearr_32698[(6)] = c__28368__auto___32699);

return statearr_32698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_32713){
var state_val_32714 = (state_32713[(1)]);
if((state_val_32714 === (1))){
var inst_32708 = cljs.core.async.timeout.call(null,(3000));
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32713__$1,(2),inst_32708);
} else {
if((state_val_32714 === (2))){
var inst_32710 = (state_32713[(2)]);
var inst_32711 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32713__$1 = (function (){var statearr_32715 = state_32713;
(statearr_32715[(7)] = inst_32710);

return statearr_32715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32713__$1,inst_32711);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28274__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28274__auto____0 = (function (){
var statearr_32716 = [null,null,null,null,null,null,null,null];
(statearr_32716[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28274__auto__);

(statearr_32716[(1)] = (1));

return statearr_32716;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28274__auto____1 = (function (state_32713){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_32713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e32717){if((e32717 instanceof Object)){
var ex__28277__auto__ = e32717;
var statearr_32718_32720 = state_32713;
(statearr_32718_32720[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32721 = state_32713;
state_32713 = G__32721;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28274__auto__ = function(state_32713){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28274__auto____1.call(this,state_32713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28274__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28274__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_32719 = f__28369__auto__.call(null);
(statearr_32719[(6)] = c__28368__auto__);

return statearr_32719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_32728){
var state_val_32729 = (state_32728[(1)]);
if((state_val_32729 === (1))){
var inst_32722 = cljs.core.async.timeout.call(null,(2000));
var state_32728__$1 = state_32728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32728__$1,(2),inst_32722);
} else {
if((state_val_32729 === (2))){
var inst_32724 = (state_32728[(2)]);
var inst_32725 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32726 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32725);
var state_32728__$1 = (function (){var statearr_32730 = state_32728;
(statearr_32730[(7)] = inst_32724);

return statearr_32730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32728__$1,inst_32726);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto____0 = (function (){
var statearr_32731 = [null,null,null,null,null,null,null,null];
(statearr_32731[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto__);

(statearr_32731[(1)] = (1));

return statearr_32731;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto____1 = (function (state_32728){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_32728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e32732){if((e32732 instanceof Object)){
var ex__28277__auto__ = e32732;
var statearr_32733_32735 = state_32728;
(statearr_32733_32735[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32736 = state_32728;
state_32728 = G__32736;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto__ = function(state_32728){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto____1.call(this,state_32728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_32734 = f__28369__auto__.call(null);
(statearr_32734[(6)] = c__28368__auto__);

return statearr_32734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32737){
var map__32738 = p__32737;
var map__32738__$1 = (((((!((map__32738 == null))))?(((((map__32738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32738):map__32738);
var file = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32740 = "";
var G__32740__$1 = (cljs.core.truth_(file)?[G__32740,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32740);
var G__32740__$2 = (cljs.core.truth_(line)?[G__32740__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32740__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__32740__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32740__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32741){
var map__32742 = p__32741;
var map__32742__$1 = (((((!((map__32742 == null))))?(((((map__32742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32742):map__32742);
var ed = map__32742__$1;
var exception_data = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32745 = (function (){var G__32744 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32744)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32744;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32745);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32746){
var map__32747 = p__32746;
var map__32747__$1 = (((((!((map__32747 == null))))?(((((map__32747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32747):map__32747);
var w = map__32747__$1;
var message = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32749 = cljs.core.seq.call(null,plugins);
var chunk__32750 = null;
var count__32751 = (0);
var i__32752 = (0);
while(true){
if((i__32752 < count__32751)){
var vec__32759 = cljs.core._nth.call(null,chunk__32750,i__32752);
var k = cljs.core.nth.call(null,vec__32759,(0),null);
var plugin = cljs.core.nth.call(null,vec__32759,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32765 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32749,chunk__32750,count__32751,i__32752,pl_32765,vec__32759,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32765.call(null,msg_hist);
});})(seq__32749,chunk__32750,count__32751,i__32752,pl_32765,vec__32759,k,plugin))
);
} else {
}


var G__32766 = seq__32749;
var G__32767 = chunk__32750;
var G__32768 = count__32751;
var G__32769 = (i__32752 + (1));
seq__32749 = G__32766;
chunk__32750 = G__32767;
count__32751 = G__32768;
i__32752 = G__32769;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32749);
if(temp__5735__auto__){
var seq__32749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32749__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32749__$1);
var G__32770 = cljs.core.chunk_rest.call(null,seq__32749__$1);
var G__32771 = c__4556__auto__;
var G__32772 = cljs.core.count.call(null,c__4556__auto__);
var G__32773 = (0);
seq__32749 = G__32770;
chunk__32750 = G__32771;
count__32751 = G__32772;
i__32752 = G__32773;
continue;
} else {
var vec__32762 = cljs.core.first.call(null,seq__32749__$1);
var k = cljs.core.nth.call(null,vec__32762,(0),null);
var plugin = cljs.core.nth.call(null,vec__32762,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32774 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32749,chunk__32750,count__32751,i__32752,pl_32774,vec__32762,k,plugin,seq__32749__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32774.call(null,msg_hist);
});})(seq__32749,chunk__32750,count__32751,i__32752,pl_32774,vec__32762,k,plugin,seq__32749__$1,temp__5735__auto__))
);
} else {
}


var G__32775 = cljs.core.next.call(null,seq__32749__$1);
var G__32776 = null;
var G__32777 = (0);
var G__32778 = (0);
seq__32749 = G__32775;
chunk__32750 = G__32776;
count__32751 = G__32777;
i__32752 = G__32778;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32780 = arguments.length;
switch (G__32780) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32781_32786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32782_32787 = null;
var count__32783_32788 = (0);
var i__32784_32789 = (0);
while(true){
if((i__32784_32789 < count__32783_32788)){
var msg_32790 = cljs.core._nth.call(null,chunk__32782_32787,i__32784_32789);
figwheel.client.socket.handle_incoming_message.call(null,msg_32790);


var G__32791 = seq__32781_32786;
var G__32792 = chunk__32782_32787;
var G__32793 = count__32783_32788;
var G__32794 = (i__32784_32789 + (1));
seq__32781_32786 = G__32791;
chunk__32782_32787 = G__32792;
count__32783_32788 = G__32793;
i__32784_32789 = G__32794;
continue;
} else {
var temp__5735__auto___32795 = cljs.core.seq.call(null,seq__32781_32786);
if(temp__5735__auto___32795){
var seq__32781_32796__$1 = temp__5735__auto___32795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32781_32796__$1)){
var c__4556__auto___32797 = cljs.core.chunk_first.call(null,seq__32781_32796__$1);
var G__32798 = cljs.core.chunk_rest.call(null,seq__32781_32796__$1);
var G__32799 = c__4556__auto___32797;
var G__32800 = cljs.core.count.call(null,c__4556__auto___32797);
var G__32801 = (0);
seq__32781_32786 = G__32798;
chunk__32782_32787 = G__32799;
count__32783_32788 = G__32800;
i__32784_32789 = G__32801;
continue;
} else {
var msg_32802 = cljs.core.first.call(null,seq__32781_32796__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32802);


var G__32803 = cljs.core.next.call(null,seq__32781_32796__$1);
var G__32804 = null;
var G__32805 = (0);
var G__32806 = (0);
seq__32781_32786 = G__32803;
chunk__32782_32787 = G__32804;
count__32783_32788 = G__32805;
i__32784_32789 = G__32806;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32811 = arguments.length;
var i__4737__auto___32812 = (0);
while(true){
if((i__4737__auto___32812 < len__4736__auto___32811)){
args__4742__auto__.push((arguments[i__4737__auto___32812]));

var G__32813 = (i__4737__auto___32812 + (1));
i__4737__auto___32812 = G__32813;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32808){
var map__32809 = p__32808;
var map__32809__$1 = (((((!((map__32809 == null))))?(((((map__32809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32809):map__32809);
var opts = map__32809__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32807){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32807));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32814){if((e32814 instanceof Error)){
var e = e32814;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32814;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32815){
var map__32816 = p__32815;
var map__32816__$1 = (((((!((map__32816 == null))))?(((((map__32816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32816):map__32816);
var msg_name = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1627930538266

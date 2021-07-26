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
}catch (e37964){if((e37964 instanceof Error)){
var e = e37964;
return "Error: Unable to stringify";
} else {
throw e37964;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37967 = arguments.length;
switch (G__37967) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37965_SHARP_){
if(typeof p1__37965_SHARP_ === 'string'){
return p1__37965_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37965_SHARP_);
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
var len__4736__auto___37970 = arguments.length;
var i__4737__auto___37971 = (0);
while(true){
if((i__4737__auto___37971 < len__4736__auto___37970)){
args__4742__auto__.push((arguments[i__4737__auto___37971]));

var G__37972 = (i__4737__auto___37971 + (1));
i__4737__auto___37971 = G__37972;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37969){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37969));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37974 = arguments.length;
var i__4737__auto___37975 = (0);
while(true){
if((i__4737__auto___37975 < len__4736__auto___37974)){
args__4742__auto__.push((arguments[i__4737__auto___37975]));

var G__37976 = (i__4737__auto___37975 + (1));
i__4737__auto___37975 = G__37976;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37973){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37973));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37977){
var map__37978 = p__37977;
var map__37978__$1 = (((((!((map__37978 == null))))?(((((map__37978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37978):map__37978);
var message = cljs.core.get.call(null,map__37978__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37978__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34845__auto___38057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_38029){
var state_val_38030 = (state_38029[(1)]);
if((state_val_38030 === (7))){
var inst_38025 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38031_38058 = state_38029__$1;
(statearr_38031_38058[(2)] = inst_38025);

(statearr_38031_38058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (1))){
var state_38029__$1 = state_38029;
var statearr_38032_38059 = state_38029__$1;
(statearr_38032_38059[(2)] = null);

(statearr_38032_38059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (4))){
var inst_37982 = (state_38029[(7)]);
var inst_37982__$1 = (state_38029[(2)]);
var state_38029__$1 = (function (){var statearr_38033 = state_38029;
(statearr_38033[(7)] = inst_37982__$1);

return statearr_38033;
})();
if(cljs.core.truth_(inst_37982__$1)){
var statearr_38034_38060 = state_38029__$1;
(statearr_38034_38060[(1)] = (5));

} else {
var statearr_38035_38061 = state_38029__$1;
(statearr_38035_38061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (15))){
var inst_37989 = (state_38029[(8)]);
var inst_38004 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37989);
var inst_38005 = cljs.core.first.call(null,inst_38004);
var inst_38006 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38005);
var inst_38007 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38006)].join('');
var inst_38008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38007);
var state_38029__$1 = state_38029;
var statearr_38036_38062 = state_38029__$1;
(statearr_38036_38062[(2)] = inst_38008);

(statearr_38036_38062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (13))){
var inst_38013 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38037_38063 = state_38029__$1;
(statearr_38037_38063[(2)] = inst_38013);

(statearr_38037_38063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (6))){
var state_38029__$1 = state_38029;
var statearr_38038_38064 = state_38029__$1;
(statearr_38038_38064[(2)] = null);

(statearr_38038_38064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (17))){
var inst_38011 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38039_38065 = state_38029__$1;
(statearr_38039_38065[(2)] = inst_38011);

(statearr_38039_38065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (3))){
var inst_38027 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38029__$1,inst_38027);
} else {
if((state_val_38030 === (12))){
var inst_37988 = (state_38029[(9)]);
var inst_38002 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37988,opts);
var state_38029__$1 = state_38029;
if(inst_38002){
var statearr_38040_38066 = state_38029__$1;
(statearr_38040_38066[(1)] = (15));

} else {
var statearr_38041_38067 = state_38029__$1;
(statearr_38041_38067[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (2))){
var state_38029__$1 = state_38029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38029__$1,(4),ch);
} else {
if((state_val_38030 === (11))){
var inst_37989 = (state_38029[(8)]);
var inst_37994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37995 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37989);
var inst_37996 = cljs.core.async.timeout.call(null,(1000));
var inst_37997 = [inst_37995,inst_37996];
var inst_37998 = (new cljs.core.PersistentVector(null,2,(5),inst_37994,inst_37997,null));
var state_38029__$1 = state_38029;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38029__$1,(14),inst_37998);
} else {
if((state_val_38030 === (9))){
var inst_37989 = (state_38029[(8)]);
var inst_38015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38016 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37989);
var inst_38017 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38016);
var inst_38018 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38017)].join('');
var inst_38019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38018);
var state_38029__$1 = (function (){var statearr_38042 = state_38029;
(statearr_38042[(10)] = inst_38015);

return statearr_38042;
})();
var statearr_38043_38068 = state_38029__$1;
(statearr_38043_38068[(2)] = inst_38019);

(statearr_38043_38068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (5))){
var inst_37982 = (state_38029[(7)]);
var inst_37984 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37985 = (new cljs.core.PersistentArrayMap(null,2,inst_37984,null));
var inst_37986 = (new cljs.core.PersistentHashSet(null,inst_37985,null));
var inst_37987 = figwheel.client.focus_msgs.call(null,inst_37986,inst_37982);
var inst_37988 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37987);
var inst_37989 = cljs.core.first.call(null,inst_37987);
var inst_37990 = figwheel.client.autoload_QMARK_.call(null);
var state_38029__$1 = (function (){var statearr_38044 = state_38029;
(statearr_38044[(9)] = inst_37988);

(statearr_38044[(8)] = inst_37989);

return statearr_38044;
})();
if(cljs.core.truth_(inst_37990)){
var statearr_38045_38069 = state_38029__$1;
(statearr_38045_38069[(1)] = (8));

} else {
var statearr_38046_38070 = state_38029__$1;
(statearr_38046_38070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (14))){
var inst_38000 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38047_38071 = state_38029__$1;
(statearr_38047_38071[(2)] = inst_38000);

(statearr_38047_38071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (16))){
var state_38029__$1 = state_38029;
var statearr_38048_38072 = state_38029__$1;
(statearr_38048_38072[(2)] = null);

(statearr_38048_38072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (10))){
var inst_38021 = (state_38029[(2)]);
var state_38029__$1 = (function (){var statearr_38049 = state_38029;
(statearr_38049[(11)] = inst_38021);

return statearr_38049;
})();
var statearr_38050_38073 = state_38029__$1;
(statearr_38050_38073[(2)] = null);

(statearr_38050_38073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (8))){
var inst_37988 = (state_38029[(9)]);
var inst_37992 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37988,opts);
var state_38029__$1 = state_38029;
if(cljs.core.truth_(inst_37992)){
var statearr_38051_38074 = state_38029__$1;
(statearr_38051_38074[(1)] = (11));

} else {
var statearr_38052_38075 = state_38029__$1;
(statearr_38052_38075[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__34751__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34751__auto____0 = (function (){
var statearr_38053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38053[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34751__auto__);

(statearr_38053[(1)] = (1));

return statearr_38053;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34751__auto____1 = (function (state_38029){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_38029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e38054){if((e38054 instanceof Object)){
var ex__34754__auto__ = e38054;
var statearr_38055_38076 = state_38029;
(statearr_38055_38076[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38077 = state_38029;
state_38029 = G__38077;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34751__auto__ = function(state_38029){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34751__auto____1.call(this,state_38029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34751__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34751__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_38056 = f__34846__auto__.call(null);
(statearr_38056[(6)] = c__34845__auto___38057);

return statearr_38056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38078_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38078_SHARP_));
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
var base_path_38084 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38080 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38081 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38082 = true;
var _STAR_print_fn_STAR__temp_val__38083 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38082);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38083);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38081);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38080);
}}catch (e38079){if((e38079 instanceof Error)){
var e = e38079;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38084], null));
} else {
var e = e38079;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38085){
var map__38086 = p__38085;
var map__38086__$1 = (((((!((map__38086 == null))))?(((((map__38086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38086):map__38086);
var opts = map__38086__$1;
var build_id = cljs.core.get.call(null,map__38086__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__38088){
var vec__38089 = p__38088;
var seq__38090 = cljs.core.seq.call(null,vec__38089);
var first__38091 = cljs.core.first.call(null,seq__38090);
var seq__38090__$1 = cljs.core.next.call(null,seq__38090);
var map__38092 = first__38091;
var map__38092__$1 = (((((!((map__38092 == null))))?(((((map__38092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38092):map__38092);
var msg = map__38092__$1;
var msg_name = cljs.core.get.call(null,map__38092__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38090__$1;
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
return (function (p__38094){
var vec__38095 = p__38094;
var seq__38096 = cljs.core.seq.call(null,vec__38095);
var first__38097 = cljs.core.first.call(null,seq__38096);
var seq__38096__$1 = cljs.core.next.call(null,seq__38096);
var map__38098 = first__38097;
var map__38098__$1 = (((((!((map__38098 == null))))?(((((map__38098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38098):map__38098);
var msg = map__38098__$1;
var msg_name = cljs.core.get.call(null,map__38098__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38096__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38100){
var map__38101 = p__38100;
var map__38101__$1 = (((((!((map__38101 == null))))?(((((map__38101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38101):map__38101);
var on_compile_warning = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__38103){
var vec__38104 = p__38103;
var seq__38105 = cljs.core.seq.call(null,vec__38104);
var first__38106 = cljs.core.first.call(null,seq__38105);
var seq__38105__$1 = cljs.core.next.call(null,seq__38105);
var map__38107 = first__38106;
var map__38107__$1 = (((((!((map__38107 == null))))?(((((map__38107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38107):map__38107);
var msg = map__38107__$1;
var msg_name = cljs.core.get.call(null,map__38107__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38105__$1;
var pred__38109 = cljs.core._EQ_;
var expr__38110 = msg_name;
if(cljs.core.truth_(pred__38109.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38110))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38109.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38110))){
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
var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_38199){
var state_val_38200 = (state_38199[(1)]);
if((state_val_38200 === (7))){
var inst_38119 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38119)){
var statearr_38201_38248 = state_38199__$1;
(statearr_38201_38248[(1)] = (8));

} else {
var statearr_38202_38249 = state_38199__$1;
(statearr_38202_38249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (20))){
var inst_38193 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38203_38250 = state_38199__$1;
(statearr_38203_38250[(2)] = inst_38193);

(statearr_38203_38250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (27))){
var inst_38189 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38204_38251 = state_38199__$1;
(statearr_38204_38251[(2)] = inst_38189);

(statearr_38204_38251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (1))){
var inst_38112 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38112)){
var statearr_38205_38252 = state_38199__$1;
(statearr_38205_38252[(1)] = (2));

} else {
var statearr_38206_38253 = state_38199__$1;
(statearr_38206_38253[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (24))){
var inst_38191 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38207_38254 = state_38199__$1;
(statearr_38207_38254[(2)] = inst_38191);

(statearr_38207_38254[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (4))){
var inst_38197 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38199__$1,inst_38197);
} else {
if((state_val_38200 === (15))){
var inst_38195 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38208_38255 = state_38199__$1;
(statearr_38208_38255[(2)] = inst_38195);

(statearr_38208_38255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (21))){
var inst_38148 = (state_38199[(2)]);
var inst_38149 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38150 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38149);
var state_38199__$1 = (function (){var statearr_38209 = state_38199;
(statearr_38209[(7)] = inst_38148);

return statearr_38209;
})();
var statearr_38210_38256 = state_38199__$1;
(statearr_38210_38256[(2)] = inst_38150);

(statearr_38210_38256[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (31))){
var inst_38178 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(inst_38178){
var statearr_38211_38257 = state_38199__$1;
(statearr_38211_38257[(1)] = (34));

} else {
var statearr_38212_38258 = state_38199__$1;
(statearr_38212_38258[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (32))){
var inst_38187 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38213_38259 = state_38199__$1;
(statearr_38213_38259[(2)] = inst_38187);

(statearr_38213_38259[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (33))){
var inst_38174 = (state_38199[(2)]);
var inst_38175 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38176 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38175);
var state_38199__$1 = (function (){var statearr_38214 = state_38199;
(statearr_38214[(8)] = inst_38174);

return statearr_38214;
})();
var statearr_38215_38260 = state_38199__$1;
(statearr_38215_38260[(2)] = inst_38176);

(statearr_38215_38260[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (13))){
var inst_38133 = figwheel.client.heads_up.clear.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(16),inst_38133);
} else {
if((state_val_38200 === (22))){
var inst_38154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38155 = figwheel.client.heads_up.append_warning_message.call(null,inst_38154);
var state_38199__$1 = state_38199;
var statearr_38216_38261 = state_38199__$1;
(statearr_38216_38261[(2)] = inst_38155);

(statearr_38216_38261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (36))){
var inst_38185 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38217_38262 = state_38199__$1;
(statearr_38217_38262[(2)] = inst_38185);

(statearr_38217_38262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (29))){
var inst_38165 = (state_38199[(2)]);
var inst_38166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38166);
var state_38199__$1 = (function (){var statearr_38218 = state_38199;
(statearr_38218[(9)] = inst_38165);

return statearr_38218;
})();
var statearr_38219_38263 = state_38199__$1;
(statearr_38219_38263[(2)] = inst_38167);

(statearr_38219_38263[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (6))){
var inst_38114 = (state_38199[(10)]);
var state_38199__$1 = state_38199;
var statearr_38220_38264 = state_38199__$1;
(statearr_38220_38264[(2)] = inst_38114);

(statearr_38220_38264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (28))){
var inst_38161 = (state_38199[(2)]);
var inst_38162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38163 = figwheel.client.heads_up.display_warning.call(null,inst_38162);
var state_38199__$1 = (function (){var statearr_38221 = state_38199;
(statearr_38221[(11)] = inst_38161);

return statearr_38221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(29),inst_38163);
} else {
if((state_val_38200 === (25))){
var inst_38159 = figwheel.client.heads_up.clear.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(28),inst_38159);
} else {
if((state_val_38200 === (34))){
var inst_38180 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(37),inst_38180);
} else {
if((state_val_38200 === (17))){
var inst_38139 = (state_38199[(2)]);
var inst_38140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38141 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38140);
var state_38199__$1 = (function (){var statearr_38222 = state_38199;
(statearr_38222[(12)] = inst_38139);

return statearr_38222;
})();
var statearr_38223_38265 = state_38199__$1;
(statearr_38223_38265[(2)] = inst_38141);

(statearr_38223_38265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (3))){
var inst_38131 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(inst_38131){
var statearr_38224_38266 = state_38199__$1;
(statearr_38224_38266[(1)] = (13));

} else {
var statearr_38225_38267 = state_38199__$1;
(statearr_38225_38267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (12))){
var inst_38127 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38226_38268 = state_38199__$1;
(statearr_38226_38268[(2)] = inst_38127);

(statearr_38226_38268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (2))){
var inst_38114 = (state_38199[(10)]);
var inst_38114__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38199__$1 = (function (){var statearr_38227 = state_38199;
(statearr_38227[(10)] = inst_38114__$1);

return statearr_38227;
})();
if(cljs.core.truth_(inst_38114__$1)){
var statearr_38228_38269 = state_38199__$1;
(statearr_38228_38269[(1)] = (5));

} else {
var statearr_38229_38270 = state_38199__$1;
(statearr_38229_38270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (23))){
var inst_38157 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(inst_38157){
var statearr_38230_38271 = state_38199__$1;
(statearr_38230_38271[(1)] = (25));

} else {
var statearr_38231_38272 = state_38199__$1;
(statearr_38231_38272[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (35))){
var state_38199__$1 = state_38199;
var statearr_38232_38273 = state_38199__$1;
(statearr_38232_38273[(2)] = null);

(statearr_38232_38273[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (19))){
var inst_38152 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(inst_38152){
var statearr_38233_38274 = state_38199__$1;
(statearr_38233_38274[(1)] = (22));

} else {
var statearr_38234_38275 = state_38199__$1;
(statearr_38234_38275[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (11))){
var inst_38123 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38235_38276 = state_38199__$1;
(statearr_38235_38276[(2)] = inst_38123);

(statearr_38235_38276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (9))){
var inst_38125 = figwheel.client.heads_up.clear.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(12),inst_38125);
} else {
if((state_val_38200 === (5))){
var inst_38116 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38199__$1 = state_38199;
var statearr_38236_38277 = state_38199__$1;
(statearr_38236_38277[(2)] = inst_38116);

(statearr_38236_38277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (14))){
var inst_38143 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(inst_38143){
var statearr_38237_38278 = state_38199__$1;
(statearr_38237_38278[(1)] = (18));

} else {
var statearr_38238_38279 = state_38199__$1;
(statearr_38238_38279[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (26))){
var inst_38169 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(inst_38169){
var statearr_38239_38280 = state_38199__$1;
(statearr_38239_38280[(1)] = (30));

} else {
var statearr_38240_38281 = state_38199__$1;
(statearr_38240_38281[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (16))){
var inst_38135 = (state_38199[(2)]);
var inst_38136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38137 = figwheel.client.heads_up.display_exception.call(null,inst_38136);
var state_38199__$1 = (function (){var statearr_38241 = state_38199;
(statearr_38241[(13)] = inst_38135);

return statearr_38241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(17),inst_38137);
} else {
if((state_val_38200 === (30))){
var inst_38171 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38172 = figwheel.client.heads_up.display_warning.call(null,inst_38171);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(33),inst_38172);
} else {
if((state_val_38200 === (10))){
var inst_38129 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38242_38282 = state_38199__$1;
(statearr_38242_38282[(2)] = inst_38129);

(statearr_38242_38282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (18))){
var inst_38145 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38146 = figwheel.client.heads_up.display_exception.call(null,inst_38145);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(21),inst_38146);
} else {
if((state_val_38200 === (37))){
var inst_38182 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38243_38283 = state_38199__$1;
(statearr_38243_38283[(2)] = inst_38182);

(statearr_38243_38283[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (8))){
var inst_38121 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(11),inst_38121);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto____0 = (function (){
var statearr_38244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38244[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto__);

(statearr_38244[(1)] = (1));

return statearr_38244;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto____1 = (function (state_38199){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_38199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e38245){if((e38245 instanceof Object)){
var ex__34754__auto__ = e38245;
var statearr_38246_38284 = state_38199;
(statearr_38246_38284[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38285 = state_38199;
state_38199 = G__38285;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto__ = function(state_38199){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto____1.call(this,state_38199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_38247 = f__34846__auto__.call(null);
(statearr_38247[(6)] = c__34845__auto__);

return statearr_38247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34845__auto___38314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_38300){
var state_val_38301 = (state_38300[(1)]);
if((state_val_38301 === (1))){
var state_38300__$1 = state_38300;
var statearr_38302_38315 = state_38300__$1;
(statearr_38302_38315[(2)] = null);

(statearr_38302_38315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (2))){
var state_38300__$1 = state_38300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38300__$1,(4),ch);
} else {
if((state_val_38301 === (3))){
var inst_38298 = (state_38300[(2)]);
var state_38300__$1 = state_38300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38300__$1,inst_38298);
} else {
if((state_val_38301 === (4))){
var inst_38288 = (state_38300[(7)]);
var inst_38288__$1 = (state_38300[(2)]);
var state_38300__$1 = (function (){var statearr_38303 = state_38300;
(statearr_38303[(7)] = inst_38288__$1);

return statearr_38303;
})();
if(cljs.core.truth_(inst_38288__$1)){
var statearr_38304_38316 = state_38300__$1;
(statearr_38304_38316[(1)] = (5));

} else {
var statearr_38305_38317 = state_38300__$1;
(statearr_38305_38317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (5))){
var inst_38288 = (state_38300[(7)]);
var inst_38290 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38288);
var state_38300__$1 = state_38300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38300__$1,(8),inst_38290);
} else {
if((state_val_38301 === (6))){
var state_38300__$1 = state_38300;
var statearr_38306_38318 = state_38300__$1;
(statearr_38306_38318[(2)] = null);

(statearr_38306_38318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (7))){
var inst_38296 = (state_38300[(2)]);
var state_38300__$1 = state_38300;
var statearr_38307_38319 = state_38300__$1;
(statearr_38307_38319[(2)] = inst_38296);

(statearr_38307_38319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (8))){
var inst_38292 = (state_38300[(2)]);
var state_38300__$1 = (function (){var statearr_38308 = state_38300;
(statearr_38308[(8)] = inst_38292);

return statearr_38308;
})();
var statearr_38309_38320 = state_38300__$1;
(statearr_38309_38320[(2)] = null);

(statearr_38309_38320[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__34751__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34751__auto____0 = (function (){
var statearr_38310 = [null,null,null,null,null,null,null,null,null];
(statearr_38310[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34751__auto__);

(statearr_38310[(1)] = (1));

return statearr_38310;
});
var figwheel$client$heads_up_plugin_$_state_machine__34751__auto____1 = (function (state_38300){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_38300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e38311){if((e38311 instanceof Object)){
var ex__34754__auto__ = e38311;
var statearr_38312_38321 = state_38300;
(statearr_38312_38321[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38322 = state_38300;
state_38300 = G__38322;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34751__auto__ = function(state_38300){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34751__auto____1.call(this,state_38300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34751__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34751__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_38313 = f__34846__auto__.call(null);
(statearr_38313[(6)] = c__34845__auto___38314);

return statearr_38313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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
var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_38328){
var state_val_38329 = (state_38328[(1)]);
if((state_val_38329 === (1))){
var inst_38323 = cljs.core.async.timeout.call(null,(3000));
var state_38328__$1 = state_38328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38328__$1,(2),inst_38323);
} else {
if((state_val_38329 === (2))){
var inst_38325 = (state_38328[(2)]);
var inst_38326 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38328__$1 = (function (){var statearr_38330 = state_38328;
(statearr_38330[(7)] = inst_38325);

return statearr_38330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38328__$1,inst_38326);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34751__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34751__auto____0 = (function (){
var statearr_38331 = [null,null,null,null,null,null,null,null];
(statearr_38331[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34751__auto__);

(statearr_38331[(1)] = (1));

return statearr_38331;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34751__auto____1 = (function (state_38328){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_38328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e38332){if((e38332 instanceof Object)){
var ex__34754__auto__ = e38332;
var statearr_38333_38335 = state_38328;
(statearr_38333_38335[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38336 = state_38328;
state_38328 = G__38336;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34751__auto__ = function(state_38328){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34751__auto____1.call(this,state_38328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34751__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34751__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_38334 = f__34846__auto__.call(null);
(statearr_38334[(6)] = c__34845__auto__);

return statearr_38334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
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
var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_38343){
var state_val_38344 = (state_38343[(1)]);
if((state_val_38344 === (1))){
var inst_38337 = cljs.core.async.timeout.call(null,(2000));
var state_38343__$1 = state_38343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38343__$1,(2),inst_38337);
} else {
if((state_val_38344 === (2))){
var inst_38339 = (state_38343[(2)]);
var inst_38340 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38341 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38340);
var state_38343__$1 = (function (){var statearr_38345 = state_38343;
(statearr_38345[(7)] = inst_38339);

return statearr_38345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38343__$1,inst_38341);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto____0 = (function (){
var statearr_38346 = [null,null,null,null,null,null,null,null];
(statearr_38346[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto__);

(statearr_38346[(1)] = (1));

return statearr_38346;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto____1 = (function (state_38343){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_38343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e38347){if((e38347 instanceof Object)){
var ex__34754__auto__ = e38347;
var statearr_38348_38350 = state_38343;
(statearr_38348_38350[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38351 = state_38343;
state_38343 = G__38351;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto__ = function(state_38343){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto____1.call(this,state_38343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_38349 = f__34846__auto__.call(null);
(statearr_38349[(6)] = c__34845__auto__);

return statearr_38349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38352){
var map__38353 = p__38352;
var map__38353__$1 = (((((!((map__38353 == null))))?(((((map__38353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38353):map__38353);
var file = cljs.core.get.call(null,map__38353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38353__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38353__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38355 = "";
var G__38355__$1 = (cljs.core.truth_(file)?[G__38355,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38355);
var G__38355__$2 = (cljs.core.truth_(line)?[G__38355__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38355__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__38355__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38355__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38356){
var map__38357 = p__38356;
var map__38357__$1 = (((((!((map__38357 == null))))?(((((map__38357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38357):map__38357);
var ed = map__38357__$1;
var exception_data = cljs.core.get.call(null,map__38357__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38357__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_38360 = (function (){var G__38359 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38359)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__38359;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_38360);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38361){
var map__38362 = p__38361;
var map__38362__$1 = (((((!((map__38362 == null))))?(((((map__38362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38362):map__38362);
var w = map__38362__$1;
var message = cljs.core.get.call(null,map__38362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38364 = cljs.core.seq.call(null,plugins);
var chunk__38365 = null;
var count__38366 = (0);
var i__38367 = (0);
while(true){
if((i__38367 < count__38366)){
var vec__38374 = cljs.core._nth.call(null,chunk__38365,i__38367);
var k = cljs.core.nth.call(null,vec__38374,(0),null);
var plugin = cljs.core.nth.call(null,vec__38374,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38380 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38364,chunk__38365,count__38366,i__38367,pl_38380,vec__38374,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38380.call(null,msg_hist);
});})(seq__38364,chunk__38365,count__38366,i__38367,pl_38380,vec__38374,k,plugin))
);
} else {
}


var G__38381 = seq__38364;
var G__38382 = chunk__38365;
var G__38383 = count__38366;
var G__38384 = (i__38367 + (1));
seq__38364 = G__38381;
chunk__38365 = G__38382;
count__38366 = G__38383;
i__38367 = G__38384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__38364);
if(temp__5735__auto__){
var seq__38364__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38364__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__38364__$1);
var G__38385 = cljs.core.chunk_rest.call(null,seq__38364__$1);
var G__38386 = c__4556__auto__;
var G__38387 = cljs.core.count.call(null,c__4556__auto__);
var G__38388 = (0);
seq__38364 = G__38385;
chunk__38365 = G__38386;
count__38366 = G__38387;
i__38367 = G__38388;
continue;
} else {
var vec__38377 = cljs.core.first.call(null,seq__38364__$1);
var k = cljs.core.nth.call(null,vec__38377,(0),null);
var plugin = cljs.core.nth.call(null,vec__38377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38389 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38364,chunk__38365,count__38366,i__38367,pl_38389,vec__38377,k,plugin,seq__38364__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38389.call(null,msg_hist);
});})(seq__38364,chunk__38365,count__38366,i__38367,pl_38389,vec__38377,k,plugin,seq__38364__$1,temp__5735__auto__))
);
} else {
}


var G__38390 = cljs.core.next.call(null,seq__38364__$1);
var G__38391 = null;
var G__38392 = (0);
var G__38393 = (0);
seq__38364 = G__38390;
chunk__38365 = G__38391;
count__38366 = G__38392;
i__38367 = G__38393;
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
var G__38395 = arguments.length;
switch (G__38395) {
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

var seq__38396_38401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38397_38402 = null;
var count__38398_38403 = (0);
var i__38399_38404 = (0);
while(true){
if((i__38399_38404 < count__38398_38403)){
var msg_38405 = cljs.core._nth.call(null,chunk__38397_38402,i__38399_38404);
figwheel.client.socket.handle_incoming_message.call(null,msg_38405);


var G__38406 = seq__38396_38401;
var G__38407 = chunk__38397_38402;
var G__38408 = count__38398_38403;
var G__38409 = (i__38399_38404 + (1));
seq__38396_38401 = G__38406;
chunk__38397_38402 = G__38407;
count__38398_38403 = G__38408;
i__38399_38404 = G__38409;
continue;
} else {
var temp__5735__auto___38410 = cljs.core.seq.call(null,seq__38396_38401);
if(temp__5735__auto___38410){
var seq__38396_38411__$1 = temp__5735__auto___38410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38396_38411__$1)){
var c__4556__auto___38412 = cljs.core.chunk_first.call(null,seq__38396_38411__$1);
var G__38413 = cljs.core.chunk_rest.call(null,seq__38396_38411__$1);
var G__38414 = c__4556__auto___38412;
var G__38415 = cljs.core.count.call(null,c__4556__auto___38412);
var G__38416 = (0);
seq__38396_38401 = G__38413;
chunk__38397_38402 = G__38414;
count__38398_38403 = G__38415;
i__38399_38404 = G__38416;
continue;
} else {
var msg_38417 = cljs.core.first.call(null,seq__38396_38411__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38417);


var G__38418 = cljs.core.next.call(null,seq__38396_38411__$1);
var G__38419 = null;
var G__38420 = (0);
var G__38421 = (0);
seq__38396_38401 = G__38418;
chunk__38397_38402 = G__38419;
count__38398_38403 = G__38420;
i__38399_38404 = G__38421;
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
var len__4736__auto___38426 = arguments.length;
var i__4737__auto___38427 = (0);
while(true){
if((i__4737__auto___38427 < len__4736__auto___38426)){
args__4742__auto__.push((arguments[i__4737__auto___38427]));

var G__38428 = (i__4737__auto___38427 + (1));
i__4737__auto___38427 = G__38428;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38423){
var map__38424 = p__38423;
var map__38424__$1 = (((((!((map__38424 == null))))?(((((map__38424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38424):map__38424);
var opts = map__38424__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38422){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38422));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38429){if((e38429 instanceof Error)){
var e = e38429;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38429;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__38430){
var map__38431 = p__38430;
var map__38431__$1 = (((((!((map__38431 == null))))?(((((map__38431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38431):map__38431);
var msg_name = cljs.core.get.call(null,map__38431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1626961187742

// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958 = (function (val,meta26959){
this.val = val;
this.meta26959 = meta26959;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26960,meta26959__$1){
var self__ = this;
var _26960__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958(self__.val,meta26959__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26960){
var self__ = this;
var _26960__$1 = this;
return self__.meta26959;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta26959","meta26959",1098950499,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26958");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26958");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26958.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels26958 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels26958(val__$1,meta26959){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958(val__$1,meta26959));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26958(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_26961 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_26961.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_26973 = self__.puts.pop();
if((putter_26973 == null)){
} else {
var put_handler_26974 = putter_26973.handler;
var val_26975 = putter_26973.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_26974)){
var put_cb_26976 = cljs.core.async.impl.protocols.commit.call(null,put_handler_26974);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_26976,put_handler_26974,val_26975,putter_26973,this$__$1){
return (function (){
return put_cb_26976.call(null,true);
});})(put_cb_26976,put_handler_26974,val_26975,putter_26973,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__4115__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__26977 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__26977;
continue;
} else {
var G__26978 = takers;
takers = G__26978;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__26962_26979 = cljs.core.seq.call(null,take_cbs);
var chunk__26963_26980 = null;
var count__26964_26981 = (0);
var i__26965_26982 = (0);
while(true){
if((i__26965_26982 < count__26964_26981)){
var f_26983 = cljs.core._nth.call(null,chunk__26963_26980,i__26965_26982);
cljs.core.async.impl.dispatch.run.call(null,f_26983);


var G__26984 = seq__26962_26979;
var G__26985 = chunk__26963_26980;
var G__26986 = count__26964_26981;
var G__26987 = (i__26965_26982 + (1));
seq__26962_26979 = G__26984;
chunk__26963_26980 = G__26985;
count__26964_26981 = G__26986;
i__26965_26982 = G__26987;
continue;
} else {
var temp__5735__auto___26988 = cljs.core.seq.call(null,seq__26962_26979);
if(temp__5735__auto___26988){
var seq__26962_26989__$1 = temp__5735__auto___26988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26962_26989__$1)){
var c__4556__auto___26990 = cljs.core.chunk_first.call(null,seq__26962_26989__$1);
var G__26991 = cljs.core.chunk_rest.call(null,seq__26962_26989__$1);
var G__26992 = c__4556__auto___26990;
var G__26993 = cljs.core.count.call(null,c__4556__auto___26990);
var G__26994 = (0);
seq__26962_26979 = G__26991;
chunk__26963_26980 = G__26992;
count__26964_26981 = G__26993;
i__26965_26982 = G__26994;
continue;
} else {
var f_26995 = cljs.core.first.call(null,seq__26962_26989__$1);
cljs.core.async.impl.dispatch.run.call(null,f_26995);


var G__26996 = cljs.core.next.call(null,seq__26962_26989__$1);
var G__26997 = null;
var G__26998 = (0);
var G__26999 = (0);
seq__26962_26979 = G__26996;
chunk__26963_26980 = G__26997;
count__26964_26981 = G__26998;
i__26965_26982 = G__26999;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5733__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__26966 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler))?cljs.core.async.impl.protocols.commit.call(null,put_handler):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
var G__27000 = cbs__$1;
cbs = G__27000;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__26966,(0),null);
var cbs = cljs.core.nth.call(null,vec__26966,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__26969_27001 = cljs.core.seq.call(null,cbs);
var chunk__26970_27002 = null;
var count__26971_27003 = (0);
var i__26972_27004 = (0);
while(true){
if((i__26972_27004 < count__26971_27003)){
var cb_27005 = cljs.core._nth.call(null,chunk__26970_27002,i__26972_27004);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__26969_27001,chunk__26970_27002,count__26971_27003,i__26972_27004,cb_27005,val,vec__26966,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return cb_27005.call(null,true);
});})(seq__26969_27001,chunk__26970_27002,count__26971_27003,i__26972_27004,cb_27005,val,vec__26966,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__27006 = seq__26969_27001;
var G__27007 = chunk__26970_27002;
var G__27008 = count__26971_27003;
var G__27009 = (i__26972_27004 + (1));
seq__26969_27001 = G__27006;
chunk__26970_27002 = G__27007;
count__26971_27003 = G__27008;
i__26972_27004 = G__27009;
continue;
} else {
var temp__5735__auto___27010 = cljs.core.seq.call(null,seq__26969_27001);
if(temp__5735__auto___27010){
var seq__26969_27011__$1 = temp__5735__auto___27010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26969_27011__$1)){
var c__4556__auto___27012 = cljs.core.chunk_first.call(null,seq__26969_27011__$1);
var G__27013 = cljs.core.chunk_rest.call(null,seq__26969_27011__$1);
var G__27014 = c__4556__auto___27012;
var G__27015 = cljs.core.count.call(null,c__4556__auto___27012);
var G__27016 = (0);
seq__26969_27001 = G__27013;
chunk__26970_27002 = G__27014;
count__26971_27003 = G__27015;
i__26972_27004 = G__27016;
continue;
} else {
var cb_27017 = cljs.core.first.call(null,seq__26969_27011__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__26969_27001,chunk__26970_27002,count__26971_27003,i__26972_27004,cb_27017,seq__26969_27011__$1,temp__5735__auto___27010,val,vec__26966,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return cb_27017.call(null,true);
});})(seq__26969_27001,chunk__26970_27002,count__26971_27003,i__26972_27004,cb_27017,seq__26969_27011__$1,temp__5735__auto___27010,val,vec__26966,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__27018 = cljs.core.next.call(null,seq__26969_27011__$1);
var G__27019 = null;
var G__27020 = (0);
var G__27021 = (0);
seq__26969_27001 = G__27018;
chunk__26970_27002 = G__27019;
count__26971_27003 = G__27020;
i__26972_27004 = G__27021;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__4115__auto__;
}
})())){
var has_val = (function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4115__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (self__.puts.length === (0));
} else {
return and__4115__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_27022 = self__.takes.pop();
if((taker_27022 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_27022)){
var take_cb_27023 = cljs.core.async.impl.protocols.commit.call(null,taker_27022);
var val_27024 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4115__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_27023,val_27024,taker_27022,this$__$1){
return (function (){
return take_cb_27023.call(null,val_27024);
});})(take_cb_27023,val_27024,taker_27022,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4126__auto__ = exh;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__27026 = arguments.length;
switch (G__27026) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__27030 = null;
var G__27030__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e27027){var t = e27027;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__27030__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e27028){var t = e27028;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__27030 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__27030__1.call(this,buf__$1);
case 2:
return G__27030__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27030.cljs$core$IFn$_invoke$arity$1 = G__27030__1;
G__27030.cljs$core$IFn$_invoke$arity$2 = G__27030__2;
return G__27030;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map?rel=1627930534916

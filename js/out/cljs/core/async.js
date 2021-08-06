// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28428 = arguments.length;
switch (G__28428) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28429 = (function (f,blockable,meta28430){
this.f = f;
this.blockable = blockable;
this.meta28430 = meta28430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28431,meta28430__$1){
var self__ = this;
var _28431__$1 = this;
return (new cljs.core.async.t_cljs$core$async28429(self__.f,self__.blockable,meta28430__$1));
}));

(cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28431){
var self__ = this;
var _28431__$1 = this;
return self__.meta28430;
}));

(cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28430","meta28430",-1657478422,null)], null);
}));

(cljs.core.async.t_cljs$core$async28429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28429");

(cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28429.
 */
cljs.core.async.__GT_t_cljs$core$async28429 = (function cljs$core$async$__GT_t_cljs$core$async28429(f__$1,blockable__$1,meta28430){
return (new cljs.core.async.t_cljs$core$async28429(f__$1,blockable__$1,meta28430));
});

}

return (new cljs.core.async.t_cljs$core$async28429(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28435 = arguments.length;
switch (G__28435) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28438 = arguments.length;
switch (G__28438) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28441 = arguments.length;
switch (G__28441) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28443 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28443);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28443);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28445 = arguments.length;
switch (G__28445) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___28447 = n;
var x_28448 = (0);
while(true){
if((x_28448 < n__4613__auto___28447)){
(a[x_28448] = (0));

var G__28449 = (x_28448 + (1));
x_28448 = G__28449;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28450 = (i + (1));
i = G__28450;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28451 = (function (flag,meta28452){
this.flag = flag;
this.meta28452 = meta28452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28453,meta28452__$1){
var self__ = this;
var _28453__$1 = this;
return (new cljs.core.async.t_cljs$core$async28451(self__.flag,meta28452__$1));
}));

(cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28453){
var self__ = this;
var _28453__$1 = this;
return self__.meta28452;
}));

(cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28452","meta28452",1010342762,null)], null);
}));

(cljs.core.async.t_cljs$core$async28451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28451");

(cljs.core.async.t_cljs$core$async28451.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28451.
 */
cljs.core.async.__GT_t_cljs$core$async28451 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28451(flag__$1,meta28452){
return (new cljs.core.async.t_cljs$core$async28451(flag__$1,meta28452));
});

}

return (new cljs.core.async.t_cljs$core$async28451(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28454 = (function (flag,cb,meta28455){
this.flag = flag;
this.cb = cb;
this.meta28455 = meta28455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28456,meta28455__$1){
var self__ = this;
var _28456__$1 = this;
return (new cljs.core.async.t_cljs$core$async28454(self__.flag,self__.cb,meta28455__$1));
}));

(cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28456){
var self__ = this;
var _28456__$1 = this;
return self__.meta28455;
}));

(cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28455","meta28455",-709389197,null)], null);
}));

(cljs.core.async.t_cljs$core$async28454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28454");

(cljs.core.async.t_cljs$core$async28454.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28454.
 */
cljs.core.async.__GT_t_cljs$core$async28454 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28454(flag__$1,cb__$1,meta28455){
return (new cljs.core.async.t_cljs$core$async28454(flag__$1,cb__$1,meta28455));
});

}

return (new cljs.core.async.t_cljs$core$async28454(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28457_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28457_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28458_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28458_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28459 = (i + (1));
i = G__28459;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28465 = arguments.length;
var i__4737__auto___28466 = (0);
while(true){
if((i__4737__auto___28466 < len__4736__auto___28465)){
args__4742__auto__.push((arguments[i__4737__auto___28466]));

var G__28467 = (i__4737__auto___28466 + (1));
i__4737__auto___28466 = G__28467;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28462){
var map__28463 = p__28462;
var map__28463__$1 = (((((!((map__28463 == null))))?(((((map__28463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28463):map__28463);
var opts = map__28463__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28460){
var G__28461 = cljs.core.first.call(null,seq28460);
var seq28460__$1 = cljs.core.next.call(null,seq28460);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28461,seq28460__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28469 = arguments.length;
switch (G__28469) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28368__auto___28515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28493){
var state_val_28494 = (state_28493[(1)]);
if((state_val_28494 === (7))){
var inst_28489 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28495_28516 = state_28493__$1;
(statearr_28495_28516[(2)] = inst_28489);

(statearr_28495_28516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (1))){
var state_28493__$1 = state_28493;
var statearr_28496_28517 = state_28493__$1;
(statearr_28496_28517[(2)] = null);

(statearr_28496_28517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (4))){
var inst_28472 = (state_28493[(7)]);
var inst_28472__$1 = (state_28493[(2)]);
var inst_28473 = (inst_28472__$1 == null);
var state_28493__$1 = (function (){var statearr_28497 = state_28493;
(statearr_28497[(7)] = inst_28472__$1);

return statearr_28497;
})();
if(cljs.core.truth_(inst_28473)){
var statearr_28498_28518 = state_28493__$1;
(statearr_28498_28518[(1)] = (5));

} else {
var statearr_28499_28519 = state_28493__$1;
(statearr_28499_28519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (13))){
var state_28493__$1 = state_28493;
var statearr_28500_28520 = state_28493__$1;
(statearr_28500_28520[(2)] = null);

(statearr_28500_28520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (6))){
var inst_28472 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28493__$1,(11),to,inst_28472);
} else {
if((state_val_28494 === (3))){
var inst_28491 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28493__$1,inst_28491);
} else {
if((state_val_28494 === (12))){
var state_28493__$1 = state_28493;
var statearr_28501_28521 = state_28493__$1;
(statearr_28501_28521[(2)] = null);

(statearr_28501_28521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (2))){
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(4),from);
} else {
if((state_val_28494 === (11))){
var inst_28482 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28482)){
var statearr_28502_28522 = state_28493__$1;
(statearr_28502_28522[(1)] = (12));

} else {
var statearr_28503_28523 = state_28493__$1;
(statearr_28503_28523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (9))){
var state_28493__$1 = state_28493;
var statearr_28504_28524 = state_28493__$1;
(statearr_28504_28524[(2)] = null);

(statearr_28504_28524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (5))){
var state_28493__$1 = state_28493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28505_28525 = state_28493__$1;
(statearr_28505_28525[(1)] = (8));

} else {
var statearr_28506_28526 = state_28493__$1;
(statearr_28506_28526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (14))){
var inst_28487 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28507_28527 = state_28493__$1;
(statearr_28507_28527[(2)] = inst_28487);

(statearr_28507_28527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (10))){
var inst_28479 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28508_28528 = state_28493__$1;
(statearr_28508_28528[(2)] = inst_28479);

(statearr_28508_28528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (8))){
var inst_28476 = cljs.core.async.close_BANG_.call(null,to);
var state_28493__$1 = state_28493;
var statearr_28509_28529 = state_28493__$1;
(statearr_28509_28529[(2)] = inst_28476);

(statearr_28509_28529[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_28510 = [null,null,null,null,null,null,null,null];
(statearr_28510[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_28510[(1)] = (1));

return statearr_28510;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_28493){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28511){if((e28511 instanceof Object)){
var ex__28277__auto__ = e28511;
var statearr_28512_28530 = state_28493;
(statearr_28512_28530[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28531 = state_28493;
state_28493 = G__28531;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_28493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_28493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28513 = f__28369__auto__.call(null);
(statearr_28513[(6)] = c__28368__auto___28515);

return statearr_28513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__28532){
var vec__28533 = p__28532;
var v = cljs.core.nth.call(null,vec__28533,(0),null);
var p = cljs.core.nth.call(null,vec__28533,(1),null);
var job = vec__28533;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28368__auto___28704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28540){
var state_val_28541 = (state_28540[(1)]);
if((state_val_28541 === (1))){
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28540__$1,(2),res,v);
} else {
if((state_val_28541 === (2))){
var inst_28537 = (state_28540[(2)]);
var inst_28538 = cljs.core.async.close_BANG_.call(null,res);
var state_28540__$1 = (function (){var statearr_28542 = state_28540;
(statearr_28542[(7)] = inst_28537);

return statearr_28542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28540__$1,inst_28538);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0 = (function (){
var statearr_28543 = [null,null,null,null,null,null,null,null];
(statearr_28543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__);

(statearr_28543[(1)] = (1));

return statearr_28543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1 = (function (state_28540){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28544){if((e28544 instanceof Object)){
var ex__28277__auto__ = e28544;
var statearr_28545_28705 = state_28540;
(statearr_28545_28705[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28706 = state_28540;
state_28540 = G__28706;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = function(state_28540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1.call(this,state_28540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28546 = f__28369__auto__.call(null);
(statearr_28546[(6)] = c__28368__auto___28704);

return statearr_28546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28547){
var vec__28548 = p__28547;
var v = cljs.core.nth.call(null,vec__28548,(0),null);
var p = cljs.core.nth.call(null,vec__28548,(1),null);
var job = vec__28548;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___28707 = n;
var __28708 = (0);
while(true){
if((__28708 < n__4613__auto___28707)){
var G__28551_28709 = type;
var G__28551_28710__$1 = (((G__28551_28709 instanceof cljs.core.Keyword))?G__28551_28709.fqn:null);
switch (G__28551_28710__$1) {
case "compute":
var c__28368__auto___28712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28708,c__28368__auto___28712,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async){
return (function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = ((function (__28708,c__28368__auto___28712,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async){
return (function (state_28564){
var state_val_28565 = (state_28564[(1)]);
if((state_val_28565 === (1))){
var state_28564__$1 = state_28564;
var statearr_28566_28713 = state_28564__$1;
(statearr_28566_28713[(2)] = null);

(statearr_28566_28713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (2))){
var state_28564__$1 = state_28564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28564__$1,(4),jobs);
} else {
if((state_val_28565 === (3))){
var inst_28562 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28564__$1,inst_28562);
} else {
if((state_val_28565 === (4))){
var inst_28554 = (state_28564[(2)]);
var inst_28555 = process.call(null,inst_28554);
var state_28564__$1 = state_28564;
if(cljs.core.truth_(inst_28555)){
var statearr_28567_28714 = state_28564__$1;
(statearr_28567_28714[(1)] = (5));

} else {
var statearr_28568_28715 = state_28564__$1;
(statearr_28568_28715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (5))){
var state_28564__$1 = state_28564;
var statearr_28569_28716 = state_28564__$1;
(statearr_28569_28716[(2)] = null);

(statearr_28569_28716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (6))){
var state_28564__$1 = state_28564;
var statearr_28570_28717 = state_28564__$1;
(statearr_28570_28717[(2)] = null);

(statearr_28570_28717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (7))){
var inst_28560 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
var statearr_28571_28718 = state_28564__$1;
(statearr_28571_28718[(2)] = inst_28560);

(statearr_28571_28718[(1)] = (3));


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
});})(__28708,c__28368__auto___28712,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async))
;
return ((function (__28708,switch__28273__auto__,c__28368__auto___28712,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0 = (function (){
var statearr_28572 = [null,null,null,null,null,null,null];
(statearr_28572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__);

(statearr_28572[(1)] = (1));

return statearr_28572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1 = (function (state_28564){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28573){if((e28573 instanceof Object)){
var ex__28277__auto__ = e28573;
var statearr_28574_28719 = state_28564;
(statearr_28574_28719[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28720 = state_28564;
state_28564 = G__28720;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = function(state_28564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1.call(this,state_28564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__;
})()
;})(__28708,switch__28273__auto__,c__28368__auto___28712,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async))
})();
var state__28370__auto__ = (function (){var statearr_28575 = f__28369__auto__.call(null);
(statearr_28575[(6)] = c__28368__auto___28712);

return statearr_28575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
});})(__28708,c__28368__auto___28712,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async))
);


break;
case "async":
var c__28368__auto___28721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28708,c__28368__auto___28721,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async){
return (function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = ((function (__28708,c__28368__auto___28721,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async){
return (function (state_28588){
var state_val_28589 = (state_28588[(1)]);
if((state_val_28589 === (1))){
var state_28588__$1 = state_28588;
var statearr_28590_28722 = state_28588__$1;
(statearr_28590_28722[(2)] = null);

(statearr_28590_28722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28589 === (2))){
var state_28588__$1 = state_28588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28588__$1,(4),jobs);
} else {
if((state_val_28589 === (3))){
var inst_28586 = (state_28588[(2)]);
var state_28588__$1 = state_28588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28588__$1,inst_28586);
} else {
if((state_val_28589 === (4))){
var inst_28578 = (state_28588[(2)]);
var inst_28579 = async.call(null,inst_28578);
var state_28588__$1 = state_28588;
if(cljs.core.truth_(inst_28579)){
var statearr_28591_28723 = state_28588__$1;
(statearr_28591_28723[(1)] = (5));

} else {
var statearr_28592_28724 = state_28588__$1;
(statearr_28592_28724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28589 === (5))){
var state_28588__$1 = state_28588;
var statearr_28593_28725 = state_28588__$1;
(statearr_28593_28725[(2)] = null);

(statearr_28593_28725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28589 === (6))){
var state_28588__$1 = state_28588;
var statearr_28594_28726 = state_28588__$1;
(statearr_28594_28726[(2)] = null);

(statearr_28594_28726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28589 === (7))){
var inst_28584 = (state_28588[(2)]);
var state_28588__$1 = state_28588;
var statearr_28595_28727 = state_28588__$1;
(statearr_28595_28727[(2)] = inst_28584);

(statearr_28595_28727[(1)] = (3));


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
});})(__28708,c__28368__auto___28721,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async))
;
return ((function (__28708,switch__28273__auto__,c__28368__auto___28721,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null];
(statearr_28596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1 = (function (state_28588){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object)){
var ex__28277__auto__ = e28597;
var statearr_28598_28728 = state_28588;
(statearr_28598_28728[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28729 = state_28588;
state_28588 = G__28729;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = function(state_28588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1.call(this,state_28588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__;
})()
;})(__28708,switch__28273__auto__,c__28368__auto___28721,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async))
})();
var state__28370__auto__ = (function (){var statearr_28599 = f__28369__auto__.call(null);
(statearr_28599[(6)] = c__28368__auto___28721);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
});})(__28708,c__28368__auto___28721,G__28551_28709,G__28551_28710__$1,n__4613__auto___28707,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28551_28710__$1)].join('')));

}

var G__28730 = (__28708 + (1));
__28708 = G__28730;
continue;
} else {
}
break;
}

var c__28368__auto___28731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28621){
var state_val_28622 = (state_28621[(1)]);
if((state_val_28622 === (7))){
var inst_28617 = (state_28621[(2)]);
var state_28621__$1 = state_28621;
var statearr_28623_28732 = state_28621__$1;
(statearr_28623_28732[(2)] = inst_28617);

(statearr_28623_28732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (1))){
var state_28621__$1 = state_28621;
var statearr_28624_28733 = state_28621__$1;
(statearr_28624_28733[(2)] = null);

(statearr_28624_28733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (4))){
var inst_28602 = (state_28621[(7)]);
var inst_28602__$1 = (state_28621[(2)]);
var inst_28603 = (inst_28602__$1 == null);
var state_28621__$1 = (function (){var statearr_28625 = state_28621;
(statearr_28625[(7)] = inst_28602__$1);

return statearr_28625;
})();
if(cljs.core.truth_(inst_28603)){
var statearr_28626_28734 = state_28621__$1;
(statearr_28626_28734[(1)] = (5));

} else {
var statearr_28627_28735 = state_28621__$1;
(statearr_28627_28735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (6))){
var inst_28607 = (state_28621[(8)]);
var inst_28602 = (state_28621[(7)]);
var inst_28607__$1 = cljs.core.async.chan.call(null,(1));
var inst_28608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28609 = [inst_28602,inst_28607__$1];
var inst_28610 = (new cljs.core.PersistentVector(null,2,(5),inst_28608,inst_28609,null));
var state_28621__$1 = (function (){var statearr_28628 = state_28621;
(statearr_28628[(8)] = inst_28607__$1);

return statearr_28628;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28621__$1,(8),jobs,inst_28610);
} else {
if((state_val_28622 === (3))){
var inst_28619 = (state_28621[(2)]);
var state_28621__$1 = state_28621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28621__$1,inst_28619);
} else {
if((state_val_28622 === (2))){
var state_28621__$1 = state_28621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28621__$1,(4),from);
} else {
if((state_val_28622 === (9))){
var inst_28614 = (state_28621[(2)]);
var state_28621__$1 = (function (){var statearr_28629 = state_28621;
(statearr_28629[(9)] = inst_28614);

return statearr_28629;
})();
var statearr_28630_28736 = state_28621__$1;
(statearr_28630_28736[(2)] = null);

(statearr_28630_28736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (5))){
var inst_28605 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28621__$1 = state_28621;
var statearr_28631_28737 = state_28621__$1;
(statearr_28631_28737[(2)] = inst_28605);

(statearr_28631_28737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28622 === (8))){
var inst_28607 = (state_28621[(8)]);
var inst_28612 = (state_28621[(2)]);
var state_28621__$1 = (function (){var statearr_28632 = state_28621;
(statearr_28632[(10)] = inst_28612);

return statearr_28632;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28621__$1,(9),results,inst_28607);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0 = (function (){
var statearr_28633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__);

(statearr_28633[(1)] = (1));

return statearr_28633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1 = (function (state_28621){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28634){if((e28634 instanceof Object)){
var ex__28277__auto__ = e28634;
var statearr_28635_28738 = state_28621;
(statearr_28635_28738[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28739 = state_28621;
state_28621 = G__28739;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = function(state_28621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1.call(this,state_28621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28636 = f__28369__auto__.call(null);
(statearr_28636[(6)] = c__28368__auto___28731);

return statearr_28636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28674){
var state_val_28675 = (state_28674[(1)]);
if((state_val_28675 === (7))){
var inst_28670 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28676_28740 = state_28674__$1;
(statearr_28676_28740[(2)] = inst_28670);

(statearr_28676_28740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (20))){
var state_28674__$1 = state_28674;
var statearr_28677_28741 = state_28674__$1;
(statearr_28677_28741[(2)] = null);

(statearr_28677_28741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (1))){
var state_28674__$1 = state_28674;
var statearr_28678_28742 = state_28674__$1;
(statearr_28678_28742[(2)] = null);

(statearr_28678_28742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (4))){
var inst_28639 = (state_28674[(7)]);
var inst_28639__$1 = (state_28674[(2)]);
var inst_28640 = (inst_28639__$1 == null);
var state_28674__$1 = (function (){var statearr_28679 = state_28674;
(statearr_28679[(7)] = inst_28639__$1);

return statearr_28679;
})();
if(cljs.core.truth_(inst_28640)){
var statearr_28680_28743 = state_28674__$1;
(statearr_28680_28743[(1)] = (5));

} else {
var statearr_28681_28744 = state_28674__$1;
(statearr_28681_28744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (15))){
var inst_28652 = (state_28674[(8)]);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28674__$1,(18),to,inst_28652);
} else {
if((state_val_28675 === (21))){
var inst_28665 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28682_28745 = state_28674__$1;
(statearr_28682_28745[(2)] = inst_28665);

(statearr_28682_28745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (13))){
var inst_28667 = (state_28674[(2)]);
var state_28674__$1 = (function (){var statearr_28683 = state_28674;
(statearr_28683[(9)] = inst_28667);

return statearr_28683;
})();
var statearr_28684_28746 = state_28674__$1;
(statearr_28684_28746[(2)] = null);

(statearr_28684_28746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (6))){
var inst_28639 = (state_28674[(7)]);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28674__$1,(11),inst_28639);
} else {
if((state_val_28675 === (17))){
var inst_28660 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
if(cljs.core.truth_(inst_28660)){
var statearr_28685_28747 = state_28674__$1;
(statearr_28685_28747[(1)] = (19));

} else {
var statearr_28686_28748 = state_28674__$1;
(statearr_28686_28748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (3))){
var inst_28672 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28674__$1,inst_28672);
} else {
if((state_val_28675 === (12))){
var inst_28649 = (state_28674[(10)]);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28674__$1,(14),inst_28649);
} else {
if((state_val_28675 === (2))){
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28674__$1,(4),results);
} else {
if((state_val_28675 === (19))){
var state_28674__$1 = state_28674;
var statearr_28687_28749 = state_28674__$1;
(statearr_28687_28749[(2)] = null);

(statearr_28687_28749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (11))){
var inst_28649 = (state_28674[(2)]);
var state_28674__$1 = (function (){var statearr_28688 = state_28674;
(statearr_28688[(10)] = inst_28649);

return statearr_28688;
})();
var statearr_28689_28750 = state_28674__$1;
(statearr_28689_28750[(2)] = null);

(statearr_28689_28750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (9))){
var state_28674__$1 = state_28674;
var statearr_28690_28751 = state_28674__$1;
(statearr_28690_28751[(2)] = null);

(statearr_28690_28751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (5))){
var state_28674__$1 = state_28674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28691_28752 = state_28674__$1;
(statearr_28691_28752[(1)] = (8));

} else {
var statearr_28692_28753 = state_28674__$1;
(statearr_28692_28753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (14))){
var inst_28652 = (state_28674[(8)]);
var inst_28652__$1 = (state_28674[(2)]);
var inst_28653 = (inst_28652__$1 == null);
var inst_28654 = cljs.core.not.call(null,inst_28653);
var state_28674__$1 = (function (){var statearr_28693 = state_28674;
(statearr_28693[(8)] = inst_28652__$1);

return statearr_28693;
})();
if(inst_28654){
var statearr_28694_28754 = state_28674__$1;
(statearr_28694_28754[(1)] = (15));

} else {
var statearr_28695_28755 = state_28674__$1;
(statearr_28695_28755[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (16))){
var state_28674__$1 = state_28674;
var statearr_28696_28756 = state_28674__$1;
(statearr_28696_28756[(2)] = false);

(statearr_28696_28756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (10))){
var inst_28646 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28697_28757 = state_28674__$1;
(statearr_28697_28757[(2)] = inst_28646);

(statearr_28697_28757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (18))){
var inst_28657 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28698_28758 = state_28674__$1;
(statearr_28698_28758[(2)] = inst_28657);

(statearr_28698_28758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (8))){
var inst_28643 = cljs.core.async.close_BANG_.call(null,to);
var state_28674__$1 = state_28674;
var statearr_28699_28759 = state_28674__$1;
(statearr_28699_28759[(2)] = inst_28643);

(statearr_28699_28759[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0 = (function (){
var statearr_28700 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__);

(statearr_28700[(1)] = (1));

return statearr_28700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1 = (function (state_28674){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28701){if((e28701 instanceof Object)){
var ex__28277__auto__ = e28701;
var statearr_28702_28760 = state_28674;
(statearr_28702_28760[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28761 = state_28674;
state_28674 = G__28761;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__ = function(state_28674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1.call(this,state_28674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28703 = f__28369__auto__.call(null);
(statearr_28703[(6)] = c__28368__auto__);

return statearr_28703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28763 = arguments.length;
switch (G__28763) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28766 = arguments.length;
switch (G__28766) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28769 = arguments.length;
switch (G__28769) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28368__auto___28818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28795){
var state_val_28796 = (state_28795[(1)]);
if((state_val_28796 === (7))){
var inst_28791 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28797_28819 = state_28795__$1;
(statearr_28797_28819[(2)] = inst_28791);

(statearr_28797_28819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (1))){
var state_28795__$1 = state_28795;
var statearr_28798_28820 = state_28795__$1;
(statearr_28798_28820[(2)] = null);

(statearr_28798_28820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (4))){
var inst_28772 = (state_28795[(7)]);
var inst_28772__$1 = (state_28795[(2)]);
var inst_28773 = (inst_28772__$1 == null);
var state_28795__$1 = (function (){var statearr_28799 = state_28795;
(statearr_28799[(7)] = inst_28772__$1);

return statearr_28799;
})();
if(cljs.core.truth_(inst_28773)){
var statearr_28800_28821 = state_28795__$1;
(statearr_28800_28821[(1)] = (5));

} else {
var statearr_28801_28822 = state_28795__$1;
(statearr_28801_28822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (13))){
var state_28795__$1 = state_28795;
var statearr_28802_28823 = state_28795__$1;
(statearr_28802_28823[(2)] = null);

(statearr_28802_28823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (6))){
var inst_28772 = (state_28795[(7)]);
var inst_28778 = p.call(null,inst_28772);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28778)){
var statearr_28803_28824 = state_28795__$1;
(statearr_28803_28824[(1)] = (9));

} else {
var statearr_28804_28825 = state_28795__$1;
(statearr_28804_28825[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (3))){
var inst_28793 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28795__$1,inst_28793);
} else {
if((state_val_28796 === (12))){
var state_28795__$1 = state_28795;
var statearr_28805_28826 = state_28795__$1;
(statearr_28805_28826[(2)] = null);

(statearr_28805_28826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (2))){
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(4),ch);
} else {
if((state_val_28796 === (11))){
var inst_28772 = (state_28795[(7)]);
var inst_28782 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28795__$1,(8),inst_28782,inst_28772);
} else {
if((state_val_28796 === (9))){
var state_28795__$1 = state_28795;
var statearr_28806_28827 = state_28795__$1;
(statearr_28806_28827[(2)] = tc);

(statearr_28806_28827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (5))){
var inst_28775 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28776 = cljs.core.async.close_BANG_.call(null,fc);
var state_28795__$1 = (function (){var statearr_28807 = state_28795;
(statearr_28807[(8)] = inst_28775);

return statearr_28807;
})();
var statearr_28808_28828 = state_28795__$1;
(statearr_28808_28828[(2)] = inst_28776);

(statearr_28808_28828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (14))){
var inst_28789 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28809_28829 = state_28795__$1;
(statearr_28809_28829[(2)] = inst_28789);

(statearr_28809_28829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (10))){
var state_28795__$1 = state_28795;
var statearr_28810_28830 = state_28795__$1;
(statearr_28810_28830[(2)] = fc);

(statearr_28810_28830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (8))){
var inst_28784 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28784)){
var statearr_28811_28831 = state_28795__$1;
(statearr_28811_28831[(1)] = (12));

} else {
var statearr_28812_28832 = state_28795__$1;
(statearr_28812_28832[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_28813 = [null,null,null,null,null,null,null,null,null];
(statearr_28813[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_28813[(1)] = (1));

return statearr_28813;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_28795){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28814){if((e28814 instanceof Object)){
var ex__28277__auto__ = e28814;
var statearr_28815_28833 = state_28795;
(statearr_28815_28833[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28834 = state_28795;
state_28795 = G__28834;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_28795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_28795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28816 = f__28369__auto__.call(null);
(statearr_28816[(6)] = c__28368__auto___28818);

return statearr_28816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28855){
var state_val_28856 = (state_28855[(1)]);
if((state_val_28856 === (7))){
var inst_28851 = (state_28855[(2)]);
var state_28855__$1 = state_28855;
var statearr_28857_28875 = state_28855__$1;
(statearr_28857_28875[(2)] = inst_28851);

(statearr_28857_28875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28856 === (1))){
var inst_28835 = init;
var state_28855__$1 = (function (){var statearr_28858 = state_28855;
(statearr_28858[(7)] = inst_28835);

return statearr_28858;
})();
var statearr_28859_28876 = state_28855__$1;
(statearr_28859_28876[(2)] = null);

(statearr_28859_28876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28856 === (4))){
var inst_28838 = (state_28855[(8)]);
var inst_28838__$1 = (state_28855[(2)]);
var inst_28839 = (inst_28838__$1 == null);
var state_28855__$1 = (function (){var statearr_28860 = state_28855;
(statearr_28860[(8)] = inst_28838__$1);

return statearr_28860;
})();
if(cljs.core.truth_(inst_28839)){
var statearr_28861_28877 = state_28855__$1;
(statearr_28861_28877[(1)] = (5));

} else {
var statearr_28862_28878 = state_28855__$1;
(statearr_28862_28878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28856 === (6))){
var inst_28842 = (state_28855[(9)]);
var inst_28838 = (state_28855[(8)]);
var inst_28835 = (state_28855[(7)]);
var inst_28842__$1 = f.call(null,inst_28835,inst_28838);
var inst_28843 = cljs.core.reduced_QMARK_.call(null,inst_28842__$1);
var state_28855__$1 = (function (){var statearr_28863 = state_28855;
(statearr_28863[(9)] = inst_28842__$1);

return statearr_28863;
})();
if(inst_28843){
var statearr_28864_28879 = state_28855__$1;
(statearr_28864_28879[(1)] = (8));

} else {
var statearr_28865_28880 = state_28855__$1;
(statearr_28865_28880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28856 === (3))){
var inst_28853 = (state_28855[(2)]);
var state_28855__$1 = state_28855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28855__$1,inst_28853);
} else {
if((state_val_28856 === (2))){
var state_28855__$1 = state_28855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28855__$1,(4),ch);
} else {
if((state_val_28856 === (9))){
var inst_28842 = (state_28855[(9)]);
var inst_28835 = inst_28842;
var state_28855__$1 = (function (){var statearr_28866 = state_28855;
(statearr_28866[(7)] = inst_28835);

return statearr_28866;
})();
var statearr_28867_28881 = state_28855__$1;
(statearr_28867_28881[(2)] = null);

(statearr_28867_28881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28856 === (5))){
var inst_28835 = (state_28855[(7)]);
var state_28855__$1 = state_28855;
var statearr_28868_28882 = state_28855__$1;
(statearr_28868_28882[(2)] = inst_28835);

(statearr_28868_28882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28856 === (10))){
var inst_28849 = (state_28855[(2)]);
var state_28855__$1 = state_28855;
var statearr_28869_28883 = state_28855__$1;
(statearr_28869_28883[(2)] = inst_28849);

(statearr_28869_28883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28856 === (8))){
var inst_28842 = (state_28855[(9)]);
var inst_28845 = cljs.core.deref.call(null,inst_28842);
var state_28855__$1 = state_28855;
var statearr_28870_28884 = state_28855__$1;
(statearr_28870_28884[(2)] = inst_28845);

(statearr_28870_28884[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28274__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28274__auto____0 = (function (){
var statearr_28871 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28871[(0)] = cljs$core$async$reduce_$_state_machine__28274__auto__);

(statearr_28871[(1)] = (1));

return statearr_28871;
});
var cljs$core$async$reduce_$_state_machine__28274__auto____1 = (function (state_28855){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28872){if((e28872 instanceof Object)){
var ex__28277__auto__ = e28872;
var statearr_28873_28885 = state_28855;
(statearr_28873_28885[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28886 = state_28855;
state_28855 = G__28886;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28274__auto__ = function(state_28855){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28274__auto____1.call(this,state_28855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28274__auto____0;
cljs$core$async$reduce_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28274__auto____1;
return cljs$core$async$reduce_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28874 = f__28369__auto__.call(null);
(statearr_28874[(6)] = c__28368__auto__);

return statearr_28874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28892){
var state_val_28893 = (state_28892[(1)]);
if((state_val_28893 === (1))){
var inst_28887 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28892__$1 = state_28892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28892__$1,(2),inst_28887);
} else {
if((state_val_28893 === (2))){
var inst_28889 = (state_28892[(2)]);
var inst_28890 = f__$1.call(null,inst_28889);
var state_28892__$1 = state_28892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28892__$1,inst_28890);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28274__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28274__auto____0 = (function (){
var statearr_28894 = [null,null,null,null,null,null,null];
(statearr_28894[(0)] = cljs$core$async$transduce_$_state_machine__28274__auto__);

(statearr_28894[(1)] = (1));

return statearr_28894;
});
var cljs$core$async$transduce_$_state_machine__28274__auto____1 = (function (state_28892){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28895){if((e28895 instanceof Object)){
var ex__28277__auto__ = e28895;
var statearr_28896_28898 = state_28892;
(statearr_28896_28898[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28899 = state_28892;
state_28892 = G__28899;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28274__auto__ = function(state_28892){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28274__auto____1.call(this,state_28892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28274__auto____0;
cljs$core$async$transduce_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28274__auto____1;
return cljs$core$async$transduce_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28897 = f__28369__auto__.call(null);
(statearr_28897[(6)] = c__28368__auto__);

return statearr_28897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28901 = arguments.length;
switch (G__28901) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_28926){
var state_val_28927 = (state_28926[(1)]);
if((state_val_28927 === (7))){
var inst_28908 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28928_28949 = state_28926__$1;
(statearr_28928_28949[(2)] = inst_28908);

(statearr_28928_28949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (1))){
var inst_28902 = cljs.core.seq.call(null,coll);
var inst_28903 = inst_28902;
var state_28926__$1 = (function (){var statearr_28929 = state_28926;
(statearr_28929[(7)] = inst_28903);

return statearr_28929;
})();
var statearr_28930_28950 = state_28926__$1;
(statearr_28930_28950[(2)] = null);

(statearr_28930_28950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (4))){
var inst_28903 = (state_28926[(7)]);
var inst_28906 = cljs.core.first.call(null,inst_28903);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28926__$1,(7),ch,inst_28906);
} else {
if((state_val_28927 === (13))){
var inst_28920 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28931_28951 = state_28926__$1;
(statearr_28931_28951[(2)] = inst_28920);

(statearr_28931_28951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (6))){
var inst_28911 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
if(cljs.core.truth_(inst_28911)){
var statearr_28932_28952 = state_28926__$1;
(statearr_28932_28952[(1)] = (8));

} else {
var statearr_28933_28953 = state_28926__$1;
(statearr_28933_28953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (3))){
var inst_28924 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28926__$1,inst_28924);
} else {
if((state_val_28927 === (12))){
var state_28926__$1 = state_28926;
var statearr_28934_28954 = state_28926__$1;
(statearr_28934_28954[(2)] = null);

(statearr_28934_28954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (2))){
var inst_28903 = (state_28926[(7)]);
var state_28926__$1 = state_28926;
if(cljs.core.truth_(inst_28903)){
var statearr_28935_28955 = state_28926__$1;
(statearr_28935_28955[(1)] = (4));

} else {
var statearr_28936_28956 = state_28926__$1;
(statearr_28936_28956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (11))){
var inst_28917 = cljs.core.async.close_BANG_.call(null,ch);
var state_28926__$1 = state_28926;
var statearr_28937_28957 = state_28926__$1;
(statearr_28937_28957[(2)] = inst_28917);

(statearr_28937_28957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (9))){
var state_28926__$1 = state_28926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28938_28958 = state_28926__$1;
(statearr_28938_28958[(1)] = (11));

} else {
var statearr_28939_28959 = state_28926__$1;
(statearr_28939_28959[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (5))){
var inst_28903 = (state_28926[(7)]);
var state_28926__$1 = state_28926;
var statearr_28940_28960 = state_28926__$1;
(statearr_28940_28960[(2)] = inst_28903);

(statearr_28940_28960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (10))){
var inst_28922 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28941_28961 = state_28926__$1;
(statearr_28941_28961[(2)] = inst_28922);

(statearr_28941_28961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (8))){
var inst_28903 = (state_28926[(7)]);
var inst_28913 = cljs.core.next.call(null,inst_28903);
var inst_28903__$1 = inst_28913;
var state_28926__$1 = (function (){var statearr_28942 = state_28926;
(statearr_28942[(7)] = inst_28903__$1);

return statearr_28942;
})();
var statearr_28943_28962 = state_28926__$1;
(statearr_28943_28962[(2)] = null);

(statearr_28943_28962[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_28944 = [null,null,null,null,null,null,null,null];
(statearr_28944[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_28944[(1)] = (1));

return statearr_28944;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_28926){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_28926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e28945){if((e28945 instanceof Object)){
var ex__28277__auto__ = e28945;
var statearr_28946_28963 = state_28926;
(statearr_28946_28963[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28964 = state_28926;
state_28926 = G__28964;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_28926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_28926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_28947 = f__28369__auto__.call(null);
(statearr_28947[(6)] = c__28368__auto__);

return statearr_28947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_28965 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28965.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28966 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28966.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28967 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28967.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28968 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28968.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28969 = (function (ch,cs,meta28970){
this.ch = ch;
this.cs = cs;
this.meta28970 = meta28970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28971,meta28970__$1){
var self__ = this;
var _28971__$1 = this;
return (new cljs.core.async.t_cljs$core$async28969(self__.ch,self__.cs,meta28970__$1));
}));

(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28971){
var self__ = this;
var _28971__$1 = this;
return self__.meta28970;
}));

(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28969.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28970","meta28970",685502366,null)], null);
}));

(cljs.core.async.t_cljs$core$async28969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28969");

(cljs.core.async.t_cljs$core$async28969.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28969.
 */
cljs.core.async.__GT_t_cljs$core$async28969 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28969(ch__$1,cs__$1,meta28970){
return (new cljs.core.async.t_cljs$core$async28969(ch__$1,cs__$1,meta28970));
});

}

return (new cljs.core.async.t_cljs$core$async28969(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__28368__auto___29191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29106){
var state_val_29107 = (state_29106[(1)]);
if((state_val_29107 === (7))){
var inst_29102 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29108_29192 = state_29106__$1;
(statearr_29108_29192[(2)] = inst_29102);

(statearr_29108_29192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (20))){
var inst_29005 = (state_29106[(7)]);
var inst_29017 = cljs.core.first.call(null,inst_29005);
var inst_29018 = cljs.core.nth.call(null,inst_29017,(0),null);
var inst_29019 = cljs.core.nth.call(null,inst_29017,(1),null);
var state_29106__$1 = (function (){var statearr_29109 = state_29106;
(statearr_29109[(8)] = inst_29018);

return statearr_29109;
})();
if(cljs.core.truth_(inst_29019)){
var statearr_29110_29193 = state_29106__$1;
(statearr_29110_29193[(1)] = (22));

} else {
var statearr_29111_29194 = state_29106__$1;
(statearr_29111_29194[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (27))){
var inst_29049 = (state_29106[(9)]);
var inst_28974 = (state_29106[(10)]);
var inst_29047 = (state_29106[(11)]);
var inst_29054 = (state_29106[(12)]);
var inst_29054__$1 = cljs.core._nth.call(null,inst_29047,inst_29049);
var inst_29055 = cljs.core.async.put_BANG_.call(null,inst_29054__$1,inst_28974,done);
var state_29106__$1 = (function (){var statearr_29112 = state_29106;
(statearr_29112[(12)] = inst_29054__$1);

return statearr_29112;
})();
if(cljs.core.truth_(inst_29055)){
var statearr_29113_29195 = state_29106__$1;
(statearr_29113_29195[(1)] = (30));

} else {
var statearr_29114_29196 = state_29106__$1;
(statearr_29114_29196[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (1))){
var state_29106__$1 = state_29106;
var statearr_29115_29197 = state_29106__$1;
(statearr_29115_29197[(2)] = null);

(statearr_29115_29197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (24))){
var inst_29005 = (state_29106[(7)]);
var inst_29024 = (state_29106[(2)]);
var inst_29025 = cljs.core.next.call(null,inst_29005);
var inst_28983 = inst_29025;
var inst_28984 = null;
var inst_28985 = (0);
var inst_28986 = (0);
var state_29106__$1 = (function (){var statearr_29116 = state_29106;
(statearr_29116[(13)] = inst_28983);

(statearr_29116[(14)] = inst_29024);

(statearr_29116[(15)] = inst_28986);

(statearr_29116[(16)] = inst_28984);

(statearr_29116[(17)] = inst_28985);

return statearr_29116;
})();
var statearr_29117_29198 = state_29106__$1;
(statearr_29117_29198[(2)] = null);

(statearr_29117_29198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (39))){
var state_29106__$1 = state_29106;
var statearr_29121_29199 = state_29106__$1;
(statearr_29121_29199[(2)] = null);

(statearr_29121_29199[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (4))){
var inst_28974 = (state_29106[(10)]);
var inst_28974__$1 = (state_29106[(2)]);
var inst_28975 = (inst_28974__$1 == null);
var state_29106__$1 = (function (){var statearr_29122 = state_29106;
(statearr_29122[(10)] = inst_28974__$1);

return statearr_29122;
})();
if(cljs.core.truth_(inst_28975)){
var statearr_29123_29200 = state_29106__$1;
(statearr_29123_29200[(1)] = (5));

} else {
var statearr_29124_29201 = state_29106__$1;
(statearr_29124_29201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (15))){
var inst_28983 = (state_29106[(13)]);
var inst_28986 = (state_29106[(15)]);
var inst_28984 = (state_29106[(16)]);
var inst_28985 = (state_29106[(17)]);
var inst_29001 = (state_29106[(2)]);
var inst_29002 = (inst_28986 + (1));
var tmp29118 = inst_28983;
var tmp29119 = inst_28984;
var tmp29120 = inst_28985;
var inst_28983__$1 = tmp29118;
var inst_28984__$1 = tmp29119;
var inst_28985__$1 = tmp29120;
var inst_28986__$1 = inst_29002;
var state_29106__$1 = (function (){var statearr_29125 = state_29106;
(statearr_29125[(13)] = inst_28983__$1);

(statearr_29125[(18)] = inst_29001);

(statearr_29125[(15)] = inst_28986__$1);

(statearr_29125[(16)] = inst_28984__$1);

(statearr_29125[(17)] = inst_28985__$1);

return statearr_29125;
})();
var statearr_29126_29202 = state_29106__$1;
(statearr_29126_29202[(2)] = null);

(statearr_29126_29202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (21))){
var inst_29028 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29130_29203 = state_29106__$1;
(statearr_29130_29203[(2)] = inst_29028);

(statearr_29130_29203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (31))){
var inst_29054 = (state_29106[(12)]);
var inst_29058 = done.call(null,null);
var inst_29059 = cljs.core.async.untap_STAR_.call(null,m,inst_29054);
var state_29106__$1 = (function (){var statearr_29131 = state_29106;
(statearr_29131[(19)] = inst_29058);

return statearr_29131;
})();
var statearr_29132_29204 = state_29106__$1;
(statearr_29132_29204[(2)] = inst_29059);

(statearr_29132_29204[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (32))){
var inst_29046 = (state_29106[(20)]);
var inst_29049 = (state_29106[(9)]);
var inst_29047 = (state_29106[(11)]);
var inst_29048 = (state_29106[(21)]);
var inst_29061 = (state_29106[(2)]);
var inst_29062 = (inst_29049 + (1));
var tmp29127 = inst_29046;
var tmp29128 = inst_29047;
var tmp29129 = inst_29048;
var inst_29046__$1 = tmp29127;
var inst_29047__$1 = tmp29128;
var inst_29048__$1 = tmp29129;
var inst_29049__$1 = inst_29062;
var state_29106__$1 = (function (){var statearr_29133 = state_29106;
(statearr_29133[(20)] = inst_29046__$1);

(statearr_29133[(9)] = inst_29049__$1);

(statearr_29133[(11)] = inst_29047__$1);

(statearr_29133[(22)] = inst_29061);

(statearr_29133[(21)] = inst_29048__$1);

return statearr_29133;
})();
var statearr_29134_29205 = state_29106__$1;
(statearr_29134_29205[(2)] = null);

(statearr_29134_29205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (40))){
var inst_29074 = (state_29106[(23)]);
var inst_29078 = done.call(null,null);
var inst_29079 = cljs.core.async.untap_STAR_.call(null,m,inst_29074);
var state_29106__$1 = (function (){var statearr_29135 = state_29106;
(statearr_29135[(24)] = inst_29078);

return statearr_29135;
})();
var statearr_29136_29206 = state_29106__$1;
(statearr_29136_29206[(2)] = inst_29079);

(statearr_29136_29206[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (33))){
var inst_29065 = (state_29106[(25)]);
var inst_29067 = cljs.core.chunked_seq_QMARK_.call(null,inst_29065);
var state_29106__$1 = state_29106;
if(inst_29067){
var statearr_29137_29207 = state_29106__$1;
(statearr_29137_29207[(1)] = (36));

} else {
var statearr_29138_29208 = state_29106__$1;
(statearr_29138_29208[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (13))){
var inst_28995 = (state_29106[(26)]);
var inst_28998 = cljs.core.async.close_BANG_.call(null,inst_28995);
var state_29106__$1 = state_29106;
var statearr_29139_29209 = state_29106__$1;
(statearr_29139_29209[(2)] = inst_28998);

(statearr_29139_29209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (22))){
var inst_29018 = (state_29106[(8)]);
var inst_29021 = cljs.core.async.close_BANG_.call(null,inst_29018);
var state_29106__$1 = state_29106;
var statearr_29140_29210 = state_29106__$1;
(statearr_29140_29210[(2)] = inst_29021);

(statearr_29140_29210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (36))){
var inst_29065 = (state_29106[(25)]);
var inst_29069 = cljs.core.chunk_first.call(null,inst_29065);
var inst_29070 = cljs.core.chunk_rest.call(null,inst_29065);
var inst_29071 = cljs.core.count.call(null,inst_29069);
var inst_29046 = inst_29070;
var inst_29047 = inst_29069;
var inst_29048 = inst_29071;
var inst_29049 = (0);
var state_29106__$1 = (function (){var statearr_29141 = state_29106;
(statearr_29141[(20)] = inst_29046);

(statearr_29141[(9)] = inst_29049);

(statearr_29141[(11)] = inst_29047);

(statearr_29141[(21)] = inst_29048);

return statearr_29141;
})();
var statearr_29142_29211 = state_29106__$1;
(statearr_29142_29211[(2)] = null);

(statearr_29142_29211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (41))){
var inst_29065 = (state_29106[(25)]);
var inst_29081 = (state_29106[(2)]);
var inst_29082 = cljs.core.next.call(null,inst_29065);
var inst_29046 = inst_29082;
var inst_29047 = null;
var inst_29048 = (0);
var inst_29049 = (0);
var state_29106__$1 = (function (){var statearr_29143 = state_29106;
(statearr_29143[(20)] = inst_29046);

(statearr_29143[(9)] = inst_29049);

(statearr_29143[(27)] = inst_29081);

(statearr_29143[(11)] = inst_29047);

(statearr_29143[(21)] = inst_29048);

return statearr_29143;
})();
var statearr_29144_29212 = state_29106__$1;
(statearr_29144_29212[(2)] = null);

(statearr_29144_29212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (43))){
var state_29106__$1 = state_29106;
var statearr_29145_29213 = state_29106__$1;
(statearr_29145_29213[(2)] = null);

(statearr_29145_29213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (29))){
var inst_29090 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29146_29214 = state_29106__$1;
(statearr_29146_29214[(2)] = inst_29090);

(statearr_29146_29214[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (44))){
var inst_29099 = (state_29106[(2)]);
var state_29106__$1 = (function (){var statearr_29147 = state_29106;
(statearr_29147[(28)] = inst_29099);

return statearr_29147;
})();
var statearr_29148_29215 = state_29106__$1;
(statearr_29148_29215[(2)] = null);

(statearr_29148_29215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (6))){
var inst_29038 = (state_29106[(29)]);
var inst_29037 = cljs.core.deref.call(null,cs);
var inst_29038__$1 = cljs.core.keys.call(null,inst_29037);
var inst_29039 = cljs.core.count.call(null,inst_29038__$1);
var inst_29040 = cljs.core.reset_BANG_.call(null,dctr,inst_29039);
var inst_29045 = cljs.core.seq.call(null,inst_29038__$1);
var inst_29046 = inst_29045;
var inst_29047 = null;
var inst_29048 = (0);
var inst_29049 = (0);
var state_29106__$1 = (function (){var statearr_29149 = state_29106;
(statearr_29149[(20)] = inst_29046);

(statearr_29149[(9)] = inst_29049);

(statearr_29149[(30)] = inst_29040);

(statearr_29149[(11)] = inst_29047);

(statearr_29149[(21)] = inst_29048);

(statearr_29149[(29)] = inst_29038__$1);

return statearr_29149;
})();
var statearr_29150_29216 = state_29106__$1;
(statearr_29150_29216[(2)] = null);

(statearr_29150_29216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (28))){
var inst_29046 = (state_29106[(20)]);
var inst_29065 = (state_29106[(25)]);
var inst_29065__$1 = cljs.core.seq.call(null,inst_29046);
var state_29106__$1 = (function (){var statearr_29151 = state_29106;
(statearr_29151[(25)] = inst_29065__$1);

return statearr_29151;
})();
if(inst_29065__$1){
var statearr_29152_29217 = state_29106__$1;
(statearr_29152_29217[(1)] = (33));

} else {
var statearr_29153_29218 = state_29106__$1;
(statearr_29153_29218[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (25))){
var inst_29049 = (state_29106[(9)]);
var inst_29048 = (state_29106[(21)]);
var inst_29051 = (inst_29049 < inst_29048);
var inst_29052 = inst_29051;
var state_29106__$1 = state_29106;
if(cljs.core.truth_(inst_29052)){
var statearr_29154_29219 = state_29106__$1;
(statearr_29154_29219[(1)] = (27));

} else {
var statearr_29155_29220 = state_29106__$1;
(statearr_29155_29220[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (34))){
var state_29106__$1 = state_29106;
var statearr_29156_29221 = state_29106__$1;
(statearr_29156_29221[(2)] = null);

(statearr_29156_29221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (17))){
var state_29106__$1 = state_29106;
var statearr_29157_29222 = state_29106__$1;
(statearr_29157_29222[(2)] = null);

(statearr_29157_29222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (3))){
var inst_29104 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29106__$1,inst_29104);
} else {
if((state_val_29107 === (12))){
var inst_29033 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29158_29223 = state_29106__$1;
(statearr_29158_29223[(2)] = inst_29033);

(statearr_29158_29223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (2))){
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29106__$1,(4),ch);
} else {
if((state_val_29107 === (23))){
var state_29106__$1 = state_29106;
var statearr_29159_29224 = state_29106__$1;
(statearr_29159_29224[(2)] = null);

(statearr_29159_29224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (35))){
var inst_29088 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29160_29225 = state_29106__$1;
(statearr_29160_29225[(2)] = inst_29088);

(statearr_29160_29225[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (19))){
var inst_29005 = (state_29106[(7)]);
var inst_29009 = cljs.core.chunk_first.call(null,inst_29005);
var inst_29010 = cljs.core.chunk_rest.call(null,inst_29005);
var inst_29011 = cljs.core.count.call(null,inst_29009);
var inst_28983 = inst_29010;
var inst_28984 = inst_29009;
var inst_28985 = inst_29011;
var inst_28986 = (0);
var state_29106__$1 = (function (){var statearr_29161 = state_29106;
(statearr_29161[(13)] = inst_28983);

(statearr_29161[(15)] = inst_28986);

(statearr_29161[(16)] = inst_28984);

(statearr_29161[(17)] = inst_28985);

return statearr_29161;
})();
var statearr_29162_29226 = state_29106__$1;
(statearr_29162_29226[(2)] = null);

(statearr_29162_29226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (11))){
var inst_28983 = (state_29106[(13)]);
var inst_29005 = (state_29106[(7)]);
var inst_29005__$1 = cljs.core.seq.call(null,inst_28983);
var state_29106__$1 = (function (){var statearr_29163 = state_29106;
(statearr_29163[(7)] = inst_29005__$1);

return statearr_29163;
})();
if(inst_29005__$1){
var statearr_29164_29227 = state_29106__$1;
(statearr_29164_29227[(1)] = (16));

} else {
var statearr_29165_29228 = state_29106__$1;
(statearr_29165_29228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (9))){
var inst_29035 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29166_29229 = state_29106__$1;
(statearr_29166_29229[(2)] = inst_29035);

(statearr_29166_29229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (5))){
var inst_28981 = cljs.core.deref.call(null,cs);
var inst_28982 = cljs.core.seq.call(null,inst_28981);
var inst_28983 = inst_28982;
var inst_28984 = null;
var inst_28985 = (0);
var inst_28986 = (0);
var state_29106__$1 = (function (){var statearr_29167 = state_29106;
(statearr_29167[(13)] = inst_28983);

(statearr_29167[(15)] = inst_28986);

(statearr_29167[(16)] = inst_28984);

(statearr_29167[(17)] = inst_28985);

return statearr_29167;
})();
var statearr_29168_29230 = state_29106__$1;
(statearr_29168_29230[(2)] = null);

(statearr_29168_29230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (14))){
var state_29106__$1 = state_29106;
var statearr_29169_29231 = state_29106__$1;
(statearr_29169_29231[(2)] = null);

(statearr_29169_29231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (45))){
var inst_29096 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29170_29232 = state_29106__$1;
(statearr_29170_29232[(2)] = inst_29096);

(statearr_29170_29232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (26))){
var inst_29038 = (state_29106[(29)]);
var inst_29092 = (state_29106[(2)]);
var inst_29093 = cljs.core.seq.call(null,inst_29038);
var state_29106__$1 = (function (){var statearr_29171 = state_29106;
(statearr_29171[(31)] = inst_29092);

return statearr_29171;
})();
if(inst_29093){
var statearr_29172_29233 = state_29106__$1;
(statearr_29172_29233[(1)] = (42));

} else {
var statearr_29173_29234 = state_29106__$1;
(statearr_29173_29234[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (16))){
var inst_29005 = (state_29106[(7)]);
var inst_29007 = cljs.core.chunked_seq_QMARK_.call(null,inst_29005);
var state_29106__$1 = state_29106;
if(inst_29007){
var statearr_29174_29235 = state_29106__$1;
(statearr_29174_29235[(1)] = (19));

} else {
var statearr_29175_29236 = state_29106__$1;
(statearr_29175_29236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (38))){
var inst_29085 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29176_29237 = state_29106__$1;
(statearr_29176_29237[(2)] = inst_29085);

(statearr_29176_29237[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (30))){
var state_29106__$1 = state_29106;
var statearr_29177_29238 = state_29106__$1;
(statearr_29177_29238[(2)] = null);

(statearr_29177_29238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (10))){
var inst_28986 = (state_29106[(15)]);
var inst_28984 = (state_29106[(16)]);
var inst_28994 = cljs.core._nth.call(null,inst_28984,inst_28986);
var inst_28995 = cljs.core.nth.call(null,inst_28994,(0),null);
var inst_28996 = cljs.core.nth.call(null,inst_28994,(1),null);
var state_29106__$1 = (function (){var statearr_29178 = state_29106;
(statearr_29178[(26)] = inst_28995);

return statearr_29178;
})();
if(cljs.core.truth_(inst_28996)){
var statearr_29179_29239 = state_29106__$1;
(statearr_29179_29239[(1)] = (13));

} else {
var statearr_29180_29240 = state_29106__$1;
(statearr_29180_29240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (18))){
var inst_29031 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29181_29241 = state_29106__$1;
(statearr_29181_29241[(2)] = inst_29031);

(statearr_29181_29241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (42))){
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29106__$1,(45),dchan);
} else {
if((state_val_29107 === (37))){
var inst_29065 = (state_29106[(25)]);
var inst_29074 = (state_29106[(23)]);
var inst_28974 = (state_29106[(10)]);
var inst_29074__$1 = cljs.core.first.call(null,inst_29065);
var inst_29075 = cljs.core.async.put_BANG_.call(null,inst_29074__$1,inst_28974,done);
var state_29106__$1 = (function (){var statearr_29182 = state_29106;
(statearr_29182[(23)] = inst_29074__$1);

return statearr_29182;
})();
if(cljs.core.truth_(inst_29075)){
var statearr_29183_29242 = state_29106__$1;
(statearr_29183_29242[(1)] = (39));

} else {
var statearr_29184_29243 = state_29106__$1;
(statearr_29184_29243[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (8))){
var inst_28986 = (state_29106[(15)]);
var inst_28985 = (state_29106[(17)]);
var inst_28988 = (inst_28986 < inst_28985);
var inst_28989 = inst_28988;
var state_29106__$1 = state_29106;
if(cljs.core.truth_(inst_28989)){
var statearr_29185_29244 = state_29106__$1;
(statearr_29185_29244[(1)] = (10));

} else {
var statearr_29186_29245 = state_29106__$1;
(statearr_29186_29245[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28274__auto__ = null;
var cljs$core$async$mult_$_state_machine__28274__auto____0 = (function (){
var statearr_29187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29187[(0)] = cljs$core$async$mult_$_state_machine__28274__auto__);

(statearr_29187[(1)] = (1));

return statearr_29187;
});
var cljs$core$async$mult_$_state_machine__28274__auto____1 = (function (state_29106){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e29188){if((e29188 instanceof Object)){
var ex__28277__auto__ = e29188;
var statearr_29189_29246 = state_29106;
(statearr_29189_29246[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29247 = state_29106;
state_29106 = G__29247;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28274__auto__ = function(state_29106){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28274__auto____1.call(this,state_29106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28274__auto____0;
cljs$core$async$mult_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28274__auto____1;
return cljs$core$async$mult_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_29190 = f__28369__auto__.call(null);
(statearr_29190[(6)] = c__28368__auto___29191);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29249 = arguments.length;
switch (G__29249) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_29251 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29251.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29252 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29252.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29253 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29253.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29254 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29254.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29255 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29255.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29266 = arguments.length;
var i__4737__auto___29267 = (0);
while(true){
if((i__4737__auto___29267 < len__4736__auto___29266)){
args__4742__auto__.push((arguments[i__4737__auto___29267]));

var G__29268 = (i__4737__auto___29267 + (1));
i__4737__auto___29267 = G__29268;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29260){
var map__29261 = p__29260;
var map__29261__$1 = (((((!((map__29261 == null))))?(((((map__29261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29261):map__29261);
var opts = map__29261__$1;
var statearr_29263_29269 = state;
(statearr_29263_29269[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_29264_29270 = state;
(statearr_29264_29270[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_29265_29271 = state;
(statearr_29265_29271[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29256){
var G__29257 = cljs.core.first.call(null,seq29256);
var seq29256__$1 = cljs.core.next.call(null,seq29256);
var G__29258 = cljs.core.first.call(null,seq29256__$1);
var seq29256__$2 = cljs.core.next.call(null,seq29256__$1);
var G__29259 = cljs.core.first.call(null,seq29256__$2);
var seq29256__$3 = cljs.core.next.call(null,seq29256__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29257,G__29258,G__29259,seq29256__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29272 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29273){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29273 = meta29273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29274,meta29273__$1){
var self__ = this;
var _29274__$1 = this;
return (new cljs.core.async.t_cljs$core$async29272(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29273__$1));
}));

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29274){
var self__ = this;
var _29274__$1 = this;
return self__.meta29273;
}));

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29273","meta29273",-1376676651,null)], null);
}));

(cljs.core.async.t_cljs$core$async29272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29272");

(cljs.core.async.t_cljs$core$async29272.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29272.
 */
cljs.core.async.__GT_t_cljs$core$async29272 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29272(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29273){
return (new cljs.core.async.t_cljs$core$async29272(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29273));
});

}

return (new cljs.core.async.t_cljs$core$async29272(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28368__auto___29436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29376){
var state_val_29377 = (state_29376[(1)]);
if((state_val_29377 === (7))){
var inst_29291 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29378_29437 = state_29376__$1;
(statearr_29378_29437[(2)] = inst_29291);

(statearr_29378_29437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (20))){
var inst_29303 = (state_29376[(7)]);
var state_29376__$1 = state_29376;
var statearr_29379_29438 = state_29376__$1;
(statearr_29379_29438[(2)] = inst_29303);

(statearr_29379_29438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (27))){
var state_29376__$1 = state_29376;
var statearr_29380_29439 = state_29376__$1;
(statearr_29380_29439[(2)] = null);

(statearr_29380_29439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (1))){
var inst_29278 = (state_29376[(8)]);
var inst_29278__$1 = calc_state.call(null);
var inst_29280 = (inst_29278__$1 == null);
var inst_29281 = cljs.core.not.call(null,inst_29280);
var state_29376__$1 = (function (){var statearr_29381 = state_29376;
(statearr_29381[(8)] = inst_29278__$1);

return statearr_29381;
})();
if(inst_29281){
var statearr_29382_29440 = state_29376__$1;
(statearr_29382_29440[(1)] = (2));

} else {
var statearr_29383_29441 = state_29376__$1;
(statearr_29383_29441[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (24))){
var inst_29327 = (state_29376[(9)]);
var inst_29336 = (state_29376[(10)]);
var inst_29350 = (state_29376[(11)]);
var inst_29350__$1 = inst_29327.call(null,inst_29336);
var state_29376__$1 = (function (){var statearr_29384 = state_29376;
(statearr_29384[(11)] = inst_29350__$1);

return statearr_29384;
})();
if(cljs.core.truth_(inst_29350__$1)){
var statearr_29385_29442 = state_29376__$1;
(statearr_29385_29442[(1)] = (29));

} else {
var statearr_29386_29443 = state_29376__$1;
(statearr_29386_29443[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (4))){
var inst_29294 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29294)){
var statearr_29387_29444 = state_29376__$1;
(statearr_29387_29444[(1)] = (8));

} else {
var statearr_29388_29445 = state_29376__$1;
(statearr_29388_29445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (15))){
var inst_29321 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29321)){
var statearr_29389_29446 = state_29376__$1;
(statearr_29389_29446[(1)] = (19));

} else {
var statearr_29390_29447 = state_29376__$1;
(statearr_29390_29447[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (21))){
var inst_29326 = (state_29376[(12)]);
var inst_29326__$1 = (state_29376[(2)]);
var inst_29327 = cljs.core.get.call(null,inst_29326__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29328 = cljs.core.get.call(null,inst_29326__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29329 = cljs.core.get.call(null,inst_29326__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29376__$1 = (function (){var statearr_29391 = state_29376;
(statearr_29391[(9)] = inst_29327);

(statearr_29391[(13)] = inst_29328);

(statearr_29391[(12)] = inst_29326__$1);

return statearr_29391;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29376__$1,(22),inst_29329);
} else {
if((state_val_29377 === (31))){
var inst_29358 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29358)){
var statearr_29392_29448 = state_29376__$1;
(statearr_29392_29448[(1)] = (32));

} else {
var statearr_29393_29449 = state_29376__$1;
(statearr_29393_29449[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (32))){
var inst_29335 = (state_29376[(14)]);
var state_29376__$1 = state_29376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29376__$1,(35),out,inst_29335);
} else {
if((state_val_29377 === (33))){
var inst_29326 = (state_29376[(12)]);
var inst_29303 = inst_29326;
var state_29376__$1 = (function (){var statearr_29394 = state_29376;
(statearr_29394[(7)] = inst_29303);

return statearr_29394;
})();
var statearr_29395_29450 = state_29376__$1;
(statearr_29395_29450[(2)] = null);

(statearr_29395_29450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (13))){
var inst_29303 = (state_29376[(7)]);
var inst_29310 = inst_29303.cljs$lang$protocol_mask$partition0$;
var inst_29311 = (inst_29310 & (64));
var inst_29312 = inst_29303.cljs$core$ISeq$;
var inst_29313 = (cljs.core.PROTOCOL_SENTINEL === inst_29312);
var inst_29314 = ((inst_29311) || (inst_29313));
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29314)){
var statearr_29396_29451 = state_29376__$1;
(statearr_29396_29451[(1)] = (16));

} else {
var statearr_29397_29452 = state_29376__$1;
(statearr_29397_29452[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (22))){
var inst_29336 = (state_29376[(10)]);
var inst_29335 = (state_29376[(14)]);
var inst_29334 = (state_29376[(2)]);
var inst_29335__$1 = cljs.core.nth.call(null,inst_29334,(0),null);
var inst_29336__$1 = cljs.core.nth.call(null,inst_29334,(1),null);
var inst_29337 = (inst_29335__$1 == null);
var inst_29338 = cljs.core._EQ_.call(null,inst_29336__$1,change);
var inst_29339 = ((inst_29337) || (inst_29338));
var state_29376__$1 = (function (){var statearr_29398 = state_29376;
(statearr_29398[(10)] = inst_29336__$1);

(statearr_29398[(14)] = inst_29335__$1);

return statearr_29398;
})();
if(cljs.core.truth_(inst_29339)){
var statearr_29399_29453 = state_29376__$1;
(statearr_29399_29453[(1)] = (23));

} else {
var statearr_29400_29454 = state_29376__$1;
(statearr_29400_29454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (36))){
var inst_29326 = (state_29376[(12)]);
var inst_29303 = inst_29326;
var state_29376__$1 = (function (){var statearr_29401 = state_29376;
(statearr_29401[(7)] = inst_29303);

return statearr_29401;
})();
var statearr_29402_29455 = state_29376__$1;
(statearr_29402_29455[(2)] = null);

(statearr_29402_29455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (29))){
var inst_29350 = (state_29376[(11)]);
var state_29376__$1 = state_29376;
var statearr_29403_29456 = state_29376__$1;
(statearr_29403_29456[(2)] = inst_29350);

(statearr_29403_29456[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (6))){
var state_29376__$1 = state_29376;
var statearr_29404_29457 = state_29376__$1;
(statearr_29404_29457[(2)] = false);

(statearr_29404_29457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (28))){
var inst_29346 = (state_29376[(2)]);
var inst_29347 = calc_state.call(null);
var inst_29303 = inst_29347;
var state_29376__$1 = (function (){var statearr_29405 = state_29376;
(statearr_29405[(15)] = inst_29346);

(statearr_29405[(7)] = inst_29303);

return statearr_29405;
})();
var statearr_29406_29458 = state_29376__$1;
(statearr_29406_29458[(2)] = null);

(statearr_29406_29458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (25))){
var inst_29372 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29407_29459 = state_29376__$1;
(statearr_29407_29459[(2)] = inst_29372);

(statearr_29407_29459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (34))){
var inst_29370 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29408_29460 = state_29376__$1;
(statearr_29408_29460[(2)] = inst_29370);

(statearr_29408_29460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (17))){
var state_29376__$1 = state_29376;
var statearr_29409_29461 = state_29376__$1;
(statearr_29409_29461[(2)] = false);

(statearr_29409_29461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (3))){
var state_29376__$1 = state_29376;
var statearr_29410_29462 = state_29376__$1;
(statearr_29410_29462[(2)] = false);

(statearr_29410_29462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (12))){
var inst_29374 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29376__$1,inst_29374);
} else {
if((state_val_29377 === (2))){
var inst_29278 = (state_29376[(8)]);
var inst_29283 = inst_29278.cljs$lang$protocol_mask$partition0$;
var inst_29284 = (inst_29283 & (64));
var inst_29285 = inst_29278.cljs$core$ISeq$;
var inst_29286 = (cljs.core.PROTOCOL_SENTINEL === inst_29285);
var inst_29287 = ((inst_29284) || (inst_29286));
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29287)){
var statearr_29411_29463 = state_29376__$1;
(statearr_29411_29463[(1)] = (5));

} else {
var statearr_29412_29464 = state_29376__$1;
(statearr_29412_29464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (23))){
var inst_29335 = (state_29376[(14)]);
var inst_29341 = (inst_29335 == null);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29341)){
var statearr_29413_29465 = state_29376__$1;
(statearr_29413_29465[(1)] = (26));

} else {
var statearr_29414_29466 = state_29376__$1;
(statearr_29414_29466[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (35))){
var inst_29361 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29361)){
var statearr_29415_29467 = state_29376__$1;
(statearr_29415_29467[(1)] = (36));

} else {
var statearr_29416_29468 = state_29376__$1;
(statearr_29416_29468[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (19))){
var inst_29303 = (state_29376[(7)]);
var inst_29323 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29303);
var state_29376__$1 = state_29376;
var statearr_29417_29469 = state_29376__$1;
(statearr_29417_29469[(2)] = inst_29323);

(statearr_29417_29469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (11))){
var inst_29303 = (state_29376[(7)]);
var inst_29307 = (inst_29303 == null);
var inst_29308 = cljs.core.not.call(null,inst_29307);
var state_29376__$1 = state_29376;
if(inst_29308){
var statearr_29418_29470 = state_29376__$1;
(statearr_29418_29470[(1)] = (13));

} else {
var statearr_29419_29471 = state_29376__$1;
(statearr_29419_29471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (9))){
var inst_29278 = (state_29376[(8)]);
var state_29376__$1 = state_29376;
var statearr_29420_29472 = state_29376__$1;
(statearr_29420_29472[(2)] = inst_29278);

(statearr_29420_29472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (5))){
var state_29376__$1 = state_29376;
var statearr_29421_29473 = state_29376__$1;
(statearr_29421_29473[(2)] = true);

(statearr_29421_29473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (14))){
var state_29376__$1 = state_29376;
var statearr_29422_29474 = state_29376__$1;
(statearr_29422_29474[(2)] = false);

(statearr_29422_29474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (26))){
var inst_29336 = (state_29376[(10)]);
var inst_29343 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29336);
var state_29376__$1 = state_29376;
var statearr_29423_29475 = state_29376__$1;
(statearr_29423_29475[(2)] = inst_29343);

(statearr_29423_29475[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (16))){
var state_29376__$1 = state_29376;
var statearr_29424_29476 = state_29376__$1;
(statearr_29424_29476[(2)] = true);

(statearr_29424_29476[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (38))){
var inst_29366 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29425_29477 = state_29376__$1;
(statearr_29425_29477[(2)] = inst_29366);

(statearr_29425_29477[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (30))){
var inst_29327 = (state_29376[(9)]);
var inst_29336 = (state_29376[(10)]);
var inst_29328 = (state_29376[(13)]);
var inst_29353 = cljs.core.empty_QMARK_.call(null,inst_29327);
var inst_29354 = inst_29328.call(null,inst_29336);
var inst_29355 = cljs.core.not.call(null,inst_29354);
var inst_29356 = ((inst_29353) && (inst_29355));
var state_29376__$1 = state_29376;
var statearr_29426_29478 = state_29376__$1;
(statearr_29426_29478[(2)] = inst_29356);

(statearr_29426_29478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (10))){
var inst_29278 = (state_29376[(8)]);
var inst_29299 = (state_29376[(2)]);
var inst_29300 = cljs.core.get.call(null,inst_29299,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29301 = cljs.core.get.call(null,inst_29299,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29302 = cljs.core.get.call(null,inst_29299,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29303 = inst_29278;
var state_29376__$1 = (function (){var statearr_29427 = state_29376;
(statearr_29427[(7)] = inst_29303);

(statearr_29427[(16)] = inst_29301);

(statearr_29427[(17)] = inst_29302);

(statearr_29427[(18)] = inst_29300);

return statearr_29427;
})();
var statearr_29428_29479 = state_29376__$1;
(statearr_29428_29479[(2)] = null);

(statearr_29428_29479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (18))){
var inst_29318 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29429_29480 = state_29376__$1;
(statearr_29429_29480[(2)] = inst_29318);

(statearr_29429_29480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (37))){
var state_29376__$1 = state_29376;
var statearr_29430_29481 = state_29376__$1;
(statearr_29430_29481[(2)] = null);

(statearr_29430_29481[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (8))){
var inst_29278 = (state_29376[(8)]);
var inst_29296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29278);
var state_29376__$1 = state_29376;
var statearr_29431_29482 = state_29376__$1;
(statearr_29431_29482[(2)] = inst_29296);

(statearr_29431_29482[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28274__auto__ = null;
var cljs$core$async$mix_$_state_machine__28274__auto____0 = (function (){
var statearr_29432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29432[(0)] = cljs$core$async$mix_$_state_machine__28274__auto__);

(statearr_29432[(1)] = (1));

return statearr_29432;
});
var cljs$core$async$mix_$_state_machine__28274__auto____1 = (function (state_29376){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e29433){if((e29433 instanceof Object)){
var ex__28277__auto__ = e29433;
var statearr_29434_29483 = state_29376;
(statearr_29434_29483[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29484 = state_29376;
state_29376 = G__29484;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28274__auto__ = function(state_29376){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28274__auto____1.call(this,state_29376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28274__auto____0;
cljs$core$async$mix_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28274__auto____1;
return cljs$core$async$mix_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_29435 = f__28369__auto__.call(null);
(statearr_29435[(6)] = c__28368__auto___29436);

return statearr_29435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_29487 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29487.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29488 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29488.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29489 = (function() {
var G__29490 = null;
var G__29490__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__29490__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__29490 = function(p,v){
switch(arguments.length){
case 1:
return G__29490__1.call(this,p);
case 2:
return G__29490__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29490.cljs$core$IFn$_invoke$arity$1 = G__29490__1;
G__29490.cljs$core$IFn$_invoke$arity$2 = G__29490__2;
return G__29490;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29486 = arguments.length;
switch (G__29486) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29489.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29489.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29494 = arguments.length;
switch (G__29494) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__29492_SHARP_){
if(cljs.core.truth_(p1__29492_SHARP_.call(null,topic))){
return p1__29492_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29492_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29495 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29496){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29496 = meta29496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29497,meta29496__$1){
var self__ = this;
var _29497__$1 = this;
return (new cljs.core.async.t_cljs$core$async29495(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29496__$1));
}));

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29497){
var self__ = this;
var _29497__$1 = this;
return self__.meta29496;
}));

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29496","meta29496",522181041,null)], null);
}));

(cljs.core.async.t_cljs$core$async29495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29495");

(cljs.core.async.t_cljs$core$async29495.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29495.
 */
cljs.core.async.__GT_t_cljs$core$async29495 = (function cljs$core$async$__GT_t_cljs$core$async29495(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29496){
return (new cljs.core.async.t_cljs$core$async29495(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29496));
});

}

return (new cljs.core.async.t_cljs$core$async29495(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28368__auto___29615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29569){
var state_val_29570 = (state_29569[(1)]);
if((state_val_29570 === (7))){
var inst_29565 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29571_29616 = state_29569__$1;
(statearr_29571_29616[(2)] = inst_29565);

(statearr_29571_29616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (20))){
var state_29569__$1 = state_29569;
var statearr_29572_29617 = state_29569__$1;
(statearr_29572_29617[(2)] = null);

(statearr_29572_29617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (1))){
var state_29569__$1 = state_29569;
var statearr_29573_29618 = state_29569__$1;
(statearr_29573_29618[(2)] = null);

(statearr_29573_29618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (24))){
var inst_29548 = (state_29569[(7)]);
var inst_29557 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29548);
var state_29569__$1 = state_29569;
var statearr_29574_29619 = state_29569__$1;
(statearr_29574_29619[(2)] = inst_29557);

(statearr_29574_29619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (4))){
var inst_29500 = (state_29569[(8)]);
var inst_29500__$1 = (state_29569[(2)]);
var inst_29501 = (inst_29500__$1 == null);
var state_29569__$1 = (function (){var statearr_29575 = state_29569;
(statearr_29575[(8)] = inst_29500__$1);

return statearr_29575;
})();
if(cljs.core.truth_(inst_29501)){
var statearr_29576_29620 = state_29569__$1;
(statearr_29576_29620[(1)] = (5));

} else {
var statearr_29577_29621 = state_29569__$1;
(statearr_29577_29621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (15))){
var inst_29542 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29578_29622 = state_29569__$1;
(statearr_29578_29622[(2)] = inst_29542);

(statearr_29578_29622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (21))){
var inst_29562 = (state_29569[(2)]);
var state_29569__$1 = (function (){var statearr_29579 = state_29569;
(statearr_29579[(9)] = inst_29562);

return statearr_29579;
})();
var statearr_29580_29623 = state_29569__$1;
(statearr_29580_29623[(2)] = null);

(statearr_29580_29623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (13))){
var inst_29524 = (state_29569[(10)]);
var inst_29526 = cljs.core.chunked_seq_QMARK_.call(null,inst_29524);
var state_29569__$1 = state_29569;
if(inst_29526){
var statearr_29581_29624 = state_29569__$1;
(statearr_29581_29624[(1)] = (16));

} else {
var statearr_29582_29625 = state_29569__$1;
(statearr_29582_29625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (22))){
var inst_29554 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
if(cljs.core.truth_(inst_29554)){
var statearr_29583_29626 = state_29569__$1;
(statearr_29583_29626[(1)] = (23));

} else {
var statearr_29584_29627 = state_29569__$1;
(statearr_29584_29627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (6))){
var inst_29500 = (state_29569[(8)]);
var inst_29550 = (state_29569[(11)]);
var inst_29548 = (state_29569[(7)]);
var inst_29548__$1 = topic_fn.call(null,inst_29500);
var inst_29549 = cljs.core.deref.call(null,mults);
var inst_29550__$1 = cljs.core.get.call(null,inst_29549,inst_29548__$1);
var state_29569__$1 = (function (){var statearr_29585 = state_29569;
(statearr_29585[(11)] = inst_29550__$1);

(statearr_29585[(7)] = inst_29548__$1);

return statearr_29585;
})();
if(cljs.core.truth_(inst_29550__$1)){
var statearr_29586_29628 = state_29569__$1;
(statearr_29586_29628[(1)] = (19));

} else {
var statearr_29587_29629 = state_29569__$1;
(statearr_29587_29629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (25))){
var inst_29559 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29588_29630 = state_29569__$1;
(statearr_29588_29630[(2)] = inst_29559);

(statearr_29588_29630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (17))){
var inst_29524 = (state_29569[(10)]);
var inst_29533 = cljs.core.first.call(null,inst_29524);
var inst_29534 = cljs.core.async.muxch_STAR_.call(null,inst_29533);
var inst_29535 = cljs.core.async.close_BANG_.call(null,inst_29534);
var inst_29536 = cljs.core.next.call(null,inst_29524);
var inst_29510 = inst_29536;
var inst_29511 = null;
var inst_29512 = (0);
var inst_29513 = (0);
var state_29569__$1 = (function (){var statearr_29589 = state_29569;
(statearr_29589[(12)] = inst_29511);

(statearr_29589[(13)] = inst_29513);

(statearr_29589[(14)] = inst_29512);

(statearr_29589[(15)] = inst_29535);

(statearr_29589[(16)] = inst_29510);

return statearr_29589;
})();
var statearr_29590_29631 = state_29569__$1;
(statearr_29590_29631[(2)] = null);

(statearr_29590_29631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (3))){
var inst_29567 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29569__$1,inst_29567);
} else {
if((state_val_29570 === (12))){
var inst_29544 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29591_29632 = state_29569__$1;
(statearr_29591_29632[(2)] = inst_29544);

(statearr_29591_29632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (2))){
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29569__$1,(4),ch);
} else {
if((state_val_29570 === (23))){
var state_29569__$1 = state_29569;
var statearr_29592_29633 = state_29569__$1;
(statearr_29592_29633[(2)] = null);

(statearr_29592_29633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (19))){
var inst_29500 = (state_29569[(8)]);
var inst_29550 = (state_29569[(11)]);
var inst_29552 = cljs.core.async.muxch_STAR_.call(null,inst_29550);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29569__$1,(22),inst_29552,inst_29500);
} else {
if((state_val_29570 === (11))){
var inst_29524 = (state_29569[(10)]);
var inst_29510 = (state_29569[(16)]);
var inst_29524__$1 = cljs.core.seq.call(null,inst_29510);
var state_29569__$1 = (function (){var statearr_29593 = state_29569;
(statearr_29593[(10)] = inst_29524__$1);

return statearr_29593;
})();
if(inst_29524__$1){
var statearr_29594_29634 = state_29569__$1;
(statearr_29594_29634[(1)] = (13));

} else {
var statearr_29595_29635 = state_29569__$1;
(statearr_29595_29635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (9))){
var inst_29546 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29596_29636 = state_29569__$1;
(statearr_29596_29636[(2)] = inst_29546);

(statearr_29596_29636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (5))){
var inst_29507 = cljs.core.deref.call(null,mults);
var inst_29508 = cljs.core.vals.call(null,inst_29507);
var inst_29509 = cljs.core.seq.call(null,inst_29508);
var inst_29510 = inst_29509;
var inst_29511 = null;
var inst_29512 = (0);
var inst_29513 = (0);
var state_29569__$1 = (function (){var statearr_29597 = state_29569;
(statearr_29597[(12)] = inst_29511);

(statearr_29597[(13)] = inst_29513);

(statearr_29597[(14)] = inst_29512);

(statearr_29597[(16)] = inst_29510);

return statearr_29597;
})();
var statearr_29598_29637 = state_29569__$1;
(statearr_29598_29637[(2)] = null);

(statearr_29598_29637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (14))){
var state_29569__$1 = state_29569;
var statearr_29602_29638 = state_29569__$1;
(statearr_29602_29638[(2)] = null);

(statearr_29602_29638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (16))){
var inst_29524 = (state_29569[(10)]);
var inst_29528 = cljs.core.chunk_first.call(null,inst_29524);
var inst_29529 = cljs.core.chunk_rest.call(null,inst_29524);
var inst_29530 = cljs.core.count.call(null,inst_29528);
var inst_29510 = inst_29529;
var inst_29511 = inst_29528;
var inst_29512 = inst_29530;
var inst_29513 = (0);
var state_29569__$1 = (function (){var statearr_29603 = state_29569;
(statearr_29603[(12)] = inst_29511);

(statearr_29603[(13)] = inst_29513);

(statearr_29603[(14)] = inst_29512);

(statearr_29603[(16)] = inst_29510);

return statearr_29603;
})();
var statearr_29604_29639 = state_29569__$1;
(statearr_29604_29639[(2)] = null);

(statearr_29604_29639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (10))){
var inst_29511 = (state_29569[(12)]);
var inst_29513 = (state_29569[(13)]);
var inst_29512 = (state_29569[(14)]);
var inst_29510 = (state_29569[(16)]);
var inst_29518 = cljs.core._nth.call(null,inst_29511,inst_29513);
var inst_29519 = cljs.core.async.muxch_STAR_.call(null,inst_29518);
var inst_29520 = cljs.core.async.close_BANG_.call(null,inst_29519);
var inst_29521 = (inst_29513 + (1));
var tmp29599 = inst_29511;
var tmp29600 = inst_29512;
var tmp29601 = inst_29510;
var inst_29510__$1 = tmp29601;
var inst_29511__$1 = tmp29599;
var inst_29512__$1 = tmp29600;
var inst_29513__$1 = inst_29521;
var state_29569__$1 = (function (){var statearr_29605 = state_29569;
(statearr_29605[(12)] = inst_29511__$1);

(statearr_29605[(13)] = inst_29513__$1);

(statearr_29605[(14)] = inst_29512__$1);

(statearr_29605[(17)] = inst_29520);

(statearr_29605[(16)] = inst_29510__$1);

return statearr_29605;
})();
var statearr_29606_29640 = state_29569__$1;
(statearr_29606_29640[(2)] = null);

(statearr_29606_29640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (18))){
var inst_29539 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29607_29641 = state_29569__$1;
(statearr_29607_29641[(2)] = inst_29539);

(statearr_29607_29641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (8))){
var inst_29513 = (state_29569[(13)]);
var inst_29512 = (state_29569[(14)]);
var inst_29515 = (inst_29513 < inst_29512);
var inst_29516 = inst_29515;
var state_29569__$1 = state_29569;
if(cljs.core.truth_(inst_29516)){
var statearr_29608_29642 = state_29569__$1;
(statearr_29608_29642[(1)] = (10));

} else {
var statearr_29609_29643 = state_29569__$1;
(statearr_29609_29643[(1)] = (11));

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
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_29610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29610[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_29610[(1)] = (1));

return statearr_29610;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_29569){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e29611){if((e29611 instanceof Object)){
var ex__28277__auto__ = e29611;
var statearr_29612_29644 = state_29569;
(statearr_29612_29644[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29645 = state_29569;
state_29569 = G__29645;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_29569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_29569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_29613 = f__28369__auto__.call(null);
(statearr_29613[(6)] = c__28368__auto___29615);

return statearr_29613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29647 = arguments.length;
switch (G__29647) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29650 = arguments.length;
switch (G__29650) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29653 = arguments.length;
switch (G__29653) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__28368__auto___29720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29692){
var state_val_29693 = (state_29692[(1)]);
if((state_val_29693 === (7))){
var state_29692__$1 = state_29692;
var statearr_29694_29721 = state_29692__$1;
(statearr_29694_29721[(2)] = null);

(statearr_29694_29721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (1))){
var state_29692__$1 = state_29692;
var statearr_29695_29722 = state_29692__$1;
(statearr_29695_29722[(2)] = null);

(statearr_29695_29722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (4))){
var inst_29656 = (state_29692[(7)]);
var inst_29658 = (inst_29656 < cnt);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29658)){
var statearr_29696_29723 = state_29692__$1;
(statearr_29696_29723[(1)] = (6));

} else {
var statearr_29697_29724 = state_29692__$1;
(statearr_29697_29724[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (15))){
var inst_29688 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29698_29725 = state_29692__$1;
(statearr_29698_29725[(2)] = inst_29688);

(statearr_29698_29725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (13))){
var inst_29681 = cljs.core.async.close_BANG_.call(null,out);
var state_29692__$1 = state_29692;
var statearr_29699_29726 = state_29692__$1;
(statearr_29699_29726[(2)] = inst_29681);

(statearr_29699_29726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (6))){
var state_29692__$1 = state_29692;
var statearr_29700_29727 = state_29692__$1;
(statearr_29700_29727[(2)] = null);

(statearr_29700_29727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (3))){
var inst_29690 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29692__$1,inst_29690);
} else {
if((state_val_29693 === (12))){
var inst_29678 = (state_29692[(8)]);
var inst_29678__$1 = (state_29692[(2)]);
var inst_29679 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29678__$1);
var state_29692__$1 = (function (){var statearr_29701 = state_29692;
(statearr_29701[(8)] = inst_29678__$1);

return statearr_29701;
})();
if(cljs.core.truth_(inst_29679)){
var statearr_29702_29728 = state_29692__$1;
(statearr_29702_29728[(1)] = (13));

} else {
var statearr_29703_29729 = state_29692__$1;
(statearr_29703_29729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (2))){
var inst_29655 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29656 = (0);
var state_29692__$1 = (function (){var statearr_29704 = state_29692;
(statearr_29704[(7)] = inst_29656);

(statearr_29704[(9)] = inst_29655);

return statearr_29704;
})();
var statearr_29705_29730 = state_29692__$1;
(statearr_29705_29730[(2)] = null);

(statearr_29705_29730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (11))){
var inst_29656 = (state_29692[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29692,(10),Object,null,(9));
var inst_29665 = chs__$1.call(null,inst_29656);
var inst_29666 = done.call(null,inst_29656);
var inst_29667 = cljs.core.async.take_BANG_.call(null,inst_29665,inst_29666);
var state_29692__$1 = state_29692;
var statearr_29706_29731 = state_29692__$1;
(statearr_29706_29731[(2)] = inst_29667);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (9))){
var inst_29656 = (state_29692[(7)]);
var inst_29669 = (state_29692[(2)]);
var inst_29670 = (inst_29656 + (1));
var inst_29656__$1 = inst_29670;
var state_29692__$1 = (function (){var statearr_29707 = state_29692;
(statearr_29707[(10)] = inst_29669);

(statearr_29707[(7)] = inst_29656__$1);

return statearr_29707;
})();
var statearr_29708_29732 = state_29692__$1;
(statearr_29708_29732[(2)] = null);

(statearr_29708_29732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (5))){
var inst_29676 = (state_29692[(2)]);
var state_29692__$1 = (function (){var statearr_29709 = state_29692;
(statearr_29709[(11)] = inst_29676);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(12),dchan);
} else {
if((state_val_29693 === (14))){
var inst_29678 = (state_29692[(8)]);
var inst_29683 = cljs.core.apply.call(null,f,inst_29678);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29692__$1,(16),out,inst_29683);
} else {
if((state_val_29693 === (16))){
var inst_29685 = (state_29692[(2)]);
var state_29692__$1 = (function (){var statearr_29710 = state_29692;
(statearr_29710[(12)] = inst_29685);

return statearr_29710;
})();
var statearr_29711_29733 = state_29692__$1;
(statearr_29711_29733[(2)] = null);

(statearr_29711_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (10))){
var inst_29660 = (state_29692[(2)]);
var inst_29661 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29692__$1 = (function (){var statearr_29712 = state_29692;
(statearr_29712[(13)] = inst_29660);

return statearr_29712;
})();
var statearr_29713_29734 = state_29692__$1;
(statearr_29713_29734[(2)] = inst_29661);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (8))){
var inst_29674 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29714_29735 = state_29692__$1;
(statearr_29714_29735[(2)] = inst_29674);

(statearr_29714_29735[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_29715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29715[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_29715[(1)] = (1));

return statearr_29715;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_29692){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e29716){if((e29716 instanceof Object)){
var ex__28277__auto__ = e29716;
var statearr_29717_29736 = state_29692;
(statearr_29717_29736[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29737 = state_29692;
state_29692 = G__29737;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_29692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_29692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_29718 = f__28369__auto__.call(null);
(statearr_29718[(6)] = c__28368__auto___29720);

return statearr_29718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29740 = arguments.length;
switch (G__29740) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28368__auto___29794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29772){
var state_val_29773 = (state_29772[(1)]);
if((state_val_29773 === (7))){
var inst_29751 = (state_29772[(7)]);
var inst_29752 = (state_29772[(8)]);
var inst_29751__$1 = (state_29772[(2)]);
var inst_29752__$1 = cljs.core.nth.call(null,inst_29751__$1,(0),null);
var inst_29753 = cljs.core.nth.call(null,inst_29751__$1,(1),null);
var inst_29754 = (inst_29752__$1 == null);
var state_29772__$1 = (function (){var statearr_29774 = state_29772;
(statearr_29774[(7)] = inst_29751__$1);

(statearr_29774[(8)] = inst_29752__$1);

(statearr_29774[(9)] = inst_29753);

return statearr_29774;
})();
if(cljs.core.truth_(inst_29754)){
var statearr_29775_29795 = state_29772__$1;
(statearr_29775_29795[(1)] = (8));

} else {
var statearr_29776_29796 = state_29772__$1;
(statearr_29776_29796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (1))){
var inst_29741 = cljs.core.vec.call(null,chs);
var inst_29742 = inst_29741;
var state_29772__$1 = (function (){var statearr_29777 = state_29772;
(statearr_29777[(10)] = inst_29742);

return statearr_29777;
})();
var statearr_29778_29797 = state_29772__$1;
(statearr_29778_29797[(2)] = null);

(statearr_29778_29797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (4))){
var inst_29742 = (state_29772[(10)]);
var state_29772__$1 = state_29772;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29772__$1,(7),inst_29742);
} else {
if((state_val_29773 === (6))){
var inst_29768 = (state_29772[(2)]);
var state_29772__$1 = state_29772;
var statearr_29779_29798 = state_29772__$1;
(statearr_29779_29798[(2)] = inst_29768);

(statearr_29779_29798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (3))){
var inst_29770 = (state_29772[(2)]);
var state_29772__$1 = state_29772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29772__$1,inst_29770);
} else {
if((state_val_29773 === (2))){
var inst_29742 = (state_29772[(10)]);
var inst_29744 = cljs.core.count.call(null,inst_29742);
var inst_29745 = (inst_29744 > (0));
var state_29772__$1 = state_29772;
if(cljs.core.truth_(inst_29745)){
var statearr_29781_29799 = state_29772__$1;
(statearr_29781_29799[(1)] = (4));

} else {
var statearr_29782_29800 = state_29772__$1;
(statearr_29782_29800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (11))){
var inst_29742 = (state_29772[(10)]);
var inst_29761 = (state_29772[(2)]);
var tmp29780 = inst_29742;
var inst_29742__$1 = tmp29780;
var state_29772__$1 = (function (){var statearr_29783 = state_29772;
(statearr_29783[(10)] = inst_29742__$1);

(statearr_29783[(11)] = inst_29761);

return statearr_29783;
})();
var statearr_29784_29801 = state_29772__$1;
(statearr_29784_29801[(2)] = null);

(statearr_29784_29801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (9))){
var inst_29752 = (state_29772[(8)]);
var state_29772__$1 = state_29772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29772__$1,(11),out,inst_29752);
} else {
if((state_val_29773 === (5))){
var inst_29766 = cljs.core.async.close_BANG_.call(null,out);
var state_29772__$1 = state_29772;
var statearr_29785_29802 = state_29772__$1;
(statearr_29785_29802[(2)] = inst_29766);

(statearr_29785_29802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (10))){
var inst_29764 = (state_29772[(2)]);
var state_29772__$1 = state_29772;
var statearr_29786_29803 = state_29772__$1;
(statearr_29786_29803[(2)] = inst_29764);

(statearr_29786_29803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (8))){
var inst_29751 = (state_29772[(7)]);
var inst_29752 = (state_29772[(8)]);
var inst_29742 = (state_29772[(10)]);
var inst_29753 = (state_29772[(9)]);
var inst_29756 = (function (){var cs = inst_29742;
var vec__29747 = inst_29751;
var v = inst_29752;
var c = inst_29753;
return (function (p1__29738_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29738_SHARP_);
});
})();
var inst_29757 = cljs.core.filterv.call(null,inst_29756,inst_29742);
var inst_29742__$1 = inst_29757;
var state_29772__$1 = (function (){var statearr_29787 = state_29772;
(statearr_29787[(10)] = inst_29742__$1);

return statearr_29787;
})();
var statearr_29788_29804 = state_29772__$1;
(statearr_29788_29804[(2)] = null);

(statearr_29788_29804[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_29789 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29789[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_29789[(1)] = (1));

return statearr_29789;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_29772){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e29790){if((e29790 instanceof Object)){
var ex__28277__auto__ = e29790;
var statearr_29791_29805 = state_29772;
(statearr_29791_29805[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29806 = state_29772;
state_29772 = G__29806;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_29772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_29772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_29792 = f__28369__auto__.call(null);
(statearr_29792[(6)] = c__28368__auto___29794);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29808 = arguments.length;
switch (G__29808) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28368__auto___29853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29832){
var state_val_29833 = (state_29832[(1)]);
if((state_val_29833 === (7))){
var inst_29814 = (state_29832[(7)]);
var inst_29814__$1 = (state_29832[(2)]);
var inst_29815 = (inst_29814__$1 == null);
var inst_29816 = cljs.core.not.call(null,inst_29815);
var state_29832__$1 = (function (){var statearr_29834 = state_29832;
(statearr_29834[(7)] = inst_29814__$1);

return statearr_29834;
})();
if(inst_29816){
var statearr_29835_29854 = state_29832__$1;
(statearr_29835_29854[(1)] = (8));

} else {
var statearr_29836_29855 = state_29832__$1;
(statearr_29836_29855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (1))){
var inst_29809 = (0);
var state_29832__$1 = (function (){var statearr_29837 = state_29832;
(statearr_29837[(8)] = inst_29809);

return statearr_29837;
})();
var statearr_29838_29856 = state_29832__$1;
(statearr_29838_29856[(2)] = null);

(statearr_29838_29856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (4))){
var state_29832__$1 = state_29832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29832__$1,(7),ch);
} else {
if((state_val_29833 === (6))){
var inst_29827 = (state_29832[(2)]);
var state_29832__$1 = state_29832;
var statearr_29839_29857 = state_29832__$1;
(statearr_29839_29857[(2)] = inst_29827);

(statearr_29839_29857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (3))){
var inst_29829 = (state_29832[(2)]);
var inst_29830 = cljs.core.async.close_BANG_.call(null,out);
var state_29832__$1 = (function (){var statearr_29840 = state_29832;
(statearr_29840[(9)] = inst_29829);

return statearr_29840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29832__$1,inst_29830);
} else {
if((state_val_29833 === (2))){
var inst_29809 = (state_29832[(8)]);
var inst_29811 = (inst_29809 < n);
var state_29832__$1 = state_29832;
if(cljs.core.truth_(inst_29811)){
var statearr_29841_29858 = state_29832__$1;
(statearr_29841_29858[(1)] = (4));

} else {
var statearr_29842_29859 = state_29832__$1;
(statearr_29842_29859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (11))){
var inst_29809 = (state_29832[(8)]);
var inst_29819 = (state_29832[(2)]);
var inst_29820 = (inst_29809 + (1));
var inst_29809__$1 = inst_29820;
var state_29832__$1 = (function (){var statearr_29843 = state_29832;
(statearr_29843[(8)] = inst_29809__$1);

(statearr_29843[(10)] = inst_29819);

return statearr_29843;
})();
var statearr_29844_29860 = state_29832__$1;
(statearr_29844_29860[(2)] = null);

(statearr_29844_29860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (9))){
var state_29832__$1 = state_29832;
var statearr_29845_29861 = state_29832__$1;
(statearr_29845_29861[(2)] = null);

(statearr_29845_29861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (5))){
var state_29832__$1 = state_29832;
var statearr_29846_29862 = state_29832__$1;
(statearr_29846_29862[(2)] = null);

(statearr_29846_29862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (10))){
var inst_29824 = (state_29832[(2)]);
var state_29832__$1 = state_29832;
var statearr_29847_29863 = state_29832__$1;
(statearr_29847_29863[(2)] = inst_29824);

(statearr_29847_29863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (8))){
var inst_29814 = (state_29832[(7)]);
var state_29832__$1 = state_29832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29832__$1,(11),out,inst_29814);
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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_29848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29848[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_29848[(1)] = (1));

return statearr_29848;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_29832){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e29849){if((e29849 instanceof Object)){
var ex__28277__auto__ = e29849;
var statearr_29850_29864 = state_29832;
(statearr_29850_29864[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29865 = state_29832;
state_29832 = G__29865;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_29832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_29832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_29851 = f__28369__auto__.call(null);
(statearr_29851[(6)] = c__28368__auto___29853);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29867 = (function (f,ch,meta29868){
this.f = f;
this.ch = ch;
this.meta29868 = meta29868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29869,meta29868__$1){
var self__ = this;
var _29869__$1 = this;
return (new cljs.core.async.t_cljs$core$async29867(self__.f,self__.ch,meta29868__$1));
}));

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29869){
var self__ = this;
var _29869__$1 = this;
return self__.meta29868;
}));

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29870 = (function (f,ch,meta29868,_,fn1,meta29871){
this.f = f;
this.ch = ch;
this.meta29868 = meta29868;
this._ = _;
this.fn1 = fn1;
this.meta29871 = meta29871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29872,meta29871__$1){
var self__ = this;
var _29872__$1 = this;
return (new cljs.core.async.t_cljs$core$async29870(self__.f,self__.ch,self__.meta29868,self__._,self__.fn1,meta29871__$1));
}));

(cljs.core.async.t_cljs$core$async29870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29872){
var self__ = this;
var _29872__$1 = this;
return self__.meta29871;
}));

(cljs.core.async.t_cljs$core$async29870.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29870.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29866_SHARP_){
return f1.call(null,(((p1__29866_SHARP_ == null))?null:self__.f.call(null,p1__29866_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async29870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29868","meta29868",-1787526136,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29867","cljs.core.async/t_cljs$core$async29867",-911944295,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29871","meta29871",71914188,null)], null);
}));

(cljs.core.async.t_cljs$core$async29870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29870");

(cljs.core.async.t_cljs$core$async29870.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29870.
 */
cljs.core.async.__GT_t_cljs$core$async29870 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29870(f__$1,ch__$1,meta29868__$1,___$2,fn1__$1,meta29871){
return (new cljs.core.async.t_cljs$core$async29870(f__$1,ch__$1,meta29868__$1,___$2,fn1__$1,meta29871));
});

}

return (new cljs.core.async.t_cljs$core$async29870(self__.f,self__.ch,self__.meta29868,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29868","meta29868",-1787526136,null)], null);
}));

(cljs.core.async.t_cljs$core$async29867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29867");

(cljs.core.async.t_cljs$core$async29867.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29867.
 */
cljs.core.async.__GT_t_cljs$core$async29867 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29867(f__$1,ch__$1,meta29868){
return (new cljs.core.async.t_cljs$core$async29867(f__$1,ch__$1,meta29868));
});

}

return (new cljs.core.async.t_cljs$core$async29867(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29873 = (function (f,ch,meta29874){
this.f = f;
this.ch = ch;
this.meta29874 = meta29874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29875,meta29874__$1){
var self__ = this;
var _29875__$1 = this;
return (new cljs.core.async.t_cljs$core$async29873(self__.f,self__.ch,meta29874__$1));
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29875){
var self__ = this;
var _29875__$1 = this;
return self__.meta29874;
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async29873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29874","meta29874",-2009452239,null)], null);
}));

(cljs.core.async.t_cljs$core$async29873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29873");

(cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29873.
 */
cljs.core.async.__GT_t_cljs$core$async29873 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29873(f__$1,ch__$1,meta29874){
return (new cljs.core.async.t_cljs$core$async29873(f__$1,ch__$1,meta29874));
});

}

return (new cljs.core.async.t_cljs$core$async29873(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29876 = (function (p,ch,meta29877){
this.p = p;
this.ch = ch;
this.meta29877 = meta29877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29878,meta29877__$1){
var self__ = this;
var _29878__$1 = this;
return (new cljs.core.async.t_cljs$core$async29876(self__.p,self__.ch,meta29877__$1));
}));

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29878){
var self__ = this;
var _29878__$1 = this;
return self__.meta29877;
}));

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29877","meta29877",1779021206,null)], null);
}));

(cljs.core.async.t_cljs$core$async29876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29876");

(cljs.core.async.t_cljs$core$async29876.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29876.
 */
cljs.core.async.__GT_t_cljs$core$async29876 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29876(p__$1,ch__$1,meta29877){
return (new cljs.core.async.t_cljs$core$async29876(p__$1,ch__$1,meta29877));
});

}

return (new cljs.core.async.t_cljs$core$async29876(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29880 = arguments.length;
switch (G__29880) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28368__auto___29920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29901){
var state_val_29902 = (state_29901[(1)]);
if((state_val_29902 === (7))){
var inst_29897 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
var statearr_29903_29921 = state_29901__$1;
(statearr_29903_29921[(2)] = inst_29897);

(statearr_29903_29921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (1))){
var state_29901__$1 = state_29901;
var statearr_29904_29922 = state_29901__$1;
(statearr_29904_29922[(2)] = null);

(statearr_29904_29922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (4))){
var inst_29883 = (state_29901[(7)]);
var inst_29883__$1 = (state_29901[(2)]);
var inst_29884 = (inst_29883__$1 == null);
var state_29901__$1 = (function (){var statearr_29905 = state_29901;
(statearr_29905[(7)] = inst_29883__$1);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29884)){
var statearr_29906_29923 = state_29901__$1;
(statearr_29906_29923[(1)] = (5));

} else {
var statearr_29907_29924 = state_29901__$1;
(statearr_29907_29924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (6))){
var inst_29883 = (state_29901[(7)]);
var inst_29888 = p.call(null,inst_29883);
var state_29901__$1 = state_29901;
if(cljs.core.truth_(inst_29888)){
var statearr_29908_29925 = state_29901__$1;
(statearr_29908_29925[(1)] = (8));

} else {
var statearr_29909_29926 = state_29901__$1;
(statearr_29909_29926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (3))){
var inst_29899 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29901__$1,inst_29899);
} else {
if((state_val_29902 === (2))){
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29901__$1,(4),ch);
} else {
if((state_val_29902 === (11))){
var inst_29891 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
var statearr_29910_29927 = state_29901__$1;
(statearr_29910_29927[(2)] = inst_29891);

(statearr_29910_29927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (9))){
var state_29901__$1 = state_29901;
var statearr_29911_29928 = state_29901__$1;
(statearr_29911_29928[(2)] = null);

(statearr_29911_29928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (5))){
var inst_29886 = cljs.core.async.close_BANG_.call(null,out);
var state_29901__$1 = state_29901;
var statearr_29912_29929 = state_29901__$1;
(statearr_29912_29929[(2)] = inst_29886);

(statearr_29912_29929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (10))){
var inst_29894 = (state_29901[(2)]);
var state_29901__$1 = (function (){var statearr_29913 = state_29901;
(statearr_29913[(8)] = inst_29894);

return statearr_29913;
})();
var statearr_29914_29930 = state_29901__$1;
(statearr_29914_29930[(2)] = null);

(statearr_29914_29930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (8))){
var inst_29883 = (state_29901[(7)]);
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29901__$1,(11),out,inst_29883);
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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_29915 = [null,null,null,null,null,null,null,null,null];
(statearr_29915[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_29915[(1)] = (1));

return statearr_29915;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_29901){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e29916){if((e29916 instanceof Object)){
var ex__28277__auto__ = e29916;
var statearr_29917_29931 = state_29901;
(statearr_29917_29931[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29932 = state_29901;
state_29901 = G__29932;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_29901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_29901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_29918 = f__28369__auto__.call(null);
(statearr_29918[(6)] = c__28368__auto___29920);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29934 = arguments.length;
switch (G__29934) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_29997){
var state_val_29998 = (state_29997[(1)]);
if((state_val_29998 === (7))){
var inst_29993 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_29999_30037 = state_29997__$1;
(statearr_29999_30037[(2)] = inst_29993);

(statearr_29999_30037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (20))){
var inst_29963 = (state_29997[(7)]);
var inst_29974 = (state_29997[(2)]);
var inst_29975 = cljs.core.next.call(null,inst_29963);
var inst_29949 = inst_29975;
var inst_29950 = null;
var inst_29951 = (0);
var inst_29952 = (0);
var state_29997__$1 = (function (){var statearr_30000 = state_29997;
(statearr_30000[(8)] = inst_29974);

(statearr_30000[(9)] = inst_29950);

(statearr_30000[(10)] = inst_29951);

(statearr_30000[(11)] = inst_29949);

(statearr_30000[(12)] = inst_29952);

return statearr_30000;
})();
var statearr_30001_30038 = state_29997__$1;
(statearr_30001_30038[(2)] = null);

(statearr_30001_30038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (1))){
var state_29997__$1 = state_29997;
var statearr_30002_30039 = state_29997__$1;
(statearr_30002_30039[(2)] = null);

(statearr_30002_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (4))){
var inst_29938 = (state_29997[(13)]);
var inst_29938__$1 = (state_29997[(2)]);
var inst_29939 = (inst_29938__$1 == null);
var state_29997__$1 = (function (){var statearr_30003 = state_29997;
(statearr_30003[(13)] = inst_29938__$1);

return statearr_30003;
})();
if(cljs.core.truth_(inst_29939)){
var statearr_30004_30040 = state_29997__$1;
(statearr_30004_30040[(1)] = (5));

} else {
var statearr_30005_30041 = state_29997__$1;
(statearr_30005_30041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (15))){
var state_29997__$1 = state_29997;
var statearr_30009_30042 = state_29997__$1;
(statearr_30009_30042[(2)] = null);

(statearr_30009_30042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (21))){
var state_29997__$1 = state_29997;
var statearr_30010_30043 = state_29997__$1;
(statearr_30010_30043[(2)] = null);

(statearr_30010_30043[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (13))){
var inst_29950 = (state_29997[(9)]);
var inst_29951 = (state_29997[(10)]);
var inst_29949 = (state_29997[(11)]);
var inst_29952 = (state_29997[(12)]);
var inst_29959 = (state_29997[(2)]);
var inst_29960 = (inst_29952 + (1));
var tmp30006 = inst_29950;
var tmp30007 = inst_29951;
var tmp30008 = inst_29949;
var inst_29949__$1 = tmp30008;
var inst_29950__$1 = tmp30006;
var inst_29951__$1 = tmp30007;
var inst_29952__$1 = inst_29960;
var state_29997__$1 = (function (){var statearr_30011 = state_29997;
(statearr_30011[(14)] = inst_29959);

(statearr_30011[(9)] = inst_29950__$1);

(statearr_30011[(10)] = inst_29951__$1);

(statearr_30011[(11)] = inst_29949__$1);

(statearr_30011[(12)] = inst_29952__$1);

return statearr_30011;
})();
var statearr_30012_30044 = state_29997__$1;
(statearr_30012_30044[(2)] = null);

(statearr_30012_30044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (22))){
var state_29997__$1 = state_29997;
var statearr_30013_30045 = state_29997__$1;
(statearr_30013_30045[(2)] = null);

(statearr_30013_30045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (6))){
var inst_29938 = (state_29997[(13)]);
var inst_29947 = f.call(null,inst_29938);
var inst_29948 = cljs.core.seq.call(null,inst_29947);
var inst_29949 = inst_29948;
var inst_29950 = null;
var inst_29951 = (0);
var inst_29952 = (0);
var state_29997__$1 = (function (){var statearr_30014 = state_29997;
(statearr_30014[(9)] = inst_29950);

(statearr_30014[(10)] = inst_29951);

(statearr_30014[(11)] = inst_29949);

(statearr_30014[(12)] = inst_29952);

return statearr_30014;
})();
var statearr_30015_30046 = state_29997__$1;
(statearr_30015_30046[(2)] = null);

(statearr_30015_30046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (17))){
var inst_29963 = (state_29997[(7)]);
var inst_29967 = cljs.core.chunk_first.call(null,inst_29963);
var inst_29968 = cljs.core.chunk_rest.call(null,inst_29963);
var inst_29969 = cljs.core.count.call(null,inst_29967);
var inst_29949 = inst_29968;
var inst_29950 = inst_29967;
var inst_29951 = inst_29969;
var inst_29952 = (0);
var state_29997__$1 = (function (){var statearr_30016 = state_29997;
(statearr_30016[(9)] = inst_29950);

(statearr_30016[(10)] = inst_29951);

(statearr_30016[(11)] = inst_29949);

(statearr_30016[(12)] = inst_29952);

return statearr_30016;
})();
var statearr_30017_30047 = state_29997__$1;
(statearr_30017_30047[(2)] = null);

(statearr_30017_30047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (3))){
var inst_29995 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29997__$1,inst_29995);
} else {
if((state_val_29998 === (12))){
var inst_29983 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30018_30048 = state_29997__$1;
(statearr_30018_30048[(2)] = inst_29983);

(statearr_30018_30048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (2))){
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29997__$1,(4),in$);
} else {
if((state_val_29998 === (23))){
var inst_29991 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30019_30049 = state_29997__$1;
(statearr_30019_30049[(2)] = inst_29991);

(statearr_30019_30049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (19))){
var inst_29978 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30020_30050 = state_29997__$1;
(statearr_30020_30050[(2)] = inst_29978);

(statearr_30020_30050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (11))){
var inst_29949 = (state_29997[(11)]);
var inst_29963 = (state_29997[(7)]);
var inst_29963__$1 = cljs.core.seq.call(null,inst_29949);
var state_29997__$1 = (function (){var statearr_30021 = state_29997;
(statearr_30021[(7)] = inst_29963__$1);

return statearr_30021;
})();
if(inst_29963__$1){
var statearr_30022_30051 = state_29997__$1;
(statearr_30022_30051[(1)] = (14));

} else {
var statearr_30023_30052 = state_29997__$1;
(statearr_30023_30052[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (9))){
var inst_29985 = (state_29997[(2)]);
var inst_29986 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29997__$1 = (function (){var statearr_30024 = state_29997;
(statearr_30024[(15)] = inst_29985);

return statearr_30024;
})();
if(cljs.core.truth_(inst_29986)){
var statearr_30025_30053 = state_29997__$1;
(statearr_30025_30053[(1)] = (21));

} else {
var statearr_30026_30054 = state_29997__$1;
(statearr_30026_30054[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (5))){
var inst_29941 = cljs.core.async.close_BANG_.call(null,out);
var state_29997__$1 = state_29997;
var statearr_30027_30055 = state_29997__$1;
(statearr_30027_30055[(2)] = inst_29941);

(statearr_30027_30055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (14))){
var inst_29963 = (state_29997[(7)]);
var inst_29965 = cljs.core.chunked_seq_QMARK_.call(null,inst_29963);
var state_29997__$1 = state_29997;
if(inst_29965){
var statearr_30028_30056 = state_29997__$1;
(statearr_30028_30056[(1)] = (17));

} else {
var statearr_30029_30057 = state_29997__$1;
(statearr_30029_30057[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (16))){
var inst_29981 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_30030_30058 = state_29997__$1;
(statearr_30030_30058[(2)] = inst_29981);

(statearr_30030_30058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (10))){
var inst_29950 = (state_29997[(9)]);
var inst_29952 = (state_29997[(12)]);
var inst_29957 = cljs.core._nth.call(null,inst_29950,inst_29952);
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29997__$1,(13),out,inst_29957);
} else {
if((state_val_29998 === (18))){
var inst_29963 = (state_29997[(7)]);
var inst_29972 = cljs.core.first.call(null,inst_29963);
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29997__$1,(20),out,inst_29972);
} else {
if((state_val_29998 === (8))){
var inst_29951 = (state_29997[(10)]);
var inst_29952 = (state_29997[(12)]);
var inst_29954 = (inst_29952 < inst_29951);
var inst_29955 = inst_29954;
var state_29997__$1 = state_29997;
if(cljs.core.truth_(inst_29955)){
var statearr_30031_30059 = state_29997__$1;
(statearr_30031_30059[(1)] = (10));

} else {
var statearr_30032_30060 = state_29997__$1;
(statearr_30032_30060[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28274__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28274__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28274__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28274__auto____1 = (function (state_29997){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_29997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__28277__auto__ = e30034;
var statearr_30035_30061 = state_29997;
(statearr_30035_30061[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30062 = state_29997;
state_29997 = G__30062;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28274__auto__ = function(state_29997){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28274__auto____1.call(this,state_29997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28274__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28274__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_30036 = f__28369__auto__.call(null);
(statearr_30036[(6)] = c__28368__auto__);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30064 = arguments.length;
switch (G__30064) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30067 = arguments.length;
switch (G__30067) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30070 = arguments.length;
switch (G__30070) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28368__auto___30117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_30094){
var state_val_30095 = (state_30094[(1)]);
if((state_val_30095 === (7))){
var inst_30089 = (state_30094[(2)]);
var state_30094__$1 = state_30094;
var statearr_30096_30118 = state_30094__$1;
(statearr_30096_30118[(2)] = inst_30089);

(statearr_30096_30118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (1))){
var inst_30071 = null;
var state_30094__$1 = (function (){var statearr_30097 = state_30094;
(statearr_30097[(7)] = inst_30071);

return statearr_30097;
})();
var statearr_30098_30119 = state_30094__$1;
(statearr_30098_30119[(2)] = null);

(statearr_30098_30119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (4))){
var inst_30074 = (state_30094[(8)]);
var inst_30074__$1 = (state_30094[(2)]);
var inst_30075 = (inst_30074__$1 == null);
var inst_30076 = cljs.core.not.call(null,inst_30075);
var state_30094__$1 = (function (){var statearr_30099 = state_30094;
(statearr_30099[(8)] = inst_30074__$1);

return statearr_30099;
})();
if(inst_30076){
var statearr_30100_30120 = state_30094__$1;
(statearr_30100_30120[(1)] = (5));

} else {
var statearr_30101_30121 = state_30094__$1;
(statearr_30101_30121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (6))){
var state_30094__$1 = state_30094;
var statearr_30102_30122 = state_30094__$1;
(statearr_30102_30122[(2)] = null);

(statearr_30102_30122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (3))){
var inst_30091 = (state_30094[(2)]);
var inst_30092 = cljs.core.async.close_BANG_.call(null,out);
var state_30094__$1 = (function (){var statearr_30103 = state_30094;
(statearr_30103[(9)] = inst_30091);

return statearr_30103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30094__$1,inst_30092);
} else {
if((state_val_30095 === (2))){
var state_30094__$1 = state_30094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30094__$1,(4),ch);
} else {
if((state_val_30095 === (11))){
var inst_30074 = (state_30094[(8)]);
var inst_30083 = (state_30094[(2)]);
var inst_30071 = inst_30074;
var state_30094__$1 = (function (){var statearr_30104 = state_30094;
(statearr_30104[(7)] = inst_30071);

(statearr_30104[(10)] = inst_30083);

return statearr_30104;
})();
var statearr_30105_30123 = state_30094__$1;
(statearr_30105_30123[(2)] = null);

(statearr_30105_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (9))){
var inst_30074 = (state_30094[(8)]);
var state_30094__$1 = state_30094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30094__$1,(11),out,inst_30074);
} else {
if((state_val_30095 === (5))){
var inst_30071 = (state_30094[(7)]);
var inst_30074 = (state_30094[(8)]);
var inst_30078 = cljs.core._EQ_.call(null,inst_30074,inst_30071);
var state_30094__$1 = state_30094;
if(inst_30078){
var statearr_30107_30124 = state_30094__$1;
(statearr_30107_30124[(1)] = (8));

} else {
var statearr_30108_30125 = state_30094__$1;
(statearr_30108_30125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (10))){
var inst_30086 = (state_30094[(2)]);
var state_30094__$1 = state_30094;
var statearr_30109_30126 = state_30094__$1;
(statearr_30109_30126[(2)] = inst_30086);

(statearr_30109_30126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (8))){
var inst_30071 = (state_30094[(7)]);
var tmp30106 = inst_30071;
var inst_30071__$1 = tmp30106;
var state_30094__$1 = (function (){var statearr_30110 = state_30094;
(statearr_30110[(7)] = inst_30071__$1);

return statearr_30110;
})();
var statearr_30111_30127 = state_30094__$1;
(statearr_30111_30127[(2)] = null);

(statearr_30111_30127[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_30112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30112[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_30112[(1)] = (1));

return statearr_30112;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_30094){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_30094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e30113){if((e30113 instanceof Object)){
var ex__28277__auto__ = e30113;
var statearr_30114_30128 = state_30094;
(statearr_30114_30128[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30129 = state_30094;
state_30094 = G__30129;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_30094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_30094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_30115 = f__28369__auto__.call(null);
(statearr_30115[(6)] = c__28368__auto___30117);

return statearr_30115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30131 = arguments.length;
switch (G__30131) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28368__auto___30197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_30169){
var state_val_30170 = (state_30169[(1)]);
if((state_val_30170 === (7))){
var inst_30165 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30171_30198 = state_30169__$1;
(statearr_30171_30198[(2)] = inst_30165);

(statearr_30171_30198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (1))){
var inst_30132 = (new Array(n));
var inst_30133 = inst_30132;
var inst_30134 = (0);
var state_30169__$1 = (function (){var statearr_30172 = state_30169;
(statearr_30172[(7)] = inst_30134);

(statearr_30172[(8)] = inst_30133);

return statearr_30172;
})();
var statearr_30173_30199 = state_30169__$1;
(statearr_30173_30199[(2)] = null);

(statearr_30173_30199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (4))){
var inst_30137 = (state_30169[(9)]);
var inst_30137__$1 = (state_30169[(2)]);
var inst_30138 = (inst_30137__$1 == null);
var inst_30139 = cljs.core.not.call(null,inst_30138);
var state_30169__$1 = (function (){var statearr_30174 = state_30169;
(statearr_30174[(9)] = inst_30137__$1);

return statearr_30174;
})();
if(inst_30139){
var statearr_30175_30200 = state_30169__$1;
(statearr_30175_30200[(1)] = (5));

} else {
var statearr_30176_30201 = state_30169__$1;
(statearr_30176_30201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (15))){
var inst_30159 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30177_30202 = state_30169__$1;
(statearr_30177_30202[(2)] = inst_30159);

(statearr_30177_30202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (13))){
var state_30169__$1 = state_30169;
var statearr_30178_30203 = state_30169__$1;
(statearr_30178_30203[(2)] = null);

(statearr_30178_30203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (6))){
var inst_30134 = (state_30169[(7)]);
var inst_30155 = (inst_30134 > (0));
var state_30169__$1 = state_30169;
if(cljs.core.truth_(inst_30155)){
var statearr_30179_30204 = state_30169__$1;
(statearr_30179_30204[(1)] = (12));

} else {
var statearr_30180_30205 = state_30169__$1;
(statearr_30180_30205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (3))){
var inst_30167 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30169__$1,inst_30167);
} else {
if((state_val_30170 === (12))){
var inst_30133 = (state_30169[(8)]);
var inst_30157 = cljs.core.vec.call(null,inst_30133);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(15),out,inst_30157);
} else {
if((state_val_30170 === (2))){
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(4),ch);
} else {
if((state_val_30170 === (11))){
var inst_30149 = (state_30169[(2)]);
var inst_30150 = (new Array(n));
var inst_30133 = inst_30150;
var inst_30134 = (0);
var state_30169__$1 = (function (){var statearr_30181 = state_30169;
(statearr_30181[(10)] = inst_30149);

(statearr_30181[(7)] = inst_30134);

(statearr_30181[(8)] = inst_30133);

return statearr_30181;
})();
var statearr_30182_30206 = state_30169__$1;
(statearr_30182_30206[(2)] = null);

(statearr_30182_30206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (9))){
var inst_30133 = (state_30169[(8)]);
var inst_30147 = cljs.core.vec.call(null,inst_30133);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(11),out,inst_30147);
} else {
if((state_val_30170 === (5))){
var inst_30142 = (state_30169[(11)]);
var inst_30134 = (state_30169[(7)]);
var inst_30137 = (state_30169[(9)]);
var inst_30133 = (state_30169[(8)]);
var inst_30141 = (inst_30133[inst_30134] = inst_30137);
var inst_30142__$1 = (inst_30134 + (1));
var inst_30143 = (inst_30142__$1 < n);
var state_30169__$1 = (function (){var statearr_30183 = state_30169;
(statearr_30183[(11)] = inst_30142__$1);

(statearr_30183[(12)] = inst_30141);

return statearr_30183;
})();
if(cljs.core.truth_(inst_30143)){
var statearr_30184_30207 = state_30169__$1;
(statearr_30184_30207[(1)] = (8));

} else {
var statearr_30185_30208 = state_30169__$1;
(statearr_30185_30208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (14))){
var inst_30162 = (state_30169[(2)]);
var inst_30163 = cljs.core.async.close_BANG_.call(null,out);
var state_30169__$1 = (function (){var statearr_30187 = state_30169;
(statearr_30187[(13)] = inst_30162);

return statearr_30187;
})();
var statearr_30188_30209 = state_30169__$1;
(statearr_30188_30209[(2)] = inst_30163);

(statearr_30188_30209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (10))){
var inst_30153 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30189_30210 = state_30169__$1;
(statearr_30189_30210[(2)] = inst_30153);

(statearr_30189_30210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (8))){
var inst_30142 = (state_30169[(11)]);
var inst_30133 = (state_30169[(8)]);
var tmp30186 = inst_30133;
var inst_30133__$1 = tmp30186;
var inst_30134 = inst_30142;
var state_30169__$1 = (function (){var statearr_30190 = state_30169;
(statearr_30190[(7)] = inst_30134);

(statearr_30190[(8)] = inst_30133__$1);

return statearr_30190;
})();
var statearr_30191_30211 = state_30169__$1;
(statearr_30191_30211[(2)] = null);

(statearr_30191_30211[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_30192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30192[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_30192[(1)] = (1));

return statearr_30192;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_30169){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_30169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e30193){if((e30193 instanceof Object)){
var ex__28277__auto__ = e30193;
var statearr_30194_30212 = state_30169;
(statearr_30194_30212[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30213 = state_30169;
state_30169 = G__30213;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_30169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_30169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_30195 = f__28369__auto__.call(null);
(statearr_30195[(6)] = c__28368__auto___30197);

return statearr_30195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30215 = arguments.length;
switch (G__30215) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28368__auto___30285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_30257){
var state_val_30258 = (state_30257[(1)]);
if((state_val_30258 === (7))){
var inst_30253 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30259_30286 = state_30257__$1;
(statearr_30259_30286[(2)] = inst_30253);

(statearr_30259_30286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (1))){
var inst_30216 = [];
var inst_30217 = inst_30216;
var inst_30218 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30257__$1 = (function (){var statearr_30260 = state_30257;
(statearr_30260[(7)] = inst_30218);

(statearr_30260[(8)] = inst_30217);

return statearr_30260;
})();
var statearr_30261_30287 = state_30257__$1;
(statearr_30261_30287[(2)] = null);

(statearr_30261_30287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (4))){
var inst_30221 = (state_30257[(9)]);
var inst_30221__$1 = (state_30257[(2)]);
var inst_30222 = (inst_30221__$1 == null);
var inst_30223 = cljs.core.not.call(null,inst_30222);
var state_30257__$1 = (function (){var statearr_30262 = state_30257;
(statearr_30262[(9)] = inst_30221__$1);

return statearr_30262;
})();
if(inst_30223){
var statearr_30263_30288 = state_30257__$1;
(statearr_30263_30288[(1)] = (5));

} else {
var statearr_30264_30289 = state_30257__$1;
(statearr_30264_30289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (15))){
var inst_30247 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30265_30290 = state_30257__$1;
(statearr_30265_30290[(2)] = inst_30247);

(statearr_30265_30290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (13))){
var state_30257__$1 = state_30257;
var statearr_30266_30291 = state_30257__$1;
(statearr_30266_30291[(2)] = null);

(statearr_30266_30291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (6))){
var inst_30217 = (state_30257[(8)]);
var inst_30242 = inst_30217.length;
var inst_30243 = (inst_30242 > (0));
var state_30257__$1 = state_30257;
if(cljs.core.truth_(inst_30243)){
var statearr_30267_30292 = state_30257__$1;
(statearr_30267_30292[(1)] = (12));

} else {
var statearr_30268_30293 = state_30257__$1;
(statearr_30268_30293[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (3))){
var inst_30255 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30257__$1,inst_30255);
} else {
if((state_val_30258 === (12))){
var inst_30217 = (state_30257[(8)]);
var inst_30245 = cljs.core.vec.call(null,inst_30217);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30257__$1,(15),out,inst_30245);
} else {
if((state_val_30258 === (2))){
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30257__$1,(4),ch);
} else {
if((state_val_30258 === (11))){
var inst_30221 = (state_30257[(9)]);
var inst_30225 = (state_30257[(10)]);
var inst_30235 = (state_30257[(2)]);
var inst_30236 = [];
var inst_30237 = inst_30236.push(inst_30221);
var inst_30217 = inst_30236;
var inst_30218 = inst_30225;
var state_30257__$1 = (function (){var statearr_30269 = state_30257;
(statearr_30269[(7)] = inst_30218);

(statearr_30269[(11)] = inst_30235);

(statearr_30269[(8)] = inst_30217);

(statearr_30269[(12)] = inst_30237);

return statearr_30269;
})();
var statearr_30270_30294 = state_30257__$1;
(statearr_30270_30294[(2)] = null);

(statearr_30270_30294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (9))){
var inst_30217 = (state_30257[(8)]);
var inst_30233 = cljs.core.vec.call(null,inst_30217);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30257__$1,(11),out,inst_30233);
} else {
if((state_val_30258 === (5))){
var inst_30218 = (state_30257[(7)]);
var inst_30221 = (state_30257[(9)]);
var inst_30225 = (state_30257[(10)]);
var inst_30225__$1 = f.call(null,inst_30221);
var inst_30226 = cljs.core._EQ_.call(null,inst_30225__$1,inst_30218);
var inst_30227 = cljs.core.keyword_identical_QMARK_.call(null,inst_30218,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30228 = ((inst_30226) || (inst_30227));
var state_30257__$1 = (function (){var statearr_30271 = state_30257;
(statearr_30271[(10)] = inst_30225__$1);

return statearr_30271;
})();
if(cljs.core.truth_(inst_30228)){
var statearr_30272_30295 = state_30257__$1;
(statearr_30272_30295[(1)] = (8));

} else {
var statearr_30273_30296 = state_30257__$1;
(statearr_30273_30296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (14))){
var inst_30250 = (state_30257[(2)]);
var inst_30251 = cljs.core.async.close_BANG_.call(null,out);
var state_30257__$1 = (function (){var statearr_30275 = state_30257;
(statearr_30275[(13)] = inst_30250);

return statearr_30275;
})();
var statearr_30276_30297 = state_30257__$1;
(statearr_30276_30297[(2)] = inst_30251);

(statearr_30276_30297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (10))){
var inst_30240 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30277_30298 = state_30257__$1;
(statearr_30277_30298[(2)] = inst_30240);

(statearr_30277_30298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (8))){
var inst_30221 = (state_30257[(9)]);
var inst_30217 = (state_30257[(8)]);
var inst_30225 = (state_30257[(10)]);
var inst_30230 = inst_30217.push(inst_30221);
var tmp30274 = inst_30217;
var inst_30217__$1 = tmp30274;
var inst_30218 = inst_30225;
var state_30257__$1 = (function (){var statearr_30278 = state_30257;
(statearr_30278[(7)] = inst_30218);

(statearr_30278[(14)] = inst_30230);

(statearr_30278[(8)] = inst_30217__$1);

return statearr_30278;
})();
var statearr_30279_30299 = state_30257__$1;
(statearr_30279_30299[(2)] = null);

(statearr_30279_30299[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28274__auto__ = null;
var cljs$core$async$state_machine__28274__auto____0 = (function (){
var statearr_30280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30280[(0)] = cljs$core$async$state_machine__28274__auto__);

(statearr_30280[(1)] = (1));

return statearr_30280;
});
var cljs$core$async$state_machine__28274__auto____1 = (function (state_30257){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_30257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e30281){if((e30281 instanceof Object)){
var ex__28277__auto__ = e30281;
var statearr_30282_30300 = state_30257;
(statearr_30282_30300[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30301 = state_30257;
state_30257 = G__30301;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
cljs$core$async$state_machine__28274__auto__ = function(state_30257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28274__auto____1.call(this,state_30257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28274__auto____0;
cljs$core$async$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28274__auto____1;
return cljs$core$async$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_30283 = f__28369__auto__.call(null);
(statearr_30283[(6)] = c__28368__auto___30285);

return statearr_30283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1627930536077

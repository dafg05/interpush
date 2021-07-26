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
var G__34905 = arguments.length;
switch (G__34905) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34906 = (function (f,blockable,meta34907){
this.f = f;
this.blockable = blockable;
this.meta34907 = meta34907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34908,meta34907__$1){
var self__ = this;
var _34908__$1 = this;
return (new cljs.core.async.t_cljs$core$async34906(self__.f,self__.blockable,meta34907__$1));
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34908){
var self__ = this;
var _34908__$1 = this;
return self__.meta34907;
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34907","meta34907",-2089684560,null)], null);
}));

(cljs.core.async.t_cljs$core$async34906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34906");

(cljs.core.async.t_cljs$core$async34906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34906.
 */
cljs.core.async.__GT_t_cljs$core$async34906 = (function cljs$core$async$__GT_t_cljs$core$async34906(f__$1,blockable__$1,meta34907){
return (new cljs.core.async.t_cljs$core$async34906(f__$1,blockable__$1,meta34907));
});

}

return (new cljs.core.async.t_cljs$core$async34906(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34912 = arguments.length;
switch (G__34912) {
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
var G__34915 = arguments.length;
switch (G__34915) {
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
var G__34918 = arguments.length;
switch (G__34918) {
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
var val_34920 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34920);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_34920);
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
var G__34922 = arguments.length;
switch (G__34922) {
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
var n__4613__auto___34924 = n;
var x_34925 = (0);
while(true){
if((x_34925 < n__4613__auto___34924)){
(a[x_34925] = (0));

var G__34926 = (x_34925 + (1));
x_34925 = G__34926;
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

var G__34927 = (i + (1));
i = G__34927;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34928 = (function (flag,meta34929){
this.flag = flag;
this.meta34929 = meta34929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34930,meta34929__$1){
var self__ = this;
var _34930__$1 = this;
return (new cljs.core.async.t_cljs$core$async34928(self__.flag,meta34929__$1));
}));

(cljs.core.async.t_cljs$core$async34928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34930){
var self__ = this;
var _34930__$1 = this;
return self__.meta34929;
}));

(cljs.core.async.t_cljs$core$async34928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async34928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34929","meta34929",-2035233968,null)], null);
}));

(cljs.core.async.t_cljs$core$async34928.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34928");

(cljs.core.async.t_cljs$core$async34928.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34928");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34928.
 */
cljs.core.async.__GT_t_cljs$core$async34928 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34928(flag__$1,meta34929){
return (new cljs.core.async.t_cljs$core$async34928(flag__$1,meta34929));
});

}

return (new cljs.core.async.t_cljs$core$async34928(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34931 = (function (flag,cb,meta34932){
this.flag = flag;
this.cb = cb;
this.meta34932 = meta34932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34933,meta34932__$1){
var self__ = this;
var _34933__$1 = this;
return (new cljs.core.async.t_cljs$core$async34931(self__.flag,self__.cb,meta34932__$1));
}));

(cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34933){
var self__ = this;
var _34933__$1 = this;
return self__.meta34932;
}));

(cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34932","meta34932",2089726147,null)], null);
}));

(cljs.core.async.t_cljs$core$async34931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34931");

(cljs.core.async.t_cljs$core$async34931.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34931.
 */
cljs.core.async.__GT_t_cljs$core$async34931 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34931(flag__$1,cb__$1,meta34932){
return (new cljs.core.async.t_cljs$core$async34931(flag__$1,cb__$1,meta34932));
});

}

return (new cljs.core.async.t_cljs$core$async34931(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34934_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34934_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34935_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34935_SHARP_,port], null));
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
var G__34936 = (i + (1));
i = G__34936;
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
var len__4736__auto___34942 = arguments.length;
var i__4737__auto___34943 = (0);
while(true){
if((i__4737__auto___34943 < len__4736__auto___34942)){
args__4742__auto__.push((arguments[i__4737__auto___34943]));

var G__34944 = (i__4737__auto___34943 + (1));
i__4737__auto___34943 = G__34944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34939){
var map__34940 = p__34939;
var map__34940__$1 = (((((!((map__34940 == null))))?(((((map__34940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34940):map__34940);
var opts = map__34940__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34937){
var G__34938 = cljs.core.first.call(null,seq34937);
var seq34937__$1 = cljs.core.next.call(null,seq34937);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34938,seq34937__$1);
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
var G__34946 = arguments.length;
switch (G__34946) {
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
var c__34845__auto___34992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_34970){
var state_val_34971 = (state_34970[(1)]);
if((state_val_34971 === (7))){
var inst_34966 = (state_34970[(2)]);
var state_34970__$1 = state_34970;
var statearr_34972_34993 = state_34970__$1;
(statearr_34972_34993[(2)] = inst_34966);

(statearr_34972_34993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (1))){
var state_34970__$1 = state_34970;
var statearr_34973_34994 = state_34970__$1;
(statearr_34973_34994[(2)] = null);

(statearr_34973_34994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (4))){
var inst_34949 = (state_34970[(7)]);
var inst_34949__$1 = (state_34970[(2)]);
var inst_34950 = (inst_34949__$1 == null);
var state_34970__$1 = (function (){var statearr_34974 = state_34970;
(statearr_34974[(7)] = inst_34949__$1);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34950)){
var statearr_34975_34995 = state_34970__$1;
(statearr_34975_34995[(1)] = (5));

} else {
var statearr_34976_34996 = state_34970__$1;
(statearr_34976_34996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (13))){
var state_34970__$1 = state_34970;
var statearr_34977_34997 = state_34970__$1;
(statearr_34977_34997[(2)] = null);

(statearr_34977_34997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (6))){
var inst_34949 = (state_34970[(7)]);
var state_34970__$1 = state_34970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34970__$1,(11),to,inst_34949);
} else {
if((state_val_34971 === (3))){
var inst_34968 = (state_34970[(2)]);
var state_34970__$1 = state_34970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34970__$1,inst_34968);
} else {
if((state_val_34971 === (12))){
var state_34970__$1 = state_34970;
var statearr_34978_34998 = state_34970__$1;
(statearr_34978_34998[(2)] = null);

(statearr_34978_34998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (2))){
var state_34970__$1 = state_34970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34970__$1,(4),from);
} else {
if((state_val_34971 === (11))){
var inst_34959 = (state_34970[(2)]);
var state_34970__$1 = state_34970;
if(cljs.core.truth_(inst_34959)){
var statearr_34979_34999 = state_34970__$1;
(statearr_34979_34999[(1)] = (12));

} else {
var statearr_34980_35000 = state_34970__$1;
(statearr_34980_35000[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (9))){
var state_34970__$1 = state_34970;
var statearr_34981_35001 = state_34970__$1;
(statearr_34981_35001[(2)] = null);

(statearr_34981_35001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (5))){
var state_34970__$1 = state_34970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34982_35002 = state_34970__$1;
(statearr_34982_35002[(1)] = (8));

} else {
var statearr_34983_35003 = state_34970__$1;
(statearr_34983_35003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (14))){
var inst_34964 = (state_34970[(2)]);
var state_34970__$1 = state_34970;
var statearr_34984_35004 = state_34970__$1;
(statearr_34984_35004[(2)] = inst_34964);

(statearr_34984_35004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (10))){
var inst_34956 = (state_34970[(2)]);
var state_34970__$1 = state_34970;
var statearr_34985_35005 = state_34970__$1;
(statearr_34985_35005[(2)] = inst_34956);

(statearr_34985_35005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (8))){
var inst_34953 = cljs.core.async.close_BANG_.call(null,to);
var state_34970__$1 = state_34970;
var statearr_34986_35006 = state_34970__$1;
(statearr_34986_35006[(2)] = inst_34953);

(statearr_34986_35006[(1)] = (10));


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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_34987 = [null,null,null,null,null,null,null,null];
(statearr_34987[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_34987[(1)] = (1));

return statearr_34987;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_34970){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_34970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e34988){if((e34988 instanceof Object)){
var ex__34754__auto__ = e34988;
var statearr_34989_35007 = state_34970;
(statearr_34989_35007[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35008 = state_34970;
state_34970 = G__35008;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_34970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_34970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_34990 = f__34846__auto__.call(null);
(statearr_34990[(6)] = c__34845__auto___34992);

return statearr_34990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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
var process = (function (p__35009){
var vec__35010 = p__35009;
var v = cljs.core.nth.call(null,vec__35010,(0),null);
var p = cljs.core.nth.call(null,vec__35010,(1),null);
var job = vec__35010;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34845__auto___35181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35017){
var state_val_35018 = (state_35017[(1)]);
if((state_val_35018 === (1))){
var state_35017__$1 = state_35017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35017__$1,(2),res,v);
} else {
if((state_val_35018 === (2))){
var inst_35014 = (state_35017[(2)]);
var inst_35015 = cljs.core.async.close_BANG_.call(null,res);
var state_35017__$1 = (function (){var statearr_35019 = state_35017;
(statearr_35019[(7)] = inst_35014);

return statearr_35019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35017__$1,inst_35015);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0 = (function (){
var statearr_35020 = [null,null,null,null,null,null,null,null];
(statearr_35020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__);

(statearr_35020[(1)] = (1));

return statearr_35020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1 = (function (state_35017){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35021){if((e35021 instanceof Object)){
var ex__34754__auto__ = e35021;
var statearr_35022_35182 = state_35017;
(statearr_35022_35182[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35183 = state_35017;
state_35017 = G__35183;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = function(state_35017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1.call(this,state_35017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35023 = f__34846__auto__.call(null);
(statearr_35023[(6)] = c__34845__auto___35181);

return statearr_35023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__35024){
var vec__35025 = p__35024;
var v = cljs.core.nth.call(null,vec__35025,(0),null);
var p = cljs.core.nth.call(null,vec__35025,(1),null);
var job = vec__35025;
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
var n__4613__auto___35184 = n;
var __35185 = (0);
while(true){
if((__35185 < n__4613__auto___35184)){
var G__35028_35186 = type;
var G__35028_35187__$1 = (((G__35028_35186 instanceof cljs.core.Keyword))?G__35028_35186.fqn:null);
switch (G__35028_35187__$1) {
case "compute":
var c__34845__auto___35189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35185,c__34845__auto___35189,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async){
return (function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = ((function (__35185,c__34845__auto___35189,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async){
return (function (state_35041){
var state_val_35042 = (state_35041[(1)]);
if((state_val_35042 === (1))){
var state_35041__$1 = state_35041;
var statearr_35043_35190 = state_35041__$1;
(statearr_35043_35190[(2)] = null);

(statearr_35043_35190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (2))){
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35041__$1,(4),jobs);
} else {
if((state_val_35042 === (3))){
var inst_35039 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35041__$1,inst_35039);
} else {
if((state_val_35042 === (4))){
var inst_35031 = (state_35041[(2)]);
var inst_35032 = process.call(null,inst_35031);
var state_35041__$1 = state_35041;
if(cljs.core.truth_(inst_35032)){
var statearr_35044_35191 = state_35041__$1;
(statearr_35044_35191[(1)] = (5));

} else {
var statearr_35045_35192 = state_35041__$1;
(statearr_35045_35192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (5))){
var state_35041__$1 = state_35041;
var statearr_35046_35193 = state_35041__$1;
(statearr_35046_35193[(2)] = null);

(statearr_35046_35193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (6))){
var state_35041__$1 = state_35041;
var statearr_35047_35194 = state_35041__$1;
(statearr_35047_35194[(2)] = null);

(statearr_35047_35194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (7))){
var inst_35037 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35048_35195 = state_35041__$1;
(statearr_35048_35195[(2)] = inst_35037);

(statearr_35048_35195[(1)] = (3));


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
});})(__35185,c__34845__auto___35189,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async))
;
return ((function (__35185,switch__34750__auto__,c__34845__auto___35189,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0 = (function (){
var statearr_35049 = [null,null,null,null,null,null,null];
(statearr_35049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__);

(statearr_35049[(1)] = (1));

return statearr_35049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1 = (function (state_35041){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35050){if((e35050 instanceof Object)){
var ex__34754__auto__ = e35050;
var statearr_35051_35196 = state_35041;
(statearr_35051_35196[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35197 = state_35041;
state_35041 = G__35197;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = function(state_35041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1.call(this,state_35041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__;
})()
;})(__35185,switch__34750__auto__,c__34845__auto___35189,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async))
})();
var state__34847__auto__ = (function (){var statearr_35052 = f__34846__auto__.call(null);
(statearr_35052[(6)] = c__34845__auto___35189);

return statearr_35052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
});})(__35185,c__34845__auto___35189,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async))
);


break;
case "async":
var c__34845__auto___35198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35185,c__34845__auto___35198,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async){
return (function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = ((function (__35185,c__34845__auto___35198,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async){
return (function (state_35065){
var state_val_35066 = (state_35065[(1)]);
if((state_val_35066 === (1))){
var state_35065__$1 = state_35065;
var statearr_35067_35199 = state_35065__$1;
(statearr_35067_35199[(2)] = null);

(statearr_35067_35199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35066 === (2))){
var state_35065__$1 = state_35065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35065__$1,(4),jobs);
} else {
if((state_val_35066 === (3))){
var inst_35063 = (state_35065[(2)]);
var state_35065__$1 = state_35065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35065__$1,inst_35063);
} else {
if((state_val_35066 === (4))){
var inst_35055 = (state_35065[(2)]);
var inst_35056 = async.call(null,inst_35055);
var state_35065__$1 = state_35065;
if(cljs.core.truth_(inst_35056)){
var statearr_35068_35200 = state_35065__$1;
(statearr_35068_35200[(1)] = (5));

} else {
var statearr_35069_35201 = state_35065__$1;
(statearr_35069_35201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35066 === (5))){
var state_35065__$1 = state_35065;
var statearr_35070_35202 = state_35065__$1;
(statearr_35070_35202[(2)] = null);

(statearr_35070_35202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35066 === (6))){
var state_35065__$1 = state_35065;
var statearr_35071_35203 = state_35065__$1;
(statearr_35071_35203[(2)] = null);

(statearr_35071_35203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35066 === (7))){
var inst_35061 = (state_35065[(2)]);
var state_35065__$1 = state_35065;
var statearr_35072_35204 = state_35065__$1;
(statearr_35072_35204[(2)] = inst_35061);

(statearr_35072_35204[(1)] = (3));


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
});})(__35185,c__34845__auto___35198,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async))
;
return ((function (__35185,switch__34750__auto__,c__34845__auto___35198,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0 = (function (){
var statearr_35073 = [null,null,null,null,null,null,null];
(statearr_35073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__);

(statearr_35073[(1)] = (1));

return statearr_35073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1 = (function (state_35065){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35074){if((e35074 instanceof Object)){
var ex__34754__auto__ = e35074;
var statearr_35075_35205 = state_35065;
(statearr_35075_35205[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35206 = state_35065;
state_35065 = G__35206;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = function(state_35065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1.call(this,state_35065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__;
})()
;})(__35185,switch__34750__auto__,c__34845__auto___35198,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async))
})();
var state__34847__auto__ = (function (){var statearr_35076 = f__34846__auto__.call(null);
(statearr_35076[(6)] = c__34845__auto___35198);

return statearr_35076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
});})(__35185,c__34845__auto___35198,G__35028_35186,G__35028_35187__$1,n__4613__auto___35184,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35028_35187__$1)].join('')));

}

var G__35207 = (__35185 + (1));
__35185 = G__35207;
continue;
} else {
}
break;
}

var c__34845__auto___35208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35098){
var state_val_35099 = (state_35098[(1)]);
if((state_val_35099 === (7))){
var inst_35094 = (state_35098[(2)]);
var state_35098__$1 = state_35098;
var statearr_35100_35209 = state_35098__$1;
(statearr_35100_35209[(2)] = inst_35094);

(statearr_35100_35209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (1))){
var state_35098__$1 = state_35098;
var statearr_35101_35210 = state_35098__$1;
(statearr_35101_35210[(2)] = null);

(statearr_35101_35210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (4))){
var inst_35079 = (state_35098[(7)]);
var inst_35079__$1 = (state_35098[(2)]);
var inst_35080 = (inst_35079__$1 == null);
var state_35098__$1 = (function (){var statearr_35102 = state_35098;
(statearr_35102[(7)] = inst_35079__$1);

return statearr_35102;
})();
if(cljs.core.truth_(inst_35080)){
var statearr_35103_35211 = state_35098__$1;
(statearr_35103_35211[(1)] = (5));

} else {
var statearr_35104_35212 = state_35098__$1;
(statearr_35104_35212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (6))){
var inst_35084 = (state_35098[(8)]);
var inst_35079 = (state_35098[(7)]);
var inst_35084__$1 = cljs.core.async.chan.call(null,(1));
var inst_35085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35086 = [inst_35079,inst_35084__$1];
var inst_35087 = (new cljs.core.PersistentVector(null,2,(5),inst_35085,inst_35086,null));
var state_35098__$1 = (function (){var statearr_35105 = state_35098;
(statearr_35105[(8)] = inst_35084__$1);

return statearr_35105;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35098__$1,(8),jobs,inst_35087);
} else {
if((state_val_35099 === (3))){
var inst_35096 = (state_35098[(2)]);
var state_35098__$1 = state_35098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35098__$1,inst_35096);
} else {
if((state_val_35099 === (2))){
var state_35098__$1 = state_35098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35098__$1,(4),from);
} else {
if((state_val_35099 === (9))){
var inst_35091 = (state_35098[(2)]);
var state_35098__$1 = (function (){var statearr_35106 = state_35098;
(statearr_35106[(9)] = inst_35091);

return statearr_35106;
})();
var statearr_35107_35213 = state_35098__$1;
(statearr_35107_35213[(2)] = null);

(statearr_35107_35213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (5))){
var inst_35082 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35098__$1 = state_35098;
var statearr_35108_35214 = state_35098__$1;
(statearr_35108_35214[(2)] = inst_35082);

(statearr_35108_35214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (8))){
var inst_35084 = (state_35098[(8)]);
var inst_35089 = (state_35098[(2)]);
var state_35098__$1 = (function (){var statearr_35109 = state_35098;
(statearr_35109[(10)] = inst_35089);

return statearr_35109;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35098__$1,(9),results,inst_35084);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0 = (function (){
var statearr_35110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__);

(statearr_35110[(1)] = (1));

return statearr_35110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1 = (function (state_35098){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35111){if((e35111 instanceof Object)){
var ex__34754__auto__ = e35111;
var statearr_35112_35215 = state_35098;
(statearr_35112_35215[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35216 = state_35098;
state_35098 = G__35216;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = function(state_35098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1.call(this,state_35098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35113 = f__34846__auto__.call(null);
(statearr_35113[(6)] = c__34845__auto___35208);

return statearr_35113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35151){
var state_val_35152 = (state_35151[(1)]);
if((state_val_35152 === (7))){
var inst_35147 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35153_35217 = state_35151__$1;
(statearr_35153_35217[(2)] = inst_35147);

(statearr_35153_35217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (20))){
var state_35151__$1 = state_35151;
var statearr_35154_35218 = state_35151__$1;
(statearr_35154_35218[(2)] = null);

(statearr_35154_35218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (1))){
var state_35151__$1 = state_35151;
var statearr_35155_35219 = state_35151__$1;
(statearr_35155_35219[(2)] = null);

(statearr_35155_35219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (4))){
var inst_35116 = (state_35151[(7)]);
var inst_35116__$1 = (state_35151[(2)]);
var inst_35117 = (inst_35116__$1 == null);
var state_35151__$1 = (function (){var statearr_35156 = state_35151;
(statearr_35156[(7)] = inst_35116__$1);

return statearr_35156;
})();
if(cljs.core.truth_(inst_35117)){
var statearr_35157_35220 = state_35151__$1;
(statearr_35157_35220[(1)] = (5));

} else {
var statearr_35158_35221 = state_35151__$1;
(statearr_35158_35221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (15))){
var inst_35129 = (state_35151[(8)]);
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35151__$1,(18),to,inst_35129);
} else {
if((state_val_35152 === (21))){
var inst_35142 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35159_35222 = state_35151__$1;
(statearr_35159_35222[(2)] = inst_35142);

(statearr_35159_35222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (13))){
var inst_35144 = (state_35151[(2)]);
var state_35151__$1 = (function (){var statearr_35160 = state_35151;
(statearr_35160[(9)] = inst_35144);

return statearr_35160;
})();
var statearr_35161_35223 = state_35151__$1;
(statearr_35161_35223[(2)] = null);

(statearr_35161_35223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (6))){
var inst_35116 = (state_35151[(7)]);
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35151__$1,(11),inst_35116);
} else {
if((state_val_35152 === (17))){
var inst_35137 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
if(cljs.core.truth_(inst_35137)){
var statearr_35162_35224 = state_35151__$1;
(statearr_35162_35224[(1)] = (19));

} else {
var statearr_35163_35225 = state_35151__$1;
(statearr_35163_35225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (3))){
var inst_35149 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35151__$1,inst_35149);
} else {
if((state_val_35152 === (12))){
var inst_35126 = (state_35151[(10)]);
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35151__$1,(14),inst_35126);
} else {
if((state_val_35152 === (2))){
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35151__$1,(4),results);
} else {
if((state_val_35152 === (19))){
var state_35151__$1 = state_35151;
var statearr_35164_35226 = state_35151__$1;
(statearr_35164_35226[(2)] = null);

(statearr_35164_35226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (11))){
var inst_35126 = (state_35151[(2)]);
var state_35151__$1 = (function (){var statearr_35165 = state_35151;
(statearr_35165[(10)] = inst_35126);

return statearr_35165;
})();
var statearr_35166_35227 = state_35151__$1;
(statearr_35166_35227[(2)] = null);

(statearr_35166_35227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (9))){
var state_35151__$1 = state_35151;
var statearr_35167_35228 = state_35151__$1;
(statearr_35167_35228[(2)] = null);

(statearr_35167_35228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (5))){
var state_35151__$1 = state_35151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35168_35229 = state_35151__$1;
(statearr_35168_35229[(1)] = (8));

} else {
var statearr_35169_35230 = state_35151__$1;
(statearr_35169_35230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (14))){
var inst_35129 = (state_35151[(8)]);
var inst_35129__$1 = (state_35151[(2)]);
var inst_35130 = (inst_35129__$1 == null);
var inst_35131 = cljs.core.not.call(null,inst_35130);
var state_35151__$1 = (function (){var statearr_35170 = state_35151;
(statearr_35170[(8)] = inst_35129__$1);

return statearr_35170;
})();
if(inst_35131){
var statearr_35171_35231 = state_35151__$1;
(statearr_35171_35231[(1)] = (15));

} else {
var statearr_35172_35232 = state_35151__$1;
(statearr_35172_35232[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (16))){
var state_35151__$1 = state_35151;
var statearr_35173_35233 = state_35151__$1;
(statearr_35173_35233[(2)] = false);

(statearr_35173_35233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (10))){
var inst_35123 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35174_35234 = state_35151__$1;
(statearr_35174_35234[(2)] = inst_35123);

(statearr_35174_35234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (18))){
var inst_35134 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35175_35235 = state_35151__$1;
(statearr_35175_35235[(2)] = inst_35134);

(statearr_35175_35235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (8))){
var inst_35120 = cljs.core.async.close_BANG_.call(null,to);
var state_35151__$1 = state_35151;
var statearr_35176_35236 = state_35151__$1;
(statearr_35176_35236[(2)] = inst_35120);

(statearr_35176_35236[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0 = (function (){
var statearr_35177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__);

(statearr_35177[(1)] = (1));

return statearr_35177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1 = (function (state_35151){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35178){if((e35178 instanceof Object)){
var ex__34754__auto__ = e35178;
var statearr_35179_35237 = state_35151;
(statearr_35179_35237[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35238 = state_35151;
state_35151 = G__35238;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__ = function(state_35151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1.call(this,state_35151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34751__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35180 = f__34846__auto__.call(null);
(statearr_35180[(6)] = c__34845__auto__);

return statearr_35180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
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
var G__35240 = arguments.length;
switch (G__35240) {
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
var G__35243 = arguments.length;
switch (G__35243) {
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
var G__35246 = arguments.length;
switch (G__35246) {
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
var c__34845__auto___35295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35272){
var state_val_35273 = (state_35272[(1)]);
if((state_val_35273 === (7))){
var inst_35268 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35274_35296 = state_35272__$1;
(statearr_35274_35296[(2)] = inst_35268);

(statearr_35274_35296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (1))){
var state_35272__$1 = state_35272;
var statearr_35275_35297 = state_35272__$1;
(statearr_35275_35297[(2)] = null);

(statearr_35275_35297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (4))){
var inst_35249 = (state_35272[(7)]);
var inst_35249__$1 = (state_35272[(2)]);
var inst_35250 = (inst_35249__$1 == null);
var state_35272__$1 = (function (){var statearr_35276 = state_35272;
(statearr_35276[(7)] = inst_35249__$1);

return statearr_35276;
})();
if(cljs.core.truth_(inst_35250)){
var statearr_35277_35298 = state_35272__$1;
(statearr_35277_35298[(1)] = (5));

} else {
var statearr_35278_35299 = state_35272__$1;
(statearr_35278_35299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (13))){
var state_35272__$1 = state_35272;
var statearr_35279_35300 = state_35272__$1;
(statearr_35279_35300[(2)] = null);

(statearr_35279_35300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (6))){
var inst_35249 = (state_35272[(7)]);
var inst_35255 = p.call(null,inst_35249);
var state_35272__$1 = state_35272;
if(cljs.core.truth_(inst_35255)){
var statearr_35280_35301 = state_35272__$1;
(statearr_35280_35301[(1)] = (9));

} else {
var statearr_35281_35302 = state_35272__$1;
(statearr_35281_35302[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (3))){
var inst_35270 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35272__$1,inst_35270);
} else {
if((state_val_35273 === (12))){
var state_35272__$1 = state_35272;
var statearr_35282_35303 = state_35272__$1;
(statearr_35282_35303[(2)] = null);

(statearr_35282_35303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (2))){
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35272__$1,(4),ch);
} else {
if((state_val_35273 === (11))){
var inst_35249 = (state_35272[(7)]);
var inst_35259 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35272__$1,(8),inst_35259,inst_35249);
} else {
if((state_val_35273 === (9))){
var state_35272__$1 = state_35272;
var statearr_35283_35304 = state_35272__$1;
(statearr_35283_35304[(2)] = tc);

(statearr_35283_35304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (5))){
var inst_35252 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35253 = cljs.core.async.close_BANG_.call(null,fc);
var state_35272__$1 = (function (){var statearr_35284 = state_35272;
(statearr_35284[(8)] = inst_35252);

return statearr_35284;
})();
var statearr_35285_35305 = state_35272__$1;
(statearr_35285_35305[(2)] = inst_35253);

(statearr_35285_35305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (14))){
var inst_35266 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35286_35306 = state_35272__$1;
(statearr_35286_35306[(2)] = inst_35266);

(statearr_35286_35306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (10))){
var state_35272__$1 = state_35272;
var statearr_35287_35307 = state_35272__$1;
(statearr_35287_35307[(2)] = fc);

(statearr_35287_35307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (8))){
var inst_35261 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
if(cljs.core.truth_(inst_35261)){
var statearr_35288_35308 = state_35272__$1;
(statearr_35288_35308[(1)] = (12));

} else {
var statearr_35289_35309 = state_35272__$1;
(statearr_35289_35309[(1)] = (13));

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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null,null,null];
(statearr_35290[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_35272){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__34754__auto__ = e35291;
var statearr_35292_35310 = state_35272;
(statearr_35292_35310[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35311 = state_35272;
state_35272 = G__35311;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_35272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_35272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35293 = f__34846__auto__.call(null);
(statearr_35293[(6)] = c__34845__auto___35295);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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
var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35332){
var state_val_35333 = (state_35332[(1)]);
if((state_val_35333 === (7))){
var inst_35328 = (state_35332[(2)]);
var state_35332__$1 = state_35332;
var statearr_35334_35352 = state_35332__$1;
(statearr_35334_35352[(2)] = inst_35328);

(statearr_35334_35352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (1))){
var inst_35312 = init;
var state_35332__$1 = (function (){var statearr_35335 = state_35332;
(statearr_35335[(7)] = inst_35312);

return statearr_35335;
})();
var statearr_35336_35353 = state_35332__$1;
(statearr_35336_35353[(2)] = null);

(statearr_35336_35353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (4))){
var inst_35315 = (state_35332[(8)]);
var inst_35315__$1 = (state_35332[(2)]);
var inst_35316 = (inst_35315__$1 == null);
var state_35332__$1 = (function (){var statearr_35337 = state_35332;
(statearr_35337[(8)] = inst_35315__$1);

return statearr_35337;
})();
if(cljs.core.truth_(inst_35316)){
var statearr_35338_35354 = state_35332__$1;
(statearr_35338_35354[(1)] = (5));

} else {
var statearr_35339_35355 = state_35332__$1;
(statearr_35339_35355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (6))){
var inst_35312 = (state_35332[(7)]);
var inst_35319 = (state_35332[(9)]);
var inst_35315 = (state_35332[(8)]);
var inst_35319__$1 = f.call(null,inst_35312,inst_35315);
var inst_35320 = cljs.core.reduced_QMARK_.call(null,inst_35319__$1);
var state_35332__$1 = (function (){var statearr_35340 = state_35332;
(statearr_35340[(9)] = inst_35319__$1);

return statearr_35340;
})();
if(inst_35320){
var statearr_35341_35356 = state_35332__$1;
(statearr_35341_35356[(1)] = (8));

} else {
var statearr_35342_35357 = state_35332__$1;
(statearr_35342_35357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (3))){
var inst_35330 = (state_35332[(2)]);
var state_35332__$1 = state_35332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35332__$1,inst_35330);
} else {
if((state_val_35333 === (2))){
var state_35332__$1 = state_35332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35332__$1,(4),ch);
} else {
if((state_val_35333 === (9))){
var inst_35319 = (state_35332[(9)]);
var inst_35312 = inst_35319;
var state_35332__$1 = (function (){var statearr_35343 = state_35332;
(statearr_35343[(7)] = inst_35312);

return statearr_35343;
})();
var statearr_35344_35358 = state_35332__$1;
(statearr_35344_35358[(2)] = null);

(statearr_35344_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (5))){
var inst_35312 = (state_35332[(7)]);
var state_35332__$1 = state_35332;
var statearr_35345_35359 = state_35332__$1;
(statearr_35345_35359[(2)] = inst_35312);

(statearr_35345_35359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (10))){
var inst_35326 = (state_35332[(2)]);
var state_35332__$1 = state_35332;
var statearr_35346_35360 = state_35332__$1;
(statearr_35346_35360[(2)] = inst_35326);

(statearr_35346_35360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (8))){
var inst_35319 = (state_35332[(9)]);
var inst_35322 = cljs.core.deref.call(null,inst_35319);
var state_35332__$1 = state_35332;
var statearr_35347_35361 = state_35332__$1;
(statearr_35347_35361[(2)] = inst_35322);

(statearr_35347_35361[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34751__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34751__auto____0 = (function (){
var statearr_35348 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35348[(0)] = cljs$core$async$reduce_$_state_machine__34751__auto__);

(statearr_35348[(1)] = (1));

return statearr_35348;
});
var cljs$core$async$reduce_$_state_machine__34751__auto____1 = (function (state_35332){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35349){if((e35349 instanceof Object)){
var ex__34754__auto__ = e35349;
var statearr_35350_35362 = state_35332;
(statearr_35350_35362[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35363 = state_35332;
state_35332 = G__35363;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34751__auto__ = function(state_35332){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34751__auto____1.call(this,state_35332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34751__auto____0;
cljs$core$async$reduce_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34751__auto____1;
return cljs$core$async$reduce_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35351 = f__34846__auto__.call(null);
(statearr_35351[(6)] = c__34845__auto__);

return statearr_35351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35369){
var state_val_35370 = (state_35369[(1)]);
if((state_val_35370 === (1))){
var inst_35364 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35369__$1,(2),inst_35364);
} else {
if((state_val_35370 === (2))){
var inst_35366 = (state_35369[(2)]);
var inst_35367 = f__$1.call(null,inst_35366);
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35369__$1,inst_35367);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34751__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34751__auto____0 = (function (){
var statearr_35371 = [null,null,null,null,null,null,null];
(statearr_35371[(0)] = cljs$core$async$transduce_$_state_machine__34751__auto__);

(statearr_35371[(1)] = (1));

return statearr_35371;
});
var cljs$core$async$transduce_$_state_machine__34751__auto____1 = (function (state_35369){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35372){if((e35372 instanceof Object)){
var ex__34754__auto__ = e35372;
var statearr_35373_35375 = state_35369;
(statearr_35373_35375[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35376 = state_35369;
state_35369 = G__35376;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34751__auto__ = function(state_35369){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34751__auto____1.call(this,state_35369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34751__auto____0;
cljs$core$async$transduce_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34751__auto____1;
return cljs$core$async$transduce_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35374 = f__34846__auto__.call(null);
(statearr_35374[(6)] = c__34845__auto__);

return statearr_35374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
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
var G__35378 = arguments.length;
switch (G__35378) {
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
var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35403){
var state_val_35404 = (state_35403[(1)]);
if((state_val_35404 === (7))){
var inst_35385 = (state_35403[(2)]);
var state_35403__$1 = state_35403;
var statearr_35405_35426 = state_35403__$1;
(statearr_35405_35426[(2)] = inst_35385);

(statearr_35405_35426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (1))){
var inst_35379 = cljs.core.seq.call(null,coll);
var inst_35380 = inst_35379;
var state_35403__$1 = (function (){var statearr_35406 = state_35403;
(statearr_35406[(7)] = inst_35380);

return statearr_35406;
})();
var statearr_35407_35427 = state_35403__$1;
(statearr_35407_35427[(2)] = null);

(statearr_35407_35427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (4))){
var inst_35380 = (state_35403[(7)]);
var inst_35383 = cljs.core.first.call(null,inst_35380);
var state_35403__$1 = state_35403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35403__$1,(7),ch,inst_35383);
} else {
if((state_val_35404 === (13))){
var inst_35397 = (state_35403[(2)]);
var state_35403__$1 = state_35403;
var statearr_35408_35428 = state_35403__$1;
(statearr_35408_35428[(2)] = inst_35397);

(statearr_35408_35428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (6))){
var inst_35388 = (state_35403[(2)]);
var state_35403__$1 = state_35403;
if(cljs.core.truth_(inst_35388)){
var statearr_35409_35429 = state_35403__$1;
(statearr_35409_35429[(1)] = (8));

} else {
var statearr_35410_35430 = state_35403__$1;
(statearr_35410_35430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (3))){
var inst_35401 = (state_35403[(2)]);
var state_35403__$1 = state_35403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35403__$1,inst_35401);
} else {
if((state_val_35404 === (12))){
var state_35403__$1 = state_35403;
var statearr_35411_35431 = state_35403__$1;
(statearr_35411_35431[(2)] = null);

(statearr_35411_35431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (2))){
var inst_35380 = (state_35403[(7)]);
var state_35403__$1 = state_35403;
if(cljs.core.truth_(inst_35380)){
var statearr_35412_35432 = state_35403__$1;
(statearr_35412_35432[(1)] = (4));

} else {
var statearr_35413_35433 = state_35403__$1;
(statearr_35413_35433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (11))){
var inst_35394 = cljs.core.async.close_BANG_.call(null,ch);
var state_35403__$1 = state_35403;
var statearr_35414_35434 = state_35403__$1;
(statearr_35414_35434[(2)] = inst_35394);

(statearr_35414_35434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (9))){
var state_35403__$1 = state_35403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35415_35435 = state_35403__$1;
(statearr_35415_35435[(1)] = (11));

} else {
var statearr_35416_35436 = state_35403__$1;
(statearr_35416_35436[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (5))){
var inst_35380 = (state_35403[(7)]);
var state_35403__$1 = state_35403;
var statearr_35417_35437 = state_35403__$1;
(statearr_35417_35437[(2)] = inst_35380);

(statearr_35417_35437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (10))){
var inst_35399 = (state_35403[(2)]);
var state_35403__$1 = state_35403;
var statearr_35418_35438 = state_35403__$1;
(statearr_35418_35438[(2)] = inst_35399);

(statearr_35418_35438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35404 === (8))){
var inst_35380 = (state_35403[(7)]);
var inst_35390 = cljs.core.next.call(null,inst_35380);
var inst_35380__$1 = inst_35390;
var state_35403__$1 = (function (){var statearr_35419 = state_35403;
(statearr_35419[(7)] = inst_35380__$1);

return statearr_35419;
})();
var statearr_35420_35439 = state_35403__$1;
(statearr_35420_35439[(2)] = null);

(statearr_35420_35439[(1)] = (2));


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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_35421 = [null,null,null,null,null,null,null,null];
(statearr_35421[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_35421[(1)] = (1));

return statearr_35421;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_35403){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35422){if((e35422 instanceof Object)){
var ex__34754__auto__ = e35422;
var statearr_35423_35440 = state_35403;
(statearr_35423_35440[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35441 = state_35403;
state_35403 = G__35441;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_35403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_35403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35424 = f__34846__auto__.call(null);
(statearr_35424[(6)] = c__34845__auto__);

return statearr_35424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35442 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35442.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35443 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35443.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35444 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35444.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35445 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35445.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35446 = (function (ch,cs,meta35447){
this.ch = ch;
this.cs = cs;
this.meta35447 = meta35447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35448,meta35447__$1){
var self__ = this;
var _35448__$1 = this;
return (new cljs.core.async.t_cljs$core$async35446(self__.ch,self__.cs,meta35447__$1));
}));

(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35448){
var self__ = this;
var _35448__$1 = this;
return self__.meta35447;
}));

(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35446.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35447","meta35447",1052740662,null)], null);
}));

(cljs.core.async.t_cljs$core$async35446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35446");

(cljs.core.async.t_cljs$core$async35446.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35446.
 */
cljs.core.async.__GT_t_cljs$core$async35446 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35446(ch__$1,cs__$1,meta35447){
return (new cljs.core.async.t_cljs$core$async35446(ch__$1,cs__$1,meta35447));
});

}

return (new cljs.core.async.t_cljs$core$async35446(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34845__auto___35668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35583){
var state_val_35584 = (state_35583[(1)]);
if((state_val_35584 === (7))){
var inst_35579 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35585_35669 = state_35583__$1;
(statearr_35585_35669[(2)] = inst_35579);

(statearr_35585_35669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (20))){
var inst_35482 = (state_35583[(7)]);
var inst_35494 = cljs.core.first.call(null,inst_35482);
var inst_35495 = cljs.core.nth.call(null,inst_35494,(0),null);
var inst_35496 = cljs.core.nth.call(null,inst_35494,(1),null);
var state_35583__$1 = (function (){var statearr_35586 = state_35583;
(statearr_35586[(8)] = inst_35495);

return statearr_35586;
})();
if(cljs.core.truth_(inst_35496)){
var statearr_35587_35670 = state_35583__$1;
(statearr_35587_35670[(1)] = (22));

} else {
var statearr_35588_35671 = state_35583__$1;
(statearr_35588_35671[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (27))){
var inst_35524 = (state_35583[(9)]);
var inst_35531 = (state_35583[(10)]);
var inst_35526 = (state_35583[(11)]);
var inst_35451 = (state_35583[(12)]);
var inst_35531__$1 = cljs.core._nth.call(null,inst_35524,inst_35526);
var inst_35532 = cljs.core.async.put_BANG_.call(null,inst_35531__$1,inst_35451,done);
var state_35583__$1 = (function (){var statearr_35589 = state_35583;
(statearr_35589[(10)] = inst_35531__$1);

return statearr_35589;
})();
if(cljs.core.truth_(inst_35532)){
var statearr_35590_35672 = state_35583__$1;
(statearr_35590_35672[(1)] = (30));

} else {
var statearr_35591_35673 = state_35583__$1;
(statearr_35591_35673[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (1))){
var state_35583__$1 = state_35583;
var statearr_35592_35674 = state_35583__$1;
(statearr_35592_35674[(2)] = null);

(statearr_35592_35674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (24))){
var inst_35482 = (state_35583[(7)]);
var inst_35501 = (state_35583[(2)]);
var inst_35502 = cljs.core.next.call(null,inst_35482);
var inst_35460 = inst_35502;
var inst_35461 = null;
var inst_35462 = (0);
var inst_35463 = (0);
var state_35583__$1 = (function (){var statearr_35593 = state_35583;
(statearr_35593[(13)] = inst_35460);

(statearr_35593[(14)] = inst_35461);

(statearr_35593[(15)] = inst_35501);

(statearr_35593[(16)] = inst_35463);

(statearr_35593[(17)] = inst_35462);

return statearr_35593;
})();
var statearr_35594_35675 = state_35583__$1;
(statearr_35594_35675[(2)] = null);

(statearr_35594_35675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (39))){
var state_35583__$1 = state_35583;
var statearr_35598_35676 = state_35583__$1;
(statearr_35598_35676[(2)] = null);

(statearr_35598_35676[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (4))){
var inst_35451 = (state_35583[(12)]);
var inst_35451__$1 = (state_35583[(2)]);
var inst_35452 = (inst_35451__$1 == null);
var state_35583__$1 = (function (){var statearr_35599 = state_35583;
(statearr_35599[(12)] = inst_35451__$1);

return statearr_35599;
})();
if(cljs.core.truth_(inst_35452)){
var statearr_35600_35677 = state_35583__$1;
(statearr_35600_35677[(1)] = (5));

} else {
var statearr_35601_35678 = state_35583__$1;
(statearr_35601_35678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (15))){
var inst_35460 = (state_35583[(13)]);
var inst_35461 = (state_35583[(14)]);
var inst_35463 = (state_35583[(16)]);
var inst_35462 = (state_35583[(17)]);
var inst_35478 = (state_35583[(2)]);
var inst_35479 = (inst_35463 + (1));
var tmp35595 = inst_35460;
var tmp35596 = inst_35461;
var tmp35597 = inst_35462;
var inst_35460__$1 = tmp35595;
var inst_35461__$1 = tmp35596;
var inst_35462__$1 = tmp35597;
var inst_35463__$1 = inst_35479;
var state_35583__$1 = (function (){var statearr_35602 = state_35583;
(statearr_35602[(13)] = inst_35460__$1);

(statearr_35602[(14)] = inst_35461__$1);

(statearr_35602[(16)] = inst_35463__$1);

(statearr_35602[(18)] = inst_35478);

(statearr_35602[(17)] = inst_35462__$1);

return statearr_35602;
})();
var statearr_35603_35679 = state_35583__$1;
(statearr_35603_35679[(2)] = null);

(statearr_35603_35679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (21))){
var inst_35505 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35607_35680 = state_35583__$1;
(statearr_35607_35680[(2)] = inst_35505);

(statearr_35607_35680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (31))){
var inst_35531 = (state_35583[(10)]);
var inst_35535 = done.call(null,null);
var inst_35536 = cljs.core.async.untap_STAR_.call(null,m,inst_35531);
var state_35583__$1 = (function (){var statearr_35608 = state_35583;
(statearr_35608[(19)] = inst_35535);

return statearr_35608;
})();
var statearr_35609_35681 = state_35583__$1;
(statearr_35609_35681[(2)] = inst_35536);

(statearr_35609_35681[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (32))){
var inst_35524 = (state_35583[(9)]);
var inst_35525 = (state_35583[(20)]);
var inst_35526 = (state_35583[(11)]);
var inst_35523 = (state_35583[(21)]);
var inst_35538 = (state_35583[(2)]);
var inst_35539 = (inst_35526 + (1));
var tmp35604 = inst_35524;
var tmp35605 = inst_35525;
var tmp35606 = inst_35523;
var inst_35523__$1 = tmp35606;
var inst_35524__$1 = tmp35604;
var inst_35525__$1 = tmp35605;
var inst_35526__$1 = inst_35539;
var state_35583__$1 = (function (){var statearr_35610 = state_35583;
(statearr_35610[(9)] = inst_35524__$1);

(statearr_35610[(20)] = inst_35525__$1);

(statearr_35610[(11)] = inst_35526__$1);

(statearr_35610[(22)] = inst_35538);

(statearr_35610[(21)] = inst_35523__$1);

return statearr_35610;
})();
var statearr_35611_35682 = state_35583__$1;
(statearr_35611_35682[(2)] = null);

(statearr_35611_35682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (40))){
var inst_35551 = (state_35583[(23)]);
var inst_35555 = done.call(null,null);
var inst_35556 = cljs.core.async.untap_STAR_.call(null,m,inst_35551);
var state_35583__$1 = (function (){var statearr_35612 = state_35583;
(statearr_35612[(24)] = inst_35555);

return statearr_35612;
})();
var statearr_35613_35683 = state_35583__$1;
(statearr_35613_35683[(2)] = inst_35556);

(statearr_35613_35683[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (33))){
var inst_35542 = (state_35583[(25)]);
var inst_35544 = cljs.core.chunked_seq_QMARK_.call(null,inst_35542);
var state_35583__$1 = state_35583;
if(inst_35544){
var statearr_35614_35684 = state_35583__$1;
(statearr_35614_35684[(1)] = (36));

} else {
var statearr_35615_35685 = state_35583__$1;
(statearr_35615_35685[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (13))){
var inst_35472 = (state_35583[(26)]);
var inst_35475 = cljs.core.async.close_BANG_.call(null,inst_35472);
var state_35583__$1 = state_35583;
var statearr_35616_35686 = state_35583__$1;
(statearr_35616_35686[(2)] = inst_35475);

(statearr_35616_35686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (22))){
var inst_35495 = (state_35583[(8)]);
var inst_35498 = cljs.core.async.close_BANG_.call(null,inst_35495);
var state_35583__$1 = state_35583;
var statearr_35617_35687 = state_35583__$1;
(statearr_35617_35687[(2)] = inst_35498);

(statearr_35617_35687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (36))){
var inst_35542 = (state_35583[(25)]);
var inst_35546 = cljs.core.chunk_first.call(null,inst_35542);
var inst_35547 = cljs.core.chunk_rest.call(null,inst_35542);
var inst_35548 = cljs.core.count.call(null,inst_35546);
var inst_35523 = inst_35547;
var inst_35524 = inst_35546;
var inst_35525 = inst_35548;
var inst_35526 = (0);
var state_35583__$1 = (function (){var statearr_35618 = state_35583;
(statearr_35618[(9)] = inst_35524);

(statearr_35618[(20)] = inst_35525);

(statearr_35618[(11)] = inst_35526);

(statearr_35618[(21)] = inst_35523);

return statearr_35618;
})();
var statearr_35619_35688 = state_35583__$1;
(statearr_35619_35688[(2)] = null);

(statearr_35619_35688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (41))){
var inst_35542 = (state_35583[(25)]);
var inst_35558 = (state_35583[(2)]);
var inst_35559 = cljs.core.next.call(null,inst_35542);
var inst_35523 = inst_35559;
var inst_35524 = null;
var inst_35525 = (0);
var inst_35526 = (0);
var state_35583__$1 = (function (){var statearr_35620 = state_35583;
(statearr_35620[(9)] = inst_35524);

(statearr_35620[(20)] = inst_35525);

(statearr_35620[(11)] = inst_35526);

(statearr_35620[(27)] = inst_35558);

(statearr_35620[(21)] = inst_35523);

return statearr_35620;
})();
var statearr_35621_35689 = state_35583__$1;
(statearr_35621_35689[(2)] = null);

(statearr_35621_35689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (43))){
var state_35583__$1 = state_35583;
var statearr_35622_35690 = state_35583__$1;
(statearr_35622_35690[(2)] = null);

(statearr_35622_35690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (29))){
var inst_35567 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35623_35691 = state_35583__$1;
(statearr_35623_35691[(2)] = inst_35567);

(statearr_35623_35691[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (44))){
var inst_35576 = (state_35583[(2)]);
var state_35583__$1 = (function (){var statearr_35624 = state_35583;
(statearr_35624[(28)] = inst_35576);

return statearr_35624;
})();
var statearr_35625_35692 = state_35583__$1;
(statearr_35625_35692[(2)] = null);

(statearr_35625_35692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (6))){
var inst_35515 = (state_35583[(29)]);
var inst_35514 = cljs.core.deref.call(null,cs);
var inst_35515__$1 = cljs.core.keys.call(null,inst_35514);
var inst_35516 = cljs.core.count.call(null,inst_35515__$1);
var inst_35517 = cljs.core.reset_BANG_.call(null,dctr,inst_35516);
var inst_35522 = cljs.core.seq.call(null,inst_35515__$1);
var inst_35523 = inst_35522;
var inst_35524 = null;
var inst_35525 = (0);
var inst_35526 = (0);
var state_35583__$1 = (function (){var statearr_35626 = state_35583;
(statearr_35626[(9)] = inst_35524);

(statearr_35626[(20)] = inst_35525);

(statearr_35626[(29)] = inst_35515__$1);

(statearr_35626[(30)] = inst_35517);

(statearr_35626[(11)] = inst_35526);

(statearr_35626[(21)] = inst_35523);

return statearr_35626;
})();
var statearr_35627_35693 = state_35583__$1;
(statearr_35627_35693[(2)] = null);

(statearr_35627_35693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (28))){
var inst_35542 = (state_35583[(25)]);
var inst_35523 = (state_35583[(21)]);
var inst_35542__$1 = cljs.core.seq.call(null,inst_35523);
var state_35583__$1 = (function (){var statearr_35628 = state_35583;
(statearr_35628[(25)] = inst_35542__$1);

return statearr_35628;
})();
if(inst_35542__$1){
var statearr_35629_35694 = state_35583__$1;
(statearr_35629_35694[(1)] = (33));

} else {
var statearr_35630_35695 = state_35583__$1;
(statearr_35630_35695[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (25))){
var inst_35525 = (state_35583[(20)]);
var inst_35526 = (state_35583[(11)]);
var inst_35528 = (inst_35526 < inst_35525);
var inst_35529 = inst_35528;
var state_35583__$1 = state_35583;
if(cljs.core.truth_(inst_35529)){
var statearr_35631_35696 = state_35583__$1;
(statearr_35631_35696[(1)] = (27));

} else {
var statearr_35632_35697 = state_35583__$1;
(statearr_35632_35697[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (34))){
var state_35583__$1 = state_35583;
var statearr_35633_35698 = state_35583__$1;
(statearr_35633_35698[(2)] = null);

(statearr_35633_35698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (17))){
var state_35583__$1 = state_35583;
var statearr_35634_35699 = state_35583__$1;
(statearr_35634_35699[(2)] = null);

(statearr_35634_35699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (3))){
var inst_35581 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35583__$1,inst_35581);
} else {
if((state_val_35584 === (12))){
var inst_35510 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35635_35700 = state_35583__$1;
(statearr_35635_35700[(2)] = inst_35510);

(statearr_35635_35700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (2))){
var state_35583__$1 = state_35583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35583__$1,(4),ch);
} else {
if((state_val_35584 === (23))){
var state_35583__$1 = state_35583;
var statearr_35636_35701 = state_35583__$1;
(statearr_35636_35701[(2)] = null);

(statearr_35636_35701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (35))){
var inst_35565 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35637_35702 = state_35583__$1;
(statearr_35637_35702[(2)] = inst_35565);

(statearr_35637_35702[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (19))){
var inst_35482 = (state_35583[(7)]);
var inst_35486 = cljs.core.chunk_first.call(null,inst_35482);
var inst_35487 = cljs.core.chunk_rest.call(null,inst_35482);
var inst_35488 = cljs.core.count.call(null,inst_35486);
var inst_35460 = inst_35487;
var inst_35461 = inst_35486;
var inst_35462 = inst_35488;
var inst_35463 = (0);
var state_35583__$1 = (function (){var statearr_35638 = state_35583;
(statearr_35638[(13)] = inst_35460);

(statearr_35638[(14)] = inst_35461);

(statearr_35638[(16)] = inst_35463);

(statearr_35638[(17)] = inst_35462);

return statearr_35638;
})();
var statearr_35639_35703 = state_35583__$1;
(statearr_35639_35703[(2)] = null);

(statearr_35639_35703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (11))){
var inst_35460 = (state_35583[(13)]);
var inst_35482 = (state_35583[(7)]);
var inst_35482__$1 = cljs.core.seq.call(null,inst_35460);
var state_35583__$1 = (function (){var statearr_35640 = state_35583;
(statearr_35640[(7)] = inst_35482__$1);

return statearr_35640;
})();
if(inst_35482__$1){
var statearr_35641_35704 = state_35583__$1;
(statearr_35641_35704[(1)] = (16));

} else {
var statearr_35642_35705 = state_35583__$1;
(statearr_35642_35705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (9))){
var inst_35512 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35643_35706 = state_35583__$1;
(statearr_35643_35706[(2)] = inst_35512);

(statearr_35643_35706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (5))){
var inst_35458 = cljs.core.deref.call(null,cs);
var inst_35459 = cljs.core.seq.call(null,inst_35458);
var inst_35460 = inst_35459;
var inst_35461 = null;
var inst_35462 = (0);
var inst_35463 = (0);
var state_35583__$1 = (function (){var statearr_35644 = state_35583;
(statearr_35644[(13)] = inst_35460);

(statearr_35644[(14)] = inst_35461);

(statearr_35644[(16)] = inst_35463);

(statearr_35644[(17)] = inst_35462);

return statearr_35644;
})();
var statearr_35645_35707 = state_35583__$1;
(statearr_35645_35707[(2)] = null);

(statearr_35645_35707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (14))){
var state_35583__$1 = state_35583;
var statearr_35646_35708 = state_35583__$1;
(statearr_35646_35708[(2)] = null);

(statearr_35646_35708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (45))){
var inst_35573 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35647_35709 = state_35583__$1;
(statearr_35647_35709[(2)] = inst_35573);

(statearr_35647_35709[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (26))){
var inst_35515 = (state_35583[(29)]);
var inst_35569 = (state_35583[(2)]);
var inst_35570 = cljs.core.seq.call(null,inst_35515);
var state_35583__$1 = (function (){var statearr_35648 = state_35583;
(statearr_35648[(31)] = inst_35569);

return statearr_35648;
})();
if(inst_35570){
var statearr_35649_35710 = state_35583__$1;
(statearr_35649_35710[(1)] = (42));

} else {
var statearr_35650_35711 = state_35583__$1;
(statearr_35650_35711[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (16))){
var inst_35482 = (state_35583[(7)]);
var inst_35484 = cljs.core.chunked_seq_QMARK_.call(null,inst_35482);
var state_35583__$1 = state_35583;
if(inst_35484){
var statearr_35651_35712 = state_35583__$1;
(statearr_35651_35712[(1)] = (19));

} else {
var statearr_35652_35713 = state_35583__$1;
(statearr_35652_35713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (38))){
var inst_35562 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35653_35714 = state_35583__$1;
(statearr_35653_35714[(2)] = inst_35562);

(statearr_35653_35714[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (30))){
var state_35583__$1 = state_35583;
var statearr_35654_35715 = state_35583__$1;
(statearr_35654_35715[(2)] = null);

(statearr_35654_35715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (10))){
var inst_35461 = (state_35583[(14)]);
var inst_35463 = (state_35583[(16)]);
var inst_35471 = cljs.core._nth.call(null,inst_35461,inst_35463);
var inst_35472 = cljs.core.nth.call(null,inst_35471,(0),null);
var inst_35473 = cljs.core.nth.call(null,inst_35471,(1),null);
var state_35583__$1 = (function (){var statearr_35655 = state_35583;
(statearr_35655[(26)] = inst_35472);

return statearr_35655;
})();
if(cljs.core.truth_(inst_35473)){
var statearr_35656_35716 = state_35583__$1;
(statearr_35656_35716[(1)] = (13));

} else {
var statearr_35657_35717 = state_35583__$1;
(statearr_35657_35717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (18))){
var inst_35508 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35658_35718 = state_35583__$1;
(statearr_35658_35718[(2)] = inst_35508);

(statearr_35658_35718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (42))){
var state_35583__$1 = state_35583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35583__$1,(45),dchan);
} else {
if((state_val_35584 === (37))){
var inst_35542 = (state_35583[(25)]);
var inst_35451 = (state_35583[(12)]);
var inst_35551 = (state_35583[(23)]);
var inst_35551__$1 = cljs.core.first.call(null,inst_35542);
var inst_35552 = cljs.core.async.put_BANG_.call(null,inst_35551__$1,inst_35451,done);
var state_35583__$1 = (function (){var statearr_35659 = state_35583;
(statearr_35659[(23)] = inst_35551__$1);

return statearr_35659;
})();
if(cljs.core.truth_(inst_35552)){
var statearr_35660_35719 = state_35583__$1;
(statearr_35660_35719[(1)] = (39));

} else {
var statearr_35661_35720 = state_35583__$1;
(statearr_35661_35720[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (8))){
var inst_35463 = (state_35583[(16)]);
var inst_35462 = (state_35583[(17)]);
var inst_35465 = (inst_35463 < inst_35462);
var inst_35466 = inst_35465;
var state_35583__$1 = state_35583;
if(cljs.core.truth_(inst_35466)){
var statearr_35662_35721 = state_35583__$1;
(statearr_35662_35721[(1)] = (10));

} else {
var statearr_35663_35722 = state_35583__$1;
(statearr_35663_35722[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34751__auto__ = null;
var cljs$core$async$mult_$_state_machine__34751__auto____0 = (function (){
var statearr_35664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35664[(0)] = cljs$core$async$mult_$_state_machine__34751__auto__);

(statearr_35664[(1)] = (1));

return statearr_35664;
});
var cljs$core$async$mult_$_state_machine__34751__auto____1 = (function (state_35583){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35665){if((e35665 instanceof Object)){
var ex__34754__auto__ = e35665;
var statearr_35666_35723 = state_35583;
(statearr_35666_35723[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35724 = state_35583;
state_35583 = G__35724;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34751__auto__ = function(state_35583){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34751__auto____1.call(this,state_35583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34751__auto____0;
cljs$core$async$mult_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34751__auto____1;
return cljs$core$async$mult_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35667 = f__34846__auto__.call(null);
(statearr_35667[(6)] = c__34845__auto___35668);

return statearr_35667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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
var G__35726 = arguments.length;
switch (G__35726) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35728 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35728.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35729 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35729.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35730 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35730.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35731 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35731.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35732 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35732.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35743 = arguments.length;
var i__4737__auto___35744 = (0);
while(true){
if((i__4737__auto___35744 < len__4736__auto___35743)){
args__4742__auto__.push((arguments[i__4737__auto___35744]));

var G__35745 = (i__4737__auto___35744 + (1));
i__4737__auto___35744 = G__35745;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35737){
var map__35738 = p__35737;
var map__35738__$1 = (((((!((map__35738 == null))))?(((((map__35738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35738):map__35738);
var opts = map__35738__$1;
var statearr_35740_35746 = state;
(statearr_35740_35746[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_35741_35747 = state;
(statearr_35741_35747[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35742_35748 = state;
(statearr_35742_35748[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35733){
var G__35734 = cljs.core.first.call(null,seq35733);
var seq35733__$1 = cljs.core.next.call(null,seq35733);
var G__35735 = cljs.core.first.call(null,seq35733__$1);
var seq35733__$2 = cljs.core.next.call(null,seq35733__$1);
var G__35736 = cljs.core.first.call(null,seq35733__$2);
var seq35733__$3 = cljs.core.next.call(null,seq35733__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35734,G__35735,G__35736,seq35733__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35749 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35750){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35750 = meta35750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35751,meta35750__$1){
var self__ = this;
var _35751__$1 = this;
return (new cljs.core.async.t_cljs$core$async35749(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35750__$1));
}));

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35751){
var self__ = this;
var _35751__$1 = this;
return self__.meta35750;
}));

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async35749.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async35749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35750","meta35750",-1817096885,null)], null);
}));

(cljs.core.async.t_cljs$core$async35749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35749");

(cljs.core.async.t_cljs$core$async35749.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35749.
 */
cljs.core.async.__GT_t_cljs$core$async35749 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35749(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35750){
return (new cljs.core.async.t_cljs$core$async35749(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35750));
});

}

return (new cljs.core.async.t_cljs$core$async35749(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34845__auto___35913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_35853){
var state_val_35854 = (state_35853[(1)]);
if((state_val_35854 === (7))){
var inst_35768 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
var statearr_35855_35914 = state_35853__$1;
(statearr_35855_35914[(2)] = inst_35768);

(statearr_35855_35914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (20))){
var inst_35780 = (state_35853[(7)]);
var state_35853__$1 = state_35853;
var statearr_35856_35915 = state_35853__$1;
(statearr_35856_35915[(2)] = inst_35780);

(statearr_35856_35915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (27))){
var state_35853__$1 = state_35853;
var statearr_35857_35916 = state_35853__$1;
(statearr_35857_35916[(2)] = null);

(statearr_35857_35916[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (1))){
var inst_35755 = (state_35853[(8)]);
var inst_35755__$1 = calc_state.call(null);
var inst_35757 = (inst_35755__$1 == null);
var inst_35758 = cljs.core.not.call(null,inst_35757);
var state_35853__$1 = (function (){var statearr_35858 = state_35853;
(statearr_35858[(8)] = inst_35755__$1);

return statearr_35858;
})();
if(inst_35758){
var statearr_35859_35917 = state_35853__$1;
(statearr_35859_35917[(1)] = (2));

} else {
var statearr_35860_35918 = state_35853__$1;
(statearr_35860_35918[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (24))){
var inst_35813 = (state_35853[(9)]);
var inst_35827 = (state_35853[(10)]);
var inst_35804 = (state_35853[(11)]);
var inst_35827__$1 = inst_35804.call(null,inst_35813);
var state_35853__$1 = (function (){var statearr_35861 = state_35853;
(statearr_35861[(10)] = inst_35827__$1);

return statearr_35861;
})();
if(cljs.core.truth_(inst_35827__$1)){
var statearr_35862_35919 = state_35853__$1;
(statearr_35862_35919[(1)] = (29));

} else {
var statearr_35863_35920 = state_35853__$1;
(statearr_35863_35920[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (4))){
var inst_35771 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
if(cljs.core.truth_(inst_35771)){
var statearr_35864_35921 = state_35853__$1;
(statearr_35864_35921[(1)] = (8));

} else {
var statearr_35865_35922 = state_35853__$1;
(statearr_35865_35922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (15))){
var inst_35798 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
if(cljs.core.truth_(inst_35798)){
var statearr_35866_35923 = state_35853__$1;
(statearr_35866_35923[(1)] = (19));

} else {
var statearr_35867_35924 = state_35853__$1;
(statearr_35867_35924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (21))){
var inst_35803 = (state_35853[(12)]);
var inst_35803__$1 = (state_35853[(2)]);
var inst_35804 = cljs.core.get.call(null,inst_35803__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35805 = cljs.core.get.call(null,inst_35803__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35806 = cljs.core.get.call(null,inst_35803__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35853__$1 = (function (){var statearr_35868 = state_35853;
(statearr_35868[(12)] = inst_35803__$1);

(statearr_35868[(13)] = inst_35805);

(statearr_35868[(11)] = inst_35804);

return statearr_35868;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35853__$1,(22),inst_35806);
} else {
if((state_val_35854 === (31))){
var inst_35835 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
if(cljs.core.truth_(inst_35835)){
var statearr_35869_35925 = state_35853__$1;
(statearr_35869_35925[(1)] = (32));

} else {
var statearr_35870_35926 = state_35853__$1;
(statearr_35870_35926[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (32))){
var inst_35812 = (state_35853[(14)]);
var state_35853__$1 = state_35853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35853__$1,(35),out,inst_35812);
} else {
if((state_val_35854 === (33))){
var inst_35803 = (state_35853[(12)]);
var inst_35780 = inst_35803;
var state_35853__$1 = (function (){var statearr_35871 = state_35853;
(statearr_35871[(7)] = inst_35780);

return statearr_35871;
})();
var statearr_35872_35927 = state_35853__$1;
(statearr_35872_35927[(2)] = null);

(statearr_35872_35927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (13))){
var inst_35780 = (state_35853[(7)]);
var inst_35787 = inst_35780.cljs$lang$protocol_mask$partition0$;
var inst_35788 = (inst_35787 & (64));
var inst_35789 = inst_35780.cljs$core$ISeq$;
var inst_35790 = (cljs.core.PROTOCOL_SENTINEL === inst_35789);
var inst_35791 = ((inst_35788) || (inst_35790));
var state_35853__$1 = state_35853;
if(cljs.core.truth_(inst_35791)){
var statearr_35873_35928 = state_35853__$1;
(statearr_35873_35928[(1)] = (16));

} else {
var statearr_35874_35929 = state_35853__$1;
(statearr_35874_35929[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (22))){
var inst_35813 = (state_35853[(9)]);
var inst_35812 = (state_35853[(14)]);
var inst_35811 = (state_35853[(2)]);
var inst_35812__$1 = cljs.core.nth.call(null,inst_35811,(0),null);
var inst_35813__$1 = cljs.core.nth.call(null,inst_35811,(1),null);
var inst_35814 = (inst_35812__$1 == null);
var inst_35815 = cljs.core._EQ_.call(null,inst_35813__$1,change);
var inst_35816 = ((inst_35814) || (inst_35815));
var state_35853__$1 = (function (){var statearr_35875 = state_35853;
(statearr_35875[(9)] = inst_35813__$1);

(statearr_35875[(14)] = inst_35812__$1);

return statearr_35875;
})();
if(cljs.core.truth_(inst_35816)){
var statearr_35876_35930 = state_35853__$1;
(statearr_35876_35930[(1)] = (23));

} else {
var statearr_35877_35931 = state_35853__$1;
(statearr_35877_35931[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (36))){
var inst_35803 = (state_35853[(12)]);
var inst_35780 = inst_35803;
var state_35853__$1 = (function (){var statearr_35878 = state_35853;
(statearr_35878[(7)] = inst_35780);

return statearr_35878;
})();
var statearr_35879_35932 = state_35853__$1;
(statearr_35879_35932[(2)] = null);

(statearr_35879_35932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (29))){
var inst_35827 = (state_35853[(10)]);
var state_35853__$1 = state_35853;
var statearr_35880_35933 = state_35853__$1;
(statearr_35880_35933[(2)] = inst_35827);

(statearr_35880_35933[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (6))){
var state_35853__$1 = state_35853;
var statearr_35881_35934 = state_35853__$1;
(statearr_35881_35934[(2)] = false);

(statearr_35881_35934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (28))){
var inst_35823 = (state_35853[(2)]);
var inst_35824 = calc_state.call(null);
var inst_35780 = inst_35824;
var state_35853__$1 = (function (){var statearr_35882 = state_35853;
(statearr_35882[(15)] = inst_35823);

(statearr_35882[(7)] = inst_35780);

return statearr_35882;
})();
var statearr_35883_35935 = state_35853__$1;
(statearr_35883_35935[(2)] = null);

(statearr_35883_35935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (25))){
var inst_35849 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
var statearr_35884_35936 = state_35853__$1;
(statearr_35884_35936[(2)] = inst_35849);

(statearr_35884_35936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (34))){
var inst_35847 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
var statearr_35885_35937 = state_35853__$1;
(statearr_35885_35937[(2)] = inst_35847);

(statearr_35885_35937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (17))){
var state_35853__$1 = state_35853;
var statearr_35886_35938 = state_35853__$1;
(statearr_35886_35938[(2)] = false);

(statearr_35886_35938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (3))){
var state_35853__$1 = state_35853;
var statearr_35887_35939 = state_35853__$1;
(statearr_35887_35939[(2)] = false);

(statearr_35887_35939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (12))){
var inst_35851 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35853__$1,inst_35851);
} else {
if((state_val_35854 === (2))){
var inst_35755 = (state_35853[(8)]);
var inst_35760 = inst_35755.cljs$lang$protocol_mask$partition0$;
var inst_35761 = (inst_35760 & (64));
var inst_35762 = inst_35755.cljs$core$ISeq$;
var inst_35763 = (cljs.core.PROTOCOL_SENTINEL === inst_35762);
var inst_35764 = ((inst_35761) || (inst_35763));
var state_35853__$1 = state_35853;
if(cljs.core.truth_(inst_35764)){
var statearr_35888_35940 = state_35853__$1;
(statearr_35888_35940[(1)] = (5));

} else {
var statearr_35889_35941 = state_35853__$1;
(statearr_35889_35941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (23))){
var inst_35812 = (state_35853[(14)]);
var inst_35818 = (inst_35812 == null);
var state_35853__$1 = state_35853;
if(cljs.core.truth_(inst_35818)){
var statearr_35890_35942 = state_35853__$1;
(statearr_35890_35942[(1)] = (26));

} else {
var statearr_35891_35943 = state_35853__$1;
(statearr_35891_35943[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (35))){
var inst_35838 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
if(cljs.core.truth_(inst_35838)){
var statearr_35892_35944 = state_35853__$1;
(statearr_35892_35944[(1)] = (36));

} else {
var statearr_35893_35945 = state_35853__$1;
(statearr_35893_35945[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (19))){
var inst_35780 = (state_35853[(7)]);
var inst_35800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35780);
var state_35853__$1 = state_35853;
var statearr_35894_35946 = state_35853__$1;
(statearr_35894_35946[(2)] = inst_35800);

(statearr_35894_35946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (11))){
var inst_35780 = (state_35853[(7)]);
var inst_35784 = (inst_35780 == null);
var inst_35785 = cljs.core.not.call(null,inst_35784);
var state_35853__$1 = state_35853;
if(inst_35785){
var statearr_35895_35947 = state_35853__$1;
(statearr_35895_35947[(1)] = (13));

} else {
var statearr_35896_35948 = state_35853__$1;
(statearr_35896_35948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (9))){
var inst_35755 = (state_35853[(8)]);
var state_35853__$1 = state_35853;
var statearr_35897_35949 = state_35853__$1;
(statearr_35897_35949[(2)] = inst_35755);

(statearr_35897_35949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (5))){
var state_35853__$1 = state_35853;
var statearr_35898_35950 = state_35853__$1;
(statearr_35898_35950[(2)] = true);

(statearr_35898_35950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (14))){
var state_35853__$1 = state_35853;
var statearr_35899_35951 = state_35853__$1;
(statearr_35899_35951[(2)] = false);

(statearr_35899_35951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (26))){
var inst_35813 = (state_35853[(9)]);
var inst_35820 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35813);
var state_35853__$1 = state_35853;
var statearr_35900_35952 = state_35853__$1;
(statearr_35900_35952[(2)] = inst_35820);

(statearr_35900_35952[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (16))){
var state_35853__$1 = state_35853;
var statearr_35901_35953 = state_35853__$1;
(statearr_35901_35953[(2)] = true);

(statearr_35901_35953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (38))){
var inst_35843 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
var statearr_35902_35954 = state_35853__$1;
(statearr_35902_35954[(2)] = inst_35843);

(statearr_35902_35954[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (30))){
var inst_35813 = (state_35853[(9)]);
var inst_35805 = (state_35853[(13)]);
var inst_35804 = (state_35853[(11)]);
var inst_35830 = cljs.core.empty_QMARK_.call(null,inst_35804);
var inst_35831 = inst_35805.call(null,inst_35813);
var inst_35832 = cljs.core.not.call(null,inst_35831);
var inst_35833 = ((inst_35830) && (inst_35832));
var state_35853__$1 = state_35853;
var statearr_35903_35955 = state_35853__$1;
(statearr_35903_35955[(2)] = inst_35833);

(statearr_35903_35955[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (10))){
var inst_35755 = (state_35853[(8)]);
var inst_35776 = (state_35853[(2)]);
var inst_35777 = cljs.core.get.call(null,inst_35776,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35778 = cljs.core.get.call(null,inst_35776,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35779 = cljs.core.get.call(null,inst_35776,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35780 = inst_35755;
var state_35853__$1 = (function (){var statearr_35904 = state_35853;
(statearr_35904[(16)] = inst_35778);

(statearr_35904[(17)] = inst_35779);

(statearr_35904[(18)] = inst_35777);

(statearr_35904[(7)] = inst_35780);

return statearr_35904;
})();
var statearr_35905_35956 = state_35853__$1;
(statearr_35905_35956[(2)] = null);

(statearr_35905_35956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (18))){
var inst_35795 = (state_35853[(2)]);
var state_35853__$1 = state_35853;
var statearr_35906_35957 = state_35853__$1;
(statearr_35906_35957[(2)] = inst_35795);

(statearr_35906_35957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (37))){
var state_35853__$1 = state_35853;
var statearr_35907_35958 = state_35853__$1;
(statearr_35907_35958[(2)] = null);

(statearr_35907_35958[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35854 === (8))){
var inst_35755 = (state_35853[(8)]);
var inst_35773 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35755);
var state_35853__$1 = state_35853;
var statearr_35908_35959 = state_35853__$1;
(statearr_35908_35959[(2)] = inst_35773);

(statearr_35908_35959[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__34751__auto__ = null;
var cljs$core$async$mix_$_state_machine__34751__auto____0 = (function (){
var statearr_35909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35909[(0)] = cljs$core$async$mix_$_state_machine__34751__auto__);

(statearr_35909[(1)] = (1));

return statearr_35909;
});
var cljs$core$async$mix_$_state_machine__34751__auto____1 = (function (state_35853){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_35853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e35910){if((e35910 instanceof Object)){
var ex__34754__auto__ = e35910;
var statearr_35911_35960 = state_35853;
(statearr_35911_35960[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35961 = state_35853;
state_35853 = G__35961;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34751__auto__ = function(state_35853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34751__auto____1.call(this,state_35853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34751__auto____0;
cljs$core$async$mix_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34751__auto____1;
return cljs$core$async$mix_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_35912 = f__34846__auto__.call(null);
(statearr_35912[(6)] = c__34845__auto___35913);

return statearr_35912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35964 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35964.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35965 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35965.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35966 = (function() {
var G__35967 = null;
var G__35967__1 = (function (p){
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
var G__35967__2 = (function (p,v){
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
G__35967 = function(p,v){
switch(arguments.length){
case 1:
return G__35967__1.call(this,p);
case 2:
return G__35967__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35967.cljs$core$IFn$_invoke$arity$1 = G__35967__1;
G__35967.cljs$core$IFn$_invoke$arity$2 = G__35967__2;
return G__35967;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35963 = arguments.length;
switch (G__35963) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35966.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35966.call(null,p,v);
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
var G__35971 = arguments.length;
switch (G__35971) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__35969_SHARP_){
if(cljs.core.truth_(p1__35969_SHARP_.call(null,topic))){
return p1__35969_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35969_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35972 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35973){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35973 = meta35973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35974,meta35973__$1){
var self__ = this;
var _35974__$1 = this;
return (new cljs.core.async.t_cljs$core$async35972(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35973__$1));
}));

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35974){
var self__ = this;
var _35974__$1 = this;
return self__.meta35973;
}));

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35973","meta35973",1435628092,null)], null);
}));

(cljs.core.async.t_cljs$core$async35972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35972");

(cljs.core.async.t_cljs$core$async35972.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35972.
 */
cljs.core.async.__GT_t_cljs$core$async35972 = (function cljs$core$async$__GT_t_cljs$core$async35972(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35973){
return (new cljs.core.async.t_cljs$core$async35972(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35973));
});

}

return (new cljs.core.async.t_cljs$core$async35972(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34845__auto___36092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36046){
var state_val_36047 = (state_36046[(1)]);
if((state_val_36047 === (7))){
var inst_36042 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36048_36093 = state_36046__$1;
(statearr_36048_36093[(2)] = inst_36042);

(statearr_36048_36093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (20))){
var state_36046__$1 = state_36046;
var statearr_36049_36094 = state_36046__$1;
(statearr_36049_36094[(2)] = null);

(statearr_36049_36094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (1))){
var state_36046__$1 = state_36046;
var statearr_36050_36095 = state_36046__$1;
(statearr_36050_36095[(2)] = null);

(statearr_36050_36095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (24))){
var inst_36025 = (state_36046[(7)]);
var inst_36034 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36025);
var state_36046__$1 = state_36046;
var statearr_36051_36096 = state_36046__$1;
(statearr_36051_36096[(2)] = inst_36034);

(statearr_36051_36096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (4))){
var inst_35977 = (state_36046[(8)]);
var inst_35977__$1 = (state_36046[(2)]);
var inst_35978 = (inst_35977__$1 == null);
var state_36046__$1 = (function (){var statearr_36052 = state_36046;
(statearr_36052[(8)] = inst_35977__$1);

return statearr_36052;
})();
if(cljs.core.truth_(inst_35978)){
var statearr_36053_36097 = state_36046__$1;
(statearr_36053_36097[(1)] = (5));

} else {
var statearr_36054_36098 = state_36046__$1;
(statearr_36054_36098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (15))){
var inst_36019 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36055_36099 = state_36046__$1;
(statearr_36055_36099[(2)] = inst_36019);

(statearr_36055_36099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (21))){
var inst_36039 = (state_36046[(2)]);
var state_36046__$1 = (function (){var statearr_36056 = state_36046;
(statearr_36056[(9)] = inst_36039);

return statearr_36056;
})();
var statearr_36057_36100 = state_36046__$1;
(statearr_36057_36100[(2)] = null);

(statearr_36057_36100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (13))){
var inst_36001 = (state_36046[(10)]);
var inst_36003 = cljs.core.chunked_seq_QMARK_.call(null,inst_36001);
var state_36046__$1 = state_36046;
if(inst_36003){
var statearr_36058_36101 = state_36046__$1;
(statearr_36058_36101[(1)] = (16));

} else {
var statearr_36059_36102 = state_36046__$1;
(statearr_36059_36102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (22))){
var inst_36031 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
if(cljs.core.truth_(inst_36031)){
var statearr_36060_36103 = state_36046__$1;
(statearr_36060_36103[(1)] = (23));

} else {
var statearr_36061_36104 = state_36046__$1;
(statearr_36061_36104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (6))){
var inst_36025 = (state_36046[(7)]);
var inst_36027 = (state_36046[(11)]);
var inst_35977 = (state_36046[(8)]);
var inst_36025__$1 = topic_fn.call(null,inst_35977);
var inst_36026 = cljs.core.deref.call(null,mults);
var inst_36027__$1 = cljs.core.get.call(null,inst_36026,inst_36025__$1);
var state_36046__$1 = (function (){var statearr_36062 = state_36046;
(statearr_36062[(7)] = inst_36025__$1);

(statearr_36062[(11)] = inst_36027__$1);

return statearr_36062;
})();
if(cljs.core.truth_(inst_36027__$1)){
var statearr_36063_36105 = state_36046__$1;
(statearr_36063_36105[(1)] = (19));

} else {
var statearr_36064_36106 = state_36046__$1;
(statearr_36064_36106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (25))){
var inst_36036 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36065_36107 = state_36046__$1;
(statearr_36065_36107[(2)] = inst_36036);

(statearr_36065_36107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (17))){
var inst_36001 = (state_36046[(10)]);
var inst_36010 = cljs.core.first.call(null,inst_36001);
var inst_36011 = cljs.core.async.muxch_STAR_.call(null,inst_36010);
var inst_36012 = cljs.core.async.close_BANG_.call(null,inst_36011);
var inst_36013 = cljs.core.next.call(null,inst_36001);
var inst_35987 = inst_36013;
var inst_35988 = null;
var inst_35989 = (0);
var inst_35990 = (0);
var state_36046__$1 = (function (){var statearr_36066 = state_36046;
(statearr_36066[(12)] = inst_36012);

(statearr_36066[(13)] = inst_35989);

(statearr_36066[(14)] = inst_35987);

(statearr_36066[(15)] = inst_35988);

(statearr_36066[(16)] = inst_35990);

return statearr_36066;
})();
var statearr_36067_36108 = state_36046__$1;
(statearr_36067_36108[(2)] = null);

(statearr_36067_36108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (3))){
var inst_36044 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36046__$1,inst_36044);
} else {
if((state_val_36047 === (12))){
var inst_36021 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36068_36109 = state_36046__$1;
(statearr_36068_36109[(2)] = inst_36021);

(statearr_36068_36109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (2))){
var state_36046__$1 = state_36046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36046__$1,(4),ch);
} else {
if((state_val_36047 === (23))){
var state_36046__$1 = state_36046;
var statearr_36069_36110 = state_36046__$1;
(statearr_36069_36110[(2)] = null);

(statearr_36069_36110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (19))){
var inst_36027 = (state_36046[(11)]);
var inst_35977 = (state_36046[(8)]);
var inst_36029 = cljs.core.async.muxch_STAR_.call(null,inst_36027);
var state_36046__$1 = state_36046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36046__$1,(22),inst_36029,inst_35977);
} else {
if((state_val_36047 === (11))){
var inst_36001 = (state_36046[(10)]);
var inst_35987 = (state_36046[(14)]);
var inst_36001__$1 = cljs.core.seq.call(null,inst_35987);
var state_36046__$1 = (function (){var statearr_36070 = state_36046;
(statearr_36070[(10)] = inst_36001__$1);

return statearr_36070;
})();
if(inst_36001__$1){
var statearr_36071_36111 = state_36046__$1;
(statearr_36071_36111[(1)] = (13));

} else {
var statearr_36072_36112 = state_36046__$1;
(statearr_36072_36112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (9))){
var inst_36023 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36073_36113 = state_36046__$1;
(statearr_36073_36113[(2)] = inst_36023);

(statearr_36073_36113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (5))){
var inst_35984 = cljs.core.deref.call(null,mults);
var inst_35985 = cljs.core.vals.call(null,inst_35984);
var inst_35986 = cljs.core.seq.call(null,inst_35985);
var inst_35987 = inst_35986;
var inst_35988 = null;
var inst_35989 = (0);
var inst_35990 = (0);
var state_36046__$1 = (function (){var statearr_36074 = state_36046;
(statearr_36074[(13)] = inst_35989);

(statearr_36074[(14)] = inst_35987);

(statearr_36074[(15)] = inst_35988);

(statearr_36074[(16)] = inst_35990);

return statearr_36074;
})();
var statearr_36075_36114 = state_36046__$1;
(statearr_36075_36114[(2)] = null);

(statearr_36075_36114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (14))){
var state_36046__$1 = state_36046;
var statearr_36079_36115 = state_36046__$1;
(statearr_36079_36115[(2)] = null);

(statearr_36079_36115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (16))){
var inst_36001 = (state_36046[(10)]);
var inst_36005 = cljs.core.chunk_first.call(null,inst_36001);
var inst_36006 = cljs.core.chunk_rest.call(null,inst_36001);
var inst_36007 = cljs.core.count.call(null,inst_36005);
var inst_35987 = inst_36006;
var inst_35988 = inst_36005;
var inst_35989 = inst_36007;
var inst_35990 = (0);
var state_36046__$1 = (function (){var statearr_36080 = state_36046;
(statearr_36080[(13)] = inst_35989);

(statearr_36080[(14)] = inst_35987);

(statearr_36080[(15)] = inst_35988);

(statearr_36080[(16)] = inst_35990);

return statearr_36080;
})();
var statearr_36081_36116 = state_36046__$1;
(statearr_36081_36116[(2)] = null);

(statearr_36081_36116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (10))){
var inst_35989 = (state_36046[(13)]);
var inst_35987 = (state_36046[(14)]);
var inst_35988 = (state_36046[(15)]);
var inst_35990 = (state_36046[(16)]);
var inst_35995 = cljs.core._nth.call(null,inst_35988,inst_35990);
var inst_35996 = cljs.core.async.muxch_STAR_.call(null,inst_35995);
var inst_35997 = cljs.core.async.close_BANG_.call(null,inst_35996);
var inst_35998 = (inst_35990 + (1));
var tmp36076 = inst_35989;
var tmp36077 = inst_35987;
var tmp36078 = inst_35988;
var inst_35987__$1 = tmp36077;
var inst_35988__$1 = tmp36078;
var inst_35989__$1 = tmp36076;
var inst_35990__$1 = inst_35998;
var state_36046__$1 = (function (){var statearr_36082 = state_36046;
(statearr_36082[(13)] = inst_35989__$1);

(statearr_36082[(17)] = inst_35997);

(statearr_36082[(14)] = inst_35987__$1);

(statearr_36082[(15)] = inst_35988__$1);

(statearr_36082[(16)] = inst_35990__$1);

return statearr_36082;
})();
var statearr_36083_36117 = state_36046__$1;
(statearr_36083_36117[(2)] = null);

(statearr_36083_36117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (18))){
var inst_36016 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36084_36118 = state_36046__$1;
(statearr_36084_36118[(2)] = inst_36016);

(statearr_36084_36118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (8))){
var inst_35989 = (state_36046[(13)]);
var inst_35990 = (state_36046[(16)]);
var inst_35992 = (inst_35990 < inst_35989);
var inst_35993 = inst_35992;
var state_36046__$1 = state_36046;
if(cljs.core.truth_(inst_35993)){
var statearr_36085_36119 = state_36046__$1;
(statearr_36085_36119[(1)] = (10));

} else {
var statearr_36086_36120 = state_36046__$1;
(statearr_36086_36120[(1)] = (11));

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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36087[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36087[(1)] = (1));

return statearr_36087;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36046){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36088){if((e36088 instanceof Object)){
var ex__34754__auto__ = e36088;
var statearr_36089_36121 = state_36046;
(statearr_36089_36121[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36122 = state_36046;
state_36046 = G__36122;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36090 = f__34846__auto__.call(null);
(statearr_36090[(6)] = c__34845__auto___36092);

return statearr_36090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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
var G__36124 = arguments.length;
switch (G__36124) {
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
var G__36127 = arguments.length;
switch (G__36127) {
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
var G__36130 = arguments.length;
switch (G__36130) {
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
var c__34845__auto___36197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36169){
var state_val_36170 = (state_36169[(1)]);
if((state_val_36170 === (7))){
var state_36169__$1 = state_36169;
var statearr_36171_36198 = state_36169__$1;
(statearr_36171_36198[(2)] = null);

(statearr_36171_36198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (1))){
var state_36169__$1 = state_36169;
var statearr_36172_36199 = state_36169__$1;
(statearr_36172_36199[(2)] = null);

(statearr_36172_36199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (4))){
var inst_36133 = (state_36169[(7)]);
var inst_36135 = (inst_36133 < cnt);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36135)){
var statearr_36173_36200 = state_36169__$1;
(statearr_36173_36200[(1)] = (6));

} else {
var statearr_36174_36201 = state_36169__$1;
(statearr_36174_36201[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (15))){
var inst_36165 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
var statearr_36175_36202 = state_36169__$1;
(statearr_36175_36202[(2)] = inst_36165);

(statearr_36175_36202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (13))){
var inst_36158 = cljs.core.async.close_BANG_.call(null,out);
var state_36169__$1 = state_36169;
var statearr_36176_36203 = state_36169__$1;
(statearr_36176_36203[(2)] = inst_36158);

(statearr_36176_36203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (6))){
var state_36169__$1 = state_36169;
var statearr_36177_36204 = state_36169__$1;
(statearr_36177_36204[(2)] = null);

(statearr_36177_36204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (3))){
var inst_36167 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36169__$1,inst_36167);
} else {
if((state_val_36170 === (12))){
var inst_36155 = (state_36169[(8)]);
var inst_36155__$1 = (state_36169[(2)]);
var inst_36156 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36155__$1);
var state_36169__$1 = (function (){var statearr_36178 = state_36169;
(statearr_36178[(8)] = inst_36155__$1);

return statearr_36178;
})();
if(cljs.core.truth_(inst_36156)){
var statearr_36179_36205 = state_36169__$1;
(statearr_36179_36205[(1)] = (13));

} else {
var statearr_36180_36206 = state_36169__$1;
(statearr_36180_36206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (2))){
var inst_36132 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36133 = (0);
var state_36169__$1 = (function (){var statearr_36181 = state_36169;
(statearr_36181[(9)] = inst_36132);

(statearr_36181[(7)] = inst_36133);

return statearr_36181;
})();
var statearr_36182_36207 = state_36169__$1;
(statearr_36182_36207[(2)] = null);

(statearr_36182_36207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (11))){
var inst_36133 = (state_36169[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36169,(10),Object,null,(9));
var inst_36142 = chs__$1.call(null,inst_36133);
var inst_36143 = done.call(null,inst_36133);
var inst_36144 = cljs.core.async.take_BANG_.call(null,inst_36142,inst_36143);
var state_36169__$1 = state_36169;
var statearr_36183_36208 = state_36169__$1;
(statearr_36183_36208[(2)] = inst_36144);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36169__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (9))){
var inst_36133 = (state_36169[(7)]);
var inst_36146 = (state_36169[(2)]);
var inst_36147 = (inst_36133 + (1));
var inst_36133__$1 = inst_36147;
var state_36169__$1 = (function (){var statearr_36184 = state_36169;
(statearr_36184[(10)] = inst_36146);

(statearr_36184[(7)] = inst_36133__$1);

return statearr_36184;
})();
var statearr_36185_36209 = state_36169__$1;
(statearr_36185_36209[(2)] = null);

(statearr_36185_36209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (5))){
var inst_36153 = (state_36169[(2)]);
var state_36169__$1 = (function (){var statearr_36186 = state_36169;
(statearr_36186[(11)] = inst_36153);

return statearr_36186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36169__$1,(12),dchan);
} else {
if((state_val_36170 === (14))){
var inst_36155 = (state_36169[(8)]);
var inst_36160 = cljs.core.apply.call(null,f,inst_36155);
var state_36169__$1 = state_36169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36169__$1,(16),out,inst_36160);
} else {
if((state_val_36170 === (16))){
var inst_36162 = (state_36169[(2)]);
var state_36169__$1 = (function (){var statearr_36187 = state_36169;
(statearr_36187[(12)] = inst_36162);

return statearr_36187;
})();
var statearr_36188_36210 = state_36169__$1;
(statearr_36188_36210[(2)] = null);

(statearr_36188_36210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (10))){
var inst_36137 = (state_36169[(2)]);
var inst_36138 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36169__$1 = (function (){var statearr_36189 = state_36169;
(statearr_36189[(13)] = inst_36137);

return statearr_36189;
})();
var statearr_36190_36211 = state_36169__$1;
(statearr_36190_36211[(2)] = inst_36138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36169__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (8))){
var inst_36151 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
var statearr_36191_36212 = state_36169__$1;
(statearr_36191_36212[(2)] = inst_36151);

(statearr_36191_36212[(1)] = (5));


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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36192[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36192[(1)] = (1));

return statearr_36192;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36169){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36193){if((e36193 instanceof Object)){
var ex__34754__auto__ = e36193;
var statearr_36194_36213 = state_36169;
(statearr_36194_36213[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36214 = state_36169;
state_36169 = G__36214;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36195 = f__34846__auto__.call(null);
(statearr_36195[(6)] = c__34845__auto___36197);

return statearr_36195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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
var G__36217 = arguments.length;
switch (G__36217) {
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
var c__34845__auto___36271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36249){
var state_val_36250 = (state_36249[(1)]);
if((state_val_36250 === (7))){
var inst_36229 = (state_36249[(7)]);
var inst_36228 = (state_36249[(8)]);
var inst_36228__$1 = (state_36249[(2)]);
var inst_36229__$1 = cljs.core.nth.call(null,inst_36228__$1,(0),null);
var inst_36230 = cljs.core.nth.call(null,inst_36228__$1,(1),null);
var inst_36231 = (inst_36229__$1 == null);
var state_36249__$1 = (function (){var statearr_36251 = state_36249;
(statearr_36251[(7)] = inst_36229__$1);

(statearr_36251[(8)] = inst_36228__$1);

(statearr_36251[(9)] = inst_36230);

return statearr_36251;
})();
if(cljs.core.truth_(inst_36231)){
var statearr_36252_36272 = state_36249__$1;
(statearr_36252_36272[(1)] = (8));

} else {
var statearr_36253_36273 = state_36249__$1;
(statearr_36253_36273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (1))){
var inst_36218 = cljs.core.vec.call(null,chs);
var inst_36219 = inst_36218;
var state_36249__$1 = (function (){var statearr_36254 = state_36249;
(statearr_36254[(10)] = inst_36219);

return statearr_36254;
})();
var statearr_36255_36274 = state_36249__$1;
(statearr_36255_36274[(2)] = null);

(statearr_36255_36274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (4))){
var inst_36219 = (state_36249[(10)]);
var state_36249__$1 = state_36249;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36249__$1,(7),inst_36219);
} else {
if((state_val_36250 === (6))){
var inst_36245 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36256_36275 = state_36249__$1;
(statearr_36256_36275[(2)] = inst_36245);

(statearr_36256_36275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (3))){
var inst_36247 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36249__$1,inst_36247);
} else {
if((state_val_36250 === (2))){
var inst_36219 = (state_36249[(10)]);
var inst_36221 = cljs.core.count.call(null,inst_36219);
var inst_36222 = (inst_36221 > (0));
var state_36249__$1 = state_36249;
if(cljs.core.truth_(inst_36222)){
var statearr_36258_36276 = state_36249__$1;
(statearr_36258_36276[(1)] = (4));

} else {
var statearr_36259_36277 = state_36249__$1;
(statearr_36259_36277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (11))){
var inst_36219 = (state_36249[(10)]);
var inst_36238 = (state_36249[(2)]);
var tmp36257 = inst_36219;
var inst_36219__$1 = tmp36257;
var state_36249__$1 = (function (){var statearr_36260 = state_36249;
(statearr_36260[(11)] = inst_36238);

(statearr_36260[(10)] = inst_36219__$1);

return statearr_36260;
})();
var statearr_36261_36278 = state_36249__$1;
(statearr_36261_36278[(2)] = null);

(statearr_36261_36278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (9))){
var inst_36229 = (state_36249[(7)]);
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36249__$1,(11),out,inst_36229);
} else {
if((state_val_36250 === (5))){
var inst_36243 = cljs.core.async.close_BANG_.call(null,out);
var state_36249__$1 = state_36249;
var statearr_36262_36279 = state_36249__$1;
(statearr_36262_36279[(2)] = inst_36243);

(statearr_36262_36279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (10))){
var inst_36241 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36263_36280 = state_36249__$1;
(statearr_36263_36280[(2)] = inst_36241);

(statearr_36263_36280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (8))){
var inst_36229 = (state_36249[(7)]);
var inst_36228 = (state_36249[(8)]);
var inst_36230 = (state_36249[(9)]);
var inst_36219 = (state_36249[(10)]);
var inst_36233 = (function (){var cs = inst_36219;
var vec__36224 = inst_36228;
var v = inst_36229;
var c = inst_36230;
return (function (p1__36215_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36215_SHARP_);
});
})();
var inst_36234 = cljs.core.filterv.call(null,inst_36233,inst_36219);
var inst_36219__$1 = inst_36234;
var state_36249__$1 = (function (){var statearr_36264 = state_36249;
(statearr_36264[(10)] = inst_36219__$1);

return statearr_36264;
})();
var statearr_36265_36281 = state_36249__$1;
(statearr_36265_36281[(2)] = null);

(statearr_36265_36281[(1)] = (2));


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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36266[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36266[(1)] = (1));

return statearr_36266;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36249){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36267){if((e36267 instanceof Object)){
var ex__34754__auto__ = e36267;
var statearr_36268_36282 = state_36249;
(statearr_36268_36282[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36283 = state_36249;
state_36249 = G__36283;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36269 = f__34846__auto__.call(null);
(statearr_36269[(6)] = c__34845__auto___36271);

return statearr_36269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
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
var G__36285 = arguments.length;
switch (G__36285) {
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
var c__34845__auto___36330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36309){
var state_val_36310 = (state_36309[(1)]);
if((state_val_36310 === (7))){
var inst_36291 = (state_36309[(7)]);
var inst_36291__$1 = (state_36309[(2)]);
var inst_36292 = (inst_36291__$1 == null);
var inst_36293 = cljs.core.not.call(null,inst_36292);
var state_36309__$1 = (function (){var statearr_36311 = state_36309;
(statearr_36311[(7)] = inst_36291__$1);

return statearr_36311;
})();
if(inst_36293){
var statearr_36312_36331 = state_36309__$1;
(statearr_36312_36331[(1)] = (8));

} else {
var statearr_36313_36332 = state_36309__$1;
(statearr_36313_36332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (1))){
var inst_36286 = (0);
var state_36309__$1 = (function (){var statearr_36314 = state_36309;
(statearr_36314[(8)] = inst_36286);

return statearr_36314;
})();
var statearr_36315_36333 = state_36309__$1;
(statearr_36315_36333[(2)] = null);

(statearr_36315_36333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (4))){
var state_36309__$1 = state_36309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36309__$1,(7),ch);
} else {
if((state_val_36310 === (6))){
var inst_36304 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
var statearr_36316_36334 = state_36309__$1;
(statearr_36316_36334[(2)] = inst_36304);

(statearr_36316_36334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (3))){
var inst_36306 = (state_36309[(2)]);
var inst_36307 = cljs.core.async.close_BANG_.call(null,out);
var state_36309__$1 = (function (){var statearr_36317 = state_36309;
(statearr_36317[(9)] = inst_36306);

return statearr_36317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36309__$1,inst_36307);
} else {
if((state_val_36310 === (2))){
var inst_36286 = (state_36309[(8)]);
var inst_36288 = (inst_36286 < n);
var state_36309__$1 = state_36309;
if(cljs.core.truth_(inst_36288)){
var statearr_36318_36335 = state_36309__$1;
(statearr_36318_36335[(1)] = (4));

} else {
var statearr_36319_36336 = state_36309__$1;
(statearr_36319_36336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (11))){
var inst_36286 = (state_36309[(8)]);
var inst_36296 = (state_36309[(2)]);
var inst_36297 = (inst_36286 + (1));
var inst_36286__$1 = inst_36297;
var state_36309__$1 = (function (){var statearr_36320 = state_36309;
(statearr_36320[(8)] = inst_36286__$1);

(statearr_36320[(10)] = inst_36296);

return statearr_36320;
})();
var statearr_36321_36337 = state_36309__$1;
(statearr_36321_36337[(2)] = null);

(statearr_36321_36337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (9))){
var state_36309__$1 = state_36309;
var statearr_36322_36338 = state_36309__$1;
(statearr_36322_36338[(2)] = null);

(statearr_36322_36338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (5))){
var state_36309__$1 = state_36309;
var statearr_36323_36339 = state_36309__$1;
(statearr_36323_36339[(2)] = null);

(statearr_36323_36339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (10))){
var inst_36301 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
var statearr_36324_36340 = state_36309__$1;
(statearr_36324_36340[(2)] = inst_36301);

(statearr_36324_36340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (8))){
var inst_36291 = (state_36309[(7)]);
var state_36309__$1 = state_36309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36309__$1,(11),out,inst_36291);
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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36325[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36325[(1)] = (1));

return statearr_36325;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36309){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36326){if((e36326 instanceof Object)){
var ex__34754__auto__ = e36326;
var statearr_36327_36341 = state_36309;
(statearr_36327_36341[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36342 = state_36309;
state_36309 = G__36342;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36328 = f__34846__auto__.call(null);
(statearr_36328[(6)] = c__34845__auto___36330);

return statearr_36328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36344 = (function (f,ch,meta36345){
this.f = f;
this.ch = ch;
this.meta36345 = meta36345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36346,meta36345__$1){
var self__ = this;
var _36346__$1 = this;
return (new cljs.core.async.t_cljs$core$async36344(self__.f,self__.ch,meta36345__$1));
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36346){
var self__ = this;
var _36346__$1 = this;
return self__.meta36345;
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36347 = (function (f,ch,meta36345,_,fn1,meta36348){
this.f = f;
this.ch = ch;
this.meta36345 = meta36345;
this._ = _;
this.fn1 = fn1;
this.meta36348 = meta36348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36349,meta36348__$1){
var self__ = this;
var _36349__$1 = this;
return (new cljs.core.async.t_cljs$core$async36347(self__.f,self__.ch,self__.meta36345,self__._,self__.fn1,meta36348__$1));
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36349){
var self__ = this;
var _36349__$1 = this;
return self__.meta36348;
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__36343_SHARP_){
return f1.call(null,(((p1__36343_SHARP_ == null))?null:self__.f.call(null,p1__36343_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async36347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36345","meta36345",-82122636,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36344","cljs.core.async/t_cljs$core$async36344",754979757,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36348","meta36348",1966817187,null)], null);
}));

(cljs.core.async.t_cljs$core$async36347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36347");

(cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36347.
 */
cljs.core.async.__GT_t_cljs$core$async36347 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36347(f__$1,ch__$1,meta36345__$1,___$2,fn1__$1,meta36348){
return (new cljs.core.async.t_cljs$core$async36347(f__$1,ch__$1,meta36345__$1,___$2,fn1__$1,meta36348));
});

}

return (new cljs.core.async.t_cljs$core$async36347(self__.f,self__.ch,self__.meta36345,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36345","meta36345",-82122636,null)], null);
}));

(cljs.core.async.t_cljs$core$async36344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36344");

(cljs.core.async.t_cljs$core$async36344.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36344.
 */
cljs.core.async.__GT_t_cljs$core$async36344 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36344(f__$1,ch__$1,meta36345){
return (new cljs.core.async.t_cljs$core$async36344(f__$1,ch__$1,meta36345));
});

}

return (new cljs.core.async.t_cljs$core$async36344(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36350 = (function (f,ch,meta36351){
this.f = f;
this.ch = ch;
this.meta36351 = meta36351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36352,meta36351__$1){
var self__ = this;
var _36352__$1 = this;
return (new cljs.core.async.t_cljs$core$async36350(self__.f,self__.ch,meta36351__$1));
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36352){
var self__ = this;
var _36352__$1 = this;
return self__.meta36351;
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async36350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36351","meta36351",-30894265,null)], null);
}));

(cljs.core.async.t_cljs$core$async36350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36350");

(cljs.core.async.t_cljs$core$async36350.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36350.
 */
cljs.core.async.__GT_t_cljs$core$async36350 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36350(f__$1,ch__$1,meta36351){
return (new cljs.core.async.t_cljs$core$async36350(f__$1,ch__$1,meta36351));
});

}

return (new cljs.core.async.t_cljs$core$async36350(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36353 = (function (p,ch,meta36354){
this.p = p;
this.ch = ch;
this.meta36354 = meta36354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36355,meta36354__$1){
var self__ = this;
var _36355__$1 = this;
return (new cljs.core.async.t_cljs$core$async36353(self__.p,self__.ch,meta36354__$1));
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36355){
var self__ = this;
var _36355__$1 = this;
return self__.meta36354;
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36354","meta36354",1346918055,null)], null);
}));

(cljs.core.async.t_cljs$core$async36353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36353");

(cljs.core.async.t_cljs$core$async36353.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36353.
 */
cljs.core.async.__GT_t_cljs$core$async36353 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36353(p__$1,ch__$1,meta36354){
return (new cljs.core.async.t_cljs$core$async36353(p__$1,ch__$1,meta36354));
});

}

return (new cljs.core.async.t_cljs$core$async36353(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36357 = arguments.length;
switch (G__36357) {
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
var c__34845__auto___36397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36378){
var state_val_36379 = (state_36378[(1)]);
if((state_val_36379 === (7))){
var inst_36374 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36380_36398 = state_36378__$1;
(statearr_36380_36398[(2)] = inst_36374);

(statearr_36380_36398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (1))){
var state_36378__$1 = state_36378;
var statearr_36381_36399 = state_36378__$1;
(statearr_36381_36399[(2)] = null);

(statearr_36381_36399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (4))){
var inst_36360 = (state_36378[(7)]);
var inst_36360__$1 = (state_36378[(2)]);
var inst_36361 = (inst_36360__$1 == null);
var state_36378__$1 = (function (){var statearr_36382 = state_36378;
(statearr_36382[(7)] = inst_36360__$1);

return statearr_36382;
})();
if(cljs.core.truth_(inst_36361)){
var statearr_36383_36400 = state_36378__$1;
(statearr_36383_36400[(1)] = (5));

} else {
var statearr_36384_36401 = state_36378__$1;
(statearr_36384_36401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (6))){
var inst_36360 = (state_36378[(7)]);
var inst_36365 = p.call(null,inst_36360);
var state_36378__$1 = state_36378;
if(cljs.core.truth_(inst_36365)){
var statearr_36385_36402 = state_36378__$1;
(statearr_36385_36402[(1)] = (8));

} else {
var statearr_36386_36403 = state_36378__$1;
(statearr_36386_36403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (3))){
var inst_36376 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36378__$1,inst_36376);
} else {
if((state_val_36379 === (2))){
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36378__$1,(4),ch);
} else {
if((state_val_36379 === (11))){
var inst_36368 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36387_36404 = state_36378__$1;
(statearr_36387_36404[(2)] = inst_36368);

(statearr_36387_36404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (9))){
var state_36378__$1 = state_36378;
var statearr_36388_36405 = state_36378__$1;
(statearr_36388_36405[(2)] = null);

(statearr_36388_36405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (5))){
var inst_36363 = cljs.core.async.close_BANG_.call(null,out);
var state_36378__$1 = state_36378;
var statearr_36389_36406 = state_36378__$1;
(statearr_36389_36406[(2)] = inst_36363);

(statearr_36389_36406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (10))){
var inst_36371 = (state_36378[(2)]);
var state_36378__$1 = (function (){var statearr_36390 = state_36378;
(statearr_36390[(8)] = inst_36371);

return statearr_36390;
})();
var statearr_36391_36407 = state_36378__$1;
(statearr_36391_36407[(2)] = null);

(statearr_36391_36407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (8))){
var inst_36360 = (state_36378[(7)]);
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36378__$1,(11),out,inst_36360);
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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36392 = [null,null,null,null,null,null,null,null,null];
(statearr_36392[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36392[(1)] = (1));

return statearr_36392;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36378){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36393){if((e36393 instanceof Object)){
var ex__34754__auto__ = e36393;
var statearr_36394_36408 = state_36378;
(statearr_36394_36408[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36409 = state_36378;
state_36378 = G__36409;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36395 = f__34846__auto__.call(null);
(statearr_36395[(6)] = c__34845__auto___36397);

return statearr_36395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36411 = arguments.length;
switch (G__36411) {
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
var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36474){
var state_val_36475 = (state_36474[(1)]);
if((state_val_36475 === (7))){
var inst_36470 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
var statearr_36476_36514 = state_36474__$1;
(statearr_36476_36514[(2)] = inst_36470);

(statearr_36476_36514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (20))){
var inst_36440 = (state_36474[(7)]);
var inst_36451 = (state_36474[(2)]);
var inst_36452 = cljs.core.next.call(null,inst_36440);
var inst_36426 = inst_36452;
var inst_36427 = null;
var inst_36428 = (0);
var inst_36429 = (0);
var state_36474__$1 = (function (){var statearr_36477 = state_36474;
(statearr_36477[(8)] = inst_36426);

(statearr_36477[(9)] = inst_36451);

(statearr_36477[(10)] = inst_36428);

(statearr_36477[(11)] = inst_36429);

(statearr_36477[(12)] = inst_36427);

return statearr_36477;
})();
var statearr_36478_36515 = state_36474__$1;
(statearr_36478_36515[(2)] = null);

(statearr_36478_36515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (1))){
var state_36474__$1 = state_36474;
var statearr_36479_36516 = state_36474__$1;
(statearr_36479_36516[(2)] = null);

(statearr_36479_36516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (4))){
var inst_36415 = (state_36474[(13)]);
var inst_36415__$1 = (state_36474[(2)]);
var inst_36416 = (inst_36415__$1 == null);
var state_36474__$1 = (function (){var statearr_36480 = state_36474;
(statearr_36480[(13)] = inst_36415__$1);

return statearr_36480;
})();
if(cljs.core.truth_(inst_36416)){
var statearr_36481_36517 = state_36474__$1;
(statearr_36481_36517[(1)] = (5));

} else {
var statearr_36482_36518 = state_36474__$1;
(statearr_36482_36518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (15))){
var state_36474__$1 = state_36474;
var statearr_36486_36519 = state_36474__$1;
(statearr_36486_36519[(2)] = null);

(statearr_36486_36519[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (21))){
var state_36474__$1 = state_36474;
var statearr_36487_36520 = state_36474__$1;
(statearr_36487_36520[(2)] = null);

(statearr_36487_36520[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (13))){
var inst_36426 = (state_36474[(8)]);
var inst_36428 = (state_36474[(10)]);
var inst_36429 = (state_36474[(11)]);
var inst_36427 = (state_36474[(12)]);
var inst_36436 = (state_36474[(2)]);
var inst_36437 = (inst_36429 + (1));
var tmp36483 = inst_36426;
var tmp36484 = inst_36428;
var tmp36485 = inst_36427;
var inst_36426__$1 = tmp36483;
var inst_36427__$1 = tmp36485;
var inst_36428__$1 = tmp36484;
var inst_36429__$1 = inst_36437;
var state_36474__$1 = (function (){var statearr_36488 = state_36474;
(statearr_36488[(8)] = inst_36426__$1);

(statearr_36488[(14)] = inst_36436);

(statearr_36488[(10)] = inst_36428__$1);

(statearr_36488[(11)] = inst_36429__$1);

(statearr_36488[(12)] = inst_36427__$1);

return statearr_36488;
})();
var statearr_36489_36521 = state_36474__$1;
(statearr_36489_36521[(2)] = null);

(statearr_36489_36521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (22))){
var state_36474__$1 = state_36474;
var statearr_36490_36522 = state_36474__$1;
(statearr_36490_36522[(2)] = null);

(statearr_36490_36522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (6))){
var inst_36415 = (state_36474[(13)]);
var inst_36424 = f.call(null,inst_36415);
var inst_36425 = cljs.core.seq.call(null,inst_36424);
var inst_36426 = inst_36425;
var inst_36427 = null;
var inst_36428 = (0);
var inst_36429 = (0);
var state_36474__$1 = (function (){var statearr_36491 = state_36474;
(statearr_36491[(8)] = inst_36426);

(statearr_36491[(10)] = inst_36428);

(statearr_36491[(11)] = inst_36429);

(statearr_36491[(12)] = inst_36427);

return statearr_36491;
})();
var statearr_36492_36523 = state_36474__$1;
(statearr_36492_36523[(2)] = null);

(statearr_36492_36523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (17))){
var inst_36440 = (state_36474[(7)]);
var inst_36444 = cljs.core.chunk_first.call(null,inst_36440);
var inst_36445 = cljs.core.chunk_rest.call(null,inst_36440);
var inst_36446 = cljs.core.count.call(null,inst_36444);
var inst_36426 = inst_36445;
var inst_36427 = inst_36444;
var inst_36428 = inst_36446;
var inst_36429 = (0);
var state_36474__$1 = (function (){var statearr_36493 = state_36474;
(statearr_36493[(8)] = inst_36426);

(statearr_36493[(10)] = inst_36428);

(statearr_36493[(11)] = inst_36429);

(statearr_36493[(12)] = inst_36427);

return statearr_36493;
})();
var statearr_36494_36524 = state_36474__$1;
(statearr_36494_36524[(2)] = null);

(statearr_36494_36524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (3))){
var inst_36472 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36474__$1,inst_36472);
} else {
if((state_val_36475 === (12))){
var inst_36460 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
var statearr_36495_36525 = state_36474__$1;
(statearr_36495_36525[(2)] = inst_36460);

(statearr_36495_36525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (2))){
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36474__$1,(4),in$);
} else {
if((state_val_36475 === (23))){
var inst_36468 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
var statearr_36496_36526 = state_36474__$1;
(statearr_36496_36526[(2)] = inst_36468);

(statearr_36496_36526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (19))){
var inst_36455 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
var statearr_36497_36527 = state_36474__$1;
(statearr_36497_36527[(2)] = inst_36455);

(statearr_36497_36527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (11))){
var inst_36426 = (state_36474[(8)]);
var inst_36440 = (state_36474[(7)]);
var inst_36440__$1 = cljs.core.seq.call(null,inst_36426);
var state_36474__$1 = (function (){var statearr_36498 = state_36474;
(statearr_36498[(7)] = inst_36440__$1);

return statearr_36498;
})();
if(inst_36440__$1){
var statearr_36499_36528 = state_36474__$1;
(statearr_36499_36528[(1)] = (14));

} else {
var statearr_36500_36529 = state_36474__$1;
(statearr_36500_36529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (9))){
var inst_36462 = (state_36474[(2)]);
var inst_36463 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36474__$1 = (function (){var statearr_36501 = state_36474;
(statearr_36501[(15)] = inst_36462);

return statearr_36501;
})();
if(cljs.core.truth_(inst_36463)){
var statearr_36502_36530 = state_36474__$1;
(statearr_36502_36530[(1)] = (21));

} else {
var statearr_36503_36531 = state_36474__$1;
(statearr_36503_36531[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (5))){
var inst_36418 = cljs.core.async.close_BANG_.call(null,out);
var state_36474__$1 = state_36474;
var statearr_36504_36532 = state_36474__$1;
(statearr_36504_36532[(2)] = inst_36418);

(statearr_36504_36532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (14))){
var inst_36440 = (state_36474[(7)]);
var inst_36442 = cljs.core.chunked_seq_QMARK_.call(null,inst_36440);
var state_36474__$1 = state_36474;
if(inst_36442){
var statearr_36505_36533 = state_36474__$1;
(statearr_36505_36533[(1)] = (17));

} else {
var statearr_36506_36534 = state_36474__$1;
(statearr_36506_36534[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (16))){
var inst_36458 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
var statearr_36507_36535 = state_36474__$1;
(statearr_36507_36535[(2)] = inst_36458);

(statearr_36507_36535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (10))){
var inst_36429 = (state_36474[(11)]);
var inst_36427 = (state_36474[(12)]);
var inst_36434 = cljs.core._nth.call(null,inst_36427,inst_36429);
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36474__$1,(13),out,inst_36434);
} else {
if((state_val_36475 === (18))){
var inst_36440 = (state_36474[(7)]);
var inst_36449 = cljs.core.first.call(null,inst_36440);
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36474__$1,(20),out,inst_36449);
} else {
if((state_val_36475 === (8))){
var inst_36428 = (state_36474[(10)]);
var inst_36429 = (state_36474[(11)]);
var inst_36431 = (inst_36429 < inst_36428);
var inst_36432 = inst_36431;
var state_36474__$1 = state_36474;
if(cljs.core.truth_(inst_36432)){
var statearr_36508_36536 = state_36474__$1;
(statearr_36508_36536[(1)] = (10));

} else {
var statearr_36509_36537 = state_36474__$1;
(statearr_36509_36537[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34751__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34751__auto____0 = (function (){
var statearr_36510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36510[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34751__auto__);

(statearr_36510[(1)] = (1));

return statearr_36510;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34751__auto____1 = (function (state_36474){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36511){if((e36511 instanceof Object)){
var ex__34754__auto__ = e36511;
var statearr_36512_36538 = state_36474;
(statearr_36512_36538[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36539 = state_36474;
state_36474 = G__36539;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34751__auto__ = function(state_36474){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34751__auto____1.call(this,state_36474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34751__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34751__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36513 = f__34846__auto__.call(null);
(statearr_36513[(6)] = c__34845__auto__);

return statearr_36513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36541 = arguments.length;
switch (G__36541) {
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
var G__36544 = arguments.length;
switch (G__36544) {
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
var G__36547 = arguments.length;
switch (G__36547) {
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
var c__34845__auto___36594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36571){
var state_val_36572 = (state_36571[(1)]);
if((state_val_36572 === (7))){
var inst_36566 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36573_36595 = state_36571__$1;
(statearr_36573_36595[(2)] = inst_36566);

(statearr_36573_36595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (1))){
var inst_36548 = null;
var state_36571__$1 = (function (){var statearr_36574 = state_36571;
(statearr_36574[(7)] = inst_36548);

return statearr_36574;
})();
var statearr_36575_36596 = state_36571__$1;
(statearr_36575_36596[(2)] = null);

(statearr_36575_36596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (4))){
var inst_36551 = (state_36571[(8)]);
var inst_36551__$1 = (state_36571[(2)]);
var inst_36552 = (inst_36551__$1 == null);
var inst_36553 = cljs.core.not.call(null,inst_36552);
var state_36571__$1 = (function (){var statearr_36576 = state_36571;
(statearr_36576[(8)] = inst_36551__$1);

return statearr_36576;
})();
if(inst_36553){
var statearr_36577_36597 = state_36571__$1;
(statearr_36577_36597[(1)] = (5));

} else {
var statearr_36578_36598 = state_36571__$1;
(statearr_36578_36598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (6))){
var state_36571__$1 = state_36571;
var statearr_36579_36599 = state_36571__$1;
(statearr_36579_36599[(2)] = null);

(statearr_36579_36599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (3))){
var inst_36568 = (state_36571[(2)]);
var inst_36569 = cljs.core.async.close_BANG_.call(null,out);
var state_36571__$1 = (function (){var statearr_36580 = state_36571;
(statearr_36580[(9)] = inst_36568);

return statearr_36580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36571__$1,inst_36569);
} else {
if((state_val_36572 === (2))){
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(4),ch);
} else {
if((state_val_36572 === (11))){
var inst_36551 = (state_36571[(8)]);
var inst_36560 = (state_36571[(2)]);
var inst_36548 = inst_36551;
var state_36571__$1 = (function (){var statearr_36581 = state_36571;
(statearr_36581[(10)] = inst_36560);

(statearr_36581[(7)] = inst_36548);

return statearr_36581;
})();
var statearr_36582_36600 = state_36571__$1;
(statearr_36582_36600[(2)] = null);

(statearr_36582_36600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (9))){
var inst_36551 = (state_36571[(8)]);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36571__$1,(11),out,inst_36551);
} else {
if((state_val_36572 === (5))){
var inst_36551 = (state_36571[(8)]);
var inst_36548 = (state_36571[(7)]);
var inst_36555 = cljs.core._EQ_.call(null,inst_36551,inst_36548);
var state_36571__$1 = state_36571;
if(inst_36555){
var statearr_36584_36601 = state_36571__$1;
(statearr_36584_36601[(1)] = (8));

} else {
var statearr_36585_36602 = state_36571__$1;
(statearr_36585_36602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (10))){
var inst_36563 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36586_36603 = state_36571__$1;
(statearr_36586_36603[(2)] = inst_36563);

(statearr_36586_36603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (8))){
var inst_36548 = (state_36571[(7)]);
var tmp36583 = inst_36548;
var inst_36548__$1 = tmp36583;
var state_36571__$1 = (function (){var statearr_36587 = state_36571;
(statearr_36587[(7)] = inst_36548__$1);

return statearr_36587;
})();
var statearr_36588_36604 = state_36571__$1;
(statearr_36588_36604[(2)] = null);

(statearr_36588_36604[(1)] = (2));


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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36589 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36589[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36589[(1)] = (1));

return statearr_36589;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36571){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36590){if((e36590 instanceof Object)){
var ex__34754__auto__ = e36590;
var statearr_36591_36605 = state_36571;
(statearr_36591_36605[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36606 = state_36571;
state_36571 = G__36606;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36592 = f__34846__auto__.call(null);
(statearr_36592[(6)] = c__34845__auto___36594);

return statearr_36592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36608 = arguments.length;
switch (G__36608) {
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
var c__34845__auto___36674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36646){
var state_val_36647 = (state_36646[(1)]);
if((state_val_36647 === (7))){
var inst_36642 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36648_36675 = state_36646__$1;
(statearr_36648_36675[(2)] = inst_36642);

(statearr_36648_36675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (1))){
var inst_36609 = (new Array(n));
var inst_36610 = inst_36609;
var inst_36611 = (0);
var state_36646__$1 = (function (){var statearr_36649 = state_36646;
(statearr_36649[(7)] = inst_36610);

(statearr_36649[(8)] = inst_36611);

return statearr_36649;
})();
var statearr_36650_36676 = state_36646__$1;
(statearr_36650_36676[(2)] = null);

(statearr_36650_36676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (4))){
var inst_36614 = (state_36646[(9)]);
var inst_36614__$1 = (state_36646[(2)]);
var inst_36615 = (inst_36614__$1 == null);
var inst_36616 = cljs.core.not.call(null,inst_36615);
var state_36646__$1 = (function (){var statearr_36651 = state_36646;
(statearr_36651[(9)] = inst_36614__$1);

return statearr_36651;
})();
if(inst_36616){
var statearr_36652_36677 = state_36646__$1;
(statearr_36652_36677[(1)] = (5));

} else {
var statearr_36653_36678 = state_36646__$1;
(statearr_36653_36678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (15))){
var inst_36636 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36654_36679 = state_36646__$1;
(statearr_36654_36679[(2)] = inst_36636);

(statearr_36654_36679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (13))){
var state_36646__$1 = state_36646;
var statearr_36655_36680 = state_36646__$1;
(statearr_36655_36680[(2)] = null);

(statearr_36655_36680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (6))){
var inst_36611 = (state_36646[(8)]);
var inst_36632 = (inst_36611 > (0));
var state_36646__$1 = state_36646;
if(cljs.core.truth_(inst_36632)){
var statearr_36656_36681 = state_36646__$1;
(statearr_36656_36681[(1)] = (12));

} else {
var statearr_36657_36682 = state_36646__$1;
(statearr_36657_36682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (3))){
var inst_36644 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36646__$1,inst_36644);
} else {
if((state_val_36647 === (12))){
var inst_36610 = (state_36646[(7)]);
var inst_36634 = cljs.core.vec.call(null,inst_36610);
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36646__$1,(15),out,inst_36634);
} else {
if((state_val_36647 === (2))){
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36646__$1,(4),ch);
} else {
if((state_val_36647 === (11))){
var inst_36626 = (state_36646[(2)]);
var inst_36627 = (new Array(n));
var inst_36610 = inst_36627;
var inst_36611 = (0);
var state_36646__$1 = (function (){var statearr_36658 = state_36646;
(statearr_36658[(7)] = inst_36610);

(statearr_36658[(8)] = inst_36611);

(statearr_36658[(10)] = inst_36626);

return statearr_36658;
})();
var statearr_36659_36683 = state_36646__$1;
(statearr_36659_36683[(2)] = null);

(statearr_36659_36683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (9))){
var inst_36610 = (state_36646[(7)]);
var inst_36624 = cljs.core.vec.call(null,inst_36610);
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36646__$1,(11),out,inst_36624);
} else {
if((state_val_36647 === (5))){
var inst_36610 = (state_36646[(7)]);
var inst_36611 = (state_36646[(8)]);
var inst_36619 = (state_36646[(11)]);
var inst_36614 = (state_36646[(9)]);
var inst_36618 = (inst_36610[inst_36611] = inst_36614);
var inst_36619__$1 = (inst_36611 + (1));
var inst_36620 = (inst_36619__$1 < n);
var state_36646__$1 = (function (){var statearr_36660 = state_36646;
(statearr_36660[(11)] = inst_36619__$1);

(statearr_36660[(12)] = inst_36618);

return statearr_36660;
})();
if(cljs.core.truth_(inst_36620)){
var statearr_36661_36684 = state_36646__$1;
(statearr_36661_36684[(1)] = (8));

} else {
var statearr_36662_36685 = state_36646__$1;
(statearr_36662_36685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (14))){
var inst_36639 = (state_36646[(2)]);
var inst_36640 = cljs.core.async.close_BANG_.call(null,out);
var state_36646__$1 = (function (){var statearr_36664 = state_36646;
(statearr_36664[(13)] = inst_36639);

return statearr_36664;
})();
var statearr_36665_36686 = state_36646__$1;
(statearr_36665_36686[(2)] = inst_36640);

(statearr_36665_36686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (10))){
var inst_36630 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36666_36687 = state_36646__$1;
(statearr_36666_36687[(2)] = inst_36630);

(statearr_36666_36687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (8))){
var inst_36610 = (state_36646[(7)]);
var inst_36619 = (state_36646[(11)]);
var tmp36663 = inst_36610;
var inst_36610__$1 = tmp36663;
var inst_36611 = inst_36619;
var state_36646__$1 = (function (){var statearr_36667 = state_36646;
(statearr_36667[(7)] = inst_36610__$1);

(statearr_36667[(8)] = inst_36611);

return statearr_36667;
})();
var statearr_36668_36688 = state_36646__$1;
(statearr_36668_36688[(2)] = null);

(statearr_36668_36688[(1)] = (2));


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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36669[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36669[(1)] = (1));

return statearr_36669;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36646){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36670){if((e36670 instanceof Object)){
var ex__34754__auto__ = e36670;
var statearr_36671_36689 = state_36646;
(statearr_36671_36689[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36690 = state_36646;
state_36646 = G__36690;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36672 = f__34846__auto__.call(null);
(statearr_36672[(6)] = c__34845__auto___36674);

return statearr_36672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36692 = arguments.length;
switch (G__36692) {
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
var c__34845__auto___36762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_36734){
var state_val_36735 = (state_36734[(1)]);
if((state_val_36735 === (7))){
var inst_36730 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36736_36763 = state_36734__$1;
(statearr_36736_36763[(2)] = inst_36730);

(statearr_36736_36763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (1))){
var inst_36693 = [];
var inst_36694 = inst_36693;
var inst_36695 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36734__$1 = (function (){var statearr_36737 = state_36734;
(statearr_36737[(7)] = inst_36694);

(statearr_36737[(8)] = inst_36695);

return statearr_36737;
})();
var statearr_36738_36764 = state_36734__$1;
(statearr_36738_36764[(2)] = null);

(statearr_36738_36764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (4))){
var inst_36698 = (state_36734[(9)]);
var inst_36698__$1 = (state_36734[(2)]);
var inst_36699 = (inst_36698__$1 == null);
var inst_36700 = cljs.core.not.call(null,inst_36699);
var state_36734__$1 = (function (){var statearr_36739 = state_36734;
(statearr_36739[(9)] = inst_36698__$1);

return statearr_36739;
})();
if(inst_36700){
var statearr_36740_36765 = state_36734__$1;
(statearr_36740_36765[(1)] = (5));

} else {
var statearr_36741_36766 = state_36734__$1;
(statearr_36741_36766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (15))){
var inst_36724 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36742_36767 = state_36734__$1;
(statearr_36742_36767[(2)] = inst_36724);

(statearr_36742_36767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (13))){
var state_36734__$1 = state_36734;
var statearr_36743_36768 = state_36734__$1;
(statearr_36743_36768[(2)] = null);

(statearr_36743_36768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (6))){
var inst_36694 = (state_36734[(7)]);
var inst_36719 = inst_36694.length;
var inst_36720 = (inst_36719 > (0));
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36720)){
var statearr_36744_36769 = state_36734__$1;
(statearr_36744_36769[(1)] = (12));

} else {
var statearr_36745_36770 = state_36734__$1;
(statearr_36745_36770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (3))){
var inst_36732 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36734__$1,inst_36732);
} else {
if((state_val_36735 === (12))){
var inst_36694 = (state_36734[(7)]);
var inst_36722 = cljs.core.vec.call(null,inst_36694);
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36734__$1,(15),out,inst_36722);
} else {
if((state_val_36735 === (2))){
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36734__$1,(4),ch);
} else {
if((state_val_36735 === (11))){
var inst_36698 = (state_36734[(9)]);
var inst_36702 = (state_36734[(10)]);
var inst_36712 = (state_36734[(2)]);
var inst_36713 = [];
var inst_36714 = inst_36713.push(inst_36698);
var inst_36694 = inst_36713;
var inst_36695 = inst_36702;
var state_36734__$1 = (function (){var statearr_36746 = state_36734;
(statearr_36746[(11)] = inst_36714);

(statearr_36746[(7)] = inst_36694);

(statearr_36746[(8)] = inst_36695);

(statearr_36746[(12)] = inst_36712);

return statearr_36746;
})();
var statearr_36747_36771 = state_36734__$1;
(statearr_36747_36771[(2)] = null);

(statearr_36747_36771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (9))){
var inst_36694 = (state_36734[(7)]);
var inst_36710 = cljs.core.vec.call(null,inst_36694);
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36734__$1,(11),out,inst_36710);
} else {
if((state_val_36735 === (5))){
var inst_36698 = (state_36734[(9)]);
var inst_36702 = (state_36734[(10)]);
var inst_36695 = (state_36734[(8)]);
var inst_36702__$1 = f.call(null,inst_36698);
var inst_36703 = cljs.core._EQ_.call(null,inst_36702__$1,inst_36695);
var inst_36704 = cljs.core.keyword_identical_QMARK_.call(null,inst_36695,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36705 = ((inst_36703) || (inst_36704));
var state_36734__$1 = (function (){var statearr_36748 = state_36734;
(statearr_36748[(10)] = inst_36702__$1);

return statearr_36748;
})();
if(cljs.core.truth_(inst_36705)){
var statearr_36749_36772 = state_36734__$1;
(statearr_36749_36772[(1)] = (8));

} else {
var statearr_36750_36773 = state_36734__$1;
(statearr_36750_36773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (14))){
var inst_36727 = (state_36734[(2)]);
var inst_36728 = cljs.core.async.close_BANG_.call(null,out);
var state_36734__$1 = (function (){var statearr_36752 = state_36734;
(statearr_36752[(13)] = inst_36727);

return statearr_36752;
})();
var statearr_36753_36774 = state_36734__$1;
(statearr_36753_36774[(2)] = inst_36728);

(statearr_36753_36774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (10))){
var inst_36717 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36754_36775 = state_36734__$1;
(statearr_36754_36775[(2)] = inst_36717);

(statearr_36754_36775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (8))){
var inst_36698 = (state_36734[(9)]);
var inst_36694 = (state_36734[(7)]);
var inst_36702 = (state_36734[(10)]);
var inst_36707 = inst_36694.push(inst_36698);
var tmp36751 = inst_36694;
var inst_36694__$1 = tmp36751;
var inst_36695 = inst_36702;
var state_36734__$1 = (function (){var statearr_36755 = state_36734;
(statearr_36755[(7)] = inst_36694__$1);

(statearr_36755[(14)] = inst_36707);

(statearr_36755[(8)] = inst_36695);

return statearr_36755;
})();
var statearr_36756_36776 = state_36734__$1;
(statearr_36756_36776[(2)] = null);

(statearr_36756_36776[(1)] = (2));


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
var cljs$core$async$state_machine__34751__auto__ = null;
var cljs$core$async$state_machine__34751__auto____0 = (function (){
var statearr_36757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36757[(0)] = cljs$core$async$state_machine__34751__auto__);

(statearr_36757[(1)] = (1));

return statearr_36757;
});
var cljs$core$async$state_machine__34751__auto____1 = (function (state_36734){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_36734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e36758){if((e36758 instanceof Object)){
var ex__34754__auto__ = e36758;
var statearr_36759_36777 = state_36734;
(statearr_36759_36777[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36778 = state_36734;
state_36734 = G__36778;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
cljs$core$async$state_machine__34751__auto__ = function(state_36734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34751__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34751__auto____1.call(this,state_36734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34751__auto____0;
cljs$core$async$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34751__auto____1;
return cljs$core$async$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_36760 = f__34846__auto__.call(null);
(statearr_36760[(6)] = c__34845__auto___36762);

return statearr_36760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1626961186527

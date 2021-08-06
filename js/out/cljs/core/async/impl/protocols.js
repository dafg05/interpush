// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

/**
 * @interface
 */
cljs.core.async.impl.protocols.ReadPort = function(){};

var cljs$core$async$impl$protocols$ReadPort$take_BANG_$dyn_26932 = (function (port,fn1_handler){
var x__4428__auto__ = (((port == null))?null:port);
var m__4429__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,port,fn1_handler);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
});
/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((((!((port == null)))) && ((!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
return cljs$core$async$impl$protocols$ReadPort$take_BANG_$dyn_26932.call(null,port,fn1_handler);
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.WritePort = function(){};

var cljs$core$async$impl$protocols$WritePort$put_BANG_$dyn_26933 = (function (port,val,fn1_handler){
var x__4428__auto__ = (((port == null))?null:port);
var m__4429__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,port,val,fn1_handler);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,port,val,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
});
/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 *                             Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((((!((port == null)))) && ((!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
return cljs$core$async$impl$protocols$WritePort$put_BANG_$dyn_26933.call(null,port,val,fn1_handler);
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Channel = function(){};

var cljs$core$async$impl$protocols$Channel$close_BANG_$dyn_26934 = (function (chan){
var x__4428__auto__ = (((chan == null))?null:chan);
var m__4429__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,chan);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
});
cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((((!((chan == null)))) && ((!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
return cljs$core$async$impl$protocols$Channel$close_BANG_$dyn_26934.call(null,chan);
}
});

var cljs$core$async$impl$protocols$Channel$closed_QMARK_$dyn_26935 = (function (chan){
var x__4428__auto__ = (((chan == null))?null:chan);
var m__4429__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,chan);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((((!((chan == null)))) && ((!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
return cljs$core$async$impl$protocols$Channel$closed_QMARK_$dyn_26935.call(null,chan);
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Handler = function(){};

var cljs$core$async$impl$protocols$Handler$active_QMARK_$dyn_26936 = (function (h){
var x__4428__auto__ = (((h == null))?null:h);
var m__4429__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,h);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
});
/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((((!((h == null)))) && ((!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
return cljs$core$async$impl$protocols$Handler$active_QMARK_$dyn_26936.call(null,h);
}
});

var cljs$core$async$impl$protocols$Handler$blockable_QMARK_$dyn_26937 = (function (h){
var x__4428__auto__ = (((h == null))?null:h);
var m__4429__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,h);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.blockable?",h);
}
}
});
/**
 * returns true if this handler may be blocked, otherwise it must not block
 */
cljs.core.async.impl.protocols.blockable_QMARK_ = (function cljs$core$async$impl$protocols$blockable_QMARK_(h){
if((((!((h == null)))) && ((!((h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 == null)))))){
return h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(h);
} else {
return cljs$core$async$impl$protocols$Handler$blockable_QMARK_$dyn_26937.call(null,h);
}
});

var cljs$core$async$impl$protocols$Handler$commit$dyn_26938 = (function (h){
var x__4428__auto__ = (((h == null))?null:h);
var m__4429__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,h);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.commit["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
});
/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((((!((h == null)))) && ((!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
return cljs$core$async$impl$protocols$Handler$commit$dyn_26938.call(null,h);
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Buffer = function(){};

var cljs$core$async$impl$protocols$Buffer$full_QMARK_$dyn_26939 = (function (b){
var x__4428__auto__ = (((b == null))?null:b);
var m__4429__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,b);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
});
/**
 * returns true if buffer cannot accept put
 */
cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
return cljs$core$async$impl$protocols$Buffer$full_QMARK_$dyn_26939.call(null,b);
}
});

var cljs$core$async$impl$protocols$Buffer$remove_BANG_$dyn_26940 = (function (b){
var x__4428__auto__ = (((b == null))?null:b);
var m__4429__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,b);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
});
/**
 * remove and return next item from buffer, called under chan mutex
 */
cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
return cljs$core$async$impl$protocols$Buffer$remove_BANG_$dyn_26940.call(null,b);
}
});

var cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$dyn_26941 = (function (b,itm){
var x__4428__auto__ = (((b == null))?null:b);
var m__4429__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,b,itm);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
});
/**
 * if room, add item to the buffer, returns b, called under chan mutex
 */
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
return cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$dyn_26941.call(null,b,itm);
}
});

var cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$dyn_26942 = (function (b){
var x__4428__auto__ = (((b == null))?null:b);
var m__4429__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,b);
} else {
var m__4426__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.close-buf!",b);
}
}
});
/**
 * called on chan closed under chan mutex, return ignored
 */
cljs.core.async.impl.protocols.close_buf_BANG_ = (function cljs$core$async$impl$protocols$close_buf_BANG_(b){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(b);
} else {
return cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$dyn_26942.call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(var_args){
var G__26944 = arguments.length;
switch (G__26944) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
}));

(cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if((!((itm == null)))){
} else {
throw (new Error("Assert failed: (not (nil? itm))"));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
}));

(cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
cljs.core.async.impl.protocols.UnblockingBuffer = function(){};


//# sourceMappingURL=protocols.js.map?rel=1627930534764

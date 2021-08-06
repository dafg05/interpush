// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30386 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__30386 == null)){
return null;
} else {
return goog.object.get(G__30386,"requires");
}
}):(function (path){
var G__30387 = goog.object.get(goog.dependencies_.requires,path);
if((G__30387 == null)){
return null;
} else {
return goog.object.getKeys(G__30387);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30388_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30388_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30389 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__30389__$1 = (((G__30389 == null))?null:goog.object.get(G__30389,"provides"));
if((G__30389__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__30389__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__30390 = cljs.core.seq.call(null,provides);
var chunk__30391 = null;
var count__30392 = (0);
var i__30393 = (0);
while(true){
if((i__30393 < count__30392)){
var prov = cljs.core._nth.call(null,chunk__30391,i__30393);
var seq__30402_30414 = cljs.core.seq.call(null,requires);
var chunk__30403_30415 = null;
var count__30404_30416 = (0);
var i__30405_30417 = (0);
while(true){
if((i__30405_30417 < count__30404_30416)){
var req_30418 = cljs.core._nth.call(null,chunk__30403_30415,i__30405_30417);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30418,prov);


var G__30419 = seq__30402_30414;
var G__30420 = chunk__30403_30415;
var G__30421 = count__30404_30416;
var G__30422 = (i__30405_30417 + (1));
seq__30402_30414 = G__30419;
chunk__30403_30415 = G__30420;
count__30404_30416 = G__30421;
i__30405_30417 = G__30422;
continue;
} else {
var temp__5735__auto___30423 = cljs.core.seq.call(null,seq__30402_30414);
if(temp__5735__auto___30423){
var seq__30402_30424__$1 = temp__5735__auto___30423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30402_30424__$1)){
var c__4556__auto___30425 = cljs.core.chunk_first.call(null,seq__30402_30424__$1);
var G__30426 = cljs.core.chunk_rest.call(null,seq__30402_30424__$1);
var G__30427 = c__4556__auto___30425;
var G__30428 = cljs.core.count.call(null,c__4556__auto___30425);
var G__30429 = (0);
seq__30402_30414 = G__30426;
chunk__30403_30415 = G__30427;
count__30404_30416 = G__30428;
i__30405_30417 = G__30429;
continue;
} else {
var req_30430 = cljs.core.first.call(null,seq__30402_30424__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30430,prov);


var G__30431 = cljs.core.next.call(null,seq__30402_30424__$1);
var G__30432 = null;
var G__30433 = (0);
var G__30434 = (0);
seq__30402_30414 = G__30431;
chunk__30403_30415 = G__30432;
count__30404_30416 = G__30433;
i__30405_30417 = G__30434;
continue;
}
} else {
}
}
break;
}


var G__30435 = seq__30390;
var G__30436 = chunk__30391;
var G__30437 = count__30392;
var G__30438 = (i__30393 + (1));
seq__30390 = G__30435;
chunk__30391 = G__30436;
count__30392 = G__30437;
i__30393 = G__30438;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30390);
if(temp__5735__auto__){
var seq__30390__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30390__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30390__$1);
var G__30439 = cljs.core.chunk_rest.call(null,seq__30390__$1);
var G__30440 = c__4556__auto__;
var G__30441 = cljs.core.count.call(null,c__4556__auto__);
var G__30442 = (0);
seq__30390 = G__30439;
chunk__30391 = G__30440;
count__30392 = G__30441;
i__30393 = G__30442;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30390__$1);
var seq__30406_30443 = cljs.core.seq.call(null,requires);
var chunk__30407_30444 = null;
var count__30408_30445 = (0);
var i__30409_30446 = (0);
while(true){
if((i__30409_30446 < count__30408_30445)){
var req_30447 = cljs.core._nth.call(null,chunk__30407_30444,i__30409_30446);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30447,prov);


var G__30448 = seq__30406_30443;
var G__30449 = chunk__30407_30444;
var G__30450 = count__30408_30445;
var G__30451 = (i__30409_30446 + (1));
seq__30406_30443 = G__30448;
chunk__30407_30444 = G__30449;
count__30408_30445 = G__30450;
i__30409_30446 = G__30451;
continue;
} else {
var temp__5735__auto___30452__$1 = cljs.core.seq.call(null,seq__30406_30443);
if(temp__5735__auto___30452__$1){
var seq__30406_30453__$1 = temp__5735__auto___30452__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30406_30453__$1)){
var c__4556__auto___30454 = cljs.core.chunk_first.call(null,seq__30406_30453__$1);
var G__30455 = cljs.core.chunk_rest.call(null,seq__30406_30453__$1);
var G__30456 = c__4556__auto___30454;
var G__30457 = cljs.core.count.call(null,c__4556__auto___30454);
var G__30458 = (0);
seq__30406_30443 = G__30455;
chunk__30407_30444 = G__30456;
count__30408_30445 = G__30457;
i__30409_30446 = G__30458;
continue;
} else {
var req_30459 = cljs.core.first.call(null,seq__30406_30453__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30459,prov);


var G__30460 = cljs.core.next.call(null,seq__30406_30453__$1);
var G__30461 = null;
var G__30462 = (0);
var G__30463 = (0);
seq__30406_30443 = G__30460;
chunk__30407_30444 = G__30461;
count__30408_30445 = G__30462;
i__30409_30446 = G__30463;
continue;
}
} else {
}
}
break;
}


var G__30464 = cljs.core.next.call(null,seq__30390__$1);
var G__30465 = null;
var G__30466 = (0);
var G__30467 = (0);
seq__30390 = G__30464;
chunk__30391 = G__30465;
count__30392 = G__30466;
i__30393 = G__30467;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__30410 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__30411 = null;
var count__30412 = (0);
var i__30413 = (0);
while(true){
if((i__30413 < count__30412)){
var prov = cljs.core._nth.call(null,chunk__30411,i__30413);
goog.object.forEach(deps,((function (seq__30410,chunk__30411,count__30412,i__30413,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30410,chunk__30411,count__30412,i__30413,prov,requires))
);


var G__30468 = seq__30410;
var G__30469 = chunk__30411;
var G__30470 = count__30412;
var G__30471 = (i__30413 + (1));
seq__30410 = G__30468;
chunk__30411 = G__30469;
count__30412 = G__30470;
i__30413 = G__30471;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30410);
if(temp__5735__auto__){
var seq__30410__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30410__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30410__$1);
var G__30472 = cljs.core.chunk_rest.call(null,seq__30410__$1);
var G__30473 = c__4556__auto__;
var G__30474 = cljs.core.count.call(null,c__4556__auto__);
var G__30475 = (0);
seq__30410 = G__30472;
chunk__30411 = G__30473;
count__30412 = G__30474;
i__30413 = G__30475;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30410__$1);
goog.object.forEach(deps,((function (seq__30410,chunk__30411,count__30412,i__30413,prov,seq__30410__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30410,chunk__30411,count__30412,i__30413,prov,seq__30410__$1,temp__5735__auto__,requires))
);


var G__30476 = cljs.core.next.call(null,seq__30410__$1);
var G__30477 = null;
var G__30478 = (0);
var G__30479 = (0);
seq__30410 = G__30476;
chunk__30411 = G__30477;
count__30412 = G__30478;
i__30413 = G__30479;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30480){
var vec__30481 = p__30480;
var _ = cljs.core.nth.call(null,vec__30481,(0),null);
var v = cljs.core.nth.call(null,vec__30481,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__30484){
var vec__30485 = p__30484;
var k = cljs.core.nth.call(null,vec__30485,(0),null);
var v = cljs.core.nth.call(null,vec__30485,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30497_30505 = cljs.core.seq.call(null,deps);
var chunk__30498_30506 = null;
var count__30499_30507 = (0);
var i__30500_30508 = (0);
while(true){
if((i__30500_30508 < count__30499_30507)){
var dep_30509 = cljs.core._nth.call(null,chunk__30498_30506,i__30500_30508);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_30509;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30509));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30509,(depth + (1)),state);
} else {
}


var G__30510 = seq__30497_30505;
var G__30511 = chunk__30498_30506;
var G__30512 = count__30499_30507;
var G__30513 = (i__30500_30508 + (1));
seq__30497_30505 = G__30510;
chunk__30498_30506 = G__30511;
count__30499_30507 = G__30512;
i__30500_30508 = G__30513;
continue;
} else {
var temp__5735__auto___30514 = cljs.core.seq.call(null,seq__30497_30505);
if(temp__5735__auto___30514){
var seq__30497_30515__$1 = temp__5735__auto___30514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30497_30515__$1)){
var c__4556__auto___30516 = cljs.core.chunk_first.call(null,seq__30497_30515__$1);
var G__30517 = cljs.core.chunk_rest.call(null,seq__30497_30515__$1);
var G__30518 = c__4556__auto___30516;
var G__30519 = cljs.core.count.call(null,c__4556__auto___30516);
var G__30520 = (0);
seq__30497_30505 = G__30517;
chunk__30498_30506 = G__30518;
count__30499_30507 = G__30519;
i__30500_30508 = G__30520;
continue;
} else {
var dep_30521 = cljs.core.first.call(null,seq__30497_30515__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_30521;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30521));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30521,(depth + (1)),state);
} else {
}


var G__30522 = cljs.core.next.call(null,seq__30497_30515__$1);
var G__30523 = null;
var G__30524 = (0);
var G__30525 = (0);
seq__30497_30505 = G__30522;
chunk__30498_30506 = G__30523;
count__30499_30507 = G__30524;
i__30500_30508 = G__30525;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30501){
var vec__30502 = p__30501;
var seq__30503 = cljs.core.seq.call(null,vec__30502);
var first__30504 = cljs.core.first.call(null,seq__30503);
var seq__30503__$1 = cljs.core.next.call(null,seq__30503);
var x = first__30504;
var xs = seq__30503__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__30488_SHARP_){
return clojure.set.difference.call(null,p1__30488_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__30526_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__30526_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30527 = cljs.core.seq.call(null,provides);
var chunk__30528 = null;
var count__30529 = (0);
var i__30530 = (0);
while(true){
if((i__30530 < count__30529)){
var prov = cljs.core._nth.call(null,chunk__30528,i__30530);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30539_30547 = cljs.core.seq.call(null,requires);
var chunk__30540_30548 = null;
var count__30541_30549 = (0);
var i__30542_30550 = (0);
while(true){
if((i__30542_30550 < count__30541_30549)){
var req_30551 = cljs.core._nth.call(null,chunk__30540_30548,i__30542_30550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30551,prov);


var G__30552 = seq__30539_30547;
var G__30553 = chunk__30540_30548;
var G__30554 = count__30541_30549;
var G__30555 = (i__30542_30550 + (1));
seq__30539_30547 = G__30552;
chunk__30540_30548 = G__30553;
count__30541_30549 = G__30554;
i__30542_30550 = G__30555;
continue;
} else {
var temp__5735__auto___30556 = cljs.core.seq.call(null,seq__30539_30547);
if(temp__5735__auto___30556){
var seq__30539_30557__$1 = temp__5735__auto___30556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30539_30557__$1)){
var c__4556__auto___30558 = cljs.core.chunk_first.call(null,seq__30539_30557__$1);
var G__30559 = cljs.core.chunk_rest.call(null,seq__30539_30557__$1);
var G__30560 = c__4556__auto___30558;
var G__30561 = cljs.core.count.call(null,c__4556__auto___30558);
var G__30562 = (0);
seq__30539_30547 = G__30559;
chunk__30540_30548 = G__30560;
count__30541_30549 = G__30561;
i__30542_30550 = G__30562;
continue;
} else {
var req_30563 = cljs.core.first.call(null,seq__30539_30557__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30563,prov);


var G__30564 = cljs.core.next.call(null,seq__30539_30557__$1);
var G__30565 = null;
var G__30566 = (0);
var G__30567 = (0);
seq__30539_30547 = G__30564;
chunk__30540_30548 = G__30565;
count__30541_30549 = G__30566;
i__30542_30550 = G__30567;
continue;
}
} else {
}
}
break;
}


var G__30568 = seq__30527;
var G__30569 = chunk__30528;
var G__30570 = count__30529;
var G__30571 = (i__30530 + (1));
seq__30527 = G__30568;
chunk__30528 = G__30569;
count__30529 = G__30570;
i__30530 = G__30571;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30527);
if(temp__5735__auto__){
var seq__30527__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30527__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30527__$1);
var G__30572 = cljs.core.chunk_rest.call(null,seq__30527__$1);
var G__30573 = c__4556__auto__;
var G__30574 = cljs.core.count.call(null,c__4556__auto__);
var G__30575 = (0);
seq__30527 = G__30572;
chunk__30528 = G__30573;
count__30529 = G__30574;
i__30530 = G__30575;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30527__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30543_30576 = cljs.core.seq.call(null,requires);
var chunk__30544_30577 = null;
var count__30545_30578 = (0);
var i__30546_30579 = (0);
while(true){
if((i__30546_30579 < count__30545_30578)){
var req_30580 = cljs.core._nth.call(null,chunk__30544_30577,i__30546_30579);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30580,prov);


var G__30581 = seq__30543_30576;
var G__30582 = chunk__30544_30577;
var G__30583 = count__30545_30578;
var G__30584 = (i__30546_30579 + (1));
seq__30543_30576 = G__30581;
chunk__30544_30577 = G__30582;
count__30545_30578 = G__30583;
i__30546_30579 = G__30584;
continue;
} else {
var temp__5735__auto___30585__$1 = cljs.core.seq.call(null,seq__30543_30576);
if(temp__5735__auto___30585__$1){
var seq__30543_30586__$1 = temp__5735__auto___30585__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30543_30586__$1)){
var c__4556__auto___30587 = cljs.core.chunk_first.call(null,seq__30543_30586__$1);
var G__30588 = cljs.core.chunk_rest.call(null,seq__30543_30586__$1);
var G__30589 = c__4556__auto___30587;
var G__30590 = cljs.core.count.call(null,c__4556__auto___30587);
var G__30591 = (0);
seq__30543_30576 = G__30588;
chunk__30544_30577 = G__30589;
count__30545_30578 = G__30590;
i__30546_30579 = G__30591;
continue;
} else {
var req_30592 = cljs.core.first.call(null,seq__30543_30586__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30592,prov);


var G__30593 = cljs.core.next.call(null,seq__30543_30586__$1);
var G__30594 = null;
var G__30595 = (0);
var G__30596 = (0);
seq__30543_30576 = G__30593;
chunk__30544_30577 = G__30594;
count__30545_30578 = G__30595;
i__30546_30579 = G__30596;
continue;
}
} else {
}
}
break;
}


var G__30597 = cljs.core.next.call(null,seq__30527__$1);
var G__30598 = null;
var G__30599 = (0);
var G__30600 = (0);
seq__30527 = G__30597;
chunk__30528 = G__30598;
count__30529 = G__30599;
i__30530 = G__30600;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30601_30605 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30602_30606 = null;
var count__30603_30607 = (0);
var i__30604_30608 = (0);
while(true){
if((i__30604_30608 < count__30603_30607)){
var ns_30609 = cljs.core._nth.call(null,chunk__30602_30606,i__30604_30608);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30609);


var G__30610 = seq__30601_30605;
var G__30611 = chunk__30602_30606;
var G__30612 = count__30603_30607;
var G__30613 = (i__30604_30608 + (1));
seq__30601_30605 = G__30610;
chunk__30602_30606 = G__30611;
count__30603_30607 = G__30612;
i__30604_30608 = G__30613;
continue;
} else {
var temp__5735__auto___30614 = cljs.core.seq.call(null,seq__30601_30605);
if(temp__5735__auto___30614){
var seq__30601_30615__$1 = temp__5735__auto___30614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30601_30615__$1)){
var c__4556__auto___30616 = cljs.core.chunk_first.call(null,seq__30601_30615__$1);
var G__30617 = cljs.core.chunk_rest.call(null,seq__30601_30615__$1);
var G__30618 = c__4556__auto___30616;
var G__30619 = cljs.core.count.call(null,c__4556__auto___30616);
var G__30620 = (0);
seq__30601_30605 = G__30617;
chunk__30602_30606 = G__30618;
count__30603_30607 = G__30619;
i__30604_30608 = G__30620;
continue;
} else {
var ns_30621 = cljs.core.first.call(null,seq__30601_30615__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30621);


var G__30622 = cljs.core.next.call(null,seq__30601_30615__$1);
var G__30623 = null;
var G__30624 = (0);
var G__30625 = (0);
seq__30601_30605 = G__30622;
chunk__30602_30606 = G__30623;
count__30603_30607 = G__30624;
i__30604_30608 = G__30625;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__30626__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30627__i = 0, G__30627__a = new Array(arguments.length -  0);
while (G__30627__i < G__30627__a.length) {G__30627__a[G__30627__i] = arguments[G__30627__i + 0]; ++G__30627__i;}
  args = new cljs.core.IndexedSeq(G__30627__a,0,null);
} 
return G__30626__delegate.call(this,args);};
G__30626.cljs$lang$maxFixedArity = 0;
G__30626.cljs$lang$applyTo = (function (arglist__30628){
var args = cljs.core.seq(arglist__30628);
return G__30626__delegate(args);
});
G__30626.cljs$core$IFn$_invoke$arity$variadic = G__30626__delegate;
return G__30626;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30629_SHARP_,p2__30630_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30629_SHARP_)),p2__30630_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30631_SHARP_,p2__30632_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30631_SHARP_),p2__30632_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30633 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30633.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__30633.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__30633;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30634){if((e30634 instanceof Error)){
var e = e30634;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30634;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30635){if((e30635 instanceof Error)){
var e = e30635;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30635;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30636 = cljs.core._EQ_;
var expr__30637 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30636.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30637))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30636.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30637))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30636.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30637))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30639,callback){
var map__30640 = p__30639;
var map__30640__$1 = (((((!((map__30640 == null))))?(((((map__30640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30640):map__30640);
var file_msg = map__30640__$1;
var request_url = cljs.core.get.call(null,map__30640__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_30678){
var state_val_30679 = (state_30678[(1)]);
if((state_val_30679 === (7))){
var inst_30674 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
var statearr_30680_30706 = state_30678__$1;
(statearr_30680_30706[(2)] = inst_30674);

(statearr_30680_30706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (1))){
var state_30678__$1 = state_30678;
var statearr_30681_30707 = state_30678__$1;
(statearr_30681_30707[(2)] = null);

(statearr_30681_30707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (4))){
var inst_30644 = (state_30678[(7)]);
var inst_30644__$1 = (state_30678[(2)]);
var state_30678__$1 = (function (){var statearr_30682 = state_30678;
(statearr_30682[(7)] = inst_30644__$1);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30644__$1)){
var statearr_30683_30708 = state_30678__$1;
(statearr_30683_30708[(1)] = (5));

} else {
var statearr_30684_30709 = state_30678__$1;
(statearr_30684_30709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (15))){
var inst_30659 = (state_30678[(8)]);
var inst_30657 = (state_30678[(9)]);
var inst_30661 = inst_30659.call(null,inst_30657);
var state_30678__$1 = state_30678;
var statearr_30685_30710 = state_30678__$1;
(statearr_30685_30710[(2)] = inst_30661);

(statearr_30685_30710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (13))){
var inst_30668 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
var statearr_30686_30711 = state_30678__$1;
(statearr_30686_30711[(2)] = inst_30668);

(statearr_30686_30711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (6))){
var state_30678__$1 = state_30678;
var statearr_30687_30712 = state_30678__$1;
(statearr_30687_30712[(2)] = null);

(statearr_30687_30712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (17))){
var inst_30665 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
var statearr_30688_30713 = state_30678__$1;
(statearr_30688_30713[(2)] = inst_30665);

(statearr_30688_30713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (3))){
var inst_30676 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30678__$1,inst_30676);
} else {
if((state_val_30679 === (12))){
var state_30678__$1 = state_30678;
var statearr_30689_30714 = state_30678__$1;
(statearr_30689_30714[(2)] = null);

(statearr_30689_30714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (2))){
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30678__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30679 === (11))){
var inst_30649 = (state_30678[(10)]);
var inst_30655 = figwheel.client.file_reloading.blocking_load.call(null,inst_30649);
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30678__$1,(14),inst_30655);
} else {
if((state_val_30679 === (9))){
var inst_30649 = (state_30678[(10)]);
var state_30678__$1 = state_30678;
if(cljs.core.truth_(inst_30649)){
var statearr_30690_30715 = state_30678__$1;
(statearr_30690_30715[(1)] = (11));

} else {
var statearr_30691_30716 = state_30678__$1;
(statearr_30691_30716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (5))){
var inst_30644 = (state_30678[(7)]);
var inst_30650 = (state_30678[(11)]);
var inst_30649 = cljs.core.nth.call(null,inst_30644,(0),null);
var inst_30650__$1 = cljs.core.nth.call(null,inst_30644,(1),null);
var state_30678__$1 = (function (){var statearr_30692 = state_30678;
(statearr_30692[(11)] = inst_30650__$1);

(statearr_30692[(10)] = inst_30649);

return statearr_30692;
})();
if(cljs.core.truth_(inst_30650__$1)){
var statearr_30693_30717 = state_30678__$1;
(statearr_30693_30717[(1)] = (8));

} else {
var statearr_30694_30718 = state_30678__$1;
(statearr_30694_30718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (14))){
var inst_30659 = (state_30678[(8)]);
var inst_30649 = (state_30678[(10)]);
var inst_30657 = (state_30678[(2)]);
var inst_30658 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30659__$1 = cljs.core.get.call(null,inst_30658,inst_30649);
var state_30678__$1 = (function (){var statearr_30695 = state_30678;
(statearr_30695[(8)] = inst_30659__$1);

(statearr_30695[(9)] = inst_30657);

return statearr_30695;
})();
if(cljs.core.truth_(inst_30659__$1)){
var statearr_30696_30719 = state_30678__$1;
(statearr_30696_30719[(1)] = (15));

} else {
var statearr_30697_30720 = state_30678__$1;
(statearr_30697_30720[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (16))){
var inst_30657 = (state_30678[(9)]);
var inst_30663 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30657);
var state_30678__$1 = state_30678;
var statearr_30698_30721 = state_30678__$1;
(statearr_30698_30721[(2)] = inst_30663);

(statearr_30698_30721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (10))){
var inst_30670 = (state_30678[(2)]);
var state_30678__$1 = (function (){var statearr_30699 = state_30678;
(statearr_30699[(12)] = inst_30670);

return statearr_30699;
})();
var statearr_30700_30722 = state_30678__$1;
(statearr_30700_30722[(2)] = null);

(statearr_30700_30722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (8))){
var inst_30650 = (state_30678[(11)]);
var inst_30652 = eval(inst_30650);
var state_30678__$1 = state_30678;
var statearr_30701_30723 = state_30678__$1;
(statearr_30701_30723[(2)] = inst_30652);

(statearr_30701_30723[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__28274__auto__ = null;
var figwheel$client$file_reloading$state_machine__28274__auto____0 = (function (){
var statearr_30702 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30702[(0)] = figwheel$client$file_reloading$state_machine__28274__auto__);

(statearr_30702[(1)] = (1));

return statearr_30702;
});
var figwheel$client$file_reloading$state_machine__28274__auto____1 = (function (state_30678){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_30678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e30703){if((e30703 instanceof Object)){
var ex__28277__auto__ = e30703;
var statearr_30704_30724 = state_30678;
(statearr_30704_30724[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30725 = state_30678;
state_30678 = G__30725;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28274__auto__ = function(state_30678){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28274__auto____1.call(this,state_30678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28274__auto____0;
figwheel$client$file_reloading$state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28274__auto____1;
return figwheel$client$file_reloading$state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_30705 = f__28369__auto__.call(null);
(statearr_30705[(6)] = c__28368__auto__);

return statearr_30705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30727 = arguments.length;
switch (G__30727) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30729,callback){
var map__30730 = p__30729;
var map__30730__$1 = (((((!((map__30730 == null))))?(((((map__30730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30730):map__30730);
var file_msg = map__30730__$1;
var namespace = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30732){
var map__30733 = p__30732;
var map__30733__$1 = (((((!((map__30733 == null))))?(((((map__30733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30733):map__30733);
var file_msg = map__30733__$1;
var namespace = cljs.core.get.call(null,map__30733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30735){
var map__30736 = p__30735;
var map__30736__$1 = (((((!((map__30736 == null))))?(((((map__30736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30736):map__30736);
var file_msg = map__30736__$1;
var namespace = cljs.core.get.call(null,map__30736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30738,callback){
var map__30739 = p__30738;
var map__30739__$1 = (((((!((map__30739 == null))))?(((((map__30739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30739):map__30739);
var file_msg = map__30739__$1;
var request_url = cljs.core.get.call(null,map__30739__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28368__auto___30789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_30774){
var state_val_30775 = (state_30774[(1)]);
if((state_val_30775 === (1))){
var inst_30748 = cljs.core.seq.call(null,files);
var inst_30749 = cljs.core.first.call(null,inst_30748);
var inst_30750 = cljs.core.next.call(null,inst_30748);
var inst_30751 = files;
var state_30774__$1 = (function (){var statearr_30776 = state_30774;
(statearr_30776[(7)] = inst_30751);

(statearr_30776[(8)] = inst_30750);

(statearr_30776[(9)] = inst_30749);

return statearr_30776;
})();
var statearr_30777_30790 = state_30774__$1;
(statearr_30777_30790[(2)] = null);

(statearr_30777_30790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (2))){
var inst_30757 = (state_30774[(10)]);
var inst_30751 = (state_30774[(7)]);
var inst_30756 = cljs.core.seq.call(null,inst_30751);
var inst_30757__$1 = cljs.core.first.call(null,inst_30756);
var inst_30758 = cljs.core.next.call(null,inst_30756);
var inst_30759 = (inst_30757__$1 == null);
var inst_30760 = cljs.core.not.call(null,inst_30759);
var state_30774__$1 = (function (){var statearr_30778 = state_30774;
(statearr_30778[(10)] = inst_30757__$1);

(statearr_30778[(11)] = inst_30758);

return statearr_30778;
})();
if(inst_30760){
var statearr_30779_30791 = state_30774__$1;
(statearr_30779_30791[(1)] = (4));

} else {
var statearr_30780_30792 = state_30774__$1;
(statearr_30780_30792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (3))){
var inst_30772 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30774__$1,inst_30772);
} else {
if((state_val_30775 === (4))){
var inst_30757 = (state_30774[(10)]);
var inst_30762 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30757);
var state_30774__$1 = state_30774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30774__$1,(7),inst_30762);
} else {
if((state_val_30775 === (5))){
var inst_30768 = cljs.core.async.close_BANG_.call(null,out);
var state_30774__$1 = state_30774;
var statearr_30781_30793 = state_30774__$1;
(statearr_30781_30793[(2)] = inst_30768);

(statearr_30781_30793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (6))){
var inst_30770 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30782_30794 = state_30774__$1;
(statearr_30782_30794[(2)] = inst_30770);

(statearr_30782_30794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (7))){
var inst_30758 = (state_30774[(11)]);
var inst_30764 = (state_30774[(2)]);
var inst_30765 = cljs.core.async.put_BANG_.call(null,out,inst_30764);
var inst_30751 = inst_30758;
var state_30774__$1 = (function (){var statearr_30783 = state_30774;
(statearr_30783[(7)] = inst_30751);

(statearr_30783[(12)] = inst_30765);

return statearr_30783;
})();
var statearr_30784_30795 = state_30774__$1;
(statearr_30784_30795[(2)] = null);

(statearr_30784_30795[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto____0 = (function (){
var statearr_30785 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30785[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto__);

(statearr_30785[(1)] = (1));

return statearr_30785;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto____1 = (function (state_30774){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_30774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e30786){if((e30786 instanceof Object)){
var ex__28277__auto__ = e30786;
var statearr_30787_30796 = state_30774;
(statearr_30787_30796[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30797 = state_30774;
state_30774 = G__30797;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto__ = function(state_30774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto____1.call(this,state_30774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_30788 = f__28369__auto__.call(null);
(statearr_30788[(6)] = c__28368__auto___30789);

return statearr_30788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30798,opts){
var map__30799 = p__30798;
var map__30799__$1 = (((((!((map__30799 == null))))?(((((map__30799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30799):map__30799);
var eval_body = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30801){var e = e30801;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30802_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30802_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30803){
var vec__30804 = p__30803;
var k = cljs.core.nth.call(null,vec__30804,(0),null);
var v = cljs.core.nth.call(null,vec__30804,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30807){
var vec__30808 = p__30807;
var k = cljs.core.nth.call(null,vec__30808,(0),null);
var v = cljs.core.nth.call(null,vec__30808,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30814,p__30815){
var map__30816 = p__30814;
var map__30816__$1 = (((((!((map__30816 == null))))?(((((map__30816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30816):map__30816);
var opts = map__30816__$1;
var before_jsload = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30817 = p__30815;
var map__30817__$1 = (((((!((map__30817 == null))))?(((((map__30817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30817):map__30817);
var msg = map__30817__$1;
var files = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28369__auto__ = (function (){var switch__28273__auto__ = (function (state_30971){
var state_val_30972 = (state_30971[(1)]);
if((state_val_30972 === (7))){
var inst_30834 = (state_30971[(7)]);
var inst_30833 = (state_30971[(8)]);
var inst_30831 = (state_30971[(9)]);
var inst_30832 = (state_30971[(10)]);
var inst_30839 = cljs.core._nth.call(null,inst_30832,inst_30834);
var inst_30840 = figwheel.client.file_reloading.eval_body.call(null,inst_30839,opts);
var inst_30841 = (inst_30834 + (1));
var tmp30973 = inst_30833;
var tmp30974 = inst_30831;
var tmp30975 = inst_30832;
var inst_30831__$1 = tmp30974;
var inst_30832__$1 = tmp30975;
var inst_30833__$1 = tmp30973;
var inst_30834__$1 = inst_30841;
var state_30971__$1 = (function (){var statearr_30976 = state_30971;
(statearr_30976[(7)] = inst_30834__$1);

(statearr_30976[(8)] = inst_30833__$1);

(statearr_30976[(11)] = inst_30840);

(statearr_30976[(9)] = inst_30831__$1);

(statearr_30976[(10)] = inst_30832__$1);

return statearr_30976;
})();
var statearr_30977_31060 = state_30971__$1;
(statearr_30977_31060[(2)] = null);

(statearr_30977_31060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (20))){
var inst_30874 = (state_30971[(12)]);
var inst_30882 = figwheel.client.file_reloading.sort_files.call(null,inst_30874);
var state_30971__$1 = state_30971;
var statearr_30978_31061 = state_30971__$1;
(statearr_30978_31061[(2)] = inst_30882);

(statearr_30978_31061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (27))){
var state_30971__$1 = state_30971;
var statearr_30979_31062 = state_30971__$1;
(statearr_30979_31062[(2)] = null);

(statearr_30979_31062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (1))){
var inst_30823 = (state_30971[(13)]);
var inst_30820 = before_jsload.call(null,files);
var inst_30821 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30822 = (function (){return (function (p1__30811_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30811_SHARP_);
});
})();
var inst_30823__$1 = cljs.core.filter.call(null,inst_30822,files);
var inst_30824 = cljs.core.not_empty.call(null,inst_30823__$1);
var state_30971__$1 = (function (){var statearr_30980 = state_30971;
(statearr_30980[(13)] = inst_30823__$1);

(statearr_30980[(14)] = inst_30821);

(statearr_30980[(15)] = inst_30820);

return statearr_30980;
})();
if(cljs.core.truth_(inst_30824)){
var statearr_30981_31063 = state_30971__$1;
(statearr_30981_31063[(1)] = (2));

} else {
var statearr_30982_31064 = state_30971__$1;
(statearr_30982_31064[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (24))){
var state_30971__$1 = state_30971;
var statearr_30983_31065 = state_30971__$1;
(statearr_30983_31065[(2)] = null);

(statearr_30983_31065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (39))){
var inst_30924 = (state_30971[(16)]);
var state_30971__$1 = state_30971;
var statearr_30984_31066 = state_30971__$1;
(statearr_30984_31066[(2)] = inst_30924);

(statearr_30984_31066[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (46))){
var inst_30966 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_30985_31067 = state_30971__$1;
(statearr_30985_31067[(2)] = inst_30966);

(statearr_30985_31067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (4))){
var inst_30868 = (state_30971[(2)]);
var inst_30869 = cljs.core.List.EMPTY;
var inst_30870 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30869);
var inst_30871 = (function (){return (function (p1__30812_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30812_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30812_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30812_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_30872 = cljs.core.filter.call(null,inst_30871,files);
var inst_30873 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30874 = cljs.core.concat.call(null,inst_30872,inst_30873);
var state_30971__$1 = (function (){var statearr_30986 = state_30971;
(statearr_30986[(12)] = inst_30874);

(statearr_30986[(17)] = inst_30868);

(statearr_30986[(18)] = inst_30870);

return statearr_30986;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30987_31068 = state_30971__$1;
(statearr_30987_31068[(1)] = (16));

} else {
var statearr_30988_31069 = state_30971__$1;
(statearr_30988_31069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (15))){
var inst_30858 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_30989_31070 = state_30971__$1;
(statearr_30989_31070[(2)] = inst_30858);

(statearr_30989_31070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (21))){
var inst_30884 = (state_30971[(19)]);
var inst_30884__$1 = (state_30971[(2)]);
var inst_30885 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30884__$1);
var state_30971__$1 = (function (){var statearr_30990 = state_30971;
(statearr_30990[(19)] = inst_30884__$1);

return statearr_30990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30971__$1,(22),inst_30885);
} else {
if((state_val_30972 === (31))){
var inst_30969 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30971__$1,inst_30969);
} else {
if((state_val_30972 === (32))){
var inst_30924 = (state_30971[(16)]);
var inst_30929 = inst_30924.cljs$lang$protocol_mask$partition0$;
var inst_30930 = (inst_30929 & (64));
var inst_30931 = inst_30924.cljs$core$ISeq$;
var inst_30932 = (cljs.core.PROTOCOL_SENTINEL === inst_30931);
var inst_30933 = ((inst_30930) || (inst_30932));
var state_30971__$1 = state_30971;
if(cljs.core.truth_(inst_30933)){
var statearr_30991_31071 = state_30971__$1;
(statearr_30991_31071[(1)] = (35));

} else {
var statearr_30992_31072 = state_30971__$1;
(statearr_30992_31072[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (40))){
var inst_30946 = (state_30971[(20)]);
var inst_30945 = (state_30971[(2)]);
var inst_30946__$1 = cljs.core.get.call(null,inst_30945,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30947 = cljs.core.get.call(null,inst_30945,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30948 = cljs.core.not_empty.call(null,inst_30946__$1);
var state_30971__$1 = (function (){var statearr_30993 = state_30971;
(statearr_30993[(21)] = inst_30947);

(statearr_30993[(20)] = inst_30946__$1);

return statearr_30993;
})();
if(cljs.core.truth_(inst_30948)){
var statearr_30994_31073 = state_30971__$1;
(statearr_30994_31073[(1)] = (41));

} else {
var statearr_30995_31074 = state_30971__$1;
(statearr_30995_31074[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (33))){
var state_30971__$1 = state_30971;
var statearr_30996_31075 = state_30971__$1;
(statearr_30996_31075[(2)] = false);

(statearr_30996_31075[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (13))){
var inst_30844 = (state_30971[(22)]);
var inst_30848 = cljs.core.chunk_first.call(null,inst_30844);
var inst_30849 = cljs.core.chunk_rest.call(null,inst_30844);
var inst_30850 = cljs.core.count.call(null,inst_30848);
var inst_30831 = inst_30849;
var inst_30832 = inst_30848;
var inst_30833 = inst_30850;
var inst_30834 = (0);
var state_30971__$1 = (function (){var statearr_30997 = state_30971;
(statearr_30997[(7)] = inst_30834);

(statearr_30997[(8)] = inst_30833);

(statearr_30997[(9)] = inst_30831);

(statearr_30997[(10)] = inst_30832);

return statearr_30997;
})();
var statearr_30998_31076 = state_30971__$1;
(statearr_30998_31076[(2)] = null);

(statearr_30998_31076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (22))){
var inst_30888 = (state_30971[(23)]);
var inst_30884 = (state_30971[(19)]);
var inst_30887 = (state_30971[(24)]);
var inst_30892 = (state_30971[(25)]);
var inst_30887__$1 = (state_30971[(2)]);
var inst_30888__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30887__$1);
var inst_30889 = (function (){var all_files = inst_30884;
var res_SINGLEQUOTE_ = inst_30887__$1;
var res = inst_30888__$1;
return (function (p1__30813_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30813_SHARP_));
});
})();
var inst_30890 = cljs.core.filter.call(null,inst_30889,inst_30887__$1);
var inst_30891 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30892__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30891);
var inst_30893 = cljs.core.not_empty.call(null,inst_30892__$1);
var state_30971__$1 = (function (){var statearr_30999 = state_30971;
(statearr_30999[(23)] = inst_30888__$1);

(statearr_30999[(24)] = inst_30887__$1);

(statearr_30999[(26)] = inst_30890);

(statearr_30999[(25)] = inst_30892__$1);

return statearr_30999;
})();
if(cljs.core.truth_(inst_30893)){
var statearr_31000_31077 = state_30971__$1;
(statearr_31000_31077[(1)] = (23));

} else {
var statearr_31001_31078 = state_30971__$1;
(statearr_31001_31078[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (36))){
var state_30971__$1 = state_30971;
var statearr_31002_31079 = state_30971__$1;
(statearr_31002_31079[(2)] = false);

(statearr_31002_31079[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (41))){
var inst_30946 = (state_30971[(20)]);
var inst_30950 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30951 = cljs.core.map.call(null,inst_30950,inst_30946);
var inst_30952 = cljs.core.pr_str.call(null,inst_30951);
var inst_30953 = ["figwheel-no-load meta-data: ",inst_30952].join('');
var inst_30954 = figwheel.client.utils.log.call(null,inst_30953);
var state_30971__$1 = state_30971;
var statearr_31003_31080 = state_30971__$1;
(statearr_31003_31080[(2)] = inst_30954);

(statearr_31003_31080[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (43))){
var inst_30947 = (state_30971[(21)]);
var inst_30957 = (state_30971[(2)]);
var inst_30958 = cljs.core.not_empty.call(null,inst_30947);
var state_30971__$1 = (function (){var statearr_31004 = state_30971;
(statearr_31004[(27)] = inst_30957);

return statearr_31004;
})();
if(cljs.core.truth_(inst_30958)){
var statearr_31005_31081 = state_30971__$1;
(statearr_31005_31081[(1)] = (44));

} else {
var statearr_31006_31082 = state_30971__$1;
(statearr_31006_31082[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (29))){
var inst_30888 = (state_30971[(23)]);
var inst_30884 = (state_30971[(19)]);
var inst_30924 = (state_30971[(16)]);
var inst_30887 = (state_30971[(24)]);
var inst_30890 = (state_30971[(26)]);
var inst_30892 = (state_30971[(25)]);
var inst_30920 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30923 = (function (){var all_files = inst_30884;
var res_SINGLEQUOTE_ = inst_30887;
var res = inst_30888;
var files_not_loaded = inst_30890;
var dependencies_that_loaded = inst_30892;
return (function (p__30922){
var map__31007 = p__30922;
var map__31007__$1 = (((((!((map__31007 == null))))?(((((map__31007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31007):map__31007);
var namespace = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_30924__$1 = cljs.core.group_by.call(null,inst_30923,inst_30890);
var inst_30926 = (inst_30924__$1 == null);
var inst_30927 = cljs.core.not.call(null,inst_30926);
var state_30971__$1 = (function (){var statearr_31009 = state_30971;
(statearr_31009[(28)] = inst_30920);

(statearr_31009[(16)] = inst_30924__$1);

return statearr_31009;
})();
if(inst_30927){
var statearr_31010_31083 = state_30971__$1;
(statearr_31010_31083[(1)] = (32));

} else {
var statearr_31011_31084 = state_30971__$1;
(statearr_31011_31084[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (44))){
var inst_30947 = (state_30971[(21)]);
var inst_30960 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30947);
var inst_30961 = cljs.core.pr_str.call(null,inst_30960);
var inst_30962 = ["not required: ",inst_30961].join('');
var inst_30963 = figwheel.client.utils.log.call(null,inst_30962);
var state_30971__$1 = state_30971;
var statearr_31012_31085 = state_30971__$1;
(statearr_31012_31085[(2)] = inst_30963);

(statearr_31012_31085[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (6))){
var inst_30865 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_31013_31086 = state_30971__$1;
(statearr_31013_31086[(2)] = inst_30865);

(statearr_31013_31086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (28))){
var inst_30890 = (state_30971[(26)]);
var inst_30917 = (state_30971[(2)]);
var inst_30918 = cljs.core.not_empty.call(null,inst_30890);
var state_30971__$1 = (function (){var statearr_31014 = state_30971;
(statearr_31014[(29)] = inst_30917);

return statearr_31014;
})();
if(cljs.core.truth_(inst_30918)){
var statearr_31015_31087 = state_30971__$1;
(statearr_31015_31087[(1)] = (29));

} else {
var statearr_31016_31088 = state_30971__$1;
(statearr_31016_31088[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (25))){
var inst_30888 = (state_30971[(23)]);
var inst_30904 = (state_30971[(2)]);
var inst_30905 = cljs.core.not_empty.call(null,inst_30888);
var state_30971__$1 = (function (){var statearr_31017 = state_30971;
(statearr_31017[(30)] = inst_30904);

return statearr_31017;
})();
if(cljs.core.truth_(inst_30905)){
var statearr_31018_31089 = state_30971__$1;
(statearr_31018_31089[(1)] = (26));

} else {
var statearr_31019_31090 = state_30971__$1;
(statearr_31019_31090[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (34))){
var inst_30940 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
if(cljs.core.truth_(inst_30940)){
var statearr_31020_31091 = state_30971__$1;
(statearr_31020_31091[(1)] = (38));

} else {
var statearr_31021_31092 = state_30971__$1;
(statearr_31021_31092[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (17))){
var state_30971__$1 = state_30971;
var statearr_31022_31093 = state_30971__$1;
(statearr_31022_31093[(2)] = recompile_dependents);

(statearr_31022_31093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (3))){
var state_30971__$1 = state_30971;
var statearr_31023_31094 = state_30971__$1;
(statearr_31023_31094[(2)] = null);

(statearr_31023_31094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (12))){
var inst_30861 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_31024_31095 = state_30971__$1;
(statearr_31024_31095[(2)] = inst_30861);

(statearr_31024_31095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (2))){
var inst_30823 = (state_30971[(13)]);
var inst_30830 = cljs.core.seq.call(null,inst_30823);
var inst_30831 = inst_30830;
var inst_30832 = null;
var inst_30833 = (0);
var inst_30834 = (0);
var state_30971__$1 = (function (){var statearr_31025 = state_30971;
(statearr_31025[(7)] = inst_30834);

(statearr_31025[(8)] = inst_30833);

(statearr_31025[(9)] = inst_30831);

(statearr_31025[(10)] = inst_30832);

return statearr_31025;
})();
var statearr_31026_31096 = state_30971__$1;
(statearr_31026_31096[(2)] = null);

(statearr_31026_31096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (23))){
var inst_30888 = (state_30971[(23)]);
var inst_30884 = (state_30971[(19)]);
var inst_30887 = (state_30971[(24)]);
var inst_30890 = (state_30971[(26)]);
var inst_30892 = (state_30971[(25)]);
var inst_30895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30897 = (function (){var all_files = inst_30884;
var res_SINGLEQUOTE_ = inst_30887;
var res = inst_30888;
var files_not_loaded = inst_30890;
var dependencies_that_loaded = inst_30892;
return (function (p__30896){
var map__31027 = p__30896;
var map__31027__$1 = (((((!((map__31027 == null))))?(((((map__31027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31027):map__31027);
var request_url = cljs.core.get.call(null,map__31027__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_30898 = cljs.core.reverse.call(null,inst_30892);
var inst_30899 = cljs.core.map.call(null,inst_30897,inst_30898);
var inst_30900 = cljs.core.pr_str.call(null,inst_30899);
var inst_30901 = figwheel.client.utils.log.call(null,inst_30900);
var state_30971__$1 = (function (){var statearr_31029 = state_30971;
(statearr_31029[(31)] = inst_30895);

return statearr_31029;
})();
var statearr_31030_31097 = state_30971__$1;
(statearr_31030_31097[(2)] = inst_30901);

(statearr_31030_31097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (35))){
var state_30971__$1 = state_30971;
var statearr_31031_31098 = state_30971__$1;
(statearr_31031_31098[(2)] = true);

(statearr_31031_31098[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (19))){
var inst_30874 = (state_30971[(12)]);
var inst_30880 = figwheel.client.file_reloading.expand_files.call(null,inst_30874);
var state_30971__$1 = state_30971;
var statearr_31032_31099 = state_30971__$1;
(statearr_31032_31099[(2)] = inst_30880);

(statearr_31032_31099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (11))){
var state_30971__$1 = state_30971;
var statearr_31033_31100 = state_30971__$1;
(statearr_31033_31100[(2)] = null);

(statearr_31033_31100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (9))){
var inst_30863 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_31034_31101 = state_30971__$1;
(statearr_31034_31101[(2)] = inst_30863);

(statearr_31034_31101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (5))){
var inst_30834 = (state_30971[(7)]);
var inst_30833 = (state_30971[(8)]);
var inst_30836 = (inst_30834 < inst_30833);
var inst_30837 = inst_30836;
var state_30971__$1 = state_30971;
if(cljs.core.truth_(inst_30837)){
var statearr_31035_31102 = state_30971__$1;
(statearr_31035_31102[(1)] = (7));

} else {
var statearr_31036_31103 = state_30971__$1;
(statearr_31036_31103[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (14))){
var inst_30844 = (state_30971[(22)]);
var inst_30853 = cljs.core.first.call(null,inst_30844);
var inst_30854 = figwheel.client.file_reloading.eval_body.call(null,inst_30853,opts);
var inst_30855 = cljs.core.next.call(null,inst_30844);
var inst_30831 = inst_30855;
var inst_30832 = null;
var inst_30833 = (0);
var inst_30834 = (0);
var state_30971__$1 = (function (){var statearr_31037 = state_30971;
(statearr_31037[(7)] = inst_30834);

(statearr_31037[(8)] = inst_30833);

(statearr_31037[(9)] = inst_30831);

(statearr_31037[(10)] = inst_30832);

(statearr_31037[(32)] = inst_30854);

return statearr_31037;
})();
var statearr_31038_31104 = state_30971__$1;
(statearr_31038_31104[(2)] = null);

(statearr_31038_31104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (45))){
var state_30971__$1 = state_30971;
var statearr_31039_31105 = state_30971__$1;
(statearr_31039_31105[(2)] = null);

(statearr_31039_31105[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (26))){
var inst_30888 = (state_30971[(23)]);
var inst_30884 = (state_30971[(19)]);
var inst_30887 = (state_30971[(24)]);
var inst_30890 = (state_30971[(26)]);
var inst_30892 = (state_30971[(25)]);
var inst_30907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30909 = (function (){var all_files = inst_30884;
var res_SINGLEQUOTE_ = inst_30887;
var res = inst_30888;
var files_not_loaded = inst_30890;
var dependencies_that_loaded = inst_30892;
return (function (p__30908){
var map__31040 = p__30908;
var map__31040__$1 = (((((!((map__31040 == null))))?(((((map__31040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31040):map__31040);
var namespace = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_30910 = cljs.core.map.call(null,inst_30909,inst_30888);
var inst_30911 = cljs.core.pr_str.call(null,inst_30910);
var inst_30912 = figwheel.client.utils.log.call(null,inst_30911);
var inst_30913 = (function (){var all_files = inst_30884;
var res_SINGLEQUOTE_ = inst_30887;
var res = inst_30888;
var files_not_loaded = inst_30890;
var dependencies_that_loaded = inst_30892;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_30914 = setTimeout(inst_30913,(10));
var state_30971__$1 = (function (){var statearr_31042 = state_30971;
(statearr_31042[(33)] = inst_30912);

(statearr_31042[(34)] = inst_30907);

return statearr_31042;
})();
var statearr_31043_31106 = state_30971__$1;
(statearr_31043_31106[(2)] = inst_30914);

(statearr_31043_31106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (16))){
var state_30971__$1 = state_30971;
var statearr_31044_31107 = state_30971__$1;
(statearr_31044_31107[(2)] = reload_dependents);

(statearr_31044_31107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (38))){
var inst_30924 = (state_30971[(16)]);
var inst_30942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30924);
var state_30971__$1 = state_30971;
var statearr_31045_31108 = state_30971__$1;
(statearr_31045_31108[(2)] = inst_30942);

(statearr_31045_31108[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (30))){
var state_30971__$1 = state_30971;
var statearr_31046_31109 = state_30971__$1;
(statearr_31046_31109[(2)] = null);

(statearr_31046_31109[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (10))){
var inst_30844 = (state_30971[(22)]);
var inst_30846 = cljs.core.chunked_seq_QMARK_.call(null,inst_30844);
var state_30971__$1 = state_30971;
if(inst_30846){
var statearr_31047_31110 = state_30971__$1;
(statearr_31047_31110[(1)] = (13));

} else {
var statearr_31048_31111 = state_30971__$1;
(statearr_31048_31111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (18))){
var inst_30878 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
if(cljs.core.truth_(inst_30878)){
var statearr_31049_31112 = state_30971__$1;
(statearr_31049_31112[(1)] = (19));

} else {
var statearr_31050_31113 = state_30971__$1;
(statearr_31050_31113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (42))){
var state_30971__$1 = state_30971;
var statearr_31051_31114 = state_30971__$1;
(statearr_31051_31114[(2)] = null);

(statearr_31051_31114[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (37))){
var inst_30937 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_31052_31115 = state_30971__$1;
(statearr_31052_31115[(2)] = inst_30937);

(statearr_31052_31115[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (8))){
var inst_30831 = (state_30971[(9)]);
var inst_30844 = (state_30971[(22)]);
var inst_30844__$1 = cljs.core.seq.call(null,inst_30831);
var state_30971__$1 = (function (){var statearr_31053 = state_30971;
(statearr_31053[(22)] = inst_30844__$1);

return statearr_31053;
})();
if(inst_30844__$1){
var statearr_31054_31116 = state_30971__$1;
(statearr_31054_31116[(1)] = (10));

} else {
var statearr_31055_31117 = state_30971__$1;
(statearr_31055_31117[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto____0 = (function (){
var statearr_31056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31056[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto__);

(statearr_31056[(1)] = (1));

return statearr_31056;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto____1 = (function (state_30971){
while(true){
var ret_value__28275__auto__ = (function (){try{while(true){
var result__28276__auto__ = switch__28273__auto__.call(null,state_30971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28276__auto__;
}
break;
}
}catch (e31057){if((e31057 instanceof Object)){
var ex__28277__auto__ = e31057;
var statearr_31058_31118 = state_30971;
(statearr_31058_31118[(5)] = ex__28277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31119 = state_30971;
state_30971 = G__31119;
continue;
} else {
return ret_value__28275__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto__ = function(state_30971){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto____1.call(this,state_30971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28274__auto__;
})()
})();
var state__28370__auto__ = (function (){var statearr_31059 = f__28369__auto__.call(null);
(statearr_31059[(6)] = c__28368__auto__);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28370__auto__);
}));

return c__28368__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31122,link){
var map__31123 = p__31122;
var map__31123__$1 = (((((!((map__31123 == null))))?(((((map__31123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31123):map__31123);
var file = cljs.core.get.call(null,map__31123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__31120_SHARP_,p2__31121_SHARP_){
if(cljs.core._EQ_.call(null,p1__31120_SHARP_,p2__31121_SHARP_)){
return p1__31120_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31126){
var map__31127 = p__31126;
var map__31127__$1 = (((((!((map__31127 == null))))?(((((map__31127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31127):map__31127);
var match_length = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31125_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31125_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31129_SHARP_,p2__31130_SHARP_){
return cljs.core.assoc.call(null,p1__31129_SHARP_,cljs.core.get.call(null,p2__31130_SHARP_,key),p2__31130_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31131 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31131);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31131);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31132,p__31133){
var map__31134 = p__31132;
var map__31134__$1 = (((((!((map__31134 == null))))?(((((map__31134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31134):map__31134);
var on_cssload = cljs.core.get.call(null,map__31134__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31135 = p__31133;
var map__31135__$1 = (((((!((map__31135 == null))))?(((((map__31135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31135):map__31135);
var files_msg = map__31135__$1;
var files = cljs.core.get.call(null,map__31135__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1627930536629

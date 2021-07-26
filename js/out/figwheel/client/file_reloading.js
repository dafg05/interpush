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
var G__36863 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__36863 == null)){
return null;
} else {
return goog.object.get(G__36863,"requires");
}
}):(function (path){
var G__36864 = goog.object.get(goog.dependencies_.requires,path);
if((G__36864 == null)){
return null;
} else {
return goog.object.getKeys(G__36864);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36865_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36865_SHARP_)));
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
var G__36866 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__36866__$1 = (((G__36866 == null))?null:goog.object.get(G__36866,"provides"));
if((G__36866__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__36866__$1);
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
var seq__36867 = cljs.core.seq.call(null,provides);
var chunk__36868 = null;
var count__36869 = (0);
var i__36870 = (0);
while(true){
if((i__36870 < count__36869)){
var prov = cljs.core._nth.call(null,chunk__36868,i__36870);
var seq__36879_36891 = cljs.core.seq.call(null,requires);
var chunk__36880_36892 = null;
var count__36881_36893 = (0);
var i__36882_36894 = (0);
while(true){
if((i__36882_36894 < count__36881_36893)){
var req_36895 = cljs.core._nth.call(null,chunk__36880_36892,i__36882_36894);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36895,prov);


var G__36896 = seq__36879_36891;
var G__36897 = chunk__36880_36892;
var G__36898 = count__36881_36893;
var G__36899 = (i__36882_36894 + (1));
seq__36879_36891 = G__36896;
chunk__36880_36892 = G__36897;
count__36881_36893 = G__36898;
i__36882_36894 = G__36899;
continue;
} else {
var temp__5735__auto___36900 = cljs.core.seq.call(null,seq__36879_36891);
if(temp__5735__auto___36900){
var seq__36879_36901__$1 = temp__5735__auto___36900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36879_36901__$1)){
var c__4556__auto___36902 = cljs.core.chunk_first.call(null,seq__36879_36901__$1);
var G__36903 = cljs.core.chunk_rest.call(null,seq__36879_36901__$1);
var G__36904 = c__4556__auto___36902;
var G__36905 = cljs.core.count.call(null,c__4556__auto___36902);
var G__36906 = (0);
seq__36879_36891 = G__36903;
chunk__36880_36892 = G__36904;
count__36881_36893 = G__36905;
i__36882_36894 = G__36906;
continue;
} else {
var req_36907 = cljs.core.first.call(null,seq__36879_36901__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36907,prov);


var G__36908 = cljs.core.next.call(null,seq__36879_36901__$1);
var G__36909 = null;
var G__36910 = (0);
var G__36911 = (0);
seq__36879_36891 = G__36908;
chunk__36880_36892 = G__36909;
count__36881_36893 = G__36910;
i__36882_36894 = G__36911;
continue;
}
} else {
}
}
break;
}


var G__36912 = seq__36867;
var G__36913 = chunk__36868;
var G__36914 = count__36869;
var G__36915 = (i__36870 + (1));
seq__36867 = G__36912;
chunk__36868 = G__36913;
count__36869 = G__36914;
i__36870 = G__36915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36867);
if(temp__5735__auto__){
var seq__36867__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36867__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36867__$1);
var G__36916 = cljs.core.chunk_rest.call(null,seq__36867__$1);
var G__36917 = c__4556__auto__;
var G__36918 = cljs.core.count.call(null,c__4556__auto__);
var G__36919 = (0);
seq__36867 = G__36916;
chunk__36868 = G__36917;
count__36869 = G__36918;
i__36870 = G__36919;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36867__$1);
var seq__36883_36920 = cljs.core.seq.call(null,requires);
var chunk__36884_36921 = null;
var count__36885_36922 = (0);
var i__36886_36923 = (0);
while(true){
if((i__36886_36923 < count__36885_36922)){
var req_36924 = cljs.core._nth.call(null,chunk__36884_36921,i__36886_36923);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36924,prov);


var G__36925 = seq__36883_36920;
var G__36926 = chunk__36884_36921;
var G__36927 = count__36885_36922;
var G__36928 = (i__36886_36923 + (1));
seq__36883_36920 = G__36925;
chunk__36884_36921 = G__36926;
count__36885_36922 = G__36927;
i__36886_36923 = G__36928;
continue;
} else {
var temp__5735__auto___36929__$1 = cljs.core.seq.call(null,seq__36883_36920);
if(temp__5735__auto___36929__$1){
var seq__36883_36930__$1 = temp__5735__auto___36929__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36883_36930__$1)){
var c__4556__auto___36931 = cljs.core.chunk_first.call(null,seq__36883_36930__$1);
var G__36932 = cljs.core.chunk_rest.call(null,seq__36883_36930__$1);
var G__36933 = c__4556__auto___36931;
var G__36934 = cljs.core.count.call(null,c__4556__auto___36931);
var G__36935 = (0);
seq__36883_36920 = G__36932;
chunk__36884_36921 = G__36933;
count__36885_36922 = G__36934;
i__36886_36923 = G__36935;
continue;
} else {
var req_36936 = cljs.core.first.call(null,seq__36883_36930__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36936,prov);


var G__36937 = cljs.core.next.call(null,seq__36883_36930__$1);
var G__36938 = null;
var G__36939 = (0);
var G__36940 = (0);
seq__36883_36920 = G__36937;
chunk__36884_36921 = G__36938;
count__36885_36922 = G__36939;
i__36886_36923 = G__36940;
continue;
}
} else {
}
}
break;
}


var G__36941 = cljs.core.next.call(null,seq__36867__$1);
var G__36942 = null;
var G__36943 = (0);
var G__36944 = (0);
seq__36867 = G__36941;
chunk__36868 = G__36942;
count__36869 = G__36943;
i__36870 = G__36944;
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
var seq__36887 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__36888 = null;
var count__36889 = (0);
var i__36890 = (0);
while(true){
if((i__36890 < count__36889)){
var prov = cljs.core._nth.call(null,chunk__36888,i__36890);
goog.object.forEach(deps,((function (seq__36887,chunk__36888,count__36889,i__36890,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__36887,chunk__36888,count__36889,i__36890,prov,requires))
);


var G__36945 = seq__36887;
var G__36946 = chunk__36888;
var G__36947 = count__36889;
var G__36948 = (i__36890 + (1));
seq__36887 = G__36945;
chunk__36888 = G__36946;
count__36889 = G__36947;
i__36890 = G__36948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36887);
if(temp__5735__auto__){
var seq__36887__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36887__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36887__$1);
var G__36949 = cljs.core.chunk_rest.call(null,seq__36887__$1);
var G__36950 = c__4556__auto__;
var G__36951 = cljs.core.count.call(null,c__4556__auto__);
var G__36952 = (0);
seq__36887 = G__36949;
chunk__36888 = G__36950;
count__36889 = G__36951;
i__36890 = G__36952;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36887__$1);
goog.object.forEach(deps,((function (seq__36887,chunk__36888,count__36889,i__36890,prov,seq__36887__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__36887,chunk__36888,count__36889,i__36890,prov,seq__36887__$1,temp__5735__auto__,requires))
);


var G__36953 = cljs.core.next.call(null,seq__36887__$1);
var G__36954 = null;
var G__36955 = (0);
var G__36956 = (0);
seq__36887 = G__36953;
chunk__36888 = G__36954;
count__36889 = G__36955;
i__36890 = G__36956;
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
return cljs.core.some.call(null,(function (p__36957){
var vec__36958 = p__36957;
var _ = cljs.core.nth.call(null,vec__36958,(0),null);
var v = cljs.core.nth.call(null,vec__36958,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__36961){
var vec__36962 = p__36961;
var k = cljs.core.nth.call(null,vec__36962,(0),null);
var v = cljs.core.nth.call(null,vec__36962,(1),null);
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

var seq__36974_36982 = cljs.core.seq.call(null,deps);
var chunk__36975_36983 = null;
var count__36976_36984 = (0);
var i__36977_36985 = (0);
while(true){
if((i__36977_36985 < count__36976_36984)){
var dep_36986 = cljs.core._nth.call(null,chunk__36975_36983,i__36977_36985);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_36986;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36986));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36986,(depth + (1)),state);
} else {
}


var G__36987 = seq__36974_36982;
var G__36988 = chunk__36975_36983;
var G__36989 = count__36976_36984;
var G__36990 = (i__36977_36985 + (1));
seq__36974_36982 = G__36987;
chunk__36975_36983 = G__36988;
count__36976_36984 = G__36989;
i__36977_36985 = G__36990;
continue;
} else {
var temp__5735__auto___36991 = cljs.core.seq.call(null,seq__36974_36982);
if(temp__5735__auto___36991){
var seq__36974_36992__$1 = temp__5735__auto___36991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36974_36992__$1)){
var c__4556__auto___36993 = cljs.core.chunk_first.call(null,seq__36974_36992__$1);
var G__36994 = cljs.core.chunk_rest.call(null,seq__36974_36992__$1);
var G__36995 = c__4556__auto___36993;
var G__36996 = cljs.core.count.call(null,c__4556__auto___36993);
var G__36997 = (0);
seq__36974_36982 = G__36994;
chunk__36975_36983 = G__36995;
count__36976_36984 = G__36996;
i__36977_36985 = G__36997;
continue;
} else {
var dep_36998 = cljs.core.first.call(null,seq__36974_36992__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_36998;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36998));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36998,(depth + (1)),state);
} else {
}


var G__36999 = cljs.core.next.call(null,seq__36974_36992__$1);
var G__37000 = null;
var G__37001 = (0);
var G__37002 = (0);
seq__36974_36982 = G__36999;
chunk__36975_36983 = G__37000;
count__36976_36984 = G__37001;
i__36977_36985 = G__37002;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36978){
var vec__36979 = p__36978;
var seq__36980 = cljs.core.seq.call(null,vec__36979);
var first__36981 = cljs.core.first.call(null,seq__36980);
var seq__36980__$1 = cljs.core.next.call(null,seq__36980);
var x = first__36981;
var xs = seq__36980__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__36965_SHARP_){
return clojure.set.difference.call(null,p1__36965_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__37003_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__37003_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37004 = cljs.core.seq.call(null,provides);
var chunk__37005 = null;
var count__37006 = (0);
var i__37007 = (0);
while(true){
if((i__37007 < count__37006)){
var prov = cljs.core._nth.call(null,chunk__37005,i__37007);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37016_37024 = cljs.core.seq.call(null,requires);
var chunk__37017_37025 = null;
var count__37018_37026 = (0);
var i__37019_37027 = (0);
while(true){
if((i__37019_37027 < count__37018_37026)){
var req_37028 = cljs.core._nth.call(null,chunk__37017_37025,i__37019_37027);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37028,prov);


var G__37029 = seq__37016_37024;
var G__37030 = chunk__37017_37025;
var G__37031 = count__37018_37026;
var G__37032 = (i__37019_37027 + (1));
seq__37016_37024 = G__37029;
chunk__37017_37025 = G__37030;
count__37018_37026 = G__37031;
i__37019_37027 = G__37032;
continue;
} else {
var temp__5735__auto___37033 = cljs.core.seq.call(null,seq__37016_37024);
if(temp__5735__auto___37033){
var seq__37016_37034__$1 = temp__5735__auto___37033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37016_37034__$1)){
var c__4556__auto___37035 = cljs.core.chunk_first.call(null,seq__37016_37034__$1);
var G__37036 = cljs.core.chunk_rest.call(null,seq__37016_37034__$1);
var G__37037 = c__4556__auto___37035;
var G__37038 = cljs.core.count.call(null,c__4556__auto___37035);
var G__37039 = (0);
seq__37016_37024 = G__37036;
chunk__37017_37025 = G__37037;
count__37018_37026 = G__37038;
i__37019_37027 = G__37039;
continue;
} else {
var req_37040 = cljs.core.first.call(null,seq__37016_37034__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37040,prov);


var G__37041 = cljs.core.next.call(null,seq__37016_37034__$1);
var G__37042 = null;
var G__37043 = (0);
var G__37044 = (0);
seq__37016_37024 = G__37041;
chunk__37017_37025 = G__37042;
count__37018_37026 = G__37043;
i__37019_37027 = G__37044;
continue;
}
} else {
}
}
break;
}


var G__37045 = seq__37004;
var G__37046 = chunk__37005;
var G__37047 = count__37006;
var G__37048 = (i__37007 + (1));
seq__37004 = G__37045;
chunk__37005 = G__37046;
count__37006 = G__37047;
i__37007 = G__37048;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__37004);
if(temp__5735__auto__){
var seq__37004__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37004__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37004__$1);
var G__37049 = cljs.core.chunk_rest.call(null,seq__37004__$1);
var G__37050 = c__4556__auto__;
var G__37051 = cljs.core.count.call(null,c__4556__auto__);
var G__37052 = (0);
seq__37004 = G__37049;
chunk__37005 = G__37050;
count__37006 = G__37051;
i__37007 = G__37052;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37004__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37020_37053 = cljs.core.seq.call(null,requires);
var chunk__37021_37054 = null;
var count__37022_37055 = (0);
var i__37023_37056 = (0);
while(true){
if((i__37023_37056 < count__37022_37055)){
var req_37057 = cljs.core._nth.call(null,chunk__37021_37054,i__37023_37056);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37057,prov);


var G__37058 = seq__37020_37053;
var G__37059 = chunk__37021_37054;
var G__37060 = count__37022_37055;
var G__37061 = (i__37023_37056 + (1));
seq__37020_37053 = G__37058;
chunk__37021_37054 = G__37059;
count__37022_37055 = G__37060;
i__37023_37056 = G__37061;
continue;
} else {
var temp__5735__auto___37062__$1 = cljs.core.seq.call(null,seq__37020_37053);
if(temp__5735__auto___37062__$1){
var seq__37020_37063__$1 = temp__5735__auto___37062__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37020_37063__$1)){
var c__4556__auto___37064 = cljs.core.chunk_first.call(null,seq__37020_37063__$1);
var G__37065 = cljs.core.chunk_rest.call(null,seq__37020_37063__$1);
var G__37066 = c__4556__auto___37064;
var G__37067 = cljs.core.count.call(null,c__4556__auto___37064);
var G__37068 = (0);
seq__37020_37053 = G__37065;
chunk__37021_37054 = G__37066;
count__37022_37055 = G__37067;
i__37023_37056 = G__37068;
continue;
} else {
var req_37069 = cljs.core.first.call(null,seq__37020_37063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37069,prov);


var G__37070 = cljs.core.next.call(null,seq__37020_37063__$1);
var G__37071 = null;
var G__37072 = (0);
var G__37073 = (0);
seq__37020_37053 = G__37070;
chunk__37021_37054 = G__37071;
count__37022_37055 = G__37072;
i__37023_37056 = G__37073;
continue;
}
} else {
}
}
break;
}


var G__37074 = cljs.core.next.call(null,seq__37004__$1);
var G__37075 = null;
var G__37076 = (0);
var G__37077 = (0);
seq__37004 = G__37074;
chunk__37005 = G__37075;
count__37006 = G__37076;
i__37007 = G__37077;
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
var seq__37078_37082 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37079_37083 = null;
var count__37080_37084 = (0);
var i__37081_37085 = (0);
while(true){
if((i__37081_37085 < count__37080_37084)){
var ns_37086 = cljs.core._nth.call(null,chunk__37079_37083,i__37081_37085);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37086);


var G__37087 = seq__37078_37082;
var G__37088 = chunk__37079_37083;
var G__37089 = count__37080_37084;
var G__37090 = (i__37081_37085 + (1));
seq__37078_37082 = G__37087;
chunk__37079_37083 = G__37088;
count__37080_37084 = G__37089;
i__37081_37085 = G__37090;
continue;
} else {
var temp__5735__auto___37091 = cljs.core.seq.call(null,seq__37078_37082);
if(temp__5735__auto___37091){
var seq__37078_37092__$1 = temp__5735__auto___37091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37078_37092__$1)){
var c__4556__auto___37093 = cljs.core.chunk_first.call(null,seq__37078_37092__$1);
var G__37094 = cljs.core.chunk_rest.call(null,seq__37078_37092__$1);
var G__37095 = c__4556__auto___37093;
var G__37096 = cljs.core.count.call(null,c__4556__auto___37093);
var G__37097 = (0);
seq__37078_37082 = G__37094;
chunk__37079_37083 = G__37095;
count__37080_37084 = G__37096;
i__37081_37085 = G__37097;
continue;
} else {
var ns_37098 = cljs.core.first.call(null,seq__37078_37092__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37098);


var G__37099 = cljs.core.next.call(null,seq__37078_37092__$1);
var G__37100 = null;
var G__37101 = (0);
var G__37102 = (0);
seq__37078_37082 = G__37099;
chunk__37079_37083 = G__37100;
count__37080_37084 = G__37101;
i__37081_37085 = G__37102;
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
var G__37103__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37104__i = 0, G__37104__a = new Array(arguments.length -  0);
while (G__37104__i < G__37104__a.length) {G__37104__a[G__37104__i] = arguments[G__37104__i + 0]; ++G__37104__i;}
  args = new cljs.core.IndexedSeq(G__37104__a,0,null);
} 
return G__37103__delegate.call(this,args);};
G__37103.cljs$lang$maxFixedArity = 0;
G__37103.cljs$lang$applyTo = (function (arglist__37105){
var args = cljs.core.seq(arglist__37105);
return G__37103__delegate(args);
});
G__37103.cljs$core$IFn$_invoke$arity$variadic = G__37103__delegate;
return G__37103;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__37106_SHARP_,p2__37107_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37106_SHARP_)),p2__37107_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__37108_SHARP_,p2__37109_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37108_SHARP_),p2__37109_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37110 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37110.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__37110.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__37110;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37111){if((e37111 instanceof Error)){
var e = e37111;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37111;

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
}catch (e37112){if((e37112 instanceof Error)){
var e = e37112;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37112;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37113 = cljs.core._EQ_;
var expr__37114 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37113.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37114))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37113.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37114))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37113.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37114))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37116,callback){
var map__37117 = p__37116;
var map__37117__$1 = (((((!((map__37117 == null))))?(((((map__37117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37117):map__37117);
var file_msg = map__37117__$1;
var request_url = cljs.core.get.call(null,map__37117__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_37155){
var state_val_37156 = (state_37155[(1)]);
if((state_val_37156 === (7))){
var inst_37151 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37157_37183 = state_37155__$1;
(statearr_37157_37183[(2)] = inst_37151);

(statearr_37157_37183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (1))){
var state_37155__$1 = state_37155;
var statearr_37158_37184 = state_37155__$1;
(statearr_37158_37184[(2)] = null);

(statearr_37158_37184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (4))){
var inst_37121 = (state_37155[(7)]);
var inst_37121__$1 = (state_37155[(2)]);
var state_37155__$1 = (function (){var statearr_37159 = state_37155;
(statearr_37159[(7)] = inst_37121__$1);

return statearr_37159;
})();
if(cljs.core.truth_(inst_37121__$1)){
var statearr_37160_37185 = state_37155__$1;
(statearr_37160_37185[(1)] = (5));

} else {
var statearr_37161_37186 = state_37155__$1;
(statearr_37161_37186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (15))){
var inst_37136 = (state_37155[(8)]);
var inst_37134 = (state_37155[(9)]);
var inst_37138 = inst_37136.call(null,inst_37134);
var state_37155__$1 = state_37155;
var statearr_37162_37187 = state_37155__$1;
(statearr_37162_37187[(2)] = inst_37138);

(statearr_37162_37187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (13))){
var inst_37145 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37163_37188 = state_37155__$1;
(statearr_37163_37188[(2)] = inst_37145);

(statearr_37163_37188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (6))){
var state_37155__$1 = state_37155;
var statearr_37164_37189 = state_37155__$1;
(statearr_37164_37189[(2)] = null);

(statearr_37164_37189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (17))){
var inst_37142 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37165_37190 = state_37155__$1;
(statearr_37165_37190[(2)] = inst_37142);

(statearr_37165_37190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (3))){
var inst_37153 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37155__$1,inst_37153);
} else {
if((state_val_37156 === (12))){
var state_37155__$1 = state_37155;
var statearr_37166_37191 = state_37155__$1;
(statearr_37166_37191[(2)] = null);

(statearr_37166_37191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (2))){
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37155__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37156 === (11))){
var inst_37126 = (state_37155[(10)]);
var inst_37132 = figwheel.client.file_reloading.blocking_load.call(null,inst_37126);
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37155__$1,(14),inst_37132);
} else {
if((state_val_37156 === (9))){
var inst_37126 = (state_37155[(10)]);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37126)){
var statearr_37167_37192 = state_37155__$1;
(statearr_37167_37192[(1)] = (11));

} else {
var statearr_37168_37193 = state_37155__$1;
(statearr_37168_37193[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (5))){
var inst_37121 = (state_37155[(7)]);
var inst_37127 = (state_37155[(11)]);
var inst_37126 = cljs.core.nth.call(null,inst_37121,(0),null);
var inst_37127__$1 = cljs.core.nth.call(null,inst_37121,(1),null);
var state_37155__$1 = (function (){var statearr_37169 = state_37155;
(statearr_37169[(10)] = inst_37126);

(statearr_37169[(11)] = inst_37127__$1);

return statearr_37169;
})();
if(cljs.core.truth_(inst_37127__$1)){
var statearr_37170_37194 = state_37155__$1;
(statearr_37170_37194[(1)] = (8));

} else {
var statearr_37171_37195 = state_37155__$1;
(statearr_37171_37195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (14))){
var inst_37136 = (state_37155[(8)]);
var inst_37126 = (state_37155[(10)]);
var inst_37134 = (state_37155[(2)]);
var inst_37135 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37136__$1 = cljs.core.get.call(null,inst_37135,inst_37126);
var state_37155__$1 = (function (){var statearr_37172 = state_37155;
(statearr_37172[(8)] = inst_37136__$1);

(statearr_37172[(9)] = inst_37134);

return statearr_37172;
})();
if(cljs.core.truth_(inst_37136__$1)){
var statearr_37173_37196 = state_37155__$1;
(statearr_37173_37196[(1)] = (15));

} else {
var statearr_37174_37197 = state_37155__$1;
(statearr_37174_37197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (16))){
var inst_37134 = (state_37155[(9)]);
var inst_37140 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37134);
var state_37155__$1 = state_37155;
var statearr_37175_37198 = state_37155__$1;
(statearr_37175_37198[(2)] = inst_37140);

(statearr_37175_37198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (10))){
var inst_37147 = (state_37155[(2)]);
var state_37155__$1 = (function (){var statearr_37176 = state_37155;
(statearr_37176[(12)] = inst_37147);

return statearr_37176;
})();
var statearr_37177_37199 = state_37155__$1;
(statearr_37177_37199[(2)] = null);

(statearr_37177_37199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (8))){
var inst_37127 = (state_37155[(11)]);
var inst_37129 = eval(inst_37127);
var state_37155__$1 = state_37155;
var statearr_37178_37200 = state_37155__$1;
(statearr_37178_37200[(2)] = inst_37129);

(statearr_37178_37200[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__34751__auto__ = null;
var figwheel$client$file_reloading$state_machine__34751__auto____0 = (function (){
var statearr_37179 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37179[(0)] = figwheel$client$file_reloading$state_machine__34751__auto__);

(statearr_37179[(1)] = (1));

return statearr_37179;
});
var figwheel$client$file_reloading$state_machine__34751__auto____1 = (function (state_37155){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_37155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e37180){if((e37180 instanceof Object)){
var ex__34754__auto__ = e37180;
var statearr_37181_37201 = state_37155;
(statearr_37181_37201[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37202 = state_37155;
state_37155 = G__37202;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34751__auto__ = function(state_37155){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34751__auto____1.call(this,state_37155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34751__auto____0;
figwheel$client$file_reloading$state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34751__auto____1;
return figwheel$client$file_reloading$state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_37182 = f__34846__auto__.call(null);
(statearr_37182[(6)] = c__34845__auto__);

return statearr_37182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37204 = arguments.length;
switch (G__37204) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37206,callback){
var map__37207 = p__37206;
var map__37207__$1 = (((((!((map__37207 == null))))?(((((map__37207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37207):map__37207);
var file_msg = map__37207__$1;
var namespace = cljs.core.get.call(null,map__37207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37209){
var map__37210 = p__37209;
var map__37210__$1 = (((((!((map__37210 == null))))?(((((map__37210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37210):map__37210);
var file_msg = map__37210__$1;
var namespace = cljs.core.get.call(null,map__37210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37212){
var map__37213 = p__37212;
var map__37213__$1 = (((((!((map__37213 == null))))?(((((map__37213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37213):map__37213);
var file_msg = map__37213__$1;
var namespace = cljs.core.get.call(null,map__37213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37215,callback){
var map__37216 = p__37215;
var map__37216__$1 = (((((!((map__37216 == null))))?(((((map__37216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37216):map__37216);
var file_msg = map__37216__$1;
var request_url = cljs.core.get.call(null,map__37216__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34845__auto___37266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_37251){
var state_val_37252 = (state_37251[(1)]);
if((state_val_37252 === (1))){
var inst_37225 = cljs.core.seq.call(null,files);
var inst_37226 = cljs.core.first.call(null,inst_37225);
var inst_37227 = cljs.core.next.call(null,inst_37225);
var inst_37228 = files;
var state_37251__$1 = (function (){var statearr_37253 = state_37251;
(statearr_37253[(7)] = inst_37226);

(statearr_37253[(8)] = inst_37228);

(statearr_37253[(9)] = inst_37227);

return statearr_37253;
})();
var statearr_37254_37267 = state_37251__$1;
(statearr_37254_37267[(2)] = null);

(statearr_37254_37267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37252 === (2))){
var inst_37228 = (state_37251[(8)]);
var inst_37234 = (state_37251[(10)]);
var inst_37233 = cljs.core.seq.call(null,inst_37228);
var inst_37234__$1 = cljs.core.first.call(null,inst_37233);
var inst_37235 = cljs.core.next.call(null,inst_37233);
var inst_37236 = (inst_37234__$1 == null);
var inst_37237 = cljs.core.not.call(null,inst_37236);
var state_37251__$1 = (function (){var statearr_37255 = state_37251;
(statearr_37255[(11)] = inst_37235);

(statearr_37255[(10)] = inst_37234__$1);

return statearr_37255;
})();
if(inst_37237){
var statearr_37256_37268 = state_37251__$1;
(statearr_37256_37268[(1)] = (4));

} else {
var statearr_37257_37269 = state_37251__$1;
(statearr_37257_37269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37252 === (3))){
var inst_37249 = (state_37251[(2)]);
var state_37251__$1 = state_37251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37251__$1,inst_37249);
} else {
if((state_val_37252 === (4))){
var inst_37234 = (state_37251[(10)]);
var inst_37239 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37234);
var state_37251__$1 = state_37251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37251__$1,(7),inst_37239);
} else {
if((state_val_37252 === (5))){
var inst_37245 = cljs.core.async.close_BANG_.call(null,out);
var state_37251__$1 = state_37251;
var statearr_37258_37270 = state_37251__$1;
(statearr_37258_37270[(2)] = inst_37245);

(statearr_37258_37270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37252 === (6))){
var inst_37247 = (state_37251[(2)]);
var state_37251__$1 = state_37251;
var statearr_37259_37271 = state_37251__$1;
(statearr_37259_37271[(2)] = inst_37247);

(statearr_37259_37271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37252 === (7))){
var inst_37235 = (state_37251[(11)]);
var inst_37241 = (state_37251[(2)]);
var inst_37242 = cljs.core.async.put_BANG_.call(null,out,inst_37241);
var inst_37228 = inst_37235;
var state_37251__$1 = (function (){var statearr_37260 = state_37251;
(statearr_37260[(8)] = inst_37228);

(statearr_37260[(12)] = inst_37242);

return statearr_37260;
})();
var statearr_37261_37272 = state_37251__$1;
(statearr_37261_37272[(2)] = null);

(statearr_37261_37272[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto____0 = (function (){
var statearr_37262 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37262[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto__);

(statearr_37262[(1)] = (1));

return statearr_37262;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto____1 = (function (state_37251){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_37251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e37263){if((e37263 instanceof Object)){
var ex__34754__auto__ = e37263;
var statearr_37264_37273 = state_37251;
(statearr_37264_37273[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37274 = state_37251;
state_37251 = G__37274;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto__ = function(state_37251){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto____1.call(this,state_37251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_37265 = f__34846__auto__.call(null);
(statearr_37265[(6)] = c__34845__auto___37266);

return statearr_37265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37275,opts){
var map__37276 = p__37275;
var map__37276__$1 = (((((!((map__37276 == null))))?(((((map__37276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37276):map__37276);
var eval_body = cljs.core.get.call(null,map__37276__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37278){var e = e37278;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37279_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37279_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37280){
var vec__37281 = p__37280;
var k = cljs.core.nth.call(null,vec__37281,(0),null);
var v = cljs.core.nth.call(null,vec__37281,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37284){
var vec__37285 = p__37284;
var k = cljs.core.nth.call(null,vec__37285,(0),null);
var v = cljs.core.nth.call(null,vec__37285,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37291,p__37292){
var map__37293 = p__37291;
var map__37293__$1 = (((((!((map__37293 == null))))?(((((map__37293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37293):map__37293);
var opts = map__37293__$1;
var before_jsload = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37294 = p__37292;
var map__37294__$1 = (((((!((map__37294 == null))))?(((((map__37294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37294):map__37294);
var msg = map__37294__$1;
var files = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34846__auto__ = (function (){var switch__34750__auto__ = (function (state_37448){
var state_val_37449 = (state_37448[(1)]);
if((state_val_37449 === (7))){
var inst_37309 = (state_37448[(7)]);
var inst_37310 = (state_37448[(8)]);
var inst_37308 = (state_37448[(9)]);
var inst_37311 = (state_37448[(10)]);
var inst_37316 = cljs.core._nth.call(null,inst_37309,inst_37311);
var inst_37317 = figwheel.client.file_reloading.eval_body.call(null,inst_37316,opts);
var inst_37318 = (inst_37311 + (1));
var tmp37450 = inst_37309;
var tmp37451 = inst_37310;
var tmp37452 = inst_37308;
var inst_37308__$1 = tmp37452;
var inst_37309__$1 = tmp37450;
var inst_37310__$1 = tmp37451;
var inst_37311__$1 = inst_37318;
var state_37448__$1 = (function (){var statearr_37453 = state_37448;
(statearr_37453[(7)] = inst_37309__$1);

(statearr_37453[(11)] = inst_37317);

(statearr_37453[(8)] = inst_37310__$1);

(statearr_37453[(9)] = inst_37308__$1);

(statearr_37453[(10)] = inst_37311__$1);

return statearr_37453;
})();
var statearr_37454_37537 = state_37448__$1;
(statearr_37454_37537[(2)] = null);

(statearr_37454_37537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (20))){
var inst_37351 = (state_37448[(12)]);
var inst_37359 = figwheel.client.file_reloading.sort_files.call(null,inst_37351);
var state_37448__$1 = state_37448;
var statearr_37455_37538 = state_37448__$1;
(statearr_37455_37538[(2)] = inst_37359);

(statearr_37455_37538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (27))){
var state_37448__$1 = state_37448;
var statearr_37456_37539 = state_37448__$1;
(statearr_37456_37539[(2)] = null);

(statearr_37456_37539[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (1))){
var inst_37300 = (state_37448[(13)]);
var inst_37297 = before_jsload.call(null,files);
var inst_37298 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37299 = (function (){return (function (p1__37288_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37288_SHARP_);
});
})();
var inst_37300__$1 = cljs.core.filter.call(null,inst_37299,files);
var inst_37301 = cljs.core.not_empty.call(null,inst_37300__$1);
var state_37448__$1 = (function (){var statearr_37457 = state_37448;
(statearr_37457[(13)] = inst_37300__$1);

(statearr_37457[(14)] = inst_37298);

(statearr_37457[(15)] = inst_37297);

return statearr_37457;
})();
if(cljs.core.truth_(inst_37301)){
var statearr_37458_37540 = state_37448__$1;
(statearr_37458_37540[(1)] = (2));

} else {
var statearr_37459_37541 = state_37448__$1;
(statearr_37459_37541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (24))){
var state_37448__$1 = state_37448;
var statearr_37460_37542 = state_37448__$1;
(statearr_37460_37542[(2)] = null);

(statearr_37460_37542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (39))){
var inst_37401 = (state_37448[(16)]);
var state_37448__$1 = state_37448;
var statearr_37461_37543 = state_37448__$1;
(statearr_37461_37543[(2)] = inst_37401);

(statearr_37461_37543[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (46))){
var inst_37443 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37462_37544 = state_37448__$1;
(statearr_37462_37544[(2)] = inst_37443);

(statearr_37462_37544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (4))){
var inst_37345 = (state_37448[(2)]);
var inst_37346 = cljs.core.List.EMPTY;
var inst_37347 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37346);
var inst_37348 = (function (){return (function (p1__37289_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37289_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37289_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37289_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_37349 = cljs.core.filter.call(null,inst_37348,files);
var inst_37350 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37351 = cljs.core.concat.call(null,inst_37349,inst_37350);
var state_37448__$1 = (function (){var statearr_37463 = state_37448;
(statearr_37463[(17)] = inst_37345);

(statearr_37463[(12)] = inst_37351);

(statearr_37463[(18)] = inst_37347);

return statearr_37463;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37464_37545 = state_37448__$1;
(statearr_37464_37545[(1)] = (16));

} else {
var statearr_37465_37546 = state_37448__$1;
(statearr_37465_37546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (15))){
var inst_37335 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37466_37547 = state_37448__$1;
(statearr_37466_37547[(2)] = inst_37335);

(statearr_37466_37547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (21))){
var inst_37361 = (state_37448[(19)]);
var inst_37361__$1 = (state_37448[(2)]);
var inst_37362 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37361__$1);
var state_37448__$1 = (function (){var statearr_37467 = state_37448;
(statearr_37467[(19)] = inst_37361__$1);

return statearr_37467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37448__$1,(22),inst_37362);
} else {
if((state_val_37449 === (31))){
var inst_37446 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37448__$1,inst_37446);
} else {
if((state_val_37449 === (32))){
var inst_37401 = (state_37448[(16)]);
var inst_37406 = inst_37401.cljs$lang$protocol_mask$partition0$;
var inst_37407 = (inst_37406 & (64));
var inst_37408 = inst_37401.cljs$core$ISeq$;
var inst_37409 = (cljs.core.PROTOCOL_SENTINEL === inst_37408);
var inst_37410 = ((inst_37407) || (inst_37409));
var state_37448__$1 = state_37448;
if(cljs.core.truth_(inst_37410)){
var statearr_37468_37548 = state_37448__$1;
(statearr_37468_37548[(1)] = (35));

} else {
var statearr_37469_37549 = state_37448__$1;
(statearr_37469_37549[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (40))){
var inst_37423 = (state_37448[(20)]);
var inst_37422 = (state_37448[(2)]);
var inst_37423__$1 = cljs.core.get.call(null,inst_37422,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37424 = cljs.core.get.call(null,inst_37422,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37425 = cljs.core.not_empty.call(null,inst_37423__$1);
var state_37448__$1 = (function (){var statearr_37470 = state_37448;
(statearr_37470[(20)] = inst_37423__$1);

(statearr_37470[(21)] = inst_37424);

return statearr_37470;
})();
if(cljs.core.truth_(inst_37425)){
var statearr_37471_37550 = state_37448__$1;
(statearr_37471_37550[(1)] = (41));

} else {
var statearr_37472_37551 = state_37448__$1;
(statearr_37472_37551[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (33))){
var state_37448__$1 = state_37448;
var statearr_37473_37552 = state_37448__$1;
(statearr_37473_37552[(2)] = false);

(statearr_37473_37552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (13))){
var inst_37321 = (state_37448[(22)]);
var inst_37325 = cljs.core.chunk_first.call(null,inst_37321);
var inst_37326 = cljs.core.chunk_rest.call(null,inst_37321);
var inst_37327 = cljs.core.count.call(null,inst_37325);
var inst_37308 = inst_37326;
var inst_37309 = inst_37325;
var inst_37310 = inst_37327;
var inst_37311 = (0);
var state_37448__$1 = (function (){var statearr_37474 = state_37448;
(statearr_37474[(7)] = inst_37309);

(statearr_37474[(8)] = inst_37310);

(statearr_37474[(9)] = inst_37308);

(statearr_37474[(10)] = inst_37311);

return statearr_37474;
})();
var statearr_37475_37553 = state_37448__$1;
(statearr_37475_37553[(2)] = null);

(statearr_37475_37553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (22))){
var inst_37364 = (state_37448[(23)]);
var inst_37365 = (state_37448[(24)]);
var inst_37361 = (state_37448[(19)]);
var inst_37369 = (state_37448[(25)]);
var inst_37364__$1 = (state_37448[(2)]);
var inst_37365__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37364__$1);
var inst_37366 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364__$1;
var res = inst_37365__$1;
return (function (p1__37290_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37290_SHARP_));
});
})();
var inst_37367 = cljs.core.filter.call(null,inst_37366,inst_37364__$1);
var inst_37368 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37369__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37368);
var inst_37370 = cljs.core.not_empty.call(null,inst_37369__$1);
var state_37448__$1 = (function (){var statearr_37476 = state_37448;
(statearr_37476[(23)] = inst_37364__$1);

(statearr_37476[(26)] = inst_37367);

(statearr_37476[(24)] = inst_37365__$1);

(statearr_37476[(25)] = inst_37369__$1);

return statearr_37476;
})();
if(cljs.core.truth_(inst_37370)){
var statearr_37477_37554 = state_37448__$1;
(statearr_37477_37554[(1)] = (23));

} else {
var statearr_37478_37555 = state_37448__$1;
(statearr_37478_37555[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (36))){
var state_37448__$1 = state_37448;
var statearr_37479_37556 = state_37448__$1;
(statearr_37479_37556[(2)] = false);

(statearr_37479_37556[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (41))){
var inst_37423 = (state_37448[(20)]);
var inst_37427 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37428 = cljs.core.map.call(null,inst_37427,inst_37423);
var inst_37429 = cljs.core.pr_str.call(null,inst_37428);
var inst_37430 = ["figwheel-no-load meta-data: ",inst_37429].join('');
var inst_37431 = figwheel.client.utils.log.call(null,inst_37430);
var state_37448__$1 = state_37448;
var statearr_37480_37557 = state_37448__$1;
(statearr_37480_37557[(2)] = inst_37431);

(statearr_37480_37557[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (43))){
var inst_37424 = (state_37448[(21)]);
var inst_37434 = (state_37448[(2)]);
var inst_37435 = cljs.core.not_empty.call(null,inst_37424);
var state_37448__$1 = (function (){var statearr_37481 = state_37448;
(statearr_37481[(27)] = inst_37434);

return statearr_37481;
})();
if(cljs.core.truth_(inst_37435)){
var statearr_37482_37558 = state_37448__$1;
(statearr_37482_37558[(1)] = (44));

} else {
var statearr_37483_37559 = state_37448__$1;
(statearr_37483_37559[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (29))){
var inst_37364 = (state_37448[(23)]);
var inst_37367 = (state_37448[(26)]);
var inst_37401 = (state_37448[(16)]);
var inst_37365 = (state_37448[(24)]);
var inst_37361 = (state_37448[(19)]);
var inst_37369 = (state_37448[(25)]);
var inst_37397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37400 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return (function (p__37399){
var map__37484 = p__37399;
var map__37484__$1 = (((((!((map__37484 == null))))?(((((map__37484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37484):map__37484);
var namespace = cljs.core.get.call(null,map__37484__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_37401__$1 = cljs.core.group_by.call(null,inst_37400,inst_37367);
var inst_37403 = (inst_37401__$1 == null);
var inst_37404 = cljs.core.not.call(null,inst_37403);
var state_37448__$1 = (function (){var statearr_37486 = state_37448;
(statearr_37486[(28)] = inst_37397);

(statearr_37486[(16)] = inst_37401__$1);

return statearr_37486;
})();
if(inst_37404){
var statearr_37487_37560 = state_37448__$1;
(statearr_37487_37560[(1)] = (32));

} else {
var statearr_37488_37561 = state_37448__$1;
(statearr_37488_37561[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (44))){
var inst_37424 = (state_37448[(21)]);
var inst_37437 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37424);
var inst_37438 = cljs.core.pr_str.call(null,inst_37437);
var inst_37439 = ["not required: ",inst_37438].join('');
var inst_37440 = figwheel.client.utils.log.call(null,inst_37439);
var state_37448__$1 = state_37448;
var statearr_37489_37562 = state_37448__$1;
(statearr_37489_37562[(2)] = inst_37440);

(statearr_37489_37562[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (6))){
var inst_37342 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37490_37563 = state_37448__$1;
(statearr_37490_37563[(2)] = inst_37342);

(statearr_37490_37563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (28))){
var inst_37367 = (state_37448[(26)]);
var inst_37394 = (state_37448[(2)]);
var inst_37395 = cljs.core.not_empty.call(null,inst_37367);
var state_37448__$1 = (function (){var statearr_37491 = state_37448;
(statearr_37491[(29)] = inst_37394);

return statearr_37491;
})();
if(cljs.core.truth_(inst_37395)){
var statearr_37492_37564 = state_37448__$1;
(statearr_37492_37564[(1)] = (29));

} else {
var statearr_37493_37565 = state_37448__$1;
(statearr_37493_37565[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (25))){
var inst_37365 = (state_37448[(24)]);
var inst_37381 = (state_37448[(2)]);
var inst_37382 = cljs.core.not_empty.call(null,inst_37365);
var state_37448__$1 = (function (){var statearr_37494 = state_37448;
(statearr_37494[(30)] = inst_37381);

return statearr_37494;
})();
if(cljs.core.truth_(inst_37382)){
var statearr_37495_37566 = state_37448__$1;
(statearr_37495_37566[(1)] = (26));

} else {
var statearr_37496_37567 = state_37448__$1;
(statearr_37496_37567[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (34))){
var inst_37417 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
if(cljs.core.truth_(inst_37417)){
var statearr_37497_37568 = state_37448__$1;
(statearr_37497_37568[(1)] = (38));

} else {
var statearr_37498_37569 = state_37448__$1;
(statearr_37498_37569[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (17))){
var state_37448__$1 = state_37448;
var statearr_37499_37570 = state_37448__$1;
(statearr_37499_37570[(2)] = recompile_dependents);

(statearr_37499_37570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (3))){
var state_37448__$1 = state_37448;
var statearr_37500_37571 = state_37448__$1;
(statearr_37500_37571[(2)] = null);

(statearr_37500_37571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (12))){
var inst_37338 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37501_37572 = state_37448__$1;
(statearr_37501_37572[(2)] = inst_37338);

(statearr_37501_37572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (2))){
var inst_37300 = (state_37448[(13)]);
var inst_37307 = cljs.core.seq.call(null,inst_37300);
var inst_37308 = inst_37307;
var inst_37309 = null;
var inst_37310 = (0);
var inst_37311 = (0);
var state_37448__$1 = (function (){var statearr_37502 = state_37448;
(statearr_37502[(7)] = inst_37309);

(statearr_37502[(8)] = inst_37310);

(statearr_37502[(9)] = inst_37308);

(statearr_37502[(10)] = inst_37311);

return statearr_37502;
})();
var statearr_37503_37573 = state_37448__$1;
(statearr_37503_37573[(2)] = null);

(statearr_37503_37573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (23))){
var inst_37364 = (state_37448[(23)]);
var inst_37367 = (state_37448[(26)]);
var inst_37365 = (state_37448[(24)]);
var inst_37361 = (state_37448[(19)]);
var inst_37369 = (state_37448[(25)]);
var inst_37372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37374 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return (function (p__37373){
var map__37504 = p__37373;
var map__37504__$1 = (((((!((map__37504 == null))))?(((((map__37504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37504):map__37504);
var request_url = cljs.core.get.call(null,map__37504__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_37375 = cljs.core.reverse.call(null,inst_37369);
var inst_37376 = cljs.core.map.call(null,inst_37374,inst_37375);
var inst_37377 = cljs.core.pr_str.call(null,inst_37376);
var inst_37378 = figwheel.client.utils.log.call(null,inst_37377);
var state_37448__$1 = (function (){var statearr_37506 = state_37448;
(statearr_37506[(31)] = inst_37372);

return statearr_37506;
})();
var statearr_37507_37574 = state_37448__$1;
(statearr_37507_37574[(2)] = inst_37378);

(statearr_37507_37574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (35))){
var state_37448__$1 = state_37448;
var statearr_37508_37575 = state_37448__$1;
(statearr_37508_37575[(2)] = true);

(statearr_37508_37575[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (19))){
var inst_37351 = (state_37448[(12)]);
var inst_37357 = figwheel.client.file_reloading.expand_files.call(null,inst_37351);
var state_37448__$1 = state_37448;
var statearr_37509_37576 = state_37448__$1;
(statearr_37509_37576[(2)] = inst_37357);

(statearr_37509_37576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (11))){
var state_37448__$1 = state_37448;
var statearr_37510_37577 = state_37448__$1;
(statearr_37510_37577[(2)] = null);

(statearr_37510_37577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (9))){
var inst_37340 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37511_37578 = state_37448__$1;
(statearr_37511_37578[(2)] = inst_37340);

(statearr_37511_37578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (5))){
var inst_37310 = (state_37448[(8)]);
var inst_37311 = (state_37448[(10)]);
var inst_37313 = (inst_37311 < inst_37310);
var inst_37314 = inst_37313;
var state_37448__$1 = state_37448;
if(cljs.core.truth_(inst_37314)){
var statearr_37512_37579 = state_37448__$1;
(statearr_37512_37579[(1)] = (7));

} else {
var statearr_37513_37580 = state_37448__$1;
(statearr_37513_37580[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (14))){
var inst_37321 = (state_37448[(22)]);
var inst_37330 = cljs.core.first.call(null,inst_37321);
var inst_37331 = figwheel.client.file_reloading.eval_body.call(null,inst_37330,opts);
var inst_37332 = cljs.core.next.call(null,inst_37321);
var inst_37308 = inst_37332;
var inst_37309 = null;
var inst_37310 = (0);
var inst_37311 = (0);
var state_37448__$1 = (function (){var statearr_37514 = state_37448;
(statearr_37514[(7)] = inst_37309);

(statearr_37514[(32)] = inst_37331);

(statearr_37514[(8)] = inst_37310);

(statearr_37514[(9)] = inst_37308);

(statearr_37514[(10)] = inst_37311);

return statearr_37514;
})();
var statearr_37515_37581 = state_37448__$1;
(statearr_37515_37581[(2)] = null);

(statearr_37515_37581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (45))){
var state_37448__$1 = state_37448;
var statearr_37516_37582 = state_37448__$1;
(statearr_37516_37582[(2)] = null);

(statearr_37516_37582[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (26))){
var inst_37364 = (state_37448[(23)]);
var inst_37367 = (state_37448[(26)]);
var inst_37365 = (state_37448[(24)]);
var inst_37361 = (state_37448[(19)]);
var inst_37369 = (state_37448[(25)]);
var inst_37384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37386 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return (function (p__37385){
var map__37517 = p__37385;
var map__37517__$1 = (((((!((map__37517 == null))))?(((((map__37517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37517):map__37517);
var namespace = cljs.core.get.call(null,map__37517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_37387 = cljs.core.map.call(null,inst_37386,inst_37365);
var inst_37388 = cljs.core.pr_str.call(null,inst_37387);
var inst_37389 = figwheel.client.utils.log.call(null,inst_37388);
var inst_37390 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_37391 = setTimeout(inst_37390,(10));
var state_37448__$1 = (function (){var statearr_37519 = state_37448;
(statearr_37519[(33)] = inst_37389);

(statearr_37519[(34)] = inst_37384);

return statearr_37519;
})();
var statearr_37520_37583 = state_37448__$1;
(statearr_37520_37583[(2)] = inst_37391);

(statearr_37520_37583[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (16))){
var state_37448__$1 = state_37448;
var statearr_37521_37584 = state_37448__$1;
(statearr_37521_37584[(2)] = reload_dependents);

(statearr_37521_37584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (38))){
var inst_37401 = (state_37448[(16)]);
var inst_37419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37401);
var state_37448__$1 = state_37448;
var statearr_37522_37585 = state_37448__$1;
(statearr_37522_37585[(2)] = inst_37419);

(statearr_37522_37585[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (30))){
var state_37448__$1 = state_37448;
var statearr_37523_37586 = state_37448__$1;
(statearr_37523_37586[(2)] = null);

(statearr_37523_37586[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (10))){
var inst_37321 = (state_37448[(22)]);
var inst_37323 = cljs.core.chunked_seq_QMARK_.call(null,inst_37321);
var state_37448__$1 = state_37448;
if(inst_37323){
var statearr_37524_37587 = state_37448__$1;
(statearr_37524_37587[(1)] = (13));

} else {
var statearr_37525_37588 = state_37448__$1;
(statearr_37525_37588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (18))){
var inst_37355 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
if(cljs.core.truth_(inst_37355)){
var statearr_37526_37589 = state_37448__$1;
(statearr_37526_37589[(1)] = (19));

} else {
var statearr_37527_37590 = state_37448__$1;
(statearr_37527_37590[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (42))){
var state_37448__$1 = state_37448;
var statearr_37528_37591 = state_37448__$1;
(statearr_37528_37591[(2)] = null);

(statearr_37528_37591[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (37))){
var inst_37414 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37529_37592 = state_37448__$1;
(statearr_37529_37592[(2)] = inst_37414);

(statearr_37529_37592[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (8))){
var inst_37321 = (state_37448[(22)]);
var inst_37308 = (state_37448[(9)]);
var inst_37321__$1 = cljs.core.seq.call(null,inst_37308);
var state_37448__$1 = (function (){var statearr_37530 = state_37448;
(statearr_37530[(22)] = inst_37321__$1);

return statearr_37530;
})();
if(inst_37321__$1){
var statearr_37531_37593 = state_37448__$1;
(statearr_37531_37593[(1)] = (10));

} else {
var statearr_37532_37594 = state_37448__$1;
(statearr_37532_37594[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto____0 = (function (){
var statearr_37533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37533[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto__);

(statearr_37533[(1)] = (1));

return statearr_37533;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto____1 = (function (state_37448){
while(true){
var ret_value__34752__auto__ = (function (){try{while(true){
var result__34753__auto__ = switch__34750__auto__.call(null,state_37448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34753__auto__;
}
break;
}
}catch (e37534){if((e37534 instanceof Object)){
var ex__34754__auto__ = e37534;
var statearr_37535_37595 = state_37448;
(statearr_37535_37595[(5)] = ex__34754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37596 = state_37448;
state_37448 = G__37596;
continue;
} else {
return ret_value__34752__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto__ = function(state_37448){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto____1.call(this,state_37448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34751__auto__;
})()
})();
var state__34847__auto__ = (function (){var statearr_37536 = f__34846__auto__.call(null);
(statearr_37536[(6)] = c__34845__auto__);

return statearr_37536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34847__auto__);
}));

return c__34845__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37599,link){
var map__37600 = p__37599;
var map__37600__$1 = (((((!((map__37600 == null))))?(((((map__37600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37600):map__37600);
var file = cljs.core.get.call(null,map__37600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__37597_SHARP_,p2__37598_SHARP_){
if(cljs.core._EQ_.call(null,p1__37597_SHARP_,p2__37598_SHARP_)){
return p1__37597_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37603){
var map__37604 = p__37603;
var map__37604__$1 = (((((!((map__37604 == null))))?(((((map__37604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37604):map__37604);
var match_length = cljs.core.get.call(null,map__37604__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37604__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37602_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37602_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37606_SHARP_,p2__37607_SHARP_){
return cljs.core.assoc.call(null,p1__37606_SHARP_,cljs.core.get.call(null,p2__37607_SHARP_,key),p2__37607_SHARP_);
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
var loaded_f_datas_37608 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37608);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37608);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37609,p__37610){
var map__37611 = p__37609;
var map__37611__$1 = (((((!((map__37611 == null))))?(((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37611):map__37611);
var on_cssload = cljs.core.get.call(null,map__37611__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37612 = p__37610;
var map__37612__$1 = (((((!((map__37612 == null))))?(((((map__37612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37612):map__37612);
var files_msg = map__37612__$1;
var files = cljs.core.get.call(null,map__37612__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1626961187083

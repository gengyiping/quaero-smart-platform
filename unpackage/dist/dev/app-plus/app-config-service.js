
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/register/register","pages/scan/scan","pages/reach/reach-number","pages/reach/reach-num","pages/reach/reach-look","pages/replace/replace","pages/replace/message","pages/replace/replace-one","pages/replace/replace-two","pages/replace/replace-three","pages/replace/replace-four","pages/replace/replace-five","pages/replace/replace-six","pages/replace/replace-seven","pages/send/send","pages/scan-more/scan-more","pages/singly-move/singly-move","pages/singly-movee/singly-movee","pages/index/index"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#377EB8","backgroundColor":"#FFFFFF"},"networkTimeout":{"uploadFile":5000,"request":1000,"connectSocket":60000,"downloadFile":60000},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"凯实-数据","compilerVersion":"2.9.8","entryPagePath":"pages/register/register"};
var __uniRoutes = [{"path":"/pages/register/register","meta":{"isQuit":true},"window":{"navigationBarTitleText":""}},{"path":"/pages/scan/scan","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/reach/reach-number","meta":{},"window":{"navigationBarTitleText":"01-21 未交查询输入"}},{"path":"/pages/reach/reach-num","meta":{},"window":{"navigationBarTitleText":"01-23 按订单到料信息输入"}},{"path":"/pages/reach/reach-look","meta":{},"window":{"navigationBarTitleText":"01-22 按订单未交查询结果"}},{"path":"/pages/replace/replace","meta":{},"window":{"navigationBarTitleText":"02-21 计划到料查询输入"}},{"path":"/pages/replace/message","meta":{},"window":{"navigationBarTitleText":"02-28 到料确认-收料信息输入"}},{"path":"/pages/replace/replace-one","meta":{},"window":{"navigationBarTitleText":"02-22A 计划到料查询结果"}},{"path":"/pages/replace/replace-two","meta":{},"window":{"navigationBarTitleText":"02-22B 计划到料查询结果"}},{"path":"/pages/replace/replace-three","meta":{},"window":{"navigationBarTitleText":"02-22C 计划到料查询结果"}},{"path":"/pages/replace/replace-four","meta":{},"window":{"navigationBarTitleText":"02-12D 计划到料查询结果"}},{"path":"/pages/replace/replace-five","meta":{},"window":{"navigationBarTitleText":"02-12E 计划到料查询结果"}},{"path":"/pages/replace/replace-six","meta":{},"window":{"navigationBarTitleText":"02-13A 未交查询结果"}},{"path":"/pages/replace/replace-seven","meta":{},"window":{"navigationBarTitleText":"02-13B 未交查询结果"}},{"path":"/pages/send/send","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/scan-more/scan-more","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/singly-move/singly-move","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/singly-movee/singly-movee","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"权限显示的界面"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

(this.webpackJsonpreact_imagehosting=this.webpackJsonpreact_imagehosting||[]).push([[10],{253:function(e,n,t){"use strict";t.r(n);var a=t(2),s=t(130),r=t(19),c=t(256),o=t(259),i=t(102),l=t(20),u=t(66),b=t(6);function j(){var e=Object(r.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);return j=function(){return e},e}function m(){var e=Object(r.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgb(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]);return m=function(){return e},e}var p=l.a.div(m()),d=l.a.h1(j()),h={labelCol:{span:6},wrapperCol:{span:18}},x={wrapperCol:{offset:6,span:18}};n.default=function(){var e=Object(u.a)().AuthStore,n=Object(b.f)();return Object(a.jsxs)(p,{children:[Object(a.jsx)(d,{children:"\u767b\u5f55"}),Object(a.jsxs)(c.a,Object(s.a)(Object(s.a)({},h),{},{name:"basic",onFinish:function(t){console.log("Success:",t),e.setUsername(t.username),e.setPassword(t.password),e.login().then((function(){console.log("\u767b\u5f55\u6210\u529f,\u8df3\u8f6c\u5230\u9996\u9875"),n.push("/")})).catch((function(e){console.log("\u767b\u5f55\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(c.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,n){return/\W/.test(n)?Promise.reject("\u4e0d\u80fd\u51fa\u73b0\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf\u4ee5\u5916\u7684\u5b57\u7b26"):n.length<4||n.length>10?Promise.reject("\u7528\u6237\u540d\u957f\u5ea6\u4e3a4~10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:Object(a.jsx)(o.a,{})}),Object(a.jsx)(c.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c11\u8f93\u51654\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u5927\u8f93\u516510\u4e2a\u5b57\u7b26"}],children:Object(a.jsx)(o.a.Password,{})}),Object(a.jsx)(c.a.Item,Object(s.a)(Object(s.a)({},x),{},{children:Object(a.jsx)(i.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}))]}))]})}}}]);
//# sourceMappingURL=10.dd5961be.chunk.js.map
(this.webpackJsonpreact_imagehosting=this.webpackJsonpreact_imagehosting||[]).push([[11],{254:function(e,n,r){"use strict";r.r(n);var t=r(2),s=r(130),a=r(19),c=r(256),o=r(259),i=r(102),l=r(20),u=r(66),j=r(6);function m(){var e=Object(a.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);return m=function(){return e},e}function b(){var e=Object(a.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgb(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]);return b=function(){return e},e}var d=l.a.div(b()),p=l.a.h1(m()),h={labelCol:{span:6},wrapperCol:{span:18}},x={wrapperCol:{offset:6,span:18}};n.default=function(){var e=Object(u.a)().AuthStore,n=Object(j.f)();return Object(t.jsxs)(d,{children:[Object(t.jsx)(p,{children:"\u6ce8\u518c"}),Object(t.jsxs)(c.a,Object(s.a)(Object(s.a)({},h),{},{name:"basic",onFinish:function(r){console.log("Success:",r),e.setUsername(r.username),e.setPassword(r.password),e.register().then((function(){console.log("\u767b\u5f55\u6210\u529f\uff0c\u8df3\u8f6c\u9996\u9875"),n.push("/")})).catch((function(){console.log("\u8df3\u8f6c\u5931\u8d25\uff0c\u4ec0\u4e48\u90fd\u4e0d\u505a")}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(t.jsx)(c.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,n){return/\W/.test(n)?Promise.reject("\u4e0d\u80fd\u51fa\u73b0\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf\u4ee5\u5916\u7684\u5b57\u7b26"):n.length<4||n.length>10?Promise.reject("\u7528\u6237\u540d\u957f\u5ea6\u4e3a4~10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:Object(t.jsx)(o.a,{})}),Object(t.jsx)(c.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c11\u8f93\u51654\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u5927\u8f93\u516510\u4e2a\u5b57\u7b26"}],children:Object(t.jsx)(o.a.Password,{})}),Object(t.jsx)(c.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u518d\u6b21\u786e\u8ba4\u5bc6\u7801"},function(e){var n=e.getFieldValue;return{validator:function(e,r){return r&&n("password")!==r?Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u5339\u914d"):Promise.resolve()}}}],children:Object(t.jsx)(o.a.Password,{})}),Object(t.jsx)(c.a.Item,Object(s.a)(Object(s.a)({},x),{},{children:Object(t.jsx)(i.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}))]}))]})}}}]);
//# sourceMappingURL=11.e601ca01.chunk.js.map
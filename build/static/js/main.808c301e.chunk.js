(this.webpackJsonponeshotsquad=this.webpackJsonponeshotsquad||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"date":"2021-08-16T15:00:00Z","players":"Purple, Rinceswind, (+2 slots)","description":"Deep within an abandoned dig site, there lies ancient tablets that hold information about the Dark Serpent."},{"date":"2021-08-16T22:00:00Z","players":"LZY, Picaroon, (+2 slots)","description":"Drums of war echoes trough the land as Jae-sungs forces leave behing a trail of destruction."},{"date":"2021-08-17T15:00:00Z","players":"Moro, Purple, Rinceswind (+1 slot)","description":"The travel to the city of Gita is dangerious and full of terrors."},{"date":"2021-08-20T15:00:00Z","players":"Asmordeus, Ce\'Nedra, Moro (+1 slot)","description":"As the fates of people head towards their ends, new bonds are born from their actions."},{"date":"2021-08-22T14:00:00Z","players":"Purple, Warlord, (+2 slots)","description":"~Story to be revealed~"},{"date":"2021-08-24T22:00:00Z","players":"LZY, Picaroon, (+2 slots)","description":"~Story to be revealed~"},{"date":"2021-08-26T15:00:00Z","players":"Moro, Picaroon, Rinceswind, (+1 slot)","description":"~Story to be revealed~"},{"date":"2021-08-27T15:00:00Z","players":"Asmordeus, Ce\'Nedra, (+2 slots)","description":"~Story to be revealed~"},{"date":"2021-08-29T14:00:00Z","players":"Asmordeus, Warlord, (+2 slots)","description":"~Story to be revealed~"},{"date":"2021-08-29T22:00:00Z","players":"Ce\'Nedra, LZY, (+2 slots)","description":"~Story to be revealed~"}]')},,,,,,,,function(e,t,s){"use strict";(function(e){var i=s(3),r=s(4),a=s(5),n=s(7),c=s(6),o=s(1),d=s.n(o),l=s(12),h=(s(19),s(11)),m=s(2),j=s(0),b=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var r;return Object(i.a)(this,s),(r=t.call(this,e)).state={time:{hours:0,minutes:0,seconds:0,milliseconds:0},startTime:0,timer:null,duration:0},r.startTimer=r.start.bind(Object(a.a)(r)),r.nextGame=[],r}return Object(r.a)(s,[{key:"msToTime",value:function(e){var t=parseInt(e%1e3),s=Math.floor(e/1e3%60),i=Math.floor(e/6e4%60),r=Math.floor(e/36e5);return{hours:r=r.toString().padStart(2,"0"),minutes:i=i.toString().padStart(2,"0"),seconds:s=s.toString().padStart(2,"0"),milliseconds:t=t.toString().padStart(3,"0")}}},{key:"start",value:function(){var e=this;if(0===this.nextGame.length)for(var t=0,s=!1;!s&&t!==m.length;){var i=m[t];new Date(i.date).getTime()-Date.now()>0&&(this.nextGame=m[t],s=!0),t++}this.state.timer||(this.state.startTime=Date.now(),this.state.duration=new Date(this.nextGame.date).getTime()-Date.now(),this.timer=window.setInterval((function(){return e.run()}),1e3))}},{key:"run",value:function(){var e=this,t=Date.now()-this.state.startTime,s=this.state.duration-t;s<0&&(s=0),this.setState((function(){return{time:e.msToTime(s)}})),0===s&&(window.clearTimeout(this.timer),this.timer=null)}},{key:"renderGameTable",value:function(){return Object(j.jsx)(h.a,{})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[this.startTimer(),Object(j.jsxs)("div",{className:"description-header card",children:[Object(j.jsx)("h1",{children:" GMT ONESHOT SQUAD"}),Object(j.jsx)("p",{children:"This is fanmade site. Scheduled games will be updated whenever I have time"}),Object(j.jsx)("p",{children:"With possible issues regarding the site, contact Moro on the discord."})]}),Object(j.jsxs)("div",{className:"timer card",children:[Object(j.jsxs)("div",{className:"bigTimerCard",children:[Object(j.jsx)("div",{className:"bigTimerLabelDiv",children:Object(j.jsx)("p",{id:"bigTimerLabel",children:"Next Game in"})}),Object(j.jsx)("p",{className:"bigTimer",children:Object(j.jsxs)("strong",{children:[this.state.time.hours," : ",this.state.time.minutes," : ",this.state.time.seconds]})})]}),Object(j.jsxs)("div",{className:"timerInfo",children:[Object(j.jsx)("p",{className:"timerText1",children:Object(j.jsx)("strong",{children:new Date(this.nextGame.date).toLocaleString("en-gb",{dateStyle:"medium",timeStyle:"long"})})}),Object(j.jsxs)("span",{className:"infoText",children:["Your timezone: ",Intl.DateTimeFormat().resolvedOptions().timeZone]}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"timerText2",children:new Date(this.nextGame.date).toUTCString()}),Object(j.jsx)("span",{className:"infoText",children:"UTC time"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Players"}),Object(j.jsx)("p",{children:this.nextGame.players}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Description"}),Object(j.jsx)("p",{children:this.nextGame.description})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"gameList",children:[Object(j.jsx)("div",{className:"middleBreak",children:Object(j.jsx)("h2",{id:"comingGames",children:"Upcoming games"})}),this.renderGameTable()]}),Object(j.jsx)("div",{style:{height:"100px"}})]})}}]),s}(d.a.Component);t.a=Object(l.hot)(e)(b)}).call(this,s(18)(e))},function(e,t,s){"use strict";var i=s(3),r=s(4),a=s(7),n=s(6),c=s(1),o=s.n(c),d=(s(20),s(2)),l=s(0),h=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"renderInfo",value:function(){var e=[];return d.forEach((function(t,s){new Date(t.date).getTime()-Date.now()>0&&(s===d.length-1?e.push(Object(l.jsxs)("div",{className:"gameCard",children:[Object(l.jsx)("h1",{className:"userTime",children:new Date(t.date).toLocaleString("en-gb",{dateStyle:"medium",timeStyle:"medium"})}),Object(l.jsx)("p",{children:new Date(t.date).toUTCString()}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.players}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.description})]},s)):e.push(Object(l.jsxs)("div",{className:"gameCard middleRow",children:[Object(l.jsx)("h1",{className:"userTime",children:new Date(t.date).toLocaleString("en-gb",{dateStyle:"medium",timeStyle:"medium"})}),Object(l.jsx)("p",{children:new Date(t.date).toUTCString()}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.players}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.description})]},s)))})),e}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"gameTable",children:this.renderInfo()})}}]),s}(o.a.Component);t.a=h},,function(e,t,s){"use strict";s.r(t);s(1);var i=s(9),r=s.n(i),a=s(10),n=s(0);r.a.render(Object(n.jsx)(a.a,{}),document.getElementById("root"))},,,,,,function(e,t,s){},function(e,t,s){}],[[13,1,2]]]);
//# sourceMappingURL=main.808c301e.chunk.js.map
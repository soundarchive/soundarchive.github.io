import{d as x,a as n,o as m,f as v,g as s,D as c,E as y,G as h,F as f,q as k}from"./index.66d83ac9.js";import{i as r}from"./image.35602112.js";const $={class:"home"},b=s("div",null,[s("img",{class:"home-bg11",src:"https://raw.githubusercontent.com/superBoyXdy/gmximage/master/bg1.gif",alt:""})],-1),S={class:"search-page-title"},w={class:"search-1"},O=s("p",null,"SEARCH",-1),I={class:"search-content"},V=["src","onClick"],B=s("img",{src:"https://raw.githubusercontent.com/superBoyXdy/gmximage/master/numberimg.png",class:"search-image-bg",alt:""},null,-1),L=s("div",{class:"bottom-text"},[s("div",{class:"text-line-1"},"ROYAL COLLEGE OF ART"),s("div",null,"MINGXUAN GUO")],-1),U=x({__name:"search",setup(C){n(!1),n([[1,2,3],[4,5,6,7,8],[9,10]]);const o=n(),u=n(),d=n();n(r);const a=n([]);n([]);const p=l=>{let e=[];l==1&&(r.map(t=>{let i=t.imagekey.indexOf("-"),g=t.imagekey.indexOf(o.value.toString());g<i&&g>-1&&e.push(t)}),a.value=e,console.log(a.value)),l==2&&(r.map(t=>{t.imagekey.indexOf(`${o.value.toString()}-${u.value.toString()}`)>-1&&e.push(t)}),a.value=e,console.log(e)),l==3&&(r.map(t=>{t.imagekey.indexOf(`${o.value.toString()}-${u.value.toString()}-${d.value.toString()}`)>-1&&e.push(t)}),a.value=e,console.log(e))},_=l=>{router.push("/sebastia"),store.selectVideo={...l}};return(l,e)=>(m(),v("div",$,[b,s("div",S,[s("div",w,[O,c(s("input",{type:"text",class:"input-line","onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),onKeyup:e[1]||(e[1]=h(t=>p(1),["enter"]))},null,544),[[y,o.value]])]),s("div",null,[c(s("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>u.value=t),onKeyup:e[3]||(e[3]=h(t=>p(2),["enter"]))},null,544),[[y,u.value]])]),s("div",null,[c(s("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>d.value=t),onKeyup:e[5]||(e[5]=h(t=>p(3),["enter"]))},null,544),[[y,d.value]])])]),s("div",null,[s("div",I,[(m(!0),v(f,null,k(a.value,(t,i)=>(m(),v("img",{src:`https://raw.githubusercontent.com/superBoyXdy/gmximage/master/${t.imagekey}.png`,onClick:g=>_(t),alt:"",key:i},null,8,V))),128))])]),B,L]))}});export{U as default};

let l=[],h=(o,a)=>{let n=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},l:a||0,lc:0,listen(i,u){return t.lc=n.push(i,u||t.l)/2,()=>{let f=n.indexOf(i);~f&&(n.splice(f,2),--t.lc||t.off())}},notify(i,u){let f=!l.length;for(let e=0;e<n.length;e+=2)l.push(n[e],n[e+1],t.value,i,u);if(f){for(let e=0;e<l.length;e+=5){let r;for(let s=e+1;!r&&(s+=5)<l.length;)l[s]<l[e+1]&&(r=l.push(l[e],l[e+1],l[e+2],l[e+3],l[e+4]));r||l[e](l[e+2],l[e+3],l[e+4])}l.length=0}},off(){},set(i){let u=t.value;u!==i&&(t.value=i,t.notify(u))},subscribe(i,u){let f=t.listen(i,u);return i(t.value),f},value:o};return t};export{h as a};

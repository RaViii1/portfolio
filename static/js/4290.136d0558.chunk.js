"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4290],{4290:(i,n,t)=>{t.d(n,{LinkInstance:()=>s});var e=t(4409);function o(i,n){const t=((o=i.map((i=>i.id))).sort(((i,n)=>i-n)),o.join("_"));var o;let s=n.get(t);return void 0===s&&(s=(0,e.G0)(),n.set(t,s)),s}class s{constructor(i){this.container=i,this._drawLinkLine=(i,n)=>{const t=i.options.links;if(null===t||void 0===t||!t.enable)return;const o=this.container,s=o.actualOptions,l=n.destination,a=i.getPosition(),r=l.getPosition();let c=n.opacity;o.canvas.draw((n=>{var d,k,u;let h;const p=null===(d=i.options.twinkle)||void 0===d?void 0:d.lines;if(null!==p&&void 0!==p&&p.enable){const i=p.frequency,n=(0,e.BN)(p.color);(0,e.G0)()<i&&n&&(h=n,c=(0,e.VG)(p.opacity))}if(!h){const n=void 0!==t.id?o.particles.linksColors.get(t.id):o.particles.linksColor;h=(0,e._h)(i,l,n)}if(!h)return;const f=null!==(k=i.retina.linksWidth)&&void 0!==k?k:0,y=null!==(u=i.retina.linksDistance)&&void 0!==u?u:0,{backgroundMask:g}=s;!function(i){let n=!1;const{begin:t,end:o,maxDistance:s,context:l,canvasSize:a,width:r,backgroundMask:c,colorLine:d,opacity:k,links:u}=i;if((0,e.Yf)(t,o)<=s)(0,e.V6)(l,t,o),n=!0;else if(u.warp){let i,r;const c={x:o.x-a.width,y:o.y},d=(0,e.vr)(t,c);if(d.distance<=s){const n=t.y-d.dy/d.dx*t.x;i={x:0,y:n},r={x:a.width,y:n}}else{const n={x:o.x,y:o.y-a.height},l=(0,e.vr)(t,n);if(l.distance<=s){const n=-(t.y-l.dy/l.dx*t.x)/(l.dy/l.dx);i={x:n,y:0},r={x:n,y:a.height}}else{const n={x:o.x-a.width,y:o.y-a.height},l=(0,e.vr)(t,n);if(l.distance<=s){const n=t.y-l.dy/l.dx*t.x;i={x:-n/(l.dy/l.dx),y:n},r={x:i.x+a.width,y:i.y+a.height}}}}i&&r&&((0,e.V6)(l,t,i),(0,e.V6)(l,o,r),n=!0)}if(!n)return;l.lineWidth=r,c.enable&&(l.globalCompositeOperation=c.composite),l.strokeStyle=(0,e.xx)(d,k);const{shadow:h}=u;if(h.enable){const i=(0,e.BN)(h.color);i&&(l.shadowBlur=h.blur,l.shadowColor=(0,e.xx)(i))}l.stroke()}({context:n,width:f,begin:a,end:r,maxDistance:y,canvasSize:o.canvas.size,links:t,backgroundMask:g,colorLine:h,opacity:c})}))},this._drawLinkTriangle=(i,n,t)=>{var o;const s=i.options.links;if(null===s||void 0===s||!s.enable)return;const l=s.triangles;if(!l.enable)return;const a=this.container,r=a.actualOptions,c=n.destination,d=t.destination,k=null!==(o=l.opacity)&&void 0!==o?o:.5*(n.opacity+t.opacity);k<=0||a.canvas.draw((n=>{var t;const o=i.getPosition(),u=c.getPosition(),h=d.getPosition(),p=null!==(t=i.retina.linksDistance)&&void 0!==t?t:0;if((0,e.Yf)(o,u)>p||(0,e.Yf)(h,u)>p||(0,e.Yf)(h,o)>p)return;let f=(0,e.BN)(l.color);if(!f){const n=void 0!==s.id?a.particles.linksColors.get(s.id):a.particles.linksColor;f=(0,e._h)(i,c,n)}f&&function(i){const{context:n,pos1:t,pos2:o,pos3:s,backgroundMask:l,colorTriangle:a,opacityTriangle:r}=i;!function(i,n,t,e){i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.lineTo(e.x,e.y),i.closePath()}(n,t,o,s),l.enable&&(n.globalCompositeOperation=l.composite),n.fillStyle=(0,e.xx)(a,r),n.fill()}({context:n,pos1:o,pos2:u,pos3:h,backgroundMask:r.backgroundMask,colorTriangle:f,opacityTriangle:k})}))},this._drawTriangles=(i,n,t,e)=>{var o,s,l;const a=t.destination;if(null===(o=i.links)||void 0===o||!o.triangles.enable||null===(s=a.options.links)||void 0===s||!s.triangles.enable)return;const r=null===(l=a.links)||void 0===l?void 0:l.filter((i=>{const n=this._getLinkFrequency(a,i.destination);return a.options.links&&n<=a.options.links.frequency&&e.findIndex((n=>n.destination===i.destination))>=0}));if(null!==r&&void 0!==r&&r.length)for(const c of r){const e=c.destination;this._getTriangleFrequency(n,a,e)>i.links.triangles.frequency||this._drawLinkTriangle(n,t,c)}},this._getLinkFrequency=(i,n)=>o([i,n],this._freqs.links),this._getTriangleFrequency=(i,n,t)=>o([i,n,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}drawParticle(i,n){const{links:t,options:e}=n;if(null===t||void 0===t||!t.length)return;const o=t.filter((i=>e.links&&(e.links.frequency>=1||this._getLinkFrequency(n,i.destination)<=e.links.frequency)));for(const l of o){var s;this._drawTriangles(e,n,l,o),l.opacity>0&&(null!==(s=n.retina.linksWidth)&&void 0!==s?s:0)>0&&this._drawLinkLine(n,l)}}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(i){if(i.links=[],!i.options.links)return;const n=this.container.retina.pixelRatio,{retina:t}=i,{distance:e,width:o}=i.options.links;t.linksDistance=e*n,t.linksWidth=o*n}particleDestroyed(i){i.links=[]}}}}]);
//# sourceMappingURL=4290.136d0558.chunk.js.map
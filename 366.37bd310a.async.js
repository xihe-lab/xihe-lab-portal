"use strict";(self.webpackChunkxihe_lab_website=self.webpackChunkxihe_lab_website||[]).push([[366],{32366:function(se,P,h){h.r(P),h.d(P,{mountOrrery:function(){return B}});var I=h(91338),e=h(68085),l=h(61769),W="#D4AF37",S="#F0D878",C="#44C1E4",k="#87D3E8",N="#109FC6",_=14,T=6;function B(r,o,a,t){var s;try{s=new I.JeP({canvas:r,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(u){return t(),{dispose:function(){},setActive:function(){}}}s.setPixelRatio(Math.min(a.dpr,2)),s.setClearColor(0,0);var c=new e.Z58,i=new e.ubm(45,1,.1,100);i.position.set(0,0,10);var v=new e.YJl;c.add(v);var d=new e.eaF(new e.tcD(.5,48),new e.V9B({color:W}));v.add(d);var b={uTime:{value:0}},G=new e.eaF(new e.rKP(.5,1,72),new e.BKk({uniforms:b,vertexShader:`
        varying vec2 vPos;
        void main() {
          vPos = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vPos;
        void main() {
          float r = length(vPos);
          if (r < 0.5 || r > 1.0) discard;
          float a = atan(vPos.y, vPos.x);
          float grad = mix(0.72, 1.0, (r - 0.5) / 0.5);
          vec3 base = mix(vec3(0.722, 0.549, 0.043), vec3(0.831, 0.686, 0.216), (r - 0.5) / 0.5);
          vec3 col = base * grad;
          float spin = a + uTime * 0.14;
          float seg = 12.0;
          float tri = abs(fract(spin / 6.28318 * seg) - 0.5) * 2.0;
          float spoke = (1.0 - smoothstep(0.62, 0.95, tri)) * smoothstep(0.66, 0.82, r);
          col += vec3(0.95, 0.84, 0.5) * spoke * 0.5;
          float ringAlpha = smoothstep(0.5, 0.54, r) * (1.0 - smoothstep(0.97, 1.0, r));
          gl_FragColor = vec4(col, ringAlpha);
        }
      `,transparent:!0,side:e.$EB,depthWrite:!1}));v.add(G);var Y=new e.kxk(new e.RoJ({map:(0,l.HY)(S,.5,.22,.5),blending:e.EZo,transparent:!0,depthWrite:!1,opacity:.55}));Y.scale.set(4.6,4.6,1),v.add(Y);var z=new e.YJl;c.add(z);for(var H=[],x=0;x<_;x++){var K=1.35+x*.18;H.push({a:K,b:K*(.84+x%3*.04),tilt:(x-(_-1)/2)*.055,speed:.11/Math.sqrt(K),angle:x*Math.PI*2/_}),z.add(m(H[x]))}for(var M=new e.ZLX(new e.Gu$(.085,12,8),new e.V9B({color:C}),_),q=new e.Q1f,O=0;O<_;O++)q.set(O%5===2?k:C),M.setColorAt(O,q);M.instanceColor.needsUpdate=!0,z.add(M);var F=(0,l.en)(a.particles);c.add(F);var L=new e.YJl;c.add(L);for(var X={uTime:{value:0}},ee=p(X),J=0;J<T;J++){var ve=new e.eaF(w(J),ee);L.add(ve)}var E=0,Z=!0,$=!1,le=0,U=0,j=performance.now(),ae=new e.kn4,R=new e.Pq0,D={x:0,y:0},y={x:0,y:0};a.parallax&&window.addEventListener("mousemove",te,{passive:!0});function te(u){D.x=(u.clientX/window.innerWidth-.5)*2,D.y=(u.clientY/window.innerHeight-.5)*2}function Q(u){if(!($||!Z)){var n=Math.min((u-j)/1e3,.1);if(j=u,le++>l.sp){if(n>.06&&++U>=l.AS){t();return}n<=.06&&(U=Math.max(0,U-1))}b.uTime.value+=n,v.rotation.y+=.06*n;for(var g=0;g<_;g++){var f=H[g];f.angle+=f.speed*n;var V=f.a*Math.cos(f.angle),oe=f.b*Math.sin(f.angle);R.set(V,oe*Math.sin(f.tilt),oe*Math.cos(f.tilt)),ae.makeTranslation(R.x,R.y,R.z),M.setMatrixAt(g,ae)}M.instanceMatrix.needsUpdate=!0,F.rotation.y+=.01*n,X.uTime.value+=n,L.rotation.z+=.035*n;var ie=u*5e-5,ce=a.parallax?y.x:0,de=a.parallax?y.y:0;y.x+=(D.x-y.x)*.06,y.y+=(D.y-y.y)*.06,i.position.x=Math.sin(ie)*.18+ce*.35,i.position.y=Math.cos(ie)*.12-de*.25,i.lookAt(0,0,0),s.render(c,i),E=requestAnimationFrame(Q)}}E=requestAnimationFrame(Q);function ne(){var u=o.clientWidth||r.clientWidth,n=o.clientHeight||r.clientHeight;!u||!n||(s.setSize(u,n,!1),i.aspect=u/n,i.updateProjectionMatrix())}ne();var A=typeof ResizeObserver!="undefined"?new ResizeObserver(ne):null;A==null||A.observe(o);var re=function(n){n.preventDefault(),t()};return r.addEventListener("webglcontextlost",re),{dispose:function(){var n,g;$=!0,cancelAnimationFrame(E),A==null||A.disconnect(),r.removeEventListener("webglcontextlost",re),a.parallax&&window.removeEventListener("mousemove",te),d.geometry.dispose(),d.material.dispose(),G.geometry.dispose(),G.material.dispose();var f=Y.material;(n=f.map)===null||n===void 0||n.dispose(),f.dispose(),M.geometry.dispose(),M.material.dispose(),(g=M.instanceColor)===null||g===void 0||g.dispose(),F.geometry.dispose(),F.material.dispose(),L.children.forEach(function(V){V.geometry.dispose()}),ee.dispose(),s.dispose()},setActive:function(n){$||n!==Z&&(Z=n,n?(j=performance.now(),U=0,E=requestAnimationFrame(Q)):cancelAnimationFrame(E))}}}function m(r){for(var o=96,a=new Float32Array(o*3),t=0;t<o;t++){var s=t/o*Math.PI*2,c=r.a*Math.cos(s),i=r.b*Math.sin(s);a[t*3]=c,a[t*3+1]=i*Math.sin(r.tilt),a[t*3+2]=i*Math.cos(r.tilt)}var v=new e.LoY;v.setAttribute("position",new e.qtW(a,3));var d=new e.mrM({color:N,transparent:!0,opacity:.32});return new e.N1A(v,d)}function p(r){return new e.BKk({uniforms:r,transparent:!0,blending:e.EZo,depthWrite:!1,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vec3 gold1 = vec3(0.831, 0.686, 0.216);
        vec3 gold2 = vec3(0.941, 0.847, 0.471);
        vec3 col = mix(gold1, gold2, smoothstep(0.0, 1.0, vUv.y));
        float flow = 0.5 + 0.5 * sin(vUv.y * 14.0 - uTime * 2.2);
        col += vec3(1.0, 0.92, 0.62) * flow * 0.45;
        float a = 0.8 * smoothstep(0.0, 0.05, vUv.y) * (1.0 - smoothstep(0.95, 1.0, vUv.y));
        gl_FragColor = vec4(col, a);
      }
    `})}function w(r){for(var o=.88+r*.055,a=r*Math.PI*2/T,t=.07+r%3*.02,s=1.4+r%2*.3,c=48,i=[],v=0;v<=c;v++){var d=v/c*Math.PI*2;i.push(new e.Pq0(o*Math.cos(d+a),o*Math.sin(d+a)*.9,t*Math.sin(d*s+a)))}return new e.j6(new e.B6O(i),128,.03,4)}},61769:function(se,P,h){h.d(P,{AS:function(){return W},HY:function(){return _},en:function(){return N},p_:function(){return T},sp:function(){return S}});var I=h(55472),e=h.n(I),l=h(68085),W=3,S=90,C="#44C1E4",k="#E9EDF4";function N(m){for(var p=new Float32Array(m*3),w=new Float32Array(m*3),r=new l.Q1f(k),o=new l.Q1f(C),a=new l.Q1f,t=0;t<m;t++){var s=4+Math.pow(Math.random(),.7)*9,c=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1);p[t*3]=s*Math.sin(i)*Math.cos(c),p[t*3+1]=s*Math.sin(i)*Math.sin(c),p[t*3+2]=s*Math.cos(i),a.copy(Math.random()<.78?r:o),a.multiplyScalar(.45+Math.random()*.55),w[t*3]=a.r,w[t*3+1]=a.g,w[t*3+2]=a.b}var v=new l.LoY;v.setAttribute("position",new l.qtW(p,3)),v.setAttribute("color",new l.qtW(w,3));var d=new l.BH$({size:.055,map:_("#FFFFFF",.55,.55,1),vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,blending:l.EZo,sizeAttenuation:!0});return new l.ONl(v,d)}function _(m,p,w,r){var o=128,a=document.createElement("canvas");a.width=o,a.height=o;var t=a.getContext("2d"),s=t.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2),c=B(m),i=e()(c,3),v=i[0],d=i[1],b=i[2];return s.addColorStop(0,"rgba(".concat(v,",").concat(d,",").concat(b,",").concat(r,")")),s.addColorStop(p,"rgba(".concat(v,",").concat(d,",").concat(b,",").concat(r*w,")")),s.addColorStop(1,"rgba(".concat(v,",").concat(d,",").concat(b,",0)")),t.fillStyle=s,t.fillRect(0,0,o,o),new l.GOR(a)}function T(m){return 1-Math.pow(1-m,3)}function B(m){var p=Number.parseInt(m.slice(1),16);return[p>>16&255,p>>8&255,p&255]}}}]);

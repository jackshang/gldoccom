(function(a){var f=a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype,b;if(b=a.Blob)try{b=Boolean(new Blob)}catch(m){b=!1}var h=b;if(b=h)if(b=a.Uint8Array)try{b=(new Blob([new Uint8Array(100)])).size===100}catch(n){b=!1}var k=b,i=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,l=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,g=(h||i)&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&function(c){var e,a,d,b;e=c.match(l);if(!e)throw Error("invalid data URI");a=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII");
d=!!e[4];c=c.slice(e[0].length);c=d?atob(c):decodeURIComponent(c);d=new ArrayBuffer(c.length);e=new Uint8Array(d);for(b=0;b<c.length;b+=1)e[b]=c.charCodeAt(b);if(h)return new Blob([k?e:d],{type:a});c=new i;c.append(d);return c.getBlob(a)};if(a.HTMLCanvasElement&&!f.toBlob)if(f.mozGetAsFile)f.toBlob=function(a,b,j){var d=this;setTimeout(function(){j&&f.toDataURL&&g?a(g(d.toDataURL(b,j))):a(d.mozGetAsFile("blob",b))})};else if(f.toDataURL&&g)f.toBlob=function(a,b,f){var d=this;setTimeout(function(){a(g(d.toDataURL(b,
f)))})};typeof define==="function"&&define.amd?define(function(){return g}):typeof module==="object"&&module.exports?module.exports=g:a.dataURLtoBlob=g})(window);
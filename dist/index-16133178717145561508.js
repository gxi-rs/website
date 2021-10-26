let wasm;const heap=new Array(32).fill(void 0);function getObject(e){return heap[e]}heap.push(void 0,null,!0,!1);let heap_next=heap.length;function dropObject(e){e<36||(heap[e]=heap_next,heap_next=e)}function takeObject(e){var t=getObject(e);return dropObject(e),t}function addHeapObject(e){heap_next===heap.length&&heap.push(heap.length+1);var t=heap_next;return heap_next=heap[t],heap[t]=e,t}function debugString(n){var e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){var t=n.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==e){var r=n.name;return"string"==typeof r&&0<r.length?`Function(${r})`:"Function"}if(Array.isArray(n)){var a=n.length;let t="[";0<a&&(t+=debugString(n[0]));for(let e=1;e<a;e++)t+=", "+debugString(n[e]);return t+="]",t}r=/\[object ([^\]]+)\]/.exec(toString.call(n));let c;if(!(1<r.length))return toString.call(n);if(c=r[1],"Object"==c)try{return"Object("+JSON.stringify(n)+")"}catch(e){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:c}let WASM_VECTOR_LEN=0,cachegetUint8Memory0=null;function getUint8Memory0(){return null!==cachegetUint8Memory0&&cachegetUint8Memory0.buffer===wasm.memory.buffer||(cachegetUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachegetUint8Memory0}let cachedTextEncoder=new TextEncoder("utf-8");const encodeString="function"==typeof cachedTextEncoder.encodeInto?function(e,t){return cachedTextEncoder.encodeInto(e,t)}:function(e,t){var n=cachedTextEncoder.encode(e);return t.set(n),{read:e.length,written:n.length}};function passStringToWasm0(e,t,n){if(void 0===n){var r=cachedTextEncoder.encode(e);const c=t(r.length);return getUint8Memory0().subarray(c,c+r.length).set(r),WASM_VECTOR_LEN=r.length,c}let a=e.length,c=t(a);const o=getUint8Memory0();let i=0;for(;i<a;i++){var b=e.charCodeAt(i);if(127<b)break;o[c+i]=b}return i!==a&&(0!==i&&(e=e.slice(i)),c=n(c,a,a=i+3*e.length),n=getUint8Memory0().subarray(c+i,c+a),n=encodeString(e,n),i+=n.written),WASM_VECTOR_LEN=i,c}let cachegetInt32Memory0=null;function getInt32Memory0(){return null!==cachegetInt32Memory0&&cachegetInt32Memory0.buffer===wasm.memory.buffer||(cachegetInt32Memory0=new Int32Array(wasm.memory.buffer)),cachegetInt32Memory0}let cachedTextDecoder=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function getStringFromWasm0(e,t){return cachedTextDecoder.decode(getUint8Memory0().subarray(e,e+t))}function handleError(e,t){try{return e.apply(this,t)}catch(e){wasm.__wbindgen_exn_store(addHeapObject(e))}}function isLikeNone(e){return null==e}async function load(t,e){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return WebAssembly.instantiateStreaming(t,e)}catch(e){if("application/wasm"==t.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}var n=await t.arrayBuffer();return WebAssembly.instantiate(n,e)}e=await WebAssembly.instantiate(t,e);return e instanceof WebAssembly.Instance?{instance:e,module:t}:e}async function init(e){void 0===e&&(e=new URL("index-16133178717145561508.wasm_bg.wasm",import.meta.url));const t={wbg:{}};t.wbg.__wbg_appendChild_d318db34c4559916=function(){return handleError(function(e,t){return addHeapObject(getObject(e).appendChild(getObject(t)))},arguments)},t.wbg.__wbindgen_object_drop_ref=function(e){takeObject(e)},t.wbg.__wbindgen_object_clone_ref=function(e){return addHeapObject(getObject(e))},t.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec=function(e){return getObject(e)instanceof Window},t.wbg.__wbg_document_1c64944725c0d81d=function(e){e=getObject(e).document;return isLikeNone(e)?0:addHeapObject(e)},t.wbg.__wbg_body_78ae4fd43b446013=function(e){e=getObject(e).body;return isLikeNone(e)?0:addHeapObject(e)},t.wbg.__wbg_head_d205ec9bd59f31a7=function(e){e=getObject(e).head;return isLikeNone(e)?0:addHeapObject(e)},t.wbg.__wbg_settextContent_799ebbf96e16265d=function(e,t,n){getObject(e).textContent=0===t?void 0:getStringFromWasm0(t,n)},t.wbg.__wbg_setAttribute_1b533bf07966de55=function(){return handleError(function(e,t,n,r,a){getObject(e).setAttribute(getStringFromWasm0(t,n),getStringFromWasm0(r,a))},arguments)},t.wbg.__wbg_createElement_86c152812a141a62=function(){return handleError(function(e,t,n){return addHeapObject(getObject(e).createElement(getStringFromWasm0(t,n)))},arguments)},t.wbg.__wbg_createTextNode_365db3bc3d0523ab=function(e,t,n){return addHeapObject(getObject(e).createTextNode(getStringFromWasm0(t,n)))},t.wbg.__wbg_self_c6fbdfc2918d5e58=function(){return handleError(function(){return addHeapObject(self.self)},arguments)},t.wbg.__wbg_window_baec038b5ab35c54=function(){return handleError(function(){return addHeapObject(window.window)},arguments)},t.wbg.__wbg_globalThis_3f735a5746d41fbd=function(){return handleError(function(){return addHeapObject(globalThis.globalThis)},arguments)},t.wbg.__wbg_global_1bc0b39582740e95=function(){return handleError(function(){return addHeapObject(global.global)},arguments)},t.wbg.__wbindgen_is_undefined=function(e){return void 0===getObject(e)},t.wbg.__wbg_newnoargs_be86524d73f67598=function(e,t){return addHeapObject(new Function(getStringFromWasm0(e,t)))},t.wbg.__wbg_call_888d259a5fefc347=function(){return handleError(function(e,t){return addHeapObject(getObject(e).call(getObject(t)))},arguments)},t.wbg.__wbindgen_debug_string=function(e,t){var n=passStringToWasm0(debugString(getObject(t)),wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),t=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=t,getInt32Memory0()[e/4+0]=n},t.wbg.__wbindgen_throw=function(e,t){throw new Error(getStringFromWasm0(e,t))};var{instance:n,module:e}=await load(await(e="string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL?fetch(e):e),t);return wasm=n.exports,init.__wbindgen_wasm_module=e,wasm.__wbindgen_start(),wasm}cachedTextDecoder.decode();export default init;
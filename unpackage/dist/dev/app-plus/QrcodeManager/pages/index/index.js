
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"container { width: 40%; height: 100%; margin: 30%; }\n.",[1],"backspace { height: ",[0,80],"; }\n.",[1],"flex-box { width: ",[0,300],"; height: ",[0,300],"; overflow: hidden; }\n.",[1],"flex-box-text { width: 100%; height: 100%; text-align: center; }\n.",[1],"flex-box wx-image { width: 100%; height: 100%; }\n",],undefined,{path:"./pages/index/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      
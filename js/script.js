function runCode(){
    const codeHtml = document.getElementById('for-html').value;
    const codeCss = document.getElementById('for-css').value;
    const codeJS = document.getElementById('for-js').value;
    const codeResult = document.getElementById('result-code');

    codeResult.contentDocument.body.innerHTML = codeHtml+"<style>"+codeCss+"</style>";
    codeResult.contentWindow.eval(codeJS);
    
}
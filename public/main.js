let n = 1;
getPage.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get',`/page${n+1}`);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    }
    request.send();
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/5.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log(typeof request.response);
            console.log(request.response);
            const bool = JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    }
    request.send();
}

getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/3.html');
    request.onload = ()=>{
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);
    };
    request.onerror = ()=>{};
    request.send();
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/2.js');
    request.onload = ()=>{
        //创建 script 标签
        const script = document.createElement('script');
        //填写 script 内容
        script.innerHTML = request.response;
        //插到 body 里
        document.body.appendChild(script);
    };
    request.onerror = ()=>{};
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get','/style.css'); // readyState = 1
    request.onreadystatechange = ()=>{
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if(request.readyState === 4){
            if(request.status>=200 && request.status<300){
                // 创建 style 标签
                const style = document.createElement('style');
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到 head 里面
                document.head.appendChild(style);
            }else{
                alert('加载css失败');
            }
        }
    }
    request.send(); // readyState = 2
}


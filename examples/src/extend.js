var doRequest = function( url, content ){
    const proxy = {};
    let success = () => '',
        fail = () => '',
        end = () => '';
    proxy.success = cb => {
        success = cb || success;
        return proxy;
    }
    proxy.fail = cb => {
        fail = cb || fail;
        return proxy;
    }
    proxy.end = cb => {
        end = cb || end;
        return proxy;
    }

    fetch(url, content).then(response => response.json()).then(response => {
        if (response.error === 0)
            success(response.data || "");
        else
            fail(response.message)
        end(response)
    }).catch(err => {
        console.log(`${content.method}${url}失败`, err);
        fail('服务器繁忙，请稍后重试！');
        end(err)
    })
    return proxy;
}
window.doGet = function(url, params) {
    url += `?user_name=${window.user_name}&`;
    if(params){
        for( var key in params){
            params[key] = typeof params[key] === 'object' ? JSON.stringify( params[key]) : params[key];
            url += `${key}=${params[key]}&`
        }
    }
    return doRequest( url, { method: 'GET' })
}


window.doPost = function(url, params) {
    let param = params;
    param.user_name = window.user_name;
    if (typeof params !== 'string')
        param = JSON.stringify(params);
    param = encodeURIComponent(param);
    const content = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Accept': 'application/json, text/plain, */*'
        },
        body: "data=" + param
    };
    return doRequest(url, content)
}

window.doPut = function(url, params) {
    let param = params;
    param.user_name = window.user_name;
    if (typeof params !== 'string')
        param = JSON.stringify(params);
    param = encodeURIComponent(param);
    const content = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Accept': 'application/json, text/plain, */*'
        },
        body: "data=" + param
    };
    return doRequest(url, content)
}
window.doDelete = function(url, params) {
    let param = params;
    param.user_name = window.user_name;
    if (typeof params !== 'string')
        param = JSON.stringify(params);
    param = encodeURIComponent(param);
    const content = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Accept': 'application/json, text/plain, */*'
        },
        body: "data=" + param
    };
    return doRequest(url, content)
}


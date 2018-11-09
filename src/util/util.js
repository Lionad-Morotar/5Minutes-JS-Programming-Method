let formatDate = (fmt, date) => {
    let nowDate = date || (new Date())
    let o = {
        "M+": nowDate.getMonth() + 1,
        "d+": nowDate.getDate(),
        "h+": nowDate.getHours(),
        "m+": nowDate.getMinutes(),
        "s+": nowDate.getSeconds(),
        "q+": Math.floor((nowDate.getMonth() + 3) / 3),
        "S": nowDate.getMilliseconds()
    }

    // 格式化年份
    if (/(y+)/.test(fmt)) {
        fmt = fmt
            .replace(RegExp.$1, (nowDate.getFullYear() + '')
            .substr(4 - RegExp.$1.length))
    }
    // 格式化其它参数
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt
                .replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k])
                .substr(("" + o[k]).length)));
        }
    }
        
    return fmt
}

export default {
    formatDate,
}
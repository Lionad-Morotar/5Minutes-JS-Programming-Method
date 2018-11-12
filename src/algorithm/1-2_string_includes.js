let stringIncludes = (str, str2) => {
    let mapStore = {},
        res = true
    // console.log(str, str2, str.split(''), str2.split(''))

    str.split('').forEach(x => { mapStore[x] = 1 })
    for (let i = 0, target = str2.split(''); i<target.length; i++) {
        if (!mapStore[target[i]]) {
            res = false
        }
    }

    return str2.length && res
}

let test = () => {
    return '12345,345 -> ' + stringIncludes('12345', '345')
}
let info = {
    input: 'stringIncludes(String1, String2)',
    output: 'Boolean',
    description: `给定两个分别由字母组成的字符串A和字符串B，字符串B的长度比字符串A短。请问，如何最快地判断字符串B中所有字母是否都在字符串A里？`,
    limit: `空间复杂度为O(1)，时间复杂度还是O(n + m)。`,
}

export default {
    stringIncludes,
    test,
    info,
}

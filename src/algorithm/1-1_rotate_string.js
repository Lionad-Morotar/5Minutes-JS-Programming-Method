let rotateStringSection = (str, left, right) => {
    let leftVal = str.slice(0, left - 1 < 0 ? 0 : left - 1),
        rightVal = str.slice(right, str.length),
        middVal = str
            .slice(left - 1 < 0 ? 0 : left - 1, right)
            .split('')
            .reverse()
            .join('')

    // console.log(leftVal, middVal, rightVal)

    return leftVal + middVal + rightVal
}

let rotateAllString = str => {
    return rotateStringSection(str, 0, str.length)
}

let rotateString = (str, index) => {
    str = rotateStringSection(str, 0, index)
    str = rotateStringSection(str, index + 1, str.length)
    str = rotateAllString(str)

    return str
}

let test = () => {
    return rotateString('12345', 2)
}
let info = {
    input: 'rotateString(STRING)',
    output: 'STRING',
    description: `给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，使得原字符串变成字符串“cdefab”。`,
    limit: `请写一个函数完成此功能，要求对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。`,
}

export default {
    rotateString,
    test,
    info,
}

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

export default {
    rotateString,
    test,
}

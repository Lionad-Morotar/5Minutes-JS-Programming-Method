let anomynous = {
    padding (str) {
        return '$#' + str.split('').join('#') + '#'
    },
    washPI (pi) {
        return pi
            .filter((x, i) => i > 1 && !(i % 2))
            .map(x => x/2)
            .join('')
    }
}

/** manacher algorithm */

let LongestPalindrome = (str) => {
    let si = anomynous.padding(str).split(''),
        pi = [0],
        id = 0,
        mx = 0

    console.log(si)

    si.forEach((handle, i) => {
        
        // start calc from 1st
        if (i === 0) {
            console.log(`handle: ${handle}, i: ${i}, pi: ${pi[i]}, id: ${id}, mx: ${mx}`)
            return null
        }

        // calc pi[]
        pi[i] = mx > i ? Math.min(pi[2 * id - i], mx - i) : 1
        while (si[i + pi[i]] === si[i - pi[i]]) {
            pi[i]++
        }

        // calc mx
        if (i + pi[i] > mx) {
            mx = i + pi[i]
            id = i
        }

        console.log(`handle: ${handle}, i: ${i}, pi: ${pi[i]}, id: ${id}, mx: ${mx}`)

    })

    return anomynous.washPI(pi)
}

let test = () => {
    let testVal = '012343213431'
    return testVal + ' -> ' + LongestPalindrome(testVal)
}
let info = {
    description: `给定一个字符串，求它的最长回文子串的长度。`,
    limit: `时间复杂度O(n)。`,
}

export default {
    LongestPalindrome,
    test,
    info,
}

const pattern_number = /[0-9]+/
const pattern_letter = /[A-Za-z]+/
const pattern_latter_up = /[A-Z]+/
const pattern_latter_low = /[a-z]+/
const pattern_common_char = /[A-Za-z0-9]+/

export function upperFirst(word) {
  return word.at(0).toUpperCase() + word.slice(1)
}

export function lowerFirst(word) {
  return word.at(0).toLowerCase() + word.slice(1)
}

function cutVariateToArray(word) {
  const wordList = []
  let lastWord = ''
  let lastCharType = 0 // 1 小写数字   2 大写   3 其他

  if (!word)
    return []

  for (let i = 0; i <= word.length; i++) {
    const char = word.at(i)
    // 第一个只能是字母
    if (wordList.length === 0 && lastWord === '' && !pattern_letter.test(char))
      continue

    // 正常
    if (pattern_number.test(char) || pattern_latter_low.test(char)) {
      lastWord = lastWord.concat(char)
      lastCharType = 1
    }
    // 大写
    if (pattern_latter_up.test(char)) {
      if (lastCharType === 2) {
        lastWord = lastWord.concat(char)
      }
      else {
        wordList.push(lastWord)
        lastWord = char
      }
      lastCharType = 2
    }
    // 其他
    if (!pattern_common_char.test(char)) {
      wordList.push(lastWord)
      lastWord = ''
      lastCharType = 3
    }
    // 最后一个
    if (i === word.length - 1) {
      wordList.push(lastWord)
      lastWord = ''
    }
  }
  return wordList.filter(i => i.length > 0).map(i => i.toLowerCase())
}

export function variateArrayTo_aa_bb(word) {
  return cutVariateToArray(word).join('_')
}

export function variateArrayTo_AA_BB(word) {
  return cutVariateToArray(word)
    .map(i => i.toUpperCase())
    .join('_')
}

export function variateArrayTo_AbBb(word) {
  return cutVariateToArray(word)
    .map(i => upperFirst(i))
    .join('')
}

export function variateArrayTo_abBb(word) {
  return cutVariateToArray(word)
    .map((i, index) => {
      if (index !== 0)
        return upperFirst(i)
      else
        return i
    })
    .join('')
}
export function variateArrayTo_aa0bb(word) {
  return cutVariateToArray(word).join('-')
}

export const concatStart = (i, c = '') => (i ? c.concat(i) : c)

export const concatEnd = (i, c = '') => (i ? i.concat(c) : c)

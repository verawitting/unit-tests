export const hackerSpeak = (words) => {

  const formattedWords = words.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0").replace(/s/gi, "5")
  return formattedWords
}

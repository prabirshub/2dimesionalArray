function higestScorer(arr) {
  let name = arr[0][0]
  let score = arr[0][1]
  for (let i = 0; i < arr.length; i++) {
    if (score < arr[i][1]) {
      score = arr[i][1]
      name = arr[i][0]
    }
  }
  return name
}

const studentInfo = [
  ['Prashanto', 92],
  ['Rajiv', 78],
  ['Vivek', 91],
  ['Amrit', 97],
]

const beststudent = higestScorer(studentInfo)

console.log(beststudent)

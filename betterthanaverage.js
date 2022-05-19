// This function indicates whether you scored higher than your class average, given everybody's score in an array of integer and yours as an integer!
function betterThanAverage(classPoints, yourPoints) {
    const classAverage = classPoints.reduce((sum, n) => sum + n, 0) / classPoints.length
    return yourPoints > classAverage
  }  
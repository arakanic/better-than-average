// Given everybody else's scores (in an array) and your score (as integers), this function indicates whether you scored higher than your class average!
function betterThanAverage(classPoints, yourPoints) {
    const classAverage = classPoints.reduce((sum, n) => sum + n, 0) / classPoints.length
    return yourPoints > classAverage
  }  

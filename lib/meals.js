'use strict';

const mealObj = {
  // your code goes here
    name: 'Nari',
    bornOn: '1993-07-10',
    calorieTarget: 1000,
    meals: [
      {
        title: 'breakfast',
        date: '2017-03-25',
        description: 'oatmeal',
        calories: 250
      },
      {
        title: 'lunch',
        date: '2017-03-24',
        description: 'sandwich',
        calories: 340
      },
      {
        title: 'dinner',
        date: '2017-03-24',
        description: 'spagetti with meatballs',
        calories: 500
      }
    ],
  caloriesEatenOn: function (inputDate) {
    const meals = this.meals
    let dateCalories = 0
    for (let i = 0; i < meals.length; i++) {
      if (inputDate === meals[i].date) {
        dateCalories += meals[i].calories
      } else {
        dateCalories = dateCalories
      }
    }
    return dateCalories
  },
  avgDailyCalories: function () {
    const meals = this.meals
    let totalCalories = 0
    // Total Calories
    for (let i=0; i < meals.length; i++) {
      totalCalories += meals[i].calories
    }

    // Total Days
    let dayCount = 0
    let uniqueDays = []
    for (let j = 0; j < meals.length; j++) {
      // indexOf() returns the position of the first occurrence of a specified value
      // This method returns -1 if the value to search for never occurs
      if (uniqueDays.indexOf(meals[j].date) === -1) {
        uniqueDays.push(meals[j].date)
      }
    }

    dayCount = uniqueDays.length

    let avgCalories = Math.floor(totalCalories / dayCount)

    return avgCalories
  },
  onTrack: function () {
    let averageDailyCalories = this.avgDailyCalories()
    if (averageDailyCalories <= this.calorieTarget) {
      return true
    } else {
      return false
    }
  }
}

module.exports = mealObj;

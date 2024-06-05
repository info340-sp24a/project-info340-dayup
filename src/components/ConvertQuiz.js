import React, { useEffect, useState } from 'react';
import puppyData from '../data/puppy-data.json';

// internal function for quiz score conversion

// 1 - read stored quiz score **FROM Firebase**
  // use the below mock quiz score first
let mockQuizScores = [1, 2, 5];

// add up the quiz score
let quizScoreSum = 0;
mockQuizScores.forEach(mockQuizScore => {
  quizScoreSum += mockQuizScore;
});
console.log(quizScoreSum); // should be 8

// find the matching score puppy, with the corresponded quiz score
const findMatchingPuppy = score => {
  return puppyData.find(puppy => puppy.score === score);
};

const matchingPuppy = findMatchingPuppy(quizScoreSum);
console.log(matchingPuppy); // Log the matching puppy's details (json info)


// add the match puppy **TO Firebase** (that person's PuppyList) // TBD




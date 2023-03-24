// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: March 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function is to calculate a person's salary
 */
function calculate() {
  
  const taxRate = 0.18

  //input 
  const hours = parseInt(document.getElementById('hours').value)
  const pay = parseInt(document.getElementById('rate').value)

  //process
  const salary = hours * pay
  const tax = salary * taxRate
  const takehome = salary * (1.0 - taxRate)

  //output
  document.getElementById('take-home').innerHTML = 'Your pay will be: $' + takehome.toFixed(2)
  document.getElementById('government').innerHTML = 'The government takes: $' + tax.toFixed(2)
}
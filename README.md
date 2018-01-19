# Problem
## Poppin' Bottles
You've just been hired at Lighthouse Markets, a reputable (and thoroughly fictional) grocery store chain. One of the primary features of Lighthouse Markets is their recycling program on pop bottles. Here is how the program works:

- For every two empty bottles, you can get one free (full) bottle of pop
- For every four bottle caps, you can get one free (full) bottle of pop
- Each bottle of pop costs $2 to purchase

Given these parameters, write a program so that you can figure out how many total bottles of pop can be redeemed given a customer investment.

## Task 1
Figure out the algorithm that will calculate this. For example, given a $20 investment, the customer will get 10 bottles of pop. That gives a supply of both bottles and bottle caps that can be used to redeem for further bottles, which will then produce a further supply for recycling.

## Expected Values
Here is an easy chart that you can use with some sample input and output values so that you know that your algorithm is calculating correctly.

Investment  Total Bottles
10          15
20          35
30          55
40          75

## Task 2
Have your program accept an argument (argv) that will allow the user to specify the amount (in dollars) that the customer is going to spend. The node script will then calculate the total number of bottles that the customer will receive.

## Task 3
Enhance the output of your program so that once the amount has been given, it provides a breakdown of how many bottles were purchased, how many were obtained through bottle recycling, and how many were obtained through bottle cap recycling.

## Sample Output
TOTAL BOTTLES: 75
TOTAL EARNED:
  BOTTLES: 37
  CAPS: 18

## Task 4
Add to the output, so that the program will tell the customer how many bottles and bottle caps they will have left over. We have to upsell the customer on buying more pop after all!

## Sample Output
TOTAL BOTTLES: 75
REMAINING BOTTLES: 1
REMAINING CAPS: 3
TOTAL EARNED:
  BOTTLES: 37
  CAPS: 18

# Packer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Project Documentation
To solve the package challenge, I used a dynamic programming technique known as the 0/1 Knapsack problem. This problem involves maximizing the value of items packed into a knapsack while respecting its weight capacity. I chose this algorith approach because using dynamic programming to solve the 0/1 Knapsack issue allows you to efficiently find the optimal solution when you have a group of objects with values and weights and need to decide the best combination to maximize overall value while staying within a weight restriction.

## Here's a step-by-step breakdown of my approach:
1.	I began by parsing the input file to extract the weight limit and the list of items, along with their respective weights and costs.
2.	To facilitate calculations, I converted the weights and costs to integers.
3.	I created a 2-dimensional array called "dp" to store the maximum cost achievable for different item combinations and weight limits.
4.	Initializing the first row and column of "dp" with zeros, I accounted for the case of having no items or weight limit.
5.	I proceeded to iterate over each item and weight limit, starting from the first item and smallest weight limit.
6.	For each item and weight limit, I determined the maximum cost achievable by either including the current item or excluding it.
  - If the weight of the current item was within the limit, I compared the cost of including it to the cost of excluding it.
  - If the weight of the current item exceeded the limit, I excluded it and carried over the maximum cost from the previous row.
  - The maximum cost for the current combination was then stored in the corresponding position of the "dp" array.
7.	After completing the iterations, the maximum achievable cost resided in "dp[numItems][weightLimit]".
8.	To identify the selected items contributing to the optimal solution, I traced back from "dp[numItems][weightLimit]" through the "dp" array.
  - If an item was included in the optimal solution, I added its index to a list of selected items.
  - I adjusted the weight limit by subtracting the weight of the selected item and moved to the previous row in the "dp" array.
9.	Finally, I reversed the list of selected items to maintain the original order and converted it to a comma-separated string format. This string represented the final result.
I implemented this solution within the "pack" method of the "Packer" class, taking care to address the specified constraints and handle potential error cases.
## Summary
In summary, the solution to the package challenge involves using dynamic programming and the 0/1 Knapsack problem. The goal is to maximize the total value of items packed into a knapsack while staying within its weight limit. The approach includes parsing the input, creating a 2-dimensional array to store the maximum costs, iterating through items and weight limits, and making decisions on including or excluding items based on their weights and costs. The result is the maximum achievable cost and a list of selected items. The solution handles constraints and error cases, and the implementation is provided within the "pack" method of the "Packer" class.

# Application Testing

## 1st test case ensures that the AppComponent is created without any errors or exceptions. 
![Screenshot 2023-05-29 at 19 02 28](https://github.com/GivenCingco/packerApplication/assets/50238769/ad942c7e-147a-4deb-a8de-ddf063facb3e)

## 2nd test case tests the application to see if it renders a title in the h2 tag

![Screenshot 2023-05-29 at 19 04 53](https://github.com/GivenCingco/packerApplication/assets/50238769/53d900ff-770e-4f65-af79-7cf134b0b2d3)

## 3rd test case checks to see if processInput is called whenever the button click event is triggered.

![Screenshot 2023-05-29 at 19 06 58](https://github.com/GivenCingco/packerApplication/assets/50238769/01d72413-4823-4680-98cc-de8cf66531ac)

# Ensuring application is production ready
1. Went to the `angular.json` file development and changed the *buildOptimizer* to true. This option optimises the transpilation of TypeScript to javaScript by removing unused code.
2.  Ran the command below to build the app for production
```
ng build --configuration production    
```
2. Ran the command below for Angular to build the application using Ahead-of-Time compilation. AOT compilation converts the Angular application HTML and TypeScript code into efficient JavaScript code.

```
 ng build --aot 
```




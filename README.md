  1. How to run the project **locally**?
        npm install
        <!-- npm install --save-dev snowpack
        npm install react react-dom 
        not sure if needed...-->
        npm install @table-library/react-table-library @emotion/react
        npm install bignumber.js
        cd 
        npm start

  2. What is the overall **structure** of your code?
        I did a seperarate ReactTable component.
            It is structured in:
                -imports
                -list data
                -functions for the calculations
                -the main function with
                    -adding state
                    -updating state
                    -setting an effectHook for all total expenses
                    -user events and event handlers
        
        It gets rendered in App.jsx, which gets rendered in index.jsx.


  3. How do you manage **state** in your application? Why did you choose this solution?
    
    I manage it with Hooks. 
    Hooks can be used to register something with React, such as state. I create state by using the useState Hook. I get the state object and an updater function to update the Hook value.

    I chose it because the user interacts with the page to change things on it. These changes include updating or adding/deleting an item. So I need to ensure my application can respond to user requests. Basically, if the value can change, it should be part of the application's state.


  4. What could be a reason for using bignumber.js for calculations?
     Because it's a powerful library for handling precise arithmetic operations with large numbers and decimal precision.
     It's handy, because it lets me 
     Currency and Percentage Calculations: When working with financial applications that involve currency and percentage calculations, bignumber.js can accurately handle these scenarios without losing precision.

  5. Why did you design the user interface like you did? What choices did you make and why?

    Tbh I was super happy when the implementation of the custom theme just worked

  6. What „tasks“ did you have on your mind? How did you break down the different deliverables?

    
  7. Use the readme as a notepad to make us understand your thinking.

  1. How to run the project **locally**?

        ```
        git clone git@github.com:romyradau/CC_Code_Challenge.git
        cd CC_Code_Challenge
        npm install
        npm install @table-library/react-table-library @emotion/react
        npm install bignumber.js
        npm start
        ```


  2. What is the overall **structure** of your code?

        I did a seperarate ReactTable component.
            It is structured in:
                - imports
                - list data
                - functions for the calculations
                - the main function with
                    - adding state
                    - CRUD functionality
                    - effect Hook
                    - rendering with
                        - form for new expense
                        - header
                        - cells with integrated handleUpdate
                        - delete expense button
                        - total sum
        
        It gets "rendered" in App.jsx, which gets "rendered" in index.jsx.


  3. How do you manage **state** in your application? Why did you choose this solution?
    
    I manage it with Hooks. 
    Hooks can be used to register something with React, such as state. I create state by using the useState Hook. I get the state object and an updater function to update the Hook value.

    I chose it because the user interacts with the page to change things on it. These changes include updating or adding/deleting an item. So I need to ensure my application can respond to user requests. Basically, if the value can change, it should be part of the application's state.


  4. What could be a reason for using bignumber.js for calculations?

     The library allows you to handle big numbers with precision and avoid the precision loss that can occur with JavaScript's built-in Number type.
     (I thought it might also be handy for € and % calculations, but I didn't get to the point where I could confidently say why...)

  5. Why did you design the user interface like you did? What choices did you make and why?

    Tbh I was super happy when the implementation of the baseline theme for the table just worked (link below in 6.6.)
    I did some minor adjustments, but didn't have the time and mindspace anymore to come up with something cool
    In an utopian universe I would have though styled it as so:



  6. What „tasks“ did you have on your mind? How did you break down the different deliverables?

    Ok, so this could become a whole blog article, so I will try to just list up what I did ^^
    I do hope you enjoy eleborate documentations ^^
    
    6.0. Rough structuring of the overall requirements
        -list(editable markup fields, add functionality, sum calculation, total sum calculation)
            -expenses = 4 values (header fields)
            -total price = 1 value
        -add expense button

    6.1. Deep Dive into React(as I had never worked with it before)
        -I asked a friend to show me the folder structure, to get a feel for the frame
        -Looking inside the files made me freak out though, because it's very different to Angular and time was short!
        -Did a basic Set up React Tutorial
        -Then I looked for custom templates for editbale lists
        -Got lost in the endless templates world
        -Followed a custom template documentation and got an overengneered environment running
            https://create-react-app.dev/docs/custom-templates/
            https://medium.com/@wrappixel/how-to-use-ample-react-dashboard-lite-template-for-your-projects-9282ac8d0641
        -Knew I needed to start smaller and take a deep dive into the folder structure to understand what's going on here
        -So I did the basic MS React course
            https://learn.microsoft.com/en-us/training/paths/react/
        -Started YouTubing and found out about the React Table library
        -Did multiple tutorials, to code along to get used to the syntax
            https://www.youtube.com/watch?v=5NFLXEKmQSs&t=7s&ab_channel=DarwinTech
            https://www.youtube.com/watch?v=j6-ImdZW7aM&ab_channel=Joshtriedcoding
            https://www.youtube.com/watch?v=A9oUTEP-Q84&ab_channel=PedroTech
            https://www.youtube.com/watch?v=2aIjW_w_-Rg&ab_channel=CodeWithYousaf
        -Still, I didn't get the results I wanted and also there were so many different approaches with more and more difficult syntax, probably way to overengineered table functionality for what I had to do.
        -So I told myself "You need to understand the Code and not just code along"
        -So I did the How to create a React Component Tutorial
            https://www.robinwieruch.de/react-table-component/
        
    6.2 Now that I had some basic knowledge it was time to break down the different deliverables again:
        -How do I add functionality to a basic display table?
        -How do I combine it with the BigNumber library?
        -How do I get the data?
        -The PedroTech guy confused me with his approach and he also used a JSON file for the Data
        -Another guy just used random data from the internet using an URL...
        -So my most important question was: How the f*** do I get the data!?!?! Was a big AHA effect later haha^^
        -This page introduced me to editable tables and the CRUD functionality
            https://react-table-library.com/?path=/docs/compact-table-tutorials--page
        
    6.3. So how to start from scratch?
        (As there are so many options, the question was, which should I use:
            either create the folders/files yourself or
            download pre folder structure or
            download a template, ...)
        -Because I remembered something important from the MS tutorial: Browsers can't render .jsx files, so I need a bundler like snowpack to generate JavaScript, I decided to stick to Microsoft and do it all manually
            https://learn.microsoft.com/en-us/training/modules/react-get-started/8-project-from-scratch

    6.4. After building the environment it was time to:
        -add a table component
        -install BigNumber.js
        -start documenting what I did all the time as by now I had +20 tabs and +5 VS Code repos open ^^

    6.5. Let the debugging begin
        -everything was set up but nothing was rendered, that was on Wednesday afternoon
        -time was short, so I reached out to a friend from 42 via Slack if he could check the code
        -the bug: I wanted to have a separate component, but the tutorial put everything in App.jsx but called it a component so their function was called App and so was mine but I simply needed to call mine ReactTable
        THAT WAS ALL - THAT WAS THE ERROR HAHA - SAD
        
    6.6. The fall of the dominos
        -I had a visible table, which made my own code way more comprehensible to me especially how data input was handled
        -I added a simple theme to make it look better
            https://react-table-library.com/?path=/docs/theming-themes--page
        -I started with creating, deleting then updating the data
        -I adjusted some things so that a new expense wouldn't be filled in already and that the input got emptied after submitting
        -I did the calculations (with chatgpt): first for each expense, then for the total sum which needed a new field

    THERE IT WAS THE FUNCTIONAL TABLE

    6.7. What was missing now?
        -currency and percentage signs
        -better design
        -make it responsive and mobile friendly
        -well-structured README

    6.8. Currency and percentage signs fail
        - tried 5 different approaches with chatGPT
        - introducing a formatValue function
        - updating handlerfunctions and display values
        - I checked the bigNumber library again to see if they had something like a formatter
        - I even imported a formatting library but nothing really worked
            https://formatjs.io/docs/polyfills/intl-numberformat/
        - I had currency and percentage signs everywhere but the functionality was gone
        - updating and converting all values to either strings or floats didn't help

        YOU CAN FIND A FILE THAT DISPLAYS € AND % BUT WITH BUGGY FUNCTIONALITY UNDER CurrencyTry.jsx
        SO YOU KNOW WHAT I DID

    6.7. So I took a break and fully focused on a detailed README documentation

    6.8. Clean Up, comments, 
    

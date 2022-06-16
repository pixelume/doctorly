## Notes

 - Bootstrapped with CRA and typescript with eslint and prettier for code standardization
 - I used Material-UI as base for styling and a component library.  It is flexible, extensible, adheres to best practices as far as UI is concerned and its the one I'm most familiar with. Also there's no need to re-invent the wheel. Especially considering the time constraints and the fact that it has a good date and time picker component which I figured would work well for the scheduling functionality
 - Breaking down the requirements  I initially identified 2 categories of functionality: 
 - - Adding and removing and managing doctors, each with their own calendar and schedule
 - - Creating and managing events / appointments both on the individual doctor level and on a global level
 - With the time constraints I was really only able to implement the first part (creating, listing and deleting doctors)
 - I was a little surprised at the limit of time vs the required functionality of the application
 - I did not get time to implement the event scheduling or to write tests and I'm a little dissapointed as I really would have liked more time to implement a working protoype that includes this functionality
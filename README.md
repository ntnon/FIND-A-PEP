# Know Your Customer
My entry to Stacc's "Know-your-customer" challenge

https://github.com/stacc/stacc-code-challenge-public


# How to access
go to  https://anton-lr.github.io/kyc/ 

or

clone the project and launch from installation folder using 'npm run start'


# How to use
in the input field write one of three things
1) A name.
E.g "Anniken Huitfeldt"
This will return the PEP-status of this person
If the person is a PEP you will see "FOUND-A-PEP". Otherwise: "NOT-A-PEP"

4) A part of a name.
E.g "Ann"
This will return a clickable summary of PEPs related to the input

6) The norwegian organization ID for a company
E.g "997093550"
This will return a clickable summary with information about the company
and a "1)"-type PEP-search for each of the people who hold prominent positions within the company



# Comments
I had to learn about API fetching in order to complete the task. ~~This went surprisingly well~~. Working with Asynchronous data was challenging. 


# Flowchart - conceptual framework
https://drive.google.com/file/d/1gNuj3RCjWzsJgfrgtCJvIXxuEINfyWUE/view?usp=sharing


# Back-end version log and development
v1.0
- [X] fetch from Stacc API
- [X] parse fetched json
- [X] create git repo

v2.0
- [x] seperate functions into seperate components
- [x] properly added my local folder to the repo - no more shady "delete & upload replacement" - commits
- [x] added a scheduler and parseRequestList component to manage a single search yielding multiple API calls
- [x] created a flowchart to visualize the flow of information between components. Though as of 27.aug 2022, the chart is a bit outdated
- [x] render asynchronous data

v2.1
- [X] recursive algorithm to unpack fetched objects. Necessary in order to retrieve names from "Roller" API

v2.2
- [X] Requests that takes too long will abort automagically
- [X] Improved Scheduler, it now retrieves all data related to a search, neatly structured and ready for rendering

v3.1
- [X] Create a rendering system that parses values from scheduler
- [X] Connected front- and back-end!

v3.2
- [X] Remove repeated data in findNames return value
- [X] Improved fetched datastructure, it now includes pep status and suggestions
- [X] deploy / host website. https://anton-lr.github.io/kyc/ 
- [ ] create API functionality
- [ ] proper error handling


# Front-end version log and development
v1.0
- [X] display fetched json
- [X] basic css

v2.0
- [x] added an example tag. Very few other things changed, front-end wise in this version.

v2.1-2.2
no front-end updates

v3.0
- [X] css grid for main panels
- [X] make website prettier

v3.1
- [X] Connected front- and back-end!
- [X] create seperate panels: one for viewing raw data, one for previewing the data in a slightly more structured manner, and one for user interaction. And one for viewing errors thrown. - no window for seeing errors.

v3.2
- [X] Provide alternative searches when a search yields too many results
- [X] color distinction between "PEP" and "not PEP"
- [X] Improved rendering for suggestions and adapted to new datastructure


- [ ] animated loading icon / loading icon



# Boot project
1) navigate to the project folder
2) 'npm run start'


# Comments
I had to learn about API fetching in order to complete the task. ~~This went surprisingly well~~. Working with Asynchronous data was challenging. 

# Flowchart - main idea
https://drive.google.com/file/d/1gNuj3RCjWzsJgfrgtCJvIXxuEINfyWUE/view?usp=sharing



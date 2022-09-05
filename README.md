# Know Your Customer
My entry to Stacc's "Know-your-customer" challenge

https://github.com/stacc/stacc-code-challenge-public


# Booting the project
clone the project and launch from installation folder using 'npm run start'

or use the link: https://anton-lr.github.io/kyc/ 


# How to use
in the input field, write one of three things
1) A name 
E.g "Anniken Huitfeldt" <br />
This will return the PEP-status of this person <br />
If the person is a PEP you will see "FOUND-A-PEP". Otherwise: "NOT-A-PEP" <br />

4) A part of a name <br />
E.g "Ann" <br />
This will return a clickable summary of PEPs related to the input <br />
When presented with suggestions, you can click on one of the suggestions to perform a search on that name. 

6) The norwegian organization ID for a company <br />
E.g "997093550" <br />
This will return a clickable summary with information about the company <br />
and a "1)"-type PEP-search for each of the people who hold prominent positions within the company <br />



# Comments
I had to learn about API fetching in order to complete the task. ~~This went surprisingly well~~. Working with Asynchronous data was challenging. 

Additionally, this was my first fullstack project, and my first every front-end work. I had to learn CSS, React and GitHub in order to complete this challenge. 


# Chart of the "main idea"
https://drive.google.com/file/d/1gNuj3RCjWzsJgfrgtCJvIXxuEINfyWUE/view?usp=sharing



# Version log and development
## Back-end 
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
- [X] Provide alternative searches when a search yields many results

v3.3
- [X] better error handling

v3.4
- [X] improved accuracy of pepCheck function. Before this patch, any search which yielded only one or two hits was considered a pep. Now, something is a pep, only if the exact search exists somewhere within the hits array.


## Front-end version log and development
v1.0
- [X] display fetched json
- [X] basic css

v2.0
- [x] added an example tag. Very few other things changed, front-end wise, in this version.

v2.1-2.2
no front-end updates

v3.0
- [X] css grid for main panels
- [X] made website prettier

v3.1
- [X] Connected front- and back-end!
- [X] created seperate panels: one for viewing raw data, one for previewing the data in a slightly more structured manner, and one for user interaction. And one for viewing errors thrown. 

v3.2
- [X] color distinction between "PEP" and "not PEP"
- [X] Improved rendering for suggestions and adapted to new datastructure

v3.3
- [X] animated loading icon / loading icon
- [X] improved color pallette
- [X] filtered out unecessary data in rendering. The data excess data is still viewable from the raw data display, but is not rendered as a pep-block
- [X] clickable summary for companies -> click to reveal information about company. 
- [X] under results, companies are now rendered as blocks containing the name of the company
- [X] General restructuring and finishing touches on the sizes of the 

v3.4
- [X] Block rendering provides clickable summaries for any search that yields 1 or more hits. Updated to work with pepCheck

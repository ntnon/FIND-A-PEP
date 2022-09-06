# Know Your Customer
My entry to Stacc's "Know-your-customer" challenge

https://github.com/stacc/stacc-code-challenge-public


# Booting the project
clone the project and launch from installation folder using 'npm install' then 'npm run start'

or use the link: https://anton-lr.github.io/kyc/ 


# How to use
zoom until there is no blue empty space and
in the input field, write one of three things<br />
1) A name 
E.g "Anniken Huitfeldt" <br />
This will return the PEP-status of this person <br />
If the person is a PEP you will see "FOUND-A-PEP". Otherwise: "NOT-A-PEP" <br />

4) A part of a name <br />
E.g "Ann" <br />
This will return a clickable summary of PEPs related to the input <br />
When presented with suggestions, you can click on one of the suggestions to perform a search on that name  <br />
The use case for this is minimal, because if you wouldn't perform a PEP check on someone whos full name you do not know

6) The norwegian organization ID for a company <br />
E.g "997093550" <br />
This will return a clickable summary with information about the company <br />
and a "1)"-type PEP-search for each of the people who hold prominent positions within the company <br />



# Comments
I had to learn about API fetching in order to complete the task. ~~This went surprisingly well~~. Working with Asynchronous data was challenging. 

Additionally, this was my first fullstack project and my first ever front-end work. I had to learn CSS (css selectors, div structuring, detail/summary tags, animations), React (state hooks, props, async functions and promises, map, conditional rendering, working with components (though my experience with functional programming reveals in the form of many purely function components)) and GitHub (GitHub pages, GitHub Desktop, the "git-workflow") in order to complete this challenge so I'm glad i started early. 


# Improvements?
There are CSS tricks to be learned, that I know for sure. For one, my use of conditional rendering in App.js feels excessive. Additionally, the project is hard-coded for desktop browsers, it simply does not look good on mobile. Though it works! I learned about WCAG on the deadline day. Wish I knew about this earlier.
things to check out: https://tailwindcss.com/

Clicking on a suggested name works by passing the name as an input to the Schedule component, requiring an additional fetch call even though the data requested is already collected. Given more time, I would've parsed the already-collected data and fed it back to the User without making an additional fetch request.

I learned, the day before the challenge ended, about rem and em units in css, which would have allowed me to resize the website properly. For now, just zoom until it feels right. 

Because I created a general recursive search algorithm for js objects, it would be fairly possible to add create a filtering method, in case the user only knows a portion about a name and additional information. For example: select only german individuals from the 90 suggested provided by the search "Jens". With one day left of this challenge, my extensive and unskilled front-end design would prove too time consuming to change in order to implement search filtering.

The next thing I wanted to learn for this project was the Express library in order to set up API endpoints for my website. A dynamic website like that would've required Haroku (or something similar) which seems easy enough to set up. Making an Express application also seems relatively easy. However, having to bake an express server into the ordeal became altogether too many things to learn with the remaining time of the challenge. 

I wrote alot of code for this project and I do not have the patience to comment exhaustively on all of it - though I'll say this. The most difficult thing was working in a way that feels "react-y". React proposes certain design patterns and is very powerful when you work alongside with it, which I eventually got the hang of, but the code reveals scars from a battle between one man and the entire react workflow.


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
- [X] various bug fixes and minor tweaks


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
- [X] various bug fixes and minor tweaks

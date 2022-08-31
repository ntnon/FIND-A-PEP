# Know Your Customer
My entry to Stacc's "Know-your-customer" challenge

https://github.com/stacc/stacc-code-challenge-public


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
- [ ] LIMIT vague searches : too vague search -> a far too big request! The search: 'a' yielded a response with character count of 45386695
          a)    minimum characters in search
          b)    automatic timeout.
          c)    error handling
          d)    Do not allow searches with fewer characters than 3
          

- [ ] One mode for previewing everything related to a search
- [ ] one mode for returning every person related to the search; and their PEP status
employees
- [ ] deploy / host
- [ ] create API functionality
- [ ] proper error handling
- [ ] add a search history - use component from previous project?

# Front-end version log and development
v1.0
- [X] display fetched json
- [X] basic css

v2.0
- [x] added an example tag. Very few other things changed, front-end wise in this version.

v2.1
no front-end updates
- [ ] css grid
- [ ] make website prettier
- [ ] animated loading icon
- [ ] create seperate panels: one for viewing raw data, one for previewing the data in a slightly more structured manner, and one for user interaction. And one for viewing errors thrown.


# Boot project
1) navigate to the project folder
2) 'npm run start'


# Comments
I am new to css-styling, which leaves much to be desired on the front-end aspect of this project.

I had to learn about API fetching in order to complete the task. ~~This went surprisingly well~~. Working with Asynchronous data was challenging. 

# Flowchart - main idea
https://drive.google.com/file/d/1gNuj3RCjWzsJgfrgtCJvIXxuEINfyWUE/view?usp=sharing



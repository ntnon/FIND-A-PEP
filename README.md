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

v2.2
- [X] Requests that takes too long will abort automagically
- [X] Improved Scheduler, it now retrieves all data related to a search, neatly structured and ready for rendering

v3.1
- [X] Create a rendering system that parses values from scheduler
- [X] Connected front- and back-end!
- [ ] Remove repeated data in findNames return value
- [ ] Display organization name and merge data from "enheter" and "roller"
- [ ] deploy / host website
- [ ] create API functionality
- [ ] proper error handling
- [ ] add a search history - use component from previous project?

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
- [ ] animated loading icon / loading icon
- [ ] Provide alternative searches when a search yields too many results
- [ ] insert "example searches: 914242649, Anniken Huitfeldt, Kaptein Sabeltann" 




# Boot project
1) navigate to the project folder
2) 'npm run start'


# Comments
I am new to css-styling, which leaves much to be desired on the front-end aspect of this project.

I had to learn about API fetching in order to complete the task. ~~This went surprisingly well~~. Working with Asynchronous data was challenging. 

# Flowchart - main idea
https://drive.google.com/file/d/1gNuj3RCjWzsJgfrgtCJvIXxuEINfyWUE/view?usp=sharing



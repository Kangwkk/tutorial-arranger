# Milestone 1
**Proposed Level of Achievement:** Gemini
## Motivation
During the tutorial balloting, there are so many tutorial groups to choose from and it's always hard for us to decide how to rank our choices for different groups. What's more, we need to ballot for tutorials of more than 6 modules every semester and most of them run in parallel, which means one needs to ballot them in the same round. Thus, tutorial balloting is always a mind-boggling and menial process which is, however, compulsory for every student in NUS. There is huge demand for us to come out with something which can facilitate students with such processes and provide students with the best options to choose their tutorial groups.
## Aim
We hope to make the timetable planning process less time-consuming and automated to optimize the schedule in terms of minimizing travel distance between classes and distributing workload evenly. 
## Target User
NUS students
## User Stories
+ **Alice:** As a student who has at least 6 tutorials to balltot, and each tutorial has so many slots to choose from, I want to eliminate the options that obviously conflict with my existing schedule. (e.g. allocated lectures)
- **Bob:** I only want to have my lunch between 12 to 1pm, otherwise I will have stomachache. I don't want any tutorials in this time slot and I hope I don't have to do the elimination process manually. 
* **Cathy:** The school bus is always crowded. Missing the bus means being late for classes. I want the travel distance between two adjacent classes be minimized. (e.g walking from COM1 to COM2 is preferred rather than taking the bus from School of Computing to Faculty of Science)
- **Dillip:** I want the workload to be distributed evenly each day so that I don't have to burn the night oil on days when the classes piled up. 
## Scope of Project
A web-based application. 
## Program Flowchart
```flow
st=>start: Start
e=>end: End
para1=>parallel: Add Modules
para2=>parallel: Add Requirements
sub=>subroutine: Choose allocated lecture slots
sub1=>subroutine: Choose fixed tutorial slots
sub2=>subroutine: Set reserved time slots
sub3=>subroutine: Set maximum daily workload
op=>operation: Auto-arrange
display=>inputoutput: Display Timetable
e=>end

st(right)->para1
para1(path1, bottom)->sub
para1(path2, right)->para2
para2(path1, bottom)->sub1
sub1->sub2->sub3
para2(path2, right)->op->display->e
```
## Project Log
S/N | Task | Date | Orbitee1(hrs) | Orbitee2(hrs) | Remarks
:---:|:---:|:---:|:---:|:---:|---
1|Liftoff Day 1 |3/05/2019 |8 |8|Liftoff Day 1
2|Liftoff Day 2|14/05/2019|8|8|Liftoff Day 2
|3|1st Team Meeting |18/05/2019|10|10|1.further discussed and polish the initial idea <br>2. discussed the technology needed in the project <br>3. delegated roles of each orbitee |
4|2nd Team Meeting|19/05/2019|10|10|1. layout the general sturcture and operantional mode of the program <br>2. dicussed the ways of implementation of each of the main features in details
5|Programming at home|23/05/2019|2|2|Develop database models
6|Programming at home|24/05/2019|2|2|Develop database models
7|Programming at home|25/05/2019|2|2|Develop database models
8|3rd Team Meeting|30/05/2019|10|10|1.Worked on milestones <br>2.further planning of the project
##
Total Hours | Orbitee 1 | Orbitee 2
:---:|:---:|---
104|52|52

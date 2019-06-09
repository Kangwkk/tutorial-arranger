# Milestone 1
**Proposed Level of Achievement:** Gemini
## Motivation
During the tutorial balloting, there are so many tutorial groups to choose from and it's always hard for us to decide how to rank our choices for different groups. What's more, we need to ballot for tutorials of more than 6 modules every semester and most of them run in parallel, which means one needs to ballot them in the same round. Thus, tutorial balloting is always a mind-boggling and menial process which is, however, compulsory for every student in NUS. There is huge demand for us to come out with something which can facilitate students with such processes and provide students with the best options to choose their tutorial groups.
## Aim
We hope to make the timetable planning process less time-consuming and automated to optimize the schedule in terms of minimizing travel distance between classes and distributing workload evenly. 
## Target User
NUS students
## User Stories
- As a student who has so many tutorial classes to choose from, I want the the process of arranging timetable to be automated once I provide the modules I'm taking and my requirements. 
    - As a student who has some reserved time slots (e.g lunchtime from 12:00 to 13:00 or existing lectures), I want the timetable arranger to avoid clashes automatically. 
    + As a student who always misses the school bus, I want the travel distance between two adjacent classes be minimized. (e.g walking from COM1 to COM2 is preferred rather than taking the bus from School of Computing to Faculty of Science)
    * As a student who cannot withstand a daily workload of 12 hours, I want the tutorial arranger to avoid coming up with a timetable that has too much workload on a single day. 
* As a student who wants to have access to the arranged timetable even without internet connection, I want to be able to save the timetable to my cellphone or laptop.
+ As a student who might not be satisfied with the auto-arranged timetable, I want to be able to change the tutorial slots in my timetable. 
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
|3|1st Team Meeting |18/05/2019|10|10| 1.further discussed and polish the initial idea <br>2. discussed the technology needed in the project <br>3. delegated roles of each orbitee |
4|2nd Team Meeting|19/05/2019|10|10|1. layout the general sturcture and operantional mode of the program <br>2. dicussed the ways of implementation of each of the main features in details
5|Programming at home|23/05/2019|2|2|
6|Programming at home|24/05/2019|2|2|
7|Programming at home|25/05/2019|2|2|
8|3rd Team Meeting|30/05/2019|10|10



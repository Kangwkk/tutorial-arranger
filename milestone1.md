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
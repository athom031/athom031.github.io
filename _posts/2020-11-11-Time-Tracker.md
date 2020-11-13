---
layout: post
title: "Time Tracker: Android Application Sigma Connectivity"
---

<img src="{{ site.url }}/assets/Files/TimeTracker/TimeTrackerScreenCapture.png"/> 
[Video Demo](https://youtu.be/qMrPhE7Ob-g)

An android application to help employees easily track their hours. 

### User Interaction

Users can either hit the start/stop toggle to start a shift OR if the shake activation switch is on, shake their android as an alternative to the toggle. 

Clicking on a date in the calendar shows previously logged shifts. If the date picked is in the future or a date that does not have logged hours will show a default message.

### Data Storage

The hours worked are stored internally on a SQLite database. The four columns are all of integer types: 
* Year
* Month
* Day
* Minutes
Year, Month, and Day together are the primary keys. 

Insert conflicts occur when you log multiple shifts on a single day, this is dealt with by updating an aggregation of the Minutes column.

### Future Improvement Ideas
* Create a Background service to log the shake outside of the application.
* Allow users to view specific shifts recorded opposed to the general hours.
* Add another column to the database to show which specific project the contractor was working on.
* Cache the Start/Stop timestamps to make sure user data is not lost.
* Extend the database storage method to an online resource so it can be interactable company wide rather than just for the employee itself.
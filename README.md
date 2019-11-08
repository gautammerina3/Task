# Task

-Task given by Arbytes Engineering Solution for Internship Program

## Problem statement:

- We have an IoT meter that sends one sensor data point to the server every minute. (sensor can be anything e.g. temperature sensor)

- Some times due to network problem or some unknown issue we miss some data points. In such case, we have established an assumption that if the server does not receive any data for more than 5 minutes we assume that the meter has been switched off.
- The task is to create a manipulated data set from the real data set: we need to interpolate the values that are missed when the meter is NOT switched off.
- The data set below shows the data points starting from minute 1 and ends at minute 22.

[[1,10], [2,11], [3,8], [6,12], [7,13], [8,28], [17,29], [18,20], [22,21]]

- deliverables:

- manipulated data set

- code you use to generate this

- you can use any language of your preference.

- sample

input : [[1,10],[2,10],[4,12],[11,12]]

output : [[1,10],[2,10],[3,11],[4,12],[11,12]]


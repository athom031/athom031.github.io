---
layout: post
title: "Artificial Intelligence"
---
A collection of projects completed in _CS170 - Artificial Intelligence_ exploring fundamentals of AI. <br/>

_Search_: The process of traversing from a start state to a goal state through a set of intermediate states. <br/>
_Machine Learning_: An application that provides a system with the ability to "learn" from previous data. <br/>
_Logic Systems_: The ability to take previous data and rules and then manipulate them to create new facts.

<!--                    TABLE OF CONTENTS                                   -->
### Project Table of Contents
<div style="display:flex; flex-direction:column;">    
    <html>
        <a href="#puzzle">Search: 8 Puzzle Solver</a>
        <a href="#feature">Machine Learning: Nearest Neighbor Feature Selection</a>
        <a href="#arya">Logic Systems: Arya the ChatBot</a>
    </html>
</div>
<br/>

<!--                          PROJECTS                                      -->

<div id="puzzle"></div>

## Search: 8 Puzzle Solver

#### [Puzzle Solver Repo](https://github.com/athom031/Artificial_Intelligence/tree/master/8-Puzzle-Solver)

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/nodeAnalysis.png"/> 
</div><br/>

### Abstract
A python implementation of a search solution to the 8 puzzle [problem](https://blog.goodaudience.com/solving-8-puzzle-using-a-algorithm-7b509c331288). <br/>

Three methods are used to show the merit of A* search and within that, the importance of a good heuristic.<br/>
Uniform Cost Search only depends on the movement cost to determine the next move.<br/>
A* Search uses the movement cost to determine the next move but adding to that includes a heuristic function to determine the best next step. The A* search used, depends on two different heuristics.<br/>
_Misplaced Tile_ checks how many tiles are where they shouldn't be. <br/>
_Manhattan Distance_ checks how far each tile is from where it should be. <br/>

### Reflection

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/runtime.png"/> 
</div><br/>

We can see building upon the movement cost to predict the next best step, reduces the runtime and space complexity exponentially. The heuristic chosen also matters. I was surprised that the misplaced tile performed better for this example than the Manhattan distance because from theory, the Manhattan distance uses more information about the actual state. But they are very similar and might vary for other examples.


<div id="feature"></div>

## Machine Learning: Nearest Neighbor Feature Selection

#### [Feature Selection Repo](https://github.com/athom031/Artificial_Intelligence/tree/master/FeatureSelectionNN)

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/80_features_3_5.png" width = "75%"/> 
</div><br/>

### Abstract

Given a feature set with N classified instances and M features, we want to find the feature subset that will best represent the dataset for future unclassified instances. This uses the Nearest Neighbor Classifier and One Out algorithm to measure each potential feature subset.
##### One Out Algorithm: 
Take one data point out and build a Nearest Neighbor classifier from the current feature subset. Then use this classifier to guess the one out point. We do this for every point to determine the accuracy of our current feature subset.
##### Feature Selection:
We select features one of two ways, either we start with no features (forward selection) or all features (backward selection). Then we simply greedily narrow it down to the most accurate subset of features (remember we evaluate accuracy with the one out algorithm.

### Warnings

Though foward selection and backward selection will result in similar accurate feature subset, these subsets will not always be the same. <br/>
Forward selection will replicate the accuracy of backward selection with less features. <br/>
This makes the features picked by Backwards Selection harder to pick. <br/>
Backwards Selection also takes more time on larger datasets. <br/>
[Example](https://github.com/athom031/Artificial_Intelligence/tree/master/FeatureSelectionNN/feature_accuracy_example)


<div id="arya"></div>

## Logic Systems: Arya the ChatBot

#### [Arya ChatBot Repo](https://github.com/athom031/Artificial_Intelligence/tree/master/AryaBot)

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/aryaWanderer.jpg" width = "75%"/> 
</div><br/>

Arya is a chat bot that represents her learned personality ('negative', 'neutral', or 'positive') with a score and responds occordingly. <br/>

<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/aryaSoccer.png"/>
<br/>

Each line, her personality 'score' is at a positive, netural, and negative level accordingly. Though the user input changes, Arya 'feels' like responding in a different way.

### Abstract

This is a simple AI interface that responds to user entries based on the conversation and personality of the AI. If the user enters positive entries, the AI personality will slowly rise. But if the user starts sending negative messages, Arya's personality will start to drop.

### Limitations

AI is a complex field which is the reason for the Turing Test to exist. <br/>
Because of that there are limitations on Arya.

* Arya's vocabulary is off a database of words and this is character specific, therefore capitalization does change understanding
* Some phrases will simply not be understood because of the limits of the words understood by Arya.
* Because of this can crash and just not respond on some user input.

### User Input Examples

Some output stays the same no matter the personality:
* "What time is it?" will return standard time of clock <br/>

The other output will change based on how Arya feels:
* "Who am I?"
* "Who are you?"
* "I am good at _insert noun_" <br/>

Input will affect Arya's personality beyond setting it manually:
* "You are a _insert adj_"

### Inpsiration

Input parser and output creating inspired by Liza Daly's python [chat bot](https://github.com/lizadaly/brobot) fundamentals example.

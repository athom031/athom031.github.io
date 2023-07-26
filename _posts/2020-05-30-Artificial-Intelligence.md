---
layout: post
title: "Artificial Intelligence and Machine Learning: UCR CS 170"
---
#### Projects from Upper Division UCR CS Class
---

#### Project Overview

**Arya the ChatBot**

* A sleek AI interface designed to provide users with a personalized conversational experience
* Based on the way a user interacts with "her", Arya's personality can dynamically evolve
* Thus the learned personality level will adjust its engagement and responses to user prompts

<div align="center" style="display: flex; align-items: center;">
  <img src="{{{ site.url }}/assets/Files/ArtificialIntelligence/aryaWanderer.jpg" style="max-width: 50%; height: auto; margin: 0 5px;"/>
  <img src="{{ site.url }}/assets/Files/ArtificialIntelligence/aryaSoccer.png" style="max-width: 50%; height: 75%; margin: 0 5px;"/>
</div>

**Nearest Neighbor Classifier**

* A powerful machine learning model designed to classify instances based on their feature sets
* This innovative approach leverages the nearest neighbor classifier and the one-out algorithm to create accurate and efficient class models
* A model is learned based off of some starting N instances with an assigned class and a set of M features

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/80_features_3_5.png" width = "75%"/>
</div>

**8-Puzzle Problem Solver**

* Offers a search algorithm to efficiently solve the famous [8-Puzzle Problem](https://blog.goodaudience.com/solving-8-puzzle-using-a-algorithm-7b509c331288)
* This is achieved by mapping out potential paths from initial state and determining the shortest sequence of steps to achieve the goal state

<div align="center" style="display: flex; align-items: center;">
  <img src="{{ site.url }}/assets/Files/ArtificialIntelligence/nodeAnalysis.png" style="max-width: 50%; height: auto; margin: 0 5px;"/>
  <img src="{{ site.url }}/assets/Files/ArtificialIntelligence/runtime.png" style="max-width: 50%; height: 75%; margin: 0 5px;"/>
</div>

#### Technical Achievements
*

#### Impact
*

#### Links to Project
* [Arya the ChatBot](https://github.com/athom031/Artificial-Intelligence-Machine-Learning/tree/master/AryaBot)
* [Nearest Neighbor Classifier](https://github.com/athom031/Artificial-Intelligence-Machine-Learning/tree/master/FeatureSelectionNN)
* [8-Puzzle Problem Solver](https://github.com/athom031/Artificial-Intelligence-Machine-Learning/tree/master/8-Puzzle-Solver)


A collection of projects completed in *CS170 - Artificial Intelligence and Machine Learning*. <br/>

**Logic Systems**: The ability to take previous data and rules and then manipulate them to create new facts. <br/>
**Machine Learning**: An application that provides a system with the ability to "learn" from previous data. <br/>
**Search**: The process of traversing from a start state to a goal state through a set of intermediate states.

<!--                    TABLE OF CONTENTS                                   -->
### Project Table of Contents
<div style="display:flex; flex-direction:column;">
   <html>
       <a href="#arya">Logic Systems: Arya the ChatBot</a>
       <a href="#feature">Machine Learning: Nearest Neighbor Feature Selection</a>
       <a href="#puzzle">Search: 8 Puzzle Solver</a>
   </html>
</div>
<br/>

<!--                          PROJECTS                                      -->

<!--                           CHAT BOT                                     -->

<div id="arya"></div>

## Logic Systems: Arya the ChatBot

#### [Arya ChatBot Repo]



Each line, her personality 'score' is at a positive, netural, and negative level accordingly. Though the user input changes, Arya 'feels' like responding in a different way.

### Abstract

This is a simple AI interface that responds to user entries based on the conversation and personality of the AI. If the user enters positive entries, the AI personality will slowly rise. But if the user starts sending negative messages, Arya's personality will start to drop.

### Limitations

AI is a complex field which is the reason for the Turing Test to exist. <br/>
Because of that there are limitations on Arya.

* Arya's vocabulary is off a database of words and this is character specific, therefore capitalization does change understanding
* Some phrases will simply not be understood because of the limits of the words understood by Arya.
* Because of this, it can crash and just not respond to some user input.

### User Input Examples

Some output stays the same no matter the personality:
* "What time is it?" will return standard time of clock <br/>

The other output will change based on how Arya feels:
* "Who am I?"
* "Who are you?"
* "I am good at *insert noun*" <br/>

Input will affect Arya's personality beyond setting it manually:
* "You are a *insert adj*"

### Inspiration

Input parser and output creation inspired by Liza Daly's python [chat bot](https://github.com/lizadaly/brobot) fundamentals example.

<!--                           NEAREST NEIGHBOR                             -->

<div id="feature"></div>

## Machine Learning: Nearest Neighbor Feature Selection

#### [Feature Selection Repo](https://github.com/athom031/Artificial-Intelligence-Machine-Learning/tree/master/FeatureSelectionNN)

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

Though forward selection and backward selection will result in similar accurate feature subset, these subsets will not always be the same. <br/>
Forward selection will replicate the accuracy of backward selection with less features. <br/>
This makes the features picked by Backwards Selection harder to pick. <br/>
Backwards Selection also takes more time on larger datasets. <br/>
[Example](https://github.com/athom031/Artificial-Intelligence-Machine-Learning/tree/master/FeatureSelectionNN/feature_accuracy_example)

<!--                           SEARCH                                       -->

<div id="puzzle"></div>

## Search: 8 Puzzle Solver

#### [Puzzle Solver Repo](https://github.com/athom031/Artificial-Intelligence-Machine-Learning/tree/master/8-Puzzle-Solver)

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/nodeAnalysis.png"/>
</div><br/>

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/runtime.png"/>
</div><br/>

### Abstract
A python implementation of a search solution to the 8 puzzle [problem](https://blog.goodaudience.com/solving-8-puzzle-using-a-algorithm-7b509c331288). <br/>

Three methods are used to show the merit of A* search and within that, the importance of a good heuristic.<br/>
Uniform Cost Search only depends on the movement cost to determine the next move.<br/>
A* Search uses the movement cost to determine the next move but adding to that includes a heuristic function to determine the best next step. The A* search used, depends on two different heuristics.<br/>
*Misplaced Tile* checks how many tiles are where they shouldn't be. <br/>
*Manhattan Distance* checks how far each tile is from where it should be. <br/>

### Reflection

<div align="center">
<img src="{{ site.url }}/assets/Files/ArtificialIntelligence/runtime.png"/>
</div><br/>

We can see building upon the movement cost to predict the next best step, reduces the runtime and space complexity exponentially. The heuristic chosen also matters. I was surprised that the misplaced tile performed better for this example than the Manhattan distance because from theory, the Manhattan distance uses more information about the actual state. But they are very similar and might vary for other examples.




---
layout: post
title: "Audio Signal Processing: Knowles Internship"
---

#### Projects inspired by 2019 Summer Internship with [Knowles Intelligent Audio](https://www.knowles.com/)
---

#### Project Overview

**Split Script**
* Developed a split script similar to technology used in Knowles Data Collection
* Script is used in automation of training and evaluating voice command technology
* Takes single audio file and config information to then output each named utterance from test user recording
* Determines utterances based on silence measurements between each phrase
<div align="center">
   <img src="{{ site.url }}/assets/Files/AudioSignal/SplitScript.png"/>
</div>
<br>

**Audio Cutter**
* Designed a Desktop Widget to allow users to cut out unwanted ranges of audio files
* Allows for easier audio cutting than hand trimming
<div align="center">
    <img src="{{ site.url }}/assets/Files/AudioSignal/AudioCutter.png"/>
</div>
<br>

**Silence Trimmer and Audio Normalizer**
* Automates audio processing for songs within desired directory
* Takes collection of audio files to trim out silence and normalize decibel levels
by taking audio files and trimming out silence before start and end of song
<div align="center">
    <img src="{{ site.url }}/assets/Files/AudioSignal/TrimSilence.png"/>
</div>

#### Technical Achievements
* Developed proficiency in utilizing audio processing APIs, specifically Audio Segment and PyDub, enabling efficient manipulation and analysis of audio data
* Learned how to develop desktop applications with a user-friendly GUI
* Optimized company audio parsing scripts, addressing inefficiencies and removing bottlenecks, resulting in a signficant **1.3x Speedup**

#### Impact
* Projects serve as a comprehensive summary of experience gained during first technical internship
* Demonstrated a proactive approach to explore how learning could be combined with outside passions
* Further highlighted drive to continue developing software that aligns with personal interests and expanding skill sets
* Capitalized on opportunity to understand inner workings of company tooling and seeking opportunities for improvement and optimization

#### Link to Projects
* [Split Script](https://github.com/athom031/Intern-Audio-Scripts/tree/master/SplitScript)
* [Audio Cutter](https://github.com/athom031/Intern-Audio-Scripts/tree/master/AudioCutter)
* [Silence Trimmer/Audio Normalizer](https://github.com/athom031/Intern-Audio-Scripts/tree/master/TrimSilence)

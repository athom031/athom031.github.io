---
layout: post
title: "Audio Signal Processing: Intern Projects"
---

This page collects a series of projects exploring the audio space. They are inspired by the knowledge gained from my 2019 Summer Internship with [Knowles Intelligent Audio](https://www.knowles.com/).


## Split Script

Voice to command technology has become ever more present in today's devices. To test this technology, keyword utterances are required.

In my Knowles Data Collection project, I organized for 30 subjects to come into the lab and record 10 instances of 9 different keywords.

(A keyword example: "Hey Siri, what's the weather like today".)

These recordings are processed through the use of a split script. During my internship, I saw the opportunity to optimize inhouse scripts and make my own with considerable speedup due to cancelling redundant calculations.

<img src="{{ site.url }}/assets/Files/AudioSignal/SplitScript.jpg"/>

[Project Repo](https://github.com/athom031/InternAudioScripts/tree/master/SplitScript)

## Audio Cutter

Oftentimes in music I enjoy, I find segments that are undesired. Through my own use case, trimming off the beginning or ending is made easy by many different tools. However, cutting out a section from the middle brings a little more hardship. Instead of having to open up GarageBand and hand trimming the audio, concatenating them, and then exporting the audio, I built a desktop application that does it for the user automatically.

<img src="{{ site.url }}/assets/Files/AudioSignal/AudioCutter.png"/>

[Project Repo](https://github.com/athom031/InternAudioScripts/tree/master/AudioCutter)

## Trim Silence and Normalize Audio

Audio processing became a passion for me after my internship. I investigated other ways to leverage what I learned into my music editing. I found that my audio has different levels and awkward dips and pauses.

Therefore I built a script to trim off silence and normalize the audio.

<img src="{{ site.url }}/assets/Files/AudioSignal/TrimSilence.png"/>

[Project Repo](https://github.com/athom031/InternAudioScripts/tree/master/TrimSilence)

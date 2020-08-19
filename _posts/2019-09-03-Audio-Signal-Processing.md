---
layout: post
title: "Audio Signal Processing"
---

An exploration of the audio space inspired by the knowledge gained and experience from my Internship with Knowles Intelligent Audio.


## Split Script

Voice to command technology has become ever more present in today's devices. To test this technology, keyword utterances are required. 

In my Knowles Data Collection project I organized for 30 subjects to come into the lab and record 10 instances of 9 different keywords.

(A key word example: "Hey Siri, what's the weather like today".)

This audio is saved as the total file but each utterance is required to be split and saved in the proper database collection. This base split script is used to take in an audio file and find the utterances. Later naming conventions and ordering was used to determine which keyword it is and where to send it in the database.

<img src="{{ site.url }}/assets/Files/AudioSignal/SplitScript.jpg"/>

I saw an opportunity to optimize company scripts and made my own script which had a speedup due to cancelling redundant calculations.

[Check It Out!](https://github.com/athom031/SplitScript)

## Audio Cutter

During my internship this became a small passion project. 
Often times in music I enjoy, there are annoying segments whether it be instrumental or a undesired verse that irks the music listening process.

Trimming off the beginning and ending of a song is easy on iTunes but to cut out a middle section of a song causes a lot more hardship. Instead of opening up GarageBand and hand trimming the audio, concatenating them, and then exporting the audio, this python desktop application does it for you based on timestamps.

<img src="{{ site.url }}/assets/Files/AudioSignal/AudioCutter.png"/>

[Check It Out!](https://github.com/athom031/AudioCutter)

## Trim Silence

After my internship I wondered how I could apply the split script methodologies to my life.
Being a person passionate about collecting music, I found that a lot of audio have different levels and that downloaded music has awkward dips and pauses from the song.

This script trims off silence automatically and chooses which "utterance" to export based on length.
<img src="{{ site.url }}/assets/Files/AudioSignal/TrimSilence.png"/>

[Check It Out!](https://github.com/athom031/TrimSilence)




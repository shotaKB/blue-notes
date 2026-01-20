---
title: image sketch Cosmos
date: 01/20/2026
tags:
  - music
---
<iframe 
src="Audio/Assets/audio_galaxy.html" 
style="width: 100%; height: 80vh; border: none; border-radius: 8px;" 
></iframe>

##Overview
I make a compilation album every year with a number of other producers under the name [image sketch Studio](https://imagesketchstudio.bandcamp.com/). We have three official albums under our belt so I thought it would be fun to extract some audio features and create a cosmos of all our songs. The songs on the right are more dense and loud. The songs near the bottom are more melodic and as you go up they tend to have more "noises", most likely from big cymbals or snares.

Admittedly most of us make pop so the songs tend to gather around the same area, but it's still interesting to see and hear how each song relate to all of the other songs in the collection. I'm wondering if the three songs at the very top are there due to the overcompression during the mastering stage. If we get to a point where each artist have 5+ songs I might add a line connecting all of their songs to create a unique "constellation" for every artist.

##Technical Stuff
I used Librosa to extract the average normalized loudness and spectral flatness, ran mini simulations to fit each song on a X-Y plane without them overlapping anywhere, and then plotted the stars together with all of their hover text using Plotly. I also injected each star with html so that clicking on it will open a Bandcamp embed player.
---
layout: post
title: "Krazy Kitchen"
---

### UCR Senior Design Project

#### [Video Demo](https://www.youtube.com/watch?v=16-g_YCpumI)
#### [Github Repository](https://github.com/athom031/KrazyKitchen)

## Abstract

Krazy Kitchen is an online cooperative game where a group of your friends attempt to complete several recipes under chaotic situations. This is our own implementation of the Overcooked game series. Space and time is limited and completing recipes are a combination of many different tasks and ingredients. This game requires users to get, cut, cook, combine and then deliver food. The true fun comes from the pandemonium that accompanies attempting levels individually and discovering through gameplay that the only way to succeed is to work together. 

## Built With

**Unity Enginer**
* Version: [2019.3.0 Beta 3](https://unity3d.com/unity/beta/2019.3.0b3)

## Authors

* **Alex Thomas** - [Github](https://github.com/athom031)
* **Jose Garcia** - [Github](https://github.com/LadyEbony)
* **Siqi Tian** - [Github](https://github.com/SiqiT)
* **Max McKee** - [Github](https://github.com/mmckee003)
* **Chong Zuo** - [Github](https://github.com/ChongZuo)


## Game Description

### Level Components
<div align="center">

<img src="{{ site.url }}/assets/Files/KrazyKitchen/plates.png" width = "50%"/> <br/>
Cutting boards are where players can prepare specific ingredients for specific recipes. <br/>And the plates are what meals are served on.
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/trashcan.png" width = "30%" /> <br/>
Cabinets with an exclamation point over it serve as garbage cans. Putting anything on these cabinets will kill the object, allowing you to clean up your kitchen before it gets too much in disarray.
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/cookingpot.png" width = "40%" /> <br/>
Stove tops allow our chefs to cook the needed ingredients to complete their recipes. Keeping ingredients too long will cause the food to become charred and no longer servable, so watch your food!
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/ingredients.png" width = "40%"/> <br/>
Ingredients are available in this design on top of item spawning cabinets. There is no limit to how many ingredients can be spawned. Try not to drown in fish!
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/timer.png" width = "30%"/> <br/>
A timer is available on every level to show how much time is left to complete recipes. This is independent of what recipe tasks are being given to the player and instead is dependent on the level itself. Completing the required number of recipes in the level time serves as beating the level.
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/recipes.png" width = "40%"/> <br/>
In the top left corner all of the tasks are located for the players with its specific recipe. Plating and delivering a meal will delete the task and update your score in the bottom left corner.
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/delivery.png" width = "40%"/> <br/>
These special cabinets are where we can deliver play-created meals. Once plated food is put on these cabinets, they are checked to see if the recipe has been met and then the score is incremented.
<br/><br/>

</div>

### Levels

<img src="{{ site.url }}/assets/Files/KrazyKitchen/level1.png"/> <br/>

#### Level 1
In our first level we stress the importance of working together right off the bat. Players spawn in one of the two areas. If you are in the top section, you are only able to spawn and cut ingredients. These prepared ingredients can be put on the middle island section to be picked up by players in the bottom section. If you are in the bottom section, you can get the prepared ingredients, cook and plate them accordingly. The delivery of recipes are in the bottom section as well.
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/level2.png"/> <br/>

#### Level 2
In our second level we open tasks up to the players’ discretion. Through the small window in the cabinets, players can switch sides. It is important to note that ingredients are on top and the cutting board is on the bottom. This level involves a lot of transferring ingredients back and forth to complete a recipe. So although now a player can individually complete recipes, working together will still allow the most efficient system. 
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/level3.png"/> <br/>

#### Level 3
This level can prove to be the most frustrating without communication. Players can be clogged up in this claustrophobic environment and cannot rely on cabinet island transfers unlike before. The suggested gameplay for this level is to keep movement constant among teammates in a same circular direction. If players were to move clockwise, there will be no traffic congestion.  
<br/><br/>

<img src="{{ site.url }}/assets/Files/KrazyKitchen/level4.png"/> <br/>

#### Level 4
In the final level of the game, players must test their abilities learned in the previous labels. Players must move within the tight channel to get ingredients to the other side. The throw feature can be used to great effect in this level.
<br/><br/>

### Characters

<div align="center">
<img src="{{ site.url }}/assets/Files/KrazyKitchen/player.png" width = "30%"/> 
</div><br/>
When the game starts, each user is assigned the same character model. Depending on the order they connect to the server, their model will be a different color. There is no ability or task difference in the player model. Users can move their characters around and grab/drop an item. Users can also throw an item to other users in order to save more time.

### Gameplay

<div align="center">
<img src="{{ site.url }}/assets/Files/KrazyKitchen/controls.png" width = "70%"/> 
</div><br/>
After all the players join the game, the game starts. Players have to cook meals based on the recipe to get corresponding points. <br/>
Users can use:

* W, A, S, D to control the character 
* E to grab and drop items
* F to throw items. 

## Implementation

**Game Engine** - Unity
* Version: [2019.3.0 Beta 3](https://unity3d.com/unity/beta/2019.3.0b3) 

**Networking Framework** - Photon
* [Photon](https://www.photonengine.com/pun) <br/>

**Necessary Scripts**
* [UnitEntityManager](https://docs.unity3d.com/Packages/com.unity.entities@0.0/api/Unity.Entities.EntityManager.html) 
* [Interactable](https://docs.unity3d.com/540/Documentation/ScriptReference/UI.Selectable-interactable.html)

## Inspiration: 
[Overcooked](https://store.steampowered.com/app/448510/Overcooked/)- chaotic couch co-op cooking game 

---
name: "ACNH Automator"
date: "2022-10-17"
category: "Software"
description:
    short: "Automate repetitive tasks in Animal Crossing New Horizons using Python."
    full: "Automates repetitive tasks in Animal Crossing New Horizons using Python. The joycontrol library is used for emulating a Nintendo Switch controller over Bluetooth."
github: "https://github.com/artwilton/joycontrol-acnh-automator"
demo: "https://user-images.githubusercontent.com/69938486/209448850-7c3276af-3160-4889-8737-b6b62cb2f2e7.mp4"
img:
    src: ../src/media/work/anch-automator-work-card-img.jpg
    alt: "ACNH Automator Project"
tags:
    - "Python"
    - "Automation"
    - "Controller Emulation"
slug: "acnh-automator"
---

## *Tom Nook will hate you because of this one weird trick!*

ACNH Automator utilizes the [joycontrol](https://github.com/mart1nro/joycontrol) library to automate repetitive tasks in Animal Crossing New Horizons.

Joycontrol (created by [mart1nro](https://github.com/mart1nro/)) is a python based toolset that emulates a Nintendo Switch controller over Bluetooth, and I've included the full joycontrol README below.

As of now, ACNH Automator has one available automation task called ***pick_trees*** which allows you to automatically pick fruit from trees and sell the fruit at Nook’s Cranny. I hope to design more features in the future to help with things like repetitive crafting tasks.

 Once you get joycontrol working, you can run ***pick_trees*** as a joycontrol command.

## Grid Information and Examples

**ACNH Automator v1.0** assumes that your trees are spaced exactly one grid space apart from each other in the *x* and *y* direction. Options for updating this will be available in a future release. Grid space is measured in **[x,y]** and assumes that **[0,0]** is the space directly to the left of the top-left tree. The nook_grid value should be exactly 2 spaces below Nook’s Cranny to avoid running into the building by accident.

![Grid Example 1](readme_assets/grid-example-01.jpg)
![Grid Example 2](readme_assets/grid-example-02.jpg)

#

## Other recommendations

- You MUST make sure that your inventory selector (the hand icon when you’re in your inventory) is located on the first inventory space, or the selling process will not work properly.

- I also recommend clearing out your inventory of anything you don’t want to accidentally sell until you are very comfortable with this toolset.
It’s important to have Nook’s Cranny located as close as possible to your tree grid in order to make traveling to sell your fruit easier.

- I recommend separating your tree grid from the rest of the town to avoid the possibility of villagers getting in your way, I solved this by building on a cliff that is inaccessible to villagers.

- Try to only have one space available on either side of your tree grid, this will help your character “get back on track” if the automation goes awry.

Once you’ve entered your town’s data into run_controller_cli.py you can navigate your character to grid space [0,0] and move on to the next step.

#

## Emulating the controller and running “pick_trees”

ACNH Automator relies on joycontrol to run, so you’ll need to first navigate to the Change Grip/Order menu on your Nintendo Switch, run joycontrol to begin emulating a controller, and then navigate back to Animal Crossing before running the pick_trees command.

The process of starting up joycontrol is explained below, and I've included a video to show what the process will look like:

[![Joycontrol Example 1](readme_assets/joycontrol-example-01.jpg)](https://youtu.be/abelJBKkvMg "Joycontrol Example 1 - Click to Watch")

Once joycontrol is up and running and your character is at [0,0] facing the first tree, you can simply run the following command:

```
pick_trees
```

[![Joycontrol Example 2](readme_assets/joycontrol-example-02.jpg)](https://youtu.be/MC1LuzBEf-4 "Joycontrol Example 2 - Click to Watch")

#

### Based on the information you entered about your town, your character will now:

- Navigate through the grid, harvesting fruit from each tree in the x direction until it reaches the last tree in the row.

- Travel down two spaces in the y direction to proceed to the next row, and change direction accordingly.

- Stop picking trees when a threshold is met for the amount of fruit that can be safely stored in your inventory.

- Travel to Nook’s Cranny to sell all of the fruit, and travel back to the next tree that needs to be picked.

- Repeat this process until all fruit is harvested and sold.

#
Here is an example of what this process looks like in action:

[![ACNH Automator Process](readme_assets/acnh-automator-process.jpg)](https://youtu.be/vURoaECIB4M "ACNH Automator Process - Click to Watch")
Don’t spend all those bells in one place!
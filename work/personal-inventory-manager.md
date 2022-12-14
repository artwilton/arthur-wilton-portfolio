---
name: "PIM: The Personal Inventory Manager"
date: "2022-10-18"
category: "Software"
description:
    short: "Mobile app that keeps track of a user's items."
    full: "PIM is a mobile application built with React Native and Ruby on Rails. It allows users to create an inventory of items, keep track of each item's location, and add metadata to the items and their containers."
github: "https://github.com/artwilton/pim-frontend"
demo: "https://user-images.githubusercontent.com/69938486/123050076-4805de80-d3ce-11eb-8096-1c391b3d1b9d.mp4"
img:
    src: ../src/media/home/work-dev-bg.jpg
    alt: "PIM: The Personal Inventory Manager"
tags:
    - "React Native"
    - "Ruby on Rails"
    - "Mobile App"
slug: "personal-inventory-manager"
---

**PIM** is a React Native application developed as my final project for Flatiron School. It allows users to create an inventory of items, keep track of where they put those items, and add metadata to the items and their containers.

Here's a demo of PIM from the Flatiron School Science Fair:

https://user-images.githubusercontent.com/69938486/123050076-4805de80-d3ce-11eb-8096-1c391b3d1b9d.mp4

## Tech Stack

### Frontend
- React Native (test mainly using Android Studio on API level 29)
- React Navigation - https://reactnavigation.org/

#### Image and Camera Tools
- React Native Image Picker - https://github.com/react-native-image-picker/react-native-image-picker
- React Native Camera - https://github.com/react-native-camera/react-native-camera

#### Misc. UI Tools
- React Native Elements - https://reactnativeelements.com/
- react-native-picker - https://github.com/react-native-picker/picker
- react-native-snap-carousel - https://github.com/meliorence/react-native-snap-carousel

### Backend
- Rails API with PostgreSQL Database
- Active Storage for uploading and storing photos

---
This is the frontend repo, link to the backend repo is here - https://github.com/artwilton/pim-backend
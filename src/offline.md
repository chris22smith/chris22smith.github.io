---
layout: "layouts/home.njk"
title: "Offline :("
description: "You're offline but don't worry, you can still use this site."
---

You're offline right now but don't worry, any pages you've visted before will be cached so you can still access them.

<a href="/">Home</a>

<div class="dino-container">
    <img src="../img/offline-dino.webp" class="dino" alt="A pixelated dinosaur animation" height="180" width="180">
</div>

<style>
    .dino-container {

    }
    .dino {
        animation: run 2s infinite ease-out;
        block-size: 10vw;
        inline-size: 10vw;
    }

    @keyframes run {
        0% {
            transform: translateX(0) rotateY(0);
        }
        40% {
            transform: translateX(100%) rotateY(0);
        }
        50% {
            transform: translateX(100%) rotateY(180deg);
        }
        90% {
            transform: translateX(0) rotateY(180deg);
        }
        100% {
            transform: translateX(0) rotateY(0);
        }
    }
</style>

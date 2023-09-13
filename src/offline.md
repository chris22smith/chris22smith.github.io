---
layout: "layouts/home.njk"
title: "Offline :("
description: "You're offline but don't worry, you can still use this site."
---

You're offline right now but don't worry, any pages you've visted before will be cached so you can still access them.

<div class="dino-container">
    <img src="../img/offline-dino.webp" class="dino" alt="A pixelated dinosaur animation" height="180" width="180">
</div>

<style>
    .dino-container {

    }
    .dino {
        animation: run 5s infinite 2s;
        block-size: 10vw;
        inline-size: 10vw;
    }

    @keyframes run {
        0% {

        }
        40% {
            transform: translateX(min(80vw,45rem));
        }
        50% {
            transform: rotateY(180deg);
        }
        60% {
            transform: translateX(max(-80vw,-45rem));
        }
        90% {
            transform: rotateY(180deg);
        }
    }
</style>

const timeLine1 = gsap.timeline({defaults: {duration: 0.5}})
const timeLine2 = gsap.timeline({defaults: {duration: 0.5}})
const timeLine3 = gsap.timeline({defaults: {duration: 0.5}})

timeLine1
    .to('.navigation', {opacity: 1, visibility: 'visible', duration: 0})
    .to('.main', {opacity: 1, visibility: 'visible', duration: 0})
    .to('.secondary_content', {opacity: 1, visibility: 'visible', duration: 0})
    .from('.navigation', {opacity: 0, y: '-100%'})
    .from('.logo', {opacity: 0})
    .from('li', {opacity: 0, scale: 0, stagger: 0.3})

timeLine2
    .from('.img_wrap', {opacity: 0, scale: 0})
    .from('.title', {opacity: 0, x: -100})
    .from('.details p', {opacity: 0, scale: 0, y: 100 })
    .from('.details a', {opacity: 0, scale: 0 })
    .from('.aside', {opacity: 0, x: 200})
    .from('.aside h1', {opacity: 0})
    .from('.latest', {opacity: 0, scale: 0, stagger: 0.3, y: 100})

timeLine3
    .from('.small_news', {opacity: 0, y: 100, stagger: 0.3})
    .from('.information span', {opacity: 0})
    .from('.information h3', {opacity: 0})
    .from('.information p', {opacity: 0})
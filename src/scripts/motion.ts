import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.from('.reveal-hero', {
    y: 36,
    opacity: 0,
    duration: 1.1,
    stagger: 0.13,
    ease: 'power3.out',
    delay: 0.15,
  });

  gsap.to('.hero__outline', {
    xPercent: 5,
    ease: 'none',
    scrollTrigger: {
      trigger: '#top',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.from('.cast-gateway__photo', {
    y: 60,
    opacity: 0,
    rotate: 2,
    duration: 0.9,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.cast-gateway__photos',
      start: 'top 85%',
      once: true,
    },
  });

  gsap.utils.toArray<HTMLElement>('[data-depth-panel]').forEach((panel) => {
    gsap.fromTo(
      panel,
      { yPercent: 4 },
      {
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: panel.closest('section'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('.reveal-item').forEach((item) => {
    gsap.from(item, {
      y: 42,
      opacity: 0,
      duration: 0.95,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        once: true,
      },
    });
  });
}

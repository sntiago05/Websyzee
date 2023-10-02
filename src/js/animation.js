let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    //  markers:true,
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});
tl.to(
    "#top",
    {
      top: "-50%",
    },
    "a"
  )
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "a"
  )
  .to(
    "#top-h2",
    {
      top: "60%",
    },
    "a"
  )
  .to(
    "#bottom-h2",
    {
      bottom: "-30%",
    },
    "a"
  )
  .to(
    "#center-h2",
    {
      top: "-30%",
    },
    "a"
  )
  .to(".content", {
    delay: -0.2,
    marginTop: "0%",
  });

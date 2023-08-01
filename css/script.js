document.getScroll = function () {
   if (window.pageYOffset != undefined) {
      return [pageXOffset, pageYOffset];
   } else {
      var sx,
         sy,
         d = document,
         r = d.documentElement,
         b = d.body;
      sx = r.scrollLeft || b.scrollLeft || 0;
      sy = r.scrollTop || b.scrollTop || 0;
      return [sx, sy];
   }
};
document.addEventListener("scroll", () => {
   pos = document.getScroll();
   min = 0;
   max = 1117;
   normal = pos[1] / (max - min);
   end = `${normal * 1 * 100}%`;
   mid = `${normal * 0.35 * 100}%`;
   document.querySelector(":root").style.setProperty("--end", end);
   document.querySelector(":root").style.setProperty("--mid", mid);
});

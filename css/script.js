document.addEventListener("DOMContentLoaded", function () {
   const menu_btn = document.querySelector(".hamburger");
   const mobile_menu = document.querySelector(".mobile_nav");

   menu_btn.addEventListener("click", function () {
      menu_btn.classList.toggle("is_active");
      mobile_menu.classList.toggle("is_active");
   });

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
});

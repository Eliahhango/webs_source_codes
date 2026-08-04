// ===============Latest ===========================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwLatest = document.querySelector(".tf-swiper-latest");
  if (tfSwLatest) {
    const preview = tfSwLatest.dataset.preview;
    const tablet = tfSwLatest.dataset.tablet;
    const mobile = tfSwLatest.dataset.mobile;
    const mobileSm = tfSwLatest.dataset.mobileSm;
    const spacingLg = tfSwLatest.dataset.spaceLg;
    const spacingMd = tfSwLatest.dataset.spaceMd;
    const spacing = tfSwLatest.dataset.space;

    const swiper = new Swiper(".tf-swiper-latest", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      pagination: {
        el: ".sw-pagination-latest",
        clickable: true,
      },
      navigation: {
        clickable: true,
        nextEl: ".nav-prev-latest",
        prevEl: ".nav-next-latest",
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});
// =============== Hero Swiper ===========================
document.addEventListener("DOMContentLoaded", () => {
  const heroSwiperEl = document.querySelector(".mySwiper");
  const indicatorEl = document.querySelector(".slide-number");

  if (heroSwiperEl) {
    const preview = parseInt(heroSwiperEl.dataset.preview) || 1;
    const autoplay = heroSwiperEl.dataset.autoplay === "true";
    const loop = heroSwiperEl.dataset.loop === "true";
    const speed = parseInt(heroSwiperEl.dataset.speed) || 1000;

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: preview,
      spaceBetween: 0,
      loop: loop,
      speed: speed,
      autoplay: autoplay
        ? {
            delay: 3000,
            disableOnInteraction: false,
          }
        : false,
      navigation: {
        nextEl: ".flex-next",
        prevEl: ".flex-prev",
      },
      simulateTouch: false,
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: { crossFade: true },

      on: {
        init: function () {
          updateSlideIndicator(this);
        },
        slideChange: function () {
          updateSlideIndicator(this);
        },
      },
    });

    heroSwiperEl.addEventListener("mouseenter", () => {
      swiper.autoplay?.stop();
    });

    heroSwiperEl.addEventListener("mouseleave", () => {
      swiper.autoplay?.start();
    });
    function updateSlideIndicator(swiperInstance) {
      if (!indicatorEl) return;
      const current = swiperInstance.realIndex + 1;
      indicatorEl.textContent = `${current} / 3`;
    }
  }
});
// =============== Testimonial =============================
document.addEventListener("DOMContentLoaded", function () {
  const testimonialEl = document.querySelector(".tf-sw-testimonial");

  if (testimonialEl) {
    const preview = testimonialEl.dataset.preview || 1;
    const tablet = testimonialEl.dataset.tablet || 1;
    const mobile = testimonialEl.dataset.mobile || 1;
    const mobileSm = testimonialEl.dataset.mobileSm || 1;

    const spacingLg = testimonialEl.dataset.spaceLg || 0;
    const spacingMd = testimonialEl.dataset.spaceMd || 0;
    const spacing = testimonialEl.dataset.space || 0;

    const swTestimonial = new Swiper(".tf-sw-testimonial", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      speed: 1000,
      loop: false,

      navigation: {
        clickable: true,
        nextEl: ".flex-next",
        prevEl: ".flex-prev",
      },

      pagination: {
        el: ".sw-pagination-tes",
        clickable: true,
      },

      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1440: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});
// =================Mobile===========================
document.addEventListener("DOMContentLoaded", function () {
  const tfSwMobile = document.querySelector(".tf-sw-mobile");
  if (tfSwMobile) {
    let swiperMb;
    const screenWidth = tfSwMobile.dataset.screen;

    function initSwiperMb() {
      if (window.matchMedia(`(max-width: ${screenWidth}px)`).matches) {
        if (!swiperMb) {
          const preview = parseInt(tfSwMobile.dataset.preview, 10) || 1;
          const spacing = parseInt(tfSwMobile.dataset.space, 10) || 0;
          swiperMb = new Swiper(".tf-sw-mobile", {
            slidesPerView: preview,
            spaceBetween: spacing,
            speed: 1000,
            pagination: {
              el: ".sw-pagination-topchose",
              clickable: true,
            },
            navigation: {
              nextEl: ".nav-prev",
              prevEl: ".nav-next",
              clickable: true,
            },
          });
        }
      } else {
        if (swiperMb) {
          swiperMb.destroy(true, true);
          swiperMb = null;
          const wrapper = tfSwMobile.querySelector(".swiper-wrapper");
          const slides = tfSwMobile.querySelectorAll(".swiper-slide");
          if (wrapper) wrapper.removeAttribute("style");
          slides.forEach((slide) => slide.removeAttribute("style"));
        }
      }
    }

    initSwiperMb();
    window.addEventListener("resize", initSwiperMb);
  }
});
// ===================Find Wish========================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwLatest = document.querySelector(".tf-tour-showcase");
  if (!tfSwLatest) return;
  const preview = parseFloat(tfSwLatest.dataset.preview);
  const tablet = parseInt(tfSwLatest.dataset.tablet);
  const mobile = parseInt(tfSwLatest.dataset.mobile);
  const mobileSm = parseInt(tfSwLatest.dataset.mobileSm);
  const spacingLg = parseInt(tfSwLatest.dataset.spaceLg);
  const spacingMd = parseInt(tfSwLatest.dataset.spaceMd);
  const spacing = parseInt(tfSwLatest.dataset.space);

  const swiper = new Swiper(tfSwLatest, {
    slidesPerView: mobile,
    spaceBetween: spacing,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".sw-pagination-wish",
      clickable: true,
    },

    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
      },
    },
  });
});
// ==================Type==============================
document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".tf-sw-types");

  if (swiperEl) {
    const preview = swiperEl.dataset.preview;
    const desktopSm = swiperEl.dataset.desktopSm;
    const tablet = swiperEl.dataset.tablet;
    const mobile = swiperEl.dataset.mobile;
    const mobileSm = swiperEl.dataset.mobileSm;

    const spacing = swiperEl.dataset.space;
    const spacingMd = swiperEl.dataset.spaceMd;
    const spacingXl = swiperEl.dataset.spaceXl;
    const spacingLg = swiperEl.dataset.spaceLg;

    new Swiper(".tf-sw-types", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      speed: 1000,
      navigation: {
        clickable: true,
        nextEl: ".nav-prev",
        prevEl: ".nav-next",
      },
      pagination: {
        el: ".sw-pagination-types",
        clickable: true,
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacingMd),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1024: {
          slidesPerView: parseInt(desktopSm),
          spaceBetween: parseInt(spacingXl),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});
// ================= Explore===========================
document.addEventListener("DOMContentLoaded", () => {
  const swiperElements = document.querySelectorAll(".tf-sw-location");

  swiperElements.forEach((swiperEl, index) => {
    const preview = parseInt(swiperEl.dataset.preview);
    const tablet = parseInt(swiperEl.dataset.tablet);
    const mobile = parseInt(swiperEl.dataset.mobile);
    const mobileSm = parseInt(swiperEl.dataset.mobileSm);
    const spacing = parseInt(swiperEl.dataset.space);
    const spacingMd = parseInt(swiperEl.dataset.spaceMd);
    const spacingLg = parseInt(swiperEl.dataset.spaceLg);
    const paginationEl = swiperEl.querySelector(".sw-pagination-location");
    const nextEl = swiperEl.querySelector(".nav-next-location");
    const prevEl = swiperEl.querySelector(".nav-prev-location");

    new Swiper(swiperEl, {
      slidesPerView: mobile,
      spaceBetween: spacing,
      speed: 1000,
      pagination: {
        el: paginationEl,
        clickable: true,
      },
      navigation: {
        clickable: true,
        nextEl: nextEl,
        prevEl: prevEl,
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacingMd),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  });
});
// ================ Cover=============================
document.addEventListener("DOMContentLoaded", () => {
  const coverflowEls = document.querySelectorAll(".tf-find-tour");

  coverflowEls.forEach((swiperEl) => {
    new Swiper(swiperEl, {
      effect: "coverflow",
      grabCursor: true,
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      initialSlide: 2,
      watchSlidesProgress: true,
      spaceBetween: 0,
      speed: 1000,
      navigation: {
        clickable: true,
        nextEl: ".flex-next-findtour",
        prevEl: ".flex-prev-findtour",
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
    });
  });
});
// =============== Rating Card & Testimonial Sync =============================
document.addEventListener("DOMContentLoaded", () => {
  // Images
  const swiperThumbs = new Swiper(".tf-rating-card", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      rotate: false,
      perSlideOffset: 10,
      perSlideScale: 0.8,
      slideShadows: false,
    },
    speed: 1000,
    breakpoints: {
      0: {
        // Mobile
        cardsEffect: {
          perSlideOffset: 0,
        },
      },
      576: {
        // Desktop
        cardsEffect: {
          perSlideOffset: 10,
        },
      },
    },
  });

  // =============== Testimonial  =============================
  const reviewBox = document.querySelector(".tf-review-box");

  if (reviewBox) {
    const slides = document.querySelectorAll(".tf-review-box .card-review");
    const avatars = Array.from(slides).map((slide) => slide.dataset.avatar);

    // Content
    const swTestimonial = new Swiper(".tf-review-box", {
      slidesPerView: 1,
      spaceBetween: 40,
      speed: 1000,
      pagination: {
        el: ".avatar-navigation",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">
                    <img src="${avatars[index]}" alt="Avatar ${index + 1}" />
                  </span>`;
        },
      },
      loop: false,
      // Sync thủ công
      on: {
        slideChange: function () {
          swiperThumbs.slideTo(this.activeIndex);
        },
      },
    });

    // Sync ngược lại
    swiperThumbs.on("slideChange", function () {
      swTestimonial.slideTo(this.activeIndex);
    });
  }
});
// ===============Device==============================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwDevice = document.querySelector(".tf-swiper-device");
  if (tfSwDevice) {
    const preview = parseInt(tfSwDevice.dataset.preview);
    const tablet = parseInt(tfSwDevice.dataset.tablet);
    const mobile = parseInt(tfSwDevice.dataset.mobile);

    const spacing = parseInt(tfSwDevice.dataset.space);
    const spacingMd = parseInt(tfSwDevice.dataset.spaceMd);
    const spacingLg = parseInt(tfSwDevice.dataset.spaceLg);

    new Swiper(".tf-swiper-device", {
      slidesPerView: mobile,
      spaceBetween: spacing,
      watchSlidesProgress: true,
      loop: true,
      pagination: {
        el: ".sw-pagination-device",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: tablet,
          spaceBetween: spacingMd,
        },
        1200: {
          slidesPerView: preview,
          spaceBetween: spacingLg,
        },
      },
    });
  }
});
// =========== TOUR SWIPER ==================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwTour = document.querySelector(".tf-swiper-tour");
  if (tfSwTour) {
    const preview = tfSwTour.dataset.preview;
    const tablet = tfSwTour.dataset.tablet;
    const mobile = tfSwTour.dataset.mobile;
    const mobileSm = tfSwTour.dataset.mobileSm;
    const spacingLg = tfSwTour.dataset.spaceLg;
    const spacingMd = tfSwTour.dataset.spaceMd;
    const spacing = tfSwTour.dataset.space;

    const swiper = new Swiper(".tf-swiper-tour", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),

      pagination: {
        el: ".sw-pagination-tour",
        clickable: true,
      },
      navigation: {
        nextEl: ".nav-next-tour",
        prevEl: ".nav-prev-tour",
      },
      loop: true,
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});
// =========== DESTINATION (Gallery) ==================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwDes = document.querySelector(".tf-sw-destination");
  if (tfSwDes) {
    const spacingLg = tfSwDes.dataset.spaceLg;
    const spacingMd = tfSwDes.dataset.spaceMd;
    const spacing = tfSwDes.dataset.space;

    const swiper = new Swiper(".tf-sw-destination", {
      slidesPerView: "auto",
      spaceBetween: parseInt(spacingLg),
      pagination: {
        el: ".sw-pagination-destination",
        clickable: true,
      },
      navigation: {
        nextEl: ".nav-next-destination",
        prevEl: ".nav-prev-destination",
      },
      loop: true,
      centeredSlides: false,
      speed: 1000,
      breakpoints: {
        575: {
          spaceBetween: parseInt(spacing),
        },
        768: {
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          spaceBetween: parseInt(spacingLg),
        },
      },

      on: {
        init: function () {
          updateCurrentItem(this);
        },
        slideChange: function () {
          updateCurrentItem(this);
        },
      },
    });

    function updateCurrentItem(swiper) {
      const slides = swiper.slides;
      slides.forEach((slide) => slide.classList.remove("current-item"));

      const nextIndex = swiper.activeIndex + 1;
      if (slides[nextIndex]) {
        slides[nextIndex].classList.add("current-item");
      }
    }
  }
});
// ============Hero Title=====================
document.addEventListener("DOMContentLoaded", function () {
  const heroSwiper = new Swiper(".tf-sw-hero", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: false,
    speed: 1000,
    navigation: {
      nextEl: ".nav-next-hero-title",
      prevEl: ".nav-prev-hero-title",
    },

    pagination: {
      el: ".sw-pagination-hero-title",
      clickable: true,
    },
  });
});
// ============ Team Member=====================
document.addEventListener("DOMContentLoaded", function () {
  const swiperTeam = document.querySelector(".tf-teamMember");
  if (swiperTeam) {
    const preview = swiperTeam.dataset.preview;
    const tablet = swiperTeam.dataset.tablet;
    const mobile = swiperTeam.dataset.mobile;
    const spacing = swiperTeam.dataset.space;

    new Swiper(".tf-teamMember", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),

      speed: 1000,
      pagination: {
        el: ".sw-pagination-teamMember",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacing),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacing),
        },
      },
    });
  }
});
// ============ Partner=====================
document.addEventListener("DOMContentLoaded", function () {
  const partnerEl = document.querySelector(".tf-sw-partners");
  if (!partnerEl) return;

  // Lấy data-attribute
  const preview = partnerEl.dataset.preview;
  const tablet = partnerEl.dataset.tablet;
  const mobile = partnerEl.dataset.mobile;
  const mobileSm = partnerEl.dataset.mobileSm;

  const spacing = partnerEl.dataset.space;
  const spacingMd = partnerEl.dataset.spaceMd;
  const spacingLg = partnerEl.dataset.spaceLg;

  // Init Swiper
  const swiper = new Swiper(".tf-sw-partners", {
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    freeMode: true,
    slidesPerView: mobile,
    spaceBetween: spacing,
    loop: true,
    speed: 3000,
    navigation: {
      nextEl: ".nav-prev-partner",
      prevEl: ".nav-next-partner",
    },
    pagination: {
      el: ".sw-pagination-partner",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
      },
    },
  });

  // Hover pause autoplay
  partnerEl.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  partnerEl.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});

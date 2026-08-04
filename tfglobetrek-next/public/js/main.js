/**
  * preloadRemove
  * backToTopProgress
  * breadcrumbDynamic
  * handleHeaderScroll
  * autoPopupInit
  * mobileMenuToggle
  * mobileSubmenuLevel1
  * mobileSubmenuLevel2
  * activeMenu
  * wishlistToggle
  * filterWishlist
  * likeUnlike
  * setActiveMenu
  * formSearchSubmit
  * initRangeSlider
  * peopleTourWidget
*/

(function ($) {
  "use strict";

  var preloadRemove = function () {
    var $preload = $('.preload');

    setTimeout(function () {
        $preload.css({
            transition: 'opacity 0.4s ease',
            opacity: '0'
        });

        setTimeout(function () {
            $preload.remove();
        }, 400);
    }, 400);
  };

  var backToTopProgress = function () {
    var $gotop = $("#backtotop");
    var $border = $(".border-progress");

    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var scrollPercent = (scrollTop / docHeight) * 100;
        var borderAngle = (scrollPercent / 100) * 360;

        $border.css("--progress-angle", borderAngle + "deg");

        if (scrollTop > 100) {
            $gotop.addClass("show");
        } else {
            $gotop.removeClass("show");
        }
    });

    $gotop.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
  };

  var breadcrumbDynamic = function () {
    var $breadcrumbContainers = $(".breadcrumb-dynamic");
    if (!$breadcrumbContainers.length) return;

    var path = window.location.pathname;
    var parts = path.split("/").filter(Boolean);

    var capitalizeWords = function (str) {
        return str
            .split(" ")
            .map(function (w) {
                return w.charAt(0).toUpperCase() + w.slice(1);
            })
            .join(" ");
    };

    var breadcrumbHTML = '<a class="breadcrumb-item" href="index.html">Home</a>';

    $.each(parts, function (index, part) {
        var isLast = index === parts.length - 1;
        var name = capitalizeWords(part.replace(".html", "").replace(/-/g, " "));

        if (!isLast) {
            breadcrumbHTML += '<div class="breadcrumb-item dot"><span class="icon-CaretRight"></span></div>';
            breadcrumbHTML += '<a class="breadcrumb-item" href="' + part + '">' + name + "</a>";
        } else {
            breadcrumbHTML += '<div class="breadcrumb-item dot"><span class="icon-CaretRight"></span></div>';
            breadcrumbHTML += '<div class="breadcrumb-item current">' + name + "</div>";
        }
    });

    $breadcrumbContainers.each(function () {
        $(this).html(breadcrumbHTML);
    });
  };

  var handleHeaderScroll = function () {
    $(window).on("scroll", function () {
        var $header = $("#header");

        if ($(window).scrollTop() > 50) {
            $header.addClass("scrolled");
        } else {
            $header.removeClass("scrolled");
        }
    });
  };

  var autoPopupInit = function () {
    var $autoPopupEl = $(".auto-popup");
    if (!$autoPopupEl.length) return;

    var pageKey = "autoPopupHidden_" + window.location.pathname;
    var showPopup = sessionStorage.getItem(pageKey);

    if (showPopup !== "true") {
        setTimeout(function () {
            var modal = new bootstrap.Modal($autoPopupEl[0]);
            modal.show();
        }, 3000);
    }

    var $hideBtn = $(".close-modal");
    if ($hideBtn.length) {
        $hideBtn.on("click", function () {
            sessionStorage.setItem(pageKey, "true");
        });
    }
  };

  var mobileMenuToggle = function () {
    var $toggleBtn = $(".toggle-mobile");
    var $menu = $(".mobile-menu");
    var $overlay = $(".overlay");
    var $closeBtn = $(".close-btn");

    if ($toggleBtn.length && $menu.length && $overlay.length && $closeBtn.length) {
        $toggleBtn.on("click", function () {
            $menu.addClass("active");
            $overlay.addClass("active");
            $closeBtn.addClass("active");
        });

        $overlay.add($closeBtn).on("click", function () {
            $menu.removeClass("active");
            $overlay.removeClass("active");
            $closeBtn.removeClass("active");
        });
    }
  };

  var mobileSubmenuLevel1 = function () {
      $(".mobile-dropdown").on("click", function (e) {
          e.preventDefault();

          var $parent = $(this).parent();
          var $subMenu = $parent.find(".mb-sub-menu").first();

          if ($subMenu.length) {
              $(".nav-item.active").each(function () {
                  if (!$(this).is($parent)) {
                      $(this).removeClass("active");
                  }
              });

              $parent.toggleClass("active");
          }
      });
  };

  var mobileSubmenuLevel2 = function () {
      $(".sub-link.has-sub").on("click", function (e) {
          e.preventDefault();

          var $parent = $(this).closest(".sub-item");
          var $subSubMenu = $parent.find(".mb-sub-sub-menu").first();

          if ($subSubMenu.length) {
              $parent.closest(".mb-sub-menu").find(".sub-item.open").each(function () {
                  if (!$(this).is($parent)) {
                      $(this).removeClass("open");
                      $(this).find(".mb-sub-sub-menu").first().css("display", "none");
                  }
              });

              var isOpen = $parent.toggleClass("open").hasClass("open");
              $subSubMenu.css("display", isOpen ? "flex" : "none");
          }
      });
  };

  var activeMenu = function () {
    var list = $(".toolbar-item");

    list.on("click", function () {
        list.removeClass("active");
        $(this).addClass("active");
    });
  };

  var wishlistToggle = function () {
      var wishlistBtns = $(".btn-wished");

      wishlistBtns.on("click", function () {
          $(this).toggleClass("active");

          setTimeout(function () {
              filterWishlist();
          }, 300);
      });
  };

  var filterWishlist = function () {
      var wishlistContainer = $(".tf-wishlist");
      var emptyWishlist = $("#empty-wishlist");

      if (!wishlistContainer.length) return;

      var items = wishlistContainer.find(".item");
      var hasActive = false;

      items.each(function () {
          var item = $(this);
          var btnWish = item.find(".btn-wished.active");

          if (!btnWish.length) {
              item.remove();
          } else {
              hasActive = true;
          }
      });

      if (!hasActive) {
          wishlistContainer.hide();
          if (emptyWishlist.length) emptyWishlist.show();
      } else {
          wishlistContainer.show();
          if (emptyWishlist.length) emptyWishlist.hide();
      }
  };

  var likeUnlike = function () {
      var actions = $(".action");

      actions.each(function () {
          var action = $(this);
          var likeBtn = action.find(".like-btn");
          var unlikeBtn = action.find(".unlike-btn");

          if (!likeBtn.length || !unlikeBtn.length) return;

          likeBtn.on("click", function () {
              likeBtn.toggleClass("active");

              if (likeBtn.hasClass("active")) {
                  unlikeBtn.removeClass("active");
              }
          });

          unlikeBtn.on("click", function () {
              unlikeBtn.toggleClass("active");

              if (unlikeBtn.hasClass("active")) {
                  likeBtn.removeClass("active");
              }
          });
      });
  };

  var setActiveMenu = function () {
    var $navLinks = $('.menu-nav .nav-link, .sub-menu a, .mega-menu a');

    $navLinks.removeClass('active');
    $('.menu-item').removeClass('active');

    var currentPath = window.location.pathname.split('/').pop() || 'index.html';

    $navLinks.each(function () {
        var $link = $(this);
        var href = ($link.attr('href') || '').split('/').pop() || 'index.html';

        if (href === currentPath) {
            $link.addClass('active');

            var $parentMenu = $link.closest('.menu-item');
            if ($parentMenu.length) {
                $parentMenu.addClass('active');
            }
        }
    });
  };

    const TOUR_CATALOG = {
    "cultural-immersion-in-zanzibar-s-temples-and-villages": { title: "Cultural Immersion in Zanzibar's Temples and Villages", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "skyline-serenity-nyerere-s-urban-retreat": { title: "Skyline Serenity: Nyerere's Urban Retreat", place: "Nyerere National Park, Tanzania", adult: 260, children: 130 },
    "serengeti-national-park-safari-and-history-tour": { title: "Serengeti National Park Safari and History Tour", place: "Serengeti National Park, Tanzania", adult: 380, children: 190 },
    "mnemba-island-marine-park-tour": { title: "Mnemba Island Marine Park Tour", place: "Mnemba Island, Zanzibar, Tanzania", adult: 130, children: 65 },
    "lake-manyara-tree-climbing-lions-safari": { title: "Lake Manyara Tree-Climbing Lions Safari", place: "Lake Manyara National Park, Tanzania", adult: 150, children: 75 },
    "serengeti-wildlife-and-migration-trails": { title: "Serengeti: Wildlife and Migration Trails", place: "Serengeti National Park, Tanzania", adult: 350, children: 175 },
    "nyerere-wildlife-and-iconic-river-safaris": { title: "Nyerere: Wildlife and Iconic River Safaris", place: "Nyerere National Park, Tanzania", adult: 280, children: 140 },
    "jozani-forest-spice-farm-tour": { title: "Jozani Forest & Spice Farm Tour", place: "Jozani Forest, Zanzibar, Tanzania", adult: 75, children: 37 },
    "mnemba-island-dhow-sunset-cruise": { title: "Mnemba Island Dhow Sunset Cruise", place: "Mnemba Island, Zanzibar, Tanzania", adult: 95, children: 47 },
    "arusha-city-highlights-and-maasai-market": { title: "Arusha: City Highlights and Maasai Market", place: "Arusha, Tanzania", adult: 85, children: 42 },
    "zanzibar-vibrant-streets-and-sunset-views": { title: "Zanzibar: Vibrant Streets and Sunset Views", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "stone-town-historic-architecture-and-beach-bliss": { title: "Stone Town: Historic Architecture and Beach Bliss", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "serengeti-balloon-safari-experience": { title: "Serengeti Balloon Safari Experience", place: "Serengeti National Park, Tanzania", adult: 550, children: 300 },
    "zanzibar-beaches-and-stone-town-tour": { title: "Zanzibar Beaches and Stone Town Tour", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "spice-farm-stone-town-day-tour": { title: "Spice Farm & Stone Town Day Tour", place: "Stone Town, Zanzibar, Tanzania", adult: 80, children: 40 },
    "stone-town-heritage-walking-tour": { title: "Stone Town Heritage Walking Tour", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "discover-the-wonders-of-zanzibar": { title: "Discover the Wonders of Zanzibar", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "adventure-in-lake-manyara": { title: "Adventure in Lake Manyara", place: "Lake Manyara National Park, Tanzania", adult: 140, children: 70 },
    "selous-game-reserve-exploration": { title: "Selous Game Reserve Exploration", place: "Selous (Nyerere) National Park, Tanzania", adult: 240, children: 120 },
    "serengeti-highlights-safari": { title: "Serengeti Highlights Safari", place: "Serengeti National Park, Tanzania", adult: 320, children: 160 },
    "romantic-stone-town-getaway": { title: "Romantic Stone Town Getaway", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "serengeti-adventure-safari": { title: "Serengeti Adventure Safari", place: "Serengeti National Park, Tanzania", adult: 480, children: 240 },
    "discover-lake-manyara-highlights": { title: "Discover Lake Manyara Highlights", place: "Lake Manyara National Park, Tanzania", adult: 140, children: 70 },
    "tanzania-safari-adventure-tour": { title: "Tanzania Safari Adventure Tour", place: "Northern Tanzania, Tanzania", adult: 260, children: 130 },
    "nyerere-national-park-safari": { title: "Nyerere National Park Safari", place: "Nyerere National Park, Tanzania", adult: 260, children: 130 },
    "serengeti-national-park-safari": { title: "Serengeti National Park Safari", place: "Serengeti National Park, Tanzania", adult: 420, children: 210 },
    "mnemba-island-excursion": { title: "Mnemba Island Excursion", place: "Mnemba Island, Zanzibar, Tanzania", adult: 110, children: 55 },
    "jozani-forest-cultural-tour": { title: "Jozani Forest Cultural Tour", place: "Jozani Forest, Zanzibar, Tanzania", adult: 60, children: 30 },
    "arusha-city-walk": { title: "Arusha City Walk", place: "Arusha, Tanzania", adult: 70, children: 35 },
    "stone-town-discovery-tour": { title: "Stone Town Discovery Tour", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "art-and-tradition-exploring-zanzibar-s-cultural-scene": { title: "Art and tradition: Exploring Zanzibar's cultural scene", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "mikumi-day-trip-safari": { title: "Mikumi Day Trip Safari", place: "Mikumi National Park, Tanzania", adult: 95, children: 47 },
    "tarangire-ngorongoro-2-day-safari": { title: "Tarangire & Ngorongoro 2-Day Safari", place: "Tarangire & Ngorongoro, Tanzania", adult: 320, children: 160 },
    "serengeti-great-migration-safari": { title: "Serengeti Great Migration Safari", place: "Serengeti National Park, Tanzania", adult: 950, children: 475 },
    "mnemba-island-royal-retreat": { title: "Mnemba Island Royal Retreat", place: "Mnemba Island, Zanzibar, Tanzania", adult: 240, children: 120 },
    "jozani-forest-guided-walk": { title: "Jozani Forest Guided Walk", place: "Jozani Forest, Zanzibar, Tanzania", adult: 55, children: 27 },
    "7-days-discover-northern-tanzania-safari": { title: "7 Days Discover Northern Tanzania Safari", place: "Northern Tanzania Safari Circuit, Tanzania", adult: 1850, children: 925 },
    "stone-town-markets-and-heritage-in-zanzibar": { title: "Stone Town: Markets and Heritage in Zanzibar", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "tarangire-national-park-safari": { title: "Tarangire National Park Safari", place: "Tarangire National Park, Tanzania", adult: 150, children: 75 },
    "lake-manyara-maasai-village-safari": { title: "Lake Manyara & Maasai Village Safari", place: "Lake Manyara National Park, Tanzania", adult: 160, children: 80 },
    "nyerere-national-park-boat-safari": { title: "Nyerere National Park Boat Safari", place: "Nyerere National Park, Tanzania", adult: 200, children: 100 },
    "cultural-immersion-spice-and-traditions-in-zanzibar": { title: "Cultural Immersion: Spice and Traditions in Zanzibar", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "tropical-paradise-beach-bliss-in-zanzibar": { title: "Tropical Paradise: Beach Bliss in Zanzibar", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "kilimanjaro-climb-7-days-via-rongai-route": { title: "Kilimanjaro Climb: 7 Days via Rongai Route", place: "Mount Kilimanjaro, Tanzania", adult: 2100, children: 1400 },
    "safari-blue-dhow-sailing-adventure-in-zanzibar": { title: "Safari Blue: Dhow Sailing Adventure in Zanzibar", place: "Zanzibar Island, Tanzania", adult: 110, children: 55 },
    "mystical-stone-town-spiritual-journeys-in-zanzibar": { title: "Mystical Stone Town: Spiritual Journeys in Zanzibar", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "lake-manyara-starlit-camping-safari": { title: "Lake Manyara Starlit Camping Safari", place: "Lake Manyara National Park, Tanzania", adult: 220, children: 110 },
    "ngorongoro-crater-day-tour": { title: "Ngorongoro Crater Day Tour", place: "Ngorongoro Crater, Tanzania", adult: 180, children: 90 },
    "stone-town-historic-walking-tour": { title: "Stone Town Historic Walking Tour", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "stone-town-palace-secrets-tour": { title: "Stone Town Palace Secrets Tour", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "stone-town-icons-historic-and-modern-fusion": { title: "Stone Town Icons: Historic and Modern Fusion", place: "Zanzibar Island, Tanzania", adult: 75, children: 37 },
    "tarangire-day-safari": { title: "Tarangire Day Safari", place: "Tarangire National Park, Tanzania", adult: 95, children: 47 },
  };

  const CALENDAR_DATES = [
    "2026-08-01", "2026-08-04", "2026-08-06", "2026-08-10", "2026-08-13", "2026-08-15", "2026-08-18", "2026-08-22",
    "2026-08-24", "2026-08-27", "2026-08-30", "2026-09-02", "2026-09-04", "2026-09-08", "2026-09-11", "2026-09-13",
    "2026-09-16", "2026-09-20", "2026-09-22", "2026-09-25", "2026-09-28", "2026-10-01", "2026-10-03", "2026-10-07",
    "2026-10-10", "2026-10-12", "2026-10-15", "2026-10-19", "2026-10-21", "2026-10-24", "2026-10-27", "2026-10-30",
    "2026-11-01", "2026-11-05", "2026-11-08", "2026-11-10", "2026-11-13", "2026-11-17", "2026-11-19", "2026-11-22",
    "2026-11-25", "2026-11-28", "2026-11-30", "2026-12-04", "2026-12-07", "2026-12-09", "2026-12-12", "2026-12-16",
    "2026-12-18", "2026-12-21", "2026-12-24", "2026-12-27", "2026-12-29", "2027-01-02", "2027-01-05", "2027-01-07",
    "2027-01-10", "2027-01-14", "2027-01-16", "2027-01-19", "2027-01-22", "2027-01-25", "2027-01-27", "2027-01-31",
    "2027-02-03", "2027-02-05", "2027-02-08", "2027-02-12", "2027-02-14", "2027-02-17", "2027-02-20", "2027-02-23",
    "2027-02-25", "2027-03-01", "2027-03-04", "2027-03-06", "2027-03-09", "2027-03-13", "2027-03-15", "2027-03-18",
    "2027-03-21", "2027-03-24", "2027-03-26", "2027-03-30", "2027-04-02", "2027-04-04", "2027-04-07", "2027-04-11",
    "2027-04-13", "2027-04-16", "2027-04-19", "2027-04-22", "2027-04-24", "2027-04-28", "2027-05-01", "2027-05-03",
    "2027-05-06", "2027-05-10", "2027-05-12", "2027-05-15", "2027-05-18", "2027-05-21", "2027-05-23", "2027-05-27",
    "2027-05-30", "2027-06-01", "2027-06-04", "2027-06-08", "2027-06-10", "2027-06-13", "2027-06-16", "2027-06-19",
    "2027-06-21", "2027-06-25", "2027-06-28", "2027-06-30", "2027-07-03", "2027-07-07", "2027-07-09", "2027-07-12",
    "2027-07-15", "2027-07-18", "2027-07-20", "2027-07-24", "2027-07-27", "2027-07-29",
  ];

  function buildCalendar(adultBase, childBase) {
    const seed = [1, 0.8, 1.2, 0.9, 1.1, 0.85, 1.25, 0.75, 1.15, 0.95];
    const timesPool = [
      ["7:00"],
      ["10:00", "15:00", "8:00"],
      ["9:00"],
      ["13:00", "8:00"],
      ["11:00", "12:00", "13:00", "8:00"],
      ["10:00", "12:00", "15:00"],
      ["14:00", "9:00"],
      ["11:00", "8:00", "9:00"],
      ["12:00", "14:00", "8:00"],
      ["10:00", "15:00", "7:00", "8:00"],
    ];
    const out = {};
    CALENDAR_DATES.forEach(function (d, i) {
      const k = seed[i % seed.length];
      const adult = Math.round(adultBase * k);
      const children = Math.round(childBase * k);
      out[d] = { times: timesPool[i % timesPool.length], prices: { adult, children } };
    });
    return out;
  }

  const DEFAULT_REVIEWS = [
    { location: 5, rooms: 4, amenities: 5, price: 4, services: 5, food: 4 },
    { location: 4, rooms: 4, amenities: 4, price: 3, services: 4, food: 3 },
    { location: 5, rooms: 5, amenities: 5, price: 4, services: 5, food: 5 },
  ];

  function selectTourData() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("tour");
    const entry =
      (key && TOUR_CATALOG[key]) || TOUR_CATALOG["serengeti-great-migration-safari"];
    return {
      title: entry.title,
      place: entry.place,
      maxGuest: 40,
      minAge: 10,
      contact: "+255 774 050 301",
      languages: ["English", "Swahili"],
      calendarData: buildCalendar(entry.adult, entry.children),
      reviewData: DEFAULT_REVIEWS,
    };
  }

  const tour_data_detail = selectTourData();

  (function () {
    function applySelfLinks() {
      const params = new URLSearchParams(window.location.search);
      const key = params.get("tour");
      if (!key) return;
      document
        .querySelectorAll(
          'a[href^="/toursingle1"], a[href^="/toursingle2"], a[href^="/toursingle3"]',
        )
        .forEach(function (a) {
          const h = a.getAttribute("href");
          if (h && h.indexOf("?tour=") === -1) {
            const hashIdx = h.indexOf("#");
            if (hashIdx === -1) {
              a.setAttribute("href", h + "?tour=" + key);
            } else {
              a.setAttribute(
                "href",
                h.slice(0, hashIdx) + "?tour=" + key + h.slice(hashIdx),
              );
            }
          }
        });
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", applySelfLinks);
    } else {
      applySelfLinks();
    }
  })();;

  const TOUR_DETAILS = {
    "cultural-immersion-in-zanzibar-s-temples-and-villages": {
      overview: ["Zanzibar, the Spice Island, is a tropical paradise of palm-fringed beaches, turquoise lagoons and a fascinating cultural heritage. Its fusion of Swahili, Arab and European influences is visible in every coral-stone street and spice-scented breeze.", "This tour captures the very essence of Zanzibar, from the historic lanes of Stone Town to the powder-white beaches of the east coast. Relax, explore and discover why Zanzibar is one of the world's most enchanting island destinations."],
      included: ["Air-conditioned private transport", "Professional local guide", "Entrance fees as per itinerary", "Bottled drinking water", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Beach time", "Spice farm visit", "Stone Town walking tour", "Snorkelling", "Dhow sailing", "Sunset cruise"],
      plan: [
        { title: "Day 1: Arrival and First Explorations", text: "Arrive and settle into your accommodation. Depending on your arrival time, enjoy a first taste of Zanzibar with a relaxed afternoon exploring the local area, followed by dinner." },
        { title: "Day 2: Island Discovery", text: "A full day of discovery - visit Stone Town's historic lanes, explore spice farms, or relax on pristine beaches with time for snorkelling. Dinner and overnight at your accommodation." },
        { title: "Day 3: Leisure and Departure", text: "Enjoy a final morning at leisure - swimming, sunbathing or souvenir shopping - before your transfer to the airport or onward destination." },
      ],
    },
    "skyline-serenity-nyerere-s-urban-retreat": {
      overview: ["Nyerere National Park, formerly the Selous Game Reserve, is Africa's largest protected wilderness and one of the continent's most pristine safari destinations. The mighty Rufiji River weaves through the park, its channels and lakes crowded with hippo, crocodile and an astonishing array of waterbirds.", "Your safari combines classic game drives with a thrilling boat safari on the Rufiji River, bringing you close to elephants drinking at the water's edge and the park's famous wild dogs, one of Africa's rarest predators."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Boat safari on the Rufiji River", "Bottled drinking water", "Game drives as per itinerary"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Boat safari", "River cruise", "Birdwatching", "Wildlife photography", "Walking safari"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Nyerere National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Nyerere National Park safari. This concludes your tour." },
      ],
    },
    "serengeti-national-park-safari-and-history-tour": {
      overview: ["Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, home to the great wildebeest migration and Africa's densest predator population. Endless golden plains stretch to the horizon, broken by granite kopjes and acacia woodlands where lions, leopards and cheetahs rest in the shade.", "This tour takes you into the heart of the Serengeti for unforgettable game drives across the open savannah. Your expert driver-guide will track the great migration and reveal the park's hidden corners, from the Seronera Valley to the Grumeti and Mara rivers, where the drama of the river crossings unfolds."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional English-speaking driver-guide", "Bottled drinking water on safari", "All game drives as per itinerary", "Pickup and drop-off at your hotel"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Wildlife photography", "Birdwatching", "Hot-air balloon safari", "Sundowner drives", "Maasai cultural visit"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Serengeti National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Full-Day Game Drives", text: "Rise early for a sunrise game drive, the best time of day to spot lions, leopards and cheetahs and other wildlife on the move. Return to camp for a hearty breakfast before heading out again for a mid-morning drive. After a picnic lunch in the bush, continue with an afternoon game drive and a scenic sundowner spot before dinner. Overnight at your accommodation." },
        { title: "Day 3: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Serengeti National Park safari. This concludes your tour." },
      ],
    },
    "mnemba-island-marine-park-tour": {
      overview: ["Mnemba Island, surrounded by a protected marine atoll off the north-east coast of Zanzibar, is one of the world's most exclusive island retreats. Its coral reef teems with tropical fish, green turtles and dolphins, all set in shimmering turquoise water.", "This tour takes you to the Mnemba atoll for world-class snorkelling and dhow sailing in crystal-clear water. Spot turtles and reef fish, relax on sandbanks, and enjoy the seclusion of Zanzibar's most beautiful marine park."],
      included: ["Boat transfer by dhow", "Snorkelling equipment", "Marine park fees", "Professional guide", "Bottled drinking water", "Lunch on the beach"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Snorkelling", "Dhow sailing", "Beach relaxation", "Dolphin watching", "Marine life spotting", "Photography"],
      plan: [
        { title: "Day 1: Mnemba Atoll Marine Adventure", text: "Pickup from your hotel at 8:00 AM and transfer to the north-east coast of Zanzibar. Board a traditional dhow to the Mnemba atoll, where you will snorkel over vibrant coral reefs teeming with tropical fish and, with luck, green turtles. Enjoy a seafood lunch on the sandbanks before sailing back. Return to your hotel by late afternoon." },
      ],
    },
    "lake-manyara-tree-climbing-lions-safari": {
      overview: ["Lake Manyara National Park is a jewel of the Great Rift Valley, where the emerald shallows of the lake attract thousands of pink flamingos, and the park's famous tree-climbing lions lounge in the branches of acacia and mahogany trees.", "Enjoy game drives through groundwater forests, open grasslands and the lakeshore, spotting hippos wallowing in the shallows, blue monkeys in the canopy and, with luck, a pride of tree-climbing lions overhead."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Game drives as per itinerary", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Tree-climbing lion spotting", "Flamingo viewing", "Birdwatching", "Hippo pools", "Photography"],
      plan: [
        { title: "Day 1: Full Day in Lake Manyara National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Lake Manyara National Park, where your professional guide leads a morning game drive in search of tree-climbing lions, hippos and flamingos. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "serengeti-wildlife-and-migration-trails": {
      overview: ["Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, home to the great wildebeest migration and Africa's densest predator population. Endless golden plains stretch to the horizon, broken by granite kopjes and acacia woodlands where lions, leopards and cheetahs rest in the shade.", "This tour takes you into the heart of the Serengeti for unforgettable game drives across the open savannah. Your expert driver-guide will track the great migration and reveal the park's hidden corners, from the Seronera Valley to the Grumeti and Mara rivers, where the drama of the river crossings unfolds."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional English-speaking driver-guide", "Bottled drinking water on safari", "All game drives as per itinerary", "Pickup and drop-off at your hotel"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Wildlife photography", "Birdwatching", "Hot-air balloon safari", "Sundowner drives", "Maasai cultural visit"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Serengeti National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Serengeti National Park safari. This concludes your tour." },
      ],
    },
    "nyerere-wildlife-and-iconic-river-safaris": {
      overview: ["Nyerere National Park, formerly the Selous Game Reserve, is Africa's largest protected wilderness and one of the continent's most pristine safari destinations. The mighty Rufiji River weaves through the park, its channels and lakes crowded with hippo, crocodile and an astonishing array of waterbirds.", "Your safari combines classic game drives with a thrilling boat safari on the Rufiji River, bringing you close to elephants drinking at the water's edge and the park's famous wild dogs, one of Africa's rarest predators."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Boat safari on the Rufiji River", "Bottled drinking water", "Game drives as per itinerary"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Boat safari", "River cruise", "Birdwatching", "Wildlife photography", "Walking safari"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Nyerere National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Nyerere National Park safari. This concludes your tour." },
      ],
    },
    "jozani-forest-spice-farm-tour": {
      overview: ["Jozani Chwaka Bay National Park protects Zanzibar's last remnant of ancient forest and is the only place in the world where you can see the endangered Kirk's red colobus monkey. Boardwalks wind through the mangroves, home to sykes monkeys, bushbabies and a wealth of birdlife.", "A guided walk through Jozani's rainforest and mangrove boardwalks brings you face to face with red colobus monkeys in the wild, before the tour continues to a spice farm to discover the island's fragrant heritage."],
      included: ["Park entrance fees", "Professional local guide", "Forest and mangrove boardwalk", "Bottled drinking water", "Hotel transfers"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Forest walk", "Red colobus monkeys", "Mangrove boardwalk", "Birdwatching", "Nature photography"],
      plan: [
        { title: "Day 1: Jozani Forest and Spice Farm", text: "Pickup from your hotel at 9:00 AM. Arrive at Jozani Chwaka Bay National Park for a guided walk through the ancient forest, where Kirk's red colobus monkeys swing overhead. Continue along the mangrove boardwalk before heading to a nearby spice farm for a fragrant tour and tasting. Return to your hotel by mid-afternoon." },
      ],
    },
    "mnemba-island-dhow-sunset-cruise": {
      overview: ["Mnemba Island, surrounded by a protected marine atoll off the north-east coast of Zanzibar, is one of the world's most exclusive island retreats. Its coral reef teems with tropical fish, green turtles and dolphins, all set in shimmering turquoise water.", "This tour takes you to the Mnemba atoll for world-class snorkelling and dhow sailing in crystal-clear water. Spot turtles and reef fish, relax on sandbanks, and enjoy the seclusion of Zanzibar's most beautiful marine park."],
      included: ["Boat transfer by dhow", "Snorkelling equipment", "Marine park fees", "Professional guide", "Bottled drinking water", "Lunch on the beach"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Snorkelling", "Dhow sailing", "Beach relaxation", "Dolphin watching", "Marine life spotting", "Photography"],
      plan: [
        { title: "Day 1: Mnemba Atoll Marine Adventure", text: "Pickup from your hotel at 8:00 AM and transfer to the north-east coast of Zanzibar. Board a traditional dhow to the Mnemba atoll, where you will snorkel over vibrant coral reefs teeming with tropical fish and, with luck, green turtles. Enjoy a seafood lunch on the sandbanks before sailing back. Return to your hotel by late afternoon." },
      ],
    },
    "arusha-city-highlights-and-maasai-market": {
      overview: ["Arusha is the vibrant gateway to Tanzania's northern safari circuit, set at the foot of Mount Meru. Its lively markets, museums and cosmopolitan atmosphere blend Maasai culture with the bustle of East African city life.", "This city tour takes you through the heart of Arusha, from the colourful Maasai Market to the National Natural History Museum, with a local guide bringing the city's story to life."],
      included: ["Professional local guide", "Entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["City walking tour", "Maasai market", "Museum visit", "Cultural experience", "Photography"],
      plan: [
        { title: "Day 1: Arusha City Walking Tour", text: "Meet your guide at your hotel at 9:00 AM. Explore the vibrant Maasai Market, where you can shop for authentic beadwork and crafts, then visit the National Natural History Museum and the Arusha Declaration monument. Enjoy a Swahili lunch before returning to your hotel in the afternoon." },
      ],
    },
    "zanzibar-vibrant-streets-and-sunset-views": {
      overview: ["Zanzibar, the Spice Island, is a tropical paradise of palm-fringed beaches, turquoise lagoons and a fascinating cultural heritage. Its fusion of Swahili, Arab and European influences is visible in every coral-stone street and spice-scented breeze.", "This tour captures the very essence of Zanzibar, from the historic lanes of Stone Town to the powder-white beaches of the east coast. Relax, explore and discover why Zanzibar is one of the world's most enchanting island destinations."],
      included: ["Air-conditioned private transport", "Professional local guide", "Entrance fees as per itinerary", "Bottled drinking water", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Beach time", "Spice farm visit", "Stone Town walking tour", "Snorkelling", "Dhow sailing", "Sunset cruise"],
      plan: [
        { title: "Day 1: Full Day Zanzibar Adventure", text: "Pickup from your hotel in the morning. Your local guide takes you on an unforgettable journey through Zanzibar's highlights, with time for swimming, exploring and a delicious lunch. Return to your hotel by early evening." },
      ],
    },
    "stone-town-historic-architecture-and-beach-bliss": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "serengeti-balloon-safari-experience": {
      overview: ["Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, home to the great wildebeest migration and Africa's densest predator population. Endless golden plains stretch to the horizon, broken by granite kopjes and acacia woodlands where lions, leopards and cheetahs rest in the shade.", "This tour takes you into the heart of the Serengeti for unforgettable game drives across the open savannah. Your expert driver-guide will track the great migration and reveal the park's hidden corners, from the Seronera Valley to the Grumeti and Mara rivers, where the drama of the river crossings unfolds."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional English-speaking driver-guide", "Bottled drinking water on safari", "All game drives as per itinerary", "Pickup and drop-off at your hotel"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Wildlife photography", "Birdwatching", "Hot-air balloon safari", "Sundowner drives", "Maasai cultural visit"],
      plan: [
        { title: "Day 1: Full Day in Serengeti National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Serengeti National Park, where your professional guide leads a morning game drive in search of lions, leopards and cheetahs. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "zanzibar-beaches-and-stone-town-tour": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "spice-farm-stone-town-day-tour": {
      overview: ["Zanzibar's spice farms are a fragrant feast for the senses, where cloves, nutmeg, cinnamon, vanilla and cardamom grow in abundance. For centuries the island was the world's leading spice producer, and its plantations remain an essential part of the Zanzibar experience.", "Walk through a working spice farm with a local guide who will show you how spices are grown, harvested and prepared, and let you taste them fresh from the tree. Combined with Stone Town's historic lanes, this is the perfect introduction to the Spice Island."],
      included: ["Spice farm entrance and guide", "Spice tasting", "Professional local guide", "Bottled drinking water", "Hotel transfers"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Spice farm tour", "Spice tasting", "Stone Town walk", "Cultural experience", "Photography"],
      plan: [
        { title: "Day 1: Spice Farm and Stone Town Tour", text: "Pickup from your hotel at 9:00 AM. Tour a working spice farm and taste cloves, nutmeg, vanilla and cinnamon straight from the tree. Then head into Stone Town for a guided walk through the historic streets, markets and the Old Fort. Return to your hotel by late afternoon." },
      ],
    },
    "stone-town-heritage-walking-tour": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "discover-the-wonders-of-zanzibar": {
      overview: ["Zanzibar, the Spice Island, is a tropical paradise of palm-fringed beaches, turquoise lagoons and a fascinating cultural heritage. Its fusion of Swahili, Arab and European influences is visible in every coral-stone street and spice-scented breeze.", "This tour captures the very essence of Zanzibar, from the historic lanes of Stone Town to the powder-white beaches of the east coast. Relax, explore and discover why Zanzibar is one of the world's most enchanting island destinations."],
      included: ["Air-conditioned private transport", "Professional local guide", "Entrance fees as per itinerary", "Bottled drinking water", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Beach time", "Spice farm visit", "Stone Town walking tour", "Snorkelling", "Dhow sailing", "Sunset cruise"],
      plan: [
        { title: "Day 1: Full Day Zanzibar Adventure", text: "Pickup from your hotel in the morning. Your local guide takes you on an unforgettable journey through Zanzibar's highlights, with time for swimming, exploring and a delicious lunch. Return to your hotel by early evening." },
      ],
    },
    "adventure-in-lake-manyara": {
      overview: ["Lake Manyara National Park is a jewel of the Great Rift Valley, where the emerald shallows of the lake attract thousands of pink flamingos, and the park's famous tree-climbing lions lounge in the branches of acacia and mahogany trees.", "Enjoy game drives through groundwater forests, open grasslands and the lakeshore, spotting hippos wallowing in the shallows, blue monkeys in the canopy and, with luck, a pride of tree-climbing lions overhead."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Game drives as per itinerary", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Tree-climbing lion spotting", "Flamingo viewing", "Birdwatching", "Hippo pools", "Photography"],
      plan: [
        { title: "Day 1: Full Day in Lake Manyara National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Lake Manyara National Park, where your professional guide leads a morning game drive in search of tree-climbing lions, hippos and flamingos. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "selous-game-reserve-exploration": {
      overview: ["Nyerere National Park, formerly the Selous Game Reserve, is Africa's largest protected wilderness and one of the continent's most pristine safari destinations. The mighty Rufiji River weaves through the park, its channels and lakes crowded with hippo, crocodile and an astonishing array of waterbirds.", "Your safari combines classic game drives with a thrilling boat safari on the Rufiji River, bringing you close to elephants drinking at the water's edge and the park's famous wild dogs, one of Africa's rarest predators."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Boat safari on the Rufiji River", "Bottled drinking water", "Game drives as per itinerary"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Boat safari", "River cruise", "Birdwatching", "Wildlife photography", "Walking safari"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Nyerere National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Nyerere National Park safari. This concludes your tour." },
      ],
    },
    "serengeti-highlights-safari": {
      overview: ["Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, home to the great wildebeest migration and Africa's densest predator population. Endless golden plains stretch to the horizon, broken by granite kopjes and acacia woodlands where lions, leopards and cheetahs rest in the shade.", "This tour takes you into the heart of the Serengeti for unforgettable game drives across the open savannah. Your expert driver-guide will track the great migration and reveal the park's hidden corners, from the Seronera Valley to the Grumeti and Mara rivers, where the drama of the river crossings unfolds."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional English-speaking driver-guide", "Bottled drinking water on safari", "All game drives as per itinerary", "Pickup and drop-off at your hotel"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Wildlife photography", "Birdwatching", "Hot-air balloon safari", "Sundowner drives", "Maasai cultural visit"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Serengeti National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Serengeti National Park safari. This concludes your tour." },
      ],
    },
    "romantic-stone-town-getaway": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
        { title: "Day 2: Leisure and Departure", text: "Enjoy a final morning at leisure before checking out. Transfer to your hotel or onward destination with wonderful memories of Stone Town, Zanzibar. This concludes your tour." },
      ],
    },
    "serengeti-adventure-safari": {
      overview: ["Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, home to the great wildebeest migration and Africa's densest predator population. Endless golden plains stretch to the horizon, broken by granite kopjes and acacia woodlands where lions, leopards and cheetahs rest in the shade.", "This tour takes you into the heart of the Serengeti for unforgettable game drives across the open savannah. Your expert driver-guide will track the great migration and reveal the park's hidden corners, from the Seronera Valley to the Grumeti and Mara rivers, where the drama of the river crossings unfolds."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional English-speaking driver-guide", "Bottled drinking water on safari", "All game drives as per itinerary", "Pickup and drop-off at your hotel"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Wildlife photography", "Birdwatching", "Hot-air balloon safari", "Sundowner drives", "Maasai cultural visit"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Serengeti National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Serengeti National Park safari. This concludes your tour." },
      ],
    },
    "discover-lake-manyara-highlights": {
      overview: ["Lake Manyara National Park is a jewel of the Great Rift Valley, where the emerald shallows of the lake attract thousands of pink flamingos, and the park's famous tree-climbing lions lounge in the branches of acacia and mahogany trees.", "Enjoy game drives through groundwater forests, open grasslands and the lakeshore, spotting hippos wallowing in the shallows, blue monkeys in the canopy and, with luck, a pride of tree-climbing lions overhead."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Game drives as per itinerary", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Tree-climbing lion spotting", "Flamingo viewing", "Birdwatching", "Hippo pools", "Photography"],
      plan: [
        { title: "Day 1: Full Day in Lake Manyara National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Lake Manyara National Park, where your professional guide leads a morning game drive in search of tree-climbing lions, hippos and flamingos. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "tanzania-safari-adventure-tour": {
      overview: ["Tanzania is Africa's most spectacular safari destination, home to the great wildebeest migration, the world-famous Ngorongoro Crater and the island paradise of Zanzibar.", "This carefully designed tour showcases the very best of Tanzania with Khamiar Express, blending world-class wildlife, stunning scenery and warm Swahili hospitality."],
      included: ["Professional tour guide", "Air-conditioned transport", "Bottled drinking water", "All entrance fees", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Cultural experiences", "Photography", "Scenic touring"],
      plan: [
        { title: "Day 1: Tour Experience", text: "Meet your professional guide at your hotel and set off on a full day of discovery. Enjoy expert-led activities, a delicious lunch and memorable scenery before returning to your hotel in the evening." },
      ],
    },
    "nyerere-national-park-safari": {
      overview: ["Nyerere National Park, formerly the Selous Game Reserve, is Africa's largest protected wilderness and one of the continent's most pristine safari destinations. The mighty Rufiji River weaves through the park, its channels and lakes crowded with hippo, crocodile and an astonishing array of waterbirds.", "Your safari combines classic game drives with a thrilling boat safari on the Rufiji River, bringing you close to elephants drinking at the water's edge and the park's famous wild dogs, one of Africa's rarest predators."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Boat safari on the Rufiji River", "Bottled drinking water", "Game drives as per itinerary"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Boat safari", "River cruise", "Birdwatching", "Wildlife photography", "Walking safari"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Nyerere National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Nyerere National Park safari. This concludes your tour." },
      ],
    },
    "serengeti-national-park-safari": {
      overview: ["Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, home to the great wildebeest migration and Africa's densest predator population. Endless golden plains stretch to the horizon, broken by granite kopjes and acacia woodlands where lions, leopards and cheetahs rest in the shade.", "This tour takes you into the heart of the Serengeti for unforgettable game drives across the open savannah. Your expert driver-guide will track the great migration and reveal the park's hidden corners, from the Seronera Valley to the Grumeti and Mara rivers, where the drama of the river crossings unfolds."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional English-speaking driver-guide", "Bottled drinking water on safari", "All game drives as per itinerary", "Pickup and drop-off at your hotel"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Wildlife photography", "Birdwatching", "Hot-air balloon safari", "Sundowner drives", "Maasai cultural visit"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Serengeti National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Serengeti National Park safari. This concludes your tour." },
      ],
    },
    "mnemba-island-excursion": {
      overview: ["Mnemba Island, surrounded by a protected marine atoll off the north-east coast of Zanzibar, is one of the world's most exclusive island retreats. Its coral reef teems with tropical fish, green turtles and dolphins, all set in shimmering turquoise water.", "This tour takes you to the Mnemba atoll for world-class snorkelling and dhow sailing in crystal-clear water. Spot turtles and reef fish, relax on sandbanks, and enjoy the seclusion of Zanzibar's most beautiful marine park."],
      included: ["Boat transfer by dhow", "Snorkelling equipment", "Marine park fees", "Professional guide", "Bottled drinking water", "Lunch on the beach"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Snorkelling", "Dhow sailing", "Beach relaxation", "Dolphin watching", "Marine life spotting", "Photography"],
      plan: [
        { title: "Day 1: Mnemba Atoll Marine Adventure", text: "Pickup from your hotel at 8:00 AM and transfer to the north-east coast of Zanzibar. Board a traditional dhow to the Mnemba atoll, where you will snorkel over vibrant coral reefs teeming with tropical fish and, with luck, green turtles. Enjoy a seafood lunch on the sandbanks before sailing back. Return to your hotel by late afternoon." },
      ],
    },
    "jozani-forest-cultural-tour": {
      overview: ["Jozani Chwaka Bay National Park protects Zanzibar's last remnant of ancient forest and is the only place in the world where you can see the endangered Kirk's red colobus monkey. Boardwalks wind through the mangroves, home to sykes monkeys, bushbabies and a wealth of birdlife.", "A guided walk through Jozani's rainforest and mangrove boardwalks brings you face to face with red colobus monkeys in the wild, before the tour continues to a spice farm to discover the island's fragrant heritage."],
      included: ["Park entrance fees", "Professional local guide", "Forest and mangrove boardwalk", "Bottled drinking water", "Hotel transfers"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Forest walk", "Red colobus monkeys", "Mangrove boardwalk", "Birdwatching", "Nature photography"],
      plan: [
        { title: "Day 1: Jozani Forest and Spice Farm", text: "Pickup from your hotel at 9:00 AM. Arrive at Jozani Chwaka Bay National Park for a guided walk through the ancient forest, where Kirk's red colobus monkeys swing overhead. Continue along the mangrove boardwalk before heading to a nearby spice farm for a fragrant tour and tasting. Return to your hotel by mid-afternoon." },
      ],
    },
    "arusha-city-walk": {
      overview: ["Arusha is the vibrant gateway to Tanzania's northern safari circuit, set at the foot of Mount Meru. Its lively markets, museums and cosmopolitan atmosphere blend Maasai culture with the bustle of East African city life.", "This city tour takes you through the heart of Arusha, from the colourful Maasai Market to the National Natural History Museum, with a local guide bringing the city's story to life."],
      included: ["Professional local guide", "Entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["City walking tour", "Maasai market", "Museum visit", "Cultural experience", "Photography"],
      plan: [
        { title: "Day 1: Arusha City Walking Tour", text: "Meet your guide at your hotel at 9:00 AM. Explore the vibrant Maasai Market, where you can shop for authentic beadwork and crafts, then visit the National Natural History Museum and the Arusha Declaration monument. Enjoy a Swahili lunch before returning to your hotel in the afternoon." },
      ],
    },
    "stone-town-discovery-tour": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "art-and-tradition-exploring-zanzibar-s-cultural-scene": {
      overview: ["Zanzibar, the Spice Island, is a tropical paradise of palm-fringed beaches, turquoise lagoons and a fascinating cultural heritage. Its fusion of Swahili, Arab and European influences is visible in every coral-stone street and spice-scented breeze.", "This tour captures the very essence of Zanzibar, from the historic lanes of Stone Town to the powder-white beaches of the east coast. Relax, explore and discover why Zanzibar is one of the world's most enchanting island destinations."],
      included: ["Air-conditioned private transport", "Professional local guide", "Entrance fees as per itinerary", "Bottled drinking water", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Beach time", "Spice farm visit", "Stone Town walking tour", "Snorkelling", "Dhow sailing", "Sunset cruise"],
      plan: [
        { title: "Day 1: Full Day Zanzibar Adventure", text: "Pickup from your hotel in the morning. Your local guide takes you on an unforgettable journey through Zanzibar's highlights, with time for swimming, exploring and a delicious lunch. Return to your hotel by early evening." },
      ],
    },
    "mikumi-day-trip-safari": {
      overview: ["Mikumi National Park is the closest of Tanzania's major parks to Dar es Salaam and a superb day-safari destination. The vast Mkata floodplain teems with elephant, giraffe, buffalo, wildebeest and lion, often framed against the blue Uluguru Mountains.", "On this day trip you will enjoy morning and afternoon game drives across the floodplain, with a picnic lunch at the hippo pools and a real chance of encountering the park's resident predators."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Picnic lunch", "Return transfers from Dar es Salaam"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Hippo pool viewing", "Birdwatching", "Photography", "Picnic lunch"],
      plan: [
        { title: "Day 1: Full Day in Mikumi National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Mikumi National Park, where your professional guide leads a morning game drive in search of lions, elephants and hippos. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "tarangire-ngorongoro-2-day-safari": {
      overview: ["The Ngorongoro Crater is the world's largest intact volcanic caldera and a natural amphitheatre teeming with wildlife. Its crater floor is home to the Big Five, vast herds of wildebeest and zebra, and the shimmering waters of Lake Magadi, where flocks of flamingos gather.", "Descend into the crater for a full day of game viewing on the crater floor, where lions, elephants, black rhinos and hippos roam a landscape of breathtaking beauty. With almost 30,000 large animals inside the caldera, extraordinary sightings are virtually guaranteed."],
      included: ["Ngorongoro Crater entrance and conservation fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Picnic lunch in the crater", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Crater floor game drive", "Wildlife photography", "Birdwatching", "Maasai village visit", "Bush picnic lunch"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Ngorongoro Crater, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Ngorongoro Crater safari. This concludes your tour." },
      ],
    },
    "serengeti-great-migration-safari": {
      overview: ["Serengeti National Park is Tanzania's oldest and most celebrated wildlife sanctuary, home to the great wildebeest migration and Africa's densest predator population. Endless golden plains stretch to the horizon, broken by granite kopjes and acacia woodlands where lions, leopards and cheetahs rest in the shade.", "This tour takes you into the heart of the Serengeti for unforgettable game drives across the open savannah. Your expert driver-guide will track the great migration and reveal the park's hidden corners, from the Seronera Valley to the Grumeti and Mara rivers, where the drama of the river crossings unfolds."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional English-speaking driver-guide", "Bottled drinking water on safari", "All game drives as per itinerary", "Pickup and drop-off at your hotel"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Wildlife photography", "Birdwatching", "Hot-air balloon safari", "Sundowner drives", "Maasai cultural visit"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Serengeti National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Full-Day Game Drives", text: "Rise early for a sunrise game drive, the best time of day to spot lions, leopards and cheetahs and other wildlife on the move. Return to camp for a hearty breakfast before heading out again for a mid-morning drive. After a picnic lunch in the bush, continue with an afternoon game drive and a scenic sundowner spot before dinner. Overnight at your accommodation." },
        { title: "Day 3: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Serengeti National Park safari. This concludes your tour." },
      ],
    },
    "mnemba-island-royal-retreat": {
      overview: ["Mnemba Island, surrounded by a protected marine atoll off the north-east coast of Zanzibar, is one of the world's most exclusive island retreats. Its coral reef teems with tropical fish, green turtles and dolphins, all set in shimmering turquoise water.", "This tour takes you to the Mnemba atoll for world-class snorkelling and dhow sailing in crystal-clear water. Spot turtles and reef fish, relax on sandbanks, and enjoy the seclusion of Zanzibar's most beautiful marine park."],
      included: ["Boat transfer by dhow", "Snorkelling equipment", "Marine park fees", "Professional guide", "Bottled drinking water", "Lunch on the beach"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Snorkelling", "Dhow sailing", "Beach relaxation", "Dolphin watching", "Marine life spotting", "Photography"],
      plan: [
        { title: "Day 1: Mnemba Atoll Marine Adventure", text: "Pickup from your hotel at 8:00 AM and transfer to the north-east coast of Zanzibar. Board a traditional dhow to the Mnemba atoll, where you will snorkel over vibrant coral reefs teeming with tropical fish and, with luck, green turtles. Enjoy a seafood lunch on the sandbanks before sailing back. Return to your hotel by late afternoon." },
        { title: "Day 2: Leisure and Departure", text: "Enjoy a final morning at leisure before checking out. Transfer to your hotel or onward destination with wonderful memories of Mnemba Island, Zanzibar. This concludes your tour." },
      ],
    },
    "jozani-forest-guided-walk": {
      overview: ["Jozani Chwaka Bay National Park protects Zanzibar's last remnant of ancient forest and is the only place in the world where you can see the endangered Kirk's red colobus monkey. Boardwalks wind through the mangroves, home to sykes monkeys, bushbabies and a wealth of birdlife.", "A guided walk through Jozani's rainforest and mangrove boardwalks brings you face to face with red colobus monkeys in the wild, before the tour continues to a spice farm to discover the island's fragrant heritage."],
      included: ["Park entrance fees", "Professional local guide", "Forest and mangrove boardwalk", "Bottled drinking water", "Hotel transfers"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Forest walk", "Red colobus monkeys", "Mangrove boardwalk", "Birdwatching", "Nature photography"],
      plan: [
        { title: "Day 1: Jozani Forest and Spice Farm", text: "Pickup from your hotel at 9:00 AM. Arrive at Jozani Chwaka Bay National Park for a guided walk through the ancient forest, where Kirk's red colobus monkeys swing overhead. Continue along the mangrove boardwalk before heading to a nearby spice farm for a fragrant tour and tasting. Return to your hotel by mid-afternoon." },
      ],
    },
    "7-days-discover-northern-tanzania-safari": {
      overview: ["Tanzania is Africa's most spectacular safari destination, home to the great wildebeest migration, the world-famous Ngorongoro Crater and the island paradise of Zanzibar.", "This carefully designed tour showcases the very best of Tanzania with Khamiar Express, blending world-class wildlife, stunning scenery and warm Swahili hospitality."],
      included: ["Professional tour guide", "Air-conditioned transport", "Bottled drinking water", "All entrance fees", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Cultural experiences", "Photography", "Scenic touring"],
      plan: [
        { title: "Day 1: Arrival in Arusha", text: "Arrive at Kilimanjaro International Airport. A Khamiar Express representative transfers you to your hotel in Arusha for a welcome briefing and dinner." },
        { title: "Day 2: Arusha to Tarangire National Park", text: "Drive to Tarangire National Park for an afternoon game drive among the baobabs and elephant herds. Overnight at your lodge or camp." },
        { title: "Day 3: Tarangire to Lake Manyara", text: "Enjoy a morning game drive before driving to Lake Manyara National Park for an afternoon exploring the lakeshore and searching for tree-climbing lions. Overnight near the lake." },
        { title: "Day 4: Lake Manyara to Ngorongoro Crater", text: "Drive to the Ngorongoro Conservation Area and descend into the crater for a full day of game viewing on the crater floor. Overnight on the crater rim." },
        { title: "Day 5: Ngorongoro to Serengeti National Park", text: "Cross the plains into the Serengeti for an afternoon game drive in the Seronera Valley, the heart of the great migration. Overnight in the Serengeti." },
        { title: "Day 6: Full-Day Serengeti Game Drive", text: "Rise early for a full day of game drives across the Serengeti, tracking the migration and its predators from sunrise to sunset." },
        { title: "Day 7: Serengeti to Arusha", text: "Enjoy a final morning game drive, then fly or drive back to Arusha, arriving in time for your onward connections. This concludes your safari." },
      ],
    },
    "stone-town-markets-and-heritage-in-zanzibar": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "tarangire-national-park-safari": {
      overview: ["Tarangire National Park is famous for its ancient baobab trees and the largest elephant herds in northern Tanzania. During the dry season, the Tarangire River becomes a magnet for wildlife, drawing elephant, buffalo, giraffe and lion from miles around.", "This safari explores the park's riverine forests and open plains, offering superb game viewing and exceptional birdlife, from the dazzling yellow-collared lovebird to the elusive leopard resting in the branches above."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Game drives as per itinerary", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Elephant viewing", "Birdwatching", "Baobab photography", "Picnic lunch"],
      plan: [
        { title: "Day 1: Full Day in Tarangire National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Tarangire National Park, where your professional guide leads a morning game drive in search of elephants, lions and leopards. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "lake-manyara-maasai-village-safari": {
      overview: ["Lake Manyara National Park is a jewel of the Great Rift Valley, where the emerald shallows of the lake attract thousands of pink flamingos, and the park's famous tree-climbing lions lounge in the branches of acacia and mahogany trees.", "Enjoy game drives through groundwater forests, open grasslands and the lakeshore, spotting hippos wallowing in the shallows, blue monkeys in the canopy and, with luck, a pride of tree-climbing lions overhead."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Game drives as per itinerary", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Tree-climbing lion spotting", "Flamingo viewing", "Birdwatching", "Hippo pools", "Photography"],
      plan: [
        { title: "Day 1: Full Day in Lake Manyara National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Lake Manyara National Park, where your professional guide leads a morning game drive in search of tree-climbing lions, hippos and flamingos. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "nyerere-national-park-boat-safari": {
      overview: ["Nyerere National Park, formerly the Selous Game Reserve, is Africa's largest protected wilderness and one of the continent's most pristine safari destinations. The mighty Rufiji River weaves through the park, its channels and lakes crowded with hippo, crocodile and an astonishing array of waterbirds.", "Your safari combines classic game drives with a thrilling boat safari on the Rufiji River, bringing you close to elephants drinking at the water's edge and the park's famous wild dogs, one of Africa's rarest predators."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Boat safari on the Rufiji River", "Bottled drinking water", "Game drives as per itinerary"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Boat safari", "River cruise", "Birdwatching", "Wildlife photography", "Walking safari"],
      plan: [
        { title: "Day 1: Full Day in Nyerere National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Nyerere National Park, where your professional guide leads a morning game drive in search of wild dogs, elephants and hippos. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "cultural-immersion-spice-and-traditions-in-zanzibar": {
      overview: ["Zanzibar's spice farms are a fragrant feast for the senses, where cloves, nutmeg, cinnamon, vanilla and cardamom grow in abundance. For centuries the island was the world's leading spice producer, and its plantations remain an essential part of the Zanzibar experience.", "Walk through a working spice farm with a local guide who will show you how spices are grown, harvested and prepared, and let you taste them fresh from the tree. Combined with Stone Town's historic lanes, this is the perfect introduction to the Spice Island."],
      included: ["Spice farm entrance and guide", "Spice tasting", "Professional local guide", "Bottled drinking water", "Hotel transfers"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Spice farm tour", "Spice tasting", "Stone Town walk", "Cultural experience", "Photography"],
      plan: [
        { title: "Day 1: Spice Farm and Stone Town Tour", text: "Pickup from your hotel at 9:00 AM. Tour a working spice farm and taste cloves, nutmeg, vanilla and cinnamon straight from the tree. Then head into Stone Town for a guided walk through the historic streets, markets and the Old Fort. Return to your hotel by late afternoon." },
        { title: "Day 2: Leisure and Departure", text: "Enjoy a final morning at leisure before checking out. Transfer to your hotel or onward destination with wonderful memories of Zanzibar Spice Farms. This concludes your tour." },
      ],
    },
    "tropical-paradise-beach-bliss-in-zanzibar": {
      overview: ["Zanzibar, the Spice Island, is a tropical paradise of palm-fringed beaches, turquoise lagoons and a fascinating cultural heritage. Its fusion of Swahili, Arab and European influences is visible in every coral-stone street and spice-scented breeze.", "This tour captures the very essence of Zanzibar, from the historic lanes of Stone Town to the powder-white beaches of the east coast. Relax, explore and discover why Zanzibar is one of the world's most enchanting island destinations."],
      included: ["Air-conditioned private transport", "Professional local guide", "Entrance fees as per itinerary", "Bottled drinking water", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Beach time", "Spice farm visit", "Stone Town walking tour", "Snorkelling", "Dhow sailing", "Sunset cruise"],
      plan: [
        { title: "Day 1: Arrival and First Explorations", text: "Arrive and settle into your accommodation. Depending on your arrival time, enjoy a first taste of Zanzibar with a relaxed afternoon exploring the local area, followed by dinner." },
        { title: "Day 2: Island Discovery", text: "A full day of discovery - visit Stone Town's historic lanes, explore spice farms, or relax on pristine beaches with time for snorkelling. Dinner and overnight at your accommodation." },
        { title: "Day 3: Leisure and Departure", text: "Enjoy a final morning at leisure - swimming, sunbathing or souvenir shopping - before your transfer to the airport or onward destination." },
      ],
    },
    "kilimanjaro-climb-7-days-via-rongai-route": {
      overview: ["Mount Kilimanjaro, the Roof of Africa, is the highest free-standing mountain in the world. The Rongai Route approaches from the north through quiet forest and moorland, offering a remote and rewarding climb with superb views of the summit glaciers.", "This 7-day trek follows the Rongai Route, climbing from lush rainforest to alpine desert and finally to the ice-capped summit at 5,895 metres. Experienced guides, porters and a mountain cook support you all the way to the Uhuru Peak sunrise."],
      included: ["Kilimanjaro National Park entrance and camping fees", "Professional mountain guides", "Porters and mountain cook", "All meals on the mountain", "Tents and sleeping equipment", "Return transfers"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips for guides and porters", "Personal gear and clothing", "Drinks and snacks"],
      activities: ["Mountain trekking", "Summit attempt", "Wildlife spotting", "Camping", "Photography"],
      plan: [
        { title: "Day 1: Nalemoru Gate to Simba Camp", text: "Depart Arusha for the village of Nalemoru (1,990 m). After registering with the park authorities, begin the trek through lush rainforest to Simba Camp (2,625 m). Overnight in tents." },
        { title: "Day 2: Simba Camp to Kikelewa Cave", text: "Trek through rolling grasslands and heather moorland, passing the distinctive Second Cave before reaching Kikelewa Cave (3,630 m). Enjoy superb views of Mawenzi peak. Overnight in tents." },
        { title: "Day 3: Kikelewa Cave to Mawenzi Tarn", text: "A shorter but steeper day as the trail climbs above the moorland into alpine desert to Mawenzi Tarn (4,330 m), nestled beneath the dramatic crags of Mawenzi. Overnight in tents." },
        { title: "Day 4: Acclimatisation at Mawenzi Tarn", text: "A rest and acclimatisation day. Take an optional scramble towards the summit of Mawenzi for spectacular views, or simply rest and prepare for the summit push. Overnight at Mawenzi Tarn." },
        { title: "Day 5: Mawenzi Tarn to Kibo Hut", text: "Cross the barren Saddle between Mawenzi and Kibo, a stark lunar landscape, to Kibo Hut (4,703 m) at the foot of the summit cone. Dinner and an early night in preparation for summit night." },
        { title: "Day 6: Kibo Hut to Uhuru Peak to Horombo Hut", text: "Begin the ascent at midnight by headlamp, climbing steeply to Gilman's Point (5,681 m) on the crater rim, then continue to Uhuru Peak (5,895 m) for a breathtaking sunrise. Descend to Horombo Hut for the night." },
        { title: "Day 7: Descend to Marangu Gate", text: "Trek down through the moorland and rainforest to Marangu Gate, where you receive your summit certificates. Transfer back to your hotel in Moshi or Arusha, celebrating your achievement." },
      ],
    },
    "safari-blue-dhow-sailing-adventure-in-zanzibar": {
      overview: ["Safari Blue is Zanzibar's legendary full-day dhow sailing adventure across the turquoise waters of Menai Bay. Traditional wooden dhows carry you past sandbanks, lagoons and tiny islets to one of the most beautiful corners of the Indian Ocean.", "Sail aboard a traditional dhow, snorkel over vibrant reefs, feast on a fresh seafood lunch and unwind on pristine sandbanks - the ultimate Zanzibar day on the water."],
      included: ["Traditional dhow sailing", "Snorkelling equipment", "Seafood lunch", "Professional crew and guide", "Bottled drinking water", "Hotel transfers"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Dhow sailing", "Snorkelling", "Beach relaxation", "Seafood lunch", "Sandbank exploring", "Photography"],
      plan: [
        { title: "Day 1: Safari Blue Dhow Sailing Adventure", text: "Pickup from your hotel at 8:00 AM and drive to the departure point at Fumba. Set sail on a traditional dhow across Menai Bay, stopping to snorkel over coral reefs and swim in crystal-clear lagoons. Enjoy a fresh seafood lunch on a sandbank, then continue exploring hidden islets before returning to port at sunset." },
      ],
    },
    "mystical-stone-town-spiritual-journeys-in-zanzibar": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
        { title: "Day 2: Leisure and Departure", text: "Enjoy a final morning at leisure before checking out. Transfer to your hotel or onward destination with wonderful memories of Stone Town, Zanzibar. This concludes your tour." },
      ],
    },
    "lake-manyara-starlit-camping-safari": {
      overview: ["Lake Manyara National Park is a jewel of the Great Rift Valley, where the emerald shallows of the lake attract thousands of pink flamingos, and the park's famous tree-climbing lions lounge in the branches of acacia and mahogany trees.", "Enjoy game drives through groundwater forests, open grasslands and the lakeshore, spotting hippos wallowing in the shallows, blue monkeys in the canopy and, with luck, a pride of tree-climbing lions overhead."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Game drives as per itinerary", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Tree-climbing lion spotting", "Flamingo viewing", "Birdwatching", "Hippo pools", "Photography"],
      plan: [
        { title: "Day 1: Arrival and Afternoon Game Drive", text: "Arrive at your lodge or camp in time for lunch. In the afternoon, set out on your first game drive through Lake Manyara National Park, already on the lookout for its resident wildlife. As the sun begins to sink, return to camp for a sundowner and a delicious dinner under the stars. Overnight at your accommodation." },
        { title: "Day 2: Final Game Drive and Departure", text: "Enjoy a final early-morning game drive and breakfast before checking out of camp. Transfer back to your hotel, arriving by early afternoon with memories of an unforgettable Lake Manyara National Park safari. This concludes your tour." },
      ],
    },
    "ngorongoro-crater-day-tour": {
      overview: ["The Ngorongoro Crater is the world's largest intact volcanic caldera and a natural amphitheatre teeming with wildlife. Its crater floor is home to the Big Five, vast herds of wildebeest and zebra, and the shimmering waters of Lake Magadi, where flocks of flamingos gather.", "Descend into the crater for a full day of game viewing on the crater floor, where lions, elephants, black rhinos and hippos roam a landscape of breathtaking beauty. With almost 30,000 large animals inside the caldera, extraordinary sightings are virtually guaranteed."],
      included: ["Ngorongoro Crater entrance and conservation fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Picnic lunch in the crater", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Crater floor game drive", "Wildlife photography", "Birdwatching", "Maasai village visit", "Bush picnic lunch"],
      plan: [
        { title: "Day 1: Full Day in Ngorongoro Crater", text: "Pickup from your hotel at 8:00 AM. Drive to Ngorongoro Crater, where your professional guide leads a morning game drive in search of lions, elephants and black rhino. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
    "stone-town-historic-walking-tour": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "stone-town-palace-secrets-tour": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "stone-town-icons-historic-and-modern-fusion": {
      overview: ["Stone Town is the ancient heart of Zanzibar City and a UNESCO World Heritage Site. Its labyrinth of narrow alleys, carved wooden doors and bustling markets tells a thousand years of Swahili, Arab, Persian, Indian and European history.", "Wander the atmospheric streets of Stone Town with an expert local guide, visiting the House of Wonders, the Old Fort, Forodhani Gardens and the spice-scented markets, before ending the day with a beach-side sunset."],
      included: ["Professional local guide", "Stone Town entrance fees", "Bottled drinking water", "Hotel pickup and drop-off", "Walking tour"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Walking tour", "Historic buildings", "Markets and bazaars", "Sunset at Forodhani", "Photography", "Museum visits"],
      plan: [
        { title: "Day 1: Stone Town Heritage Walk", text: "Meet your guide at your hotel at 9:00 AM. Begin with the House of Wonders and the Old Fort, then wander the labyrinth of narrow alleys lined with carved wooden doors. Visit the spice-scented Darajani Market and stop for lunch at a traditional Swahili restaurant. In the afternoon, continue to Forodhani Gardens before a stunning sunset over the harbour. Return to your hotel in the evening." },
      ],
    },
    "tarangire-day-safari": {
      overview: ["Tarangire National Park is famous for its ancient baobab trees and the largest elephant herds in northern Tanzania. During the dry season, the Tarangire River becomes a magnet for wildlife, drawing elephant, buffalo, giraffe and lion from miles around.", "This safari explores the park's riverine forests and open plains, offering superb game viewing and exceptional birdlife, from the dazzling yellow-collared lovebird to the elusive leopard resting in the branches above."],
      included: ["Park entrance fees", "4x4 safari vehicle with pop-up roof", "Professional driver-guide", "Bottled drinking water", "Game drives as per itinerary", "Hotel pickup and drop-off"],
      excluded: ["International flights", "Visa fees", "Travel insurance", "Tips and gratuities", "Alcoholic beverages", "Personal expenses and souvenirs"],
      activities: ["Game drives", "Elephant viewing", "Birdwatching", "Baobab photography", "Picnic lunch"],
      plan: [
        { title: "Day 1: Full Day in Tarangire National Park", text: "Pickup from your hotel at 8:00 AM. Drive to Tarangire National Park, where your professional guide leads a morning game drive in search of elephants, lions and leopards. Enjoy a picnic lunch at a scenic viewpoint before a relaxing afternoon game drive. Return to your hotel by early evening with memories of a wonderful day on safari." },
      ],
    },
  };;
  const ACTIVITY_ICONS = {
    "game drives": "wild.svg", "game drive": "wild.svg", "safari drives": "wild.svg",
    "wildlife photography": "photograp.svg", "photography": "photograp.svg", "nature photography": "photograp.svg",
    "baobab photography": "photograp.svg", "birdwatching": "wild.svg", "hot-air balloon safari": "trip.svg",
    "sundowner drives": "camera-1.svg", "maasai cultural visit": "discovery.svg", "cultural experience": "discovery.svg",
    "cultural visits": "discovery.svg", "crater floor game drive": "wild.svg", "bush picnic lunch": "cuisine.svg",
    "picnic lunch": "cuisine.svg", "elephant viewing": "wild.svg", "tree-climbing lion spotting": "wild.svg",
    "flamingo viewing": "wild.svg", "hippo pools": "wild.svg", "boat safari": "sailboat.svg",
    "river cruise": "sailboat.svg", "walking safari": "mount.svg", "mountain trekking": "climbing.svg",
    "summit attempt": "mount.svg", "camping": "camping-2.svg", "beach time": "beach.svg",
    "spice farm visit": "cuisine.svg", "stone town walking tour": "discovery.svg", "snorkelling": "beach.svg",
    "dhow sailing": "sailboat.svg", "sunset cruise": "camera-1.svg", "walking tour": "discovery.svg",
    "historic buildings": "national.svg", "markets and bazaars": "list.svg", "sunset at forodhani": "camera-1.svg",
    "museum visits": "national.svg", "museum visit": "national.svg", "dolphin watching": "beach.svg",
    "marine life spotting": "beach.svg", "beach relaxation": "beach.svg", "forest walk": "discovery.svg",
    "red colobus monkeys": "wild.svg", "mangrove boardwalk": "camping-3.svg", "spice farm tour": "cuisine.svg",
    "spice tasting": "cuisine.svg", "city walking tour": "discovery.svg", "maasai market": "list.svg",
    "wildlife spotting": "wild.svg", "wildlife watching": "wild.svg", "seafood lunch": "cuisine.svg",
    "sandbank exploring": "beach.svg", "stone town walk": "discovery.svg",
  };

  function activityIcon(name) {
    return ACTIVITY_ICONS[name.toLowerCase()] || "camera-1.svg";
  }

  function fillFeatureGrid(sel, items, isIncluded) {
    const grid = document.querySelector(sel);
    if (!grid || !items.length) return;
    const cols = 3;
    const chunk = Math.ceil(items.length / cols);
    let html = "";
    for (let c = 0; c < cols; c++) {
      const slice = items.slice(c * chunk, c * chunk + chunk);
      if (!slice.length) break;
      html += '<div class="box-feature"><ul class="feature-list">';
      slice.forEach(function (t) {
        if (isIncluded) {
          html += '<li class="feature-item"><img src="/images/icons/check-box.svg" alt="icon" class="icon" /> <span class="subtitle">' + t + '</span></li>';
        } else {
          html += '<li class="feature-item"><i class="icon icon-X"></i> <span class="subtitle">' + t + '</span></li>';
        }
      });
      html += '</ul></div>';
    }
    grid.innerHTML = html;
  }

  function fillActivities(activities) {
    const ul = document.getElementById("tour-activities");
    if (!ul || !activities.length) return;
    let html = "";
    activities.forEach(function (a) {
      html += '<li><a href="#tour-activities" class="tag-item">' +
        '<img src="/images/icons/' + activityIcon(a) + '" alt="icon" class="icon" /> ' +
        '<span class="subtitle text-black font-medium">' + a + '</span></a></li>';
    });
    ul.innerHTML = html;
  }

  function fillTourPlan(plan) {
    const ul = document.getElementById("tour-plan");
    if (!ul || !plan.length) return;
    let html = "";
    plan.forEach(function (day, i) {
      const n = i + 1;
      const expanded = i === 0;
      html += '<li class="tour-plan-item">';
      html += '<a href="#day-' + n + '" class="' + (expanded ? "plan-topic" : "plan-topic collapsed") + '" data-bs-toggle="collapse" data-bs-target="#day-' + n + '" aria-expanded="' + expanded + '">';
      html += '<i class="icon icon-check"></i>';
      html += '<div class="title-plan h5">' + day.title + '</div>';
      html += '<i class="icon icon-CaretDown"></i>';
      html += '</a>';
      html += '<div class="plan-content collapse ' + (expanded ? "show" : "") + '" id="day-' + n + '" data-bs-parent="#tour-plan">';
      html += '<p class="plan-answer subtitle">' + day.text + '</p>';
      html += '</div>';
      html += '</li>';
    });
    ul.innerHTML = html;
  }

  function injectTourDetail() {
    if (!document.getElementById("tour-overview")) return;
    const params = new URLSearchParams(window.location.search);
    const key = params.get("tour");
    const d = (key && TOUR_DETAILS[key]) || TOUR_DETAILS["serengeti-great-migration-safari"];
    if (!d) return;

    const ov = document.getElementById("tour-overview");
    if (ov) {
      const ps = ov.querySelectorAll("p");
      if (ps.length >= 1) ps[0].textContent = d.overview[0] || "";
      if (ps.length >= 2) ps[1].textContent = d.overview[1] || d.overview[0] || "";
    }
    fillFeatureGrid("#tour-included", d.included, true);
    fillFeatureGrid("#tour-excluded", d.excluded, false);
    fillActivities(d.activities);
    fillTourPlan(d.plan);
  }

  document.addEventListener("DOMContentLoaded", injectTourDetail);

  document.addEventListener("DOMContentLoaded", function () {
    let currentDate = new Date();
    let activeDate = null;

    function getDayData(dateStr) {
      return tour_data_detail.calendarData[dateStr] || null;
    }

    function formatDate(year, month, day) {
      const m = String(month + 1).padStart(2, "0");
      const d = String(day).padStart(2, "0");
      return `${year}-${m}-${d}`;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = formatDate(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthYearEl = document.getElementById("monthYear");
      if (monthYearEl) {
        monthYearEl.textContent = `${monthNames[month]} ${year
          .toString()
          .slice(-2)}`;
      }

      const daysGrid = document.getElementById("daysGrid");
      if (!daysGrid) return;
      daysGrid.innerHTML = "";

      // Previous month
      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        const date = new Date(year, month - 1, day);
        const dayCell = document.createElement("div");
        dayCell.className = "day-cell empty disabled";
        dayCell.innerHTML = `
          <div class="day-number">${day}</div>
          <div class="day-name">${dayNames[date.getDay()]}</div>
        `;
        daysGrid.appendChild(dayCell);
      }

      // Current month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0);

        const dateStr = formatDate(year, month, day);
        const dayData = getDayData(dateStr);
        const isPast = date < today;

        const dayCell = document.createElement("div");
        dayCell.className = "day-cell";

        if (isPast) dayCell.classList.add("disabled");
        if (!isPast && dateStr === todayStr) dayCell.classList.add("today");
        if (!isPast && activeDate === dateStr) dayCell.classList.add("active");

        if (!isPast && dayData) {
          const adultPrice = dayData.prices?.adult || 0;
          dayCell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-price">$${adultPrice.toFixed(2)}</div>
          `;
        } else {
          dayCell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-name">${dayNames[date.getDay()]}</div>
          `;
        }

        if (!isPast && dayData) {
          dayCell.onclick = () => {
            document
              .querySelectorAll(".day-cell.active")
              .forEach((c) => c.classList.remove("active"));
            document
              .querySelectorAll(".day-cell.today")
              .forEach((c) => c.classList.remove("today"));

            activeDate = dateStr;
            dayCell.classList.add("active");

            if (dayData?.prices) {
              window.updatePriceFromCalendar(dateStr, dayData.prices);
            }
          };
        }

        daysGrid.appendChild(dayCell);
      }

      // Next month
      const totalCells = firstDayOfMonth + daysInMonth;
      const remainingCells = (7 - (totalCells % 7)) % 7;
      for (let i = 1; i <= remainingCells; i++) {
        const date = new Date(year, month + 1, i);
        const dayCell = document.createElement("div");
        dayCell.className = "day-cell empty disabled";
        dayCell.innerHTML = `
          <div class="day-number">${i}</div>
          <div class="day-name">${dayNames[date.getDay()]}</div>
        `;
        daysGrid.appendChild(dayCell);
      }
    }

    window.prevMonth = function () {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    };
    window.nextMonth = function () {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    };

    renderCalendar();
  });

  document.addEventListener("DOMContentLoaded", function () {
    function hasTourOnDate(year, month, day) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day,
      ).padStart(2, "0")}`;
      return tour_data_detail.calendarData[dateStr] !== undefined;
    }

    function getTourPrices(year, month, day) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day,
      ).padStart(2, "0")}`;
      return tour_data_detail.calendarData[dateStr]?.prices || null;
    }

    const dropdowns = document.querySelectorAll(".group-select .select-items");

    function closeAllDropdowns() {
      dropdowns.forEach((dropdown) => {
        dropdown.querySelector(".list")?.classList.remove("active");
        dropdown.querySelector(".dropdown-menu")?.classList.remove("active");
        dropdown.querySelector(".current")?.classList.remove("active");
      });
    }

    function closeAllAdvancedForms() {
      document.querySelectorAll(".advanced-form.show").forEach((form) => {
        form.classList.remove("show");
      });
    }

    function updateTimePicker(dropdown) {
      const selectDate = dropdown.querySelector(".select-date");
      const list = dropdown.querySelector(".list");
      const current = dropdown.querySelector(".current");

      if (!selectDate || !list) return;

      // Chose date
      const dateValue = document.querySelector('input[name="tour_date"]')?.value;

      list.innerHTML = "";

      if (!dateValue) {
        const li = document.createElement("li");
        li.textContent = "Please choose date first";
        li.className = "disabled text_primary text-center";
        list.appendChild(li);
      } else {
        // Get time from calendarData
        const times = tour_data_detail.calendarData?.[dateValue]?.times || [];

        if (!times.length) {
          const li = document.createElement("li");
          li.textContent = "No time available";
          li.className = "disabled";
          list.appendChild(li);
        } else {
          times.forEach((time) => {
            const li = document.createElement("li");
            li.className = "time-option";
            li.textContent = time;
            li.setAttribute("data-time", time);
            list.appendChild(li);
          });
        }
      }

      // Event click
      const timeOptions = list.querySelectorAll("li");
      timeOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (option.classList.contains("disabled")) return;

          const timeValue =
            option.getAttribute("data-time") || option.textContent.trim();

          // Update value
          selectDate.value = timeValue;
          timeOptions.forEach((opt) => opt.classList.remove("selected"));
          option.classList.add("selected");
          list?.classList.remove("active");
          current?.classList.remove("active");
        });
      });
    }

    dropdowns.forEach((dropdown) => {
      const current = dropdown.querySelector(".current");
      const list = dropdown.querySelector(".list");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");

      current?.addEventListener("click", (e) => {
        e.stopPropagation();

        closeAllAdvancedForms();

        dropdowns.forEach((other) => {
          if (other !== dropdown) {
            other.querySelector(".list")?.classList.remove("active");
            other.querySelector(".dropdown-menu")?.classList.remove("active");
            other.querySelector(".current")?.classList.remove("active");
          }
        });

        list?.classList.toggle("active");
        dropdownMenu?.classList.toggle("active");
        current?.classList.toggle("active");

        // Update TIME PICKER
        const selectDate = dropdown.querySelector(".select-date");
        if (
          selectDate &&
          list &&
          !dropdown.querySelector(".guest-item") &&
          !dropdown.querySelector(".datepicker-days")
        ) {
          updateTimePicker(dropdown);
        }
      });

      // =========== Value Selection =============
      const options = dropdown.querySelectorAll(".option");
      options.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          const value = option.getAttribute("data-value");
          const text = option.querySelector(".content")?.innerText.trim();

          current.innerHTML = `
          ${text || "Select options"}
          <i class="icon fa-solid fa-chevron-down"></i>
        `;

          current.setAttribute("data-value", value || "");

          list?.classList.remove("active");
          current?.classList.remove("active");
        });
      });

      // ==================Counter Logic========================
      const guestItems = dropdown.querySelectorAll(".guest-item");

      if (guestItems.length > 0) {
        guestItems.forEach((item) => {
          const minus = item.querySelector(".minus");
          const plus = item.querySelector(".plus");
          const input = item.querySelector("input");

          minus?.addEventListener("click", (e) => {
            e.stopPropagation();
            let value = parseInt(input.value, 10) || 0;
            if (value > 0) {
              input.value = value - 1;
              updateCurrent();
            }
          });

          plus?.addEventListener("click", (e) => {
            e.stopPropagation();
            let value = parseInt(input.value, 10) || 0;
            input.value = value + 1;
            updateCurrent();
          });

          input?.addEventListener("change", () => {
            if (input.value < 0) input.value = 0;
            updateCurrent();
          });
        });

        function updateCurrent() {
          const adults =
            parseInt(guestItems[0]?.querySelector("input").value, 10) || 0;
          const children =
            parseInt(guestItems[1]?.querySelector("input").value, 10) || 0;

          let parts = [];
          if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
          if (children > 0)
            parts.push(`${children} Child${children > 1 ? "ren" : ""}`);

          let text = parts.length > 0 ? parts.join(" - ") : "Select guests";

          const icon = current.querySelector("i");
          const img = current.querySelector("img");

          current.innerHTML = "";

          if (img) {
            current.appendChild(img.cloneNode(true));
          }
          current.appendChild(document.createTextNode(" " + text + " "));
          if (icon) {
            current.appendChild(icon.cloneNode(true));
          }
        }

        updateCurrent();
      }

      // ============ DATEPICKER LOGIC  ============
      const dateInput = dropdown.querySelector(".date-input");
      const datepickerDays = dropdown.querySelector(".datepicker-days");
      const datepickerTitle = dropdown.querySelector(".datepicker-title");
      const prevBtn = dropdown.querySelector(".prev-month");
      const nextBtn = dropdown.querySelector(".next-month");

      const isDatepickerForTour = dropdown.classList.contains("datepicker");

      if (dateInput && datepickerDays) {
        let currentDate = new Date();
        let selectedDate = null;

        // Render calendar
        function renderCalendar(year, month) {
          const firstDay = new Date(year, month, 1);
          const lastDay = new Date(year, month + 1, 0);
          const prevLastDay = new Date(year, month, 0);

          const firstDayIndex = firstDay.getDay();
          const lastDate = lastDay.getDate();
          const prevLastDate = prevLastDay.getDate();

          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          datepickerTitle.textContent = `${monthNames[month]} ${year}`;

          datepickerDays.innerHTML = "";

          // Previous month days
          for (let i = firstDayIndex; i > 0; i--) {
            const day = document.createElement("button");
            day.type = "button";
            const dayNum = prevLastDate - i + 1;

            day.className = "datepicker-day other-month";
            day.textContent = dayNum;

            if (isDatepickerForTour) {
              const hasTour = hasTourOnDate(year, month - 1, dayNum);

              if (!hasTour) {
                day.classList.add("disabled");
                day.style.cursor = "not-allowed";
                day.style.opacity = "0.4";
              } else {
                day.addEventListener("click", (e) => {
                  e.stopPropagation();
                  selectDate(new Date(year, month - 1, dayNum));
                });
              }
            } else {
              day.addEventListener("click", (e) => {
                e.stopPropagation();
                selectDate(new Date(year, month - 1, dayNum));
              });
            }

            datepickerDays.appendChild(day);
          }

          // Current month days
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          for (let i = 1; i <= lastDate; i++) {
            const day = document.createElement("button");
            day.type = "button";
            day.className = "datepicker-day";

            const dayDate = new Date(year, month, i);
            dayDate.setHours(0, 0, 0, 0);
            const isPast = dayDate < today;
            const isToday = dayDate.getTime() === today.getTime();

            day.textContent = i;

            if (isDatepickerForTour) {
              const hasTour = hasTourOnDate(year, month, i);

              if ((!hasTour && !isToday) || (isPast && !isToday)) {
                day.classList.add("disabled");
                day.disabled = true;
                day.style.cursor = "not-allowed";
                day.style.opacity = "0.4";
              } else {
                day.addEventListener("click", (e) => {
                  e.stopPropagation();
                  selectDate(new Date(year, month, i));
                });
              }
            } else {
              if (isPast) {
                day.classList.add("disabled");
                day.disabled = true;
                day.style.cursor = "not-allowed";
                day.style.opacity = "0.4";
              } else {
                day.addEventListener("click", (e) => {
                  e.stopPropagation();
                  selectDate(new Date(year, month, i));
                });
              }
            }

            if (
              i === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear()
            ) {
              day.classList.add("today");
            }

            if (
              selectedDate &&
              i === selectedDate.getDate() &&
              month === selectedDate.getMonth() &&
              year === selectedDate.getFullYear()
            ) {
              day.classList.add("selected");
            }

            const dayOfWeek = new Date(year, month, i).getDay();
            if (dayOfWeek === 0 || dayOfWeek === 6) {
              day.classList.add("weekend");
            }

            datepickerDays.appendChild(day);
          }

          // Next month days
          const remainingDays = 42 - datepickerDays.children.length;
          for (let i = 1; i <= remainingDays; i++) {
            const day = document.createElement("button");
            day.type = "button";

            day.className = "datepicker-day other-month";
            day.textContent = i;

            if (isDatepickerForTour) {
              const hasTour = hasTourOnDate(year, month + 1, i);

              if (!hasTour) {
                day.classList.add("disabled");
                day.style.cursor = "not-allowed";
                day.style.opacity = "0.4";
              } else {
                day.addEventListener("click", (e) => {
                  e.stopPropagation();
                  selectDate(new Date(year, month + 1, i));
                });
              }
            } else {
              day.addEventListener("click", (e) => {
                e.stopPropagation();
                selectDate(new Date(year, month + 1, i));
              });
            }

            datepickerDays.appendChild(day);
          }
        }

        // Select date
        function selectDate(date) {
          selectedDate = date;
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          dateInput.value = `${day}/${month}/${year}`;

          if (isDatepickerForTour) {
            const dateStr = `${year}-${month}-${day}`;
            const prices = getTourPrices(year, date.getMonth(), date.getDate());

            if (prices && window.updatePriceFromCalendar) {
              window.updatePriceFromCalendar(dateStr, prices);
            }

            const timePickerDropdown = document.querySelector(
              '.select-items:has(.select-date[name="tour_time"])',
            );
            if (timePickerDropdown) {
              updateTimePicker(timePickerDropdown);
            }
          }

          renderCalendar(date.getFullYear(), date.getMonth());

          list?.classList.remove("active");
          current?.classList.remove("active");
        }

        // Navigation
        prevBtn?.addEventListener("click", (e) => {
          e.stopPropagation();
          currentDate.setMonth(currentDate.getMonth() - 1);
          renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
        });

        nextBtn?.addEventListener("click", (e) => {
          e.stopPropagation();
          currentDate.setMonth(currentDate.getMonth() + 1);
          renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
        });

        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
      }
    });

    document.addEventListener("click", () => {
      closeAllDropdowns();
    });

    // ========== Advanced Form Toggle ==========
    const advancedBtns = document.querySelectorAll(
      ".box-btn-filter .box-filter ",
    );

    advancedBtns.forEach((advancedBtn, index) => {
      const formS1 = advancedBtn.closest(".form-s1");
      const advancedForm = formS1 ? formS1.querySelector(".advanced-form") : null;

      if (advancedBtn && advancedForm) {
        advancedBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          closeAllDropdowns();

          advancedForm.classList.toggle("show");

          document.querySelectorAll(".advanced-form").forEach((form) => {
            if (form !== advancedForm) form.classList.remove("show");
          });
        });
      }
    });

    // ======== CLOSE ADVANCED SEARCH WHEN CLICK OUTSIDE =========
    document.addEventListener("click", (e) => {
      document.querySelectorAll(".advanced-form.show").forEach((form) => {
        const formS1 = form.closest(".form-s1");
        const filterBtn = formS1?.querySelector(".box-btn-filter");

        if (!form.contains(e.target) && !filterBtn?.contains(e.target)) {
          form.classList.remove("show");
        }
      });
    });

    // =============== Box Select ===============
    const boxSelect = document.querySelector(".box-select");
    if (boxSelect) {
      boxSelect.addEventListener("click", (e) => {
        e.stopPropagation();
        boxSelect.classList.toggle("active");
      });
      document.addEventListener("click", () => {
        boxSelect.classList.remove("active");
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector(".tf-form-book.booking-form form");
    if (!bookingForm) return;

    const data = tour_data_detail;

    window.PRICES = {
      adult: 0,
      children: 0,
      servicePerBooking: 20,
      servicePerPerson: 20,
    };

    // Data
    window.TOUR_INFO = {
      title: data?.title || "",
      place: data?.place || "",
      maxGuest: data?.maxGuest || 0,
      minAge: data?.minAge || 0,
      contact: data?.contact || "",
      languages: data?.languages || [],
    };

    const adultInput = bookingForm.querySelector(
      '.guest-item:nth-child(1) input[type="number"]',
    );
    const childrenInput = bookingForm.querySelector(
      '.guest-item:nth-child(2) input[type="number"]',
    );
    const serviceBookingCheckbox = bookingForm.querySelector("#add_sv_booking");
    const servicePersonCheckbox = bookingForm.querySelector("#add_sv_person");
    const totalValueElement = bookingForm.querySelector(".tf-total-value");
    const totalHiddenInput = bookingForm.querySelector(
      'input[name="total_amount"]',
    );

    const valueAdultSpan = bookingForm.querySelector(".value-adult");
    const valueChildrenSpan = bookingForm.querySelector(".value-child");

    function calculateTotal() {
      const adultCount = parseInt(adultInput?.value, 10) || 0;
      const childrenCount = parseInt(childrenInput?.value, 10) || 0;

      let total = 0;
      total += adultCount * PRICES.adult;
      total += childrenCount * PRICES.children;

      // Service Per Booking
      if (serviceBookingCheckbox?.checked) {
        total += adultCount * PRICES.servicePerBooking;
      }

      // Service Per Person
      if (servicePersonCheckbox?.checked) {
        total += childrenCount * PRICES.servicePerPerson;
      }

      return total;
    }

    function updateTotal() {
      const total = calculateTotal();
      totalValueElement.textContent = `$${total.toFixed(2)}`;
      totalHiddenInput.value = total.toFixed(2);
    }

    // Validate max guest limit
    function validateGuestCount() {
      const adultCount = parseInt(adultInput?.value, 10) || 0;
      const childrenCount = parseInt(childrenInput?.value, 10) || 0;
      const totalGuests = adultCount + childrenCount;

      if (totalGuests > TOUR_INFO.maxGuest) {
        return false;
      }
      return true;
    }

    // Change Input
    adultInput?.addEventListener("input", () => {
      validateGuestCount();
      updateTotal();
    });
    childrenInput?.addEventListener("input", () => {
      validateGuestCount();
      updateTotal();
    });

    // Change Input +/-
    adultInput?.addEventListener("change", () => {
      validateGuestCount();
      updateTotal();
    });
    childrenInput?.addEventListener("change", () => {
      validateGuestCount();
      updateTotal();
    });

    const adultPlusBtn = bookingForm.querySelector(
      ".guest-item:nth-child(1) .plus",
    );
    const adultMinusBtn = bookingForm.querySelector(
      ".guest-item:nth-child(1) .minus",
    );
    const childPlusBtn = bookingForm.querySelector(
      ".guest-item:nth-child(2) .plus",
    );
    const childMinusBtn = bookingForm.querySelector(
      ".guest-item:nth-child(2) .minus",
    );

    adultPlusBtn?.addEventListener("click", () => {
      setTimeout(() => {
        validateGuestCount();
        updateTotal();
      }, 50);
    });
    adultMinusBtn?.addEventListener("click", updateTotal);
    childPlusBtn?.addEventListener("click", () => {
      setTimeout(() => {
        validateGuestCount();
        updateTotal();
      }, 50);
    });
    childMinusBtn?.addEventListener("click", updateTotal);

    // Checkbox services
    serviceBookingCheckbox?.addEventListener("change", updateTotal);
    servicePersonCheckbox?.addEventListener("change", updateTotal);

    // Initialize total
    updateTotal();

    // UPDATE TOTAL FROM CALENDAR
    window.updatePriceFromCalendar = function (dateStr, prices) {
      const dateInput = bookingForm.querySelector('input[name="tour_date"]');
      if (dateInput) dateInput.value = dateStr;

      // Check types
      if (prices && typeof prices === "object") {
        PRICES.adult = prices.adult || 0;
        PRICES.children = prices.children || 0;
      } else {
        PRICES.adult = prices || 0;
        PRICES.children = (prices || 0) / 2;
      }

      if (valueAdultSpan) {
        valueAdultSpan.textContent = `$${PRICES.adult.toFixed(2)}`;
      }
      if (valueChildrenSpan) {
        valueChildrenSpan.textContent = `$${PRICES.children.toFixed(2)}`;
      }

      updateTotal();
    };

    // Get data booking
    window.getBookingInfo = function () {
      const formData = new FormData(bookingForm);

      return {
        // Tour Information
        tourTitle: TOUR_INFO.title,
        tourPlace: TOUR_INFO.place,
        tourContact: TOUR_INFO.contact,
        tourLanguages: TOUR_INFO.languages.join(", "),

        // Booking Details
        tourDate: formData.get("tour_date") || "",
        tourTime: formData.get("tour_time") || "",

        // Guest Information
        adults: parseInt(adultInput?.value, 10) || 0,
        children: parseInt(childrenInput?.value, 10) || 0,
        totalGuests:
          (parseInt(adultInput?.value, 10) || 0) +
          (parseInt(childrenInput?.value, 10) || 0),

        // Pricing Details
        adultPrice: PRICES.adult,
        childrenPrice: PRICES.children,
        adultTotal: (parseInt(adultInput?.value, 10) || 0) * PRICES.adult,
        childrenTotal: (parseInt(childrenInput?.value, 10) || 0) * PRICES.children,

        // Services
        servicePerBooking: serviceBookingCheckbox?.checked || false,
        servicePerBookingPrice: serviceBookingCheckbox?.checked
          ? PRICES.servicePerBooking
          : 0,
        servicePerPerson: servicePersonCheckbox?.checked || false,
        servicePerPersonPrice: servicePersonCheckbox?.checked
          ? PRICES.servicePerPerson
          : 0,
        servicePerBookingTotal: serviceBookingCheckbox?.checked
          ? PRICES.servicePerBooking
          : 0,

        servicePerPersonTotal: servicePersonCheckbox?.checked
          ? ((parseInt(adultInput?.value, 10) || 0) +
              (parseInt(childrenInput?.value, 10) || 0)) *
            PRICES.servicePerPerson
          : 0,
        // Total
        totalAmount: parseFloat(totalHiddenInput?.value) || 0,

        // Timestamp
        bookingDate: new Date().toISOString(),
      };
    };

    // Form Submit Handler
    bookingForm.addEventListener("submit", function (e) {
      // Validate guest count
      if (!validateGuestCount()) {
        return;
      }

      // Get all booking info
      const bookingInfo = window.getBookingInfo();
      localStorage.setItem("bookingData", JSON.stringify(bookingInfo));
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Get localStorage
    const bookingDataStr = localStorage.getItem("bookingData");

    const data = JSON.parse(bookingDataStr);

    // Render ra form
    renderBookingInfo(data);
  });

  function renderBookingInfo(data) {
    const infoForms = document.querySelectorAll(
      ".tf-form-book.checkout.info-form",
    );

    if (!infoForms.length) return;

    infoForms.forEach((infoForm) => {
      // Tour Date
      const tourDateEl = infoForm.querySelector(".tour-date-value");
      if (tourDateEl) tourDateEl.textContent = data.tourDate || "N/A";

      // Tour Time
      const tourTimeEl = infoForm.querySelector(".tour-time-value");
      if (tourTimeEl) tourTimeEl.textContent = data.tourTime || "N/A";

      // Adults
      const adultsEl = infoForm.querySelector(".adults-value");
      if (adultsEl) adultsEl.textContent = data.adults || 0;

      // Children
      const childrenEl = infoForm.querySelector(".children-value");
      if (childrenEl) childrenEl.textContent = data.children || 0;

      // Total Guests
      const totalGuestsEl = infoForm.querySelector(".total-guests-value");
      if (totalGuestsEl) totalGuestsEl.textContent = data.totalGuests || 0;

      // Adult Price
      const adultPriceEl = infoForm.querySelector(".adult-price-value");
      if (adultPriceEl) {
        adultPriceEl.textContent = `$${(data.adultTotal || 0).toFixed(2)}`;
      }

      // Children Price
      const childrenPriceEl = infoForm.querySelector(".children-price-value");
      if (childrenPriceEl) {
        childrenPriceEl.textContent = `$${(data.childrenTotal || 0).toFixed(2)}`;
      }

      // Service Per Booking
      const serviceBookingEl = infoForm.querySelector(".service-booking-value");
      if (serviceBookingEl) {
        serviceBookingEl.textContent = `$${(
          data.servicePerBookingTotal || 0
        ).toFixed(2)}`;
      }

      // Service Per Person
      const servicePersonEl = infoForm.querySelector(".service-person-value");
      if (servicePersonEl) {
        servicePersonEl.textContent = `$${(
          data.servicePerPersonTotal || 0
        ).toFixed(2)}`;
      }

      const totalAmountEls = infoForm.querySelectorAll(".total-amount-value");
      totalAmountEls.forEach((el) => {
        el.textContent = `$${(data.totalAmount || 0).toFixed(2)}`;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const data = tour_data_detail;
    if (!data) return;

    const bindText = (selector, value) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.textContent = value;
      });
    };

    bindText(".tour-title-value", data.title);
    bindText(".max-guest-value", data.maxGuest);
    bindText(".min-age-value", data.minAge);
    bindText(".location-value", data.place);
    bindText(".contact-value", data.contact);
    bindText(".languages-value", data.languages.join(", "));
  });

  var formSearchSubmit = function () {
    $(document).on("DOMContentLoaded", function () {
      var $form = $(".form-s1 form");
      if (!$form.length) return;
  
      $form.on("submit", function (e) {
        e.preventDefault();
  
        var locationValue =
          $form
            .find(".form-group:nth-child(1) .current")
            .attr("data-value") || "";
  
        var dateValue = $form.find(".date-input").val() || "";
  
        var tourType =
          $form
            .find(".form-group:nth-child(3) .current")
            .attr("data-value") || "";
  
        var $guestInputs = $form.find(".guest-item input");
        var guests = {
          adults: $guestInputs.eq(0).val() || "0",
          children: $guestInputs.eq(1).val() || "0",
        };
  
        var minPrice = $form.find('input[name="min-value"]').val() || "";
        var maxPrice = $form.find('input[name="max-value"]').val() || "";
  
        var amenities = $form
          .find(".tf-checkbox:checked")
          .map(function () {
            return $(this).attr("id");
          })
          .get()
          .join(",");
  
        var queryString = new URLSearchParams({
          location: locationValue,
          date: dateValue,
          type: tourType,
          adults: guests.adults,
          children: guests.children,
          minPrice: minPrice,
          maxPrice: maxPrice,
          amenities: amenities,
        }).toString();
  
        window.location.href = "/search.html?" + queryString;
      });
    });
  };

  var initRangeSlider = function () {
    var moneyFormat = wNumb({
        decimals: 0,
        thousand: ",",
        prefix: "$",
    });

    $(".slider-range").each(function () {
      var $slider = $(this);

      noUiSlider.create(this, {
          start: [0, 10000],
          step: 1,
          range: {
              min: [0],
              max: [10000],
          },
          format: moneyFormat,
          connect: true,
      });

      $slider.find(".noUi-handle").each(function () {
          $(this).on("click", function () {
              $(this).css("width", "50px");
          });
      });

      this.noUiSlider.on("update", function (values, handle) {
          var $parent = $slider.parent();
          var value1 = $parent.find(".slider-range-value1");
          var value2 = $parent.find(".slider-range-value2");
          var minInput = $parent.find("[name='min-value']");
          var maxInput = $parent.find("[name='max-value']");

          if (value1.length) value1.text(values[0]);
          if (value2.length) value2.text(values[1]);
          if (minInput.length) minInput.val(moneyFormat.from(values[0]));
          if (maxInput.length) maxInput.val(moneyFormat.from(values[1]));
      });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    function initAccordion(itemSelector) {
      const items = document.querySelectorAll(itemSelector);
  
      items.forEach((item) => {
        const collapse = item.querySelector(".collapse");
        if (!collapse) return;
  
        if (collapse.classList.contains("show")) {
          item.classList.add("active");
        }
        collapse.addEventListener("show.bs.collapse", () => {
          items.forEach((other) => {
            if (other !== item) {
              const otherCollapse = other.querySelector(".collapse");
              const instance = bootstrap.Collapse.getInstance(otherCollapse);
  
              if (instance) {
                instance.hide();
              }
              other.classList.remove("active");
            }
          });
  
          item.classList.add("active");
        });
  
        collapse.addEventListener("hide.bs.collapse", () => {
          item.classList.remove("active");
        });
      });
    }
  
    // INIT FAQ
    initAccordion(".faq-item");
  
    // INIT TOUR PLAN
    initAccordion(".property-schedule .tour-plan-item");
  });

  var peopleTourWidget = function () {
    var $peopleWidget = $('.widget-people-tour');

    if (!$peopleWidget.length) return;

    var $current = $peopleWidget.find('.current');
    var $guestItems = $peopleWidget.find('.guest-item');

    if (!$guestItems.length) return;

    $guestItems.each(function () {
        var $item = $(this);
        var $minus = $item.find('.minus');
        var $plus = $item.find('.plus');
        var $input = $item.find('input');

        $minus.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var value = parseInt($input.val(), 10) || 0;

            if (value > 0) {
                $input.val(value - 1);
                updatePeopleCurrent();
            }
        });

        $plus.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var value = parseInt($input.val(), 10) || 0;
            $input.val(value + 1);
            updatePeopleCurrent();
        });

        $input.on('change', function () {
            if (parseInt($input.val(), 10) < 0 || $input.val() === '') {
                $input.val(0);
            }

            updatePeopleCurrent();
        });
    });

    var updatePeopleCurrent = function () {
        var adults = parseInt($guestItems.eq(0).find('input').val(), 10) || 0;
        var children = parseInt($guestItems.eq(1).find('input').val(), 10) || 0;

        var parts = [];

        if (adults > 0) {
            parts.push(adults + ' Adult' + (adults > 1 ? 's' : ''));
        }

        if (children > 0) {
            parts.push(children + ' Child' + (children > 1 ? 'ren' : ''));
        }

        var text = parts.length > 0 ? parts.join(' - ') : 'Select guests';

        if ($current.length) {
            $current.text(text);
        }
    };

    updatePeopleCurrent();
  };

  document.addEventListener("DOMContentLoaded", () => {
    // ===== HANDLE STAR RATING =====
    document.querySelectorAll(".list-star").forEach((list) => {
      const stars = list.querySelectorAll(".icon-star");
      const input = list.parentElement.querySelector('input[type="hidden"]');
  
      if (!input || stars.length === 0) return;
  
      stars.forEach((star) => {
        const value = star.dataset.value;
        if (!value) return;
  
        // Hover effect
        star.addEventListener("mouseenter", () => {
          stars.forEach((s) => {
            s.classList.toggle(
              "active",
              Number(s.dataset.value) <= Number(value),
            );
          });
        });
  
        // Remove hover
        list.addEventListener("mouseleave", () => {
          stars.forEach((s) => {
            s.classList.remove("active");
            s.classList.toggle(
              "selected",
              Number(s.dataset.value) <= Number(input.value),
            );
          });
        });
  
        // Click select
        star.addEventListener("click", () => {
          input.value = value;
  
          stars.forEach((s) => {
            s.classList.toggle(
              "selected",
              Number(s.dataset.value) <= Number(value),
            );
          });
        });
      });
    });
  
    // ===== HANDLE FORM SUBMIT =====
    const form = document.getElementById("commentForm");
  
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const data = new FormData(form);
  
      // Check rating
      const ratings = [
        "rating_location",
        "rating_rooms",
        "rating_amenities",
        "rating_price",
        "rating_services",
        "rating_food",
      ];
  
      for (let rate of ratings) {
        const value = data.get(rate);
  
        if (!value || value === "0") {
          alert("Please rate all categories");
          return;
        }
      }
  
      // Reset form
      form.reset();
  
      document.querySelectorAll(".icon-star").forEach((star) => {
        star.classList.remove("active", "selected");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const wrap = document.querySelector(".wg-review-summary");
    if (!wrap) return;
  
    const maxScore = Number(wrap.dataset.max || 5);
    const count = tour_data_detail.reviewData.length;
  
    // RANGE
    const fields = Object.keys(tour_data_detail.reviewData[0]);
  
    const avgByField = {};
    fields.forEach((field) => {
      const total = tour_data_detail.reviewData.reduce(
        (sum, r) => sum + r[field],
        0,
      );
      avgByField[field] = total / count;
    });
  
    const totalAvg =
      Object.values(avgByField).reduce((s, v) => s + v, 0) / fields.length;
  
    // FIX
    wrap.querySelector(".score-value").textContent = totalAvg.toFixed(1);
  
    wrap.querySelector(".rating-count").textContent = count;
  
    renderStars(
      wrap.querySelector(".rating-summary .list-star"),
      Math.floor(totalAvg),
      maxScore,
    );
  
    // Avg Categories
    document.querySelectorAll(".box-breakdown-item").forEach((item) => {
      const label = item.querySelector("label").textContent.toLowerCase();
  
      const key = mapLabelToKey(label);
      if (!key || !avgByField[key]) return;
  
      const rate = avgByField[key];
  
      item.querySelector(".total-rate").textContent = rate.toFixed(1);
  
      renderStars(item.querySelector(".list-star"), Math.floor(rate), maxScore);
  
      item.querySelector(".progress-bar").style.width =
        (rate / maxScore) * 100 + "%";
    });
  
    // === RENDER RATE ===
    const rateWrap = document.querySelector(".rate");
    if (rateWrap) {
      const ratingText = rateWrap.querySelector(".rating-text");
      const ratingCount = rateWrap.querySelector(".rating-count");
      const listStar = rateWrap.querySelector(".list-star");
  
      if (ratingText) ratingText.textContent = totalAvg.toFixed(1);
      if (ratingCount) ratingCount.textContent = count;
      if (listStar) renderStars(listStar, Math.floor(totalAvg), maxScore);
    }
  });
  
  function renderStars(ul, active, max) {
    ul.innerHTML = "";
    for (let i = 1; i <= max; i++) {
      const li = document.createElement("li");
      li.className = i <= active ? "icon icon-star" : "icon icon-star ic-empty";
      ul.appendChild(li);
    }
  }
  
  function mapLabelToKey(label) {
    const map = {
      location: "location",
      rooms: "rooms",
      amenities: "amenities",
      price: "price",
      services: "services",
      food: "food",
    };
    return map[label] || null;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".otp-input");
  
    // Focus first input modal shown
    const modalOTP = document.getElementById("modalOTP");
    modalOTP.addEventListener("shown.bs.modal", () => {
      inputs[0].focus();
    });
  
    inputs.forEach((input, index) => {
      // NumberOnly
      input.addEventListener("input", (e) => {
        const value = e.target.value.replace(/\D/g, "");
        e.target.value = value;
  
        if (value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
  
      // Backspace
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });
  
    // Paste 6 auto fill
    document.getElementById("otpForm").addEventListener("paste", (e) => {
      const paste = e.clipboardData.getData("text").replace(/\D/g, "");
      if (paste.length === inputs.length) {
        inputs.forEach((input, i) => {
          input.value = paste[i];
        });
        inputs[inputs.length - 1].focus();
      }
    });
  
    // Get OTP value on submit
    document.getElementById("btnOtpContinue").addEventListener("click", () => {
      e.preventDefault();
      const otp = Array.from(inputs)
        .map((i) => i.value)
        .join("");
      console.log("OTP:", otp);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      alert("Login thành công ");
  
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("modalLogin"),
      );
      modal.hide();
    });
  });

  // Dom Ready
  $(function () {

    preloadRemove();
    backToTopProgress();
    breadcrumbDynamic();
    handleHeaderScroll();
    autoPopupInit();
    mobileMenuToggle();
    mobileSubmenuLevel1();
    mobileSubmenuLevel2();
    activeMenu();
    wishlistToggle();
    filterWishlist();
    likeUnlike();
    setActiveMenu();
    formSearchSubmit();
    initRangeSlider();
    peopleTourWidget();

  });
})(jQuery);








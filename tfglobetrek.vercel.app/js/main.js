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
        var href = ($link.attr('href') || '').split('/').pop();

        if (href === currentPath) {
            $link.addClass('active');

            var $parentMenu = $link.closest('.menu-item');
            if ($parentMenu.length) {
                $parentMenu.addClass('active');
            }
        }
    });
  };

  const tour_data_detail = {
    title:
      "Discovering Da Bia, the hamlet that captured an ASEAN Community Tourism Award",
    place: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    maxGuest: 40,
    minAge: 10,
    contact: "+123 456 7890",
    languages: ["English", "Vietnamese"],
    calendarData: {
      "2025-12-03": {
        times: ["7:00"],
        prices: {
          adult: 80,
          children: 40,
        },
      },
      "2025-12-04": {
        times: ["10:00", "15:00", "8:00"],
        prices: {
          adult: 99,
          children: 49,
        },
      },
      "2025-12-07": {
        times: ["15:00"],
        prices: {
          adult: 69,
          children: 34,
        },
      },
      "2025-12-10": {
        times: ["13:00"],
        prices: {
          adult: 80,
          children: 40,
        },
      },
      "2025-12-12": {
        times: ["7:00"],
        prices: {
          adult: 99,
          children: 49,
        },
      },
      "2025-12-20": {
        times: ["10:00"],
        prices: {
          adult: 120,
          children: 60,
        },
      },
      "2025-12-25": {
        times: ["15:00", "7:00"],
        prices: {
          adult: 150,
          children: 75,
        },
      },
      "2026-01-02": {
        times: ["13:00", "15:00"],
        prices: {
          adult: 90,
          children: 45,
        },
      },
      "2026-01-05": {
        times: ["11:00", "14:00"],
        prices: {
          adult: 95,
          children: 47,
        },
      },
      "2026-01-10": {
        times: ["9:00"],
        prices: {
          adult: 110,
          children: 55,
        },
      },
      "2026-01-15": {
        times: ["11:00", "12:00", "13:00", "8:00"],
        prices: {
          adult: 130,
          children: 65,
        },
      },
      "2026-02-01": {
        times: ["10:00", "15:00", "8:00"],
        prices: {
          adult: 85,
          children: 42,
        },
      },
      "2026-02-14": {
        times: ["12:00"],
        prices: {
          adult: 160,
          children: 80,
        },
      },
      "2026-02-20": {
        times: ["11:00", "12:00", "7:00"],
        prices: {
          adult: 100,
          children: 50,
        },
      },
      "2026-03-05": {
        times: ["10:00", "15:00", "7:00", "8:00"],
        prices: {
          adult: 105,
          children: 52,
        },
      },
      "2026-03-10": {
        times: ["10:00", "12:00", "15:00"],
        prices: {
          adult: 115,
          children: 57,
        },
      },
      "2026-03-25": {
        times: ["7:00"],
        prices: {
          adult: 140,
          children: 70,
        },
      },
      "2026-04-01": {
        times: ["11:00", "8:00"],
        prices: {
          adult: 120,
          children: 60,
        },
      },
      "2026-04-30": {
        times: ["13:00", "8:00"],
        prices: {
          adult: 180,
          children: 90,
        },
      },
      "2026-05-03": {
        times: ["12:00", "14:00", "8:00"],
        prices: {
          adult: 55,
          children: 27,
        },
      },
      "2026-05-07": {
        times: ["10:00", "12:00", "15:00"],
        prices: {
          adult: 197,
          children: 98,
        },
      },
      "2026-05-08": {
        times: ["11:00", "8:00", "9:00"],
        prices: {
          adult: 81,
          children: 40,
        },
      },
      "2026-05-15": {
        times: ["14:00", "9:00"],
        prices: {
          adult: 65,
          children: 32,
        },
      },
      "2026-05-21": {
        times: ["10:00", "11:00", "12:00", "9:00"],
        prices: {
          adult: 110,
          children: 55,
        },
      },
      "2026-05-26": {
        times: ["10:00"],
        prices: {
          adult: 78,
          children: 39,
        },
      },
      "2026-05-27": {
        times: ["12:00"],
        prices: {
          adult: 131,
          children: 65,
        },
      },
      "2026-06-08": {
        times: ["11:00", "14:00", "15:00", "8:00"],
        prices: {
          adult: 81,
          children: 40,
        },
      },
      "2026-06-19": {
        times: ["10:00", "14:00", "15:00"],
        prices: {
          adult: 200,
          children: 100,
        },
      },
      "2026-06-24": {
        times: ["11:00", "13:00", "8:00", "9:00"],
        prices: {
          adult: 200,
          children: 100,
        },
      },
      "2026-06-25": {
        times: ["13:00", "15:00", "9:00"],
        prices: {
          adult: 131,
          children: 65,
        },
      },
      "2026-06-27": {
        times: ["14:00", "9:00"],
        prices: {
          adult: 77,
          children: 38,
        },
      },
      "2026-06-28": {
        times: ["7:00"],
        prices: {
          adult: 160,
          children: 80,
        },
      },
      "2026-07-09": {
        times: ["9:00"],
        prices: {
          adult: 146,
          children: 73,
        },
      },
      "2026-07-11": {
        times: ["13:00", "8:00"],
        prices: {
          adult: 183,
          children: 91,
        },
      },
      "2026-07-14": {
        times: ["11:00", "13:00", "14:00", "9:00"],
        prices: {
          adult: 89,
          children: 44,
        },
      },
      "2026-08-05": {
        times: ["8:00"],
        prices: {
          adult: 142,
          children: 71,
        },
      },
      "2026-08-10": {
        times: ["12:00", "8:00", "9:00"],
        prices: {
          adult: 150,
          children: 75,
        },
      },
      "2026-08-24": {
        times: ["12:00", "14:00", "7:00", "9:00"],
        prices: {
          adult: 108,
          children: 54,
        },
      },
      "2026-08-26": {
        times: ["11:00", "15:00", "9:00"],
        prices: {
          adult: 194,
          children: 97,
        },
      },
      "2026-09-09": {
        times: ["11:00"],
        prices: {
          adult: 65,
          children: 32,
        },
      },
      "2026-09-17": {
        times: ["12:00", "9:00"],
        prices: {
          adult: 144,
          children: 72,
        },
      },
      "2026-10-01": {
        times: ["15:00", "7:00"],
        prices: {
          adult: 190,
          children: 95,
        },
      },
      "2026-10-09": {
        times: ["14:00", "15:00", "7:00"],
        prices: {
          adult: 200,
          children: 100,
        },
      },
      "2026-10-15": {
        times: ["10:00", "11:00", "7:00"],
        prices: {
          adult: 129,
          children: 64,
        },
      },
      "2026-10-28": {
        times: ["15:00", "8:00"],
        prices: {
          adult: 147,
          children: 73,
        },
      },
      "2026-11-10": {
        times: ["12:00", "15:00", "8:00", "9:00"],
        prices: {
          adult: 170,
          children: 85,
        },
      },
      "2026-11-13": {
        times: ["11:00", "14:00", "15:00", "9:00"],
        prices: {
          adult: 79,
          children: 39,
        },
      },
      "2026-11-14": {
        times: ["10:00", "12:00", "15:00", "9:00"],
        prices: {
          adult: 99,
          children: 49,
        },
      },
      "2026-12-01": {
        times: ["10:00", "11:00", "12:00", "14:00"],
        prices: {
          adult: 154,
          children: 77,
        },
      },
      "2026-12-09": {
        times: ["10:00"],
        prices: {
          adult: 156,
          children: 78,
        },
      },
      "2026-12-13": {
        times: ["12:00", "8:00"],
        prices: {
          adult: 186,
          children: 93,
        },
      },
      "2026-12-14": {
        times: ["15:00"],
        prices: {
          adult: 199,
          children: 99,
        },
      },
      "2026-12-16": {
        times: ["10:00", "7:00"],
        prices: {
          adult: 100,
          children: 50,
        },
      },
      "2026-12-22": {
        times: ["7:00"],
        prices: {
          adult: 124,
          children: 62,
        },
      },
      "2027-01-24": {
        times: ["7:00", "8:00"],
        prices: {
          adult: 179,
          children: 89,
        },
      },
      "2027-02-07": {
        times: ["10:00", "8:00", "9:00"],
        prices: {
          adult: 103,
          children: 51,
        },
      },
      "2027-02-09": {
        times: ["10:00", "11:00", "12:00", "9:00"],
        prices: {
          adult: 180,
          children: 90,
        },
      },
      "2027-02-14": {
        times: ["10:00", "13:00", "14:00", "15:00"],
        prices: {
          adult: 170,
          children: 85,
        },
      },
      "2027-02-17": {
        times: ["15:00", "8:00"],
        prices: {
          adult: 163,
          children: 81,
        },
      },
      "2027-02-25": {
        times: ["10:00", "12:00", "13:00", "14:00"],
        prices: {
          adult: 67,
          children: 33,
        },
      },
      "2027-03-14": {
        times: ["8:00"],
        prices: {
          adult: 130,
          children: 65,
        },
      },
      "2027-03-19": {
        times: ["13:00"],
        prices: {
          adult: 170,
          children: 85,
        },
      },
      "2027-03-23": {
        times: ["10:00", "15:00", "8:00"],
        prices: {
          adult: 74,
          children: 37,
        },
      },
      "2027-03-28": {
        times: ["14:00", "15:00"],
        prices: {
          adult: 119,
          children: 59,
        },
      },
      "2027-03-30": {
        times: ["13:00", "9:00"],
        prices: {
          adult: 52,
          children: 26,
        },
      },
      "2027-04-03": {
        times: ["10:00", "13:00", "14:00"],
        prices: {
          adult: 82,
          children: 41,
        },
      },
      "2027-04-07": {
        times: ["14:00"],
        prices: {
          adult: 139,
          children: 69,
        },
      },
      "2027-04-10": {
        times: ["7:00"],
        prices: {
          adult: 91,
          children: 45,
        },
      },
      "2027-04-14": {
        times: ["8:00"],
        prices: {
          adult: 53,
          children: 26,
        },
      },
      "2027-04-15": {
        times: ["13:00", "9:00"],
        prices: {
          adult: 191,
          children: 95,
        },
      },
      "2027-04-16": {
        times: ["10:00", "13:00", "14:00", "15:00"],
        prices: {
          adult: 59,
          children: 29,
        },
      },
      "2027-04-17": {
        times: ["9:00"],
        prices: {
          adult: 199,
          children: 99,
        },
      },
      "2027-04-21": {
        times: ["10:00", "13:00", "7:00", "9:00"],
        prices: {
          adult: 158,
          children: 79,
        },
      },
      "2027-04-27": {
        times: ["13:00", "14:00", "8:00"],
        prices: {
          adult: 199,
          children: 99,
        },
      },
      "2027-05-01": {
        times: ["10:00", "11:00"],
        prices: {
          adult: 72,
          children: 36,
        },
      },
      "2027-05-13": {
        times: ["15:00"],
        prices: {
          adult: 118,
          children: 59,
        },
      },
      "2027-05-17": {
        times: ["12:00"],
        prices: {
          adult: 162,
          children: 81,
        },
      },
      "2027-05-22": {
        times: ["7:00"],
        prices: {
          adult: 117,
          children: 58,
        },
      },
      "2027-05-26": {
        times: ["11:00", "15:00", "7:00", "9:00"],
        prices: {
          adult: 147,
          children: 73,
        },
      },
      "2027-06-03": {
        times: ["9:00"],
        prices: {
          adult: 164,
          children: 82,
        },
      },
      "2027-06-07": {
        times: ["8:00"],
        prices: {
          adult: 70,
          children: 35,
        },
      },
      "2027-06-14": {
        times: ["13:00", "8:00"],
        prices: {
          adult: 193,
          children: 96,
        },
      },
      "2027-06-19": {
        times: ["7:00", "8:00"],
        prices: {
          adult: 137,
          children: 68,
        },
      },
      "2027-06-23": {
        times: ["12:00", "15:00", "8:00", "9:00"],
        prices: {
          adult: 179,
          children: 89,
        },
      },
      "2027-06-27": {
        times: ["10:00", "11:00", "15:00"],
        prices: {
          adult: 172,
          children: 86,
        },
      },
      "2027-07-04": {
        times: ["11:00", "14:00"],
        prices: {
          adult: 81,
          children: 40,
        },
      },
      "2027-07-09": {
        times: ["10:00", "7:00", "8:00"],
        prices: {
          adult: 165,
          children: 82,
        },
      },
      "2027-07-18": {
        times: ["8:00"],
        prices: {
          adult: 170,
          children: 85,
        },
      },
      "2027-07-19": {
        times: ["11:00", "15:00"],
        prices: {
          adult: 85,
          children: 42,
        },
      },
      "2027-07-25": {
        times: ["12:00", "8:00"],
        prices: {
          adult: 189,
          children: 94,
        },
      },
      "2027-07-27": {
        times: ["11:00", "12:00"],
        prices: {
          adult: 128,
          children: 64,
        },
      },
      "2027-08-03": {
        times: ["11:00", "14:00"],
        prices: {
          adult: 105,
          children: 52,
        },
      },
      "2027-08-04": {
        times: ["15:00"],
        prices: {
          adult: 161,
          children: 80,
        },
      },
      "2027-08-05": {
        times: ["14:00", "8:00", "9:00"],
        prices: {
          adult: 190,
          children: 95,
        },
      },
      "2027-08-06": {
        times: ["8:00"],
        prices: {
          adult: 196,
          children: 98,
        },
      },
      "2027-08-10": {
        times: ["11:00", "15:00"],
        prices: {
          adult: 136,
          children: 68,
        },
      },
      "2027-08-14": {
        times: ["10:00", "12:00"],
        prices: {
          adult: 166,
          children: 83,
        },
      },
      "2027-08-21": {
        times: ["14:00", "15:00", "9:00"],
        prices: {
          adult: 190,
          children: 95,
        },
      },
      "2027-08-22": {
        times: ["8:00"],
        prices: {
          adult: 182,
          children: 91,
        },
      },
      "2027-08-27": {
        times: ["11:00", "14:00", "7:00", "9:00"],
        prices: {
          adult: 136,
          children: 68,
        },
      },
      "2027-08-30": {
        times: ["11:00", "9:00"],
        prices: {
          adult: 123,
          children: 61,
        },
      },
      "2027-09-07": {
        times: ["11:00", "13:00", "15:00", "7:00"],
        prices: {
          adult: 156,
          children: 78,
        },
      },
      "2027-09-24": {
        times: ["8:00"],
        prices: {
          adult: 73,
          children: 36,
        },
      },
      "2027-09-27": {
        times: ["15:00", "7:00"],
        prices: {
          adult: 93,
          children: 46,
        },
      },
      "2027-09-29": {
        times: ["10:00", "15:00", "9:00"],
        prices: {
          adult: 66,
          children: 33,
        },
      },
      "2027-10-01": {
        times: ["11:00", "7:00"],
        prices: {
          adult: 162,
          children: 81,
        },
      },
      "2027-10-08": {
        times: ["12:00", "7:00", "8:00"],
        prices: {
          adult: 87,
          children: 43,
        },
      },
      "2027-10-15": {
        times: ["12:00", "8:00"],
        prices: {
          adult: 98,
          children: 49,
        },
      },
      "2027-10-16": {
        times: ["10:00", "13:00", "8:00", "9:00"],
        prices: {
          adult: 69,
          children: 34,
        },
      },
      "2027-10-17": {
        times: ["13:00", "7:00"],
        prices: {
          adult: 52,
          children: 26,
        },
      },
      "2027-11-18": {
        times: ["12:00", "13:00"],
        prices: {
          adult: 71,
          children: 35,
        },
      },
      "2027-11-21": {
        times: ["11:00", "9:00"],
        prices: {
          adult: 170,
          children: 85,
        },
      },
      "2027-12-01": {
        times: ["13:00"],
        prices: {
          adult: 184,
          children: 92,
        },
      },
      "2027-12-16": {
        times: ["14:00"],
        prices: {
          adult: 190,
          children: 95,
        },
      },
      "2027-12-18": {
        times: ["10:00", "14:00"],
        prices: {
          adult: 144,
          children: 72,
        },
      },
      "2027-12-19": {
        times: ["10:00", "11:00", "8:00"],
        prices: {
          adult: 58,
          children: 29,
        },
      },
      "2027-12-26": {
        times: ["10:00"],
        prices: {
          adult: 50,
          children: 25,
        },
      },
      "2027-12-27": {
        times: ["11:00", "12:00", "13:00", "7:00"],
        prices: {
          adult: 143,
          children: 71,
        },
      },
      "2027-12-28": {
        times: ["12:00", "13:00", "15:00"],
        prices: {
          adult: 132,
          children: 66,
        },
      },
    },
    reviewData: [
      {
        location: 5,
        rooms: 4,
        amenities: 5,
        price: 4,
        services: 5,
        food: 4,
      },
      {
        location: 4,
        rooms: 4,
        amenities: 4,
        price: 3,
        services: 4,
        food: 3,
      },
      {
        location: 5,
        rooms: 5,
        amenities: 5,
        price: 4,
        services: 5,
        food: 5,
      },
    ],
  };

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








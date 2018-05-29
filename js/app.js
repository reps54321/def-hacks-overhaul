webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$(function () {
	  var ajaxJob, archivesFilter, casestudyDownloadInteraction, changeTitle, chooseLang, closeJobPopin, dragSections, draggableMap, formInteraction, goTo, gridArchives, gridTeam, inject_team_founders, inject_team_members, jobsFilter, label_human, linkGoTo, openEvent, processJobsListAll, pushState, removeBorder, resizeContact, scrollAnalytics, scrollListener, scrollToOfferSection, scrollToOffers, scrollValue, textAboutStats, timelineInteraction, trackingDoc, viewAllJobs, viewLegalNotices, viewSectors, zoomMap;
	  window.app = {
	    window: $(window),
	    document: $(document),
	    ww: window.innerWidth,
	    hh: window.innerHeight,
	    baseUrl: window.location.origin,
	    lang: '',
	    langNavigator: '',
	    currentIndex: 0,
	    currentSection: 'values',
	    move: false,
	    preload: true,
	    keynav: true,
	    subpage: false,
	    subpage_height: 0,
	    borderWidth: 50,
	    valueBorder: 0,
	    scrolled: 0,
	    mode: 'desktop',
	    breaking_1: 780,
	    breaking_2: 1030,
	    popstate: false,
	    heightTopbar: 74,
	    heightNav: 237
	  };
	  window.el = {
	    htmlbody: $('html,body'),
	    html: $('html'),
	    body: $('body'),
	    preload: $('#preload'),
	    sound: document.getElementById('sound'),
	    main_header: $('.main_header'),
	    content: $('#content'),
	    sec_wrap: $('.sections_wrap'),
	    sec_sections: $('.sections_wrap > section'),
	    sec_header: $('.nav_sections'),
	    nav_li: $('.nav_sections li'),
	    main_topbar: $('.main_topbar'),
	    main_nav: $('.main_nav'),
	    main_nav_li: $('.main_nav li'),
	    breadcrumb_li: $('.nav_breadcrumb li'),
	    home_enter: $('.home_enter'),
	    map_zoom_in: $('#zoom_in'),
	    map_zoom_out: $('#zoom_out'),
	    border_fix: $('.border_fix'),
	    contact_form: $('#contact_form'),
	    currentSec: '',
	    targetSec: '',
	    ajax: $('.ajax'),
	    section_ajax: $('#section_ajax'),
	    section_main: $('#section_main'),
	    loader_ajax: $('.loader_ajax'),
	    scrolltop: $('#scrolltop')
	  };
	  window.secTab = {
	    0: $('.section_values'),
	    1: $('.section_services'),
	    2: $('.section_tech'),
	    3: $('.section_clients'),
	    4: $('.section_team'),
	    5: $('.section_news'),
	    6: $('.section_jobs'),
	    7: $('.section_contact')
	  };
	  window.navTab = {
	    0: el.main_nav.find('.nav_values'),
	    1: el.main_nav.find('.nav_services'),
	    2: el.main_nav.find('.nav_tech'),
	    3: el.main_nav.find('.nav_clients'),
	    4: el.main_nav.find('.nav_team'),
	    5: el.main_nav.find('.nav_news'),
	    6: el.main_nav.find('.nav_jobs'),
	    7: el.main_nav.find('.nav_contact')
	  };
	  window.hhTab = {};
	  scrollValue = null;

	  el.targetSec = secTab[0];
	  $('.choose_lang').hide();

	  $('.country-list a').click(function () {
	    window.document.cookie = "__55ctn\x3d" + event.target.href + ";expires\x3d" + (+new Date + 3.154e+10)
	      + ";path\x3d/;domain\x3d;"
	  });

	  $('.news_reviews li').click(function () {
	    res = false;
	    while (!res) {
	      var target = event.target || event.srcElement,
	        node = target;

	      if (target.nodeName.toLowerCase() === "a") {
	        res = true;
	      }
	      while (node != null && !res) {
	        if (node.nodeName.toLowerCase() === "a") {
	          res = true;
	        } else {
	          node = node.parentNode;
	        }
	      }
	    }
	    dataLayer.push({ event: "newsItem", source: node.href.split('/', -1)[2] });
	  });

	  /* Section team fixes  */
	  app.window.on('contentLoaded', function () {
	    /*if(!window.location.hash.length) el.home_enter.trigger('click');*/
	    setTimeout(function () { $('.choose_lang').show(); }, 1500);
	    gridTeam();
	    var items = app.mode === 'mobile' ? 22 : 32;
	    $('.and-you').insertBefore($('.team_grid li').eq(Math.floor(Math.random() * items)));
	    $('.js-reload-bt').click(function () {
	      gridTeam();
	      $('.and-you').insertBefore($('.team_grid li').eq(Math.floor(Math.random() * items)));
	    });
	  });

	  $('.section_team a, .section_clients a').on('click', function (e) {
	    if ($(this).attr('href') === '#contact') goTo($('.section_team .nav_breadcrumb li.bc_contact'), app.mode);
	    else if ($(this).parent().get(0).className === "case_box")
	      dataLayer.push({ event: "caseStudyClick", customer: $(this).find('h4').text() })
	  });
	  $('body').on('click', '.and-you', function (e) { goTo($('.section_team .nav_breadcrumb li.bc_jobs'), app.mode); });

	  /*---- APP VAR ---- */
	  $('.section_values .section_content .block').on('click', function () {
	    var id = $(this).attr('data-content'),
	      hasClass = $('#' + id).hasClass('open');

	    $('.section_values .block.open').removeClass('open');

	    if (!hasClass) {
	      $('#' + id).addClass('open');
	      dataLayer.push({
	        event: 'subsectionClick',
	        subsectionName: $('#' + id).find('span.title').text().replace('#', '')
	      });
	    }

	    //$(window).trigger('resize');
	    $('html, body').animate({ scrollTop: $('.section_values .block.open').offset().top - 40 }, 500);

	  });

	  $('.section_services .section_content .left .block').on('click', function () {
	    $('.section_services .section_content .left').addClass('open');
	    $('.section_services .section_content .right .open').removeClass('open');
	    $('.section_services .section_content .left .open').removeClass('open');

	    var id = $(this).attr('data-content');

	    if (!$('#' + id).hasClass('open')) {
	      dataLayer.push({
	        event: 'subsectionClick',
	        subsectionName: $('#' + id + ' .title').text()
	      });
	    }

	    $('#' + id).toggleClass('open');
	    $(this).toggleClass('open');

	    var gap = $('.border_top.border_fix').height() - 35;
	    $('html, body').animate({ scrollTop: $('.section_services .left').offset().top - gap }, 500);
	    //$(window).trigger('resize');
	  });

	  $('.section_tech .section_content .block').on('click', function () {
	    var id = $(this).attr('data-content'),
	      hasClass = $('#' + id).hasClass('open');

	    $('.section_tech .block.open').removeClass('open');

	    if (!hasClass) {
	      $('#' + id).addClass('open');
	      dataLayer.push({
	        event: 'subsectionClick',
	        subsectionName: $('#' + id + ' .title').text()
	      });
	    }

	    $(window).trigger('resize');
	    $('html, body').animate({ scrollTop: $('.section_tech .block.open').offset().top - 60 }, 500);
	  });

	  /* Home => logo hover transition */


	  /* if cn => change scrolltop logo*/
	  if (el.html.attr('lang') === 'cn') $('.logo_scrolltop', el.scrolltop).attr('src', '/wp-content/themes/fiftyfive/assets/img/fifty-five-logo-red_CN.svg');

	  /* services, click on contact buttons */
	  $('.section_services a').on('click', function (e) {
	    if ($(this).attr('href') === '#contact') goTo($('.section_services .nav_breadcrumb li.bc_contact'), app.mode);
	  });

	  /* tech, click on contact buttons */
	  $('.section_tech a').on('click', function (e) {
	    if ($(this).attr('href') === '#contact') goTo($('.section_tech .nav_breadcrumb li.bc_contact'), app.mode);
	  });

	  /* Contact page, fake select, default label + hidden form input */
	  var selectedCountry = function () {
	    switch (location.host.split('.').pop()) {
	      case 'fr': return 'Paris';
	      case 'us': return 'New York';
	      case 'uk': return 'London';
	      case 'hk': return 'Hong Kong';
	      case 'cn': return 'Shanghai';
	      default: return 'London';
	    }
	  }
	  $('.section_contact .contact_form .fakeselect').text(selectedCountry());
	  $('#contact_form #form_country').val(selectedCountry());

	  /* update switch lang if hk*/
	  if (selectedCountry() === 'Hong Kong') {
	    $('.choose_lang > span').text('HK');
	    $('.choose_lang ul li[data-lang="hk"]').hide();
	    $('.choose_lang ul li[data-lang="en"]').show();
	  }

	  /* end window events */
	  goTo = function (t, mode, clickhome) {
	    /* MOBILE MODE */
	    var resizePage, trueH;
	    resizePage = function () {
	      if (!app.subpage) {
	        el.sec_wrap.css('height', hhTab[app.currentIndex]);
	        secTab[app.currentIndex].css('height', hhTab[app.currentIndex]);
	      }
	    };
	    if (mode === 'mobile') {

	      /* Refresh var */
	      el.currentSec = secTab[app.currentIndex];
	      app.currentIndex = t.attr('data-index') - 1;
	      app.currentSection = t.attr('data-section');
	      el.targetSec = secTab[app.currentIndex];

	      /* Transition + refresh height + hide menu */
	      el.sec_wrap.css({
	        '-webkit-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	        '-moz-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	        '-o-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        '-ms-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        'transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	        'height': hhTab[app.currentIndex]
	      });
	      el.targetSec.css('height', hhTab[app.currentIndex]);
	      el.main_nav.removeClass('show');
	      if (app.currentIndex === 0) {
	        //el.sec_wrap.css('height', app.hh - app.heightTopbar);
	      }
	    }

	    /* TABLET MODE */
	    if (mode === 'tablet') {

	      /* Play audio */
	      /*el.sound.play();*/

	      /* Refresh var */
	      el.currentSec = secTab[app.currentIndex];
	      app.currentIndex = t.attr('data-index') - 1;
	      app.currentSection = t.attr('data-section');
	      el.targetSec = secTab[app.currentIndex];

	      /* Transition + refresh height */
	      el.sec_wrap.css({
	        '-webkit-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	        '-moz-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	        '-o-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        '-ms-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        'transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	        'height': hhTab[app.currentIndex]
	      });
	      el.targetSec.css('height', hhTab[app.currentIndex]);
	    }

	    /* DESKTOP MODE */
	    if (mode === 'desktop') {

	      /* Play audio */
	      /*el.sound.play();*/

	      /* Keep translateX on li click */
	      if (app.mode !== 'mobile') {
	        t.addClass('on');
	      }
	      /* ---  Step 1 --- */
	      el.currentSec = secTab[app.currentIndex];
	      if (app.currentIndex === 0) {
	        //el.sec_sections.addClass('border_show');
	        //el.border_fix.addClass('init');
	      }

	      /* ---  Step 2 --- */
	      app.currentIndex = t.attr('data-index') - 1;
	      app.currentSection = t.attr('data-section');
	      if (clickhome || app.delaytransition) {
	        setTimeout((function () {
	          el.sec_wrap.css({
	            '-webkit-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	            '-moz-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	            '-o-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	            '-ms-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	            'transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)'
	          });
	          el.targetSec = secTab[app.currentIndex];
	        }), 500);
	      } else if (app.window.scrollTop() > 0) {
	        el.htmlbody.animate({
	          scrollTop: 0
	        }, 400);
	        setTimeout((function () {
	          el.sec_wrap.css({
	            '-webkit-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	            '-moz-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	            '-o-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	            '-ms-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	            'transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)'
	          });
	          el.targetSec = secTab[app.currentIndex];
	        }), 500);
	      } else {
	        el.sec_wrap.css({
	          '-webkit-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	          '-moz-transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)',
	          '-o-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	          '-ms-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	          'transform': 'translate3d(-' + app.ww * app.currentIndex + 'px, 0, 0)'
	        });
	        el.targetSec = secTab[app.currentIndex];
	      }
	      app.scrolled = 0;

	      /* --- Step 4 --- */

	      /* Scroll down listener */
	      scrollListener();

	      /* Remove translateX on li click */
	      if (app.mode !== 'mobile') {
	        setTimeout((function () {
	          return el.nav_li.removeClass('on');
	        }), 1400);
	      }

	      /* Background body grey if last section (drag right to left) */
	      if (app.currentIndex === 8) {
	        el.body.addClass('bg_grey');
	      } else {
	        el.body.removeClass('bg_grey');
	      }

	      /* Remove errors on contact form */
	      $('.form_errors').removeClass('show');
	      if (app.currentIndex !== 0) {
	        resizePage();
	      } else {
	        if (app.window.scrollTop() > 0) {
	          setTimeout((function () {
	            resizePage();
	          }), 450);
	        } else {
	          resizePage();
	        }
	      }
	    }

	    /* contact */
	    if (app.currentIndex === 8 && app.ww < 768) {
	      trueH = hhTab[app.currentIndex] + app.heightTopbar;
	      el.sec_wrap.css('height', trueH);
	      secTab[app.currentIndex].css('height', trueH + 200);
	    }
	    if ($('.section_home > div').hasClass('red')) {
	      $('.section_home > div').removeClass('red');
	    }

	    /* Anim 55% */
	    if (app.currentIndex === 3) {
	      textAboutStats();
	    }

	    /* PUSH IN HISTORY */
	    if (window.history.pushState) {
	      if (app.popstate === false) {
	        app.window.off('onpopstate');
	        if (t.hasClass('home_enter')) {
	          pushState(t.attr('data-index') - 1, t.attr('href'));
	        } else {
	          pushState(t.attr('data-index') - 1, t.find('a').attr('href'));
	        }
	        app.window.on('onpopstate');
	      }
	    }

	    /* Analytics */
	    return dataLayer.push({
	      event: 'sectionChange',
	      sectionName: app.currentSection
	    });
	  };

	  /* end goTo */

	  /*NAV SNIPPETS */

	  /*Remove border */
	  removeBorder = function () {
	    return el.body.removeClass('overflow');
	  };

	  /*Enable / disable draggable map */
	  draggableMap = function () {
	    if (BrowserDetect.OS === 'Windows' || BrowserDetect.OS === 'Mac' || BrowserDetect.OS === 'Linux') {
	      map.setOptions({
	        draggable: true
	      });
	    }
	  };

	  /* History */
	  pushState = function (targetTitle, targetUrl) {
	    var stateObj;
	    if (window.history.pushState) {
	      stateObj = {
	        title: targetTitle,
	        url: targetUrl
	      };
	      window.history.pushState(stateObj, targetTitle, targetUrl);
	    }
	  };

	  /*------- SCRIPTS ------- */

	  /*Drag between sections */
	  dragSections = function () {
	    var dataDrag, dragEventSections, dragWrap;
	    dataDrag = {
	      upX: 0,
	      downX: 0,
	      prevX: 0,
	      enableMove: false
	    };
	    dragWrap = function (valueDrag) {
	      return el.sec_wrap.css({
	        '-webkit-transform': 'translate3d(-' + valueDrag + 'px, 0, 0)',
	        '-moz-transform': 'translate3d(-' + valueDrag + 'px, 0, 0)',
	        '-o-transform': 'translateX(-' + valueDrag + 'px)',
	        '-ms-transform': 'translateX(-' + valueDrag + 'px)',
	        'transform': 'translate3d(-' + valueDrag + 'px, 0, 0)'
	      });
	    };
	    dragEventSections = function (e, eventStart, eventMove, eventEnd) {
	      var next, prev;
	      if (e.type === eventStart) {
	        dataDrag.prevX = 0;
	        if (eventStart === 'touchstart') {
	          dataDrag.downX = e.originalEvent.touches[0].pageX;
	        } else {
	          dataDrag.downX = e.pageX;
	        }
	        dataDrag.enableMove = true;
	        el.sec_wrap.addClass('move');
	      }
	      if (e.type === eventMove && dataDrag.enableMove) {
	        if (eventMove === 'touchmove') {
	          dataDrag.upX = e.originalEvent.touches[0].pageX;
	        } else {
	          dataDrag.upX = e.pageX;
	        }
	        dataDrag.upX = dataDrag.prevX - ((dataDrag.downX - dataDrag.upX) / 2);
	        dragWrap(Math.floor(app.ww * app.currentIndex - (dataDrag.upX * 2)));
	        app.move = true;
	      }
	      if (e.type === eventEnd) {
	        if (app.move) {
	          dataDrag.prevX = dataDrag.upX;
	        }
	        dataDrag.enableMove = false;
	        el.sec_wrap.removeClass('move');
	        if (Math.abs(dataDrag.prevX * 2) > 2 && dataDrag.prevX * 2 > 150) {
	          prev = secTab[app.currentIndex].find('.prev');
	          if (prev.length) {
	            prev.click();
	            app.popstate = false;
	            window.location.hash = prev.attr('data-section');
	          }
	        } else {
	          dragWrap(app.ww * app.currentIndex);
	        }
	        if (Math.abs(dataDrag.prevX * 2) > 2 && dataDrag.prevX * 2 < -150) {
	          next = secTab[app.currentIndex].find('.next');
	          if (next.length) {
	            next.click();
	            app.popstate = false;
	            window.location.hash = next.attr('data-section');
	          }
	        } else {
	          dragWrap(app.ww * app.currentIndex);
	        }
	        dataDrag.prevX = 0;
	        return app.move = false;
	      }
	    };
	    if (BrowserDetect.OS === 'Mac' || BrowserDetect.OS === 'Windows' || BrowserDetect.OS === 'Linux') {
	      return el.sec_header.on('mousedown mousemove mouseup', function (e) {
	        return dragEventSections(e, 'mousedown', 'mousemove', 'mouseup');
	      });
	    }
	  };

	  /*01. Offer page - Scroll to target section */
	  scrollToOffers = function () {
	    var goToBlock, offers_multiblocks, offers_resume;
	    offers_multiblocks = $('.offers_multiblocks');
	    offers_resume = $('.offers_resume');
	    goToBlock = function (t) {
	      var valueTop;
	      if (app.window.scrollTop() < 50 && app.mode === 'desktop') {
	        valueTop = offers_multiblocks.eq(t.index()).offset().top - app.borderWidth - 30;
	      } else {
	        valueTop = offers_multiblocks.eq(t.index()).offset().top - 30;
	      }
	      return el.htmlbody.animate({
	        scrollTop: valueTop
	      }, 500);
	    };
	    offers_resume.find('span').on('click', function () {
	      return goToBlock($(this));
	    });
	    return offers_multiblocks.find('li').on('click', function () {
	      return goToBlock($(this));
	    });
	  };

	  /*TPL Offer - Scroll to target section */
	  scrollToOfferSection = function () {
	    var goToBlock, offer_header, offer_section;
	    offer_header = $('.offer_section_header');
	    offer_section = $('.offer_section');
	    goToBlock = function (t) {
	      var valueTop;
	      valueTop = offer_section.eq(t.index()).offset().top - 30;
	      return el.htmlbody.animate({
	        scrollTop: valueTop
	      }, 500);
	    };
	    return offer_header.find('li').on('click', function () {
	      return goToBlock($(this));
	    });
	  };
	  casestudyDownloadInteraction = function () {
	    var casestudy_link, casestudy_list_li, casestudy_txt, resizeTxt;
	    casestudy_list_li = $('#casestudy_dl_list').find('li');
	    casestudy_link = $('#casestudy_dl_link');
	    casestudy_txt = $('#casestudy_dl_txt');
	    resizeTxt = function (h) {
	      if (h > 27) {
	        casestudy_txt.css('margin-top', -27);
	      } else {
	        casestudy_txt.css('margin-top', -14);
	      }
	    };
	    casestudy_list_li.on('click', function () {
	      var t;
	      t = $(this);
	      casestudy_link.attr('href', t.attr('data-file'));
	      casestudy_txt.html(t.attr('data-text'));
	      if (app.ww > 1100) {
	        return resizeTxt(casestudy_txt.height());
	      }
	    });
	    return app.window.on('load resize', function () {
	      if (app.ww > 1100) {
	        return resizeTxt(casestudy_txt.height());
	      } else {
	        return $('#casestudy_dl_txt').css('margin-top', 0);
	      }
	    });
	  };

	  /* 05. Contact - Style select fields */
	  formInteraction = function (page) {

	    /* Style select fields */
	    var select;
	    select = {
	      fakeselect: $('.fakeselect'),
	      fakeoptions: $('.fakeoptions')
	    };
	    select.fakeselect.off('click');
	    select.fakeselect.on('click', function () {
	      var fakeOptionTarget, t;
	      t = $(this);
	      fakeOptionTarget = $('.fakeoptions[data-select=' + t.attr('data-select') + ']');
	      if (fakeOptionTarget.is(':visible')) {
	        if (!fakeOptionTarget.find('li.select').length) {
	          t.removeClass('active');
	        }
	      } else {
	        t.addClass('active');
	      }
	      fakeOptionTarget.fadeToggle(200);
	      select.fakeoptions.not(fakeOptionTarget).fadeOut(200);
	      return false;
	    });
	    app.document.on('click', function () {
	      select.fakeoptions.fadeOut(200);
	      $('.job_list_offers').removeClass('opacity');
	      return $('.jobs_filters .fakeoptions').each(function () {
	        if (!$(this).find('li.select').length) {
	          return $(this).prev('.fakeselect').removeClass('active');
	        }
	      });
	    });
	    select.fakeoptions.find('li').on('click', function (e) {
	      var selectValue, t;
	      t = $(this);
	      selectValue = t.parent().attr('data-select');
	      if (selectValue === 'jobs_filters_type' || selectValue === 'jobs_filters_function' || selectValue === 'jobs_filters_country') {
	        t.toggleClass('select');
	        jobsFilter();
	        setTimeout((function () {
	          $('.job_list_offers').removeClass('opacity');
	          select.fakeoptions.fadeOut(200);
	        }), 100);
	      } else {
	        if (page === 'archives') {
	          t.toggleClass('select');
	          archivesFilter();
	          setTimeout((function () {
	            select.fakeoptions.fadeOut(200);
	          }), 600);
	          return false;
	        } else {
	          $('.fakeselect[data-select=' + selectValue + ']').html(t.html()).removeClass('init');
	          $('select[data-select=' + selectValue + '] option').attr('value', t.html());
	          select.fakeoptions.fadeOut(200);
	          if (app.currentSection === 'contact') {
	            $('.contact_address_box ').removeClass('active').eq($(this).index()).addClass('active');
	          }
	        }
	      }

	      /*update hidden form input */
	      var c = $('.section_contact .contact_form .fakeselect').text();
	      $('#contact_form #form_country').val(c);

	      e.stopImmediatePropagation();
	      return e.preventDefault();
	    });

	    /* Prevent default keydown if focus */
	    $('input, textarea').on('focus blur', function (e) {
	      if (e.type === 'focus') {
	        app.keynav = false;
	      } else {
	        app.keynav = true;
	      }
	    });
	  };
	  archivesFilter = function () {
	    var ajax_url, filterOptions, hideLoader, i, j, loaderInterval, paramUrl, posValue, targetOptions;
	    filterOptions = {
	      year: [],
	      type: []
	    };

	    /* Targeting options in filters */
	    targetOptions = function (filter, dataname, location) {
	      return filter.find('li').each(function () {
	        var t;
	        t = $(this);
	        if (t.attr('class') === 'select') {
	          return location.push(t.attr(dataname));
	        }
	      });
	    };
	    hideLoader = function () {
	      clearInterval(loaderInterval);
	      return el.loader_ajax.removeClass('show');
	    };
	    targetOptions($('#filter_year'), 'data-year', filterOptions.year);
	    targetOptions($('#filter_type'), 'data-type', filterOptions.type);

	    /* Show grid */
	    paramUrl = '';
	    if (filterOptions.year.length) {
	      paramUrl += '?filter_year=';
	      i = 0;
	      while (i < filterOptions.year.length) {
	        paramUrl += filterOptions.year[i];
	        if (i !== filterOptions.year.length - 1) {
	          paramUrl += '-';
	        }
	        i++;
	      }
	    }
	    if (filterOptions.type.length) {
	      if (filterOptions.year.length) {
	        paramUrl += '&filter_type=';
	      } else {
	        paramUrl += '?filter_type=';
	      }
	      j = 0;
	      while (j < filterOptions.type.length) {
	        paramUrl += filterOptions.type[j];
	        if (j !== filterOptions.type.length - 1) {
	          paramUrl += '-';
	        }
	        j++;
	      }
	    } else {

	    }
	    if (paramUrl === 'allyears/alltypes/') {
	      paramUrl = '';
	    }
	    el.loader_ajax.addClass('show');
	    posValue = 0;
	    loaderInterval = setInterval((function () {
	      var ajax_url;
	      posValue += 20;
	      el.loader_ajax.css('background-position', posValue + 'px 0');
	    }), 22);
	    if (app.lang === '' || app.lang === 'en') {
	      ajax_url = app.baseUrl + '/archives/' + paramUrl;
	    } else {
	      ajax_url = app.baseUrl + '/' + app.lang + '/archives/' + paramUrl;
	    }
	    return $.ajax({
	      url: ajax_url,
	      type: 'GET',
	      success: function (output) {
	        var targetContent;
	        pushState('Archives', ajax_url);
	        targetContent = $(output).find('#ajax_archives').html();
	        setTimeout((function () {
	          hideLoader();
	        }), 500);
	        setTimeout((function () {
	          $('#ajax_archives').html(targetContent);
	          if (!$('#ajax_archives').find('li').length) {
	            $('#ajax_archives').html('No archives found');
	          }
	        }), 600);
	        setTimeout((function () {
	          gridArchives();
	        }), 750);
	      },
	      error: function () {
	        alert('No pages found');
	        return hideLoader();
	      }
	    });
	  };

	  /*Jobs filter */
	  jobsFilter = function () {
	    var chmod, ctn, fakeselectActive, filterOptions, jobs_li_tab, jobs_msg_empty, jobs_ul, str, trackValues;
	    fakeselectActive = function (id, active) {
	      var fakeselect;
	      fakeselect = $('.fakeselect[data-select=' + id + ']');
	      if (active) {
	        return fakeselect.addClass('active');
	      } else {
	        return fakeselect.removeClass('active');
	      }
	    };
	    if ($('#section_ajax').hasClass('right')) {
	      ctn = $('#section_main');
	    } else {
	      ctn = $('#section_ajax');
	    }
	    jobs_ul = ctn.find('.js-job_list_offers');
	    jobs_msg_empty = $('.jobs_listing_offers .msg-empty');
	    jobs_ul.find('li').removeClass('job_show');
	    ctn.find('.jobs_view_all').css('display', 'none');
	    filterOptions = {
	      type: [],
	      profile: [],
	      country: []
	    };
	    jobs_li_tab = [];
	    str = {};
	    trackValues = [];
	    ctn.find('#filter_job_type').find('li').each(function () {
	      if ($(this).hasClass('select')) {
	        filterOptions.type.push($(this).attr('data-type'));
	        return trackValues = [$(this).attr('data-type'), 'type'];
	      }
	    });
	    str.type = filterOptions.type.join();
	    ctn.find('#filter_job_function').find('li').each(function () {
	      if ($(this).hasClass('select')) {
	        filterOptions.profile.push($(this).attr('data-function'));
	        return trackValues = [$(this).attr('data-function'), 'function'];
	      }
	    });
	    str.profile = filterOptions.profile.join();
	    ctn.find('#filter_job_location').find('li').each(function () {
	      if ($(this).hasClass('select')) {
	        filterOptions.country.push($(this).attr('data-country'));
	        return trackValues = [$(this).attr('data-country'), 'country'];
	      }
	    });
	    str.country = filterOptions.country.join();
	    chmod = '';
	    if (filterOptions.type.length) {
	      chmod = '1';
	    } else {
	      chmod = '0';
	    }
	    if (filterOptions.profile.length) {
	      chmod = chmod + '1';
	    } else {
	      chmod = chmod + '0';
	    }
	    if (filterOptions.country.length) {
	      chmod = chmod + '1';
	    } else {
	      chmod = chmod + '0';
	    }
	    dataLayer.push({
	      event: 'jobFilter',
	      filterCriteria: trackValues[1],
	      filterValue: trackValues[0]
	    });
	    jobs_ul.find('li').each(function () {
	      var countries_li, out, t, test;
	      t = $(this);
	      out = false;
	      test = {};
	      if (filterOptions.type.length && filterOptions.type.indexOf(t.attr('data-type')) < 0) {
	        out = true;
	        test.type = false;
	      } else {
	        test.type = true;
	      }
	      if (filterOptions.profile.length && filterOptions.profile.indexOf(t.attr('data-function')) < 0) {
	        out = true;
	        test.profile = false;
	      } else {
	        test.profile = true;
	      }
	      if (filterOptions.country.length) {
	        countries_li = t.attr('data-country').split(', ');
	        $.each(countries_li, function (index, value) {
	          if (filterOptions.country.indexOf(value) >= 0) {
	            out = false;
	            test.country = true;
	            return false;
	          } else {
	            out = true;
	            return test.country = false;
	          }
	        });
	      } else {
	        test.country = true;
	      }
	      switch (chmod) {
	        case '001':
	        case '010':
	        case '011':
	          if (test.profile && test.country) {
	            out = false;
	          } else {
	            out = true;
	          }
	          break;
	        case '100':
	        case '101':
	          if (test.type && test.country) {
	            out = false;
	          } else {
	            out = true;
	          }
	          break;
	        case '110':
	          if (test.type && test.profile) {
	            out = false;
	          } else {
	            out = true;
	          }
	          break;
	        case '111':
	          if (test.type && test.profile && test.country) {
	            out = false;
	          } else {
	            out = true;
	          }
	      }
	      if (!out) {
	        t.addClass('job_show');
	      } else {
	        t.removeClass('job_show');
	      }
	      jobs_msg_empty.removeClass('show');
	      $('.jobs_filters > li').each(function () {
	        var fakeoptions;
	        fakeoptions = $(this).find('.fakeoptions');
	        if (fakeoptions.find('li.select').length) {
	          return fakeselectActive(fakeoptions.attr('data-select'), true);
	        } else {
	          return fakeselectActive(fakeoptions.attr('data-select'), false);
	        }
	      });
	      return setTimeout((function () {
	        var jobs_nb, jobs_nb_results, jobs_no_results, jobs_oneresult, jobs_results, nb_results;
	        nb_results = 0;
	        jobs_nb = ctn.find('.jobs_nb_results');
	        jobs_no_results = jobs_nb.find('.no_results');
	        jobs_oneresult = jobs_nb.find('.name_oneresult');
	        jobs_results = jobs_nb.find('.name_results');
	        jobs_nb_results = jobs_nb.find('.nb_results');
	        jobs_ul.find('li').each(function () {
	          if ($(this).hasClass('job_show')) {
	            nb_results++;
	          }
	        });
	        jobs_nb_results.html(nb_results);
	        if (nb_results === 0) {
	          jobs_nb_results.addClass('hide');
	          jobs_no_results.removeClass('hide');
	          jobs_results.addClass('hide');
	          jobs_oneresult.removeClass('hide');
	          return jobs_msg_empty.addClass('show');
	        } else {
	          if (nb_results === 1) {
	            jobs_no_results.addClass('hide');
	            jobs_nb_results.removeClass('hide');
	            jobs_results.addClass('hide');
	            return jobs_oneresult.removeClass('hide');
	          } else {
	            jobs_no_results.addClass('hide');
	            jobs_oneresult.addClass('hide');
	            jobs_results.removeClass('hide');
	            return jobs_nb_results.removeClass('hide');
	          }
	        }
	      }), 100);
	    });
	    return processJobsListAll();
	  };

	  /*View all jobs */
	  viewAllJobs = function () {
	    var jobs_ul, view_all_bt;
	    $('.jobs_nb_results .nb_results').html($('.job_list_offers').find('li').length);
	    view_all_bt = $('.jobs_view_all');
	    jobs_ul = $('.job_list_offers');
	    return view_all_bt.on('click', function () {
	      var t;
	      t = $(this);
	      if (!t.hasClass('close')) {
	        t.addClass('close');
	        return jobs_ul.find('li').addClass('job_show');
	      } else {
	        jobs_ul.find('li').slice(4, jobs_ul.find('li').length).removeClass('job_show');
	        return t.removeClass('close');
	      }
	    });
	  };

	  /*05. Contact - Zoom map */
	  zoomMap = function () {
	    el.map_zoom_in.on('click', function () {
	      return map.setZoom(map.getZoom() + 1);
	    });
	    return el.map_zoom_out.on('click', function () {
	      return map.setZoom(map.getZoom() - 1);
	    });
	  };

	  /*03. About - Grids (team / founders) */
	  gridTeam = function () {
	    var gridTeamInteraction, grid_members_li, grid_members_li_empty, historic_txt, initBio, largeWrapInit, member_bio, member_job, member_name, member_viewbio, nbElByRow, nbElByRowInit, prev, toggleGridTeam, txt_1, txt_2;
	    grid_members_li = $('.team_grid li:not(.and-you)');
	    grid_members_li_empty = $('.team_grid li.empty');
	    member_name = $('.member_name');
	    member_job = $('.member_job');
	    member_viewbio = $('.member_viewbio');
	    member_bio = $('.member_bio');
	    txt_1 = $('.team_mbg');
	    txt_2 = $('.team_member');
	    team_nbElByRow = 8;
	    team_nbElByRowInit = 6;
	    largeWrapInit = 1000;
	    historic_txt = {};
	    prev = {};
	    initBio = function () {
	      member_viewbio.removeClass('back').html('+');
	      return member_bio.removeClass('show');
	    };

	    grid_members_li.removeClass('active color');

	    /* Click on profil */
	    gridTeamInteraction = function (t, nbEl) {
	      var bioTarget, bioThis, index, jobTarget, jobThis, nameTarget, nameThis, target, targetIndex, name;
	      index = t.index();
	      if (!t.hasClass('empty')) {
	        /* Init bio */
	        initBio();
	        if (!t.hasClass('color')) {
	          name = t.find('.member-pic').get(0).style['background-image'].split('/').pop().split('-');
	          dataLayer.push({
	            event: 'faceClick',
	            fiftyFiverName: name[0] + " " + name[1].split('.')[0],
	            jobName: t.find('.member_job').html()
	          });
	        }

	        /* 0. Active color img */
	        t.toggleClass('color');
	        grid_members_li.not(t).removeClass('color');

	        /* 1. Push dom text into prev active case */
	        if (historic_txt && historic_txt.el) {
	          historic_txt.el.find(member_name).html(historic_txt.name);
	          historic_txt.el.find(member_job).html(historic_txt.job);
	          historic_txt.el.find(member_bio).html(historic_txt.bio);
	        }

	        /* 2. Get members infos */
	        nameThis = t.find(member_name).html();
	        jobThis = t.find(member_job).html();
	        bioThis = t.find(member_bio).html();

	        /* 3. Set target case */
	        if (index % team_nbElByRow === team_nbElByRow - 1 || index === nbEl) {
	          targetIndex = index - 1;
	        } else {
	          targetIndex = index + 1;
	        }

	        if (index > $('.and-you').index()) {
	          targetIndex -= 1;
	        }

	        target = grid_members_li.eq(targetIndex);
	        nameTarget = target.find(member_name);
	        jobTarget = target.find(member_job);
	        bioTarget = target.find(member_bio);

	        /* 4. Get dom text for historic (step 1) */
	        historic_txt.el = target;
	        historic_txt.name = nameTarget.html();
	        historic_txt.job = jobTarget.html();
	        historic_txt.bio = bioTarget.html();

	        /* 5. Inject infos into target case */
	        nameTarget.html(nameThis);
	        jobTarget.html(jobThis);
	        bioTarget.html(bioThis);

	        /* 6. Hide current active and show current */
	        if (prev.el && prev.index !== targetIndex) {
	          prev.el.removeClass('active');
	        }
	        if (prev.el && prev.index === targetIndex) {
	          prev.el.removeClass('active');
	        }
	        console.log(target);
	        target.toggleClass('active');

	        /* 7. Set historic */
	        prev.el = target;
	        return prev.index = targetIndex;
	      } else {
	        if (t.hasClass('active')) {
	          return false;
	        }
	      }
	    };

	    /* Change grid (all / founders) */
	    toggleGridTeam = function () {
	      var bt_all, bt_back, bt_gridTeam, calcHeight, grid_global, grid_teamAll, grid_teamFounders, sec_about;
	      bt_gridTeam = $('.about_team_bt > span');
	      bt_all = $('.about_team_founders_bt.all');
	      bt_back = $('.about_team_founders_bt.back');
	      grid_teamAll = $('.team_grid');
	      grid_teamFounders = $('.founders_grid');
	      grid_global = $('.about_team_grid');
	      sec_about = $('.section_about');
	      calcHeight = function (activeGrid) {
	        var activeList, fullH;
	        activeList = $('.about_team_grid > ul[data-list=' + activeGrid + ']');
	        grid_global.css('height', activeList.height());
	        if (app.mode === 'mobile') {
	          fullH = sec_about.find('.section_content').height();
	        } else {
	          fullH = sec_about.find('.section_content').height() + app.heightNav;
	        }
	        if (!app.subpage) {
	          sec_about.css('height', fullH);
	          return el.sec_wrap.css('height', fullH);
	        }
	      };
	      bt_gridTeam.on('click', function () {
	        var t;
	        t = $(this);
	        if (bt_all.hasClass('hide') || bt_back.hasClass('hide')) {
	          bt_gridTeam.removeClass('opacity hide');
	          t.addClass('opacity');
	          setTimeout((function () {
	            t.addClass('hide');
	          }), 250);
	          if (t.attr('data-list') === 'team_founders') {
	            grid_teamFounders.removeClass('hide');
	            grid_teamAll.addClass('hide');
	            bt_all.on('mouseleave', function () {
	              return t.addClass('hover');
	            });
	          } else {
	            grid_teamAll.removeClass('hide');
	            grid_teamFounders.addClass('hide');
	            bt_all.removeClass('hover');
	          }
	          calcHeight(t.attr('data-list'));
	        }
	      });
	      return app.window.on('resize', function () {
	        if (app.currentIndex === 3) {
	          if (!bt_all.hasClass('hide')) {
	            return calcHeight('team_all');
	          } else {
	            return calcHeight('team_founders');
	          }
	        }
	      });
	    };
	    app.window.on('load resize', function () {
	      if (app.ww < 510) {
	        return team_nbElByRow = 3;
	      } else if (app.ww >= 510 && app.ww < 625) {
	        return team_nbElByRow = 4;
	      } else if (app.ww >= 625 && app.ww < 785) {
	        return team_nbElByRow = 5;
	      } else if (app.ww >= 785 && app.ww < 900) {
	        return team_nbElByRow = 6;
	      } else if (app.ww >= 900 && app.ww < 1100) {
	        return team_nbElByRow = 7;
	      } else if (app.ww >= 1100) {
	        return team_nbElByRow = 8;
	      }

	      if (app.ww < 360) {
	        return nbElByRow = 1;
	      } else if (app.ww >= 360 && app.ww < 560) {
	        return nbElByRow = 2;
	      } else if (app.ww >= 560 && app.ww < 730) {
	        return nbElByRow = 3;
	      } else if (app.ww >= 730 && app.ww < 930) {
	        return nbElByRow = 4;
	      } else if (app.ww >= 930 && app.ww < 1100) {
	        return nbElByRow = 5;
	      } else if (app.ww >= 1100) {
	        return nbElByRow = 6;
	      }
	    });
	    $('.member_bio a').on('click', function () {
	      window.open($(this).attr('href'));
	      return false;
	    });
	    app.window.on('click', function () {
	      grid_members_li.removeClass('active color');
	      return initBio();
	    });
	    grid_members_li_empty.on('mouseenter', function () {
	      if (!$(this).hasClass('active')) {
	        grid_members_li.removeClass('active color');
	        initBio();
	      }
	      return false;
	    });
	    //2016.08.11 V2 => deactivate bio
	    grid_members_li.on('click', function () {
	      var t;
	      t = $(this);
	      //if (app.ww > 400) {
	      gridTeamInteraction($(this), grid_members_li.length - 1);
	      //}
	      return false;
	    });

	    /*$('.team_grid').click(function(e) {
	      var t;
	      t = $(e.target).parent();
	      if (app.ww > 400) {
	        gridTeamInteraction(t, grid_members_li.length - 1);
	      }
	      return false;
	    } );*/



	    /* Click bio */
	    member_viewbio.on('click', function () {
	      var t;
	      t = $(this);
	      if (!t.hasClass('back')) {
	        t.addClass('back').html('←');
	        t.prev('.member_bio').addClass('show');
	        dataLayer.push({
	          event: 'bioClick',
	          fiftyFiverName: t.parent().find(member_name).html()
	        });
	      } else {
	        t.removeClass('back').html('+');
	        t.prev('.member_bio').removeClass('show');
	      }
	      return false;
	    });
	    toggleGridTeam();
	  };
	  gridTeam();
	  gridArchives = function () {
	    var archives_box, archives_box_event, gridNb, prevClone;
	    archives_box_event = $('.archives_box_event');
	    archives_box = $('.archives_list > ul > li');
	    prevClone = 0;
	    gridNb = 4;
	    app.window.on('load resize', function () {
	      if (app.ww < 621) {
	        gridNb = 1;
	      } else if (app.ww >= 621 && app.ww < 781) {
	        gridNb = 2;
	      } else if (app.ww >= 781 && app.ww < 1100) {
	        gridNb = 3;
	      } else if (app.ww >= 1001) {
	        gridNb = 4;
	      }
	    });
	    archives_box_event.on('click', function () {
	      var clone, indexTarget, mod, t;
	      if (BrowserDetect.OS !== 'Windows' && BrowserDetect.OS !== 'Mac' && BrowserDetect.OS !== 'Linux') {
	        return false;
	      }
	      t = $(this);
	      indexTarget = t.index();
	      mod = (indexTarget + 1) % gridNb;
	      if (prevClone) {
	        prevClone.remove();
	      }
	      clone = t.clone();
	      clone.prependTo('.archives_list').addClass('active clone').css({
	        'top': t.offset().top,
	        'left': t.offset().left
	      });
	      setTimeout((function () {
	        clone.addClass('cloneLarge');
	        clone.find('.box_event_descrp').fadeIn(300);
	        if (mod === 0) {
	          clone.addClass('add_marginL');
	        }
	      }), 50);
	      clone.on('click', function () {
	        $(this).remove();
	      });
	      prevClone = clone;
	      return false;
	    });
	    app.window.on('click', function () {
	      if (prevClone) {
	        prevClone.remove();
	      }
	    });
	  };
	  resizeContact = function (load) {
	    var contact_aside, contact_form, nbAddressBox, trueH;
	    nbAddressBox = $('.contact_address_box').length;
	    contact_aside = $('.contact_aside');
	    contact_form = $('.contact_form');
	    trueH = hhTab[app.currentIndex] + contact_form.height() + 150;
	    if (nbAddressBox === 2 || nbAddressBox === 4) {
	      contact_aside.addClass('two');
	    } else {
	      contact_aside.addClass('three');
	    }
	    if (app.ww < 768) {
	      trueH = hhTab[app.currentIndex] + app.heightTopbar;
	    }
	    if (load) {
	      if (app.ww >= 1021 && app.ww <= 1100) {
	        trueH = trueH - ((nbAddressBox - 1) * 200);
	      }
	    }
	    contact_form.css('top', contact_aside.height());
	    secTab[app.currentIndex].css('height', trueH);
	    el.sec_wrap.css('height', trueH);
	  };
	  viewSectors = function () {
	    var blank, bt_view, nbElByRow, prevClone;
	    bt_view = $('.sector_view_all');
	    blank = $('.references_sectors .blank');
	    prevClone = 0;
	    nbElByRow = 5;
	    if (app.ww < 621) {
	      nbElByRow = 1;
	    } else if (app.ww >= 621 && app.ww < 661) {
	      nbElByRow = 2;
	    } else if (app.ww >= 661 && app.ww < 931) {
	      nbElByRow = 3;
	    } else if (app.ww >= 931 && app.ww < 1101) {
	      nbElByRow = 4;
	    } else if (app.ww >= 1101) {
	      nbElByRow = 5;
	    }

	    /* Cleaning event */
	    bt_view.off('click');
	    bt_view.on('click', function () {
	      var clone, close_bt, indexTarget, mod, offsetL, offsetT, parent, t;
	      blank.addClass('show');
	      t = $(this);
	      parent = t.parent();
	      indexTarget = parent.index();
	      clone = parent.clone();
	      offsetL = 0;
	      mod = (indexTarget + 1) % nbElByRow;
	      if (mod === 1) {
	        offsetL = 0;
	        if (nbElByRow === 2) {
	          if (indexTarget >= 2) {
	            offsetT = 250;
	          }
	          if (indexTarget >= 4) {
	            offsetT = 500;
	          }
	          if (indexTarget >= 6) {
	            offsetT = 750;
	          }
	        }
	        if (nbElByRow === 3) {
	          if (indexTarget >= 3) {
	            offsetT = 250;
	          }
	          if (indexTarget >= 6) {
	            offsetT = 500;
	          }
	        }
	        if (nbElByRow === 4) {
	          if (indexTarget >= 4) {
	            offsetT = 250;
	          }
	        }
	      } else {
	        if (nbElByRow === 2) {
	          if (indexTarget >= 2) {
	            offsetT = 250;
	          }
	          if (indexTarget >= 4) {
	            offsetT = 500;
	          }
	          if (indexTarget >= 6) {
	            offsetT = 750;
	          }
	        }
	        if (nbElByRow === 3) {
	          if (indexTarget >= 3) {
	            offsetT = 250;
	          }
	          if (indexTarget >= 6) {
	            offsetT = 500;
	          }
	        }
	        if (nbElByRow === 4) {
	          if (indexTarget >= 4) {
	            offsetT = 250;
	          }
	        }
	        if (indexTarget > nbElByRow) {
	          if (indexTarget > nbElByRow * 3) {
	            indexTarget = indexTarget - (nbElByRow * 3);
	          }
	          if (indexTarget > nbElByRow * 2) {
	            indexTarget = indexTarget - (nbElByRow * 2);
	          } else {
	            indexTarget = indexTarget - nbElByRow;
	          }
	        }
	        if (nbElByRow === 2) {
	          offsetL = parent.outerWidth() + 26;
	        }
	        if (nbElByRow === 3) {
	          offsetL = parent.outerWidth() * indexTarget + 24;
	        }
	        if (nbElByRow === 4) {
	          offsetL = parent.outerWidth() * indexTarget + 24;
	        } else if (nbElByRow === 5) {
	          offsetL = parent.outerWidth() * indexTarget - (1 * indexTarget);
	          if (mod === 0) {
	            offsetL = offsetL + 4;
	          }
	        }
	      }
	      if (offsetT) {
	        clone.prependTo('.clone_parent').addClass('active clone').css({
	          'left': offsetL,
	          'top': offsetT
	        });
	      } else {
	        clone.prependTo('.clone_parent').addClass('active clone').css({
	          'left': offsetL
	        });
	      }
	      close_bt = clone.find('.sector_view_all');
	      close_bt.addClass('close');
	      close_bt.on('click', function () {
	        blank.removeClass('show');
	        clone.remove();
	      });
	      prevClone = clone;
	      return false;
	    });
	    app.window.on('click', function () {
	      if (prevClone) {
	        blank.removeClass('show');
	        prevClone.remove();
	      }
	    });
	  };
	  timelineInteraction = function () {
	    var dataDragT, difT, dragEventTimeline, dragTimeline, showMoment, timeline, timelineGap, timelineWidth, timeline_arrows, timeline_cursor, timeline_drag, timeline_li, timeline_nav;
	    timeline = $('.timeline');
	    timeline_li = timeline.find('li');
	    timeline_nav = $('.nav_timeline');
	    timeline_drag = $('.timeline_drag');
	    timeline_cursor = $('.timeline_cursor');
	    timeline_arrows = $('.timeline_arrows');
	    timelineWidth = timeline_li.length * 130 + 165;
	    timelineGap = timelineWidth - 1000;
	    showMoment = function (e, t, firstEvent) {
	      var indexT, next, prev;
	      if (e.type === 'click') {
	        timeline_li.removeClass('even_right even_left odd_right odd_left');
	      }
	      if (e.type === firstEvent) {
	        indexT = t.index();
	        next = timeline_li.eq(indexT + 1);
	        prev = timeline_li.eq(indexT - 1);
	        if (indexT % 2 === 0) {
	          next.addClass('even_right');
	          if (indexT !== 0) {
	            prev.addClass('even_left');
	          }
	        } else {
	          next.addClass('odd_right');
	          prev.addClass('odd_left');
	        }
	      } else {
	        timeline_li.removeClass('even_right even_left odd_right odd_left');
	      }
	    };
	    dragTimeline = function (valueCursor, valueTimeline, pos) {
	      if (pos) {
	        timeline_cursor.css({
	          '-webkit-transform': 'translate3d(' + valueCursor + 'px, 0, 0)',
	          '-moz-transform': 'translate3d(' + valueCursor + 'px, 0, 0)',
	          '-o-transform': 'translateX(' + valueCursor + 'px)',
	          '-ms-transform': 'translateX(' + valueCursor + 'px)',
	          'transform': 'translate3d(' + valueCursor + 'px, 0, 0)'
	        });
	        timeline.css({
	          '-webkit-transform': 'translate3d(-' + valueTimeline + 'px, 0,0)',
	          '-moz-transform': 'translate3d(-' + valueTimeline + 'px, 0,0)',
	          '-ms-transform': 'translate(-' + valueTimeline + 'px, 0)',
	          '-o-transform': 'translate(-' + valueTimeline + 'px, 0)',
	          'transform': 'translate3d(-' + valueTimeline + 'px, 0,0)'
	        });
	      } else {
	        timeline_cursor.css({
	          '-webkit-transform': 'translate3d(-' + valueCursor + 'px, 0, 0)',
	          '-moz-transform': 'translate3d(-' + valueCursor + 'px, 0, 0)',
	          '-o-transform': 'translateX(-' + valueCursor + 'px)',
	          '-ms-transform': 'translateX(-' + valueCursor + 'px)',
	          'transform': 'translate3d(-' + valueCursor + 'px, 0, 0)'
	        });
	        timeline.css({
	          '-webkit-transform': 'translate3d(' + valueTimeline + 'px, 0,0)',
	          '-moz-transform': 'translate3d(' + valueTimeline + 'px, 0,0)',
	          '-ms-transform': 'translate(' + valueTimeline + 'px, 0)',
	          '-o-transform': 'translate(' + valueTimeline + 'px, 0)',
	          'transform': 'translate3d(' + valueTimeline + 'px, 0,0)'
	        });
	      }
	    };
	    dragEventTimeline = function (e, eventStart, eventMove, eventEnd, eventMove_eventEnd) {
	      document.onselectstart = function () {
	        return false;
	      };
	      if (e.type === eventStart) {
	        if (eventStart === 'touchstart') {
	          dataDragT.downX = e.originalEvent.touches[0].pageX;
	        } else {
	          dataDragT.downX = e.pageX;
	        }
	        dataDragT.enableMove = true;
	      }
	      timeline_drag.on(eventMove_eventEnd, function (e) {
	        var difT, ratio, valueTimeline;
	        if (e.type === eventMove && dataDragT.enableMove) {
	          if (eventMove === 'touchmove') {
	            dataDragT.upX = e.originalEvent.touches[0].pageX;
	          } else {
	            dataDragT.upX = e.pageX;
	          }
	          difT = dataDragT.prevX + dataDragT.upX - dataDragT.downX;
	          ratio = difT * 100 / (dataDragT.zoneWidth - 54);
	          valueTimeline = (timelineGap + 100) * ratio / 100;
	          if (ratio >= 0 && ratio <= 100) {
	            if (difT > 0) {
	              dragTimeline(difT, valueTimeline, true);
	            } else {
	              dragTimeline(difT, ratio);
	            }
	          }
	        } else {
	          dataDragT.enableMove = false;
	        }
	      });
	      if (e.type === eventEnd) {
	        dataDragT.enableMove = false;
	        dataDragT.prevX = difT;
	      }
	    };
	    timeline.css('width', timelineWidth);
	    if (BrowserDetect.OS === 'Mac' || BrowserDetect.OS === 'Windows' || BrowserDetect.OS === 'Linux') {
	      timeline_li.on('mouseenter mouseleave', function (e) {
	        return showMoment(e, $(this), 'mouseenter');
	      });
	    } else {
	      timeline_li.on('click', function (e) {
	        return showMoment(e, $(this), 'click');
	      });
	    }
	    if (app.ww >= 1280) {
	      return timeline_nav.on('mouseenter mouseleave', function (e) {
	        var animloop, historyT, px;
	        if ($(this).hasClass('next')) {
	          historyT = 'next';
	        } else {
	          historyT = 'prev';
	        }
	        if (e.type === 'mouseenter') {
	          px = parseInt(timeline.attr('data-x'));
	          if (historyT === 'next') {
	            timeline_arrows.find('span:last-child').addClass('hover');
	          } else {
	            timeline_arrows.find('span:first-child').addClass('hover');
	          }
	          animloop = function () {
	            var myReqTimeline;
	            if (historyT === 'next') {
	              px += 12;
	            } else {
	              px -= 12;
	            }
	            if (px < 0) {
	              px = 0;
	              timeline_arrows.find('span:first-child').addClass('opacity_0');
	            } else if (px > timelineGap) {
	              px = timelineGap;
	              timeline_arrows.find('span:last-child').addClass('opacity_0');
	            } else {
	              timeline_arrows.find('span').removeClass('opacity_0');
	            }
	            timeline.css({
	              '-webkit-transform': 'translate(-' + px + 'px, 0)',
	              '-moz-transform': 'translate(-' + px + 'px, 0)',
	              '-ms-transform': 'translate(-' + px + 'px, 0)',
	              '-o-transform': 'translate(-' + px + 'px, 0)',
	              'transform': 'translate(-' + px + 'px, 0)'
	            }).attr('data-x', px);
	            return myReqTimeline = requestAnimFrame(animloop);
	          };
	          return animloop();
	        } else {
	          if (typeof myReqTimeline !== "undefined" && myReqTimeline !== null) {
	            cancelAnimationFrame(myReqTimeline);
	          }
	          return timeline_arrows.find('span').removeClass('hover');
	        }
	      });
	    } else if (app.ww < 1280 && app.ww > 630) {
	      dataDragT = {
	        zoneWidth: 260,
	        upX: 0,
	        downX: 0,
	        prevX: 0,
	        enableMove: false
	      };
	      difT = 0;
	      if (BrowserDetect.OS === 'Mac' || BrowserDetect.OS === 'Windows' || BrowserDetect.OS === 'Linux') {
	        return timeline_cursor.on('mousedown mouseup', function (e) {
	          return dragEventTimeline(e, 'mousedown', 'mousemove', 'mouseup', 'mousemove mouseup');
	        });
	      } else {
	        return timeline_cursor.on('touchstart touchend', function (e) {
	          return dragEventTimeline(e, 'touchstart', 'touchmove', 'touchend', 'touchmove touchend');
	        });
	      }
	    }
	  };
	  changeTitle = function (name) {
	    if (name) {
	      name = $('<title>').html(name).text();
	      document.title = name;
	    }
	  };
	  ajaxJob = function () {
	    var jobArticle, jobLink, jobsLi;
	    viewAllJobs();
	    if ($('.section_home').length) {
	      formInteraction(el.content.attr('data-tpl'));
	    }
	    jobsLi = $('.job_list li');
	    jobLink = $('.job_list li').find('a');
	    jobArticle = $('.job_article');
	    return jobLink.on('click', function () {
	      var hideLoader, loaderInterval, posValue, t;
	      t = $(this);
	      hideLoader = function () {
	        clearInterval(loaderInterval);
	        return el.loader_ajax.removeClass('show');
	      };
	      el.loader_ajax.addClass('show');
	      posValue = 0;
	      loaderInterval = setInterval((function () {
	        posValue += 20;
	        return el.loader_ajax.css('background-position', posValue + 'px 0');
	      }), 22);
	      $.ajax({
	        url: t.attr('href'),
	        success: function (data) {
	          var pathname, pathname_tmp, reg, targetContent, titlepage;
	          targetContent = $(data).find('.job_article').html();
	          setTimeout((function () {
	            hideLoader();
	            jobArticle.html(targetContent);
	            jobsLi.removeClass('active');
	            t.parent().addClass('active');
	            el.htmlbody.animate({
	              scrollTop: $('.job_article').offset().top - 50
	            }, 400);
	            return changeTitle(titlepage);
	          }), 500);

	          /* PUSH IN HISTORY */
	          titlepage = data.match(/<title>(.*?)<\/title>/)[1];
	          if (window.history.pushState) {
	            if (app.popstate === false) {
	              reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
	              pathname_tmp = reg.exec(t.attr('href'));
	              if (pathname_tmp) {
	                pathname = pathname_tmp[1];
	                app.window.off('onpopstate');
	                if (window.location.pathname.length === 4) {
	                  pathname = pathname.substring(4);
	                } else {
	                  pathname = pathname.substring(1);
	                }
	                pushState(titlepage, '#' + pathname);
	                return app.window.on('onpopstate');
	              }
	            }
	          }
	        },
	        error: function () {
	          alert('No pages found');
	          return hideLoader();
	        }
	      });
	      return false;
	    });
	  };
	  openEvent = function () {
	    var close_event_bt, news_events_left, news_events_li, prevClone, removeClone;
	    news_events_li = $('.news_events > ul > li');
	    close_event_bt = $('.news_events_clone_close');
	    news_events_left = $('.news_events.left');
	    prevClone = 0;
	    removeClone = function () {
	      if (prevClone) {
	        prevClone.remove();
	      }
	      close_event_bt.removeClass('show');
	    };
	    news_events_li.on('click', function () {
	      var clone, t;
	      t = $(this);
	      close_event_bt.addClass('show');
	      clone = t.clone();
	      clone.prependTo('.news_events.left').addClass('news_events_clone');
	      if (app.ww < 1100) {
	        clone.css('height', news_events_left.height() - 147);
	      }
	      prevClone = clone;
	      return false;
	    });
	    close_event_bt.on('click', function () {
	      return removeClone();
	    });
	    return app.window.on('click', function () {
	      return removeClone();
	    });
	  };
	  textAboutStats = function () {
	    var fired, nb, text, textSelector;
	    textSelector = secTab[3].find('.about_stats_nb1');
	    text = textSelector.text();
	    nb = 0;
	    fired = false;
	    return app.window.on('scroll', function () {
	      var intervalText;
	      if (app.window.scrollTop() > 50 && fired === false) {
	        fired = true;
	        intervalText = setInterval((function () {
	          textSelector.html(nb + '%');
	          nb++;
	          if (nb > 55) {
	            return clearInterval(intervalText);
	          }
	        }), 30);
	        return false;
	      }
	    });
	  };
	  viewLegalNotices = function () {
	    var legal_span, legal_ul;
	    legal_span = $('.contact_legal_notices > span');
	    legal_ul = $('.contact_legal_notices > ul');
	    legal_span.on('click', function () {
	      legal_ul.toggleClass('opacity_none');
	      return false;
	    });
	    legal_ul.find('a').on('click', function () {
	      if (!$(this).hasClass('cookieconsent_manage')) {
	        window.open($(this).attr('href'));
	        return false;
	      }
	    });
	    app.window.on('click', function () {
	      if (!legal_ul.hasClass('opacity_none')) {
	        return legal_ul.addClass('opacity_none');
	      }
	    });

	    /* Cookie Consent */
	    return $('.cookieconsent_manage').on('click', function () {
	      cookieconsent('show');
	      el.htmlbody.animate({
	        //scrollTop: 0
	      }, 400);
	      return false;
	    });
	  };
	  scrollListener = function () {
	    if (app.subpage) {
	      app.subpage_height = el.section_ajax.height();
	    }
	    return app.window.on('scroll', function (e) {
	      var intensityScroll;
	      var intensityScroll;
	      if (app.mode === 'desktop') {
	        el.border_fix.removeClass('init');
	        app.valueBorder = app.borderWidth - (app.window.scrollTop() * 0.25);
	        if (el.targetSec) {
	          el.targetSec.css('border-width', app.valueBorder);
	        }
	        el.border_fix.css('height', app.valueBorder);
	        if (app.currentIndex !== 0) {
	          if (app.subpage) {
	            intensityScroll = app.window.scrollTop() * 100 / (app.subpage_height - app.hh);
	          } else {
	            intensityScroll = app.window.scrollTop() * 100 / (hhTab[app.currentIndex] - app.hh);
	          }
	          if (app.valueBorder > -50) {
	            return el.scrolltop.find('.logo_scrolltop').css('opacity', 0);
	          } else {
	            return el.scrolltop.find('.logo_scrolltop').css('opacity', intensityScroll / 100);
	          }
	        }
	      }
	    });
	  };

	  scrollListener();

	  scrollAnalytics = function () {
	    var aboutYet, about_team, offersYet, offers_multiblocks, pushOffers;
	    offers_multiblocks = $('.offers_multiblocks');
	    about_team = $('.about_team');
	    offersYet = {
	      '1': false,
	      '2': false,
	      '3': false
	    };
	    aboutYet = {
	      '1': false
	    };
	    pushOffers = function (nb) {
	      if (!offersYet[nb]) {
	        dataLayer.push({
	          event: 'subSectionChange',
	          sectionName: offers_multiblocks.eq(nb).find('h3').text()
	        });
	        offersYet[nb] = true;
	      }
	    };
	    app.window.on('scroll', function () {
	      if (app.currentSection === 'offers') {
	        if (app.window.scrollTop() > offers_multiblocks.eq(0).offset().top) {
	          pushOffers(0);
	        }
	        if (app.window.scrollTop() > offers_multiblocks.eq(1).offset().top) {
	          pushOffers(1);
	        }
	        if (app.window.scrollTop() > offers_multiblocks.eq(2).offset().top) {
	          pushOffers(2);
	        }
	      }
	      if (app.currentSection === 'about') {
	        if (app.window.scrollTop() > about_team.offset().top) {
	          if (!aboutYet[1]) {
	            dataLayer.push({
	              event: 'subSectionChange',
	              sectionName: $('.about_team').find('h3').text()
	            });
	            aboutYet[1] = true;
	          }
	        }
	      }
	    });
	  };
	  trackingDoc = function () {

	    /* Tracking */
	  };
	  chooseLang = function () {
	    var choose_lang;
	    choose_lang = $('.choose_lang');
	    choose_lang.on('mouseenter mouseleave', function (e) {
	      var ul;
	      ul = $(this).find('ul');
	      if (e.type === 'mouseenter') {
	        return ul.fadeIn(200);
	      } else {
	        return ul.fadeOut(200);
	      }
	    });
	    return choose_lang.find('li').on('click', function () {
	      var isLocalStorageNameSupported, lang, t;
	      t = $(this);
	      isLocalStorageNameSupported = function () {
	        var error, error1, storage, testKey;
	        testKey = 'test';
	        storage = window.sessionStorage;
	        try {
	          storage.setItem(testKey, '1');
	          storage.removeItem(testKey);
	          return true;
	        } catch (error1) {
	          error = error1;
	          return false;
	        }
	      };
	      lang = t.attr('data-lang');
	      if (isLocalStorageNameSupported()) {
	        return localStorage.setItem('lang', lang);
	      }
	    });
	  };
	  linkGoTo = function (nb_sectionTarget) {
	    navTab[nb_sectionTarget].click();
	    el.htmlbody.animate({
	      scrollTop: 0
	    }, 500);
	    return setTimeout((function () {
	      return el.sec_wrap.css('height', hhTab[app.currentIndex]);
	    }), 800);
	  };
	  window.shuffle = function (a) {
	    var i, j, x;
	    j = void 0;
	    x = void 0;
	    i = void 0;
	    i = a.length;
	    while (i) {
	      j = Math.floor(Math.random() * i);
	      x = a[i - 1];
	      a[i - 1] = a[j];
	      a[j] = x;
	      i -= 1;
	    }
	  };
	  inject_team_members = function () {
	    var team_array, team_grid;
	    team_array = [];
	    team_grid = $('#js-team-grid');
	    return $.ajax({
	      url: app.baseUrl + '/team/',
	      success: function (data) {
	        shuffle(data);
	        return $(data).each(function (i) {
	          var d, h;
	          d = data[i];
	          team_grid.append('<li><div><div class="team_mbg"></div><div class="member-pic" data-original=' + d.photo + '></div><div class="member_bio"><p>' + d.bio + '</p></div><span class="member_viewbio">+</span><div class="team_member"><div class="member_infos"><span class="member_name">' + d.firstname + '</span><span class="member_job">' + d.job + '</span></div></div></div></li>');
	          console.log(i, data.length);
	          if (i === data.length - 1) {
	            gridTeam();
	            h = $('.section_about').find('.section_content').height() + app.heightNav;
	            return hhTab[3] = h;
	          }
	        });
	      }
	    });
	  };
	  inject_team_founders = function () {
	    var team_grid;
	    team_grid = $('#js-team-founders-grid');
	    return $.ajax({
	      url: app.baseUrl + '/team-founders/',
	      success: function (data) {
	        return $(data).each(function (i) {
	          var d;
	          d = data[i];
	          team_grid.append('<li><figure style="background-image:url(' + d.photo + ')"></figure><div><span class="founder_name">' + d.firstname + ' ' + d.lastname + '</span><span class="founder_status">' + d.status + '</span><p class="founder_bio">' + d.bio + '</p></div></li>');
	          if (i === data.length - 1) {
	            return inject_team_members();
	          }
	        });
	      },
	      error: function (log) {
	        return console.log(log);
	      }
	    });
	  };
	  $('.js-reload-bt').click();
	  processJobsListAll = function () {
	    var calcHeight;
	    calcHeight = function () {
	      var fullH;
	      var fullH, sec_jobs;
	      sec_jobs = $('.section_jobs');
	      if (app.mode === 'mobile') {
	        fullH = sec_jobs.find('.section_content').height();
	      } else {
	        fullH = sec_jobs.find('.section_content').height() + app.heightNav;
	      }
	      hhTab[app.currentIndex] = fullH;
	      if (!app.subpage) {
	        sec_jobs.css('height', fullH);
	        el.sec_wrap.css('height', fullH);
	      }
	    };
	    $('.jobs_list_view_all').addClass('hide');
	    return calcHeight();
	  };

	  /*---- INIT WINDOW EVENTS ---- */
	  app.window.on('load resize orientationchange', function (e) {
	    /* Refresh window size */
	    var clickandGo, hash_init, i, request, slug, url;
	    clickandGo = function (section_slug) {
	      if (!section_slug) {
	        section_slug = window.location.hash.substr(1);
	      }
	      $('.main_nav li[data-section=' + section_slug + ']').click();
	      if (app.mode === 'mobile') {
	        $('.main_nav li[data-section=' + section_slug + ']').addClass('active');
	        $('ul.headermobile li[data-section=' + section_slug + ']').addClass('active');
	      }
	      app.mainTitle = document.title;
	      app.delaytransition = false;
	    };
	    app.ww = window.innerWidth;
	    app.hh = window.innerHeight;

	    /* Set app size for home */
	    if (app.currentIndex === 0) {
	      /*if (app.ww < app.breaking_1) {
	        el.sec_wrap.css('height', app.hh - app.heightTopbar);
	      } else {
	        el.sec_wrap.css('height', app.hh);
	      }*/
	    }

	    /* ---- ON LOAD ---- */
	    if (e.type === 'load') {
	      app.lang = el.html.attr('lang');

	      /* Set lang */
	      if (app.lang === 'en') {
	        app.lang = '';
	      }
	      app.langNavigator = navigator.language || navigator.userLanguage;

	      /* Redirect */

	      /* IE9 placeholders */
	      if (BrowserDetect.browser === 'Explorer' && BrowserDetect.version === 9 && el.contact_form.length) {
	        $('input, textarea').placeholder();
	      }

	      /* Click sound volume */
	      if (el.sound) {
	        /*el.sound.volume = 0.2;*/
	      }

	      /* NAV DESKTOP + TABLET */
	      if (BrowserDetect.OS === 'Mac' || BrowserDetect.OS === 'Windows' || BrowserDetect.OS === 'Linux') {
	        el.home_enter.on('click', function () {
	          goTo($(this), app.mode, true);
	          app.popstate = false;
	          el.main_nav_li.removeClass('active');
	          navTab[1].addClass('active');
	        });
	        el.nav_li.on('click', function () {
	          if ($(this).hasClass('active')) {
	            return false;
	          }
	          goTo($(this), app.mode);
	          app.popstate = false;

	          /* Analytics */
	          dataLayer.push({
	            event: 'navigation',
	            navigationType: 'numbers',
	            sectionName: $(this).attr('data-section')
	          });
	        });
	        el.breadcrumb_li.on('click', function () {
	          goTo($(this), app.mode);
	          app.popstate = false;

	          /* Analytics */
	          dataLayer.push({
	            event: 'navigation',
	            navigationType: 'breadcrumb',
	            sectionName: $(this).attr('data-section')
	          });
	        });
	        app.document.on('keydown', function (e) {
	          var clickNext, clickPrev, next, prev;
	          clickPrev = function () {
	            prev.click();
	            app.popstate = false;
	            window.location.hash = prev.attr('data-section');
	          };
	          clickNext = function () {
	            next.click();
	            app.popstate = false;
	            window.location.hash = next.attr('data-section');
	          };
	          if (app.keynav) {
	            if (e.keyCode === 37) {
	              prev = secTab[app.currentIndex].find('.prev');
	              if (prev.length) {
	                clickPrev();

	                /* Analytics */
	                dataLayer.push({
	                  event: 'navigation',
	                  navigationType: 'keyboard',
	                  sectionName: prev.attr('data-section')
	                });
	              }
	            }
	            if (e.keyCode === 39) {
	              next = secTab[app.currentIndex].find('.next');
	              if (next.length) {
	                clickNext();

	                /* Analytics */
	                dataLayer.push({
	                  event: 'navigation',
	                  navigationType: 'keyboard',
	                  sectionName: next.attr('data-section')
	                });
	              }
	            }
	            if (e.keyCode === 27) {
	              if ($('body').hasClass('popin')) {
	                return $('.js-popin-content-table').click();
	              }
	            }
	          }
	        });
	      } else {

	        /* Reduce delay with touchend on mobile / tablet device (-300ms) */
	        el.home_enter.on('touchend', function () {
	          goTo($(this), app.mode);
	          app.popstate = false;
	          el.main_nav_li.removeClass('active');
	          navTab[1].addClass('active');
	        });
	        el.nav_li.on('touchend', function () {
	          goTo($(this), app.mode);
	          app.popstate = false;

	          /* Analytics */
	          dataLayer.push({
	            event: 'navigation',
	            navigationType: 'numbers',
	            sectionName: $(this).attr('data-section')
	          });
	        });
	        el.breadcrumb_li.on('touchend', function () {
	          goTo($(this), app.mode);
	          app.popstate = false;

	          /* Analytics */
	          dataLayer.push({
	            event: 'navigation',
	            navigationType: 'breadcrumb',
	            sectionName: $(this).attr('data-section')
	          });
	        });

	        /* Show color */
	        el.body.addClass('colorlogo');
	      }

	      /* NAV MOBILE */
	      if (BrowserDetect.OS === 'Mac' || BrowserDetect.OS === 'Windows' || BrowserDetect.OS === 'Linux') {
	        el.main_topbar.on('click', function () {
	          el.main_nav.toggleClass('show');
	        });
	      } else {

	        /* Reduce delay with touchend on mobile / tablet device (-300ms) */
	        el.main_topbar.on('touchend', function () {
	          el.main_nav.toggleClass('show');
	        });
	        el.main_nav_li.on('touchend', function () {
	          el.main_nav_li.removeClass('active');
	          $(this).addClass('active');
	        });
	      }

	      /* History push/pop : click event for all devices */
	      el.main_nav_li.on('click', function () {
	        var t;
	        t = $(this);
	        $('ul.headermobile li').removeClass('active');
	        el.main_nav_li.removeClass('active');
	        var thisclass = $(this).attr("class");


	        $('ul.headermobile li.' + thisclass).addClass('active');

	        t.addClass('active');
	        goTo(t, app.mode);
	      });
	    }

	    /* end load */

	    /* ---- ON LOAD + RESIZE + ORIENTATION CHANGE ---- */

	    /* Recalibrate wrapper (translateX + height) */
	    if (app.currentIndex !== 0) {
	      el.sec_wrap.css({
	        '-webkit-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        '-moz-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        '-o-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        '-ms-transform': 'translateX(-' + app.ww * app.currentIndex + 'px)',
	        'transform': 'translateX(-' + app.ww * app.currentIndex + 'px)'
	      });
	    }

	    /* MOBILE MODE */
	    if (app.ww < app.breaking_1) {
	      app.mode = 'mobile';
	      /* if home */
	      if (app.currentIndex === 0) {
	        secTab[0].css('height', app.hh - app.heightTopbar);
	      }
	      el.sec_sections.css('border-width', 0);
	      el.border_fix.css('display', 'none');
	    }

	    /* TABLET MODE */
	    if (app.ww >= app.breaking_1 && app.ww < app.breaking_2 || BrowserDetect.browser === 'Explorer' && BrowserDetect.version === '9' || BrowserDetect.browser === 'Opera') {
	      app.mode = 'tablet';

	      /* if home */
	      if (app.currentIndex === 0) {
	        secTab[0].css('height', app.hh);
	      }

	      /* if resize from desktop to tablet */
	      el.sec_sections.css('border-width', 0);
	      el.border_fix.css('display', 'none');
	    }

	    /* DESKTOP MODE */
	    if (app.ww >= app.breaking_2 && BrowserDetect.browser !== 'Explorer' && BrowserDetect.version !== '9' && BrowserDetect.browser !== 'Opera') {
	      app.mode = 'desktop';

	      /* if home */
	      /*secTab[0].css('height', app.hh);*/

	      if (e.type === 'resize' && app.currentIndex !== 0) {
	        el.currentSec.css('height', app.hh);
	        el.targetSec.css('height', app.hh);
	      }
	      if (app.currentIndex !== 0) {
	        el.targetSec.css('height', hhTab[app.currentIndex]);
	      }
	      if (e.type === 'resize' && app.currentIndex !== 0) {
	        app.valueBorder = app.borderWidth - (app.window.scrollTop() * 0.25);
	        el.currentSec.css('border-width', app.valueBorder);
	        el.sec_sections.css('border-width', 50);
	        el.border_fix.css('display', 'block');
	      }
	    }

	    /* Analytics */
	    dataLayer.push({
	      language: app.lang || "en",
	      device: app.mode
	    });

	    /* activate / deactivate home rollover menu && remove industy verticals for mobile */
	    if (app.mode !== 'mobile') {
	      $('.country-list li a').hover(function () {
	        if ($(this).data('lang') === 'cn') {
	          $('.home_left_wrap').hide();
	          $('.home_left_wrap.china').show();
	        }
	      }, function () {
	        $('.home_left_wrap').show();
	        $('.home_left_wrap.china').hide();
	      });
	      $('.section_clients .references_sectors').show();
	    }
	    else {
	      $('.section_clients .references_sectors').hide();
	      $('.country-list li a').unbind('mouseenter mouseleave');
	    }



	    /* Calculate the height of the content for each section */
	    setTimeout(function () {

	      i = -1;
	      el.sec_sections.each(function () {
	        var t;
	        i++;
	        t = $(this);
	        t.css('width', app.ww);
	        if (app.mode === 'mobile') {
	          hhTab[i] = t.find('.section_content').outerHeight(true);
	        } else {
	        	/*if (i === 0) {
	          		hhTab[i] = app.hh;
	        	} else {
		  		hhTab[i] = t.find('.section_content').outerHeight(true) + app.heightNav;
	        	}*/
	          hhTab[i] = t.find('.section_content').outerHeight(true) + app.heightNav;

	        }
	      });

	      el.sec_wrap.css('height', hhTab[app.currentIndex]);
	      secTab[app.currentIndex].css('height', hhTab[app.currentIndex]);


	      //hhTab[0] = hhTab[1];
	      if (window.location.hostname === "www.fifty-five.com" || window.location.hostname === 'fifty-five.com') $('.sections_wrap').height(app.hh);


	    }, 100);
	    /* set home height values section height*/

	    //if (app.currentIndex !== 0 && !app.subpage) {
	    //}

	    /* Redirect if hash in url */
	    if (e.type === 'load') {
	      if (window.location.hash) {
	        if (window.location.hash === '#home' || window.location.hash === '#values' || window.location.hash === '#services' || window.location.hash === '#tech' || window.location.hash === '#clients' || window.location.hash === '#team' || window.location.hash === '#news' || window.location.hash === '#jobs' || window.location.hash === '#contact') {
	          if (app.mode !== 'mobile') {
	            app.delaytransition = true;
	            clickandGo();
	          } else {
	            clickandGo();
	          }
	        } else {
	          if (window.location.hash.indexOf('#jobs') < 0) {
	            url = window.location.hash.substring(1);
	            request = new XMLHttpRequest;
	            request.open('GET', './' + url, false);
	            request.send();
	            if (request.status === 200) {
	              window.location.href = url;
	            }
	          } else {
	            hash_init = window.location.hash;
	            clickandGo('jobs');
	            if (hash_init !== '#jobs') {
	              slug = hash_init.substring(6);
	              url = 'jobs/' + slug;
	              $('.ajax-popin[href="' + url + '"]').click();
	            }
	          }
	        }
	      } else {
	        app.mainTitle = document.title;
	      }
	    }

	    /* Resize contact section */
	    if (app.currentIndex === 6 && app.ww <= 1100) {
	      if (e.type === 'load') {
	        resizeContact(true);
	      } else {
	        resizeContact();
	      }
	    }
	  });
	  window.onpopstate = function (e) {
	    var url;
	    app.keynav = true;
	    app.subpage = false;
	    if (e.state !== null) {
	      if (window.location.hash === '#home' || window.location.hash === '#values' || window.location.hash === '#services' || window.location.hash === '#tech' || window.location.hash === '#clients' || window.location.hash === '#team' || window.location.hash === '#news' || window.location.hash === '#jobs' || window.location.hash === '#contact') {
	        app.popstate = true;
	        navTab[e.state.title].click();
	        app.popstate = false;
	        el.section_ajax.addClass('right fixed');
	        el.section_main.removeClass('left');
	        changeTitle(app.mainTitle);
	      } else {
	        url = app.baseUrl + '/' + window.location.hash.substring(1);
	        $('.ajax[href="' + url + '"]').click();
	      }
	    }
	  };
	  dragSections();
	  scrollToOffers();
	  scrollToOfferSection();
	  casestudyDownloadInteraction();
	  if (el.content.attr('data-tpl') !== 'jobs') {
	    formInteraction(el.content.attr('data-tpl'));
	  }

	  /*nb jobs on load */
	  $(window).on('load', function () {
	    $('.section_jobs .jobs_nb_results .nb_results').text($('.js-job_list_offers li').length);
	  });
	  zoomMap();
	  gridArchives();
	  app.window.on('load resize', function () {
	    viewSectors();
	  });
	  app.window.on('load resize', function () {
	    timelineInteraction();
	  });
	  ajaxJob();
	  closeJobPopin = function () {
	    $('body').removeClass('popin-open').addClass('popin-close');
	    setTimeout((function () {
	      $('body').removeClass('popin popin-close');
	      return $('.js-popin-content').html('');
	    }), 600);
	    if (window.history.pushState) {
	      if (app.popstate === false) {
	        app.window.off('onpopstate');
	        pushState(null, '#jobs');
	        return app.window.on('onpopstate');
	      }
	    }
	  };
	  $(document).on('click', '.js-popin-content-table', function (e) {
	    var target;
	    target = e.target;
	    if (!($(target).hasClass('.js-popin-content') || $(target).parents('.js-popin-content').length)) {
	      return closeJobPopin();
	    }
	  });
	  $(document).on('click', '.js-close-job-popin', function (e) {
	    return closeJobPopin();
	  });
	  $(document).on('click', '.ajax-popin', function (e) {
	    var t;
	    t = $(this);
	    $('body').addClass('popin');
	    $.ajax({
	      url: t.attr('href'),
	      success: function (data) {
	        var content, heightPopin, titlepage;
	        content = $(data).find('.js-ajax-content').html();
	        heightPopin = window.innerHeight - 40;
	        $('.js-popin-content').css({
	          'height': heightPopin,
	          'max-height': heightPopin
	        }).html(content);
	        $('body').addClass('popin-open');
	        titlepage = data.match(/<title>(.*?)<\/title>/)[1];
	        if (window.history.pushState) {
	          if (app.popstate === false) {
	            pushState(titlepage, '#' + t.attr('href'));
	            app.window.on('onpopstate');
	          }
	        }
	        return dataLayer.push({
	          event: 'jobView',
	          jobName: $(data).find('.job_title').html(),
	          jobLocation: $(data).find('.job_location').html().replace('- ', '')
	        });
	      },
	      error: function (log) {
	        return console.log(log);
	      }
	    });
	    return false;
	  });
	  el.ajax.on('click', function () {

	    /* Prevent default on team grid */
	    var hideLoader, loaderInterval, parent, posValue, t;
	    hideLoader = function () {
	      clearInterval(loaderInterval);
	      return el.loader_ajax.removeClass('show');
	    };
	    if (app.currentSection === 'about') {
	      parent = $(this).parent();
	      if (parent.hasClass('empty') && parent.hasClass('active')) {
	        parent.removeClass('active');
	        return false;
	      }
	    }
	    app.subpage = true;
	    app.prevH = hhTab[app.currentIndex];
	    scrollValue = app.window.scrollTop();
	    t = $(this);
	    el.loader_ajax.addClass('show');
	    posValue = 0;
	    loaderInterval = setInterval((function () {
	      posValue += 20;
	      return el.loader_ajax.css('background-position', posValue + 'px 0');
	    }), 22);
	    $.ajax({
	      url: t.attr('href'),
	      success: function (data) {
	        var goBack, loadScripts, pathname, pathname_tmp, reg, targetContent, targetTpl, the_pageName, titlepage, updateBackLink;
	        targetContent = $(data).filter('#ajax_content').html();
	        targetTpl = $(data).find('#content').attr('data-tpl');
	        titlepage = data.match(/<title>(.*?)<\/title>/)[1];

	        /* PUSH IN HISTORY */
	        loadScripts = function () {
	          switch (targetTpl) {
	            case 'offer':
	              scrollToOfferSection();
	              break;
	            case 'archives':
	              gridArchives();
	              formInteraction('archives');
	              break;
	            case 'job':
	              ajaxJob();
	          }
	          trackingDoc();
	        };
	        updateBackLink = function () {
	          var updatedLink;
	          if (app.lang !== '') {
	            updatedLink = window.app.baseUrl + '/#' + app.currentSection;
	            el.section_ajax.find('.page_back > a').attr('href', updatedLink);
	          }
	        };
	        goBack = function (scroll) {
	          el.section_ajax.addClass('right fixed');
	          el.section_main.removeClass('left');
	          $('.form_errors').removeClass('show');
	          if (scroll) {
	            setTimeout((function () {
	              el.htmlbody.animate({
	                scrollTop: scrollValue
	              }, 600);
	              changeTitle(app.mainTitle);
	            }), 600);
	          }
	          el.sec_wrap.css('height', app.prevH);
	          app.keynav = true;
	          app.subpage = false;
	          setTimeout((function () {
	            scrollListener();
	            if (window.location.hash === '#offers') {
	              navTab[1].click();
	            }
	          }), 200);
	        };
	        if (window.history.pushState) {
	          if (app.popstate === false) {
	            reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
	            pathname_tmp = reg.exec(t.attr('href'));
	            if (pathname_tmp) {
	              pathname = pathname_tmp[1];
	              app.window.off('onpopstate');
	              if (window.location.pathname.length === 4) {
	                pathname = pathname.substring(4);
	              } else {
	                pathname = pathname.substring(1);
	              }
	              pushState(titlepage, '#' + pathname);
	              app.window.on('onpopstate');
	            }
	          }
	        }
	        el.section_ajax.html(targetContent);
	        app.keynav = false;
	        setTimeout((function () {
	          hideLoader();
	        }), 50);
	        setTimeout((function () {
	          el.section_main.addClass('left');
	          el.section_ajax.removeClass('right');
	          loadScripts();
	          changeTitle(titlepage);
	          updateBackLink();
	        }), 100);
	        setTimeout((function () {
	          if (app.currentSection === 'contact') {
	            $('.page_back').find('.back_txt_to').addClass('hide');
	            $('.page_back').find('.back_to_contact').removeClass('hide');
	          } else if (app.currentSection === 'about') {
	            $('.page_back').find('.back_txt_to').addClass('hide');
	            $('.page_back').find('.back_to_team').removeClass('hide');
	          }
	        }), 250);
	        setTimeout((function () {
	          window.scrollTo(0, 0);
	          setTimeout((function () {
	            scrollListener();
	          }), 200);
	          el.section_ajax.removeClass('fixed');
	          el.sec_wrap.css('height', app.hh);
	        }), 450);
	        $('.page_back').find('a').on('click', function () {
	          t = $(this);
	          if (app.window.scrollTop() > 0) {
	            el.htmlbody.animate({
	              scrollTop: 0
	            }, 300);
	            setTimeout((function () {
	              goBack(true);
	            }), 600);
	          } else {
	            setTimeout((function () {
	              return goBack(true);
	            }), 100);
	          }

	          /* PUSH IN HISTORY */
	          if (window.history.pushState) {
	            if (app.popstate === false) {
	              app.window.off('onpopstate');
	              pushState(t.attr('data-parent'), t.attr('href'));
	              app.window.on('onpopstate');
	            } else {

	            }
	          }
	          titlepage = data.match(/<title>(.*?)<\/title>/)[1];
	          return false;
	        });
	        $('.offer_pushend').find('a').on('click', function () {
	          var the_pageName;
	          navTab[6].click();
	          el.htmlbody.animate({
	            scrollTop: 0
	          }, 500);
	          setTimeout((function () {
	            goBack(false);
	            el.sec_wrap.css('height', hhTab[app.currentIndex]);
	          }), 800);
	          return false;
	        });

	        /* Analytics */
	        if (t.hasClass('all_jobs')) {
	          the_pageName = '/#jobs/';
	        } else {
	          the_pageName = titlepage;
	        }
	        dataLayer.push({
	          event: 'pageOpen',
	          pageName: the_pageName
	        });
	      },
	      error: function () {
	        alert('No pages found');
	        hideLoader();
	      }
	    });
	    return false;
	  });
	  el.scrolltop.on('click', function () {
	    return el.htmlbody.animate({
	      scrollTop: 0
	    }, 500);
	  });
	  openEvent();
	  viewLegalNotices();
	  scrollAnalytics();
	  trackingDoc();
	  chooseLang();
	  $(document).on('click', '.nav_breadcrumb.deep_page li', function () {
	    var section;
	    section = $(this).attr('data-section');
	    $('.page_back > a').click();
	    scrollValue = 0;
	    if ($('.section_nav').length) {
	      setTimeout((function () {
	        $('.section_nav .nav_breadcrumb li[data-section=' + section + ']').click();
	      }), 500);
	    } else {
	      window.location.href = window.app.baseUrl + '/#' + section;
	    }
	    return false;
	  });
	  $('.offer_pushend').find('a').on('click', function () {
	    navTab[5].click();
	    el.htmlbody.animate({
	      scrollTop: 0
	    }, 500);
	    setTimeout((function () {
	      goBack(false);
	      el.sec_wrap.css('height', hhTab[app.currentIndex]);
	    }), 800);
	    return false;
	  });
	  $('.link_goto').on('click', function () {
	    linkGoTo($(this).attr('data-nbsection'));
	    return false;
	  });
	  if (el.html.attr('lang') === 'fr') {
	    label_human = 'Je suis un humain';
	  }
	  else if (el.html.attr('lang') === 'cn') {
	    label_human = '我不是机器人';
	  }
	  else {
	    label_human = 'I am a human';
	  }
	  $('form input[type=submit]').before('<div class="check_human"><input type="checkbox" name="human" id="human" /><label for="human" class="label_human" style="display:inline-block">' + label_human + '</label></div>');
	  $('.js-reload-bt').on('click', function () {
	    var bt, exists_array, process, stock_new;
	    bt = $(this);
	    bt.addClass('clicked');
	    setTimeout((function () {
	      bt.removeClass('clicked');
	    }), 300);
	    exists_array = [];
	    stock_new = [];
	    process = function () {
	      var h, i, imgs, item, j, nb, nb_array, nb_new, origin_link, results, src1, src1_new, src2, src2_new, t;
	      nb_array = [];
	      i = 1;
	      results = [];
	      while (i <= 4) {
	        nb = void 0;
	        imgs = void 0;
	        j = 0;
	        while (j < 50) {
	          nb = Math.ceil(Math.random() * 13);
	          if (exists_array.indexOf(nb) < 0 && nb_array.indexOf(nb) < 0) {
	            break;
	          }
	          j++;
	        }
	        item = $('.js-anim:nth-child(' + i + ')');
	        imgs = item.find('img');
	        nb_array.push(nb);
	        src1 = $(imgs[0]).attr('src').substring($(imgs[0]).attr('src').indexOf('img'));
	        src2 = $(imgs[1]).attr('src').substring($(imgs[1]).attr('src').indexOf('img'));
	        origin_link = $(imgs[0]).attr('src').substring(0, $(imgs[0]).attr('src').indexOf('img'));
	        nb_new = nb_array[i - 1];
	        src1_new = src1.replace(/\d+/g, nb_new);
	        src2_new = src2.replace(/\d+/g, nb_new);
	        item.attr('data-id', nb_new);
	        stock_new[i] = {
	          el: imgs,
	          src1: src1_new,
	          src2: src2_new
	        };
	        if (i === 4) {
	          h = 1;
	        }
	        while (h <= 4) {
	          t = stock_new[h];
	          $(t.el).addClass('hide');
	          $('.js-anim').addClass('pos');
	          $(t.el[0]).parent().append('<img src="' + origin_link + t.src1 + '" class="show" /><img src="' + origin_link + t.src2 + '" />');
	          setTimeout((function () {
	            $('.js-anim .hide').remove();
	            $('.js-anim').removeClass('pos');
	          }), 400);
	          h++;
	        }
	        results.push(i++);;
	      }
	      return results;
	    };
	    $('.js-anim').each(function () {
	      exists_array.push($(this).attr('data-id'));
	      if ($(exists_array).length === 4) {
	        return process();
	      }
	    });
	    return dataLayer.push({
	      event: 'widget'
	    });
	  });
	  $('#js-list-jobs-view-all').on('click', function () {
	    $('.section_jobs .js-job_list_offers > li').addClass('job_show');
	    dataLayer.push({
	      event: 'openings'
	    });
	    return processJobsListAll();
	  });
	  $('#js-list-offices li').on('click', function () {
	    return console.log($(this).index());
	  });
	  return $('#js-contact-map-push').on('click', function () {
	    return el.htmlbody.animate({
	      scrollTop: $('.section_contact .section_content > .wrap').offset().top - 20
	    }, 400);
	  });

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var Preload;

	Preload = (function() {
	  function Preload() {}

	  $(function() {
	    $('#scrolltop').hide();
	    $('#section_main').css('visibility', 'hidden');
	    var breaking_1, heightTopbar, hh, preload, preloadEl, sec_home, sec_wrap, ww;
	    preload = function() {
	      var count_img, endLoading, intervalText_first, isLocalStorageNameSupported, launch, loading, nb_first, percent_txt, percent_txt_wrap, preload_line, tutorial;
	      loading = {
	        elements: 0,
	        percent: 0,
	        loaded: false,
	        tutorial: false
	      };
	      isLocalStorageNameSupported = function() {
	        var error, error1, storage, testKey;
	        testKey = 'test';
	        storage = window.sessionStorage;
	        try {
	          storage.setItem(testKey, '1');
	          storage.removeItem(testKey);
	          return true;
	        } catch (error1) {
	          error = error1;
	          return false;
	        }
	      };
	      endLoading = function() {
		$('#scrolltop').show();
		$('#section_main').css('visibility', 'visible');
	        var tutorial_img;
	        if (loading.tutorial) {
	          tutorial_img = tutorial.find('.wrap_img');
	          percent_txt_wrap.addClass('opacity_none');
	          $('.preload_line_wrap').addClass('opacity_none');
	          tutorial.removeClass('opacity_none').removeAttr('style');
	          tutorial.find('.wrap_txt').removeClass('opacity_none');
	          setTimeout((function() {
	            var el;
	            tutorial.find('li').eq(0).addClass('active');
	            el = {
	              count: 0,
	              keyboard: {
	                steps: 3,
	                posY: 0
	              },
	              clicking: {
	                steps: 14,
	                posY: 0
	              },
	              dragging: {
	                steps: 23,
	                posY: 0
	              }
	            };

	            /* Keyboard */
	            setTimeout((function() {
	              var keyboardTuto;
	              keyboardTuto = setInterval((function() {
	                el.keyboard.posY += 200;
	                el.count++;
	                tutorial_img.css('background-position', '0 -' + el.keyboard.posY + 'px');
	                if (el.count > el.keyboard.steps - 1) {

	                  /* clear + init */
	                  clearInterval(keyboardTuto);
	                  el.count = 0;

	                  /* next nav */
	                  tutorial_img.css('background-position', '0 0');

	                  /* Clicking */
	                  setTimeout((function() {
	                    tutorial_img.addClass('transition').css('background-position', '-240px 0');
	                    tutorial.find('li').removeClass('active');
	                    tutorial.find('li').eq(1).addClass('active');
	                    setTimeout((function() {
	                      var clickingTuto;
	                      clickingTuto = setInterval((function() {
	                        el.clicking.posY += 200;
	                        el.count++;
	                        tutorial_img.removeClass('transition').css('background-position', '-240px -' + el.clicking.posY + 'px');
	                        if (el.count > el.clicking.steps - 1) {

	                          /* clear + init */
	                          clearInterval(clickingTuto);
	                          el.count = 0;

	                          /* next nav */
	                          tutorial_img.css('background-position', '-240px -2600px');

	                          /* Dragging */
	                          setTimeout((function() {
	                            tutorial_img.addClass('transition').css('background-position', '-480px -2600px');
	                            tutorial.find('li').removeClass('active');
	                            tutorial.find('li').eq(2).addClass('active');
	                            setTimeout((function() {
	                              var draggingTuto;
	                              draggingTuto = setInterval((function() {
	                                el.dragging.posY += 200;
	                                el.count++;
	                                tutorial_img.removeClass('transition').css('background-position', '-480px -' + parseInt(2600 + el.dragging.posY) + 'px');
	                                if (el.count > el.dragging.steps - 1) {

	                                  /* clear + init */
	                                  clearInterval(draggingTuto);
	                                  el.count = 0;

	                                  /* next nav */
	                                  tutorial_img.css('background-position', '-480px -7000px');

	                                  /* Responsive */
	                                  setTimeout((function() {
	                                    tutorial_img.addClass('transition').css('background-position', '-720px -7000px');
	                                    tutorial.find('li').removeClass('active');
	                                    tutorial.find('li').eq(3).addClass('active');
	                                    setTimeout((function() {
	                                      launch();
	                                    }), 500);
	                                  }), 700);
	                                }
	                              }), 24);
	                            }), 400);
	                          }), 800);
	                        }
	                      }), 24);
	                    }), 500);
	                  }), 300);
	                }
	              }), 400);
	            }), 300);
	          }), 2200);
	        } else {
	          launch();
	        }
	      };
	      launch = function(no_timer) {
	        $(window).trigger('contentLoaded');
		if(!window.location.hash.length) el.home_enter.trigger('click');
		var timer;
	        if (no_timer) {
	          timer = 0;
	        } else {
	          timer = 1800;
	        }
	        preloadEl.content.addClass('opacity');
	        preloadEl.preload.addClass('hide');
	        $('.logo_scrolltop').addClass('init');

	        /* Scroll opacity hack */
	        setTimeout((function() {
	          preloadEl.preload.addClass('display_n');

	          /* TEST ANIM ENTER */
	          $('.home_right').removeClass('right');
	          $('.home_left > div, .home_lang').removeClass('opacity');
	          setTimeout((function() {
	            $('#anim').trigger('autoplay');
	          }), 500);
	        }), timer);
	      };
	      if (localStorage.getItem('visited') || ww <= 1100) {
	        loading.tutorial = false;
	      }
	      if (isLocalStorageNameSupported()) {
	        //2016.08.09 : V2 => tuto never displayed
		//localStorage.setItem('visited', 'true');
	      }
	      count_img = 0;
	      percent_txt = document.getElementById('percent_txt');
	      percent_txt_wrap = $('.percent_txt_wrap');
	      tutorial = $('#tutorial');
	      preload_line = $('.preload_line');
	      nb_first = 0;
	      intervalText_first = setInterval((function() {
	        percent_txt.innerHTML = nb_first;
	        preload_line.css('width', nb_first + '%');
	        nb_first++;
	        if (nb_first > 55) {
	          clearInterval(intervalText_first);
	          $(percent_txt).addClass('done');
	          setTimeout((function() {
	            var intervalText_second, nb_second;
	            $(percent_txt).removeClass('done');
	            nb_second = 55;
	            intervalText_second = setInterval((function() {
	              percent_txt.innerHTML = nb_second;
	              preload_line.css('width', nb_second + '%');
	              nb_second++;
	              if (nb_second > 100) {
	                clearInterval(intervalText_second);
	                endLoading();
	              }
	            }), 15);
	          }), 900);
	        }
	      }), 15);
	      preloadEl.document.find('img').each(function() {
	        var t;
	        t = $(this);
	        if (t.attr('src')) {
	          count_img++;
	          t.imagesLoaded(function() {
	            loading.elements++;
	            if (loading.elements === count_img && loading.loaded) {
	              endLoading();
	            }
	          });
	        }
	      });
	      $(document).on('click', '#skip-tutorial', function() {
	        $(document).trigger('skip-tutorial');
	      });
	      $(document).on('skip-tutorial', function() {
	        launch(true);
	      });
	    };
	    window.requestAnimFrame = (function() {
	      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
	        window.setTimeout(callback, 1000 / 60);
	      };
	    })();
	    preloadEl = {
	      load: true,
	      document: $(document),
	      preload: $('#preload'),
	      content: $('#content')
	    };
	    $.fn.imagesLoaded = function(callback) {
	      var blank, elems, len;
	      elems = this.filter('img');
	      len = elems.length;
	      blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
	      elems.bind('load.imgloaded', function() {
	        if (--len <= 0 && this.src !== blank) {
	          elems.unbind('load.imgloaded');
	          callback.call(elems, this);
	        }
	      }).each(function() {
	        var src;
	        if (this.complete || this.complete === void 0) {
	          src = this.src;
	          this.src = blank;
	          this.src = src;
	        }
	      });
	      return this;
	    };
	    if ($('#preload').length) {
	      ww = window.innerWidth;
	      hh = window.innerHeight;
	      breaking_1 = 780;
	      sec_wrap = $('.sections_wrap');
	      sec_home = $('.section_home');
	      heightTopbar = 74;
	      sec_home.css('width', ww);
	      if (ww < breaking_1) {
	        sec_wrap.css('height', hh - heightTopbar);
	        sec_home.css('height', hh - heightTopbar);
	      } else {
	        sec_wrap.css('height', hh);
	        sec_home.css('height', hh);
	      }
	      preload();
	    }
	  });

	  return Preload;

	})();

	module.exports = Preload;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var Particles;

	Particles = (function() {

	  /* ----------------------------------------------- */

	  /* Author : Vincent Garreau  - vincentgarreau.com */

	  /* ----------------------------------------------- */
	  function Particles() {}

	  $(function() {
	    var anim, animloop, appAnim, arrayTime, autoAnim, checkIfAnim, createParticles, distanceParticleMouse, drawParticles, moveParticles, paintCanvas, particle, particles, sizeCanvas;
	    //if ($('#content').length) {
	      setTimeout(function() {
	      /* ----- Canvas ----- */
	      sizeCanvas = function() {
	        appAnim.window.on('resize', function() {

	          /* Refresh window size */
	          appAnim.ww = window.innerWidth;
	          appAnim.hh = window.innerHeight;

	          /* Resize canvas */
	          anim.canvas.width = appAnim.ww / 2;
	          anim.canvas.height = appAnim.hh;

	          /* Paint canvas */
	          paintCanvas();
	        });
	        anim.canvas.width = appAnim.ww / 2;
	        anim.canvas.height = appAnim.hh;
	      };
	      paintCanvas = function() {
	        anim.ctx.fillStyle = 'rgba(182,25,36,1)';
	        anim.ctx.fillRect(0, 0, appAnim.ww, appAnim.hh);
	      };

	      /* ----- Particles ----- */

	      /* Init */
	      particle = function(color) {
	        this.x = Math.random() * appAnim.ww / 2;
	        this.y = Math.random() * appAnim.hh;

	        /*Speed */
	        this.vx = -.5 + Math.random() * 1.1;
	        this.vy = -.5 + Math.random() * 1.1;

	        /*Size */
	        this.radius = Math.random() * 1;
	        this.draw = function(color) {
	          anim.ctx.fillStyle = color;
	          anim.ctx.beginPath();
	          anim.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	          anim.ctx.fill();
	        };
	      };
	      createParticles = function() {
	        var i;
	        i = 0;
	        while (i < particles.nb) {
	          particles.array.push(new particle('white'));
	          i++;
	        }
	      };

	      /* Move */
	      drawParticles = function() {
	        var i;
	        paintCanvas();
	        i = 0;
	        while (i < particles.array.length) {
	          if (particles.array[i].linked) {
	            particles.array[i].draw('white');
	          } else {
	            particles.array[i].draw('rgba(255,255,255,' + anim.alpha_color + ')');
	          }
	          i++;
	        }
	        moveParticles();
	      };
	      moveParticles = function() {
	        var difTime, i, j, p, p2, speedTest;
	        i = 0;
	        while (i < particles.array.length) {
	          p = particles.array[i];

	          /* Move (based on velocity) */
	          if (anim.status === 'mousemove') {
	            arrayTime.push((new Date).getTime());
	            difTime = (new Date).getTime() - arrayTime[0];
	            speedTest = difTime * 3 / 6000;
	            if (difTime > 1000) {
	              anim.particles_alpha = true;
	              anim.alpha_color = 1 - (difTime / 6000);
	            }
	            p.x += p.vx / speedTest;
	            p.y += p.vy / speedTest;
	          } else {
	            p.x += p.vx;
	            p.y += p.vy;
	          }

	          /* Change position if out window */
	          if (p.x + p.radius > appAnim.ww / 2) {
	            p.x = p.radius;
	          } else if (p.x - p.radius < 0) {
	            p.x = appAnim.ww / 2 - p.radius;
	          }
	          if (p.y + p.radius > appAnim.hh) {
	            p.y = p.radius;
	          } else if (p.y - p.radius < 0) {
	            p.y = appAnim.hh - p.radius;
	          }

	          /* Check distance between each particle and mouse position */
	          j = i + 1;
	          while (j < particles.array.length) {
	            p2 = particles.array[j];
	            distanceParticleMouse(p, p2);
	            j++;
	          }
	          i++;
	        }
	      };
	      distanceParticleMouse = function(p1, p2) {
	        var dist, dist_mouse, dx, dx_mouse, dy, dy_mouse;
	        dist = void 0;
	        dx = p1.x - p2.x;
	        dy = p1.y - p2.y;
	        dist = Math.sqrt(dx * dx + dy * dy);
	        dist_mouse = void 0;
	        dx_mouse = p1.x - anim.mouse_pos.x;
	        dy_mouse = p1.y - anim.mouse_pos.y;
	        dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

	        /*Check distance between 2 particles + Check distance between 1 particle and mouse position */
	        if (dist <= anim.min_dist_particles && dist_mouse <= anim.min_dist_mouse && anim.status === 'mousemove') {

	          /* Draw the line */
	          anim.ctx.beginPath();
	          anim.ctx.strokeStyle = 'rgba(255,255,255,' + anim.opacity_line + ')';
	          anim.ctx.moveTo(p1.x, p1.y);
	          anim.ctx.lineTo(p2.x, p2.y);
	          anim.ctx.stroke();
	          anim.ctx.closePath();
	          p1.linked = true;
	          p2.linked = true;
	        } else {
	          if (anim.particles_alpha) {
	            p1.linked = false;
	            p2.linked = false;
	          }
	        }
	      };

	      /* Launch */
	      animloop = function() {
	        drawParticles();
	        requestAnimFrame(animloop);
	      };
	      autoAnim = function() {
	        $(anim.canvas).addClass('show_anim');
	        anim.mouse_pos.x = appAnim.ww / 5.5;
	        anim.mouse_pos.y = appAnim.hh / 1.5;
	        anim.status = 'mousemove';
	        setTimeout((function() {
	          anim.enablemouse = true;
	        }), 3000);
	      };
	      checkIfAnim = function() {
	        if (appAnim.ww > 1100) {
	          if (app.currentIndex !== 0) {
	            if (typeof myReq !== 'undefined') {
	              window.cancelAnimationFrame(myReq);
	            }
	          } else {
	            if (appAnim.ww >= 1100) {
	              $(anim.canvas).addClass('left').removeClass('opacity');
	              animloop();
	            }
	          }
	        }
	      };
	      window.requestAnimFrame = (function() {
	        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
	          window.setTimeout(callback, 1000 / 60);
	        };
	      })();

	      /* ----- Set variables ----- */
	      appAnim = {
	        window: $(window),
	        ww: window.innerWidth,
	        hh: window.innerHeight
	      };
	      anim = {
	        canvas: document.getElementById('anim'),
	        mouse_pos: {
	          x: 0,
	          y: 0
	        },
	        opacity_line: 0.125,
	        min_dist_particles: 60,
	        min_dist_mouse: 180,
	        status: 'mouseleave',
	        particles_alpha: false,
	        alpha_color: 1
	      };
	      particles = {
	        nb: 350,
	        array: []
	      };
	      if (appAnim.ww > 1400) {
	        particles.nb = 450;
	      }

	      /* ----- Start ----- */
	      anim.ctx = anim.canvas.getContext('2d');
	      arrayTime = [];
	      if (appAnim.ww > 1100) {
	        sizeCanvas();
	        paintCanvas();
	        createParticles();
	        drawParticles();
	        animloop();
	      }
	      $(anim.canvas).on('mousemove mouseleave', function(e) {
	        if (anim.enablemouse) {
	          if (e.type === 'mousemove') {
	            anim.status = 'mousemove';
	            anim.mouse_pos.x = e.pageX;
	            anim.mouse_pos.y = e.pageY;
	          } else {
	            anim.status = 'mouseleave';
	            anim.mouse_pos.x = 0;
	            anim.mouse_pos.y = 0;
	            arrayTime = [];
	            setTimeout((function() {
	              anim.particles_alpha = false;
	              anim.alpha_color = 1;
	            }), 600);
	          }
	        }
	      });
	      $(anim.canvas).on('autoplay', function() {
	        autoAnim();
	      });

	      //2016.08.09 | V2 => auto run animation
	      autoAnim();

	      $('.home_left').on('mousemove mouseleave', function(e) {
	        if (anim.enablemouse) {
	          if (e.type === 'mousemove') {
	            anim.status = 'mousemove';
	            anim.mouse_pos.x = e.pageX;
	            anim.mouse_pos.y = e.pageY;
	          } else {
	            $(anim.canvas).removeClass('show_anim');
	            anim.status = 'mouseleave';
	            anim.mouse_pos.x = 0;
	            anim.mouse_pos.y = 0;
	          }
	        }
	      });
	      $('.nav_home.prev, .nav_home.next, .home_enter, .bc_home').on('click', function(e) {
	        setTimeout((function() {
	          checkIfAnim();
	        }), 100);
	      });
	    }, 1000);
	  });

	  return Particles;

	})();

	module.exports = Particles;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var ValidateForm;

	ValidateForm = (function() {
	  function ValidateForm() {}

	  $(function() {
	    var validateForm;
	    validateForm = function(form) {

	      /*Init fields */
	      var defineLang, elF, err, err_lang, f, i, r, removePreviousErrors, resizeH;
	      f = {
	        lastname: $('#lastname'),
	        firstname: $('#firstname'),
	        email: $('#email'),
	        phone: $('#phone'),
	        company: $('#company'),
	        website: $('#website'),
	        audience: $('#audience'),
	        industrysector: $('#industrysector'),
	        analyticstool: $('#analyticstool'),
	        message: $('#message'),
	        secure: $('#secure_form'),
	        human: $('#human')
	      };

	      /*Init regex verification */
	      r = {
	        special: /[0-9\[\]\^\$\.\|\?\*\+\(\)\\~`\!@#%&\_+={}'""<>:;, ]{1,}$/,
	        email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
	        phone: /^[\+\-\.\(\)\d ]+$/i,
	        url: /((http:\/\/|https:\/\/)?(www.)?(([a-zA-Z0-9-]){2,}\.){1,4}([a-zA-Z]){2,6}(\/([a-zA-Z-_\/\.0-9#:?=&;,]*)?)?)/
	      };

	      /*Init error messages */
	      err_lang = {
	        en: {
	          lastname: 'Missing or invalid name',
	          firstname: 'Missing or invalid firstname',
	          email: 'Missing or invalid email',
	          phone: 'Invalid phone',
	          message: 'Missing message',
	          secure: 'Invalid security code',
	          human: 'You\'re not a human'
	        },
	        fr: {
	          lastname: 'Nom invalide ou manquant',
	          firstname: 'Prénom invalide ou manquant',
	          email: 'Email invalide ou manquant',
	          phone: 'Téléphone invalide',
	          message: 'Message manquant',
	          secure: 'Code de sécurité invalide',
	          human: 'Vous n\'êtes pas un humain'
	        }
	      };

	      /*Init form */
	      elF = {
	        contact_form: $('.contact_form'),
	        form_errors: $('.form_errors'),
	        fields: $('#contact_form input, #contact_form select, #contact_form textarea, .label_human'),
	        submit: $('#form_submit'),
	        success: $('.form_success'),
	        initHH: hhTab[app.currentIndex]
	      };
	      removePreviousErrors = function() {
	        elF.form_errors.empty().removeClass('show');
	        elF.fields.removeClass('error');
	      };
	      defineLang = function() {
	        var userLang;
	        if (app.lang.length > 2) {
	          userLang = userLang.substring(0, 2);
	        }
	        switch (app.lang) {
	          case 'en':
	            window.error_m = err_lang.en;
	            break;
	          case 'fr':
	            window.error_m = err_lang.fr;
	            break;
	          default:
	            window.error_m = err_lang.en;
	            break;
	        }
	        //console.log('defineLang');
	        //console.log(error_m);
	      };
	      resizeH = function() {
	        var trueH;
	        var trueH;
	        if (app.ww <= 1100) {
	          trueH = hhTab[app.currentIndex] + $('.contact_form').height() + 50;
	          el.sec_wrap.css('height', trueH);
	          secTab[app.currentIndex].css('height', trueH);
	        } else {
	          trueH = elF.initHH + elF.form_errors.height() + 50;
	          el.sec_wrap.css('height', trueH);
	          secTab[app.currentIndex].css('height', trueH);
	        }
	      };
	      removePreviousErrors();

	      /*Define lang */
	      defineLang();

	      /*Detecting errors (select regex and error message for each field) */
	      err = [];

	      /*Lastname */
	      if (f.lastname.val().match(r.special) || f.lastname.val() === '') {
	        f.lastname.addClass('error');
	        err[err.length] = error_m.lastname;
	      }

	      /*Firstname */
	      if (f.firstname.val().match(r.special) || f.firstname.val() === '') {
	        f.firstname.addClass('error');
	        err[err.length] = error_m.firstname;
	      }

	      /*Email */
	      if (!f.email.val().match(r.email) || f.email.val() === '') {
	        f.email.addClass('error');
	        err[err.length] = error_m.email;
	      }

	      /*Phone */
	      if (!f.phone.val().match(r.phone) && f.phone.val() !== '') {
	        f.phone.addClass('error');
	        err[err.length] = error_m.phone;
	      }

	      /*Message */
	      if (f.message.val() === '') {
	        f.message.addClass('error');
	        err[err.length] = error_m.message;
	      }

	      /*Secure */
	      /*if (f.secure.val() !== '55') {
	        f.secure.addClass('error');
	        err[err.length] = error_m.secure;
	      }*/

	      /*Human */
	      if (!f.human.prop('checked')) {
	        $('.label_human').addClass('error');
	        err[err.length] = error_m.human;
	      }

	      /*If errors show error messages, else post form */
	      if (err.length) {
	        elF.form_errors.addClass('show');
	        el.body.animate({
	          scrollTop: elF.contact_form.offset().top - 20
	        }, 300);
	        i = 0;
	        while (i < err.length) {
	          elF.form_errors.append('<li>' + err[i] + '</li>');
	          i++;
	        }
	        resizeH();
	        $('.error').on('keydown', function() {
	          $(this).removeClass('error');
	        });
	      } else {

	        /* Ajax post */
	        $.ajax({
	          url: form.attr('action'),
	          type: form.attr('method'),
	          data: form.serialize(),
	          dataType: 'json',
	          success: function(json) {
	            if (typeof json !== 'string') {
	              elF.submit.addClass('hide');
	              elF.success.addClass('show');

	              /* Analytics */
	              dataLayer.push({
	                event: 'formSend'
	              });
	            } else {
	              alert('There was a problem sending the email.');
	            }
	          },
	          error: function(e) {}
	        });
	        removePreviousErrors();
	        resizeH();
	      }
	    };
	    el.contact_form.on('submit', function() {
	      validateForm($(this));
	      return false;
	    });
	  });

	  return ValidateForm;

	})();

	module.exports = ValidateForm;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var GMaps;

	GMaps = (function() {
	  function GMaps() {}

	  $(function() {
	    var initializeMap;
	    if ($("#contact_map").length) {
	      initializeMap = function() {
	        var createMarker, mapOptions, styledMap, styles;
	        createMarker = function(lat, lng, slug) {
	          var icon_data, marker;
	          icon_data = {
	            url: window.location.origin + '/wp-content/themes/fiftyfive/assets/img/' + slug,
	            scaledSize: new google.maps.Size(111, 46),
	            origin: new google.maps.Point(0, 0),
	            anchor: new google.maps.Point(18, 46)
	          };

	          /* Init */
	          marker = new google.maps.Marker({
	            map: map,
	            position: new google.maps.LatLng(lat, lng),
	            icon: icon_data
	          });

	          /* Events */
	          google.maps.event.addListener(marker, 'click', function() {
	            map.setZoom(14);
	            map.setCenter(marker.getPosition());
	          });
	        };
	        mapOptions = {
	          zoom: 3,
	          center: new google.maps.LatLng(45.37749, 30.58526),
	          disableDefaultUI: true,
	          scrollwheel: false,
	          draggable: false,
	          disableDoubleClickZoom: false,
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	        if (BrowserDetect.OS === 'Windows' || BrowserDetect.OS === 'Mac' || BrowserDetect.OS === 'Linux') {
	          mapOptions.draggable = true;
	        } else {
	          mapOptions.disableDoubleClickZoom = true;
	        }
	        window.map = new google.maps.Map(document.getElementById('contact_map'), mapOptions);
	        google.maps.visualRefresh = true;

	        /* ---- CREATE MARKER HERE ---- */

	        /*createMarker(48.86866, 2.33432); */
	        /*createMarker(48.87038, 2.33279, 'marker-55-paris.png');*/
	        createMarker(48.8778216, 2.3293708, 'marker-55-paris.png');
	        createMarker(51.506360, -0.106924, 'marker-55-london.png');
	        createMarker(22.27874, 114.17150, 'marker-55-hk.png');
	        /*createMarker(40.7128, -73.935242, 'marker-55-ny.png');*/
	        createMarker(40.752976, -73.984227, 'marker-55-ny.png');
	        createMarker(31.226612, 121.458348, 'marker-55-shanghai.png');

	        /* CUSTOM STYLE */
	        styles = [
	          {
	            'featureType': 'all',
	            'elementType': 'all',
	            'stylers': [
	              {
	                'saturation': '-100'
	              }, {
	                'gamma': '0.60'
	              }, {
	                'lightness': '20'
	              }
	            ]
	          }, {
	            'featureType': 'all',
	            'elementType': 'labels.text',
	            'stylers': [
	              {
	                'color': '#808080'
	              }, {
	                'weight': 0.3
	              }
	            ]
	          }, {
	            'featureType': 'all',
	            'elementType': 'labels.icon',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'administrative',
	            'elementType': 'geometry.fill',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'administrative.country',
	            'elementType': 'geometry.fill',
	            'stylers': [
	              {
	                'visibility': 'on'
	              }
	            ]
	          }, {
	            'featureType': 'administrative.country',
	            'elementType': 'geometry.stroke',
	            'stylers': [
	              {
	                'visibility': 'on'
	              }, {
	                'color': '#dddddd'
	              }
	            ]
	          }, {
	            'featureType': 'administrative.country',
	            'elementType': 'labels.text.fill',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'administrative.country',
	            'elementType': 'labels.text.stroke',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'administrative.province',
	            'elementType': 'geometry',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'administrative.province',
	            'elementType': 'labels',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'landscape.natural',
	            'elementType': 'geometry',
	            'stylers': [
	              {
	                'visibility': 'on'
	              }, {
	                'saturation': '-100'
	              }, {
	                'lightness': '33'
	              }, {
	                'gamma': '1.28'
	              }
	            ]
	          }, {
	            'featureType': 'landscape.natural.terrain',
	            'elementType': 'geometry.fill',
	            'stylers': [
	              {
	                'visibility': 'on'
	              }
	            ]
	          }, {
	            'featureType': 'poi',
	            'elementType': 'geometry.fill',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'poi.park',
	            'elementType': 'geometry.fill',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'road',
	            'elementType': 'all',
	            'stylers': [
	              {
	                'visibility': 'simplified'
	              }
	            ]
	          }, {
	            'featureType': 'road.highway',
	            'elementType': 'geometry.fill',
	            'stylers': [
	              {
	                'color': '#ffffff'
	              }
	            ]
	          }, {
	            'featureType': 'road.highway',
	            'elementType': 'labels',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'road.highway.controlled_access',
	            'elementType': 'all',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'road.arterial',
	            'elementType': 'all',
	            'stylers': [
	              {
	                'visibility': 'on'
	              }
	            ]
	          }, {
	            'featureType': 'road.arterial',
	            'elementType': 'geometry',
	            'stylers': [
	              {
	                'visibility': 'simplified'
	              }
	            ]
	          }, {
	            'featureType': 'road.arterial',
	            'elementType': 'labels.text',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'road.arterial',
	            'elementType': 'labels.icon',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'water',
	            'elementType': 'labels.text.fill',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }, {
	            'featureType': 'water',
	            'elementType': 'labels.text.stroke',
	            'stylers': [
	              {
	                'visibility': 'off'
	              }
	            ]
	          }
	        ];
	        styledMap = new google.maps.StyledMapType(styles, {
	          name: 'Styled Map'
	        });
	        map.mapTypes.set('map_style', styledMap);
	        map.setMapTypeId('map_style');
	      };
	      google.maps.event.addDomListener(window, 'load', initializeMap);
	    }
	  });

	  return GMaps;

	})();

	module.exports = GMaps;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
]);

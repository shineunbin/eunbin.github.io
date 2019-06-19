
$(function() {
  // IE related fixes and polyfills
  function detectIE() {
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
        // IE 12 => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return false;
  }

  function ieFallback() {
    var ieVersion = detectIE();

    // SVG is supported starting from IE10 and IE12 should support SVG animations
    if (ieVersion >= 10 && ieVersion < 12) {
      // Unfortunately, IE does not support SVG animations in any form (even CSS ones)
      // See: https://twitter.com/jacobrossi/status/560200238627975168
      // IE beta with some working code was released on March 28, 2015
      var animStart = new Date();

      // Linear interpolation helper
      function interpolate(delta, start, end, len) {
        if (len > 0) {
          return start + (end - start) * (delta / len);
        }

        return 0;
      }

      function linearAnimation(offset, length, start, end, fn) {
        function worker() {
          var delta = (new Date()) - animStart - offset;

          if (delta <= length) {
            fn(interpolate(delta, start, end, length));
            requestAnimationFrame(worker);
          } else {
            fn(end);
          }
        }

        setTimeout(worker, offset);
      }

      // Outline animation
      var outlineNode = document.getElementById('bottle_loader');

      linearAnimation(0, 3500, 1000, 0, function(value) {
        outlineNode.style.strokeDashoffset = value;
      });

      // Fill animation. Fill bottle by changing y1 gradient value
      var gradientNode = document.getElementById('fillGradient');

      linearAnimation(3000, 4000, 101, 6, function(value) {
        gradientNode.y1.animVal.valueAsString = value + '%';
      });
    }
  }

  // Animation looping
  var animDura = 13000;
  var refreshTimer = null;

  // Delays the counting animation, and adds a class to view it after 3.2s of the demo starting
  // Which is the time it takes for the bottle outline to fill
  function startCounter() {
    ieFallback();

    setTimeout(function() {
        var $el = $('.counter').addClass('active');

        var counter = 0;
        $el.text(counter);

        var interval = setInterval(function() {
            counter += 1;
            $el.text(counter);

            if (counter >= 100) {
                clearInterval(interval);
                $('.counter').removeClass('active');
            }
        }, 34);
    }, 3200);
  }

  // Restart animation by resetting DOM node and re-starting percentage counter
  var rawSVG = $('#inner-refresh').html();

  function restartAnimation() {
    $('#inner-refresh').html(rawSVG);
    startCounter();
  }

  // Automatic reload after animDura seconds
  function startLooping() {
    restartAnimation();

    if (refreshTimer != null) {
      clearTimeout(refreshTimer);
    }

    refreshTimer = setTimeout(startLooping, animDura);
  }

  startLooping();

  // Just publicly exposes restart method
  window.reloadFun = startLooping;
});
(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var has = ({}).hasOwnProperty;

  var aliases = {};

  var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  var unalias = function(alias, loaderPath) {
    var start = 0;
    if (loaderPath) {
      if (loaderPath.indexOf('components/' === 0)) {
        start = 'components/'.length;
      }
      if (loaderPath.indexOf('/', start) > 0) {
        loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
      }
    }
    var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
    if (result) {
      return 'components/' + result.substring(0, result.length - '.js'.length);
    }
    return alias;
  };

  var expand = (function() {
    var reg = /^\.\.?(\/|$)/;
    return function(root, name) {
      var results = [], parts, part;
      parts = (reg.test(name) ? root + '/' + name : name).split('/');
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part === '..') {
          results.pop();
        } else if (part !== '.' && part !== '') {
          results.push(part);
        }
      }
      return results.join('/');
    };
  })();
  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';
    path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  globals.require = require;
})();
require.register("initialize", function(exports, require, module) {
$(document).ready(function() {
  var wavesurfer;
  inlineSVG.init();
  $('.header').find('li').click(function() {
    $('li').removeClass('current');
    return $(this).addClass('current');
  });
  $('.slider').slick({
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    variableWidth: true
  });
  $('.slider').find('.slick-dots').detach().prependTo('.slider-inner');
  $('.slick-dots').find('li').click(function() {
    $('li').removeClass('slick-active');
    return $(this).addClass('slick-active');
  });
  wavesurfer = WaveSurfer.create({
    container: '#wave',
    waveColor: 'blue',
    progressColor: '#0b63ed',
    backend: 'MediaElement'
  });
  $('.play').click(function() {
    if ($('.play').hasClass('onPlay') === false) {
      $('.play').addClass('onPlay');
      wavesurfer.play();
    } else {
      $('.play').removeClass('onPlay');
      wavesurfer.pause();
    }
    return wavesurfer.on('audioprocess', setInterval((function() {
      var progress, progressMin, progressSec;
      progress = wavesurfer.getCurrentTime();
      progressMin = Math.floor(progress / 60);
      progressSec = (Math.floor(progress)) - (progressMin * 60);
      if (progressMin < 10) {
        $('.time').find('.min').html('0' + progressMin);
      } else {
        $('.time').find('.min').html(progressMin);
      }
      if (progressSec < 10) {
        $('.time').find('.sec').html('0' + progressSec);
      } else {
        $('.time').find('.sec').html(progressSec);
      }
    }), 950));
  });
  return wavesurfer.load('../music/Boulevard Depo - OCB (Original Mix) (1).mp3');
});
});

;
//# sourceMappingURL=app.js.map
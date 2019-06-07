/**
 * Insight search plugin
 * @author PPOffice { @link https://github.com/ppoffice }
 */
(function ($, CONFIG) {
  var $main = $('.ins-search')
  var $input = $main.find('.ins-search-input')
  var $wrapper = $main.find('.ins-section-wrapper')
  var $container = $main.find('.ins-section-container')
  $main.parent().remove('.ins-search')
  $('body').append($main)

  function section (title) {
    return $('<section>').addClass('ins-section')
  }

  function searchItem (icon, title, slug, preview, url) {
    return `<div class="ins-selectable ins-search-item" data-url="${url}"><header><i class="fa fa-${icon}"></i>${title}</header><p class="ins-search-preview">${preview}</p></div>`
  }

  function sectionFactory (type, array) {
    var sectionTitle
    var $searchItems
    if (array.length === 0) return null
    sectionTitle = CONFIG.TRANSLATION[type]
    switch (type) {
      case 'POSTS':
        $searchItems = array.map(function (item) {
                    // Use config.root instead of permalink to fix url issue
          return searchItem('file', item.title, null, item.content != null ? item.content.slice(0, 150) : '', CONFIG.ROOT_URL + item.uri)
        })
        break
      default:
        return null
    }
    return section(sectionTitle).append($searchItems.join(''))
  }

  function extractToSet (json, key) {
    var values = {}
    var entries = json
    for (var entry in json) {
      if (entries[entry][key]) {
        entries[entry][key].forEach(function (value) {
          values[value.name] = value
        })
      }
    };
    var result = []
    for (var key in values) {
      result.push(values[key])
    }
    return result
  }

  function parseKeywords (keywords) {
    return keywords.split(' ').filter(function (keyword) {
      return !!keyword
    }).map(function (keyword) {
      return keyword.toUpperCase()
    })
  }

    /**
     * Judge if a given post/page/category/tag contains all of the keywords.
     * @param Object            obj     Object to be weighted
     * @param Array<String>     fields  Object's fields to find matches
     */
  function filter (keywords, obj, fields) {
    var result = false
    var keywordArray = parseKeywords(keywords)
    var containKeywords = keywordArray.filter(function (keyword) {
      var containFields = fields.filter(function (field) {
        if (!obj.hasOwnProperty(field)) {
          return false
        }
        if (obj[field].toUpperCase().indexOf(keyword) > -1) {
          return true
        }
      })
      if (containFields.length > 0) { return true }
      return false
    })
    return containKeywords.length === keywordArray.length
  }

  function filterFactory (keywords) {
    return {
      POST: function (obj) {
        return filter(keywords, obj, ['title', 'text'])
      }
    }
  }

    /**
     * Calculate the weight of a matched post/page/category/tag.
     * @param Object            obj     Object to be weighted
     * @param Array<String>     fields  Object's fields to find matches
     * @param Array<Integer>    weights Weight of every field
     */
  function weight (keywords, obj, fields, weights) {
    var value = 0
    parseKeywords(keywords).forEach(function (keyword) {
      var pattern = new RegExp(keyword, 'img') // Global, Multi-line, Case-insensitive
      fields.forEach(function (field, index) {
        if (obj.hasOwnProperty(field)) {
          var matches = obj[field].match(pattern)
          value += matches ? matches.length * weights[index] : 0
        }
      })
    })
    return value
  }

  function weightFactory (keywords) {
    return {
      POST: function (obj) {
        return weight(keywords, obj, ['title', 'text'], [3, 1])
      }
    }
  }

  function search (json, keywords) {
    var WEIGHTS = weightFactory(keywords)
    var FILTERS = filterFactory(keywords)
    var posts = json
    return {
      posts: posts.filter(FILTERS.POST).sort(function (a, b) { return WEIGHTS.POST(b) - WEIGHTS.POST(a) }).slice(0, 20)
    }
  }

  function searchResultToDOM (searchResult) {
    $container.empty()
    for (var key in searchResult) {
      $container.append(sectionFactory(key.toUpperCase(), searchResult[key]))
    }
  }

  function scrollTo ($item) {
    if ($item.length === 0) return
    var wrapperHeight = $wrapper[0].clientHeight
    var itemTop = $item.position().top - $wrapper.scrollTop()
    var itemBottom = $item[0].clientHeight + $item.position().top
    if (itemBottom > wrapperHeight + $wrapper.scrollTop()) {
      $wrapper.scrollTop(itemBottom - $wrapper[0].clientHeight)
    }
    if (itemTop < 0) {
      $wrapper.scrollTop($item.position().top)
    }
  }

  function selectItemByDiff (value) {
    var $items = $.makeArray($container.find('.ins-selectable'))
    var prevPosition = -1
    $items.forEach(function (item, index) {
      if ($(item).hasClass('active')) {
        prevPosition = index
        return
      }
    })
    var nextPosition = ($items.length + prevPosition + value) % $items.length
    $($items[prevPosition]).removeClass('active')
    $($items[nextPosition]).addClass('active')
    scrollTo($($items[nextPosition]))
  }

  function gotoLink ($item) {
    if ($item && $item.length) {
      location.href = $item.attr('data-url')
    }
  }

  $.getJSON(CONFIG.CONTENT_URL, function (json) {
    if (location.hash.trim() === '#ins-search') {
      $main.addClass('show')
    }
    $input.on('input', function () {
      var keywords = $(this).val()
      searchResultToDOM(search(json, keywords))
    })
    $input.trigger('input')
  })

  $(document).on('click focus', '.search-field', function () {
    $main.addClass('show')
    $main.find('.ins-search-input').focus()
  }).on('click focus', '.search-form-submit', function () {
    $main.addClass('show')
    $main.find('.ins-search-input').focus()
  }).on('click', '.ins-search-item', function () {
    gotoLink($(this))
  }).on('click', '.ins-close', function () {
    $main.removeClass('show')
  }).on('keydown', function (e) {
    if (!$main.hasClass('show')) return
    switch (e.keyCode) {
      case 27: // ESC
        $main.removeClass('show'); break
      case 38: // UP
        selectItemByDiff(-1); break
      case 40: // DOWN
        selectItemByDiff(1); break
      case 13: // ENTER
        gotoLink($container.find('.ins-selectable.active').eq(0)); break
    }
  })
})(jQuery, window.INSIGHT_CONFIG)

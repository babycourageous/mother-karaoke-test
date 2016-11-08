---
---
var index = lunr(function () {
  this.field('band')
  this.field('song')
  this.ref('id')
});

{% assign count = 0 %}
{% for item in site.data.songs %}
index.add({
  band: {{item.band | jsonify}},
  song: {{item.song | jsonify}},
  id: {{count}}
});
{% assign count = count | plus: 1 %}
{% endfor %}

var songlist = [{% for item in site.data.songs %}{
  'band': {{item.band | jsonify}},
  'song': {{ item.song | jsonify }},
 }{% unless forloop.last %},{% endunless %}{% endfor %}
]

$(document).ready(function() {
  $('input#i-search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><div class="post-date small">'+songlist[ref].band+' : '+songlist[ref].song+'<div></div>';
      resultdiv.append(searchitem);
    }  });
});

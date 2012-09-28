// Generated by CoffeeScript 1.3.3
var makeBuilder, makeTimeline, sStory;

makeTimeline = function(d, i) {
  var timelineoptions;
  timelineoptions = {
    type: 'timeline',
    width: '100%',
    height: '620',
    source: d.url,
    embed_id: 'timeline' + i
  };
  return $(document).ready(function() {
    return createStoryJS(timelineoptions);
  });
};

makeBuilder = function(sections) {
  var builder, sectionli, summarycontent, summaryheader;
  builder = d3.select("#section-summary ol");
  sectionli = builder.selectAll('.section-summary-item').data(sections).enter().append("li").attr("class", "section-summary-item");
  summaryheader = sectionli.append("div").attr("class", "summary-header");
  summaryheader.append("h4").text(function(d, i) {
    if (d.title !== void 0) {
      return d.title;
    } else {
      return "> No title given.";
    }
  });
  summaryheader.append("div").attr("class", "sectiontype").text(function(d, i) {
    return d.type;
  });
  summarycontent = sectionli.append("div").attr("class", "summary-content");
  return summarycontent.append("div").attr("class", "image-url").text(function(d, i) {
    return d.url;
  });
};

sStory = function(sections) {
  var container;
  makeBuilder(sections);
  container = d3.select("#container");
  return container.selectAll('.section').data(sections).enter().append("div").attr("class", function(d, i) {
    return "section " + d.type + " " + d.type + i;
  }).html(function(d, i) {
    var html;
    switch (d.type) {
      case "image":
        console.log("image");
        html = ich.image(d, true);
        break;
      case "image2":
        console.log("image2");
        html = ich.image2(d, true);
        break;
      case "image3":
        console.log("image3");
        html = ich.image3(d, true);
        break;
      case "vimeo":
        console.log("vimeo");
        html = ich.vimeo(d, true);
        break;
      case "soundcloud":
        console.log("soundcloud");
        html = ich.soundcloud(d, true);
        break;
      case "map":
        console.log("map");
        break;
      case "timeline":
        html = "<h2>" + d.title + "</h2> ";
        html += "<div id='timeline" + i + "'></div>";
        makeTimeline(d, i);
        console.log("timeline");
    }
    return html;
  }).style("background-image", function(d, i) {
    if (d.type === "image" || d.type === "image2" || d.type === "image3") {
      return "url('" + d.url + "')";
    }
  });
};

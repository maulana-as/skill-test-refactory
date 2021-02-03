var horizontalTimeLine = {
  TimeLine: $("#horizontal-timeline"),
  Next: function () {
    $("#horizontal-timeline li:not(.active):first").addClass("active");
  },
  Prev: function () {
    $("#horizontal-timeline li.active:last").removeClass("active");
  },
};

$("#Next").on("click", function () {
  horizontalTimeLine.Next();
});

$("#Prev").on("click", function () {
  horizontalTimeLine.Prev();
});

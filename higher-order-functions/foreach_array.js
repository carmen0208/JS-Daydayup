function gatherCorrelation(journal) {
  var phis = {};
  for(var entry =0; entry < journal.length; entry ++) {
    var events = journal[entry].events;
    for (var i=0; i< events.length; i ++) {
      var event = events[i];
      if(!(event in phis)) {
        phis[event] = phi(tableFor(event, journal));
      }
    }
  }
}

// Create a new document if one is not already open
if (!app.documents.length) {
  var newDoc = app.documents.add();
}

// Get the active document
var doc = app.activeDocument;

// Appends a new PathPoint to an existing path
// and initializes its anchor and handle points.
if (app.documents.length > 0) {
  var doc = app.activeDocument;

  var points = doc.pathItems[0].pathPoints.length;
  var line = doc.pathItems[0];
  for (var i = 0; i < points; i++) {
    doc.pathItems[1].pathPoints.add().anchor = Array(
      line.pathPoints[i].anchor[0],
      line.pathPoints[i].anchor[1]
    );
    // doc.pathItems.rectangle(
    //   line.pathPoints[i].anchor[0],
    //   line.pathPoints[i].anchor[0],
    //   72,
    //   216
    // );
  }

  //   alert(line.pathPoints[0].anchor[3]);
  //   line.stroked = true;
  //   line.setEntirePath(Array(Array(220, 475), Array(375, 300)));

  //   // Append another point to the line
  //   var newPoint = doc.pathItems[0].pathPoints.add();
  //   newPoint.anchor = Array(220, 300);
  //   newPoint.leftDirection = newPoint.anchor;
  //   newPoint.rightDirection = newPoint.anchor;
  //   newPoint.pointType = PointType.CORNER;
}

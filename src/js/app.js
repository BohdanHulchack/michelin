(function () {
  $(document).ready(function () {
    var carType = $("#carType"),
      carDiametr = $("#carDiametr"),
      carHeight = $("#carHeight"),
      outTierType = $("#tierType"),
      outTierHeight = $("#tierHeight"),
      outAutoType = $("#autoType"),
      chosenItem = {};

    carType.on('mouseup', 'label', function (e) {
      var type = e.target.dataset.type;
      chosenItem.autotype = type;
      outAutoType.html(type);
    });
    carDiametr.on('mouseup', 'label', function (e) {
      var diametr = e.target.dataset.diametr;
      chosenItem.diametr = diametr;
      outTierType.html(" " + diametr);
    });
    carHeight.on('mouseup', 'label', function (e) {
      var height = e.target.dataset.height;
      chosenItem.height = height;
      outTierHeight.html(height);
      console.log(chosenItem);
    });
  })
})();
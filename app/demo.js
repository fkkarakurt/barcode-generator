//@author github.com/fkkarakurt

(function () {
  "use strict";

  angular.module("demo", ["ngBarcode"]).controller("DemoCtrl", [DemoCtrl]);

  function DemoCtrl() {
    this.textField = "Entry Your Data!";
    this.barcodeInput = this.barcodeInput || this.textField;
    this.updateBarcode = updateBarcode;

    function updateBarcode() {
      this.barcodeInput = this.textField;
    }
  }
})();

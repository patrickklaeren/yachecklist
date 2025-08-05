function AircraftListViewModel(min, max) {
  this.aircraftList = ko.observableArray([]);
  this.randomNumber = ko.observable(Math.floor(Math.random() * (max - min + 1)) + min);
}

const vm = new AircraftListViewModel(1, 100); // Change min/max as needed
fetch('checklists/index.json')
  .then(res => res.json())
  .then(data => {
    vm.aircraftList(data);
  });

ko.applyBindings(vm);

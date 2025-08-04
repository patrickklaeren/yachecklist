function AircraftListViewModel() {
  this.aircraftList = ko.observableArray([]);
}

const vm = new AircraftListViewModel();
fetch('checklists/index.json')
  .then(res => res.json())
  .then(data => {
    vm.aircraftList(data);
  });

ko.applyBindings(vm);

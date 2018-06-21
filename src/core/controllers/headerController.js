class headerController {
    constructor($mdSidenav) {
        this.test = "asdasd";
    }

    toggleNav() {
        return $mdSidenav('left').toggle();
    }

}

export default headerController;
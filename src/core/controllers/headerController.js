class headerController {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    toggleNav() {
        return this.$mdSidenav('left').toggle();
    }

}

export default headerController;
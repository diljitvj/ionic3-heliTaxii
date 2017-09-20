import { Component, ViewChild } from '@angular/core';
import { NavController, Select, LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-ride-now',
    templateUrl: 'ride-now.html',
})
export class RideNowPage {
    @ViewChild('boardingSelect') boardingSelect: Select;
    @ViewChild('dropOffSelect') dropOffSelect: Select;
    @ViewChild('seatSelect') seatSelect: Select;
    public stage = 1;
    private boardingPoints;
    private dropOffPoints;
    private selectedBoardingPoint;
    private selectedDropOffPoint;
    private selectedSeats;
    private showTimeSlots = false;
    constructor(public navCtrl: NavController, public viewChild: ViewChild, public loadingCtrl: LoadingController) {
        this.boardingPoints = this.locations;
    }
    ionViewWillEnter() {
        this.boardingSelect.open();
    }
    onInput(stage) {
        // console.log(stage);
        this.stage = stage + 1;
        switch (stage) {
            case 1:
                this.populateDropOffPoints();
                setTimeout(() => {
                    this.dropOffSelect.open();
                }, 10)
                this.showTimeSlots = false;
                break;
            case 2:
                setTimeout(() => {
                    this.seatSelect.open();
                }, 10);
                this.showTimeSlots = false;
                break;
            case 3:
                this.fetchTimeSlots();
                this.showTimeSlots = false;
                break;
        }
    }
    populateDropOffPoints() {
        var index = this.locations.findIndex((i) => {
            return i.value == this.selectedBoardingPoint;
        })
        this.dropOffPoints = this.locations.map(x => Object.assign({}, x));
        this.dropOffPoints.splice(index, 1);
    }
    fetchTimeSlots() {
        const loading = this.loadingCtrl.create({
            content: 'Checking Availablity'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
            this.showTimeSlots = true;
        }, 1000)
    }
    public locations = [
        {
            value: 1,
            text: 'BIAL'
        }, {
            value: 2,
            text: 'HAL'
        }, {
            value: 3,
            text: 'Electronic City'
        }
    ]
}
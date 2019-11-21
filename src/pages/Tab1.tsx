import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	withIonLifeCycle,
} from '@ionic/react';

import { Icon, Icons } from '.././components/Icon.jsx';
// eslint-disable-next-line
import { rainy, cloudy, cloudyNight, sunny } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

function fixTime(time: number) {
	var timeParam = 'am';
	time -= 6;
	if (time < 0) {
		time += 24;
	}
	if (time === 0) {
		time = 12;
	} else if (time > 12) {
		time -= 12;
		timeParam = 'pm';
	} else if (time === 12) {
		timeParam = 'pm';
	}
	return `${time}${timeParam}`;
}

class Weather extends React.Component {
	//called as you start loading the page
	ionViewWillEnter() {
		console.log('ionViewWillEnter event fired');
		let data = [];
		data[0] = JSON.parse(String(localStorage.getItem('time1')));
		data[1] = JSON.parse(String(localStorage.getItem('time2')));
		data[2] = JSON.parse(String(localStorage.getItem('time3')));
		data[3] = JSON.parse(String(localStorage.getItem('time4')));
		data[4] = JSON.parse(String(localStorage.getItem('time5')));
		console.log('Did data load? : ', data);
		var elems = [];
		elems[0] = document.getElementById('temp1');
		elems[1] = document.getElementById('temp2');
		elems[2] = document.getElementById('temp3');
		elems[3] = document.getElementById('temp4');
		elems[4] = document.getElementById('temp5');
		var k, f, c, time, weatherStatus;
		var weatherIcon = [];

		// populate the weather card
		for (var i = 0; i < 5; i++) {
			var el = elems[i];
			if (el != null) {
				time = parseInt(
					data[i].dt_txt.substring(data[i].dt_txt.indexOf(' ') + 1, data[i].dt_txt.indexOf(' ') + 3)
				);

				weatherStatus = data[i].weather[0].main;
				weatherIcon[i] = weatherStatus;

				k = parseFloat(data[i].main.temp);
				f = ((k - 273.15) * 9) / 5 + 32;
				c = k - 273.15;
				el.innerHTML = `
				<b>${fixTime(time)}</b>
				<br />
				${f.toFixed(1)}&deg;F
				<br />
				${c.toFixed(1)}&deg;C
				`;
			}
		}
		if (weatherIcon) {
			console.log(weatherIcon + ' before if(weathericon)');
			this.injectIcon(weatherIcon);
		}
	}

	injectIcon(weatherIcon: string[]) {
		// eslint-disable-next-line
		let icons: HTMLCollectionOf<Element> = document.getElementsByClassName('iconz');

		for (var i in weatherIcon) {
			switch (weatherIcon[i]) {
				case 'Clouds':
					icons[i].innerHTML = Icons.CLOUD;
			}
		}
	}

	ionViewWillLeave() {
		console.log('ionViewWillLeave event fired');
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter event fired');
	}

	ionViewDidLeave() {
		console.log('ionViewDidLeave event fired');
	}

	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonGrid>
							<IonRow>
								<IonCol>
									<IonTitle>Weather</IonTitle>
								</IonCol>
								<IonCol>
									<IonTitle className="right">Minneapolis</IonTitle>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonCard className="welcome-card">
						<IonCardHeader>
							<IonCardTitle>Hourly Temperature</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							<IonGrid>
								<IonRow class="temps">
									<IonCol>
										<div className="iconz"></div>
										<div id="temp1"></div>
									</IonCol>
									<IonCol>
										<div className="iconz"></div>
										<div id="temp2"></div>
									</IonCol>
									<IonCol>
										<div className="iconz"></div>
										<div id="temp3"></div>
									</IonCol>
									<IonCol>
										<div className="iconz"></div>
										<div id="temp4"></div>
									</IonCol>
									<IonCol>
										<div className="iconz"></div>
										<div id="temp5"></div>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCardContent>
					</IonCard>
				</IonContent>
			</IonPage>
		);
	}
}

export default withIonLifeCycle(Weather);

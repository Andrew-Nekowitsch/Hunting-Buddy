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
import { rainy, cloudy, cloudyNight } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

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

		// populate the weather card
		for (var i = 0; i < 5; i++) {
			var el = elems[i];
			if (el != null) {
				var time = data[i].dt_txt.substring(data[i].dt_txt.indexOf(' ')+1);;
				var k = data[i].main.temp;
				var f = (k - 273.15) * 9 / 5 + 32;
				var c = k - 273.15;
				el.innerHTML = `
				<b>${time}</b>
				<br />
				${f.toFixed(1)}&deg;F
				<br />
				${c.toFixed(1)}&deg;C
				`;
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
							<IonCardTitle>Hourly Temperature<br></br></IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							<IonGrid>
								<IonRow class="temps">
									<IonCol>
										<IonIcon id="temp1icon" icon={rainy} />
										<div id="temp1"></div>
									</IonCol>
									<IonCol>
										<IonIcon id="temp2icon" icon={rainy} />
										<div id="temp2"></div>
									</IonCol>
									<IonCol>
										<IonIcon id="temp3icon" icon={cloudy} />
										<div id="temp3"></div>
									</IonCol>
									<IonCol>
										<IonIcon id="temp4icon" icon={cloudyNight} />
										<div id="temp4"></div>
									</IonCol>
									<IonCol>
										<IonIcon id="temp5icon" icon={cloudyNight} />
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

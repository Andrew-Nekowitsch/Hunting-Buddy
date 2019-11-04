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
	ionViewWillEnter() {
		console.log('ionViewWillEnter event fired');
		let data = [];
		data[0] = JSON.parse(String(localStorage.getItem('time1')));
		data[1] = JSON.parse(String(localStorage.getItem('time2')));
		data[2] = JSON.parse(String(localStorage.getItem('time3')));
		data[3] = JSON.parse(String(localStorage.getItem('time4')));
		data[4] = JSON.parse(String(localStorage.getItem('time5')));
		console.log('Did data load? : ', data);
		var elem1 = document.getElementById('temp1');
		if (elem1 != null) {
			var f = ((data[0].main.temp - 273.15) * 9) / 5 + 32;
			var c = data[0].main.temp - 273.15;
			var time = '5pm';
			elem1.innerHTML = `
			<b>${time}</b>
			<br />
			${f.toFixed(1)}&deg;F
			<br />
			${c.toFixed(1)}&deg;C`;
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
							<IonCardTitle>Hourly Tempurature</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							<IonGrid>
								<IonRow class="temps">
									<IonCol>
										<IonIcon id="temp1icon" icon={rainy} />
										<div id="temp1"></div>
									</IonCol>
									<IonCol id="temp2">
										<IonIcon id="temp2icon" icon={rainy} />
										<div>
											<b>6pm</b>
											<br></br>
											52&deg;F/11&deg;C
										</div>
									</IonCol>
									<IonCol id="temp3">
										<IonIcon id="temp3icon" icon={cloudy} />
										<div>
											<b>7pm</b>
											<br></br>
											45&deg;F/7&deg;C
										</div>
									</IonCol>
									<IonCol id="temp4">
										<IonIcon id="temp4icon" icon={cloudyNight} />
										<div>
											<b>8pm</b>
											<br></br>
											42&deg;F/5&deg;C
										</div>
									</IonCol>
									<IonCol id="temp5">
										<IonIcon id="temp5icon" icon={cloudyNight} />
										<div>
											<b>9pm</b>
											<br></br>
											39&deg;F/4&deg;C
										</div>
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

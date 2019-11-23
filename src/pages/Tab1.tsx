/*
---------------TAB1---------------
Weather implemented by: Andrew N
Time implemented by: Andrew N
Time updated by: James
*/

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
	withIonLifeCycle,
} from '@ionic/react';

import React from 'react';
import './Tab1.css';

const Icons = {
	CLOUD: `<?xml version="1.0" ?><svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Overcast" stroke="none" stroke-width="1"><g stroke="#979797" stroke-width="2" transform="translate(3.000000, 6.000000)"><g id="Group-3" transform="translate(2.000000, 0.000000)"><path d="M8,7 C8,4.790861 6.209139,3 4,3 C1.790861,3 0,4.790861 0,7 C0,7.74909293 0.205914623,8.45009192 0.564228738,9.04948184" id="Oval-3"/><path d="M18.0816219,3.5314731 C16.8758322,1.42182409 14.6039585,0 12,0 C9.53738965,0 7.37179014,1.27165453 6.1240426,3.19412246" id="Oval-3" stroke-linecap="round"/></g><g id="Group-2" transform="translate(0.000000, 3.000000)"><path d="M10.1441195,5.03385852 C9.29274212,4.62749472 8.33960485,4.4 7.33333333,4.4 C3.72507297,4.4 0.8,7.32507297 0.8,10.9333333 C0.8,14.5415937 3.72507297,17.4666667 7.33333333,17.4666667 C9.11597284,17.4666667 10.7318603,16.7527163 11.9106557,15.5951556" id="Oval"/><path d="M10.4628116,13.7934799 C11.974939,16.0108696 14.5212905,17.4666667 17.4076616,17.4666667 C22.0468535,17.4666667 25.8076616,13.7058586 25.8076616,9.06666667 C25.8076616,4.42747477 22.0468535,0.666666667 17.4076616,0.666666667 C13.3847405,0.666666667 10.0223343,3.49466753 9.2,7.27111244" id="Oval" stroke-linecap="round"/></g></g></g></svg>`,
	CLEAR: `<?xml version="1.0" ?><svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Sunny" stroke="none" stroke-width="1"><g stroke="#979797" stroke-width="2" transform="translate(2.000000, 2.000000)"><circle cx="14" cy="14" id="Oval-4" r="8"/><path d="M14,0 L14,3 M23.8994949,4.10050506 L21.7781746,6.22182541 M28,14 L25,14 M23.8994949,23.8994949 L21.7781746,21.7781746 M14,28 L14,25 M4.10050506,23.8994949 L6.22182541,21.7781746 M3.83475851e-17,14 L3,14 M4.10050506,4.10050506 L6.22182541,6.22182541" id="Path-7" stroke-linecap="round"/></g></g></svg>`,
	RAIN: `<?xml version="1.0" ?><svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Moderate-Rain" stroke="none" stroke-width="1"><g id="Moderate-rain" stroke="#979797" stroke-width="2" transform="translate(3.000000, 2.000000)"><g id="Group-2"><path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185 6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009 3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179 11.4633749,15.4024092" id="Oval"/><path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333 17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667 C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867 8.66666667,6.81411072" id="Oval" stroke-linecap="round"/></g><g id="Group-3" stroke-linecap="round" transform="translate(13.409396, 22.893086) rotate(25.000000) translate(-13.409396, -22.893086) translate(10.409396, 18.893086)"><path d="M5,0 L5,2" id="Path-5"/><path d="M5,5 L5,7" id="Path-6"/><path d="M1,1 L1,3" id="Path-5"/><path d="M1,6 L1,8" id="Path-6"/></g><g id="Group-3" stroke-linecap="round" transform="translate(4.409396, 22.893086) rotate(25.000000) translate(-4.409396, -22.893086) translate(1.409396, 18.893086)"><path d="M5,0 L5,2" id="Path-5"/><path d="M5,5 L5,7" id="Path-6"/><path d="M1,1 L1,3" id="Path-5"/><path d="M1,6 L1,8" id="Path-6"/></g></g></g></svg>`,
	SNOW: `<?xml version="1.0" ?><svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Snow" stroke="none" stroke-width="1"><g id="Group" stroke="#979797" transform="translate(3.000000, 3.000000)"><g><path d="M9.28571429,0.928571429 L13,3.71428571 L16.7142857,0.928571429 M25.0714286,9.28571429 L22.2857143,13 L25.0714286,16.7142857 M16.7142857,25.0714286 L13,22.2857143 L9.28571429,25.0714286 M0.928571429,16.7142857 L3.71428571,13 L0.928571429,9.28571429" id="Path-12" stroke-linecap="round" stroke-width="2"/><circle cx="13" cy="13" fill="#979797" id="Oval-9" r="1.85714286"/><path d="M13,0 L13,26" id="Path-13" stroke-linecap="round" stroke-width="2"/><path d="M0,13 L26,13" id="Path-14" stroke-linecap="round" stroke-width="2"/><path d="M3.71428571,3.71428571 L22.2857143,22.2857143" id="Path-16" stroke-linecap="round" stroke-width="2"/><path d="M3.71428571,22.2857143 L22.2857143,3.71428571" id="Path-17" stroke-linecap="round" stroke-width="2"/></g></g></g></svg>`,
	STORM: `<?xml version="1.0" ?><svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Thunder" stroke="none" stroke-width="1"><g transform="translate(3.000000, 2.000000)"><path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185 6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009 3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179 11.4633749,15.4024092" id="Oval" stroke="#979797" stroke-width="2"/><path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333 17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667 C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867 8.66666667,6.81411072" id="Oval" stroke="#979797" stroke-linecap="round" stroke-width="2"/><polygon fill="#979797" id="Rectangle-5" points="10 18 14 18 12 22 15 22 9 30 10 25 7 25"/></g></g></svg>`,
};

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
		console.log(data);
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
					break;
				case 'Clear':
					icons[i].innerHTML = Icons.CLEAR;
					break;
				case 'Snow':
					icons[i].innerHTML = Icons.SNOW;
					break;
				//eslint-disable-next-line
				case 'Drizzle':
				case 'Rain':
					icons[i].innerHTML = Icons.RAIN;
					break;
				case 'Thunderstorm':
					icons[i].innerHTML = Icons.STORM;
					break;
				default:
					icons[i].innerHTML = Icons.SNOW;
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

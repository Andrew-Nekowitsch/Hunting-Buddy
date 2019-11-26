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
	withIonLifeCycle
} from "@ionic/react";

import React from "react";
import "./Tab1.css";

const Icons = {
	CLOUD: `<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Overcast" stroke="none" stroke-width="1"><g stroke="#979797" stroke-width="2" transform="translate(3.000000, 6.000000)"><g id="Group-3" transform="translate(2.000000, 0.000000)"><path d="M8,7 C8,4.790861 6.209139,3 4,3 C1.790861,3 0,4.790861 0,7 C0,7.74909293 0.205914623,8.45009192 0.564228738,9.04948184" id="Oval-3"/><path d="M18.0816219,3.5314731 C16.8758322,1.42182409 14.6039585,0 12,0 C9.53738965,0 7.37179014,1.27165453 6.1240426,3.19412246" id="Oval-3" stroke-linecap="round"/></g><g id="Group-2" transform="translate(0.000000, 3.000000)"><path d="M10.1441195,5.03385852 C9.29274212,4.62749472 8.33960485,4.4 7.33333333,4.4 C3.72507297,4.4 0.8,7.32507297 0.8,10.9333333 C0.8,14.5415937 3.72507297,17.4666667 7.33333333,17.4666667 C9.11597284,17.4666667 10.7318603,16.7527163 11.9106557,15.5951556" id="Oval"/><path d="M10.4628116,13.7934799 C11.974939,16.0108696 14.5212905,17.4666667 17.4076616,17.4666667 C22.0468535,17.4666667 25.8076616,13.7058586 25.8076616,9.06666667 C25.8076616,4.42747477 22.0468535,0.666666667 17.4076616,0.666666667 C13.3847405,0.666666667 10.0223343,3.49466753 9.2,7.27111244" id="Oval" stroke-linecap="round"/></g></g></g></svg>`,
	CLEAR: `<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Sunny" stroke="none" stroke-width="1"><g stroke="#979797" stroke-width="2" transform="translate(2.000000, 2.000000)"><circle cx="14" cy="14" id="Oval-4" r="8"/><path d="M14,0 L14,3 M23.8994949,4.10050506 L21.7781746,6.22182541 M28,14 L25,14 M23.8994949,23.8994949 L21.7781746,21.7781746 M14,28 L14,25 M4.10050506,23.8994949 L6.22182541,21.7781746 M3.83475851e-17,14 L3,14 M4.10050506,4.10050506 L6.22182541,6.22182541" id="Path-7" stroke-linecap="round"/></g></g></svg>`,
	RAIN: `<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Moderate-Rain" stroke="none" stroke-width="1"><g id="Moderate-rain" stroke="#979797" stroke-width="2" transform="translate(3.000000, 2.000000)"><g id="Group-2"><path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185 6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009 3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179 11.4633749,15.4024092" id="Oval"/><path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333 17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667 C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867 8.66666667,6.81411072" id="Oval" stroke-linecap="round"/></g><g id="Group-3" stroke-linecap="round" transform="translate(13.409396, 22.893086) rotate(25.000000) translate(-13.409396, -22.893086) translate(10.409396, 18.893086)"><path d="M5,0 L5,2" id="Path-5"/><path d="M5,5 L5,7" id="Path-6"/><path d="M1,1 L1,3" id="Path-5"/><path d="M1,6 L1,8" id="Path-6"/></g><g id="Group-3" stroke-linecap="round" transform="translate(4.409396, 22.893086) rotate(25.000000) translate(-4.409396, -22.893086) translate(1.409396, 18.893086)"><path d="M5,0 L5,2" id="Path-5"/><path d="M5,5 L5,7" id="Path-6"/><path d="M1,1 L1,3" id="Path-5"/><path d="M1,6 L1,8" id="Path-6"/></g></g></g></svg>`,
	SNOW: `<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Snow" stroke="none" stroke-width="1"><g id="Group" stroke="#979797" transform="translate(3.000000, 3.000000)"><g><path d="M9.28571429,0.928571429 L13,3.71428571 L16.7142857,0.928571429 M25.0714286,9.28571429 L22.2857143,13 L25.0714286,16.7142857 M16.7142857,25.0714286 L13,22.2857143 L9.28571429,25.0714286 M0.928571429,16.7142857 L3.71428571,13 L0.928571429,9.28571429" id="Path-12" stroke-linecap="round" stroke-width="2"/><circle cx="13" cy="13" fill="#979797" id="Oval-9" r="1.85714286"/><path d="M13,0 L13,26" id="Path-13" stroke-linecap="round" stroke-width="2"/><path d="M0,13 L26,13" id="Path-14" stroke-linecap="round" stroke-width="2"/><path d="M3.71428571,3.71428571 L22.2857143,22.2857143" id="Path-16" stroke-linecap="round" stroke-width="2"/><path d="M3.71428571,22.2857143 L22.2857143,3.71428571" id="Path-17" stroke-linecap="round" stroke-width="2"/></g></g></g></svg>`,
	STORM: `<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Thunder" stroke="none" stroke-width="1"><g transform="translate(3.000000, 2.000000)"><path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185 6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009 3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179 11.4633749,15.4024092" id="Oval" stroke="#979797" stroke-width="2"/><path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333 17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667 C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867 8.66666667,6.81411072" id="Oval" stroke="#979797" stroke-linecap="round" stroke-width="2"/><polygon fill="#979797" id="Rectangle-5" points="10 18 14 18 12 22 15 22 9 30 10 25 7 25"/></g></g></svg>`,
	MOON: `
	<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 383.189 383.189" style="enable-background:new 0 0 383.189 383.189;" xml:space="preserve">
	<g>
		<g>
			<path d="M226.384,123.658c-1.74-1.39-3.939-2.075-6.16-1.92h-33.6l31.6-35.28l2.96-3.28l1.52-1.92
				c0.528-0.742,0.958-1.549,1.28-2.4c0.363-0.917,0.552-1.894,0.56-2.88c0.223-2.333-0.933-4.583-2.96-5.76
				c-2.629-1.206-5.512-1.756-8.4-1.6h-39.28c-2.096-0.143-4.172,0.483-5.84,1.76c-1.378,1.173-2.145,2.911-2.08,4.72
				c0,2.72,0.907,4.373,2.72,4.96c2.6,0.739,5.299,1.063,8,0.96h25.6c-1.067,1.493-2.453,3.253-4.16,5.28l-6.56,7.36l-8.88,9.6
				l-10.32,11.44c-3.573,4-5.92,6.667-7.04,8c-2.54,3.085-2.224,7.618,0.72,10.32c2.11,1.59,4.726,2.357,7.36,2.16h46.72
				c2.235,0.175,4.457-0.48,6.24-1.84c1.359-1.187,2.121-2.916,2.08-4.72C228.533,126.739,227.772,124.925,226.384,123.658z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M297.184,164.538c-1.4-1.12-3.173-1.663-4.96-1.52h-26.88l25.2-28.16l2.4-2.64l1.52-1.84
				c0.429-0.592,0.778-1.237,1.04-1.92c0.303-0.737,0.466-1.523,0.48-2.32c0.201-1.867-0.706-3.68-2.32-4.64
				c-2.103-0.966-4.409-1.406-6.72-1.28h-31.68c-1.669-0.093-3.317,0.418-4.64,1.44c-1.106,0.93-1.725,2.316-1.68,3.76
				c0,2.133,0.72,3.467,2.16,4c2.082,0.577,4.242,0.82,6.4,0.72h20.48c-0.8,1.2-1.92,2.56-3.36,4.24l-5.28,5.92l-6.88,8l-8,9.12
				c-2.88,3.2-4.773,5.387-5.68,6.56c-1.885,2.418-1.643,5.868,0.56,8c1.679,1.249,3.754,1.846,5.84,1.68h37.12
				c1.774,0.142,3.538-0.37,4.96-1.44c1.058-0.959,1.642-2.333,1.6-3.76C298.901,166.969,298.288,165.538,297.184,164.538z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M381.104,119.578c-1.74-1.39-3.939-2.075-6.16-1.92h-33.84l31.6-35.28l2.96-3.28l1.92-2.32
				c0.528-0.742,0.958-1.549,1.28-2.4c0.363-0.917,0.552-1.894,0.56-2.88c0.223-2.333-0.933-4.583-2.96-5.76
				c-2.629-1.206-5.512-1.755-8.4-1.6h-39.68c-2.096-0.143-4.172,0.483-5.84,1.76c-1.378,1.173-2.145,2.911-2.08,4.72
				c0,2.72,0.907,4.373,2.72,4.96c2.6,0.739,5.299,1.063,8,0.96h25.6c-1.067,1.493-2.453,3.253-4.16,5.28l-6.64,7.52l-8.64,9.6
				l-10.32,11.44c-3.573,4-5.92,6.667-7.04,8c-2.54,3.085-2.224,7.618,0.72,10.32c2.11,1.59,4.726,2.357,7.36,2.16h46.64
				c2.258,0.284,4.541-0.287,6.4-1.6c1.359-1.187,2.121-2.916,2.08-4.72C383.253,122.659,382.492,120.845,381.104,119.578z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M353.504,254.298c-2.279-2.359-5.767-3.089-8.8-1.84c-86.708,35.894-186.097-5.298-221.992-92.007
				c-18.227-44.031-17.127-93.693,3.032-136.873c1.889-3.994,0.182-8.763-3.812-10.652c-2.05-0.97-4.416-1.023-6.508-0.148
				C20.363,51.827-25.044,160.545,14.005,255.606s147.767,140.468,242.829,101.419c43.356-17.81,78.394-51.325,98.111-93.848
				C356.332,260.203,355.761,256.682,353.504,254.298z M186.224,355.098c-93.977-0.016-170.147-76.212-170.131-170.189
				c0.01-61.708,33.428-118.574,87.331-148.611c-6.383,18.946-9.626,38.808-9.6,58.8c0.005,102.813,83.356,186.156,186.169,186.151
				c17.231-0.001,34.378-2.394,50.951-7.111C299.919,324.303,245.207,354.91,186.224,355.098z"/>
		</g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	</svg>`
};

function fixTime(time: number) {
	var timeParam = "am";
	time -= 6;
	if (time < 0) {
		time += 24;
	}
	if (time === 0) {
		time = 12;
	} else if (time > 12) {
		time -= 12;
		timeParam = "pm";
	} else if (time === 12) {
		timeParam = "pm";
	}
	return `${time}${timeParam}`;
}

class Weather extends React.Component {
	//called as you start loading the page
	ionViewWillEnter() {
		//console.log("ionViewWillEnter event fired");
		let data = [];
		var elems = [];
		var k, f, c, time, weatherStatus;
		var weatherIcon = [];
		for (let i = 0; i < 5; i++) {
			data[i] = JSON.parse(
				String(localStorage.getItem("time" + (i + 1)))
			);
			elems[i] = document.getElementById("temp" + (i + 1));

			var el = document.getElementById("temp" + (i + 1));
			if (el != null) {
				time = parseInt(
					data[i].dt_txt.substring(
						data[i].dt_txt.indexOf(" ") + 1,
						data[i].dt_txt.indexOf(" ") + 3
					)
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
		console.log(data);
		if (weatherIcon) {
			this.injectWeatherIcon(weatherIcon);
		}
		let shitfuck = document.getElementById("moon-container");
		if (shitfuck) shitfuck.innerHTML = Icons.MOON;
	}

	injectWeatherIcon(weatherIcon: string[]) {
		let icons: HTMLCollectionOf<Element> = document.getElementsByClassName(
			"iconz"
		);
		for (var i in weatherIcon) {
			switch (weatherIcon[i]) {
				case "Clouds":
					icons[i].innerHTML = Icons.CLOUD;
					break;
				case "Clear":
					icons[i].innerHTML = Icons.CLEAR;
					break;
				case "Snow":
					icons[i].innerHTML = Icons.SNOW;
					break;
				case "Drizzle":
				case "Rain":
					icons[i].innerHTML = Icons.RAIN;
					break;
				case "Thunderstorm":
					icons[i].innerHTML = Icons.STORM;
					break;
				default:
					icons[i].innerHTML = Icons.SNOW;
			}
		}
	}
	/*
	ionViewWillLeave() {
		console.log("ionViewWillLeave event fired");
	}

	ionViewDidEnter() {
		console.log("ionViewDidEnter event fired");
	}

	ionViewDidLeave() {
		console.log("ionViewDidLeave event fired");
	}
*/
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
									<IonTitle className="right">
										{localStorage.getItem("city")}
									</IonTitle>
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
					<IonCard className="welcome-card">
						<IonCardHeader>
							<IonCardTitle>Moon Phases</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							<IonGrid>
								<IonRow class="temps">
									<IonCol>
										<div id="moon-container"></div>
									</IonCol>
									<IonCol>
										<div>
											<b>Next Full Moon:</b>
										</div>
										<div>Dec 12</div>
										<br />
										<div>
											<b>Next New Moon:</b>
										</div>
										<div>Dec 26</div>
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

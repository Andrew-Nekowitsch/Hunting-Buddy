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
	withIonLifeCycle
} from "@ionic/react";
import { rainy, cloudy, cloudyNight, sunny } from "ionicons/icons";
import React from "react";
import "./Tab1.css";
function grabIcon(weatherStatus: string) {
	switch (weatherStatus) {
		case "Clouds":
			return "cloudy";
		case "Clear":
			return "sunny";
	}
	return "string";
}

function fixTime(time: number) {
	var timeParam = "am";
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
	buttonIcon1: string = "asdf";
	buttonIcon2: string = "asdf";
	buttonIcon3: string = "asdf";
	buttonIcon4: string = "asdf";
	buttonIcon5: string = "asdf";
	//, buttonIcon2, buttonIcon3, buttonIcon4, buttonIcon5;

	//called as you start loading the page
	ionViewWillEnter() {
		console.log("ionViewWillEnter event fired");
		let data = [];
		data[0] = JSON.parse(String(localStorage.getItem("time1")));
		data[1] = JSON.parse(String(localStorage.getItem("time2")));
		data[2] = JSON.parse(String(localStorage.getItem("time3")));
		data[3] = JSON.parse(String(localStorage.getItem("time4")));
		data[4] = JSON.parse(String(localStorage.getItem("time5")));
		console.log("Did data load? : ", data);
		var elems = [];
		elems[0] = document.getElementById("temp1");
		elems[1] = document.getElementById("temp2");
		elems[2] = document.getElementById("temp3");
		elems[3] = document.getElementById("temp4");
		elems[4] = document.getElementById("temp5");
		var k, f, c, time, weatherStatus;
		var weatherIcon = [];

		// populate the weather card
		for (var i = 0; i < 5; i++) {
			var el = elems[i];
			if (el != null) {
				time = parseInt(
					data[i].dt_txt.substring(
						data[i].dt_txt.indexOf(" ") + 1,
						data[i].dt_txt.indexOf(" ") + 3
					)
				);

				weatherStatus = data[i].weather[0].main;
				weatherIcon[i] = grabIcon(weatherStatus);
				console.log(weatherStatus);

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
			//this.buttonIcon1 = weatherIcon[0];
			console.log(this.buttonIcon1 + " is shitty");
			console.log(weatherIcon);
		}
	}

	ionViewWillLeave() {
		console.log("ionViewWillLeave event fired");
	}

	ionViewDidEnter() {
		console.log("ionViewDidEnter event fired");
	}

	ionViewDidLeave() {
		console.log("ionViewDidLeave event fired");
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
									<IonTitle className="right">
										Minneapolis
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
										<IonIcon
											icon={this.buttonIcon1}
											id="temp1icon"
										/>
										<div id="temp1"></div>
									</IonCol>
									<IonCol>
										<IonIcon
											id="temp2icon"
											icon={this.buttonIcon2}
										/>
										<div id="temp2"></div>
									</IonCol>
									<IonCol>
										<IonIcon
											id="temp3icon"
											icon={this.buttonIcon3}
										/>
										<div id="temp3"></div>
									</IonCol>
									<IonCol>
										<IonIcon
											id="temp4icon"
											icon={this.buttonIcon4}
										/>
										<div id="temp4"></div>
									</IonCol>
									<IonCol>
										<IonIcon
											id="temp5icon"
											icon={this.buttonIcon5}
										/>
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
export class icons {
	buttonIcon1: string = "cloudy";
}

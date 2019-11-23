import {
	IonHeader,
	IonToolbar,
	IonPage,
	IonTitle,
	withIonLifeCycle,
	IonContent
} from "@ionic/react";
import React from "react";
import { loadModules } from "esri-loader";
import "./Tab2.css";

class Map extends React.Component {
	mapLoaded: boolean = false;
	ionViewWillEnter() {
		if (!this.mapLoaded) {
			this.mapLoaded = true;
			loadModules(["esri/views/MapView", "esri/WebMap"])
				.then(([MapView, ArcGisMap]) => {
					var webmap = new ArcGisMap({
						basemap: "topo-vector"
					});
					// eslint-disable-next-line
					var view = new MapView({
						map: webmap,
						container: "viewDiv",
						center: [-91, 46],
						zoom: 7
					});
				})
				.catch(err => {
					// handle any errors
					console.error(err);
				});
		}
	}
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Topography</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<div className="topo-map" id="viewDiv"></div>
				</IonContent>
			</IonPage>
		);
	}
}

export default withIonLifeCycle(Map);

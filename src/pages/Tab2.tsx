import {
	IonHeader,
	IonToolbar,
	IonPage,
	IonTitle,
	IonContent
} from "@ionic/react";
import React from "react";
import { loadModules } from "esri-loader";
import "./Tab2.css";

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

const Tab2: React.FC = () => {
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
};

export default Tab2;

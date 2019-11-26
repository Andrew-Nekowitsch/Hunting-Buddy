import {
	IonHeader,
	IonToolbar,
	IonPage,
	IonTitle,
	IonContent,
	IonButton
} from "@ionic/react";
import React from "react";
import { loadModules } from "esri-loader";
import "./Tab2.css";

loadModules(["esri/views/MapView", "esri/WebMap", "esri/widgets/Track", "esri/widgets/Locate", "esri/Graphic"])
	.then(([MapView, ArcGisMap, Track, Graphic]) => {
		var webmap = new ArcGisMap({
			basemap: "topo-vector"
		});
		// eslint-disable-next-line
		var view = new MapView({
			map: webmap,
			container: "viewDiv",
			center: [-91, 46],
			zoom: 7,
			ui: {
				components: ["defaultUI"]
			}
		});

		var track = new Track({
			view: view,
			container: "trackButton",
			graphic: new Graphic({
			  symbol: {
				type: "simple-marker",
				size: "12px",
				color: "green",
				outline: {
				  color: "#efefef",
				  width: "1.5px"
				}
			  }
			}),
			useHeadingEnabled: false  // Don't change orientation of the map
		  });

		view.ui.add(track, "top-left");
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
				<IonButton id="trackButton" shape="round"></IonButton>
				<div className="topo-map" id="viewDiv"></div>
			</IonContent>
		</IonPage>
	);
};

export default Tab2;

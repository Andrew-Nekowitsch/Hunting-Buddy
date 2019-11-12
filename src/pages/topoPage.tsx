import React from 'react';
//import { Map } from '@esri/react-arcgis';
//import * as ReactDOM from 'react-dom';
//import MapView from '@esri/react-arcgis';
import MapView from 'esri/views/MapView';
import Map from 'esri/Map';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';

const map = new Map({
    basemap: "topo-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});
 
/*ReactDOM.render(
  <Map loaderOptions={{ css: true }}/>,
  document.getElementById('viewDiv')
);*/

const topoPage: React.FC = () => {
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Topography</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent />
            <div id="viewDiv"></div>
      </IonPage>
    );
};

export default topoPage;
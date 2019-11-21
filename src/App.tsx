import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { rainy, map, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';
import axios from 'axios';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends Component {
	CITY = 'Minneapolis';
	COUNTRY = 'US';
	API_KEY = '417ccbf567588559229a4124b6a8b3ed';
	API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.CITY},${this.COUNTRY}&appid=${this.API_KEY}`;
	// api.openweathermap.org/data/2.5/weather?q=Minneapolis,US&appid=417ccbf567588559229a4124b6a8b3ed

	componentDidMount() {
		axios
			.get(this.API_URL)
			.then(response => response.data)
			.then(data => {
				localStorage.setItem('time1', JSON.stringify(data.list[0]));
				localStorage.setItem('time2', JSON.stringify(data.list[1]));
				localStorage.setItem('time3', JSON.stringify(data.list[2]));
				localStorage.setItem('time4', JSON.stringify(data.list[3]));
				localStorage.setItem('time5', JSON.stringify(data.list[4]));
				localStorage.setItem('city', this.CITY);
				localStorage.setItem('country', this.COUNTRY);
			});
	}
	render() {
		return (
			<IonApp>
				<IonReactRouter>
					<IonTabs>
						<IonRouterOutlet>
							<Route path="/tab1" component={Tab1} exact={true} />
							<Route path="/tab2" component={Tab2} exact={true} />
							<Route path="/tab2/details" component={Details} />
							<Route path="/tab3" component={Tab3} />
							<Route exact path="/" render={() => <Redirect to="/tab1" />} />
						</IonRouterOutlet>
						<IonTabBar slot="bottom">
							<IonTabButton tab="tab1" href="/tab1">
								<IonIcon icon={rainy} />
								<IonLabel>Weather</IonLabel>
							</IonTabButton>
							<IonTabButton tab="tab2" href="/tab2">
								<IonIcon icon={map} />
								<IonLabel>Maps</IonLabel>
							</IonTabButton>
							<IonTabButton tab="tab3" href="/tab3">
								<IonIcon icon={person} />
								<IonLabel>User Data</IonLabel>
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				</IonReactRouter>
			</IonApp>
		);
	}
}

export default App;

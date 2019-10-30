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
  IonIcon
} from '@ionic/react';
import { rainy, cloudy, cloudyNight } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
          <IonHeader>Minneapolis</IonHeader>
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
                  <IonIcon icon={rainy} />
                  <div>
                    <b>5pm</b><br></br>
                    56&deg;F/13&deg;C
                  </div>
                </IonCol>
                <IonCol>
                  <IonIcon icon={rainy} />
                  <div>
                    <b>6pm</b><br></br>
                    52&deg;F/11&deg;C
                  </div>
                </IonCol>
                <IonCol>
                  <IonIcon icon={cloudy} />
                  <div>
                    <b>7pm</b><br></br>
                    45&deg;F/7&deg;C
                  </div>
                </IonCol>
                <IonCol>
                  <IonIcon icon={cloudyNight} />
                  <div>
                    <b>8pm</b><br></br>
                    42&deg;F/5&deg;C
                  </div>
                </IonCol>
                <IonCol>
                  <IonIcon icon={cloudyNight} />
                  <div>
                    <b>9pm</b><br></br>
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
};

export default Tab1;

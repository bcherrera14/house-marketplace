import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAo4RHPY8e105zG45FCDQM7yXSrdoS0tYI',
	authDomain: 'house-marketplace-app-64f0e.firebaseapp.com',
	projectId: 'house-marketplace-app-64f0e',
	storageBucket: 'house-marketplace-app-64f0e.appspot.com',
	messagingSenderId: '69978038122',
	appId: '1:69978038122:web:654d710619839d5ca8cf13'
};

export const db = getFirestore();

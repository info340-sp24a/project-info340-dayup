import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  databaseURL: "your_database_url",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

var app_firebase ={};
(function(){
    
    const firebaseConfig = {
        apiKey: "AIzaSyDBwjd1QneT3td9KYO1oN29epgjm1QtVvM",
        authDomain: "rent-project-2b3d3.firebaseapp.com",
        projectId: "rent-project-2b3d3",
        storageBucket: "rent-project-2b3d3.appspot.com",
        messagingSenderId: "388587752668",
        appId: "1:388587752668:web:506c49e02ca848f53bb819",
        measurementId: "G-N2EKVPSSLC"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      app_firebase= Firebase;
    
})

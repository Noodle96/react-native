1.- Create App
    npx create-expo-app@latest
    cd nameProject
    npm start
2.- Clerk
    npm install @clerk/clerk-expo
3.- React Navigation
    npm install @react-navigation/native
    npx expo install react-native-screens react-native-safe-area-context
    Navigators/stack
    npm install @react-navigation/stack
    npx expo install react-native-gesture-handler
    Navigators/BottomTabs
    npm install @react-navigation/bottom-tabs
4.- Google Fonts
    npx expo install expo-font
5.- Config Strapi backend
    npx create-strapi-app@latest library-app-strapi
    yarn add @strapi/provider-upload-cloudinary
6.- Axios-http
    npm install axios
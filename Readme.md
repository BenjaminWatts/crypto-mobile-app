# Coin App
This app was created using the Tabs starter from Expo-router (`npx create-expo-app@latest --template tabs@49`).

## Navigation

Expo-router handles navigation for the app. The screens outlined in the requirements have the following routes:

1. Home: `/`
2. Favourites `/favourites`
3. Information `/coin/{id}`, where `id` is a coin id from the Coin-Gecko Api.


## Testing

Tests can either be run:

1. `yarn test` - on a unit basis
2. `yarn e2e` - on an end to end basis
3. `yarn maestro` - TBC


## Todo

1. Improve error handling esp on Information screen.  Ensure loading occurs within cards.
2. Build for appstore connect and apk
3. Add Infinite scroll to market list
4. Add how to run the app to readme
5. Make tab bar RNEU
6. Add Maestro tests
7. Add i18n?
8. Create screenshots/videos and add to github repo
9. Test on android
10. Review Rehydration of api data.



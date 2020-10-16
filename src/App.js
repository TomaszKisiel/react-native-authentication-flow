import React from 'react';
import {
      SafeAreaView,
      View,
      Text,
      StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text>SSS</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

export default App;

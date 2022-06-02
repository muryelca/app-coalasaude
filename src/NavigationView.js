import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const styles = {
    container: {
        height: 60,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {},
    buttonTitle: {
        color: '#fff',
        fontSize: 20,
    },
};

const NavigationView = ({
    onBackPress,
    onFowardPress,
    canGoBack,
    canGoFoward,
}) => (
    <View style={styles.container}>
        {canGoBack && <TouchableOpacity style={styles.button} onPress={onBackPress}>
            <Text style={styles.buttonTitle}>Back</Text>
        </TouchableOpacity>}

        {canGoFoward && <TouchableOpacity style={styles.button} onPress={onFowardPress}>
            <Text style={styles.buttonTitle}>Forward</Text>
        </TouchableOpacity>}
    </View>
);

export default NavigationView;

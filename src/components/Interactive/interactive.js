import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

const Interactive = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [colors, setColors] = useState(["white"]);
    const [clickAgain, setClickAgain] = useState(0);

    const chooseRed = () => {
        if (clickAgain != 1) {
            setClickAgain(1);
            let list = colors;
            if (currentIndex < list.length - 1) {
                list.length = currentIndex + 1;
            }
            list.push("red");
            setColors(list)
            setCurrentIndex(list.length - 1);
        }
    }

    const chooseGreen = () => {
        if (clickAgain != 2) {
            setClickAgain(2);
            let list = colors;
            if (currentIndex < list.length - 1) {
                list.length = currentIndex + 1;
            }
            list.push("green");
            setColors(list)
            setCurrentIndex(list.length - 1);
        }
    }

    const chooseBlue = () => {
        if (clickAgain != 3) {
            setClickAgain(3);
            let list = colors;
            if (currentIndex < list.length - 1) {
                list.length = currentIndex + 1;
            }
            list.push("blue");
            setColors(list)
            setCurrentIndex(list.length - 1);
        }
    }

    const undo = () => {
        if (currentIndex > 1)
            setCurrentIndex(currentIndex - 1);
    }

    const redo = () => {
        if (currentIndex < colors.length - 1)
            setCurrentIndex(currentIndex + 1);
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.viewCenterParent}>
                <View style={[styles.viewCenter, { backgroundColor: colors[currentIndex] }]}></View>
            </View>
            <View style={styles.listButton}>
                <TouchableOpacity
                    style={[styles.buttonSize, styles.red]}
                    onPress={chooseRed}
                >
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonSize, styles.green]}
                    onPress={chooseGreen}
                >
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonSize, styles.blue]}
                    onPress={chooseBlue}
                >
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonSize, styles.buttonInteractive]}
                    onPress={undo}
                >
                    <Text>Undo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonSize, styles.buttonInteractive]}
                    onPress={redo}
                >
                    <Text>Redo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Interactive

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listButton: {
        flexDirection: "row",
        position: "absolute",
        left: 0,
        top: 30
    },
    buttonSize: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    red: {
        backgroundColor: "red"
    },
    green: {
        backgroundColor: "green"
    },
    blue: {
        backgroundColor: "blue"
    },
    buttonInteractive: {
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    viewCenterParent: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    viewCenter: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: "black",
    }
})
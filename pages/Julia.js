import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, BackHandler } from "react-native";

export default function Julinha() {
    const data = [
        { id: '1', name: 'Julinha' },
        { id: '2', name: 'Simões' },
        { id: '3', name: 'Neves' },
        { id: '4', name: 'Teste' },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.bloco}>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listaContainer}>
                <ScrollView style={styles.scrollList}>
                    {data.map((entry) => (
                        <View key={entry.id} style={styles.bloco}>
                            <Text style={styles.text}>{entry.name}</Text>
                        </View>
                    ))}
                </ScrollView>

                <FlatList data={data} renderItem={renderItem} keyExtractor={(entry) => entry.id} style={styles.FlatList} />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'Center',
        justifyContent: 'center'
    },
    listaContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    scrollList: {
        marginBottom: 20,
        paddingVertical: 10,
    },
    bloco: {
        backgroundColor: 'pink',
        padding: 14,
        marginVertical: 8,
        borderRadius: 8,
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },

    }

})


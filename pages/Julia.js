import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView } from "react-native";

export default function Julia() {
    const data = [
        { id: '1', name: 'Julinha' },
        { id: '2', name: 'Simões' },
        { id: '3', name: 'Neves' },
        { id: '4', name: 'Teste' },
        { id: '5', name: 'Julinha' },
        { id: '6', name: 'Simões' },
        { id: '7', name: 'Neves' },
        { id: '8', name: 'Teste' },
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
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    name: {
        fontSize: 19,
        fontWeight: '600',
        color: "#333",
    },
    FlatList: {
        width: '100%',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        color: "#333",
    },

})

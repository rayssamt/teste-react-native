import { DatePickerAndroid, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 100, 
        color: '#E91E63',
    },
    estiloText: {
        fontSize: 20,
        color: '#E91E63',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#E91E63',
        color: 'white',
        padding: 5,
    },
    contador: {
        color: '#E91E63',
        fontSize: 70,
        marginTop: 20,
    },
    reset: {
        color: '#E91E63',
        marginTop: 5,
    },
    input: {
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: '#E91E63',
        borderRadius: 15,
        padding: 5,
        paddingHorizontal: 80,
        color: 'pink',
    }
});

export default styles
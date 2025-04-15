import { Touchable, TouchableOpacity } from "react-native";
import { Image } from "react-native-web"

export default function UserCard ({ user, userImage, userInput}) {
    <div className={styles.userCard}> 
        <h3 className={styles.user}> @anajudemattei</h3>
        <div className={styles.userImage}>
        <Image source={{uri: 'https://i.pinimg.com/474x/de/40/3b/de403b9e2ebeb0ed586c92dcd88fe16e.jpg', }} />
        </div>
        <TextInput placeholder="Deixe sua pergunta!" style={styles.userInput}></TextInput>
    </div>
}

const styles = StyleSheet.create ({
    userCard: {
        borderRadius:5,

        
    }
})

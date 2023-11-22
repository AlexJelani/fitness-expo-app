import {StatusBar, View, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light"/>
            <Image className="h-full w-full absolute" source={require("../assets/images/welcome.png")}/>
        </View>
    );
}



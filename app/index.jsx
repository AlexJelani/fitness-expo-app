import {StatusBar, View, Image, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light"/>
            <Image style={{ height: hp(100), width: wp(100) }} source={require('../assets/images/welcome.png')} />
            <LinearGradient colors={['transparent', '#18181b']}
                            style={{width:wp(100), height:hp(70)}}
                            start={{x:0.5, y:0}}
                            end={{x:0.5, y:0.8}}
                            className="flex justify-end pb-12 space-y-8"
            />
            <View className="flex items-center">
                <Text className="text-white font-bold tracking-wide" style={{fontSize:hp(5)}}>
                    Best <Text className="text-rose-500">Workouts</Text>
                </Text>
                <Text className="text-white font-bold tracking-wide" style={{fontSize:hp(5)}}>
                    For you
                </Text>
            </View>
        </View>
    );
}



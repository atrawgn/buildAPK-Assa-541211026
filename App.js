import react from 'react';
import
{
  Text,
  View,
  Image,
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Bjir = 'https://www.linkedin.com/in/assa-eka-putra-wiguna-3a9943262/'
const retow = 'https://www.figma.com/file/JITjQMJSaN8rtJt6fNUST7/ReTow-App?type=design&node-id=0-1&mode=design&t=xOGWqdkctHiP2rXu-0'
const traveria = 'https://www.figma.com/file/jo7DtwcW5XVPmCjRDDd5TP/TRAVERIA?type=design&node-id=0-1&mode=design&t=lh379555878Tu8wI-0'

const Porto = () => {
  return(
    <ScrollView>
      <View style={{ backgroundColor: 'pink', flex: 1 }}>
        <View
          style={{
            padding: 30,
            alignItems: 'center',
          }}>
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'maroon',
          }}>
          Assa Eka Putra Wiguna
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'regular',
            textAlign: 'center',
            color: 'maroon',
          }}>
          Halo Saya Atra
        </Text>
        <View style={{  marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
           <TouchableOpacity
              onPress={()=>Linking.openURL(retow)}
            >
            <Text
            style={styles.buttonContact}>
            Contact Me
            </Text>
            </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'maroon',
          }}>
          My Recent Project
        </Text>

        <View
          style={{
            padding: 10,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
          style={{width: 300, height:250, borderRadius: 10 }}
          source={require('./assets/ReTow.png')}></Image>
        </View>
        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>Retow App</Text>
            <Text style={styles.normalFont}>UI/UX Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(retow)}
            >
            <Image
              style={{ width: 30, height: 30,}}
              source={require('./assets/linkk.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 10,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
          style={{width: 300, height: 320, borderRadius: 10,}}
          source={require('./assets/traveria.png')}></Image>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>Traveria</Text>
            <Text style={styles.normalFont}>UI/UX Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(traveria)}
            >
              <Image
              style={{ width: 30, height: 30,}}
              source={require('./assets/linkk.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boldFont: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'maroon',
  },
  normalFont: {
    fontSize: 16,
    fontWeight: 'regular',
    textAlign: 'left',
    color: 'black',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'darksalmon',
    padding: 10,
    borderRadius: 100,
  },
  buttonContact: {
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: 'darksalmon',
    padding: 10,
    borderRadius: 100,
  },
});

export default Porto;
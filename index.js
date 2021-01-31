import React from 'react';
import { View, Text, Dimensions,TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const Popup = (props) => {
    return (
        <Modal visible={props.showpopup} transparent={true} animationType={props.animation ? props.animation : 'fade'}
            animated hardwareAccelerated style={{ top: 0, flex: 1, zIndex: 100, elevation: 100, flex: 100 }}>
            <TouchableOpacity activeOpacity={0} onPress={() => props && props.onPress()} style={{ backgroundColor: '#333', opacity: props.semitransparent ? .6 : 0, flex: 100 }} />
            <View style={{
                position: 'absolute', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                elevation: 2,
                height: 125,
                bottom: 0,
                right: width*0.05,
                left: width*0.05,
                backgroundColor: 'white',
                flex: 30,
                borderColor: '#ccc',
                borderWidth: .6,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}>
                {/* <Icon
                    style={{ position: 'absolute', top: 0, right: 0, margin: 20 }}
                    name="close"
                    color={"#333"}
                    size={20}
                    onPress={() => props && props.onPress()}
                /> */}
                {/* <View style={{ flexDirection: 'row', flex: 300, alignItems: 'center', marginLeft: 20 }}>
                    <View>
                        <Icon name={props.type && props.type == "info" ? "information" : "alert"} onPress={() => props && props.onPress()} size={40} color={"#333"} />
                    </View>
                    <View style={{ width: 250, marginLeft: 5 }}>
                        <Text style={{ fontSize: 20 }} numberOfLines={2}>{props.contenttext}</Text>
                    </View>
                </View> */}
                <View style={{ height: 10, flex: 1, flexDirection:'column',borderTopLeftRadius: 15, }}>
                    <TouchableHighlight underlayColor={'#eee'} activeOpacity={.9} onPress={() => props && props.confirmaction()} style={{ borderColor: '#eee', borderWidth: 1, flex: 50, alignItems: 'center', justifyContent: 'center',borderTopLeftRadius: 15,borderTopRightRadius: 15,   }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>{props.acceptbuttontitle}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#eee'} activeOpacity={.9} onPress={() => props && props.cancelaction()} style={{ borderColor: '#eee', borderWidth: 1, flex: 50, alignItems: 'center', justifyContent: 'center',borderTopRightRadius: 15, }}>
                        <Text style={{ fontSize: 20 }}>{props.cancelbuttontitle}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
}
export default Popup

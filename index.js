import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import FoundationIcon from 'react-native-vector-icons/MaterialCommunityIcons';



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

                elevation: 2, height: 200, bottom: 0, right: 0, left: 0, backgroundColor: 'white', flex: 30, borderTopLeftRadius: 10, borderTopRightRadius: 10
            }}>
                <FoundationIcon
                    style={{ position: 'absolute', top: 0, right: 0, margin: 20 }}
                    name="close"
                    color={
                        "#333"
                    }
                    size={20}
                    onPress={() => props && props.onPress()}
                />

                <View style={{ flexDirection: 'row', flex: 300, alignItems: 'center', marginLeft: 20 }}>

                    <View>
                        <FoundationIcon name={props.type && props.type == "info" ? "information" : "alert"} onPress={() => props && props.onPress()} size={40} color={"#333"} />

                    </View>
                    <View style={{ width: 250 }}>
                        <Text style={{ fontSize: 20 }} numberOfLines={2}>{props.contenttext}</Text>

                    </View>
                </View>

                <View style={{ height: 60, flex: 100, flexDirection: 'row' }}>


                    <TouchableHighlight underlayColor={'#eee'} activeOpacity={.9} onPress={() => props && props.confirmaction()} style={{ borderColor: '#eee', borderWidth: 1, flex: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>{props.acceptbuttontitle}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#eee'} activeOpacity={.9} onPress={() => props && props.cancelaction()} style={{ borderColor: '#eee', borderWidth: 1, flex: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>{props.cancelbuttontitle}</Text>
                    </TouchableHighlight>
                </View>
            </View>


        </Modal>
    );


}


export default Popup

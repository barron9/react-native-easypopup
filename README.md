# react-native-confirmationPopup

Requirements

1.npm i react-native-paper
2.npm i react-native-vector-icons
3.react-native link react-native-vector-icons

4.
import FoundationIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton } from 'react-native-paper';

5.
Place in you js
   <GMConfirmationPopup
                    showpopup={this.state.showpopup}
                    type="alert" //info
                    semitransparent={false}
                    animation={'none'} //fade - slide - none
                    onPress={() => this.setState({ showpopup: !this.state.showpopup })}
                    contenttext={"Kuponunuz silinecektir, Onaylıyormsunuz?"}
                    confirmaction={() => alert('silme işlemi yapılıyor') /** bu şekil ekstalar this.setState({ showpopup: !this.state.showpopup }) **/}
                    cancelaction={() => alert('silme işlemi iptal edildi')}
                    acceptbuttontitle={'Kuponu Sil'}
                    cancelbuttontitle={'İptal Et'} />

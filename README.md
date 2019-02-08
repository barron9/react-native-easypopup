# react-native-easypopup

```
npm i react-native-easypopup
```

Requirements

### 1.npm i react-native-paper
### 2.npm i react-native-vector-icons
### 3.react-native link react-native-vector-icons

### 4. imports
```
import Popup from 'react-native-easypopup';
```
### 5. place component
Place in you js
```
   <Popup
                    showpopup={this.state.showpopup}
                    type="alert" //info
                    semitransparent={false}
                    animation={'none'} //fade - slide - none
                    onPress={() => this.setState({ showpopup: !this.state.showpopup })}
                    contenttext={"Kuponunuz silinecektir, Onaylıyormsunuz?"}
                    confirmaction={() => alert('silme işlemi yapılıyor') }
                    cancelaction={() => alert('silme işlemi iptal edildi')}
                    acceptbuttontitle={'Kuponu Sil'}
                    cancelbuttontitle={'İptal Et'} />
```

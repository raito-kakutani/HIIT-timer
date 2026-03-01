import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback,Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';

export default function App() {
  const [workTime, setWorkTime] = useState(20)
  const [breakTime, setBreakTime] = useState(10)
  const [showWorkPicker, setShowWorkPicker] = useState(false)
  const [showBreakPicker, setShowBreakPicker] = useState(false)
  return (
    <View style={styles.container}>
      {/* 運動 */}
      <View>
        <Text>運動時間{workTime}分</Text>
        {showWorkPicker &&
          <View onStartShouldSetResponder={() => true}>
            <Picker
              selectedValue={workTime}
              onValueChange={v => setWorkTime(v)}
              style={styles.picker}>
              <Picker.Item label='10' value={10}/>
              <Picker.Item label='20' value={20}/>
              <Picker.Item label='30' value={30}/>
              <Picker.Item label='40' value={40}/>
            </Picker>
          </View>
        }
      </View>

      {/* 休憩 */}
      <View>
        <Text>休憩時間{breakTime}分</Text>
        {showBreakPicker &&
          <View onStartShouldSetResponder={() => true}>
            <Picker
              selectedValue={breakTime}
              onValueChange={v => setBreakTime(v)}
              style={styles.picker}>
              <Picker.Item label='10' value={10}/>
              <Picker.Item label='20' value={20}/>
              <Picker.Item label='30' value={30}/>
              <Picker.Item label='40' value={40}/>
            </Picker>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeSelecter: {
    flexDirection: 'row',
  },
  picker: {
    height: 50,
    width: 100,
  },
  touchable: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 8,
  },
});

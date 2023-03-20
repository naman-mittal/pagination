import React, {useState} from 'react';
import {
  View,
  Text,
  NativeModules,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SimpleButton from '../../components/button/SimpleButton';
import TextInput from '../../components/input/TextInput';
import {validateNumber} from '../../utils/Validations';

import styles from './styles';

const {NativeCalculationModule} = NativeModules;

const NativeBridge = () => {
  const [value1, setValue1] = useState<string>('0');
  const [value2, setValue2] = useState<string>('0');

  const [errors, setErrors] = useState<{
    value1Error: string;
    value2Error: string;
  }>({value1Error: '', value2Error: ''});

  const [output, setOutput] = useState<{result: string; device: string}>({
    result: '',
    device: '',
  });

  const performCalculation = () => {
    const value1Error = validateNumber(value1);
    const value2Error = validateNumber(value2);

    setErrors({value1Error, value2Error});

    if (value1Error || value2Error) {
      return;
    }

    if (Platform.OS === 'ios') {
      NativeCalculationModule.performCalculation(
        Number(value1),
        Number(value2),
        (err: any, result: any, device: any) => {
          if (err) {
            console.log(err);
          } else {
            setOutput({result, device});
          }
        },
      );
    } else {
      NativeCalculationModule.performCalculation(
        Number(value1),
        Number(value2),
        (err: any, res: any) => {
          if (err) {
            console.log(err);
          } else {
            setOutput(res);
          }
        },
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <TextInput
              placeholder="enter value"
              label="Value 1"
              value={value1}
              setValue={setValue1}
              error={errors.value1Error}
              inputMode={'numeric'}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="enter value"
              inputMode={'numeric'}
              label="Value 2"
              value={value2}
              setValue={setValue2}
              error={errors.value2Error}
            />
          </View>
        </View>
        <View style={styles.action}>
          <SimpleButton
            name="Perform Native Calculation"
            onPress={performCalculation}
          />
        </View>

        {output.device.length > 0 && (
          <View style={styles.output}>
            <Text style={styles.text}>Multiple : {output.result}</Text>
            <Text style={styles.text}>Device : {output.device}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NativeBridge;

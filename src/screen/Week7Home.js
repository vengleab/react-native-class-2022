import {Box, Center, Checkbox, CheckIcon, NativeBaseProvider, Select} from 'native-base';
import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Button from '../common/Button';
import {Icon} from 'native-base';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

export default () => {
  const [service, setService] = React.useState('');
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        {/* <Button onPress={() => alert('Click me')} title="Click me" />
      <Button onPress={() => alert('Press me')} title="Press me" /> */}
        <Button onClick={() => alert('Click')} color="aqua">
          Click me
        </Button>
        <Button>Press me</Button>
        <Checkbox value="one" my={2}>
          UX Research
        </Checkbox>
        <Icon name="home" />
        <Icon type="FontAwesome" name="home" />
        <Text>Text</Text>
        <Center>
          <Box maxW="300">
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setService(itemValue)}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const ComboBox = ({ options, placeholder, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: '100%' }}
        itemStyle={{ marginLeft: 30 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue)
          onChange(itemValue, itemIndex - 1);
        }}
      >
        <Picker.Item label={placeholder} value='' />
        {options.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    margin: "0.1%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "2%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 30
  },
});

export default ComboBox;
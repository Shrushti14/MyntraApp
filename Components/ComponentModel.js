import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

function ComponentModel(props) {
 
  ComponentModel = (bool,data) => {
  props.changeModalVisible(bool);
  props.setData(data);
  }

  return (
   <View style={styles.mainComponent}>
    <View style={styles.models}>
      <TouchableOpacity disabled={false} onPress={() => ComponentModel(false,'cross')}>
        <View>
          <AntDesign
            style={styles.iconClose}
            name="close"
            size={30}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <View>
        <View>
          <AntDesign
            style={styles.iconException}
            name="exception1"
            size={45}
            color="orange"
          />
        </View>
        <View>
          <Text style={styles.noCoupons}>No Coupon Allowed</Text>
        </View>
        <View>
          <Text style={styles.cashback}>
            Myntra coupons are not compatible with Stormx Cropto Cashback yet.
          </Text>
        </View>
      </View>
    </View>
    </View>
  );
}

export default ComponentModel;
const styles = StyleSheet.create({
  mainComponent:{
    flex:1,
    justifyContent: 'center',
    opacity: 0.9,
    backgroundColor: "#545050",
  },
  models: {
    marginHorizontal: "5%",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 35,
    elevation: 8, // for android
    shadowColor: "Black", // forIOS
    shadowOffset: { width: 0, height: 2 }, // forIOS
    shadowRadius: 6, // forIOS
    shadowOpacity: 0.25, // forIOS
  },
  iconClose: {
    textAlign: "right",
  },
  iconException: {
    //flex: 0.1,
    justifyContent: "center",
    textAlign: "center",
    borderColor: 'orange',
    borderRadius: 50,
    borderWidth: 3,
    marginHorizontal:'40%',
    paddingVertical: '2%',
  },
  noCoupons: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center',
  },
  cashback: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
  },
});

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Modal} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ComponentModel from "../Components/ComponentModel";
// import App from "../App";

const Home = (props) => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();
  const changeModalVisible = (bool) => {
    setModalVisible(bool);
  };

  const setData = (data) => {
    setchooseData(data);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/img/myntra.png")}
          />
        </View>

        <View>
          <Text style={styles.instructionText}>Myntra</Text>
        </View>
        <Text style={styles.textColor}>Up to 2.67% Crypto CashBack</Text>
        <View style={styles.card}>
          <Text style={styles.myntra}>About Myntra</Text>
          <Text style={styles.Shop}>
            Shop Online fo Branded Shoes, Clothin & Accessories in India @
            Myntra.com,
            <TouchableOpacity onPress={() => setShow(!show)}>
              {!show && <Text style={styles.seeAll}> See all</Text>}
              {show && <Text style={styles.seeAll}> See less</Text>}
            </TouchableOpacity>
            <View>
              {show ? <Text> India's largest Fashion Portal. </Text> : null}
            </View>
          </Text>
        </View>

        <View style={styles.card}>
          <TouchableOpacity onPress={() => changeModalVisible(true)}>
            <View style={styles.viewContainer}>
              <View style={styles.iconException}>
                <AntDesign name="exception1" size={24} color="black" />
              </View>

              <View style={styles.textCoupon}>
                <Text> Coupon code not eligible </Text>
              </View>

              <View style={styles.infoIcon}>
                <AntDesign name="infocirlceo" size={17} color="grey" />
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(true)}
          >
            <ComponentModel
              changeModalVisible={changeModalVisible}
              setData={setData}
            />
          </Modal>

          <Text style={styles.line}></Text>

          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <View style={styles.viewExclusion}>
              <View style={styles.iconExclamationcircleo}>
                <AntDesign name="exclamationcircleo" size={22} color="black" />
              </View>

              <View style={styles.textExclusion}>
                <Text>Exclusion Apply </Text>
              </View>

              {!visible && (
                <View style={styles.iconRight}>
                  <AntDesign name="right" size={17} color="grey" />
                </View>
              )}
              {visible && (
                <View style={styles.iconRight}>
                  <AntDesign name="down" size={17} color="grey" />
                </View>
              )}
            </View>
            <View>
              {visible ? (
                <Text style={styles.visibleText}>
                  <Text>5.32% - </Text>
                  <Text>New Customers</Text> {"\n"}
                  <Text>2.67% - </Text>
                  <Text>Returning Customers</Text> {"\n"} {"\n"}  {"\n"}  {"\n"}  {"\n"}
                  <Text>
                    Does NOT APPLY to the following products/categories/brands:
                  </Text>
                  {"\n"} {"\n"}  {"\n"}
                  <Text>
                    -Cash on Delivery (COD) payment option is not eligible for Crypto Cash-back
                  </Text> {"\n"}  {"\n"}  {"\n"}  
                  <Text>
                    -Maximum 3 orders per IP Address/Per Email ID & Phone
                    NUmber/Shipping Addressin a calendar month.
                  </Text>
                  {"\n"} {"\n"}  {"\n"}
                  <Text>
                    -Bulk orders are not permitted: Please note it is against
                    policy to use. Myntra for non-personal or commercial use.We
                    may block all such accounts and forfeit their Cashback
                    balances without any prior notice.
                  </Text>  {"\n"}
                </Text>
              ) : null}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.sign}
        onPress={() =>
          props.navigation.navigate("Settings", { username: input })
        }
      >
        <View style={styles.signUp}>
          <Text style={styles.Inner}>Sign up and shop at Myntra </Text>
        </View>

        <View style={styles.iconArrowright}>
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  sign: {
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    backgroundColor: "red",
    borderRadius: 30,
  },
  Inner: {
    //textAlign: "center",
    color: "white",
    fontSize: 15,
    // width: "95%",
  },
  signUp: {
    flex: 1,
    alignItems: "center",
  },
  iconArrowright: {
    // flex: 0.1,
    //marginTop: 5,
    //paddingTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 0.12,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 152,
    marginTop: 30,
  },
  instructionText: {
    fontWeight: "bold",
    fontSize: 19,
    marginHorizontal: 172,
    marginTop: 15,
  },
  textColor: {
    color: "#fd2e53",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 80,
    marginTop: 10,
  },
  myntra: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
  Shop: {
    marginTop: 10,
  },
  seeAll: {
    fontWeight: "bold",
    //flex: 1,
  },
  card: {
    //justifyContent: "center",
    //alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 24,
    elevation: 8, // for android
    shadowColor: "Black", // forIOS
    shadowOffset: { width: 0, height: 2 }, // forIOS
    shadowRadius: 6, // forIOS
    shadowOpacity: 0.25, // forIOS
    marginBottom: 20,
  },
  viewContainer: {
    flexDirection: "row",
  },
  iconException: {
    flex: 0.1,
  },
  textCoupon: {
    flex: 0.9,
    alignItems: "flex-start",
  },
  infoIcon: {
    flex: 0.1,
  },
  line: {
    borderBottomWidth: 0.2,
    borderColor: "grey",
  },
  viewExclusion: {
    flexDirection: "row",
    marginTop: 20,
  },
  iconExclamationcircleo: {
    flex: 0.1,
  },
  textExclusion: {
    flex: 0.9,
    alignItems: "flex-start",
  },
  iconRight: {
    flex: 0.1,
  },
  visibleText: {
    fontSize: 13,
    textAlign: 'left',
    marginTop: 20,
  },
  sign: {
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    backgroundColor: "red",
    borderRadius: 30,
  },
  Inner: {
    //textAlign: "center",
    color: "white",
    fontSize: 15,
    // width: "95%",
  },
});

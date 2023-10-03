import {Dimensions, I18nManager, StyleSheet} from "react-native";

const {width, height} = Dimensions.get("screen");
export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  halfCircularRectView: {
    zIndex: 2,
    position: "absolute",
    width: width,
    top: height,
    paddingHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },

  closeButton: {
    alignSelf: "flex-end",
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  end: {
    alignSelf: "flex-start",
    width: 32,
    height: 32,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 22,
    width: "100%",
    flex: 1,
    textAlign: "center",
    paddingTop: 5,
  },
  top: {
    width: width,
    paddingBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    position: "absolute",
    top: 0,
    flexDirection: "row",
  },
  content: {
    marginTop: 60,
    zIndex: 3,
    width: "100%",
    paddingTop: 8,
  },
});

import { Animated, Dimensions, Platform } from "react-native";
import React, { useRef } from "react";
import usePopupProps from "./interfaces";
import AnimationService from "../../services/animation-service";
import Styles from "../popup.styles";

const usePopup = ({
  onClickClose,
  durationEnter,
  durationExit,
}: usePopupProps) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  let deviceH = Dimensions.get("screen").height;
  let deviceW = Dimensions.get("window").height;
  let diff = deviceH - deviceW;

  const animatSlideDown = () => {
    new AnimationService({
      toValue: 0,
      duration: durationEnter,
      useNativeDriver: true,
    })
      .create(slideAnim)
      .start(() => {
        onClickClose && onClickClose();
      });
  };

  const animatSlideUp = (height) => {
    let finalheight =
      Platform.OS === "ios"
        ? -height - diff - Styles.content.marginTop
        : -height - diff;

    new AnimationService({
      toValue: finalheight,
      duration: durationExit,
      useNativeDriver: true,
    })
      .create(slideAnim)
      .start();
  };

  return {
    animatSlideDown,
    animatSlideUp,

    slideAnim,
  };
};

export default usePopup;

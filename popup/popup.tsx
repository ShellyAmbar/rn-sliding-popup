import {Animated, View, Modal, Text} from "react-native";
import React from "react";
import Close from "../assets/images/close-small.svg";
import PopupProps from "./interfaces";
import Styles from "./popup.styles";
import usePopup from "./hooks/usePopup";

const Popup = ({
  isVisible,
  onClickClose,
  title,
  titleStyle,
  durationEnter = 500,
  durationExit = 500,
  children,
}: PopupProps) => {
  const {animatSlideDown, animatSlideUp, slideAnim} = usePopup({
    onClickClose,
    durationEnter,
    durationExit,
  });

  return (
    <Modal visible={isVisible} transparent onRequestClose={animatSlideDown}>
      <View style={Styles.backdrop} />
      <Animated.View
        onLayout={(event) => {
          animatSlideUp(event.nativeEvent.layout.height);
        }}
        style={[
          Styles.halfCircularRectView,
          Styles.shadow,
          {
            transform: [
              {
                translateY: slideAnim,
              },
            ],
          },
        ]}
      >
        <View style={Styles.container}>
          <View style={Styles.top}>
            <View style={Styles.end} />

            {title ? (
              <Text style={{...Styles.title, ...titleStyle}}>{title}</Text>
            ) : (
              <View style={Styles.title} />
            )}
            {onClickClose ? (
              <View
                onPress={() => {
                  animatSlideDown();
                }}
                style={Styles.closeButton}
              >
                <Close />
              </View>
            ) : (
              <View style={Styles.closeButton} />
            )}
          </View>

          <View style={Styles.content}>{children}</View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default Popup;

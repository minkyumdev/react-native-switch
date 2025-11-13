import React, { useCallback, useEffect, useMemo } from 'react';
import { Pressable, PixelRatio } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';
import Haptics from '@mhpdev/react-native-haptics';
import { styles } from './style';
// Helper function for pixel ratio
var pixelRatio = function (value) {
    return PixelRatio.roundToNearestPixel(value);
};
var SWITCH_CONFIG = {
    small: { width: 40, height: 24, thumbSize: 14 },
    medium: { width: 50, height: 32, thumbSize: 20 },
    large: { width: 60, height: 36, thumbSize: 26 },
};
// Thumb scale constants
var THUMB_SCALE_ACTIVE = 1.0;
// Animation constants
export var SWITCH_ANIMATION_DURATION = 150;
var ANIMATION_CONFIG = {
    duration: SWITCH_ANIMATION_DURATION,
};
// Track padding
var TRACK_PADDING = 4;
// TranslateX values
var TRANSLATE_X_INACTIVE = 0;
var TRANSLATE_X_ACTIVE = 1;
/**
 * React Native용 커스텀 Switch 컴포넌트
 * react-native-reanimated를 사용한 부드러운 애니메이션과 햅틱 피드백을 제공합니다.
 *
 * @example
 * ```tsx
 * import Switch from 'react-native-switch';
 *
 * function App() {
 *   const [isEnabled, setIsEnabled] = useState(false);
 *
 *   return (
 *     <Switch
 *       value={isEnabled}
 *       onValueChange={setIsEnabled}
 *       size="medium"
 *       activeColor="#20A2F9"
 *     />
 *   );
 * }
 * ```
 */
export var Switch = React.memo(function (_a) {
    var value = _a.value, onValueChange = _a.onValueChange, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.activeColor, activeColor = _c === void 0 ? '#34C759' : _c, _d = _a.inactiveColor, inactiveColor = _d === void 0 ? '#F6F6F6' : _d, _e = _a.thumbColor, thumbColor = _e === void 0 ? '#FFFFFF' : _e, _f = _a.size, size = _f === void 0 ? 'small' : _f, width = _a.width, height = _a.height, thumbSize = _a.thumbSize, style = _a.style, testID = _a.testID, _g = _a.enableHaptics, enableHaptics = _g === void 0 ? true : _g, _h = _a.thumbScaleInactive, thumbScaleInactive = _h === void 0 ? 0.8 : _h;
    var translateX = useSharedValue(value ? TRANSLATE_X_ACTIVE : TRANSLATE_X_INACTIVE);
    var switchConfig = useMemo(function () {
        if (width !== undefined || height !== undefined) {
            var configWidth = width !== null && width !== void 0 ? width : SWITCH_CONFIG[size].width;
            var configHeight = height !== null && height !== void 0 ? height : SWITCH_CONFIG[size].height;
            var calculatedThumbSize_1 = thumbSize !== null && thumbSize !== void 0 ? thumbSize : configHeight * 0.7;
            return {
                width: configWidth,
                height: configHeight,
                thumbSize: calculatedThumbSize_1,
            };
        }
        return SWITCH_CONFIG[size];
    }, [size, width, height, thumbSize]);
    var thumbScaleActive = THUMB_SCALE_ACTIVE;
    var thumbScaleDiff = thumbScaleActive - thumbScaleInactive;
    var scaleOffsetPadding = useMemo(function () { return (switchConfig.thumbSize * (1 - thumbScaleInactive)) / 2; }, [switchConfig.thumbSize, thumbScaleInactive]);
    var maxTranslate = useMemo(function () {
        return switchConfig.width - switchConfig.thumbSize - TRACK_PADDING * 2;
    }, [switchConfig.width, switchConfig.thumbSize]);
    useEffect(function () {
        translateX.value = withTiming(value ? TRANSLATE_X_ACTIVE : TRANSLATE_X_INACTIVE, ANIMATION_CONFIG);
    }, [value, translateX]);
    var handlePress = useCallback(function () {
        if (disabled)
            return;
        if (enableHaptics) {
            Haptics.impact('soft');
        }
        var newValue = !value;
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
    }, [disabled, value, onValueChange, enableHaptics]);
    var trackAnimatedStyle = useAnimatedStyle(function () {
        var backgroundColor = interpolateColor(translateX.value, [0, 1], [inactiveColor, activeColor]);
        return {
            backgroundColor: backgroundColor,
        };
    }, [inactiveColor, activeColor]);
    var thumbAnimatedStyle = useAnimatedStyle(function () {
        var scale = thumbScaleInactive + translateX.value * thumbScaleDiff;
        var currentScaleOffset = scaleOffsetPadding * (1 - translateX.value);
        var baseTranslateX = TRACK_PADDING + translateX.value * maxTranslate;
        var translateXValue = baseTranslateX - currentScaleOffset;
        return {
            transform: [
                {
                    translateX: translateXValue,
                },
                {
                    scale: scale,
                },
            ],
        };
    }, [maxTranslate, scaleOffsetPadding, thumbScaleInactive, thumbScaleDiff]);
    var trackStyle = useMemo(function () { return ({
        width: switchConfig.width,
        height: switchConfig.height,
        borderRadius: switchConfig.height / 2,
        opacity: disabled ? 0.5 : 1,
    }); }, [switchConfig.width, switchConfig.height, disabled]);
    var calculatedThumbSize = useMemo(function () { return pixelRatio(switchConfig.thumbSize); }, [switchConfig.thumbSize]);
    var thumbStyle = useMemo(function () { return ({
        width: calculatedThumbSize,
        height: calculatedThumbSize,
        borderRadius: pixelRatio(switchConfig.thumbSize / 2),
        backgroundColor: thumbColor,
    }); }, [calculatedThumbSize, switchConfig.thumbSize, thumbColor]);
    return (<Pressable onPress={handlePress} disabled={disabled} style={[style]} testID={testID}>
        <Animated.View style={[styles.track, trackAnimatedStyle, trackStyle]}>
          <Animated.View style={[styles.thumb, thumbAnimatedStyle, thumbStyle]}/>
        </Animated.View>
      </Pressable>);
}, function (prevProps, nextProps) {
    // Custom comparison for React.memo - prevent unnecessary re-renders
    return (prevProps.value === nextProps.value &&
        prevProps.disabled === nextProps.disabled &&
        prevProps.activeColor === nextProps.activeColor &&
        prevProps.inactiveColor === nextProps.inactiveColor &&
        prevProps.thumbColor === nextProps.thumbColor &&
        prevProps.size === nextProps.size &&
        prevProps.width === nextProps.width &&
        prevProps.height === nextProps.height &&
        prevProps.thumbSize === nextProps.thumbSize &&
        prevProps.enableHaptics === nextProps.enableHaptics &&
        prevProps.onValueChange === nextProps.onValueChange);
});
export default Switch;
//# sourceMappingURL=index.js.map
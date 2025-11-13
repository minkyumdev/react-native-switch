import React, { useCallback, useEffect, useMemo } from 'react';
import { Pressable, StyleProp, ViewStyle, PixelRatio } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Haptics from '@mhpdev/react-native-haptics';
import { styles } from './style';

// Helper function for pixel ratio
const pixelRatio = (value: number): number => {
  return PixelRatio.roundToNearestPixel(value);
};

export interface SwitchProps {
  /**
   * Current state of the switch (on/off)
   */
  value: boolean;
  /**
   * Callback function called when the switch value changes
   */
  onValueChange?: (value: boolean) => void;
  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Color of the switch when active (on)
   * @default '#34C759'
   */
  activeColor?: string;
  /**
   * Color of the switch when inactive (off)
   * @default '#F6F6F6'
   */
  inactiveColor?: string;
  /**
   * Color of the thumb (the circular element)
   * @default '#FFFFFF'
   */
  thumbColor?: string;
  /**
   * Predefined size of the switch (used when width/height not set)
   * @default 'small'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Custom width of the switch (takes priority over size)
   */
  width?: number;
  /**
   * Custom height of the switch (takes priority over size)
   */
  height?: number;
  /**
   * Custom size of the thumb (auto-calculated if not provided)
   */
  thumbSize?: number;
  /**
   * Additional style for the switch container
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Test ID for testing purposes
   */
  testID?: string;
  /**
   * Whether to enable haptic feedback on toggle
   * @default true
   */
  enableHaptics?: boolean;
  /**
   * Scale value of the thumb when inactive (off state)
   * @default 0.8
   */
  thumbScaleInactive?: number;
}

const SWITCH_CONFIG = {
  small: { width: 40, height: 24, thumbSize: 14 },
  medium: { width: 50, height: 32, thumbSize: 20 },
  large: { width: 60, height: 36, thumbSize: 26 },
};

// Thumb scale constants
const THUMB_SCALE_ACTIVE = 1.0;

// Animation constants
export const SWITCH_ANIMATION_DURATION = 150;
const ANIMATION_CONFIG = {
  duration: SWITCH_ANIMATION_DURATION,
};

// Track padding
const TRACK_PADDING = 4;

// TranslateX values
const TRANSLATE_X_INACTIVE = 0;
const TRANSLATE_X_ACTIVE = 1;

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
export const Switch: React.FC<SwitchProps> = React.memo<SwitchProps>(
  ({
    value,
    onValueChange,
    disabled = false,
    activeColor = '#34C759',
    inactiveColor = '#F6F6F6',
    thumbColor = '#FFFFFF',
    size = 'small',
    width,
    height,
    thumbSize,
    style,
    testID,
    enableHaptics = true,
    thumbScaleInactive = 0.8,
  }) => {
    const translateX = useSharedValue(
      value ? TRANSLATE_X_ACTIVE : TRANSLATE_X_INACTIVE,
    );

    const switchConfig = useMemo(() => {
      if (width !== undefined || height !== undefined) {
        const configWidth = width ?? SWITCH_CONFIG[size].width;
        const configHeight = height ?? SWITCH_CONFIG[size].height;
        const calculatedThumbSize = thumbSize ?? configHeight * 0.7;
        return {
          width: configWidth,
          height: configHeight,
          thumbSize: calculatedThumbSize,
        };
      }
      return SWITCH_CONFIG[size];
    }, [size, width, height, thumbSize]);

    const thumbScaleActive = THUMB_SCALE_ACTIVE;
    const thumbScaleDiff = thumbScaleActive - thumbScaleInactive;

    const scaleOffsetPadding = useMemo(
      () => (switchConfig.thumbSize * (1 - thumbScaleInactive)) / 2,
      [switchConfig.thumbSize, thumbScaleInactive],
    );

    const maxTranslate = useMemo(() => {
      return switchConfig.width - switchConfig.thumbSize - TRACK_PADDING * 2;
    }, [switchConfig.width, switchConfig.thumbSize]);

    useEffect(() => {
      translateX.value = withTiming(
        value ? TRANSLATE_X_ACTIVE : TRANSLATE_X_INACTIVE,
        ANIMATION_CONFIG,
      );
    }, [value, translateX]);

    const handlePress = useCallback(() => {
      if (disabled) return;
      if (enableHaptics) {
        Haptics.impact('soft');
      }
      const newValue = !value;
      onValueChange?.(newValue);
    }, [disabled, value, onValueChange, enableHaptics]);

    const trackAnimatedStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        translateX.value,
        [0, 1],
        [inactiveColor, activeColor],
      );

      return {
        backgroundColor,
      };
    }, [inactiveColor, activeColor]);

    const thumbAnimatedStyle = useAnimatedStyle(() => {
      const scale = thumbScaleInactive + translateX.value * thumbScaleDiff;

      const currentScaleOffset = scaleOffsetPadding * (1 - translateX.value);

      const baseTranslateX = TRACK_PADDING + translateX.value * maxTranslate;

      const translateXValue = baseTranslateX - currentScaleOffset;

      return {
        transform: [
          {
            translateX: translateXValue,
          },
          {
            scale,
          },
        ],
      };
    }, [maxTranslate, scaleOffsetPadding, thumbScaleInactive, thumbScaleDiff]);

    const trackStyle = useMemo(
      () => ({
        width: switchConfig.width,
        height: switchConfig.height,
        borderRadius: switchConfig.height / 2,
        opacity: disabled ? 0.5 : 1,
      }),
      [switchConfig.width, switchConfig.height, disabled],
    );

    const calculatedThumbSize = useMemo(
      () => pixelRatio(switchConfig.thumbSize),
      [switchConfig.thumbSize],
    );

    const thumbStyle = useMemo(
      () => ({
        width: calculatedThumbSize,
        height: calculatedThumbSize,
        borderRadius: pixelRatio(switchConfig.thumbSize / 2),
        backgroundColor: thumbColor,
      }),
      [calculatedThumbSize, switchConfig.thumbSize, thumbColor],
    );

    return (
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={[style]}
        testID={testID}
      >
        <Animated.View style={[styles.track, trackAnimatedStyle, trackStyle]}>
          <Animated.View
            style={[styles.thumb, thumbAnimatedStyle, thumbStyle]}
          />
        </Animated.View>
      </Pressable>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison for React.memo - prevent unnecessary re-renders
    return (
      prevProps.value === nextProps.value &&
      prevProps.disabled === nextProps.disabled &&
      prevProps.activeColor === nextProps.activeColor &&
      prevProps.inactiveColor === nextProps.inactiveColor &&
      prevProps.thumbColor === nextProps.thumbColor &&
      prevProps.size === nextProps.size &&
      prevProps.width === nextProps.width &&
      prevProps.height === nextProps.height &&
      prevProps.thumbSize === nextProps.thumbSize &&
      prevProps.enableHaptics === nextProps.enableHaptics &&
      prevProps.onValueChange === nextProps.onValueChange
    );
  },
);

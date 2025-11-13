import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
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
export declare const SWITCH_ANIMATION_DURATION = 150;
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
export declare const Switch: React.FC<SwitchProps>;
//# sourceMappingURL=index.d.ts.map
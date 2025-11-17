# @minkyumdev/react-native-switch

> A highly customizable, animated switch/toggle component for React Native with smooth animations, haptic feedback, and full TypeScript support. Perfect for iOS and Android apps.

[![npm version](https://img.shields.io/npm/v/@minkyumdev/react-native-switch.svg)](https://www.npmjs.com/package/@minkyumdev/react-native-switch)
[![npm downloads](https://img.shields.io/npm/dt/@minkyumdev/react-native-switch.svg)](https://www.npmjs.com/package/@minkyumdev/react-native-switch)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready, customizable React Native switch component built with `react-native-reanimated` for smooth 60fps animations. Ideal for settings screens, feature toggles, and any UI that requires a modern switch component.

## 🎬 Demo

https://github.com/user-attachments/assets/30d71b88-dfc8-416a-bb13-43ecae023a50

https://github.com/user-attachments/assets/e34d5426-d42e-4103-9b49-f70a306d3785

## Features

- 🎨 Fully customizable colors and sizes
- ✨ Smooth animations powered by react-native-reanimated
- 🎯 Customizable thumb scale animation
- 📳 Haptic feedback support (optional)
- ♿ Accessible and disabled state support
- 📱 Works on both iOS and Android
- 💪 Written in TypeScript with full type definitions

## Installation

```bash
npm install @minkyumdev/react-native-switch
# or
yarn add @minkyumdev/react-native-switch
```

### Peer Dependencies

This library requires the following peer dependencies:

- `react` (>=16.8.0)
- `react-native` (>=0.60.0)
- `react-native-reanimated` (>=2.0.0)
- `@mhpdev/react-native-haptics` (optional, for haptic feedback)

Make sure to install these dependencies in your project:

```bash
npm install react-native-reanimated
npm install @mhpdev/react-native-haptics
```

### iOS Setup

For iOS, you need to install pods:

```bash
cd ios && pod install
```

### Android Setup

No additional setup required for Android.

## Usage

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from '@minkyumdev/react-native-switch';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        activeColor="#34C759"
        inactiveColor="#E5E5EA"
      />
    </View>
  );
}
```

## Props

| Prop                 | Type                             | Default     | Description                                                    |
| -------------------- | -------------------------------- | ----------- | -------------------------------------------------------------- |
| `value`              | `boolean`                        | `false`     | Current state of the switch (on/off)                           |
| `onValueChange`      | `(value: boolean) => void`       | -           | Callback function called when the switch value changes         |
| `disabled`           | `boolean`                        | `false`     | Whether the switch is disabled                                 |
| `activeColor`        | `string`                         | `'#34C759'` | Color of the switch when active (on)                           |
| `inactiveColor`      | `string`                         | `'#F6F6F6'` | Color of the switch when inactive (off)                        |
| `thumbColor`         | `string`                         | `'#FFFFFF'` | Color of the thumb (the circular element)                      |
| `size`               | `'small' \| 'medium' \| 'large'` | `'small'`   | Predefined size of the switch (used when width/height not set) |
| `width`              | `number`                         | -           | Custom width of the switch (takes priority over size)          |
| `height`             | `number`                         | -           | Custom height of the switch (takes priority over size)         |
| `thumbSize`          | `number`                         | -           | Custom size of the thumb (auto-calculated if not provided)     |
| `thumbScaleInactive` | `number`                         | `0.8`       | Scale value of the thumb when inactive (off state)             |
| `enableHaptics`      | `boolean`                        | `true`      | Whether to enable haptic feedback on toggle                    |
| `style`              | `StyleProp<ViewStyle>`           | -           | Additional style for the switch container                      |
| `testID`             | `string`                         | -           | Test ID for testing purposes                                   |

## Examples

### Basic Usage

```tsx
<Switch value={isEnabled} onValueChange={setIsEnabled} />
```

### Custom Colors

```tsx
<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  activeColor="#FF3B30"
  inactiveColor="#C7C7CC"
  thumbColor="#FFFFFF"
/>
```

### Custom Size

```tsx
// Using predefined sizes
<Switch value={isEnabled} onValueChange={setIsEnabled} size="large" />

// Using custom width and height
<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  width={80}
  height={40}
/>

// Custom width, height, and thumbSize
<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  width={100}
  height={50}
  thumbSize={35}
/>
```

### Disabled State

```tsx
<Switch value={isEnabled} onValueChange={setIsEnabled} disabled={true} />
```

### Disable Haptics

```tsx
<Switch value={isEnabled} onValueChange={setIsEnabled} enableHaptics={false} />
```

### Custom Thumb Scale

```tsx
// Custom scale for inactive state (default is 0.8)
<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  thumbScaleInactive={0.7} // Thumb will be smaller when off
/>
```

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run build:watch
```

## API Reference

### Switch Component

The main component exported from this library.

#### Props

See the [Props](#props) table above for detailed information.

#### Example

```tsx
import { Switch } from '@minkyumdev/react-native-switch';

function MyComponent() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      value={enabled}
      onValueChange={setEnabled}
      size="medium"
      activeColor="#34C759"
      inactiveColor="#E5E5EA"
    />
  );
}
```

## License

MIT

## Why Choose This Library?

- ✅ **Smooth Animations**: Powered by `react-native-reanimated` for 60fps animations
- ✅ **Fully Customizable**: Control colors, sizes, thumb scale, and more
- ✅ **TypeScript Support**: Full type definitions included
- ✅ **Haptic Feedback**: Optional haptic feedback for better UX
- ✅ **Cross-Platform**: Works seamlessly on iOS and Android
- ✅ **Lightweight**: Minimal dependencies, optimized bundle size
- ✅ **Production Ready**: Used in real-world applications

## Common Use Cases

- Settings screens and preference toggles
- Feature flags and A/B testing switches
- Notification settings
- Dark mode toggles
- Privacy settings
- Any boolean state management UI

## Related Packages

Looking for other React Native components? Check out:

- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) - Animation library
- [@mhpdev/react-native-haptics](https://github.com/mhevery/react-native-haptics) - Haptic feedback

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you find this library helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation

## License

MIT © [minkyumdev](https://github.com/minkyumdev)

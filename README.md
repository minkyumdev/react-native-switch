# @minkyum/react-native-switch

A customizable and animated switch component for React Native built with `react-native-reanimated`.

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
npm install @minkyum/react-native-switch
# or
yarn add @minkyum/react-native-switch
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
import Switch from '@minkyum/react-native-switch';

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
import Switch from '@minkyum/react-native-switch';

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

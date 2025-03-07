import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

import BasicButton from './components/atoms/BasicButton';

const LINKING_ERROR =
  `The package 'comp-library' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type CompLibraryProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'CompLibraryView';

export const CompLibraryView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<CompLibraryProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export { BasicButton };

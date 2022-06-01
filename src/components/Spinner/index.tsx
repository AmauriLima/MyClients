import React from 'react';

import { defaultTheme } from '@assets/themes/default';
import { ActivityIndicator } from 'react-native';

export default function Spinner() {
  return (
    <ActivityIndicator size="large" color={defaultTheme.colors.primary.main} />
  );
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeyEnum } from '../../enums/AsyncStorageKeyEnum';

export const setItem = async <T = string>(
  key: AsyncStorageKeyEnum,
  value: T,
): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify({ value }));
};

export const getItem = async <T = string>(
  key: AsyncStorageKeyEnum,
): Promise<T | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value === null) {
      return undefined;
    }

    const valueObject = JSON.parse(value) as { value: T };

    return valueObject.value;
  } catch {
    return undefined;
  }
};

export const removeItem = async (key: AsyncStorageKeyEnum) => {
  await AsyncStorage.removeItem(key);
};

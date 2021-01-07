// @flow
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(
  key: string,
  value: string | Object,
  onSuccess?: Function,
  onError: Function,
) {
  try {
    await AsyncStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value,
    );
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error(error);
    if (onError) {
      onError(error);
    }
  }
}

export async function getData(
  key: string,
  onSuccess?: Function,
  onError?: Function,
): Promise<any> | string | Object {
  try {
    const value = await AsyncStorage.getItem(key);
    if (onSuccess) {
      onSuccess(value);
    }
  } catch (error) {
    console.error('unable to retrieve data from local storage');
    if (onError) {
      onError(error);
    }
  }
}

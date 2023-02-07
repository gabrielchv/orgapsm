import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value: any, key: string = "@tasks") => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key: string = "@tasks") => {
  try {
    const value = await AsyncStorage.getItem(key);
    return !!value ? JSON.parse(value) : [];
  } catch (e) {
    console.log(e);
  }
};

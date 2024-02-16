import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { DB_URL } from './Constants/Constants';

const Test = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('ImagePicker Result:', result);
    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  // const uploadImage = async () => {
  //   try {
  //     if (image) {
  //       const formData = new FormData();
  //       formData.append('image', {
  //         uri: image,
  //         name: 'image.jpg',
  //         type: 'image/jpg',
  //       });
  //       // if(formData){

  //       //   console.log("formData", formData);
  //       // }
  //       const response = await axios.post(`${DB_URL}upload.php`, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });
  //       console.log("response", response);

  //       console.log('Image uploaded successfully=>:', response.data);
  //     } else {
  //       console.log('No image selected');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:=>', error);
  //   }
  // };

  const uploadImage = async () => {
    try {
      if (image) {
        const formData = new FormData();

        // Fetch the image data as a Blob
        const response = await fetch(image);
        const blob = await response.blob();

        // Append the Blob to FormData with a filename
        formData.append('image', blob, 'image.jpg');

        // Log FormData to check if the image is appended correctly
        console.log('FormData:', formData);

        const uploadResponse = await axios.post(
          'http://192.168.2.117:8001/test.php',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log('Image uploaded successfully:', uploadResponse.data);
      } else {
        console.log('No image selected');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Upload Image" onPress={uploadImage} />
    </View>
  );
};

export default Test;

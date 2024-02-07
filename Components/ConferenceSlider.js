import React, { useContext } from 'react';
import { View, Image, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import MyContext from './MyContext';

const ConferenceSlider = ({ ConferenceData }) => {
  const { ConferenceData } = useContext(MyContext);

  return (
    <Swiper
      cards={ConferenceData}
      renderCard={(card) => (
        <View>
          <Image
            source={{ uri: card.imageUrl }}
            style={{ borderRadius: 15, width: '100%', aspectRatio: 16 / 9 }}
          />
          <Text>{card.name}</Text>
          {/* Add other content for your card */}
        </View>
      )}
      onSwipedLeft={(index) => console.log('Card swiped left')}
      onSwipedRight={(index) => console.log('Card swiped right')}
      onSwipedAll={() => console.log('All cards have been swiped')}
      cardIndex={0}
      backgroundColor="white"
      stackSize={2}
      animateOverlayLabelsOpacity
      animateCardOpacity
      disableBottomSwipe
      disableTopSwipe
      infinite
    />
  );
};

export default ConferenceSlider;

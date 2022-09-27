import { View, Text,Button ,Image, StatusBar} from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';
import { color } from 'react-native-reanimated';



export default function Onbrd({navigation}) {

    const Dot = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
          backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
        } else {
          backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }
        return (
          <View style={{
              width: 6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor,
            }}
          />         
        );
      };
      
      
      const Done = ({ isLight, ...props }) => (
        <Button
          title={'Done'}
          color={"blue"}
          {...props}
        />
      );
      
      const Skip = ({ isLight, skipLabel, ...props }) => (
        <Button
          title={'Skip'}
          color={""}
          {...props}
        >
          {skipLabel}
        </Button>
      );
      
      const Next = ({ isLight, ...props }) => (
        <Button
          title={'Next'}
          color={"#32B768"}
          {...props}
        />
      );
      
  return (
    
    <Onboarding
    DotComponent={Dot}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    titleStyles={{ color: '#32B768' }} 
    subTitleStyles={{color:"#6B7280"}}

    onSkip={() => navigation.navigate("Home")}
    onDone={() => navigation.navigate("Home")}

    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/image/order.png')} style={{height:300,width:300}}/>,
        title: 'Order Your Food Now',
        subtitle: 'Explore Different variety of Foods best for You.',
        titleStyles: { color: 'red' }, 
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/image/chef.png')} style={{height:300,width:300}} />,
        title: 'Carefully Prepare',
        subtitle: 'Our Chef Carefully make a Delicious Food.',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/image/delivery.png')} style={{height:300,width:300}}/>,
        title: 'Get Fast Delivery',
        subtitle: "Fast Delivery with in few minutes of ordering. ",
      },
    ]}
  />
  
  )
}
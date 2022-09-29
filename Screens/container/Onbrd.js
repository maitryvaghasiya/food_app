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
              borderRadius:10
            }}
          />
          
        );
      };
      
      
      const Done = ({ isLight, ...props }) => (
        <Button
          title={'Done'}
          color={"#106733"}
          {...props}
        />
      );
      
      const Skip = ({ isLight, skipLabel, ...props }) => (
        <Button
          title={'Skip'}
          color={"#6B7280"}
          {...props}
        >
          {skipLabel}
        </Button>
      );
      
      const Next = ({ isLight, ...props }) => (
        <Button
          title={'Next'}
          color={'#106733'}
          {...props}
        />
      );
      
  return (
    
    <Onboarding
    DotComponent={Dot}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    bottomBarColor="#F4F6F7"
    titleStyles={{ color: '#106733' }} 
    subTitleStyles={{color:"#6B7280"}}

    onSkip={() => navigation.navigate("LogIn")}
    onDone={() => navigation.navigate("LogIn")}

    pages={[
      {
        backgroundColor: '#F4F6F7',
        image: <Image source={require('../../assets/image/order.png')} style={{height:300,width:300}}/>,
        title: 'Order Your Food Now',
        subtitle: 'Explore Different variety of Foods best for You.',
         
      },
      {
        backgroundColor: '#F4F6F7',
        image: <Image source={require('../../assets/image/chef.png')} style={{height:300,width:300}} />,
        title: 'Carefully Prepare',
        subtitle: 'Our Chef Carefully make a Delicious Food.',
        
      },
      {
        backgroundColor: '#F4F6F7',
        image: <Image source={require('../../assets/image/delivery.png')} style={{height:300,width:300}}/>,
        title: 'Get Fast Delivery',
        subtitle: "Fast Delivery with in few minutes of ordering. ",
        
      },
    ]}
  />
  
  )
}
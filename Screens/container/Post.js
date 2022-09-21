import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPost } from '../redux/action/post.action';

export default function Post() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost())
  }, [])
  return (
    <View>
      <Text style={{color:"black"}}>Post</Text>
    </View>
  )
}
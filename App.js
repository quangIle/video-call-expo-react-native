import { StatusBar } from "expo-status-bar"
import { useRef, useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import WebView from "react-native-webview" //-ssl-error-skip"
import { Camera } from "expo-camera"
import { Audio } from "expo-av"

import { body, head, html } from "./video-call-html"
import { script } from "./video-call-script"
export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.front)
  const webView = useRef()

  useEffect(() => {
    ;(async () => {
      const microphone = await Audio.requestPermissionsAsync()
      const camera = await Camera.requestCameraPermissionsAsync()
      setHasPermission(
        microphone.status === "granted" && camera.status === "granted"
      )
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  const loadHtml = () => {
    // return `
    // wsConnection = new window.WebSocket("wss://quang-simple-video-call.herokuapp.com/")
    // // wsConnection = new window.WebSocket("wss://192.168.0.12")
    // wsConnection.onopen = () => alert("WebSocket Connection is OPENED")
    // `
    // setTimeout(() => webView.current.injectJavaScript(script), 3000)
    return `
      document.head.innerHTML = \`${head}\`
      document.body.innerHTML = \`${body}\`                
      ${script}
    `
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <WebView
          originWhitelist={["*"]}
          mediaPlaybackRequiresUserAction={true}
          allowsInlineMediaPlayback
          ref={webView}
          source={{
            // uri: "https://websocketstest.com/",
            // }}
            uri: "https://blank.org/",
          }}
          injectedJavaScript={loadHtml()}
          onMessage={(message) => {
            console.log(message.nativeEvent.data)
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

import { View,Text, StyleSheet,TextInput, TouchableOpacity } from "react-native"
import { useFonts } from 'expo-font';

export default function Login({navigation}){
    const [fontsLoaded] = useFonts({
        "Poppins": require("../assets/fonts/Poppins-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }
    
    return (
        <View style={styles.container}>
            <View style={styles.text_wrapper}>
              <Text style={styles.text1}>Jobizz</Text>
              <Text style={styles.text2}>Welcome Back👋</Text>
              <Text style={styles.text3}>Let’s log in. Apply to jobs!</Text>
            </View>

            <View style={{marginTop:"-40px"}}>
                <TextInput style={{backgroundColor:"transparent", border:"1px solid #AFB0B6" , borderRadius:"10px", padding:"10px", marginVertical:"10px", color:"#AFB0B6"}} placeholder="Name"/>
                <TextInput style={{backgroundColor:"transparent", border:"1px solid #AFB0B6" , borderRadius:"10px", padding:"10px", marginVertical:"10px", color:"#AFB0B6"}} placeholder="Email"/>
                <TouchableOpacity style={{backgroundColor:"#356899", width:"100%", borderRadius:"10px",  display:"flex", padding:"10px", marginVertical:"12px", alignItems:"center"}}>
                    <Text style={{color:"#fff", fontWeight:"500"}}>Login</Text>
                </TouchableOpacity>
            </View>

            <center>
            <svg width="237" height="16" style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}} viewBox="0 0 327 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M117.255 5.72C116.605 6.35267 116.28 7.241 116.28 8.385C116.28 9.529 116.605 10.4217 117.255 11.063C117.905 11.7043 118.689 12.025 119.608 12.025C120.526 12.025 121.311 11.7043 121.961 11.063C122.611 10.4217 122.936 9.529 122.936 8.385C122.936 7.241 122.611 6.35267 121.961 5.72C121.311 5.07867 120.526 4.758 119.608 4.758C118.689 4.758 117.905 5.07867 117.255 5.72ZM114.98 8.385C114.98 7.63967 115.11 6.95933 115.37 6.344C115.638 5.72867 115.989 5.226 116.423 4.836C116.865 4.43733 117.359 4.12967 117.905 3.913C118.451 3.69633 119.018 3.588 119.608 3.588C120.197 3.588 120.765 3.69633 121.311 3.913C121.857 4.12967 122.346 4.43733 122.78 4.836C123.222 5.226 123.573 5.72867 123.833 6.344C124.101 6.95933 124.236 7.63967 124.236 8.385C124.236 9.373 124.006 10.2397 123.547 10.985C123.096 11.7303 122.524 12.285 121.831 12.649C121.137 13.013 120.396 13.195 119.608 13.195C118.819 13.195 118.078 13.013 117.385 12.649C116.691 12.285 116.115 11.7303 115.656 10.985C115.205 10.2397 114.98 9.373 114.98 8.385ZM129.328 6.682V7.982C129.146 7.956 128.969 7.943 128.795 7.943C127.651 7.943 127.079 8.58433 127.079 9.867V13H125.857V6.747H127.053V7.839C127.435 7.04167 128.059 6.643 128.925 6.643C129.064 6.643 129.198 6.656 129.328 6.682ZM136.507 7.683C135.978 7.683 135.527 7.87367 135.155 8.255C134.791 8.63633 134.609 9.17367 134.609 9.867C134.609 10.5517 134.791 11.089 135.155 11.479C135.527 11.869 135.982 12.064 136.52 12.064C137.04 12.064 137.434 11.934 137.703 11.674C137.98 11.414 138.166 11.115 138.262 10.777L139.341 11.245C139.167 11.765 138.838 12.22 138.353 12.61C137.876 13 137.265 13.195 136.52 13.195C135.61 13.195 134.856 12.8787 134.258 12.246C133.66 11.6133 133.361 10.8203 133.361 9.867C133.361 8.89633 133.66 8.10333 134.258 7.488C134.856 6.864 135.605 6.552 136.507 6.552C137.269 6.552 137.885 6.747 138.353 7.137C138.829 7.527 139.141 7.995 139.289 8.541L138.184 9.009C138.088 8.645 137.906 8.333 137.638 8.073C137.369 7.813 136.992 7.683 136.507 7.683ZM141.998 11.518C142.379 11.908 142.843 12.103 143.389 12.103C143.935 12.103 144.394 11.908 144.767 11.518C145.148 11.1193 145.339 10.569 145.339 9.867C145.339 9.17367 145.148 8.632 144.767 8.242C144.394 7.84333 143.935 7.644 143.389 7.644C142.843 7.644 142.379 7.84333 141.998 8.242C141.625 8.632 141.439 9.17367 141.439 9.867C141.439 10.569 141.625 11.1193 141.998 11.518ZM141.088 7.501C141.695 6.86833 142.462 6.552 143.389 6.552C144.316 6.552 145.079 6.86833 145.677 7.501C146.284 8.125 146.587 8.91367 146.587 9.867C146.587 10.829 146.288 11.6263 145.69 12.259C145.092 12.883 144.325 13.195 143.389 13.195C142.453 13.195 141.686 12.883 141.088 12.259C140.49 11.6263 140.191 10.829 140.191 9.867C140.191 8.91367 140.49 8.125 141.088 7.501ZM149.372 9.386V13H148.15V6.747H149.346V7.644C149.762 6.92467 150.404 6.565 151.27 6.565C151.99 6.565 152.54 6.79467 152.921 7.254C153.311 7.71333 153.506 8.307 153.506 9.035V13H152.284V9.243C152.284 8.19433 151.799 7.67 150.828 7.67C150.369 7.67 150.009 7.83467 149.749 8.164C149.498 8.48467 149.372 8.892 149.372 9.386ZM157.088 4.771V6.747H158.44V7.852H157.088V11.102C157.088 11.3967 157.153 11.6133 157.283 11.752C157.422 11.8907 157.647 11.96 157.959 11.96C158.141 11.96 158.301 11.9427 158.44 11.908V12.948C158.232 13.026 157.955 13.065 157.608 13.065C157.071 13.065 156.646 12.909 156.334 12.597C156.022 12.285 155.866 11.8473 155.866 11.284V7.852H154.67V6.747H155.008C155.329 6.747 155.567 6.66033 155.723 6.487C155.888 6.305 155.97 6.071 155.97 5.785V4.771H157.088ZM161.28 13H160.071V6.747H161.28V13ZM160.045 5.005C159.881 4.83167 159.798 4.62367 159.798 4.381C159.798 4.13833 159.881 3.93033 160.045 3.757C160.219 3.58367 160.427 3.497 160.669 3.497C160.912 3.497 161.12 3.58367 161.293 3.757C161.467 3.92167 161.553 4.12967 161.553 4.381C161.553 4.62367 161.467 4.83167 161.293 5.005C161.12 5.16967 160.912 5.252 160.669 5.252C160.427 5.252 160.219 5.16967 160.045 5.005ZM164.581 9.386V13H163.359V6.747H164.555V7.644C164.971 6.92467 165.613 6.565 166.479 6.565C167.199 6.565 167.749 6.79467 168.13 7.254C168.52 7.71333 168.715 8.307 168.715 9.035V13H167.493V9.243C167.493 8.19433 167.008 7.67 166.037 7.67C165.578 7.67 165.218 7.83467 164.958 8.164C164.707 8.48467 164.581 8.892 164.581 9.386ZM174.653 12.246C174.489 12.558 174.237 12.7963 173.899 12.961C173.561 13.117 173.197 13.195 172.807 13.195C172.097 13.195 171.529 12.961 171.104 12.493C170.68 12.0163 170.467 11.414 170.467 10.686V6.747H171.689V10.504C171.689 10.972 171.802 11.3577 172.027 11.661C172.261 11.9643 172.621 12.116 173.106 12.116C173.592 12.116 173.96 11.973 174.211 11.687C174.463 11.3923 174.588 11.0023 174.588 10.517V6.747H175.81V11.843C175.81 12.2503 175.832 12.636 175.875 13H174.705C174.671 12.8093 174.653 12.558 174.653 12.246ZM178.625 9.23H182.044C182.027 8.762 181.871 8.38067 181.576 8.086C181.281 7.78267 180.865 7.631 180.328 7.631C179.843 7.631 179.444 7.79133 179.132 8.112C178.82 8.424 178.651 8.79667 178.625 9.23ZM182.226 10.855L183.279 11.219C183.097 11.7997 182.759 12.2763 182.265 12.649C181.771 13.013 181.173 13.195 180.471 13.195C179.596 13.195 178.85 12.896 178.235 12.298C177.628 11.6913 177.325 10.8767 177.325 9.854C177.325 8.90067 177.62 8.112 178.209 7.488C178.798 6.864 179.5 6.552 180.315 6.552C181.26 6.552 181.996 6.851 182.525 7.449C183.054 8.03833 183.318 8.83133 183.318 9.828C183.318 9.984 183.309 10.114 183.292 10.218H178.586C178.595 10.7727 178.777 11.2277 179.132 11.583C179.496 11.9383 179.942 12.116 180.471 12.116C181.364 12.116 181.949 11.6957 182.226 10.855ZM191.651 6.747H192.912L194.537 11.453L195.915 6.747H197.202L195.174 13H193.913L192.249 8.242L190.624 13H189.337L187.283 6.747H188.622L190.026 11.453L191.651 6.747ZM199.645 13H198.436V6.747H199.645V13ZM198.41 5.005C198.246 4.83167 198.163 4.62367 198.163 4.381C198.163 4.13833 198.246 3.93033 198.41 3.757C198.584 3.58367 198.792 3.497 199.034 3.497C199.277 3.497 199.485 3.58367 199.658 3.757C199.832 3.92167 199.918 4.12967 199.918 4.381C199.918 4.62367 199.832 4.83167 199.658 5.005C199.485 5.16967 199.277 5.252 199.034 5.252C198.792 5.252 198.584 5.16967 198.41 5.005ZM203.363 4.771V6.747H204.715V7.852H203.363V11.102C203.363 11.3967 203.428 11.6133 203.558 11.752C203.696 11.8907 203.922 11.96 204.234 11.96C204.416 11.96 204.576 11.9427 204.715 11.908V12.948C204.507 13.026 204.229 13.065 203.883 13.065C203.345 13.065 202.921 12.909 202.609 12.597C202.297 12.285 202.141 11.8473 202.141 11.284V7.852H200.945V6.747H201.283C201.603 6.747 201.842 6.66033 201.998 6.487C202.162 6.305 202.245 6.071 202.245 5.785V4.771H203.363ZM207.568 9.321V13H206.346V3.588H207.568V7.475C207.984 6.86833 208.616 6.565 209.466 6.565C210.185 6.565 210.735 6.79467 211.117 7.254C211.507 7.71333 211.702 8.307 211.702 9.035V13H210.48V9.243C210.48 8.19433 209.994 7.67 209.024 7.67C208.573 7.67 208.222 7.826 207.971 8.138C207.719 8.44133 207.585 8.83567 207.568 9.321Z" fill="#AFB0B6"/>
            <line y1="7.75" x2="98" y2="7.75" stroke="#AFB0B6" stroke-width="0.5"/>
            <line x1="229" y1="7.75" x2="327" y2="7.74999" stroke="#AFB0B6" stroke-width="0.5"/>
            </svg>
            </center>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#FAFAFD",
        paddingHorizontal:"20px",
        paddingVertical:"20px",
        fontFamily: "Poppins"
    },
    text_wrapper : {
        marginVertical:"100px",
    },
    text1: {
        color:"#356899",
        fontSize:"22px",
        lineHeight:"33px",
        fontWeight:"600"
    },
    text2:{
        color:"#0D0D26",
        fontSize:"24px",
        lineHeight:"33px",
        fontWeight:"600"
    },
    text3 : {
        fontWeight:"400",
        lineHeight:"23px"
    }
})
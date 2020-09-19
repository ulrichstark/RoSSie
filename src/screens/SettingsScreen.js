import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { Layout, TopNavigation, TopNavigationAction, Icon, Button, Divider, Toggle } from "@ui-kitten/components";
import BottomNavBar from "../components/BottomNavBar";
import { ScrollView } from "react-native-gesture-handler";
import FeedFetcher from "../service/FeedFetcher";

const SettingsScreen = ({ navigation }) => {
	const [checkedOfflineMode, setCheckedOfflineMode] = React.useState(false);
	const [checkedMobileDataMode, setCheckedMobileDataMode] = React.useState(false);

	const onCheckedOfflineMode = (isChecked) => {
		setCheckedOfflineMode(isChecked);
	};
	const onCheckedMobileDataMode = (isChecked) => {
		setCheckedMobileDataMode(isChecked);
	};

	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView style={styles.container}>
				<TopNavigation title="Settings" alignment="center" />
				<ScrollView style={styles.innerContainer}>
					<Text style={{ margin: 10, marginTop: 20 }}>Storage</Text>
					<View style={styles.block}>
						<Button
							appearance="ghost"
							style={styles.btn}
							onPress={() => FeedFetcher.clearOfflineFeedStorage()}
						>
							<Text style={styles.text}>Delete Offline Feed Storage</Text>
						</Button>
						<Divider />
						<Button
							appearance="ghost"
							style={styles.btn}
							onPress={() => FeedFetcher.clearFeedLinkListFromStorage()}
						>
							<Text style={styles.text}>Delete all FeedLinks</Text>
						</Button>
						<Divider />
						<Button appearance="ghost" style={styles.btn} onPress={() => FeedFetcher.clearAppData()}>
							<Text style={styles.text}>Clear App Cache</Text>
						</Button>
					</View>
					{/* <Text style={{ margin: 10, marginTop: 20 }}>Download</Text>
					<View style={styles.block}>
						<View style={styles.rowContainer}>
							<Text style={styles.text}>Offline Mode</Text>
							<Toggle checked={checkedOfflineMode} onChange={onCheckedOfflineMode}></Toggle>
						</View>
						<Divider />
						<View style={styles.rowContainer}>
							<Text style={styles.text}>Download with mobile data</Text>
							<Toggle checked={checkedMobileDataMode} onChange={onCheckedMobileDataMode}></Toggle>
						</View>
					</View>

					<Text style={{ margin: 10, marginTop: 20 }}>Main</Text>
					<View style={styles.block}>
						<Button appearance="ghost" style={styles.btn}>
							<Text style={styles.text}>Reset Settings</Text>
						</Button>
					</View> */}
				</ScrollView>

				<BottomNavBar index={2} navigation={navigation} />
			</SafeAreaView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	rowContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		height: 45,
		alignContent: "center",
		alignItems: "center",
		marginHorizontal: 20,
	},
	block: {
		backgroundColor: "#fff",
	},
	text: {
		color: "black",
		fontWeight: "normal",
		fontSize: 15,
		textAlign: "center",
	},
	btn: {
		textAlign: "left",
		display: "flex",
		justifyContent: "flex-start",
	},
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	innerContainer: {
		backgroundColor: "#eee",
	},
});

export default SettingsScreen;
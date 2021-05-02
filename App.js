import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Button } from "native-base";

function Notees() {
	return (
		<View
			style={{
				flexDirection: "row",
				width: "100%",
				justifyContent: "space-evenly",
				alignItems: "center",
				marginVertical: 10,
			}}>
			<TextInput
				style={{
					borderWidth: 1,
					width: "20%",
					borderRadius: 10,
					borderColor: "#888",
					height: 30,
					textAlign: "center",
					color: "#555",
				}}
				autoCorrect={false}
				keyboardType={"numeric"}
				placeholder={"Nota"}
				//onChangeText={onChangeText}
				//value={text}
			/>
			<TextInput
				style={{
					borderWidth: 1,
					width: "20%",
					borderRadius: 10,
					borderColor: "#888",
					height: 30,
					textAlign: "center",
					color: "#555",
				}}
				autoCorrect={false}
				keyboardType={"numeric"}
				placeholder={"pes (en %)"}
				//onChangeText={onChangeText}
				//value={text}
			/>
			<Button
				style={{
					width: 35,
					height: 35,
					//borderRadius: 15,
					flexDirection: "row",
					justifyContent: "center",
					textAlignVertical: "center",
					textAlign: "center",
					alignSelf: "center",
				}}>
				<Text
					style={{
						color: "#fff",
						fontSize: 20,
						fontWeight: "700",
						textAlign: "center",
					}}>
					+
				</Text>
			</Button>
		</View>
	);
}
function AssigCard() {
	var Hide = false;
	return (
		<View
			style={{
				flex: 1,
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<TextInput
				style={{
					borderWidth: 1,
					width: "80%",
					borderRadius: 10,
					borderColor: "#888",
					height: 30,
					textAlign: "center",
					color: "#555",
				}}
				autoCorrect={false}
				placeholder={"Assignatura"}
				//onChangeText={onChangeText}
				//value={text}
			/>
			<View
				style={{
					width: "100%",
					justifyContent: "space-evenly",
					paddingVertical: 20,
				}}>
				<Notees />
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						justifyContent: "space-evenly",
					}}>
					<Button
						success
						style={{
							marginTop: 10,
							width: 130,
							height: 40,
							borderRadius: 15,
							flexDirection: "row",
							justifyContent: "center",
							textAlignVertical: "center",
							textAlign: "center",
							alignSelf: "center",
						}}>
						<Text
							style={{
								color: "#fff",
								fontSize: 20,
								fontWeight: "700",
								textAlign: "center",
							}}>
							Save
						</Text>
					</Button>
				</View>
			</View>
		</View>
	);
}
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			assigSave: false,
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
					}}>
					<Text
						style={{
							fontSize: 40,
							fontWeight: "700",
							color: "#555",
						}}>
						Marks keeper
					</Text>
				</View>
				<View
					style={{
						flex: 2,
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<AssigCard />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dedede",
		alignItems: "center",
		justifyContent: "center",
	},
});

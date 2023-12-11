// import {nfcManager, NfcTech} from 'react-native-nfc-manager'
// import {Platform} from "react-native";
//
// export class NFC {
//     static start = () => {
//         nfcManager.start();
//     }
//     static cleanUp = () => {
//         nfcManager.cancelTechnologyRequest().catch(() => 0);
//     }
//     static readData = async () => {
//         try {
//             const tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
//             await nfcManager.requestTechnology(tech, {alertMessage: 'Ready to magic'});
//             const command = Platform.OS === 'ios' ? nfcManager.sendMifareCommandIOS : nfcManager.transceive;
//             let response = await command([0x3a, 4, 4]);
//             const payloadLength = parseInt(response.toString().split(",")[1]);
//             const payloadPages = Math.ceil(payloadLength / 4);
//             const startPage = 5;
//             const endPage = startPage + payloadPages - 1;
//
//             response = await command([0x3A, startPage, endPage]);
//             const bytes = response.toString().split(",");
//             let text = "";
//
//             for (let i = 0; i < bytes.length; i++) {
//                 if (i < 5) {
//                     continue;
//                 }
//                 if (parseInt(bytes[i]) === 254) {
//                     break;
//                 }
//                 text = text + String.fromCharCode(parseInt(bytes[i]));
//             }
//
//             this.cleanUp();
//             return text;
//         } catch (error: any) {
//             this.cleanUp();
//             return error.message;
//         }
//     }
// }
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name riot rural undo harvest narrow fresh gauge'; 
let testAccounts = [
"0xaf6dcbaf963cc6540cad7101c66390e1a7c482fb886fbc3af7159398e8504ad5",
"0xd6f1b20cc49365e985990038092e6181856285788777bb4551355fe72820e6e1",
"0x06689c5273afd0e36059cf28074b66370fb1f3329f89d54744088c0a695046fe",
"0x0708b91fad4ad72be9d0c076fd922aa4b7e6881cdec7d068012f0cdf3f9f8e1b",
"0xd2712e57cedc25ba240c43da6f26d08e9b5aee5ed79c4c394f960aeb3e56fd2b",
"0xf3b27244e7c4773a372b4e0c2a2aee625ae167a4734f1f3ed57852c6919125fb",
"0x4f4fccf511559f760eaac483278db93b01dc0b6d2f263dd7617e53941e8fd9e0",
"0xb5335fdbb77243d3f2a9e4244191c4d683a742dca11a9ce6a74eae82069184d7",
"0x097d0946e980bbd8cf7eeb3d9f0bf6c538657a575ee0c44353fb8b11921bf49a",
"0x5fbb07c4e6ccf28046010424be369d5c6078e90ed415857653d508cf0a69124b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

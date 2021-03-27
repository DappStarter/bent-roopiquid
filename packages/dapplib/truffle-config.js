require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot cheap response script comfort install enroll army genre'; 
let testAccounts = [
"0x1ba31e5dc1be508a4e4ef1543b3f0a1e31c767a4586fe9afdb11b25e8e7cb9b0",
"0x789dbe292e2d56fe2b26b18fa9a05470ae1f00157dd71da7f9ff47f355830288",
"0x15765a91385fa65b3450b73d6e1b6013a2d5af8d261b81eda9e50f67afb734d3",
"0x1c381df95fe9224c7a8158c0a792468e6a624e2a515fc87a6567dc20a979bf42",
"0xa4e213ecc610ea57383bb5c4039430e2be43c84d2ab651d692e95c1fd4ca40e8",
"0xa3155f3d3f3dd4aa5352f0d0a216f9286e78d2fc4939c2af8d6fbe468db60574",
"0xb092407881d4db2d47ea84d13ddbac094cba0e07b8395e6e468c68fa1cdb28b4",
"0xab4526a37f9ad14bced16cfc7f1f809d8407d503bbde8dc5116f03d34938f6af",
"0x49f7dc60e4d8ff67551ce335088f1f33fda72bc109ad6b0df383e791394a950c",
"0xf3dbe2024eb8ec8bcccfc996145a4b2473eb5cf302e662303d41df6841743ae3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

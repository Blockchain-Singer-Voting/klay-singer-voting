const Web3 = require('web3')
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const abiToken = require('../artifacts/contracts/SVToken.sol/SVToken.json');
const abi = require('../artifacts/contracts/SingerVoting.sol/SingerVoting.json');

// for producting
const privateKeys = [
    process.env.ACCOUNT
]
let provider = new HDWalletProvider(
    privateKeys,
    `https://klaytn-baobab.blockpi.network/v1/rpc/public`,
    0,
    1
);
const web3 = new Web3(provider);

async function mint() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0xBd3E9aE132E25A5c10a5872299E83548eD7F0DaC",
        )
        const tx = await contract.methods.mint("0xf503bCfF9528F592A5b1644C0932BE10cE4991A9", "999999999999999999999999999");
        await tx.estimateGas({
            from: "0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898"
        });
        await tx.send({
            from: '0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898'
        })
    } catch (e) {
        console.log(e);
    }
}

async function checkBlance() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0xBd3E9aE132E25A5c10a5872299E83548eD7F0DaC",
        )
        const tx = await contract.methods.balanceOf("0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function getStatus() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x410592277eba6310b75d53E7d2F2dC6997f0Ec35",
        )
        const tx = await contract.methods.imageId("2").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function approve() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0xBd3E9aE132E25A5c10a5872299E83548eD7F0DaC",
        )
        const tx = await contract.methods.approve("0x410592277eba6310b75d53E7d2F2dC6997f0Ec35", "999999999999999999999999999999");
        await tx.estimateGas({
            from: "0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898",
        });
        await tx.send({
            from: '0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898'
        })
    } catch (e) {
        console.log(e);
    }
}


async function updateTimeVoting() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x410592277eba6310b75d53E7d2F2dC6997f0Ec35",
        )
        const tx = await contract.methods.updateTimeVoting("", "");
        await tx.estimateGas({
            from: "0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898",
        });
        await tx.send({
            from: '0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898'
        })
    } catch (e) {
        console.log(e);
    }
}

async function vote() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x410592277eba6310b75d53E7d2F2dC6997f0Ec35",
        )
        const tx = await contract.methods.vote("100000000000000000", "1");
        await tx.estimateGas({
            from: "0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898",
        });
        await tx.send({
            from: '0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898'
        })
    } catch (e) {
        console.log(e);
    }
}

async function withdraw() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x410592277eba6310b75d53E7d2F2dC6997f0Ec35",
        )
        const tx = await contract.methods.withdraw();
        await tx.estimateGas({
            from: "0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898",
        });
        await tx.send({
            from: '0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898'
        })
    } catch (e) {
        console.log(e);
    }
}

// mint()
// checkBlance()
// approve()
// vote()
// updateTimeVoting()
// withdraw()
getStatus()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
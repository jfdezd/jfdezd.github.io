(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{32:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dateFrom","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dateTo","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"string","name":"company","type":"string"},{"indexed":false,"internalType":"string","name":"country","type":"string"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"uint256","name":"dateFrom","type":"uint256"},{"internalType":"uint256","name":"dateTo","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"company","type":"string"},{"internalType":"string","name":"country","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dateFrom","type":"uint256"},{"internalType":"uint256","name":"_dateTo","type":"uint256"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_company","type":"string"},{"internalType":"string","name":"_country","type":"string"},{"internalType":"string","name":"_description","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b506200005d6040518060400160405280601981526020017f4920414d20534d41525420434f4e54524143542e20504f472e000000000000008152506200006360201b620006161760201c565b620001f7565b62000103816040516024016200007a919062000170565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200010660201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200013c8262000194565b6200014881856200019f565b93506200015a818560208601620001b0565b6200016581620001e6565b840191505092915050565b600060208201905081810360008301526200018c81846200012f565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001d0578082015181840152602081019050620001b3565b83811115620001e0576000848401525b50505050565b6000601f19601f8301169050919050565b61105580620002076000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063526f1564146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b9190610933565b61009e565b005b61006a6102af565b6040516100779190610cd1565b60405180910390f35b6100886102fa565b6040516100959190610c18565b60405180910390f35b60016000808282546100b09190610e33565b925050819055506100f76040518060400160405280601681526020017f257320776176656420772f206d6573736167652025730000000000000000000081525033866106af565b60016040518061010001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200188815260200187815260200186815260200185815260200184815260200183815260200142815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030190805190602001906101e9929190610813565b506080820151816004019080519060200190610206929190610813565b5060a0820151816005019080519060200190610223929190610813565b5060c0820151816006019080519060200190610240929190610813565b5060e0820151816007015550503373ffffffffffffffffffffffffffffffffffffffff167fae3308ebe1d19816fa735f2ca6bb4d3b7fc784950fb28f522725a5415bf722d44288888888888860405161029f9796959493929190610cec565b60405180910390a2505050505050565b60006102f26040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461074e565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561060d5783829060005260206000209060080201604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820180546103bc90610f07565b80601f01602080910402602001604051908101604052809291908181526020018280546103e890610f07565b80156104355780601f1061040a57610100808354040283529160200191610435565b820191906000526020600020905b81548152906001019060200180831161041857829003601f168201915b5050505050815260200160048201805461044e90610f07565b80601f016020809104026020016040519081016040528092919081815260200182805461047a90610f07565b80156104c75780601f1061049c576101008083540402835291602001916104c7565b820191906000526020600020905b8154815290600101906020018083116104aa57829003601f168201915b505050505081526020016005820180546104e090610f07565b80601f016020809104026020016040519081016040528092919081815260200182805461050c90610f07565b80156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b5050505050815260200160068201805461057290610f07565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90610f07565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b505050505081526020016007820154815250508152602001906001019061031e565b50505050905090565b6106ac8160405160240161062a9190610c3a565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107ea565b50565b6107498383836040516024016106c793929190610c5c565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107ea565b505050565b6107e68282604051602401610764929190610ca1565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107ea565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461081f90610f07565b90600052602060002090601f0160209004810192826108415760008555610888565b82601f1061085a57805160ff1916838001178555610888565b82800160010185558215610888579182015b8281111561088757825182559160200191906001019061086c565b5b5090506108959190610899565b5090565b5b808211156108b257600081600090555060010161089a565b5090565b60006108c96108c484610d9c565b610d77565b9050828152602081018484840111156108e157600080fd5b6108ec848285610ec5565b509392505050565b600082601f83011261090557600080fd5b81356109158482602086016108b6565b91505092915050565b60008135905061092d81611008565b92915050565b60008060008060008060c0878903121561094c57600080fd5b600061095a89828a0161091e565b965050602061096b89828a0161091e565b955050604087013567ffffffffffffffff81111561098857600080fd5b61099489828a016108f4565b945050606087013567ffffffffffffffff8111156109b157600080fd5b6109bd89828a016108f4565b935050608087013567ffffffffffffffff8111156109da57600080fd5b6109e689828a016108f4565b92505060a087013567ffffffffffffffff811115610a0357600080fd5b610a0f89828a016108f4565b9150509295509295509295565b6000610a288383610b35565b905092915050565b610a3981610e89565b82525050565b610a4881610e89565b82525050565b6000610a5982610ddd565b610a638185610e00565b935083602082028501610a7585610dcd565b8060005b85811015610ab15784840389528151610a928582610a1c565b9450610a9d83610df3565b925060208a01995050600181019050610a79565b50829750879550505050505092915050565b6000610ace82610de8565b610ad88185610e11565b9350610ae8818560208601610ed4565b610af181610ff7565b840191505092915050565b6000610b0782610de8565b610b118185610e22565b9350610b21818560208601610ed4565b610b2a81610ff7565b840191505092915050565b600061010083016000830151610b4e6000860182610a30565b506020830151610b616020860182610bfa565b506040830151610b746040860182610bfa565b5060608301518482036060860152610b8c8282610ac3565b91505060808301518482036080860152610ba68282610ac3565b91505060a083015184820360a0860152610bc08282610ac3565b91505060c083015184820360c0860152610bda8282610ac3565b91505060e0830151610bef60e0860182610bfa565b508091505092915050565b610c0381610ebb565b82525050565b610c1281610ebb565b82525050565b60006020820190508181036000830152610c328184610a4e565b905092915050565b60006020820190508181036000830152610c548184610afc565b905092915050565b60006060820190508181036000830152610c768186610afc565b9050610c856020830185610a3f565b8181036040830152610c978184610afc565b9050949350505050565b60006040820190508181036000830152610cbb8185610afc565b9050610cca6020830184610c09565b9392505050565b6000602082019050610ce66000830184610c09565b92915050565b600060e082019050610d01600083018a610c09565b610d0e6020830189610c09565b610d1b6040830188610c09565b8181036060830152610d2d8187610afc565b90508181036080830152610d418186610afc565b905081810360a0830152610d558185610afc565b905081810360c0830152610d698184610afc565b905098975050505050505050565b6000610d81610d92565b9050610d8d8282610f39565b919050565b6000604051905090565b600067ffffffffffffffff821115610db757610db6610fc8565b5b610dc082610ff7565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e3e82610ebb565b9150610e4983610ebb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e7e57610e7d610f6a565b5b828201905092915050565b6000610e9482610e9b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ef2578082015181840152602081019050610ed7565b83811115610f01576000848401525b50505050565b60006002820490506001821680610f1f57607f821691505b60208210811415610f3357610f32610f99565b5b50919050565b610f4282610ff7565b810181811067ffffffffffffffff82111715610f6157610f60610fc8565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61101181610ebb565b811461101c57600080fd5b5056fea2646970667358221220761379b569f2dac9d442550054aa56bf31b2338157cb7b021d0f354172e2dd8f64736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063526f1564146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b9190610933565b61009e565b005b61006a6102af565b6040516100779190610cd1565b60405180910390f35b6100886102fa565b6040516100959190610c18565b60405180910390f35b60016000808282546100b09190610e33565b925050819055506100f76040518060400160405280601681526020017f257320776176656420772f206d6573736167652025730000000000000000000081525033866106af565b60016040518061010001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200188815260200187815260200186815260200185815260200184815260200183815260200142815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030190805190602001906101e9929190610813565b506080820151816004019080519060200190610206929190610813565b5060a0820151816005019080519060200190610223929190610813565b5060c0820151816006019080519060200190610240929190610813565b5060e0820151816007015550503373ffffffffffffffffffffffffffffffffffffffff167fae3308ebe1d19816fa735f2ca6bb4d3b7fc784950fb28f522725a5415bf722d44288888888888860405161029f9796959493929190610cec565b60405180910390a2505050505050565b60006102f26040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461074e565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561060d5783829060005260206000209060080201604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820180546103bc90610f07565b80601f01602080910402602001604051908101604052809291908181526020018280546103e890610f07565b80156104355780601f1061040a57610100808354040283529160200191610435565b820191906000526020600020905b81548152906001019060200180831161041857829003601f168201915b5050505050815260200160048201805461044e90610f07565b80601f016020809104026020016040519081016040528092919081815260200182805461047a90610f07565b80156104c75780601f1061049c576101008083540402835291602001916104c7565b820191906000526020600020905b8154815290600101906020018083116104aa57829003601f168201915b505050505081526020016005820180546104e090610f07565b80601f016020809104026020016040519081016040528092919081815260200182805461050c90610f07565b80156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b5050505050815260200160068201805461057290610f07565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90610f07565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b505050505081526020016007820154815250508152602001906001019061031e565b50505050905090565b6106ac8160405160240161062a9190610c3a565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107ea565b50565b6107498383836040516024016106c793929190610c5c565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107ea565b505050565b6107e68282604051602401610764929190610ca1565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107ea565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461081f90610f07565b90600052602060002090601f0160209004810192826108415760008555610888565b82601f1061085a57805160ff1916838001178555610888565b82800160010185558215610888579182015b8281111561088757825182559160200191906001019061086c565b5b5090506108959190610899565b5090565b5b808211156108b257600081600090555060010161089a565b5090565b60006108c96108c484610d9c565b610d77565b9050828152602081018484840111156108e157600080fd5b6108ec848285610ec5565b509392505050565b600082601f83011261090557600080fd5b81356109158482602086016108b6565b91505092915050565b60008135905061092d81611008565b92915050565b60008060008060008060c0878903121561094c57600080fd5b600061095a89828a0161091e565b965050602061096b89828a0161091e565b955050604087013567ffffffffffffffff81111561098857600080fd5b61099489828a016108f4565b945050606087013567ffffffffffffffff8111156109b157600080fd5b6109bd89828a016108f4565b935050608087013567ffffffffffffffff8111156109da57600080fd5b6109e689828a016108f4565b92505060a087013567ffffffffffffffff811115610a0357600080fd5b610a0f89828a016108f4565b9150509295509295509295565b6000610a288383610b35565b905092915050565b610a3981610e89565b82525050565b610a4881610e89565b82525050565b6000610a5982610ddd565b610a638185610e00565b935083602082028501610a7585610dcd565b8060005b85811015610ab15784840389528151610a928582610a1c565b9450610a9d83610df3565b925060208a01995050600181019050610a79565b50829750879550505050505092915050565b6000610ace82610de8565b610ad88185610e11565b9350610ae8818560208601610ed4565b610af181610ff7565b840191505092915050565b6000610b0782610de8565b610b118185610e22565b9350610b21818560208601610ed4565b610b2a81610ff7565b840191505092915050565b600061010083016000830151610b4e6000860182610a30565b506020830151610b616020860182610bfa565b506040830151610b746040860182610bfa565b5060608301518482036060860152610b8c8282610ac3565b91505060808301518482036080860152610ba68282610ac3565b91505060a083015184820360a0860152610bc08282610ac3565b91505060c083015184820360c0860152610bda8282610ac3565b91505060e0830151610bef60e0860182610bfa565b508091505092915050565b610c0381610ebb565b82525050565b610c1281610ebb565b82525050565b60006020820190508181036000830152610c328184610a4e565b905092915050565b60006020820190508181036000830152610c548184610afc565b905092915050565b60006060820190508181036000830152610c768186610afc565b9050610c856020830185610a3f565b8181036040830152610c978184610afc565b9050949350505050565b60006040820190508181036000830152610cbb8185610afc565b9050610cca6020830184610c09565b9392505050565b6000602082019050610ce66000830184610c09565b92915050565b600060e082019050610d01600083018a610c09565b610d0e6020830189610c09565b610d1b6040830188610c09565b8181036060830152610d2d8187610afc565b90508181036080830152610d418186610afc565b905081810360a0830152610d558185610afc565b905081810360c0830152610d698184610afc565b905098975050505050505050565b6000610d81610d92565b9050610d8d8282610f39565b919050565b6000604051905090565b600067ffffffffffffffff821115610db757610db6610fc8565b5b610dc082610ff7565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e3e82610ebb565b9150610e4983610ebb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e7e57610e7d610f6a565b5b828201905092915050565b6000610e9482610e9b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ef2578082015181840152602081019050610ed7565b83811115610f01576000848401525b50505050565b60006002820490506001821680610f1f57607f821691505b60208210811415610f3357610f32610f99565b5b50919050565b610f4282610ff7565b810181811067ffffffffffffffff82111715610f6157610f60610fc8565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61101181610ebb565b811461101c57600080fd5b5056fea2646970667358221220761379b569f2dac9d442550054aa56bf31b2338157cb7b021d0f354172e2dd8f64736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},38:function(f,e,b){f.exports=b(57)},43:function(f,e,b){},45:function(f,e,b){},47:function(f,e){},57:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),n=b(31),c=b.n(n),r=(b(43),b(2)),d=b.n(r),i=b(18),o=b(24),s=(b(45),b(19)),l=b(32),u=function(){var f=Object(a.useState)(""),e=Object(o.a)(f,2),b=e[0],n=e[1],c=Object(a.useState)([]),r=Object(o.a)(c,2),u=r[0],p=r[1],m=l.abi,y=function(){var f=Object(i.a)(d.a.mark((function f(){var e,b,a,t;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=7;break}return console.log("Make sure you have metamask!"),f.abrupt("return");case 7:console.log("We have the ethereum object",b);case 8:return f.next=10,b.request({method:"eth_accounts"});case 10:0!==(a=f.sent).length?(t=a[0],console.log("Found an authorized account:",t),n(t),g()):console.log("No authorized account found"),f.next=17;break;case 14:f.prev=14,f.t0=f.catch(0),console.log(f.t0);case 17:case"end":return f.stop()}}),f,null,[[0,14]])})));return function(){return f.apply(this,arguments)}}(),v=function(){var f=Object(i.a)(d.a.mark((function f(){var e,b,a;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:a=f.sent,console.log("Connected",a[0]),n(a[0]),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),g=function(){var f=Object(i.a)(d.a.mark((function f(){var e,b,a,t,n,c,r;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=14;break}return a=new s.a.providers.Web3Provider(b),t=a.getSigner(),n=new s.a.Contract("0xE002F4488c1eC6FCE1Bf80504B7CEC475432B0f0",m,t),f.next=8,n.getAllWaves();case 8:c=f.sent,r=[],c.forEach((function(f){r.push({address:f.waver,dateFrom:new Date(1e3*f.dateFrom),dateTo:new Date(1e3*f.dateTo),title:f.title,company:f.company,country:f.country,description:f.description,timestamp:new Date(1e3*f.timestamp)})})),p(r),f.next=15;break;case 14:console.log("Ethereum object doesn't exist!");case 15:f.next=20;break;case 17:f.prev=17,f.t0=f.catch(0),console.log(f.t0);case 20:case"end":return f.stop()}}),f,null,[[0,17]])})));return function(){return f.apply(this,arguments)}}(),h=function(){var f=Object(i.a)(d.a.mark((function f(){var e,b,a,t,n,c,r;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=23;break}return a=new s.a.providers.Web3Provider(b),t=a.getSigner(),n=new s.a.Contract("0xE002F4488c1eC6FCE1Bf80504B7CEC475432B0f0",m,t),f.next=8,n.getTotalWaves();case 8:return c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),f.next=12,n.wave(5184e4,519e5,"titulo!","empresa","pais","descripcion");case 12:return r=f.sent,console.log("Mining...",r.hash),f.next=16,r.wait();case 16:return console.log("Mined -- ",r.hash),f.next=19,n.getTotalWaves();case 19:c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),f.next=24;break;case 23:console.log("Ethereum object doesn't exist!");case 24:f.next=29;break;case 26:f.prev=26,f.t0=f.catch(0),console.log(f.t0);case 29:case"end":return f.stop()}}),f,null,[[0,26]])})));return function(){return f.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[]),t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("div",{className:"header"}),t.a.createElement("div",{className:"bio"},"AMAZING TUTORIAL!"),t.a.createElement("button",{className:"waveButton",onClick:h},"Wave at Me"),!b&&t.a.createElement("button",{className:"waveButton",onClick:v},"Connect Wallet"),u.map((function(f,e){return t.a.createElement("div",{key:e,style:{backgroundColor:"OldLace",marginTop:"16px",padding:"8px"}},t.a.createElement("div",null,"Address: ",f.address),t.a.createElement("div",null,"From: ",f.dateFrom.toString()),t.a.createElement("div",null,"To: ",f.dateTo.toString()),t.a.createElement("div",null,"Title: ",f.title),t.a.createElement("div",null,"Company: ",f.company),t.a.createElement("div",null,"Country: ",f.country),t.a.createElement("div",null,"Description: ",f.description),t.a.createElement("div",null,"Time: ",f.timestamp.toString()))}))))};c.a.render(t.a.createElement(u,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.bc8dd534.chunk.js.map
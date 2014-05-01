var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fbc0b6db'),  // Monacoin: increase each by adding 2 to bitcoin's value
  addressVersion: 50,  // Monacoin: address start with M
  privKeyVersion: 178,
  P2SHVersion: 5,  // Monacoin: XXX
  hkeyPublicVersion: 0x0488b21e,  // Monacoin: XXX
  hkeyPrivateVersion: 0x0488ade4,  // Monacoin: XXX
  genesisBlock: {
    hash: hex('B68B8C410D2EA4AFD74FB56E370BFC1BEDF929E1453896C9E79DD116011C9FFF'),  // Monacoin: genesis hash
    merkle_root: hex('A64BAC07FE31877F31D03252953B3C32398933AF7A724119BC4D6FA4A805E435'),  // Monacoin: merkle root
    height: 0,
    nonce: 1234534,  // Monacoin: nonce
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1388479472,  // Monacoin: start at 2014/01/01
    bits: 504365040,  // Monacoin: difficulty bits
  },
  dnsSeeds: [
    'dnsseed.monacoin.org',
    'alice.monapool.net',
    'anipool.net',
    'www.cryptopoolmining.com',
    'fusa.gikopool.net',
    'gikopool.net',
    'mona.2chpool.com',
    'mona.xxpoolxx.net',
    'mona1.monapool.com',
    'mona2.monapool.com',
    'simplemona.com',
    'vippool.net',
    'hattenba.net'
  ],
  defaultClientPort: 9401  // Monacoin: default port
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};

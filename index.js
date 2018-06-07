'use strict';

var feathercore = module.exports;

// module information
feathercore.version = 'v' + require('./package.json').version;
feathercore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of feathercore-lib found. ' +
      'Please make sure to require feathercore-lib and check that submodules do' +
      ' not also include their own feathercore-lib dependency.';
    throw new Error(message);
  }
};
feathercore.versionGuard(global._feathercore);
global._feathercore = feathercore.version;

// crypto
feathercore.crypto = {};
feathercore.crypto.BN = require('./lib/crypto/bn');
feathercore.crypto.ECDSA = require('./lib/crypto/ecdsa');
feathercore.crypto.Hash = require('./lib/crypto/hash');
feathercore.crypto.Random = require('./lib/crypto/random');
feathercore.crypto.Point = require('./lib/crypto/point');
feathercore.crypto.Signature = require('./lib/crypto/signature');

// encoding
feathercore.encoding = {};
feathercore.encoding.Base58 = require('./lib/encoding/base58');
feathercore.encoding.Base58Check = require('./lib/encoding/base58check');
feathercore.encoding.BufferReader = require('./lib/encoding/bufferreader');
feathercore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
feathercore.encoding.Varint = require('./lib/encoding/varint');

// utilities
feathercore.util = {};
feathercore.util.buffer = require('./lib/util/buffer');
feathercore.util.js = require('./lib/util/js');
feathercore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
feathercore.errors = require('./lib/errors');

// main bitcoin library
feathercore.Address = require('./lib/address');
feathercore.Block = require('./lib/block');
feathercore.MerkleBlock = require('./lib/block/merkleblock');
feathercore.BlockHeader = require('./lib/block/blockheader');
feathercore.HDPrivateKey = require('./lib/hdprivatekey.js');
feathercore.HDPublicKey = require('./lib/hdpublickey.js');
feathercore.Networks = require('./lib/networks');
feathercore.Opcode = require('./lib/opcode');
feathercore.PrivateKey = require('./lib/privatekey');
feathercore.PublicKey = require('./lib/publickey');
feathercore.Script = require('./lib/script');
feathercore.Transaction = require('./lib/transaction');
feathercore.URI = require('./lib/uri');
feathercore.Unit = require('./lib/unit');

// dependencies, subject to change
feathercore.deps = {};
feathercore.deps.bnjs = require('bn.js');
feathercore.deps.bs58 = require('bs58');
feathercore.deps.Buffer = Buffer;
feathercore.deps.elliptic = require('elliptic');
feathercore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
feathercore.Transaction.sighash = require('./lib/transaction/sighash');

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UdjFnxCj-tNHz07lB4mToMXY6LMoiPAp',
      accounts: ['7809bb833381b48cbd72d61dcc0657bbf1bda31562ffbbc6797f3e5438ddcc47'],
    },
  },
};
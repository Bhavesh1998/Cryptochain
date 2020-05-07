const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('mynew')).toEqual('2e3f864e4939b36aa314d8d1a7fda7621738c093c2b349395fe3948ecdcfed72');
    });
    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    })
});
const { succeed, fail, repair, get } = require('./enhancer.js');

describe('enhancer.js', () => {
  describe('succeed()', () => {
    it('Increases enhancement by 1.', () => {
      const item = {
        name: 'Durable Shield',
        durability: 12,
        enhancement: 12
      };
      const expected = {
        name: 'Durable Shield',
        durability: 12,
        enhancement: 13
      };
      const itemSuccess = succeed(item);
      expect(itemSuccess).toEqual(expected);
    });
    it('Ignores enhancement increase if enhancement === 20.', () => {
      const item = {
        name: 'Durable Shield',
        durability: 12,
        enhancement: 20
      };
      const expected = {
        name: 'Durable Shield',
        durability: 12,
        enhancement: 20
      };
      const itemSuccess = succeed(item);
      expect(itemSuccess).toEqual(expected);
    });
  });
  describe('fail()', () => {
    it('Drops durability by 5 if enhancement is less than 15.', () => {
      const item = {
        name: 'Steel Glave',
        durability: 50,
        enhancement: 10
      };
      const expected = {
        name: 'Steel Glave',
        durability: 45,
        enhancement: 10
      };
      const itemFail = fail(item);
      expect(itemFail).toEqual(expected);
    });
    it('Drops durability by 10 if enhancement === 15, 16.', () => {
      const item = {
        name: 'Steel Glave',
        durability: 50,
        enhancement: 16
      };
      const expected = {
        name: 'Steel Glave',
        durability: 40,
        enhancement: 16
      };
      const itemFail = fail(item);
      expect(itemFail).toEqual(expected);
    });
    it('Drops durability by 10 and enhancement by 1 if enhancement is greater than 16.', () => {
      const item = {
        name: 'Steel Glave',
        durability: 50,
        enhancement: 19
      };
      const expected = {
        name: 'Steel Glave',
        durability: 40,
        enhancement: 18
      };
      const itemFail = fail(item);
      expect(itemFail).toEqual(expected);
    });
  });
  describe('repair()', () => {
    it('Rest item durability to 100.', () => {
      const item = {
        name: 'Iron Sword',
        durability: 35,
        enhancement: 10
      };
      const expected = {
        name: 'Iron Sword',
        durability: 100,
        enhancement: 10
      };
      const repairedItem = repair(item);
      expect(repairedItem).toEqual(expected);
    });
  });
  describe('get()', () => {
    it('Adds positive enhancement modifier to item.', () => {
      const item = {
        name: 'Mythril Toothpick',
        durability: 100,
        enhancement: 20
      };
      const expected = {
        name: '[+20]Mythril Toothpick',
        durability: 100,
        enhancement: 20
      };
      const itemStat = get(item);
      expect(itemStat).toEqual(expected);
    });
  });
});
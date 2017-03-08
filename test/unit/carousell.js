import carousell from '../../src/carousell';

describe('carousell', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(carousell, 'greet');
      carousell.greet();
    });

    it('should have been run once', () => {
      expect(carousell.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(carousell.greet).to.have.always.returned('hello');
    });
  });
});

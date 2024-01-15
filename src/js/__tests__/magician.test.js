import Magician from '../magician';

describe('Magician', () => {
  it('should get attack points and stoned status', () => {
    const magician = new Magician();
    expect(magician.attack).toEqual(100);
    expect(magician.stoned).toEqual(false);
  });

  it('should set new attack without stoned status', () => {
    const magician = new Magician();
    magician.attack = 2;
    expect(magician.attack).toEqual(90);
  });

  it('should set new attack with stoned status', () => {
    const magician = new Magician();
    magician.stoned = true;
    magician.attack = 2;
    expect(magician.attack).toEqual(85);
  });
});

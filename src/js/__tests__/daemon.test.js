import Daemon from '../daemon';

describe('Daemon', () => {
  it('should get attack points and stoned status', () => {
    const daemon = new Daemon();
    expect(daemon.attack).toEqual(100);
    expect(daemon.stoned).toEqual(false);
  });

  it('should set new attack without stoned status', () => {
    const daemon = new Daemon();
    daemon.attack = 2;
    expect(daemon.attack).toEqual(90);
  });

  it('should set new attack with stoned status', () => {
    const daemon = new Daemon();
    daemon.stoned = true;
    daemon.attack = 2;
    expect(daemon.attack).toEqual(85);
  });
});

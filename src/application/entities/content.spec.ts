import { Content } from './content';

describe('Notification Content', () => {
  it('it should be abale to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade.');

    expect(content).toBeTruthy();
  });

  it('it should not be abale to create a notification content with less than 5 characters', () => {
    expect(() => new Content('oi')).toThrow();
  });

  it('it should not be abale to create a notification content with more than 240 characters', () => {
    expect(() => new Content('oi'.repeat(241))).toThrow();
  });
});

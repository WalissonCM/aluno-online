
function mediaCA(nota) {
    if (nota >= 9.0 && nota <= 10) {
      return 'SS - Superior';
    } else if (nota >= 7.0 && nota < 9.0) {
      return 'MS - Médio Superior';
    } else if (nota >= 5.0 && nota < 7.0) {
      return 'MM - Médio';
    } else if (nota >= 3.0 && nota < 5.0) {
      return 'MI - Médio Inferior';
    } else if (nota >= 0.1 && nota < 3.0) {
      return 'II - Inferior';
    } else if (nota === 0.0) {
      return 'SR - Sem rendimento';
    } else {
      throw new Error('Nota inválida');
    }
  }
  
  
  describe('mediaCA', () => {
    test('retorna SS - Superior para nota entre 9.0 e 10', () => {
      expect(mediaCA(9.5)).toBe('SS - Superior');
    });
  
    test('retorna MS - Médio Superior para nota entre 7.0 e 8.9', () => {
      expect(mediaCA(8.2)).toBe('MS - Médio Superior');
    });
  
    test('retorna MM - Médio para nota entre 5.0 e 6.9', () => {
      expect(mediaCA(5.5)).toBe('MM - Médio');
    });
  
    test('retorna MI - Médio Inferior para nota entre 3.0 e 4.9', () => {
      expect(mediaCA(4.0)).toBe('MI - Médio Inferior');
    });
  
    test('retorna II - Inferior para nota entre 0.1 e 2.9', () => {
      expect(mediaCA(1.8)).toBe('II - Inferior');
    });
  
    test('retorna SR - Sem rendimento para nota 0.0', () => {
      expect(mediaCA(0.0)).toBe('SR - Sem rendimento');
    });
  
    test('lança um erro para nota inválida', () => {
      expect(() => mediaCA(-1)).toThrow('Nota inválida');
    });
  });
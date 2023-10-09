import {
  getWhereClauseBoolean,
  getWhereClauseNumber,
  getWhereClauseString,
} from './sql-query-helper';

describe('Where Clause STRING', () => {
  it('should return empty string if value is undefined', () => {
    const where = getWhereClauseString(undefined, 'descricao');
    expect(where).toBe('');
  });

  it('should return empty string if value has no length', () => {
    const where = getWhereClauseString('', 'descricao');
    expect(where).toBe('');
  });

  it('should return where string based on given value and tableColumn', () => {
    const where = getWhereClauseString('teste', 'descricao');
    expect(where).toBe(" AND descricao ILIKE('%teste%')");
  });
});

describe('Where Clause NUMBER', () => {
  it('should return empty string if value is undefined', () => {
    const where = getWhereClauseNumber(undefined, 'id');
    expect(where).toBe('');
  });

  it('should return where string based on given value and tableColumn', () => {
    const where = getWhereClauseNumber(3, 'id');
    expect(where).toBe(' AND id = 3');
  });
});

describe('Where Clause BOOLEAN', () => {
  it('should return empty string if value is undefined', () => {
    const where = getWhereClauseBoolean(undefined, 'ativo');
    expect(where).toBe('');
  });

  it('should return empty string if value is higher than 1', () => {
    const where = getWhereClauseBoolean(2, 'ativo');
    expect(where).toBe('');
  });

  it('should return where string based on given value and tableColumn', () => {
    const where = getWhereClauseBoolean(1, 'ativo');
    expect(where).toBe(' AND ativo = true');
  });
});

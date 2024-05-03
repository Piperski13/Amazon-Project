import { formatCurrency } from "../scripts/utils/money.js";

describe('case suite: formatCurrency',()=>{
  it('converts cents into dollars',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');
  })
})
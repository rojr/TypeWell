import {expect} from 'chai';
import {Reverser} from '../src';

describe('Reverser', () => {
    let reversingTool = new Reverser();

    it('It can reverse a word', () => {
        expect(reversingTool.reverseWord('Pie')).to.equal('eiP');
    });

    it('It can reverse a sentence', () => {
        expect(reversingTool.reverseWord('Pie is good for me')).to.equal('em rof doog si eiP');
    });
});
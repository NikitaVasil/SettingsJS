//import { chai } from 'chai';
//const {getSUM,getMAX} = require('./script');
import { getMAX, getSUM } from './script';
const expect = require('chai').expect;
//let chai = require('chai');
//let should = chai.should();
//let { getSUM, getMAX} = require('./script');

describe('Тестируем код', function () {

    it('Сравним два числа:', ()=>{
        let first = 15;
        let second = 15;

        expect(first).to.be.equal(second);
    });

    it('getSUM', function () {
        expect(getSUM(1, 2, 3,4,5)).to.be.equal(15);
        //getSUM(6,5).should.equal(11);
    });
    it('getMAX', function () {
        expect(getMAX(1, 2, 3, 4)).to.be.equal(4);
        //getMAX(1, 2, 7, 3).should.equal(7);
    });
});
const BirthdayService = require('../src/birthday.service');

describe('Birthday service', () => {
    beforeEach(() => {
        service = new BirthdayService();
    });
    it('Should throw error if argument is not valid', () => {
        return service.howLongToMyBirthday('string').catch(err => {
            expect(err).toEqual(new Error('Wrong argument!'));
        })
    });
    // it('should return value async'), () => {
    //     return service.howLongToMyBirthday(new Date(2021,05,04)).then(res => {
    //         expect(res).toBe('Hooray!!! It is today!');
    //         // expect( console.log.calledWith('Soon...Please, wait just 81 day/days')).to.be.true;
    //     });
    // };
    // it('should return value async'), async () => {
    //     dateUnderTest = new Date(2021,07,20);
    //     const res = await service.howLongToMyBirthday(dateUnderTest);
    //     expect(res).toBe('Soon...Please, wait just 77 day/days');
    // };
    // it('should call method congratulateWithBirthday'), async () => {
    //     spyOn(service, 'congratulateWithBirthday');
    //     let res = await service.howLongToMyBirthday(new Date(2021,05,04));
    //     expect(res.congratulateWithBirthday).toHaveBeenCalled();
    // };
});
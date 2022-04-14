const service = require("./converter.service");


describe('At converter.service', () => {

  describe('On Failure cases', () => {

    test("Should not allow to pass letter as input to numberToWords", () => {
      const serviceResult = service.numberToWords("invalidInput");
      expect(serviceResult).toBe("Invalid input. Must be a number");
    });
    test("Should not allow to pass a number bigger than 1000000000", () => {
      const serviceResult = service.numberToWords(1000000000);
      expect(serviceResult).toBe("Ops... Not implemented yet. Max accepted 999999999.99");
    });

    test("Should not allow to pass a number less than 0", () => {
      const serviceResult = service.numberToWords(-1);
      expect(serviceResult).toBe("Ops... Just accepted positive numbers");
    });
  });


  describe('On Success cases', () => {

    test("Should return the words including decimal part - 1.1", () => {
      const serviceResult = service.numberToWords(1.1);
      expect(serviceResult).toBe("One and 10/100 dollars");
    });
    test("Should return the words including decimal part - 98.98", () => {
      const serviceResult = service.numberToWords(98.98);
      expect(serviceResult).toBe("Ninety-eight and 98/100 dollars");
    });
    test("Should return the words including decimal part - 2523.04", () => {
      const serviceResult = service.numberToWords(2523.04);
      expect(serviceResult).toBe("Two thousand five hundred twenty-three and 04/100 dollars");
    });

    test("Should return the words without decimal part - 2523", () => {
      const serviceResult = service.numberToWords(2523);
      expect(serviceResult).toBe("Two thousand five hundred twenty-three dollars");
    });

    test("Should return the words without decimal part - 0", () => {
      const serviceResult = service.numberToWords(0);
      expect(serviceResult).toBe("Zero dollar");
    });
  });
});
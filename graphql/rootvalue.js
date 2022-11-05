const CarInformation = require("../data");

const rootValue = {
  hello: () => "hello me",
  car: (args, _) => CarInformation.find((v) => v.id === args.id),
  cars: () => CarInformation,
};

module.exports = rootValue;

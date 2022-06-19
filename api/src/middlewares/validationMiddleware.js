import Joi from "joi";

const adminRegistrationValication = (req, res, next) => {
  console.log(req.body);
  //first check if data is clean or not if it is not clear then response
  // from here with the error msg otherwise let express to continue exe code to the next middleware by calling next ()

  const schema = Joi.object({
    Fname: Joi.string().min(3).max(50),
    lName: Joi.string().min(3).max(50),
    Dob: Joi.string().min(3).max(50),
    email: Joi.string({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }).max(50),
    password: Joi.string().min(6).max(50),
    location: Joi.string().allow(""),
  });

  const result = schema.validate(req.body);

  clg.log(result);

  res.json({
    status: "error",
    message: "TODO invalid data",
  });
  next();
};

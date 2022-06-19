import express from "express";
const route = express.Router();

route.all("/", (req, res, next) => {
  //   console.log(
  //     "All the request of the api will go through this lne of code, do some validation check here is need before hitting the right method"
  //   );
  next();
});

route.post("/", (req, res) => {
  console.log(req.body);
  // 1. encrypt password

  console.time("hashing");

  const hashedPass = hashPassword(req.body.password);
  console.log(hashedPass);

  // 2. call model to run save query
  // 3. unique url endpoint and sent that to customer

  res.json({
    message: "todo",
  });
});

export default route;

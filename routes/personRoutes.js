const express = require("express");
const router = express.Router();

const Person = require("../models/Person");
const { Query } = require("mongoose");

// 1. To get the details (Post the forum) : This is person of POST
router.post("/", async (req, res) => {
  try {
    const data = req.body; // the data that the client(frontend) is sending to us is storing in body

    //   const newPerson = new Person();
    //   newPerson.name = data.name;
    //   newPerson.age = data.age;
    //   newPerson.work = data.work;
    //   newPerson.mobile = data.mobile;
    //   newPerson.email = data.email;
    //   newPerson.address = data.address;
    //   newPerson.salary = data.salary;

    // To avoid the above simply :-
    //async function: You declare a function as async to indicate that it will handle asynchronous operations.

    // await keyword: Inside an async function, you use the await keyword before an asynchronous operation (like a promise). This pauses the execution of the function until the promise is resolved.

    // Value Resolution: When the promise is resolved, the await expression returns the resolved value.
    const newPerson = new Person(data);

    // saving data
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "Internal server Error ": error });
  }
});

// 2. To show the data on the ui :: This is person of GET
router.get("/", async (req, res) => {
  try {
    // get the data from the Person Database
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error: ", error);
  }
});

// 3. Work type api : Parameterized work type
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType == "chef" ||
      workType == "SDE" ||
      workType == "manager" ||
      workType == "waiter"
    ) {
      const response = await Person.find({ work: workType });
      console.log("Response Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ "Invalid Work Type: ": error });
  }
});

// 4. Person Updates
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //his option tells Mongoose to return the updated document after the update. If it's set to false (the default), Mongoose will return the document before the update.

        runValidators: true, //  This ensures that Mongoose runs the validation rules defined in the schema (e.g., required fields, field types) when updating a document. If it's false, Mongoose will skip schema validation for the update.
      }
    );

    if (!response) {
      return res.status(404).json({ "Person not Found": error });
    }

    console.log("Data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "Internal Server Error": error });
  }
});

// 5. DELETE Query
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ "Person not Found": error });
    }

    console.log("Data Deleted");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "Internal Server Error": error });
  }
});

module.exports = router;

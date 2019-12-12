const express = require("express");
const router = express.Router();
const Model = require("../model/Note");

//get all notes
router.get("/", async (req, res) => {
  try {
    const resault = await Model.find();
    res.send(resault);
  } catch (error) {
    res.status(400).json({ message: "Error Occured", error: error });
  }
});

//add a new note
router.post("/", async (req, res) => {
  let newModel = new Model({
    noteName: req.body.noteName,
    noteText: req.body.noteText,
    importance: req.body.importance
  });
  try {
    await newModel.save().then(() => res.send("Successfuly saved"));
  } catch (error) {
    res.status(400).json({ message: "Error Occured", error: error });
  }
});
//delete a specific note
router.delete('/:id',async (req,res)=>{
  try {
    await Model.findByIdAndDelete(req.params.id).then(()=>res.send('Successfuly deleted'))
  } catch (error) {
    res.status(400).json({ message: "Error Occured", error: error });
  }
})

module.exports = router;

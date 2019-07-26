import React from "react";
import Button from "@material-ui/core/Button";
import { addItem } from "../actions/itemsActions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const NewItemForm= props => {
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = React.useState({})

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const handleSubmit = e => {
    e && e.preventDefault();
    props.addItem(inputs);
    //props.handleToggleBookForm();
    handleClose();
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div>
      <Button  color="inherit" onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Technology</DialogTitle>
        <DialogContent>
          <TextField
           onChange={handleInputChange}
           name="title"
           type="text"
           placholder="title"
           value={inputs.title}
           label="Name Of Technology"
           required
          />
          <TextField
          onChange={handleInputChange}
            autoFocus
            name="description"
            margin="dense" 
            label="Description...."
            type="textarea"
            value={inputs.description}
            fullWidth
          />
          <TextField
          onChange={handleInputChange}
            autoFocus
            name="author"
            margin="dense" 
            label="author"
            type="text"
            value={inputs.author}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default connect(
    undefined,
    { addItem }
  )(NewItemForm);
  
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";

// function MultistepDialog({ open, onClose, steps, initialStep }) {
//   const [activeStep, setActiveStep] = useState(initialStep);

//   const handleNext = () => setActiveStep(activeStep + 1);
//   const handleBack = () => setActiveStep(activeStep - 1);
//   const handleReset = () => setActiveStep(initialStep);

//   const currentStep = steps[activeStep];

//   return (
//     <Dialog
//       open={open}
//       onClose="false" //this works
//     >
//       <DialogTitle>{currentStep.title}</DialogTitle>
//       <DialogContent>{currentStep.content}</DialogContent>
//       <DialogActions>
//         {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
//         {activeStep < steps.length - 1 && (
//           <Button onClick={handleNext}>Next</Button>
//         )}
//         {activeStep === steps.length - 1 && (
//           <Button onClick={onClose}>Finish</Button>
//         )}
//         {activeStep > 0 && <Button onClick={handleReset}>Reset</Button>}
//       </DialogActions>
//     </Dialog>
//   );
// }

import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

function MultistepDialog({ open, onClose, steps, initialStep }) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => setActiveStep(activeStep - 1);
  const handleReset = () => setActiveStep(initialStep);

  const currentStep = steps[activeStep];

  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <TextField
            {...field}
            label={field.label}
            variant="outlined"
            fullWidth
          />
        );
      case "radio":
        return (
          <FormControl component="fieldset">
            <RadioGroup {...field}>
              {field.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case "select":
        return (
          <FormControl variant="outlined" fullWidth>
            <InputLabel>{field.label}</InputLabel>
            <Controller
              name={field.name}
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  {field.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        );
      case "file":
        return (
          <FormControl variant="outlined" fullWidth>
            <InputLabel>{field.label}</InputLabel>
            <Controller
              name={field.name}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="file"
                  onChange={(event) => field.onChange(event.target.files[0])}
                />
              )}
            />
          </FormControl>
        );
      default:
        return null;
    }
  };
  console.log("currentStep", currentStep);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      BackdropProps={{ onClick: handleBackdropClick }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{currentStep.title}</DialogTitle>
        <DialogContent>
          {currentStep.fields?.map((field) => (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              defaultValue={field.defaultValue || ""}
              render={({ field }) => renderField(field)}
            />
          ))}
        </DialogContent>
        <DialogActions>
          {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
          {activeStep < steps.length - 1 && <Button type="submit">Next</Button>}
          {activeStep === steps.length - 1 && (
            <Button type="submit">Finish</Button>
          )}
          {activeStep > 0 && <Button onClick={handleReset}>Reset</Button>}
        </DialogActions>
      </form>
    </Dialog>
  );
}
export default MultistepDialog;

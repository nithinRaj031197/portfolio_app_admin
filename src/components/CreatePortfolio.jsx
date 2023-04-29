import React from "react";
import useForm from "react-form-hooks";
import { TextField, Button, Typography, Container, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const EducationForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useForm({
    degree: "",
    branch: "",
    name: "",
    graduationDate: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" align="center" color="text.primary">
          Education Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="degree"
              name="degree"
              label="Degree"
              variant="outlined"
              value={values.degree}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.degree && touched.degree)}
              helperText={touched.degree && errors.degree}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="branch"
              name="branch"
              label="Branch"
              variant="outlined"
              value={values.branch}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.branch && touched.branch)}
              helperText={touched.branch && errors.branch}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.name && touched.name)}
              helperText={touched.name && errors.name}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="graduationDate"
              name="graduationDate"
              label="Graduation Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.graduationDate}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.graduationDate && touched.graduationDate)}
              helperText={touched.graduationDate && errors.graduationDate}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button fullWidth variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

const WorkExperienceForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useForm({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" align="center" color="text.primary">
          Work Experience Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="company"
              name="company"
              label="Company"
              variant="outlined"
              value={values.company}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.company && touched.company)}
              helperText={touched.company && errors.company}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="jobTitle"
              name="jobTitle"
              label="Job Title"
              variant="outlined"
              value={values.jobTitle}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.jobTitle && touched.jobTitle)}
              helperText={touched.jobTitle && errors.jobTitle}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="startDate"
              name="startDate"
              label="Start Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.startDate}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.startDate && touched.startDate)}
              helperText={touched.startDate && errors.startDate}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="endDate"
              name="endDate"
              label="End Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.endDate}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.endDate && touched.endDate)}
              helperText={touched.endDate && errors.endDate}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(errors.description && touched.description)}
              helperText={touched.description && errors.description}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button fullWidth variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

const SkillForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Skill Name"
        fullWidth
        margin="normal"
        {...register("name", { required: "Skill Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Proficiency</InputLabel>
        <Select {...register("proficiency", { required: "Proficiency is required" })} error={!!errors.proficiency}>
          <MenuItem value="beginner">Beginner</MenuItem>
          <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Skill
      </Button>
    </form>
  );
};

export default SkillForm;

const ProjectForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Project Name"
        fullWidth
        margin="normal"
        {...register("name", { required: "Project Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Project Description"
        fullWidth
        margin="normal"
        {...register("description", {
          required: "Project Description is required",
        })}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <TextField label="Project URL" fullWidth margin="normal" {...register("url")} />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Project
      </Button>
    </form>
  );
};

export { EducationForm };

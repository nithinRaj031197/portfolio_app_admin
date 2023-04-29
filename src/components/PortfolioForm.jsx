import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box, Typography, Container, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  education: yup.array().of(
    yup.object().shape({
      degree: yup.string().required(),
      branch: yup.string().required(),
      name: yup.string().required(),
      graduationDate: yup.date(),
    })
  ),
  workExperience: yup.array().of(
    yup.object().shape({
      company: yup.string().required(),
      jobTitle: yup.string().required(),
      startDate: yup.date().required(),
      endDate: yup.date().nullable(),
      description: yup.string().required(),
    })
  ),
  skills: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      proficiency: yup.string().required(),
    })
  ),
  projects: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      description: yup.string().required(),
      url: yup.string(),
    })
  ),
});

const PortfolioForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      education: [{ degree: "", branch: "", name: "", graduationDate: "" }],
      workExperience: [{ company: "", jobTitle: "", startDate: "", endDate: null, description: "" }],
      skills: [{ name: "", proficiency: "" }],
      projects: [{ name: "", description: "", url: "" }],
    },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: workExperienceFields,
    append: appendWorkExperience,
    remove: removeWorkExperience,
  } = useFieldArray({
    control,
    name: "workExperience",
  });

  const {
    fields: skillsFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const {
    fields: projectsFields,
    append: appendProjects,
    remove: removeProjects,
  } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = (data) => {
    setSubmitting(true);
    console.log(data);
    setSubmitting(false);
  };

  const handleAddEducationClick = () => {
    appendEducation({ degree: "", branch: "", name: "", graduationDate: "" });
  };

  const handleAddWorkExperienceClick = () => {
    appendWorkExperience({ company: "", jobTitle: "", startDate: "", endDate: null, description: "" });
  };

  const handleAddSkillClick = () => {
    appendSkill({ name: "", proficiency: "" });
  };

  const handleAddProjectsClick = () => {
    appendProjects({ name: "", description: "", url: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name")}
        label="Name"
        variant="outlined"
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name.message : ""}
      />
      <TextField
        {...register("email")}
        label="Email"
        variant="outlined"
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
      />
      <TextField
        {...register("phone")}
        label="Phone"
        variant="outlined"
        error={errors.phone ? true : false}
        helperText={errors.phone ? errors.phone.message : ""}
      />
      {/* Education fields */}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Education
        </Typography>
        {educationFields?.map((field, index) => (
          <Box key={field.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`education.${index}.degree`)}
                label="Degree"
                variant="outlined"
                error={errors.education && errors.education[index]?.degree ? true : false}
                helperText={errors.education && errors.education[index]?.degree?.message}
              />
            </Box>
            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`education.${index}.branch`)}
                label="Branch"
                variant="outlined"
                error={errors.education && errors.education[index]?.branch ? true : false}
                helperText={errors.education && errors.education[index]?.branch?.message}
              />
            </Box>
            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`education.${index}.name`)}
                label="Institution Name"
                variant="outlined"
                error={errors.education && errors.education[index]?.name ? true : false}
                helperText={errors.education && errors.education[index]?.name?.message}
              />
            </Box>
            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`education.${index}.graduationDate`)}
                label="Graduation Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                error={errors.education && errors.education[index]?.graduationDate ? true : false}
                helperText={errors.education && errors.education[index]?.graduationDate?.message}
              />
            </Box>
            <Button variant="outlined" color="error" onClick={() => removeEducation(index)}>
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="outlined" onClick={handleAddEducationClick}>
          Add Education
        </Button>
      </Box>

      {/*Work Experience*/}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Work Experience
        </Typography>
        {workExperienceFields?.map((field, index) => (
          <Box key={field.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`workExperience.${index}.company`)}
                label="Company"
                variant="outlined"
                error={errors.workExperience && errors.workExperience[index]?.company ? true : false}
                helperText={errors.workExperience && errors.workExperience[index]?.company?.message}
              />
            </Box>

            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`workExperience.${index}.description`)}
                label="Description"
                variant="outlined"
                error={errors.workExperience && errors.workExperience[index]?.description ? true : false}
                helperText={errors.workExperience && errors.workExperience[index]?.description?.message}
              />
            </Box>

            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`workExperience.${index}.jobTitle`)}
                label="Job Title"
                variant="outlined"
                error={errors.workExperience && errors.workExperience[index]?.jobTitle ? true : false}
                helperText={errors.workExperience && errors.workExperience[index]?.jobTitle?.message}
              />
            </Box>

            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`workExperience.${index}.startDate`)}
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                error={errors.workExperience && errors.workExperience[index]?.startDate ? true : false}
                helperText={errors.workExperience && errors.workExperience[index]?.startDate?.message}
              />
            </Box>

            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`workExperience.${index}.endDate`)}
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                error={errors.workExperience && errors.workExperience[index]?.endDate ? true : false}
                helperText={errors.workExperience && errors.workExperience[index]?.endDate?.message}
              />
            </Box>

            <Button variant="outlined" color="error" onClick={() => removeWorkExperience(index)}>
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="outlined" onClick={handleAddWorkExperienceClick}>
          Add Work Experience
        </Button>
      </Box>
      {/*Skills*/}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Skills
        </Typography>
        {skillsFields?.map((field, index) => (
          <Box key={field.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`skills.${index}.name`)}
                label="Name"
                variant="outlined"
                error={errors.skills && errors.skills[index]?.name ? true : false}
                helperText={errors.skills && errors.skills[index]?.name?.message}
              />
            </Box>

            <Box sx={{ mr: 2, minWidth: 120 }}>
              <Controller
                name={`skills.${index}.proficiency`}
                control={control}
                defaultValue="beginner" // Default value set to "beginner"
                rules={{ validate: (value) => schema.validateSync({ proficiency: value }) }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormControl fullWidth sx={{ width: "100%" }} margin="normal" error={!!errors.skills?.[index]?.proficiency}>
                    <InputLabel sx={{ mb: 10 }}>Proficiency</InputLabel>
                    <Select value={value} onChange={onChange} onBlur={onBlur}>
                      <MenuItem value="beginner">Beginner</MenuItem>
                      <MenuItem value="intermediate">Intermediate</MenuItem>
                      <MenuItem value="advanced">Advanced</MenuItem>
                    </Select>
                    <FormHelperText sx={{ color: "red" }}>{errors.skills?.[index]?.proficiency?.message}</FormHelperText>
                  </FormControl>
                )}
              />
            </Box>
            <Button variant="outlined" color="error" onClick={() => removeSkill(index)}>
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="outlined" onClick={handleAddSkillClick}>
          Add Skill
        </Button>
      </Box>
      {/*Projects*/}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Projects
        </Typography>

        {projectsFields?.map((field, index) => (
          <Box key={field.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`projects.${index}.name`)}
                label="Name"
                variant="outlined"
                error={errors.projects && errors.projects[index]?.name ? true : false}
                helperText={errors.projects && errors.projects[index]?.name?.message}
              />
            </Box>

            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`projects.${index}.description`)}
                label="Description"
                variant="outlined"
                error={errors.projects && errors.projects[index]?.description ? true : false}
                helperText={errors.projects && errors.projects[index]?.description?.message}
              />
            </Box>

            <Box sx={{ mr: 2 }}>
              <TextField
                {...register(`projects.${index}.url`)}
                label="URL"
                variant="outlined"
                error={errors.projects && errors.projects[index]?.url ? true : false}
                helperText={errors.projects && errors.projects[index]?.url?.message}
              />
            </Box>
            <Button variant="outlined" color="error" onClick={() => removeProjects(index)}>
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="outlined" onClick={handleAddProjectsClick}>
          Add Projects
        </Button>
      </Box>
      {/* Submit button */}
      <Button type="submit" variant="contained" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};
export default PortfolioForm;

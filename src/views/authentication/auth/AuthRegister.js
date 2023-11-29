import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormBuilder, Input, Select } from 'src/components/forms/FormBuilder';
import { register } from 'src/services/query/user';
import { toast } from 'react-toastify';

const AuthRegister = ({ title, subtitle, subtext }) => {
  const [hasCode, setHasCode] = React.useState(false);

 
  const handleSubmit = async (data) => {
        try {
      let resigterInfo;
      if(!hasCode) 
        resigterInfo= {...data,referral_code:null};
      else 
         resigterInfo = data;
      // const res = await register(resigterInfo);
      // console.log(res);
      console.log(resigterInfo);
    } catch (error) {
      toast.error('User creation failed!');
    } finally {
    }
  };
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <FormBuilder onSubmit={handleSubmit}>
        {(register, errors, { control }) => {
          return (
            <>
              <div className="row mt-3">
                <Input
                  name="first_name"
                  errors={errors}
                  required={true}
                  register={register}
                  class_name="col-12"
                  label={'First Name'}
                />
                <Input
                  name="last_name"
                  errors={errors}
                  required={true}
                  register={register}
                  class_name="col-12"
                  label={'Last Name'}
                />
                <Input
                  name="username"
                  errors={errors}
                  required={true}
                  register={register}
                  class_name="col-12"
                  label={'Username'}
                />
                <Input
                  name="email_address"
                  errors={errors}
                  required={true}
                  register={register}
                  class_name="col-12"
                  label={'Email'}
                />
                <Input
                  name="password"
                  type="password"
                  register={register}
                  errors={errors}
                  required={true}
                  class_name="col-12"
                  label={'Password'}
                />
                <Input
                  name="batch_number"
                  register={register}
                  errors={errors}
                  required={true}
                  class_name="col-12"
                  label={'Batch'}
                />
                <Select
                  name="sex"
                  control={control}
                  errors={errors}
                  required={true}
                  class_name="col-12"
                  label={'Gender'}
                  options={[
                    { name: 'Male', value: 'M' },
                    { name: 'Female', value: 'F' },
                  ]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked={hasCode} onChange={() =>setHasCode(!hasCode) } />}
                  label="I have a Referral Code"
                  class_name="col-12"
                  style={{ marginBottom: '10px' }}
                />
                {hasCode && <Input
                  name="referral_code"
                  register={register}
                  errors={errors}
                  required={hasCode}
                  className="col-12"
                  label={'Code'}
                  disabled={!hasCode}
                />}
                <Box>
                  <Button color="primary" variant="contained" size="large" fullWidth type="submit">
                    Register
                  </Button>
                </Box>
              </div>
            </>
          );
        }}
      </FormBuilder>
      {subtitle}
    </>
  );
};

export default AuthRegister;
